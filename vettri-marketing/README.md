# VETTRI public website — premium redesign

This package contains the redesigned Vettri marketing site. The implementation preserves the existing Next.js/App Router structure while replacing the visual system and homepage storytelling with a product-led enterprise SaaS experience.

## Design / UX changes
- Product-first cinematic hero with a realistic command-center preview.
- Connected HR + IT relationship diagram as the signature brand moment.
- Interactive employee lifecycle journey.
- Editorial product showcases for employee experience, software deployment and remote support.
- Dark navy technology section with restrained motion and network language.
- Plan-based launch pricing retained exactly: Starter ₹1,499/month, Growth ₹3,999/month, Enterprise custom.
- No invented customer logos, testimonials, ratings, certifications or adoption metrics.
- Responsive recomposition for desktop/tablet/mobile sizes.
- Reduced-motion support, semantic navigation, keyboard-visible focus states and mobile Escape handling.
- Centralized visual tokens and reusable product preview components.
- Marketing `Start free` links open the local `/signup` onboarding flow; existing-user Login links continue to use `NEXT_PUBLIC_APP_URL`.
- The signup UI posts to `${NEXT_PUBLIC_API_URL}/api/auth/register`; the endpoint creates the user, tenant, trial and authenticated session.

## Run

Set `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_SITE_URL`, and `NEXT_PUBLIC_API_URL`; install dependencies, then run `npm run dev` or `npm run build`.

The backend registration endpoint performs the tenant and trial bootstrap server-side and returns the existing HRMS login response shape.
