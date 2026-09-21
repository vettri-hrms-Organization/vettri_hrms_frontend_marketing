import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { GradientBackground } from "@/components/ui/gradient-background";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Vettri HRMS Security and Access Control",
  description: "Learn how Vettri HRMS approaches access, tenant separation, operational traceability and workplace technology controls.",
  path: "/security",
});

const controls = [
  ["Tenant separation", "Vettri is designed around isolated organization workspaces so people and workplace records stay within the right operating context."],
  ["Role-aware access", "Access should follow responsibility. Vettri's public product direction keeps visibility and actions aligned to the teams that own them."],
  ["Operational traceability", "Connected workflows need clear ownership and review points. Auditability is part of the product direction, not a certification claim."],
  ["Device governance", "Workplace technology belongs in the same conversation as the employee it supports, with controls presented in context."],
];

export default function SecurityPage() {
  return <>
    <Navbar />
    <main id="main-content">
      <section className="inner-hero inner-hero-dark">
        <GradientBackground variant="navy" overlayOpacity={0.18} />
        <div className="container">
          <Reveal>
            <div className="eyebrow">Security and control</div>
            <h1 className="display">A connected workplace still needs clear boundaries.</h1>
            <p className="body-copy lg">Vettri is designed to keep people data, workplace context and operational actions visible to the right teams without making unsupported certification promises.</p>
            <a className="btn btn-primary" href="/contact">Talk to our team <ArrowRight size={16} /></a>
          </Reveal>
        </div>
      </section>
      <section className="security-page-section">
        <div className="container">
          <Reveal><div className="eyebrow">Our product direction</div><h2 className="section-title">Controls that make the operating picture trustworthy.</h2><p className="body-copy">This page describes Vettri&apos;s intended control model. It does not claim external certifications, uptime commitments, or compliance coverage that has not been verified.</p></Reveal>
          <div className="security-control-grid">{controls.map(([title, body], index) => <Reveal key={title} delay={index * .06}><article className="security-control"><CheckCircle2 size={19} color="var(--blue)" /><div><h3>{title}</h3><p>{body}</p></div></article></Reveal>)}</div>
          <div className="security-note"><strong>Verification matters.</strong><span>Security evidence, policies, subprocessors and compliance documentation will be published as those materials are finalized.</span></div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
