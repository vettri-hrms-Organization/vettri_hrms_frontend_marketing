import { ArrowRight, HeartHandshake, Laptop, UsersRound } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NetworkDiagram } from "@/components/NetworkDiagram";
import { Reveal } from "@/components/Reveal";
import { APP_URL } from "@/lib/config";
import type { Metadata } from "next";
import { GradientBackground } from "@/components/ui/gradient-background";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Vettri, designed around the teams that make work happen — HR, IT and everyone in between.",
};

const roles = [
  {
    slug: "hr",
    icon: UsersRound,
    title: "For HR teams",
    body: "Reduce operational switching and keep the employee story close to the work behind it.",
    items: ["People operations", "Attendance, leave and payroll", "Employee experience"],
  },
  {
    slug: "it",
    icon: Laptop,
    title: "For IT & workplace teams",
    body: "Understand device, software and support context without losing sight of the people involved.",
    items: ["Device governance", "Software deployment", "Endpoint support"],
  },
  {
    slug: "people",
    icon: HeartHandshake,
    title: "For managers & employees",
    body: "Give everyday decisions a simple, connected surface that feels useful rather than administrative.",
    items: ["Clear approvals", "Self-service essentials", "Contextual visibility"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="inner-hero">
          <GradientBackground variant="soft" />
          <div className="container">
            <Reveal className="hero-copy" delay={0}>
              <div className="eyebrow">Solutions</div>
              <h1 className="display" style={{ maxWidth: 820 }}>Designed around the teams that make work happen.</h1>
              <p className="body-copy lg">Vettri gives each team a clearer view while keeping the whole workplace connected.</p>
            </Reveal>

            <div className="role-grid">
              {roles.map((role, i) => (
                <Reveal key={role.title} delay={0.08 * i}>
                  <div className="role-card" id={`solutions-${role.slug}`} style={{ scrollMarginTop: 110 }}>
                    <div className="role-card-icon"><role.icon size={20} color="var(--blue)" /></div>
                    <h3>{role.title}</h3>
                    <p>{role.body}</p>
                    <ul>
                      {role.items.map((item) => (
                        <li key={item}><ArrowRight size={14} />{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-band">
          <GradientBackground variant="dark" overlayOpacity={0.12} />
          <div className="container dark-layout">
            <Reveal>
              <div className="dark-copy">
                <div className="eyebrow inverse">One shared operating layer</div>
                <h2 className="section-title inverse-title">Every team, one connected picture.</h2>
                <p className="body-copy inverse-copy">
                  Solutions aren&apos;t separate products bolted together — they&apos;re views into the same
                  workplace operating layer, so context never gets lost between teams.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}><NetworkDiagram /></Reveal>
          </div>
        </section>

        <section className="capability white-section">
          <div className="container">
            <Reveal>
              <div className="cta-band" style={{ marginTop: 0 }}>
                <h2>Find the right starting point for your team.</h2>
                <p>Talk to our team about your HR and workplace technology needs.</p>
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
