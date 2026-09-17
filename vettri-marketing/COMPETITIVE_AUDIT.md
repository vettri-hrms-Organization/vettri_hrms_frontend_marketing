# Vettri Competitive Audit

Updated: 2026-09-15

This audit compares the public Keka experience with the current Vettri marketing repository. It uses Keka as a benchmark for information architecture and conversion depth, not as a source for copy, assets, or UI cloning.

## 1. Keka Public Information Architecture

### Marketing navigation

- Product: HR Suite, payroll, workforce operations, AI helpdesk, analytics, hiring, performance, learning, and project services.
- PeopleOS: platform positioning, AI, marketplace.
- Solutions: role and business-context pages, including HR, workforce, talent, and professional services use cases.
- Pricing: tiered feature comparison with add-ons and integration references.
- Resources: blog, glossary, HR toolkit, compliance, whitepapers, research, newsletters, templates, and free calculators.
- Conversion: free trial, demo library, interactive tours, customer stories, contact, support, academy, and partner paths.
- Trust: security, privacy, terms, DPA, SLA, subprocessors, certifications, customer proof, review badges.
- Company: about, careers, partnerships, referrals, contact.

### Product and content patterns observed

- Product landing pages use a consistent sequence: value-led hero, proof rail, capability pillars, role or workflow stories, product screenshots, automation/AI, integrations, customer proof, security, FAQs, and repeated demo/trial CTA.
- Product families are decomposed into specific discoverable pages rather than a single generic feature list.
- Pricing exposes feature groups by suite, add-ons, integrations, and clear plan CTAs.
- Demo pages are filterable by business need and show feature-specific tours.
- Resource surfaces support both SEO discovery and education without making the product pages carry every explanation.
- Trust content is explicit and separated from unsupported marketing language.

## 2. Vettri Current Information Architecture

| Route | Current state | Customer journey role |
|---|---|---|
| `/` | Product-led homepage with dashboard preview, lifecycle story, module switcher, automation, pricing preview, CTA | Discover and understand the differentiator |
| `/platform` | Three capability stories: people, HR operations, workplace technology | Evaluate product architecture |
| `/solutions` | Consolidated HR, IT/workplace, and manager/employee roles | Self-identify by team |
| `/why-vettri` | Positioning and differentiation | Compare and understand why now |
| `/pricing` | Starter, Growth, Enterprise cards, switch, calculator | Compare and choose a starting point |
| `/signup` | Three-step Account, Organization, Workspace flow with API registration | Start the trial |
| `/resources` | Honest placeholder categories | Education roadmap |
| `/contact` | Honest placeholder sales handoff | Enterprise/demo handoff |
| External app | Login and onboarding are linked through `NEXT_PUBLIC_APP_URL` | Product activation |

## 3. Capability Gap Matrix

| Category | Keka benchmark | Vettri current | Vettri action |
|---|---|---|---|
| Core HR | Employee records, org structure, documents, roles, onboarding, exits | Conceptual previews and copy | Keep as platform story; label previews as demo data |
| People structure | Departments, teams, designations, headcount | Not shown as dedicated surfaces | Add to future product/platform detail only when product exists |
| Onboarding | Checklists, tasks, documents, day-one readiness | Lifecycle concept and device/software narrative | Keep as connected workflow; avoid claiming backend automation |
| Offboarding | Exit workflows and surveys | Lifecycle concept | Keep as workflow story; avoid claiming access revocation until verified |
| Attendance | Time, overtime, shifts, mobile/location capture | Preview data and lifecycle copy | Market attendance/leave only at current supported level |
| Leave | Policies, balances, approvals | Preview/copy only | Keep as self-service concept; product implementation remains roadmap |
| Shifts | Shift creation and scheduling | Missing | Do not promise publicly |
| Payroll | Payroll engine, compliance, expenses, corrections | Partial/conceptual copy and preview | Keep pricing/platform reference conservative; no compliance claims |
| Expenses | Expense and reimbursement workflows | Missing | Roadmap |
| Hiring | Sourcing, interviews, assessments, offers, analytics | Partial lifecycle/module language; interviews absent | Present as future/roadmap, not current capability |
| Performance | Goals, reviews, feedback, skills, calibration | Partial module narrative | Keep as conceptual until product support exists |
| Learning | Courses, compliance training, skills paths | Missing | Roadmap |
| Employee self-service | Profile, leave, attendance, payslips, inbox, mobile | Preview and copy only | Make employee experience a first-class story without calling it live |
| Manager experience | Approvals, team visibility, performance | Conceptual copy | Keep in Solutions as role story |
| Admin/HR control plane | Policies, roles, reports, workflows | Conceptual dashboard and security copy | Remove unsupported implementation language |
| Analytics/reporting | Role dashboards, scheduled reports, analytics | Preview and pricing labels | Describe as planned/reporting concept until verified |
| Integrations | Marketplace, categories, API, app directory | Missing | Roadmap; do not imply existing integrations |
| Workplace assets | Asset tracking and assignment | Product preview and flow concept | Make this a differentiator and label demo data |
| Device management | Device inventory and employee context | Product preview and flow concept | Make this a differentiator; avoid implying live fleet control |
| Software management | Catalog, deployment, verification | Flow concept | Make deployment pipeline the signature product story |
| Agent | Endpoint agent | Mentioned in flow only | Roadmap until agent exists in product |
| Remote support | Support workflows | Copy and diagram only | Describe as support context, not remote-control capability |
| Automation | Cross-module triggers and next steps | Visual workflow concept | Use “designed to” or “connects” language until verified |
| Security | Explicit compliance, access, encryption, audits | Generic security claims only | Keep verified architecture language; create dedicated trust page after evidence exists |
| Pricing | Rich suite comparison, add-ons, plans | Implemented cards/calculator | Keep approved INR pricing and remove invented limits |
| Free trial | Trial/demo paths with repeated CTAs | Three-step signup and external API handoff | Preserve flow; verify API provisioning and onboarding end-to-end |
| Demo | Demo library and tours | No demo library; platform CTA | Add a Vettri product tour page only with real preview states |
| Resources | Blog, glossary, toolkit, compliance, templates | Placeholder page | Keep honest curated categories; add real content before publishing articles |
| Customer proof | Customer stories, logos, quotes, review badges | None | Do not invent; add when verified |
| Industries | Industry pages and use cases | Missing | Add only when Vettri has validated workflows per industry |
| Company | About, careers, partners, contact | Missing or placeholder | Add when real company content and contact endpoints exist |

## 4. Vettri Differentiation

The public story should remain:

> HR knows your people. IT knows their devices. Vettri connects both.

The product narrative is:

`Employee -> people record -> assigned device -> Vettri Agent -> software -> monitoring -> support -> automation`

Vettri should compete on the operating context between HR and workplace technology, not on unverified parity with a mature HR/payroll suite.

## 5. Conversion Journey

1. Visitor lands on the homepage and sees the employee/workplace connection.
2. Visitor explores Platform, Solutions, or Why Vettri.
3. Visitor checks approved pricing.
4. Visitor starts the three-step free trial.
5. Registration creates a tenant through the configured API.
6. User is redirected to the configured app onboarding flow.
7. Enterprise prospects use Contact when a verified sales endpoint exists.

## 6. Current Risk Register

- Static module metrics were labelled `Live context`; they are demo data and must be labelled accordingly.
- Security copy mentions multi-tenancy, RBAC, auditability, authentication, and device governance without evidence in this repository.
- Automation copy can read as implemented backend orchestration even though this repository contains marketing previews.
- Contact points to `hello@vettri.example`, which is not a production sales endpoint.
- Footer deep links do not match the current platform and solution section IDs.
- Pricing Growth previously included an invented 50-employee limit; the approved launch model does not define that limit.
- Testimonials, customer counts, certifications, integrations, and compliance claims are intentionally absent until verified.

## 7. Recommended Public IA

Keep the current top-level navigation compact:

- Platform
- Solutions
- Resources
- Why Vettri
- Pricing
- Login
- Start free

Prioritize these next pages only when their content is real:

- `/platform/people`
- `/platform/workplace`
- `/platform/software`
- `/platform/remote-support`
- `/solutions/hr`
- `/solutions/it`
- `/solutions/employees`
- `/resources/product-updates`
- `/resources/guides`
- `/security`
- `/product-tour`

Do not add customer-story, industry, integration, or certification pages until verified source material exists.
