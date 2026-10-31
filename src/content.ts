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
  '/': { title: 'Harborline Systems | Working software, built for the work', description: 'White label engineering for agencies. Practical software, AI and automation for businesses, backed by 7 years and counting.' },
  '/agencies': { title: 'Agency engineering capacity | Harborline Systems', description: 'Confidential white label engineering for agencies. Start with a $750 paid pilot, or choose a Half seat or Full seat for ongoing delivery capacity.' },
  '/businesses': { title: 'Business software and automation | Harborline Systems', description: 'Describe the operational problem. Harborline builds practical software, AI and automation. Start with an audit, a robot build or a written custom quote.' },
  '/services': { title: 'Software and AI engineering services | Harborline Systems', description: 'Explore Harborline Systems capabilities in software, AI, automation, integrations, applications, backend infrastructure and engineering support.' },
  '/how-it-works': { title: 'How projects work with Harborline | Harborline Systems', description: 'A clear path from problem to written scope, engineering and handover. See how to start an agency partnership or a direct business project.' },
};
