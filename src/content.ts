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
  { name: 'Paid pilot', price: '$750', cadence: 'once', detail: 'Two weeks, up to 30 hours', note: 'One real task from your backlog to evaluate communication, code quality and delivery.' },
  { name: 'Half seat', price: '$2,000', cadence: 'per month', detail: 'Up to 80 hours, one task at a time', note: 'A measured way to cover occasional overflow with a dedicated engineering partner.' },
  { name: 'Full seat', price: '$3,500', cadence: 'per month', detail: 'Up to 160 hours, two tasks in parallel', note: 'Consistent delivery capacity for a steady pipeline of work.' },
] as const;

export const businessPlans = [
  { name: 'Automation audit', price: '$200', cadence: '', detail: 'One 60 minute call and a written list of the three strongest automation opportunities.', action: 'Book an audit' },
  { name: 'Single robot build', price: '$600 to $1,500', cadence: 'once', detail: 'One workflow designed, built, tested and handed over. Final pricing depends on scope and integrations.', action: 'Discuss a workflow' },
  { name: 'Care plan', price: '$300 to $800', cadence: 'per month', detail: 'Monitoring, troubleshooting, fixes, one small change each month and a monthly report.', action: 'Ask about care' },
  { name: 'Automation partner', price: '$1,500 to $2,000', cadence: 'per month', detail: 'Everything in Care plus up to 20 hours of new automation development each month.', action: 'Discuss a partnership' },
] as const;

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

export const metadata: Record<string, { title: string; description: string }> = {
  '/': { title: 'Harborline Systems | Software and AI Engineering Company', description: 'Harborline Systems is a software and AI engineering company in Lagos, Nigeria. White label engineering for agencies. Practical software, AI and automation for businesses.' },
  '/agencies': { title: 'Agency engineering capacity | Harborline Systems', description: 'Confidential white label engineering for agencies. Start with a $750 paid pilot, or choose a Half seat or Full seat for ongoing delivery capacity.' },
  '/businesses': { title: 'Business software and automation | Harborline Systems', description: 'Describe the operational problem. Harborline builds practical software, AI and automation. Start with an audit, a robot build or a written custom quote.' },
  '/services': { title: 'Software and AI engineering services | Harborline Systems', description: 'Explore Harborline Systems capabilities in software, AI, automation, integrations, applications, backend infrastructure and engineering support.' },
  '/how-it-works': { title: 'How projects work with Harborline | Harborline Systems', description: 'A clear path from problem to written scope, engineering and handover. See how to start an agency partnership or a direct business project.' },
  '/about': { title: 'About Harborline Systems | Software and AI engineering company', description: 'Harborline Systems Limited is a software and AI engineering company in Lagos, Nigeria. Learn who it works with, how it works and the problems it helps solve.' },
  '/guides/white-label-software-development': { title: 'White label software development explained | Harborline Systems', description: 'What white label software development means, why agencies use it, what to agree before work starts and when it is not the right fit.' },
  '/guides/choosing-a-software-development-partner': { title: 'How to choose a software development partner | Harborline Systems', description: 'A practical checklist for choosing a software development partner: define the problem, check evidence, compare scopes, plan communication and handover.' },
  '/work': { title: 'Engineering work | Harborline Systems', description: 'Engineering case studies from Harborline Systems: Splitcore, a payments and ledger backend, and Papyr, a handwritten digital ledger. Each states what exists and what does not.' },
  '/work/splitcore': { title: 'Splitcore case study: payments and ledger backend | Harborline Systems', description: 'How a NestJS backend splits tips between entertainers, venues and a platform, with a double entry ledger, verified webhooks and reconciliation. A prototype tested in Paystack test mode.' },
  '/work/papyr': { title: 'Papyr case study: handwritten digital ledger | Harborline Systems', description: 'How a Next.js and Supabase prototype turns handwriting on a ledger grid into structured records, with a custom ink engine. A work in progress with a live demo.' },
};

export const routes = ['/', '/agencies', '/businesses', '/services', '/how-it-works', '/about', '/guides/white-label-software-development', '/guides/choosing-a-software-development-partner', '/work', '/work/splitcore', '/work/papyr'] as const;

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


export type CaseStudy = {
  path: string; name: string; status: string; kind: string; stack: readonly string[];
  h1: string; lede: string; card: string;
  facts: readonly (readonly [string, string])[];
  overview: readonly string[]; problem: readonly string[]; objectives: readonly string[];
  architecture: { intro: string; parts: readonly (readonly [string, string])[] };
  decisions: readonly (readonly [string, string])[];
  implementation: readonly (readonly [string, string])[];
  demonstration: { intro: string; links: readonly (readonly [string, string, string])[]; note: string };
  limitations: readonly string[]; future: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    path: '/work/splitcore',
    name: 'Splitcore',
    status: 'Prototype backend, tested in Paystack test mode',
    kind: 'Payments and ledger backend',
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Paystack', 'Docker', 'GitHub Actions'],
    h1: 'Splitcore: moving money between people, <em>with a record that adds up.</em>',
    lede: 'A backend that accepts a tip from a guest, divides it between an entertainer, a venue and a platform, records every movement in a double entry ledger and prepares the payout. It is a working prototype, not a live payments business.',
    card: 'A NestJS backend that splits payments between entertainers, venues and a platform, and proves the books balance.',
    facts: [['Status', 'Prototype, test mode only'], ['Type', 'Backend API and worker'], ['Built with', 'NestJS, PostgreSQL, Redis, Paystack'], ['Source', 'Public GitHub repository']],
    overview: [
      'Splitcore is a NestJS backend for digital tipping and split payments in Nigerian hospitality venues. A guest pays through a hosted Paystack checkout without creating an account. The platform then divides the money between the entertainer, the venue and the platform according to an agreed rule, records the result in a ledger and queues a payout to the entertainer.',
      'It is an API and a background worker. It has no guest or admin interface yet, so there are no screenshots. What can be inspected is the code, the database schema, the migrations, the continuous integration pipeline and a written definition of done audit that records what was and was not verified.',
    ],
    problem: [
      'When money moves between several parties, the hard part is not taking the payment. It is knowing, afterwards and with confidence, who is owed what, proving that nothing was lost or counted twice, and paying people the right amount.',
      'Tips given to entertainers at venues are a clear example. The shares are negotiated, the amounts are small and frequent, and the people involved need to trust the arithmetic. Splitcore was built to explore a system where the split is agreed in advance, applied the same way every time and recorded so that it can be audited.',
    ],
    objectives: [
      'Let a guest pay without registering, starting from a QR code.',
      'Divide every payment by an explicit rule, in whole units of the smallest currency, with no rounding drift.',
      'Record every movement so that debits always equal credits, and make past records impossible to alter.',
      'Treat payment provider webhooks as untrusted, repeatable messages.',
      'Pay out only to entertainers whose identity and bank account have been checked.',
      'Notice when the internal books and the payment provider disagree.',
    ],
    architecture: {
      intro: 'The system is split into an API process and a worker process that share a PostgreSQL database and a Redis queue. The API stays fast. Anything slow or retryable happens in the worker.',
      parts: [
        ['API service', 'A NestJS application organised into modules for authentication, venues, entertainers, QR codes, guest sessions, split rules, payments, ledger, payouts, webhooks, reconciliation and health.'],
        ['Worker service', 'A separate process that consumes BullMQ jobs: it handles webhook events, creates ledger entries and triggers payouts, so a slow provider never blocks a request.'],
        ['PostgreSQL with Prisma', 'Fifteen models, eight enums and nine migrations. Database constraints and triggers enforce the rules that must never be broken, in addition to the application code.'],
        ['Redis and BullMQ', 'Queue storage for background jobs and rate limiting. The application is tested with Redis both enabled and disabled.'],
        ['Provider interfaces', 'Payments and payouts sit behind interfaces. Paystack is the first implementation, so changing provider does not mean rewriting the domain.'],
        ['Delivery', 'Docker for local services, a Render deployment definition, Sentry for error tracking and a GitHub Actions pipeline.'],
      ],
    },
    decisions: [
      ['Money is stored as whole kobo and shares as basis points', 'Floating point numbers cannot be trusted with money. Amounts are integers and splits are expressed out of 10,000. When a split does not divide evenly, the platform absorbs the remainder so the parties never receive more than was paid.'],
      ['The ledger arithmetic is pure, and the database checks it again', 'The code that turns a payment into ledger entries has no database access, which makes it simple to test exhaustively. The database then independently refuses unbalanced postings and refuses to update or delete any entry, so a bug in the application cannot quietly corrupt history.'],
      ['Webhooks are verified, stored, deduplicated and queued', 'The signature is checked against the raw request body. The event is stored, checked for a previous delivery and handed to the queue, and the endpoint answers quickly so the provider does not keep retrying. Processing the same event twice has no extra effect.'],
      ['Split rules need the entertainer’s agreement', 'A venue can propose a split, but it only takes effect once the entertainer agrees. The platform’s own share is fixed and can only be changed by an administrator. Every change is written to an audit table that also cannot be edited.'],
      ['Secure by default', 'Every route requires authentication unless it is explicitly marked public. Logs automatically redact passwords, identity numbers and authorisation headers. The application refuses to start if its configuration is missing or malformed.'],
      ['Reconciliation alerts instead of blocking', 'An hourly job compares the internal clearing account with the provider’s balance and logs any drift. It does not stop payments, because a monitoring fault should not halt the business.'],
      ['Payout size is a deliberate choice', 'Payouts are made per tip and kept under a threshold chosen to avoid a bank stamp duty charge on larger transfers, and only for verified entertainers.'],
    ],
    implementation: [
      ['Ledger accounts', 'Six account types: guest pending, entertainer, venue, platform revenue, platform fees and processor clearing. Every posting is a set of debit and credit entries that must sum to zero.'],
      ['Integrity in SQL', 'Check constraints keep amounts positive and platform fees within range. Triggers reject updates and deletes on ledger entries and on split rule audit events, and assert that postings balance.'],
      ['Idempotent payouts', 'Before creating a transfer the payout service checks whether one already exists, and ledger entries are written even while a payout is pending, so balances stay correct if a transfer is slow.'],
      ['Tests', 'The repository contains 72 specification files covering unit tests and end to end tests for authentication, guests, QR codes, split rules, payments, queues, security middleware and error handling.'],
      ['Continuous integration', 'The pipeline installs dependencies, generates the Prisma client, lints, builds, applies migrations and runs unit and end to end tests against real PostgreSQL and Redis service containers.'],
    ],
    demonstration: {
      intro: 'Splitcore is a backend, so the honest demonstration is the source and its evidence rather than a user interface.',
      links: [
        ['Source repository', 'https://github.com/Quayyum-a/Splitcore', 'Code, migrations, tests and architecture notes'],
      ],
      note: 'The repository includes architecture documents and a written audit that separates what was verified against a running deployment from what was only built. A live walkthrough can be arranged on request.',
    },
    limitations: [
      'This is a prototype. It has processed no real money and has no customers.',
      'Payments and payouts have only been exercised in the payment provider’s test mode. Live mode behaviour, including transfer limits, has not been verified.',
      'There is no administrator interface and no guest or entertainer front end yet.',
      'Production alerting has not been confirmed to fire end to end.',
      'The tests have not been re run as part of preparing this page. The pipeline definition and test files are reported as they exist in the repository.',
    ],
    future: [
      'An administrator surface for the ledger, payouts and reconciliation reports.',
      'Guest and entertainer interfaces on top of the existing API.',
      'Live mode verification, load testing and confirmed alerting before any real transactions.',
      'A notification channel for payout and split rule events.',
    ],
  },
  {
    path: '/work/papyr',
    name: 'Papyr',
    status: 'Work in progress with a live demo',
    kind: 'Handwritten digital ledger',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Canvas 2D', 'Vitest'],
    h1: 'Papyr: a ledger you write by hand, <em>stored as structured data.</em>',
    lede: 'A web application that keeps the feel of writing in a paper ledger while storing each handwritten entry in a labelled cell. It is a work in progress, and this page says which parts work and which do not.',
    card: 'A handwritten ledger on a canvas grid, with a custom ink engine and cell based records.',
    facts: [['Status', 'Work in progress'], ['Type', 'Web application'], ['Built with', 'Next.js, React, Supabase, Canvas 2D'], ['Demo', 'Live on Vercel']],
    overview: [
      'Papyr is a web application for people who keep their accounts in a paper ledger and do not want to change how they work. The user writes with a finger or a stylus on a ruled page. Each stroke belongs to a cell, so what is written is organised into rows and columns instead of being a picture of a page.',
      'The project includes authentication, ledger books with page management, a custom ink rendering engine, a three layer ledger canvas, column management and cloud persistence. Handwriting recognition is partly built and is described below.',
    ],
    problem: [
      'Many small businesses still keep records in paper ledgers. Paper is familiar and fast, but it is easy to lose, impossible to search and hard to back up. Most digital alternatives ask the owner to type into forms or spreadsheets, which changes the habit that made the ledger work in the first place.',
      'Papyr starts from the opposite assumption: keep the writing, and add structure underneath it.',
    ],
    objectives: [
      'Make writing on a screen feel immediate and natural, with no visible delay.',
      'Organise handwriting into a ruled grid with editable columns.',
      'Save pages automatically and securely per user.',
      'Convert handwritten cells into text so records can be searched and totalled.',
    ],
    architecture: {
      intro: 'A Next.js application renders the interface and a small set of server routes, and Supabase provides authentication and the database.',
      parts: [
        ['Application', 'Next.js 14 with React 18 and TypeScript, styled with Tailwind CSS. Pages cover sign up, sign in, password reset, a book shelf dashboard and the ledger workspace.'],
        ['Ink engine', 'A custom Canvas 2D engine that turns pointer input into smoothed, tapered strokes. It is a separate library from the interface components.'],
        ['Ledger workspace', 'Three stacked layers: a paper layer, a grid layer and an ink layer, with HTML overlays for editable column headers and cell selection.'],
        ['Persistence', 'Supabase PostgreSQL stores books, pages and strokes. Saves are debounced so the writer is never interrupted.'],
        ['Recognition route', 'A server route accepts the strokes of one cell, checks the signed in user, and sends them to a handwriting recognition service.'],
      ],
    },
    decisions: [
      ['A custom ink engine instead of a drawing library', 'Writing quality decides whether people accept a digital ledger. The engine uses curve smoothing that preserves personal handwriting, simulates pressure from stroke speed when no stylus is present, renders on an animation frame loop and keeps the cost of the current stroke constant.'],
      ['Strokes belong to cells', 'The original design was a free canvas for note taking. When the product became a ledger, the model changed so every stroke carries a cell identifier. The change was recorded as a decision and kept backward compatible, which is what makes structured data possible later.'],
      ['Three canvas layers', 'Paper, grid and ink are separate, so the paper texture and grid are drawn once and only the ink layer changes while someone writes.'],
      ['Recognition happens per cell, after a pause', 'A session manager groups strokes into segments and waits for a pause before asking for recognition, so the service is not called on every stroke and the writer is not interrupted.'],
      ['Authentication is checked on the server', 'The recognition route verifies the signed in user and ownership of the book, page and cell before it accepts any strokes.'],
    ],
    implementation: [
      ['Stroke model', 'Each stroke stores bezier segments with width and pressure at both ends, a creation time, bounds and an optional cell identifier.'],
      ['Session manager', 'A tested class that collects strokes, groups them with a stroke grouper and emits events when a segment or a whole writing session is ready for recognition.'],
      ['Column management', 'Columns can be added, removed and renamed, with automatic width, a minimum of one column and keyboard support with labelled controls.'],
      ['Tests', 'The repository contains 23 test files written with Vitest, covering forms, the modal, the ledger components, the selection hook, the session manager, the stroke grouper and the recognition route.'],
    ],
    demonstration: {
      intro: 'Papyr has a public deployment that can be opened and used to create an account.',
      links: [
        ['Live demo', 'https://papyr-app-mu.vercel.app', 'The deployed application'],
        ['Source repository', 'https://github.com/Quayyum-a/Papyr', 'Code, decisions, changelog and known issues'],
      ],
      note: 'No screenshots are included here. They will be captured from the live application after the known issues below are re checked.',
    },
    limitations: [
      'This is a work in progress, not a finished product, and it has no customers.',
      'The project’s own issue log, last updated in mid August, records a ledger canvas sizing problem on first load as open. It should be re checked on the current deployment before anyone relies on the ledger view.',
      'Handwriting recognition has a server route and a client, but its results are not yet saved into cells according to the same issue log.',
      'The application is described as offline first in its page metadata. I found no service worker or offline storage in the repository, so offline use should be treated as not yet built.',
      'Some project documents describe earlier designs and are marked as historical. They are not a description of the current behaviour.',
    ],
    future: [
      'Fix and test the ledger canvas sizing on load, then capture real screenshots.',
      'Save recognised text into cells and add search and column totals.',
      'Offline writing with later synchronisation.',
      'Mobile and stylus testing on real devices, and a cleaner repository without editor history and temporary files.',
    ],
  },
];
