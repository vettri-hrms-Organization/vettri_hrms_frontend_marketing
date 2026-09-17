import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProductPreview } from "@/components/ProductPreview";
import { Reveal } from "@/components/Reveal";
import { APP_URL } from "@/lib/config";
import type { Metadata } from "next";
import { GradientBackground } from "@/components/ui/gradient-background";

export const metadata: Metadata = {
  title: "Why Vettri",
  description: "HR knows your people. IT knows their devices. Vettri connects both.",
};

const diffs = [
  {
    title: "One context, not another dashboard.",
    body: "Vettri makes the relationship between a person, their work, their device and their workplace visible in one operating layer — instead of another disconnected tool to check.",
  },
  {
    title: "People-first workplace operations.",
    body: "Keep employee experience at the center while giving operations teams the context they need to act precisely, without turning HR into an IT ticketing queue.",
  },
  {
    title: "Built for the next layer of work.",
    body: "As workplaces become more connected, Vettri gives HR and IT a shared language without turning either team into the other.",
  },
];

export default function WhyVettriPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="inner-hero inner-hero-dark">
          <GradientBackground variant="dark" overlayOpacity={0.18} />
          <div className="container inner-hero-grid">
            <Reveal>
              <div className="eyebrow">Why Vettri</div>
              <h1 className="display">HR knows your people. IT knows their devices.<br /><span className="blue-text">Vettri connects both.</span></h1>
              <p className="body-copy lg">
                Traditional HR systems stop at the employee record. Vettri carries the context into the
                workplace where people actually do their work.
              </p>
              <a className="btn btn-primary" href={`${APP_URL}/signup`}>Start free <ArrowRight size={16} /></a>
            </Reveal>
            <Reveal delay={0.15}><ProductPreview variant="hr" /></Reveal>
          </div>
        </section>

        <section className="capability white-section">
          <div className="container">
            <Reveal>
              <div className="eyebrow">The difference</div>
              <h2 className="section-title">Three reasons workplaces choose a connected layer.</h2>
            </Reveal>
            <div className="diff-list">
              {diffs.map((d, i) => (
                <Reveal key={d.title} delay={0.08 * i}>
                  <div className="diff-row">
                    <span className="diff-index">0{i + 1}</span>
                    <div>
                      <h3>{d.title}</h3>
                      <p>{d.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="stat-band">
                <div className="stat-tile"><b>1</b><span>Connected operating layer for people + workplace</span></div>
                <div className="stat-tile"><b>2</b><span>Teams — HR and IT — sharing one context</span></div>
                <div className="stat-tile"><b>14</b><span>Days to try it, no credit card required</span></div>
              </div>
            </Reveal>

            <Reveal>
              <div className="cta-band">
                <h2>See the difference for yourself.</h2>
                <p>Start a free trial or talk to our team about your workplace.</p>
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
