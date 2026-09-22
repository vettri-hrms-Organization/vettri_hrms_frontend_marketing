# Vettri Marketing Website — Premium Redesign v2

## What changed

- Reframed the homepage around **People + Workplace + Technology**.
- Reworked the hero hierarchy and CTAs toward a premium enterprise SaaS presentation.
- Formalized the Vettri navy/blue design tokens, spacing, typography hierarchy, borders, radii and shadows.
- Added responsive behavior and reduced-motion handling for the redesign layer.
- Refined navigation scroll states and product-surface styling.
- Replaced development-facing copy such as “Demo data” / “not live data” with customer-facing “Product preview / representative data”.
- Updated page metadata and Open Graph positioning.
- Added the missing project scaffolding (`package.json`, `tsconfig.json`, `postcss.config.mjs`, `next-env.d.ts`) so the project can be installed and built as a standard Next.js app.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Environment

Optional public environment variables:

- `NEXT_PUBLIC_APP_URL` — application URL, defaults to `https://app.vettrihrms.in`
- `NEXT_PUBLIC_SITE_URL` — marketing URL, defaults to `https://www.vettrihrms.in`
- `NEXT_PUBLIC_API_URL` — API URL, defaults to `https://api.vettrihrms.in`

## Design direction

The redesign deliberately preserves the existing component architecture and product story. It does not replace Vettri with a generic HRMS template. The visual language emphasizes:

- premium enterprise SaaS
- calm navy/blue brand expression
- real product UI over decorative cards
- connected HR + workplace + IT storytelling
- restrained motion
- responsive accessibility
