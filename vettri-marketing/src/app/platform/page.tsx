import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProductPreview } from "@/components/ProductPreview";
import { Reveal } from "@/components/Reveal";
import { APP_URL } from "@/lib/config";
import type { Metadata } from "next";
import { GradientBackground } from "@/components/ui/gradient-background";

export const metadata: Metadata = {
  title: "Platform",
  description: "The operating layer between people and work — people, HR operations and workplace technology in one connected platform.",
};

const rows = [
  {
    eyebrow: "People",
    title: "A clear foundation for every employee record.",
    body: "Profiles, documents and lifecycle moments live in one operating picture — visible to the people who need them, without duplicated data entry.",
    items: ["Employee profiles and records", "Documents and employee experience", "Lifecycle visibility from hire to exit"],
    variant: "employee" as const,
  },
  {
    eyebrow: "HR operations",
    title: "Attendance, leave and payroll, dependably connected.",
    body: "Bring the everyday operational workflows into one dependable view so HR teams spend less time reconciling and more time deciding.",
    items: ["Attendance and leave", "Payroll context", "Operational controls and reports"],
    variant: "hr" as const,
  },
  {
    eyebrow: "Workplace technology",
    title: "Assets, devices and software, in the same picture.",
    body: "Connect assigned devices, software and support to the people and teams they serve — so IT and HR share one operational language.",
    items: ["Assets and devices", "Software management", "Remote support and automation"],
    variant: "assets" as const,
  },
];

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="inner-hero inner-hero-dark">
          <GradientBackground variant="navy" overlayOpacity={0.18} />
          <div className="container inner-hero-grid">
            <Reveal>
              <div className="eyebrow">Platform</div>
              <h1 className="display">The operating layer between people and work.</h1>
              <p className="body-copy lg">
                Vettri connects the systems, people and workplace moments that keep an organization moving —
                one platform instead of a patchwork of tools.
              </p>
              <a className="btn btn-primary" href={`${APP_URL}/signup`}>Start free <ArrowRight size={16} /></a>
            </Reveal>
            <Reveal delay={0.15}><ProductPreview /></Reveal>
          </div>
        </section>

        <section className="inner-sections white-section">
          <div className="container">
            {rows.map((row, index) => {
              const copy = (
                <Reveal>
                  <div className="eyebrow">{row.eyebrow}</div>
                  <h2 className="section-title">{row.title}</h2>
                  <p className="body-copy">{row.body}</p>
                  <ul className="feature-list">
                    {row.items.map((item) => (
                      <li key={item}><CheckCircle2 size={17} color="var(--blue)" />{item}</li>
                    ))}
                  </ul>
                </Reveal>
              );
              const visual = <Reveal delay={0.12}><ProductPreview variant={row.variant} /></Reveal>;
              return (
                <div
                  id={`platform-${row.variant}`}
                  className={`inner-row ${index % 2 ? "tint" : ""}`}
                  key={row.eyebrow}
                  style={{ padding: "90px 0", scrollMarginTop: 110 }}
                >
                  {index % 2 ? (
                    <>
                      {visual}
                      {copy}
                    </>
                  ) : (
                    <>
                      {copy}
                      {visual}
                    </>
                  )}
                </div>
              );
            })}

            <Reveal>
              <div className="cta-band">
                <h2>See how Vettri connects your workplace.</h2>
                <p>Talk to our team or start a 14-day trial — no credit card required.</p>
                <div className="hero-actions" style={{ justifyContent: "center" }}>
                  <a className="btn btn-primary" href={`${APP_URL}/signup`}>Start free <ArrowRight size={16} /></a>
                  <Link className="btn btn-ghost-inverse" href="/contact">Talk to our team</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
