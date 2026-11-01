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
const esc = (value) => value.replaceAll('&', '&').replaceAll('"', '"').replaceAll('<', '<').replaceAll('>', '>');

const servicesData = [
  { name: 'AI and intelligent systems', description: 'AI assistants, document search, knowledge retrieval and AI features for teams with information trapped in documents, inboxes or products.' },
  { name: 'Automation and integrations', description: 'Business workflows, WhatsApp automation, CRM integrations, payment connections and messaging flows that keep operations moving.' },
  { name: 'Applications and digital products', description: 'Customer portals, mobile apps, SaaS products, dashboards and management systems built around a real outcome.' },
  { name: 'Backend and infrastructure', description: 'APIs, databases, authentication, business logic and third party integrations for products that need a clean foundation.' },
  { name: 'Engineering support', description: 'Maintenance, code audits, bug fixing, performance work, upgrades and overflow engineering capacity.' },
];

const organization = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${site}/#organization`,
      name: 'Harborline Systems',
      legalName: 'Harborline Systems Limited',
      url: `${site}/`,
      logo: `${site}/favicon.svg`,
      email: 'hello@harborlinesystems.ltd',
      description: 'A software and AI engineering partner helping agencies and businesses build, improve, automate and maintain digital systems.',
      address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
      areaServed: { '@type': 'Country', name: 'Nigeria' },
      knowsAbout: [
        'Software engineering',
        'White-label development',
        'AI engineering',
        'Business process automation',
        'Web application development',
        'Mobile application development',
        'Backend engineering',
        'API development',
        'Technical product development',
        'Engineering support',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      url: `${site}/`,
      name: 'Harborline Systems',
      alternateName: 'Harborline Systems Limited',
      publisher: { '@id': `${site}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${site}/services?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

for (const route of routes) {
  const { title, description } = pages.getMetadata(route);
  const body = pages.renderPage(route);
  const canonical = `${site}${route === '/' ? '/' : route}`;
  const structured = structuredClone(organization);

  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` },
  ];

  if (route !== '/') {
    const routeName = route.split('/').pop() || route;
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: routeName.charAt(0).toUpperCase() + routeName.slice(1).replace(/-/g, ' '),
      item: canonical,
    });
  }

  structured['@graph'].push(
    { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: title, description, isPartOf: { '@id': `${site}/#website` } },
    { '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: breadcrumbItems },
  );

  if (route === '/services') {
    servicesData.forEach((service, index) => {
      structured['@graph'].push({
        '@type': 'Service',
        '@id': `${canonical}#service-${index + 1}`,
        name: service.name,
        description: service.description,
        provider: { '@id': `${site}/#organization` },
        serviceType: service.name,
        areaServed: { '@type': 'Country', name: 'Nigeria' },
      });
    });
  }

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
  <meta name="google-site-verification" content="WYcCIBXPndtFN1SFAGP8aJ0JVTA7Riy0z-jdJyfgmbE">
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