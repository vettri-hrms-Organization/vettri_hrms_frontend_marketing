"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { plans } from "@/data/pricing";
import { APP_URL } from "@/lib/config";
import { PricingCard } from "./PricingCard";
import { PricingCalculator } from "./PricingCalculator";
import { PricingSwitch } from "./PricingSwitch";
import { GradientBackground } from "@/components/ui/gradient-background";
import { useState } from "react";

function VerticalCutReveal({ children }: { children: string }) {
  return (
    <span className="vertical-cut-reveal" aria-label={children}>
      {children.split(" ").map((word, index) => <span key={`${word}-${index}`}><motion.span initial={{ y: "105%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}>{word}</motion.span>{index < children.split(" ").length - 1 ? " " : ""}</span>)}
    </span>
  );
}

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <main id="main-content" className="pricing-page">
      <section className="pricing-hero">
        <GradientBackground variant="soft" />
        <div className="container pricing-hero-inner">
          <div className="pricing-hero-copy">
            <span className="eyebrow">Vettri pricing</span>
            <h1 className="pricing-title"><VerticalCutReveal>Simple pricing for a connected workplace.</VerticalCutReveal></h1>
            <p>Start small, explore Vettri, and scale when your workplace grows.</p>
          </div>
          <div className="trial-callout">
            <span className="trial-mark" />
            <div><strong>14-day free trial</strong><span>No credit card required</span><span>Up to 25 employees</span></div>
            <a className="btn btn-primary" href={`${APP_URL}/signup`}>Start free <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
      <section className="price-cards-section" aria-labelledby="plans-title">
        <div className="container">
          <div className="pricing-toolbar"><div><span className="eyebrow">Plans that stay clear</span><h2 id="plans-title">Choose your operating layer.</h2></div><PricingSwitch yearly={yearly} onChange={setYearly} /></div>
          <div className="price-grid">{plans.map((plan, index) => <PricingCard plan={plan} index={index} yearly={yearly} key={plan.id} />)}</div>
        </div>
      </section>
      <div className="container"><PricingCalculator /></div>
    </main>
  );
}
