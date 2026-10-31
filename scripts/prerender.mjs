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
const routes = ['/', '/agencies', '/businesses', '/services', '/how-it-works'];
const site = 'https://harborlinesystems.ltd';
const esc = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const organization = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': ['Organization', 'ProfessionalService'], '@id': `${site}/#organization`, name: 'Harborline Systems', url: `${site}/`, email: 'hello@harborlinesystems.ltd', description: 'A software and AI engineering partner helping agencies and businesses build, improve, automate and maintain digital systems.', address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' } },
    { '@type': 'WebSite', '@id': `${site}/#website`, url: `${site}/`, name: 'Harborline Systems', publisher: { '@id': `${site}/#organization` } },
  ],
};

for (const route of routes) {
  const { title, description } = pages.getMetadata(route);
  const body = pages.renderPage(route);
  const canonical = `${site}${route === '/' ? '/' : route}`;
  const structured = structuredClone(organization);
  structured['@graph'].push({ '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: title, description, isPartOf: { '@id': `${site}/#website` } });
  if (route === '/how-it-works') {
    structured['@graph'].push({ '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: pages.getFaqs().map(([name, answer]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  }
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f4f1e8">
  <meta name="description" content="${esc(description)}">
  <meta name="keywords" content="software engineering, white label engineering, AI automation, business software, Lagos Nigeria">
  <link rel="canonical" href="${esc(canonical)}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/src/styles.css">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Harborline Systems">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(canonical)}">
  <meta property="og:image" content="${site}/og-image.svg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${site}/og-image.svg">
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
