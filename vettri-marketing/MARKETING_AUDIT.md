# Vettri Marketing Audit

Date: 2026-09-16

## Scope

Audited the Next.js App Router marketing site, public routes, shared navigation/footer, pricing, metadata, assets, responsive behavior, and CTA destinations.

## Findings

### P1

- Signup ownership is environment-dependent. Marketing CTAs use `NEXT_PUBLIC_APP_URL`, while the local `/signup` route redirects to that application. Production must set this value to the real onboarding app URL; the marketing site must not point it at login.
- Contact conversion is not production-ready. The current CTA uses the placeholder `hello@vettri.example` and the page explains that the sales flow is still being connected. A verified address or form endpoint is required before launch.

### P2

- Pricing, resources, contact, and home lacked route-specific metadata. Added titles, descriptions, and canonical paths. Placeholder resources/contact pages are marked `noindex` until their content and conversion flows are live.
- The site had no skip link or consistent `main#main-content` target. Added both across public routes.
- Mobile navigation did not restore focus after Escape, did not reset expanded groups on Escape, and allowed background scrolling while open. Added focus recovery, submenu `aria-controls`, and body scroll locking.
- Pricing now supports a real monthly/annual state with animated price changes and an annual savings label while preserving Vettri's INR plans and CTAs.
- The repository contains duplicate Next config files. `next.config.mjs` is the active configuration; `next.config.ts` remains a cleanup candidate if it is not required by deployment tooling.
- `npm run lint` is currently invalid for this Next version because `next lint` is no longer supported. A reproducible ESLint dependency/script should be added when package installation is available.

## Verification

- `npm run build`: passes.
- Route sweep: all public routes rendered one H1, had no horizontal overflow at the tested 390px viewport, and expose `main#main-content`.
- `get_errors`: no workspace diagnostics reported for the marketing app.

## Preserved

- Official Vettri logo source and derived transparent variants.
- Existing product-led storytelling, restrained claims, shared navigation/footer, responsive recomposition, reduced-motion support, and real Vettri pricing data.
- No invented customer logos, testimonials, certifications, ratings, or adoption claims.

## Follow-up Before Launch

1. Set and verify production `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_SITE_URL`, and `NEXT_PUBLIC_API_URL`.
2. Replace the placeholder contact address with a verified sales destination or form.
3. Add source-only ESLint as an explicit dev dependency and replace `next lint`.
4. Consolidate the duplicated CSS normalization blocks after visual regression coverage is available.
5. Run Lighthouse and viewport QA at the full release matrix: 1920, 1600, 1440, 1366, 1280, 1024, 768, 430, 414, 390, 375, and 360px.
