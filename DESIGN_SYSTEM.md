# Harborline Systems design system

## Brand essence

**Positioning:** Harborline Systems gives agencies confidential engineering delivery capacity and helps businesses turn operational problems into useful software, AI and automation. It is based in Lagos, Nigeria.

**Personality:** capable, unshowy, practical.

**Signature brand color:** Sea `#146A67`. It signals a working shoreline rather than a neon technology glow. Use it for primary actions, key words, fine rules and interaction states, not as a large gradient.

## Direction

The selected movement is coastal industrial editorial. It combines the quiet structure of a printed field guide with grounded photography of people doing real work. Its point of view is that software belongs close to the work, not above it.

The interface follows four principles. First, show the work and its people instead of unsupported technology spectacle. Second, explain the engagement model in plain language before introducing capability detail. Third, let pricing, process and confidentiality read as real business information, not as decorative cards. Fourth, leave enough open paper around the typography for both audiences to find their route quickly.

The homepage is an asymmetric editorial opening: a direct promise and two conversion paths sit beside a credited working photograph. Subsequent sections change rhythm rather than repeat one card pattern. Agency terms are a compact row based price manifest; business entry points are a comparison list; capabilities use descriptive rows; the process is an interactive four step explanation that remains readable without motion or scripting. Internal routes are direct documents, not hidden modal states.

## Palette

| Token | Value | Use |
| --- | --- | --- |
| Paper | `#F5F2E9` | Main canvas and site header |
| Bright paper | `#FBFAF6` | Selected content surfaces |
| Ink | `#18302D` | Main text, dark contact and footer fields |
| Ink soft | `#344B46` | Secondary strong text |
| Slate | `#5E7068` | Body copy and low emphasis text |
| Rule | `#D6D9CF` | Light section separators |
| Sea | `#146A67` | Signature color, links, focus, primary action |
| Deep sea | `#104E4C` | Pressed or high contrast sea state |
| Sea pale | `#DEEBE4` | Occasional visual breathing room |
| Clay | `#BC7653` | A small counterpoint for rules and graphic accents |

Do not use status dots, repeated luminous grids, blurred halos or simulated glass surfaces. Color surfaces are flat and meaning led.

## Typography

DM Serif Display is reserved for expressive headlines and large prices. DM Sans is used for body text, navigation, buttons, labels and controls. This pairing contrasts literary emphasis with workmanlike clarity. Body copy is 16 pixels or larger on mobile; small eyebrow labels are secondary information, never the only way to understand a section. Headings use a tight display rhythm. Long copy keeps a readable measure and normal sentence case.

System sans and Georgia are graceful fallbacks. The site imports DM fonts using `display=swap`. Avoid long body passages in uppercase, decorative monospaced labels, and indiscriminately oversized section headings.

## Wordmark and visual motifs

The wordmark is a custom setting of “Harborline Systems” paired with a three stroke line mark. The lines shorten by one step to suggest an engineered channel. The favicon uses the same tapering line idea, with a single clay stroke. No colored status dot accompanies the logo.

Three restrained motifs carry the identity: the stepped line mark; fine rules and table like indexes that show the structure of a real engagement; and a broad, unbroken horizontal flow from problem to scope to delivery. None imitates a nautical instrument or a generic network diagram.

## Voice

Headlines state what the audience can do. Agency copy foregrounds confidentiality and capacity; business copy begins with the operational problem. Calls to action say what is inside the next click. Avoid inflated claims, anonymous social proof, unexplained acronyms and dashboard language that suggests a client system.

Examples: “Your agency can take on more work. Without hiring another developer.” “Bring the problem. We will map the answer.” Visible marketing copy avoids hyphenated terms; write “white label,” “full stack” and “on call.”

## Components and layout

Use a readable maximum measure of about 1220 pixels on desktop and consistent side gutters. The header is a paper strip with a solid hairline, not an overlay. Buttons are rectangular, have a minimum height of 50 pixels, and show a clear verb plus a directional cue. Navigation links, price rows, capability lists, FAQs and footers remain semantic links or native elements.

Photo figures keep their aspect ratio, meaningful alternative text and a small linked credit. Use one image for a deliberate scene and never imply that stock images show Harborline staff or customers. The service index and plan comparisons prefer open rows over arrays of interchangeable cards. On small screens, switch to a single column while retaining the reading order and clear links.

## Interactions and motion

The process page is the one main interactive explainer. Its initial request stage is present in the HTML; buttons change one text panel and announce the new content through a polite live region. Motion is a short opacity and 3 pixel shift on demand, and GSAP is dynamically loaded only after the visitor chooses another step. Reduced motion updates the stage immediately with no animation. Nothing autoplays.

Hover is an optional enhancement. Every action is operable with a keyboard, focus remains clearly visible and mobile menu controls are at least 44 by 44 pixels. `Escape` closes the mobile navigation and returns focus to its button. FAQ answers use native disclosure elements.

## Responsive and accessibility standards

Retain content and action order from desktop to phone. Avoid horizontal scrolling at 320 pixels, keep body text readable and keep controls touch sized. Maintain strong text contrast against paper and ink surfaces. Do not use color alone to mark active states; navigation uses an active text color plus current page hierarchy, and process controls expose `aria-pressed`. Images have explicit dimensions, useful alt text, and local optimized WebP files. All content remains available with JavaScript disabled, except the optional ability to switch process stages.

## Applied research

This system adapts research about preserving real site wiring and auditing rendered pages from [Hallmark](https://github.com/Nutlope/hallmark); restrained property specific motion, visible focus and a designed reduced motion path from [Design Engineering](https://github.com/AgentsORG/design-engineering); demonstrable brand specificity and working, living tokens from [UI UX Kit](https://github.com/arham777/ui-ux-kit); and content dependent composition rather than unexamined anti-patterns from [Anti AI Slop Skills](https://github.com/Krirox/anti-ai-slop-skills) and [anti-ai-slop](https://github.com/muris11/anti-ai-slop). The [Payoneer website](https://www.payoneer.com/) informed the way audiences and paths are grouped, not the appearance of this design.

### Conceptual product interface

The services page includes one hand built document search concept to make AI information retrieval concrete. Its sample labels are illustrative only; the page explicitly says it is not a deployed Harborline product or a client project. It contains no fake performance metrics, company marks or customer proof. This is an explanatory composition in HTML and CSS, not a screenshot of a claimed customer system.
