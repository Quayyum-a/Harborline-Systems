import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = process.cwd();
const temporary = path.join(root, '.prerender');
await mkdir(temporary, { recursive: true });
for (const source of ['content.ts', 'pages.ts']) {
  const sourceText = await readFile(path.join(root, 'src', source), 'utf8');
  const compiled = ts.transpileModule(sourceText, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022, moduleResolution: ts.ModuleResolutionKind.Bundler },
    fileName: source,
  }).outputText.replace(/from\s+(['"]\.\/content)['"]/g, "from './content.js'");
  await writeFile(path.join(temporary, source.replace('.ts', '.js')), compiled);
}
const pages = await import(`${pathToFileURL(path.join(temporary, 'pages.js')).href}?v=${Date.now()}`);
const content = await import(`${pathToFileURL(path.join(temporary, 'content.js')).href}?v=${Date.now()}`);
const { SITE: site, BRAND, LEGAL_NAME, GITHUB_URL, EMAIL, routes, guides, services, knowsAbout } = content;
const esc = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const plain = (value) => value.replace(/<[^>]+>/g, '');
const orgId = `${site}/#organization`;
const ogImage = `${site}/og-image.png`;

const organization = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': orgId,
  name: BRAND,
  legalName: LEGAL_NAME,
  alternateName: ['Harborline Systems Ltd'],
  url: `${site}/`,
  logo: { '@type': 'ImageObject', '@id': `${site}/#logo`, url: `${site}/logo.png`, width: 512, height: 512 },
  image: ogImage,
  email: EMAIL,
  description: 'A software and AI engineering company helping digital agencies and businesses design, build, improve, automate and maintain digital systems.',
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  knowsAbout,
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: EMAIL },
  sameAs: [GITHUB_URL],
};
const website = { '@type': 'WebSite', '@id': `${site}/#website`, url: `${site}/`, name: BRAND, alternateName: [LEGAL_NAME], inLanguage: 'en', publisher: { '@id': orgId } };

const service = (id, name, description, url, serviceType) => ({ '@type': 'Service', '@id': `${site}${id}`, name, description, serviceType, url: `${site}${url}`, provider: { '@id': orgId } });
const routeServices = {
  '/agencies': [service('/agencies#service', 'White label engineering for agencies', 'Confidential white label software engineering delivered behind the agency brand, inside the agency repository and workflow.', '/agencies', 'White label software engineering')],
  '/businesses': [service('/businesses#service', 'Software, AI and automation for businesses', 'Practical software, AI features and business automation shaped around an operational problem.', '/businesses', 'Custom software and automation')],
  '/services': services.map((entry, i) => service(`/services#service-${i + 1}`, entry.title, entry.detail, '/services', entry.title)),
};

const crumbs = (route, title) => {
  if (route === '/') return null;
  const items = [{ name: 'Home', url: `${site}/` }];
  if (route.startsWith('/guides/')) items.push({ name: 'Guides', url: `${site}${route}` });
  items.push({ name: route.startsWith('/guides/') ? title.split(' | ')[0] : title.split(' | ')[0], url: `${site}${route}` });
  return { '@type': 'BreadcrumbList', '@id': `${site}${route}#breadcrumb`, itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: item.url })) };
};

const faqNode = (canonical, entries) => ({ '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: entries.map(([name, answer]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text: plain(answer) } })) });

for (const route of routes) {
  const { title, description } = pages.getMetadata(route);
  const body = pages.renderPage(route);
  const canonical = `${site}${route}`;
  const guide = guides.find((entry) => entry.path === route);
  const graph = [structuredClone(organization), structuredClone(website)];
  const pageNode = { '@type': route === '/about' ? 'AboutPage' : 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: 'en', isPartOf: { '@id': `${site}/#website` }, about: { '@id': orgId }, primaryImageOfPage: { '@type': 'ImageObject', url: ogImage } };
  graph.push(pageNode);
  const breadcrumb = crumbs(route, title);
  if (breadcrumb) { graph.push(breadcrumb); pageNode.breadcrumb = { '@id': breadcrumb['@id'] }; }
  if (routeServices[route]) graph.push(...routeServices[route]);
  if (route === '/how-it-works') graph.push(faqNode(canonical, pages.getFaqs()));
  if (guide) {
    graph.push({ '@type': 'Article', '@id': `${canonical}#article`, headline: guide.title, description, datePublished: guide.published, dateModified: guide.published, inLanguage: 'en', image: ogImage, mainEntityOfPage: { '@id': `${canonical}#webpage` }, author: { '@id': orgId }, publisher: { '@id': orgId } });
    graph.push(faqNode(canonical, guide.faqs));
  }
  const structured = { '@context': 'https://schema.org', '@graph': graph };
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f4f1e8">
  <meta name="google-site-verification" content="WYcCIBXPndtFN1SFAGP8aJ0JVTA7Riy0z-jdJyfgmbE">
${route === '/' ? '  <meta name="msvalidate.01" content="8BC99A1F41780B26A06BFAC8D204CE5A" />\n' : ''}  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="keywords" content="software engineering, white label engineering, AI automation, business software, Lagos Nigeria">
  <link rel="canonical" href="${esc(canonical)}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/src/styles.css">
  <meta property="og:type" content="${guide ? 'article' : 'website'}">
  <meta property="og:site_name" content="${BRAND}">
  <meta property="og:locale" content="en_NG">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(canonical)}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${BRAND}: software and AI engineering, Lagos, Nigeria">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${ogImage}">
  <title>${esc(title)}</title>
  <script type="application/ld+json">${JSON.stringify(structured)}</script>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <div id="app">${body}</div>
  <script type="module" src="/src/main.ts"></script>
</body>
</html>
`;
  const destination = route === '/' ? path.join(root, 'index.html') : path.join(root, route.slice(1), 'index.html');
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html);
  console.log(`Rendered ${route} to ${path.relative(root, destination)}`);
}
