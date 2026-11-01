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
};

export const routes = ['/', '/agencies', '/businesses', '/services', '/how-it-works', '/about', '/guides/white-label-software-development', '/guides/choosing-a-software-development-partner'] as const;

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

