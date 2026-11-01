# Harborline Systems website

Official website for **Harborline Systems** (legal name: Harborline Systems Limited), a software and AI engineering company based in Lagos, Nigeria. Harborline helps digital agencies and businesses design, build, improve, automate and maintain digital systems: white label software engineering, custom software, web and mobile applications, backend engineering, AI features, business automation, APIs and integrations, and ongoing engineering support.

- Website: https://harborlinesystems.ltd
- Contact: hello@harborlinesystems.ltd
- Serves: digital agencies, startups, small and medium sized businesses and growing companies

This repository contains the website source. It is a Vite and TypeScript marketing site. Agency delivery is presented as the primary offer and direct software, AI and automation for businesses as the secondary offer. Every public page is generated into static HTML before the Vite production build, so its copy, metadata and structured data are present without running browser JavaScript.

## Routes

| URL | Purpose |
| --- | --- |
| `/` | Harborline introduction and agency or business pathways |
| `/agencies` | White label delivery terms and three agency plans |
| `/businesses` | Direct business problem solving and priced entry points |
| `/services` | Capabilities, technologies and application contexts |
| `/how-it-works` | A four step process explanation and FAQ |
| `/about` | Company identity, who Harborline works with and how it works |
| `/guides/white-label-software-development` | Guide: what white label software development means for agencies |
| `/guides/choosing-a-software-development-partner` | Guide: a practical checklist for choosing a development partner |

## Local development

Use Node.js 22 or newer and npm 10.9.9 (pinned in `package.json`). Install the lockfile dependencies with `npm ci`, then run `npm run dev`. The site serves on port 3000. Type checks are available with `npm run typecheck`. Run `npm run build` to regenerate the five route documents and create the static site in `dist/`. `npm run preview` serves the build locally on port 3000.

The prebuild in `scripts/prerender.mjs` transpiles the shared TypeScript templates with the checked in TypeScript dependency and writes each route's actual copy and metadata into its entry HTML. Vite bundles those documents as a multi page static site. The JSON route declaration is `public/manus-routes.json`; the sitemap and robots files are in `public/`.

## Structure

- `src/content.ts`: factual pricing, services, processes, FAQs, contact templates and SEO content.
- `src/pages.ts`: the five page layouts, route navigation and footer.
- `src/main.ts`: optional browser interactions, mobile navigation and the process stage switcher.
- `src/styles.css`: the Harborline editorial design tokens and responsive layouts.
- `scripts/prerender.mjs`: crawler readable static route generation.
- `public/images/`: compressed images bundled with the site.
- `DESIGN_SYSTEM.md`: palette, type, layout, interaction and writing standards.
- `IMAGE-CREDITS.md`: individual photo pages and verified license notes.
- `TODO.md`: detailed delivery outcomes and acceptance clauses.
- `video/`: finished Harborline promo video, rendering script, local brand fonts and font licenses.
- `visual-audit/finished/`: final desktop and mobile route screenshots used for handoff review.
- `asset-review/unverified/`: a supplied image held outside the production site until its source can be matched.

## Claims and imagery

Do not introduce client names, customer logos, case studies, testimonials, revenue, awards or country coverage without evidence and permission. The two locally bundled Unsplash photographs are contextual stock images only, not Harborline staff or client work. See [IMAGE-CREDITS.md](IMAGE-CREDITS.md) for each source and license. The unmatched supplied warehouse image is preserved outside `public/` and is not built or published with the site.

Contact links use mailto templates addressed to `hello@harborlinesystems.ltd`. No form backend or database is required for this public brochure site.
# Harborline-Systems

## Search and discoverability

- `scripts/prerender.mjs` writes each route's title, description, canonical URL, Open Graph tags and JSON-LD (Organization, WebSite, WebPage or AboutPage, BreadcrumbList, Service, Article and FAQPage where the page visibly contains that content). Company identity constants live at the top of `src/content.ts`.
- To add a page, add it to `routes` and `metadata` in `src/content.ts`, render it in `src/pages.ts`, add it to `vite.config.ts` and `public/sitemap.xml`, then run the build.
- `public/robots.txt` allows crawlers, explicitly allows `OAI-SearchBot` and declares the sitemap. `GPTBot` (model training) is deliberately not configured.
- `public/llms.txt` is an experimental summary for AI tools. It is not a ranking signal.
- Run `npm run build && npm run verify:seo` to check titles, descriptions, canonicals, headings, images, JSON-LD, internal links, sitemap and robots against the built site.
- Search Console, Bing Webmaster Tools and DNS or redirect rules are managed outside this repository.
