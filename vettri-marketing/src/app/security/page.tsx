import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Clock4, Fingerprint, KeyRound, LockKeyhole, ScrollText, ShieldCheck, UserCog } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter, { SUPPORT_EMAIL } from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";

export const metadata: Metadata = createPageMetadata({
  title: "Security",
  description: "How Vettri HRMS protects people data: role-based access with scopes, per-company data isolation, audit logs, hashed passwords and short-lived sessions.",
  path: "/security",
});

// Every statement here describes behaviour implemented in the Vettri backend.
const CONTROLS = [
  { icon: KeyRound, title: "Role-based access with scopes", copy: "Every action requires a specific permission. Each permission can be granted for the whole organisation, a department, a team, or only the employee's own records, so a manager sees their team and an employee sees only themself." },
  { icon: UserCog, title: "Custom roles and time-bound grants", copy: "Start from built-in roles such as HR Admin, Manager, Employee and IT Administrator, create your own, and give individual users extra permissions that can expire automatically." },
  { icon: Building2, title: "Company data isolation", copy: "Each organisation's records are separated, and every request is checked against the signed-in user's company. Isolation between companies is covered by automated tests." },
  { icon: ScrollText, title: "Audit logs", copy: "Sensitive changes are recorded with who made them and when, so administrators can review activity in the audit log." },
  { icon: LockKeyhole, title: "Password protection", copy: "Passwords are stored as one-way BCrypt hashes, never in plain text. New accounts are activated through an emailed invitation, and users can reset forgotten passwords by email." },
  { icon: Clock4, title: "Short-lived sessions", copy: "Signed-in sessions use access tokens that expire after minutes, renewed with rotating refresh tokens, which limits the impact of a leaked token." },
  { icon: Fingerprint, title: "Verified attendance", copy: "Browser check-ins can be verified against your office locations and an allowed radius, and biometric punches come straight from your registered devices." },
  { icon: ShieldCheck, title: "AI within your permissions", copy: "The Ask Vettri assistant uses a fixed set of tools that apply the same permission checks as the rest of the product, so it can only see what the person asking can see." },
];

export default function SecurityPage() {
  return (
    <div className="v-site">
      <SiteHeader />
      <main id="main-content">
        <section className="v-page-hero">
          <div className="v-container">
            <p className="v-eyebrow"><ShieldCheck size={14} aria-hidden="true" /> Security</p>
            <h1 className="v-h1">People data, <span className="v-accent">protected by design.</span></h1>
            <p className="v-lead">Salaries, personal details and documents are some of the most sensitive data a company holds. Here is how Vettri keeps them in the right hands.</p>
          </div>
        </section>

        <section className="v-section v-section--canvas">
          <div className="v-container">
            <div className="v-grid2">
              {CONTROLS.map(({ icon: Icon, title, copy }, index) => (
                <Reveal key={title} delay={(index % 3) * 70}>
                  <article className="v-card" style={{ height: "100%" }}>
                    <span className="v-icon"><Icon size={21} aria-hidden="true" /></span>
                    <h2 className="v-h3">{title}</h2>
                    <p>{copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="v-section">
          <div className="v-container">
            <div className="v-cta">
              <h2 className="v-h2">Have a security questionnaire?</h2>
              <p className="v-lead">Send it to us and we&apos;ll answer it, or ask anything about how Vettri handles your data.</p>
              <div className="v-actions">
                <Link className="v-btn v-btn--primary" href="/contact">Contact us <ArrowRight size={16} aria-hidden="true" /></Link>
                <a className="v-btn v-btn--on-dark" href={`mailto:${SUPPORT_EMAIL}?subject=Security%20question`}>{SUPPORT_EMAIL}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
