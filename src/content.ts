export const SITE = 'https://harborlinesystems.ltd';
export const BRAND = 'Harborline Systems';
// Legal company name. Confirm the CAC certificate has been issued before deploying this name publicly.
export const LEGAL_NAME = 'Harborline Systems Limited';
export const GITHUB_URL = 'https://github.com/Quayyum-a/Harborline-Systems';
export const EMAIL = 'hello@harborlinesystems.ltd';

const mailto = (subject: string, body: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const agencyMail = mailto(
  'White label engineering partnership | Harborline Systems',
  `Hello Harborline Systems,\n\nI am interested in exploring your white label engineering service.\n\nAgency name:\nWebsite:\nType of projects:\nCurrent engineering requirement:\nPreferred plan:\n\nI would like to discuss the paid pilot and next steps.`,
);

export const businessMail = mailto(
  'Software and AI project enquiry | Harborline Systems',
  `Hello Harborline Systems,\n\nI am looking for help solving a business or technology problem.\n\nCompany:\nWebsite:\nWhat we are trying to achieve:\nThe problem we are experiencing:\nPreferred timeline:\n\nI would like to discuss the best approach.`,
);

export const agencyPlans = [
  { slug: 'paid-pilot', name: 'Paid pilot', price: '$750', cadence: 'once', detail: 'Two weeks, up to 30 hours', note: 'One real task from your backlog to evaluate communication, code quality and delivery.' },
  { slug: 'half-seat', name: 'Half seat', price: '$2,000', cadence: 'per month', detail: 'Up to 80 hours, one task at a time', note: 'A measured way to cover occasional overflow with a dedicated engineering partner.' },
  { slug: 'full-seat', name: 'Full seat', price: '$3,500', cadence: 'per month', detail: 'Up to 160 hours, two tasks in parallel', note: 'Consistent delivery capacity for a steady pipeline of work.' },
] as const;

export const businessPlans = [
  { slug: 'automation-audit', name: 'Automation audit', price: '$200', cadence: '', detail: 'One 60 minute call and a written list of the three strongest automation opportunities.', action: 'Book an audit' },
  { slug: 'single-robot-build', name: 'Single robot build', price: '$600 to $1,500', cadence: 'once', detail: 'One workflow designed, built, tested and handed over. Final pricing depends on scope and integrations.', action: 'Discuss a workflow' },
  { slug: 'care-plan', name: 'Care plan', price: '$300 to $800', cadence: 'per month', detail: 'Monitoring, troubleshooting, fixes, one small change each month and a monthly report.', action: 'Ask about care' },
  { slug: 'automation-partner', name: 'Automation partner', price: '$1,500 to $2,000', cadence: 'per month', detail: 'Everything in Care plus up to 20 hours of new automation development each month.', action: 'Discuss a partnership' },
] as const;

export const checkoutOffers = {
  'paid-pilot': { name: 'Paid pilot', price: '$750', cadence: 'once', detail: 'Two weeks, up to 30 hours', note: 'One real task from your backlog to evaluate communication, code quality and delivery.' },
  'half-seat': { name: 'Half seat', price: '$2,000', cadence: 'per month', detail: 'Up to 80 hours, one task at a time', note: 'A measured way to cover occasional overflow with a dedicated engineering partner.' },
  'full-seat': { name: 'Full seat', price: '$3,500', cadence: 'per month', detail: 'Up to 160 hours, two tasks in parallel', note: 'Consistent delivery capacity for a steady pipeline of work.' },
  'automation-audit': { name: 'Automation audit', price: '$200', cadence: 'one time', detail: 'One 60 minute call and a written list of the three strongest automation opportunities.', note: 'The audit is not booked or charged through this placeholder.' },
  'single-robot-build': { name: 'Single robot build', price: '$600 to $1,500', cadence: 'scope-dependent', detail: 'One workflow designed, built, tested and handed over.', note: 'Final pricing depends on scope and integrations; this range is not a payable quote.' },
  'care-plan': { name: 'Care plan', price: '$300 to $800', cadence: 'per month', detail: 'Monitoring, troubleshooting, fixes, one small change each month and a monthly report.', note: 'The final monthly scope and price are agreed before any engagement.' },
  'automation-partner': { name: 'Automation partner', price: '$1,500 to $2,000', cadence: 'per month', detail: 'Care plan coverage plus up to 20 hours of new automation development each month.', note: 'The final monthly scope and price are agreed before any engagement.' },
} as const;

export const services = [
  { title: 'AI and intelligent systems', lead: 'Make knowledge easier to use.', detail: 'AI assistants, document search, knowledge retrieval and AI features for teams with information trapped in documents, inboxes or products.', tags: ['AI assistants', 'Document search', 'Knowledge retrieval'] },
  { title: 'Automation and integrations', lead: 'Connect the work between tools.', detail: 'Business workflows, WhatsApp automation, CRM integrations, payment connections and messaging flows that keep operations moving.', tags: ['Business workflows', 'WhatsApp automation', 'CRM and payments'] },
  { title: 'Applications and digital products', lead: 'Turn the next idea into something usable.', detail: 'Customer portals, mobile apps, SaaS products, dashboards and management systems built around a real outcome.', tags: ['Web applications', 'Mobile applications', 'SaaS and dashboards'] },
  { title: 'Backend and infrastructure', lead: 'Give the product a dependable core.', detail: 'APIs, databases, authentication, business logic and third party integrations for products that need a clean foundation.', tags: ['APIs', 'Databases', 'Authentication'] },
  { title: 'Engineering support', lead: 'Keep good software moving forward.', detail: 'Maintenance, code audits, bug fixing, performance work, upgrades and overflow engineering capacity.', tags: ['Maintenance', 'Code audits', 'Modernization'] },
] as const;

export const industries = [
  ['Financial services', 'Payment integrations, transaction workflows and application backends.'],
  ['Logistics', 'Order updates and connected operational systems.'],
  ['Ecommerce', 'Orders, inventory, payments and customer notifications.'],
  ['Real estate', 'Property platforms, booking systems and lead workflows.'],
  ['SaaS', 'Product features, integrations and AI capabilities.'],
  ['Professional services', 'Clearer, repeatable client and internal workflows.'],
  ['Retail', 'Better visibility across sales, operations and customer data.'],
  ['Education', 'Portals, management tools and useful automation.'],
  ['Agencies', 'Confidential white label delivery capacity.'],
] as const;

export const technologies = ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'React', 'Next.js', 'React Native', 'Supabase', 'PostgreSQL', 'MongoDB'];

export const faqs = [
  ['What does Harborline Systems do?', 'Harborline Systems is a software and AI engineering partner. We help agencies deliver client work through confidential white label engineering, and help businesses build, improve, automate and maintain digital systems.'],
  ['Do you work with agencies?', 'Yes. Agency delivery is our primary offer. Harborline can work behind your brand, within your repository and workflow.'],
  ['What does white label development mean?', 'Harborline works as an extension of your delivery team without presenting itself to your end client. You keep the relationship while we handle the agreed engineering work.'],
  ['Will you contact my agency clients?', 'No. We do not contact your clients unless you explicitly authorize it.'],
  ['Can I hire Harborline directly?', 'Yes. Companies, founders and operational teams can approach Harborline directly for software, AI, integrations, automation, maintenance and modernization.'],
  ['What technologies do you use?', 'Node.js, NestJS, Java, Spring Boot, React, Next.js, React Native, Supabase, PostgreSQL, MongoDB, APIs, integrations and AI features.'],
  ['How much does development cost?', 'Agency capacity has clear US dollar pricing: a $750 paid pilot, $2,000 per month Half seat or $3,500 per month Full seat. Direct business work starts with a $200 automation audit or a written quotation.'],
  ['Do you offer monthly engineering subscriptions?', 'Yes. Agencies can purchase a Half seat or Full seat. Direct clients can choose a Care plan or Automation partner plan when ongoing support fits.'],
  ['Can you build AI automations?', 'Yes. We build AI assistants, document search, knowledge retrieval, AI product features and workflows that connect AI with existing systems.'],
  ['Do you sign NDAs?', 'Yes. An NDA is available on request.'],
  ['Do you work with international companies?', 'Yes. Harborline is based in Lagos, Nigeria, UTC+1, with overlap with European business hours and US East Coast mornings.'],
  ['How do I start?', 'Choose the path that fits, or explain the business problem in plain English. You do not need to know the technical solution first.'],
] as const;

export const processStages = [
  { name: 'The request', title: 'Start with the real situation.', description: 'Tell us what is slowing delivery or operations down. A working description is enough; you do not need a technical specification.', artifact: 'The need', detail: 'Who is doing the work and where it gets stuck' },
  { name: 'The scope', title: 'Agree on the useful next step.', description: 'Harborline frames an approach, timeline and price in writing. Work starts after the scope is understood and agreed.', artifact: 'The written scope', detail: 'Outcome, boundaries, timeline and price' },
  { name: 'The engineering', title: 'Build with the right amount of structure.', description: 'The work follows the agreed workflow, with practical updates and decisions as implementation moves forward.', artifact: 'A tested build', detail: 'Working software, automation or integration' },
  { name: 'The handover', title: 'Know what happens next.', description: 'Receive the agreed delivery, source code and documentation so the result has a clear next step.', artifact: 'The handover', detail: 'Delivery, code and useful documentation' },
] as const;

export type PortfolioLink = { label: string; href: string };
export type PortfolioProject = {
  slug: string; path: string; title: string; category: string; status: string; cardLead: string;
  lede: string; audience: string; audienceNote: string; problem: string; objective: string;
  stack: readonly string[]; architecture: readonly string[]; decisions: readonly string[];
  implementation: string; limitations: readonly string[]; future: readonly string[];
  image: string; imageAlt: string; imageWidth: number; imageHeight: number; imageCaption: string; demo?: PortfolioLink;
  repositories: readonly PortfolioLink[];
};

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    slug: 'papyr', path: '/work/papyr', title: 'Papyr', category: 'Digital ledger · Prototype',
    status: 'Prototype · core workspace needs further validation',
    cardLead: 'A digital ledger that tries to keep the familiarity of writing by hand.',
    lede: 'Papyr explores how people who keep records in paper books could move to a searchable digital workspace without losing the feel of writing. The repository contains a Next.js application, book-management screens and a layered ledger canvas.',
    audience: 'People and small-business operators who prefer paper books for routine records.',
    audienceNote: 'This audience is the product brief’s hypothesis; the personas and success thresholds in the repository are plans, not verified customer research or outcomes.',
    problem: 'Paper records can be difficult to search, back up and reach across devices. A digital replacement must make those benefits available without making everyday writing feel foreign.',
    objective: 'Organize books and pages in a digital workspace while keeping handwriting as the intended primary interaction.',
    stack: ['Next.js 14', 'React', 'TypeScript', 'Supabase'],
    architecture: ['Next.js application and authenticated routes', 'React book and ledger workspace', 'Separate paper, grid and ink canvas layers', 'Supabase authentication and book data'],
    decisions: [
      'Paper, grid and ink are drawn on separate canvas layers so each visual surface can be initialized and redrawn independently.',
      'Canvas setup uses the container’s measured dimensions, device-pixel-ratio scaling and a ResizeObserver; the repository’s older issue register still records a zero-dimension regression, so this path has not been certified here.',
      'The ink hook builds strokes through a dedicated renderer and keeps history snapshots for undo and redo rather than treating each stroke as an unrelated image.',
    ],
    implementation: 'The current book list fetches records for the signed-in user and provides search, recent filtering, create and delete flows. In the inspected source, the displayed page count is still set to zero as a TODO rather than queried from the pages table.',
    limitations: [
      'The public deployment exposes the entry and sign-up experience; this review did not create an account or inspect a signed-in ledger workspace.',
      'The repository’s KNOWN_ISSUES.md (last updated 2026-08-16) lists a critical blank-canvas sizing regression, mobile workspace rendering issues, and handwriting recognition and recognized-text persistence as unfinished. These dated issues were not reproduced or re-tested in this task.',
      'The MVP document’s latency, adoption and usability figures are targets, not measured results. No user adoption or performance outcome is claimed here.',
    ],
    future: ['Reproduce and close the canvas-sizing and mobile-layout issues on current devices.', 'Complete and test recognition-to-cell persistence before presenting recognition as a feature.', 'Add an authenticated, non-production demo with safe sample records and a documented reset path.'],
    image: '/images/projects/papyr-signup.png', imageAlt: 'Papyr’s public sign-up page alongside a sample ledger preview, captured from the live deployment.', imageWidth: 1440, imageHeight: 1100,
    imageCaption: 'Live public sign-up screen, captured 3 November 2026. The pictured ledger panel is part of that screen; no account was created and the signed-in workspace was not accessed.',
    demo: { label: 'Open Papyr’s public sign-up screen', href: 'https://papyr-app-mu.vercel.app/auth/signup' },
    repositories: [
      { label: 'Papyr source repository', href: 'https://github.com/Quayyum-a/Papyr' },
      { label: 'Canvas lifecycle source', href: 'https://github.com/Quayyum-a/Papyr/blob/main/src/components/ledger-workspace/useLedgerCanvas.ts' },
      { label: 'Ink and history source', href: 'https://github.com/Quayyum-a/Papyr/blob/main/src/hooks/useInkEngine.ts' },
    ],
  },
  {
    slug: 'splitcore', path: '/work/splitcore', title: 'Splitcore', category: 'QR tipping and settlement · Work in progress',
    status: 'Work in progress · hosted sign-in verified; money movement not exercised',
    cardLead: 'A QR-led guest flow backed by explicit split rules and auditable settlement logic.',
    lede: 'Splitcore is a product for venues and entertainers: guests can reach a human-facing tipping experience from a QR code while venue teams have a separate management surface. The public repositories contain a Next.js frontend and a NestJS backend with payment, webhook, ledger and payout modules.',
    audience: 'Guests who want to tip; venue teams managing entertainers, QR codes and split rules.',
    audienceNote: 'These are the product roles described by the repositories, not verified customers, venues or adoption.',
    problem: 'A QR code that opens raw API data is not a usable guest experience. Once a payment is introduced, the system also needs a defensible way to verify settlement and account for each share.',
    objective: 'Separate the guest-facing QR route from the venue dashboard and keep payment verification, split calculations and ledger posting on explicit backend paths.',
    stack: ['Next.js App Router', 'NestJS', 'TypeScript', 'Prisma / PostgreSQL', 'Redis / BullMQ', 'Paystack provider interface'],
    architecture: ['Guest and venue surfaces in a server-rendered Next.js frontend', 'NestJS API with role-scoped routes', 'Prisma/PostgreSQL persistence and immutable ledger entries', 'Redis/BullMQ for asynchronous webhook and payout work'],
    decisions: [
      'The ledger uses positive integer kobo, validates split basis points, and checks that debits equal credits before returning a posting.',
      'The settlement service re-verifies payment status, amount, currency and the stored split snapshot; a single database transaction conditionally claims settlement and writes ledger and payout obligations.',
      'Webhook payloads are not treated as payment truth: stored events route into settlement, which verifies with the provider. Duplicate or concurrent settlement attempts do not double-post.',
    ],
    implementation: 'The source separates pure ledger calculation from persistence and payment-provider access. The hosted frontend currently exposes a venue sign-in screen; the private dashboard, guest QR flow and payment paths were not exercised during this review.',
    limitations: [
      'No sign-in was attempted and no QR-token endpoint was called; the latter can create a guest session.',
      'No payment provider, webhook, test card, payout or production database was contacted. Repository completion notes and service documentation are not independent proof of current production readiness.',
      'The backend’s integration guide requires a configured database, queue and provider test environment; those integrations were not run as part of this website work.',
    ],
    future: ['Add a sandbox-only, non-settling walkthrough that can be reset and that never reaches live payment services.', 'Recheck deployment and backend contract status with a controlled test environment before describing live money movement.', 'Add visible operational evidence for retries, reconciliation and manual review paths.'],
    image: '/images/projects/splitcore-sign-in.png', imageAlt: 'Splitcore’s hosted venue sign-in screen, with no credentials entered.', imageWidth: 1440, imageHeight: 1100,
    imageCaption: 'Hosted venue sign-in screen, captured 3 November 2026. No credentials were entered; the signed-in dashboard and any guest or payment route were not opened.',
    demo: { label: 'Open the hosted Splitcore sign-in screen', href: 'https://splitcore-app.netlify.app/login' },
    repositories: [
      { label: 'Splitcore backend', href: 'https://github.com/Quayyum-a/Splitcore' },
      { label: 'Splitcore frontend', href: 'https://github.com/Quayyum-a/Splitcore-frontend' },
      { label: 'Payment settlement source', href: 'https://github.com/Quayyum-a/Splitcore/blob/main/src/payments/payment-settlement.service.ts' },
      { label: 'Double-entry ledger source', href: 'https://github.com/Quayyum-a/Splitcore/blob/main/src/ledger/ledger.service.ts' },
      { label: 'Webhook event source', href: 'https://github.com/Quayyum-a/Splitcore/blob/main/src/webhooks/webhook-event-handler.service.ts' },
    ],
  },
];

export const metadata: Record<string, { title: string; description: string }> = {
  '/': { title: 'Harborline Systems | Software and AI Engineering Company', description: 'Harborline Systems is a software and AI engineering company in Lagos, Nigeria. White label engineering for agencies. Practical software, AI and automation for businesses.' },
  '/agencies': { title: 'Agency engineering capacity | Harborline Systems', description: 'Confidential white label engineering for agencies. Start with a $750 paid pilot, or choose a Half seat or Full seat for ongoing delivery capacity.' },
  '/businesses': { title: 'Business software and automation | Harborline Systems', description: 'Describe the operational problem. Harborline builds practical software, AI and automation. Start with an audit, a robot build or a written custom quote.' },
  '/services': { title: 'Software and AI engineering services | Harborline Systems', description: 'Explore Harborline Systems capabilities in software, AI, automation, integrations, applications, backend infrastructure and engineering support.' },
  '/how-it-works': { title: 'How projects work with Harborline | Harborline Systems', description: 'A clear path from problem to written scope, engineering and handover. See how to start an agency partnership or a direct business project.' },
  '/about': { title: 'About Harborline Systems | Software and AI engineering company', description: 'Harborline Systems Limited is a software and AI engineering company in Lagos, Nigeria. Learn who it works with, how it works and the problems it helps solve.' },
  '/work': { title: 'Engineering work | Harborline Systems', description: 'Explore Harborline Systems product and engineering case studies, with implementation details, current status, limitations and future improvements.' },
  '/work/papyr': { title: 'Papyr | Engineering case study | Harborline Systems', description: 'Engineering case study for Papyr, a digital handwritten-ledger prototype. Inspect its Next.js, React, TypeScript and Supabase approach, public entry screenshot, documented blockers and next steps.' },
  '/work/splitcore': { title: 'Splitcore | Engineering case study | Harborline Systems', description: 'Engineering case study for Splitcore, a QR-led tipping and settlement product. Review its integer-kobo ledger, verified settlement path, hosted entry screenshot, limitations and next steps.' },
  '/checkout': { title: 'Payment coming soon | Harborline Systems', description: 'Online checkout is not available yet. Review the selected Harborline offer and price; card details are not collected and no payment is processed.' },
  '/guides/white-label-software-development': { title: 'White label software development explained | Harborline Systems', description: 'What white label software development means, why agencies use it, what to agree before work starts and when it is not the right fit.' },
  '/guides/choosing-a-software-development-partner': { title: 'How to choose a software development partner | Harborline Systems', description: 'A practical checklist for choosing a software development partner: define the problem, check evidence, compare scopes, plan communication and handover.' },
};

export const routes = ['/', '/agencies', '/businesses', '/services', '/how-it-works', '/about', '/work', '/work/papyr', '/work/splitcore', '/checkout', '/guides/white-label-software-development', '/guides/choosing-a-software-development-partner'] as const;

export const knowsAbout = ['Software engineering', 'White label software development', 'Custom software development', 'Web application development', 'Mobile application development', 'Backend engineering', 'AI engineering', 'Business process automation', 'API development and integrations', 'Engineering support and maintenance'];

export const aboutProblems = [
  ['Manual work repeats each day.', 'Automate handoffs, notifications and updates.'],
  ['Tools do not communicate.', 'Connect systems with APIs and practical integrations.'],
  ['A product needs another capability.', 'Build a useful web or mobile experience, or an AI feature.'],
  ['Existing software needs attention.', 'Audit, fix, maintain or modernize the codebase.'],
] as const;

export type GuideSection = { heading: string; paragraphs?: readonly string[]; list?: readonly string[]; after?: string };
export type Guide = { path: string; title: string; eyebrow: string; h1: string; lede: string; published: string; sections: readonly GuideSection[]; faqs: readonly (readonly [string, string])[] };

export const guides: readonly Guide[] = [
  {
    path: '/guides/white-label-software-development',
    title: 'White label software development explained',
    eyebrow: 'Guide for agencies',
    h1: 'White label software development, <em>explained for agencies.</em>',
    lede: 'White label software development means one company does the engineering work and another delivers it to its own client under its own name. This guide covers how the model works, what to agree before you start, and when it fits.',
    published: '2026-11-01',
    sections: [
      { heading: 'What white label development means', paragraphs: [
        'In a white label arrangement, an engineering partner does the technical work behind the scenes. The agency keeps the client relationship, presents the work as part of its own delivery, and stays responsible for the result the client sees. The partner does not market itself to the agency\'s client and does not contact them unless the agency asks.',
        'It is different from reselling a finished product with a new logo. White label engineering is custom work: features, integrations, backends, mobile apps or automation built to fit a specific project.',
      ] },
      { heading: 'Why agencies use it', list: [
        'Extra capacity when the in house team is full.',
        'Skills the agency does not employ full time, such as backend engineering, mobile development or AI features.',
        'A way to say yes to client work without hiring ahead of demand.',
        'A monthly arrangement that can grow or shrink with the pipeline.',
      ] },
      { heading: 'What to agree before work starts', paragraphs: ['Most problems in white label work come from unclear expectations rather than poor engineering. Settle these points in writing first.'], list: [
        'Scope: what is being built and what is not.',
        'Access: which repository, tools and communication channels the partner will use.',
        'Confidentiality: whether an NDA is needed and how the partner may refer to the work.',
        'Ownership: who owns the code and documentation on delivery.',
        'Communication: who the partner talks to, how often, and what counts as an update.',
        'Hours and pricing: how many hours are included and what happens if more are needed.',
      ] },
      { heading: 'When it is not the right fit', paragraphs: ['White label work suits well defined tasks inside an existing workflow. It is a weaker fit when an agency needs product strategy, a design created from scratch, or a partner to manage the end client directly. In those cases a different kind of agreement works better.'] },
      { heading: 'How a small first project helps', paragraphs: ['A short paid pilot is a practical way to test a new partner on a real task before committing to a monthly arrangement. It shows how the partner communicates, how clean the code is and whether work arrives when promised.', 'Harborline Systems offers a two week paid pilot of up to 30 hours for agencies. The terms, plans and working agreement are on the <a href="/agencies">agency partnership page</a>.'] },
    ],
    faqs: [
      ['Is white label development the same as outsourcing?', 'White label development is a form of outsourcing where the partner stays out of sight of the end client. General outsourcing may involve the client dealing with the vendor directly.'],
      ['Who owns the code in a white label project?', 'That should be written into your agreement. Many agencies expect to own the delivered code and documentation, but the terms depend on the contract you agree with your partner.'],
      ['Can a white label partner work inside our repository?', 'Yes, and many agencies prefer it. Working in your repository and workflow keeps code history, reviews and deployment under your control.'],
    ],
  },
  {
    path: '/guides/choosing-a-software-development-partner',
    title: 'How to choose a software development partner',
    eyebrow: 'Guide for businesses',
    h1: 'How to choose a <em>software development partner.</em>',
    lede: 'Choosing who builds your software is one of the most important decisions a business makes. This checklist focuses on questions you can answer before you sign anything.',
    published: '2026-11-01',
    sections: [
      { heading: 'Start with the problem, not the technology', paragraphs: ['Write down what is slowing the business down, who is affected and what a good result would look like. A partner can only quote accurately when the problem is clear. It also makes proposals easier to compare, because every partner is answering the same question.'] },
      { heading: 'Look for evidence that fits your problem', paragraphs: ['Ask for examples of similar work and for the specific part the team played. A clear explanation of a past problem and how it was solved is more useful than a long list of logos or vague claims.'], list: [
        'Have you built something close to this before, and what did you learn?',
        'Which technologies would you use here, and why?',
        'Who will actually do the work?',
      ] },
      { heading: 'Compare scopes, not just prices', paragraphs: ['Two quotes with different prices often describe different work. Check what each one includes: testing, documentation, deployment, handover and a period of fixes after delivery. A written scope with an agreed outcome, timeline and price protects both sides.'] },
      { heading: 'Check how they communicate', paragraphs: ['You will spend more time talking to your partner than reading their code. Find out who your contact is, how quickly they reply, how often you will see progress and which working hours overlap with yours. Time zone differences are manageable when expectations are set early.'] },
      { heading: 'Plan the handover and what happens after', paragraphs: ['Software needs care after launch. Ask who owns the source code, whether documentation is included and what support exists for bugs and small changes. A partner that plans the handover at the start is easier to keep, or to leave, when the project ends.'] },
      { heading: 'Warning signs', list: [
        'Pressure to sign before the scope is written down.',
        'No clear answer on who owns the code.',
        'Firm promises about results that depend on things outside their control.',
        'Unwillingness to start with a small, paid first task.',
      ] },
      { heading: 'How Harborline Systems approaches it', paragraphs: ['Harborline Systems starts with a conversation about the real situation, agrees a written scope, builds, and hands over the agreed delivery with source code and documentation. You can read the full sequence on the <a href="/how-it-works">how it works page</a>, or start with a $200 automation audit described on the <a href="/businesses">business solutions page</a>.'] },
    ],
    faqs: [
      ['Should I choose the cheapest quote?', 'Not automatically. Compare what each quote includes, and weigh the price against the clarity of the scope, the partner\'s communication and the plan for handover.'],
      ['Is it better to hire a developer or work with a partner?', 'It depends on how steady the work is. A full time hire suits constant, long term needs. A partner suits project work, specialist skills or changing demand.'],
      ['What should a software proposal include?', 'At minimum: the problem being solved, what will be delivered, what is excluded, the timeline, the price and what you receive at handover.'],
    ],
  },
];
