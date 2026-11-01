// Dependency free SEO checks. Run after `npm run build`: npm run verify:seo
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const site = 'https://harborlinesystems.ltd';
let failures = 0;
const pass = (message) => console.log(`  ok   ${message}`);
const fail = (message) => { failures += 1; console.log(`  FAIL ${message}`); };
const check = (condition, message) => (condition ? pass(message) : fail(message));
const exists = async (file) => access(file).then(() => true, () => false);

const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`Sitemap: ${locs.length} URLs`);
check(new Set(locs).size === locs.length, 'sitemap has no duplicate URLs');
check(locs.every((url) => url.startsWith(`${site}/`)), 'sitemap URLs are absolute HTTPS on the canonical host');

const robots = await readFile(path.join(dist, 'robots.txt'), 'utf8');
console.log('Robots');
check(/Sitemap:\s*https:\/\/harborlinesystems\.ltd\/sitemap\.xml/.test(robots), 'robots.txt declares the sitemap');
check(/User-agent:\s*OAI-SearchBot\s*\n\s*Allow:\s*\//.test(robots), 'robots.txt explicitly allows OAI-SearchBot');
check(!/Disallow:\s*\/\s*$/m.test(robots), 'robots.txt does not block the whole site');
check(!/User-agent:\s*GPTBot/i.test(robots), 'robots.txt does not configure GPTBot (training stays a separate decision)');

const titles = new Map();
const descriptions = new Map();
const knownIds = new Set();
const pageHtml = {};

for (const url of locs) {
  const route = url.slice(site.length) || '/';
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html');
  console.log(`Page ${route}`);
  if (!(await exists(file))) { fail(`${route} has a built HTML file`); continue; }
  const html = await readFile(file, 'utf8');
  pageHtml[route] = html;

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1]);
  check(Boolean(title) && title.length <= 80, `title present and at most 80 characters (${title?.length})`);
  check(Boolean(description) && description.length >= 70 && description.length <= 200, `description present, 70 to 200 characters (${description?.length})`);
  check(canonicals.length === 1 && canonicals[0] === url, `exactly one canonical equal to ${url}`);
  check(!titles.has(title), 'title is unique'); titles.set(title, route);
  check(!descriptions.has(description), 'description is unique'); descriptions.set(description, route);
  check(/<meta property="og:image" content="https:\/\/harborlinesystems\.ltd\/og-image\.png"/.test(html), 'og:image points to the PNG share image');

  const body = html.replace(/<script[\s\S]*?<\/script>/g, '');
  const headings = [...body.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  check(headings.filter((n) => n === 1).length === 1, 'exactly one H1');
  check(headings.every((n, i) => i === 0 || n - headings[i - 1] <= 1), 'heading levels never skip downward');
  const images = [...body.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  check(images.every((tag) => /\balt="[^"]+"/.test(tag) && /\bwidth=/.test(tag) && /\bheight=/.test(tag)), `all ${images.length} images have alt text and dimensions`);

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  let graph = [];
  try { graph = blocks.flatMap((block) => JSON.parse(block)['@graph'] ?? []); pass(`JSON-LD parses (${graph.length} entities)`); } catch (error) { fail(`JSON-LD parses: ${error.message}`); }
  graph.forEach((node) => node['@id'] && knownIds.add(node['@id']));
  // An object with an @id and other keys defines an entity; an object with only @id is a reference.
  const defined = [];
  const referenced = [];
  const walk = (value) => {
    if (Array.isArray(value)) return value.forEach(walk);
    if (value && typeof value === 'object') {
      if ('@id' in value) (Object.keys(value).length > 1 ? defined : referenced).push(value['@id']);
      Object.values(value).forEach(walk);
    }
  };
  walk(graph);
  check(new Set(defined).size === defined.length, 'no duplicate @id definitions inside the page graph');
  const missing = [...new Set(referenced)].filter((id) => !defined.includes(id));
  check(missing.length === 0, `every @id reference resolves${missing.length ? ` (missing ${missing.join(', ')})` : ''}`);
  const org = graph.find((node) => node['@id'] === `${site}/#organization`);
  check(org?.legalName && org?.name && org?.url === `${site}/`, 'Organization has name, legalName and url');
  check(!/placeholder|lorem|example\.com|TODO/i.test(JSON.stringify(graph)), 'no placeholder text in structured data');

  const hrefs = [...body.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((m) => m[1]);
  const broken = [];
  for (const href of hrefs) {
    if (/^(mailto:|https?:|#)/.test(href)) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean) continue;
    const candidates = [path.join(dist, clean, 'index.html'), path.join(dist, clean)];
    if (!(await exists(candidates[0])) && !(await exists(candidates[1]))) broken.push(href);
  }
  check(broken.length === 0, `${hrefs.length} links checked, internal links resolve${broken.length ? ` (broken: ${broken.join(', ')})` : ''}`);
  const srcs = [...body.matchAll(/<img\b[^>]*\bsrc="(\/[^"]+)"/g)].map((m) => m[1]);
  for (const src of srcs) check(await exists(path.join(dist, src)), `image file exists ${src}`);
}

console.log('Assets');
for (const file of ['og-image.png', 'logo.png', 'favicon.ico', 'favicon-192.png', 'apple-touch-icon.png', 'llms.txt']) check(await exists(path.join(dist, file)), `${file} is published`);

console.log(failures ? `\n${failures} check(s) failed` : '\nAll SEO checks passed');
process.exit(failures ? 1 : 0);
