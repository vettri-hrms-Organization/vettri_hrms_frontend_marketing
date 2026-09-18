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
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly" | "annual">("monthly");

  return (
    <main id="main-content" className="pricing-page">
      <section className="pricing-hero">
        <GradientBackground variant="soft" />
        <div className="container pricing-hero-inner">
          <div className="pricing-hero-copy">
            <span className="eyebrow">Vettri pricing</span>
            <h1 className="pricing-title"><VerticalCutReveal>One connected HRMS, with flexible billing.</VerticalCutReveal></h1>
            <p>Choose the Vettri HRMS product and pick the billing cycle that fits your rollout.</p>
          </div>
          <div className="trial-callout">
            <span className="trial-mark" />
            <div><strong>₹1 Trial / Verification</strong><span>Dedicated verification charge</span><span>Then choose paid billing</span></div>
            <a className="btn btn-primary" href={`${APP_URL}/signup?plan=VETTRI_HRMS`}>Start free <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
      <section className="price-cards-section" aria-labelledby="plans-title">
        <div className="container">
          <div className="pricing-toolbar"><div><span className="eyebrow">Single product pricing</span><h2 id="plans-title">Vettri HRMS</h2></div><PricingSwitch billingCycle={billingCycle} onChange={setBillingCycle} /></div>
          <div className="price-grid">{plans.map((plan, index) => <PricingCard plan={plan} index={index} billingCycle={billingCycle} key={plan.id} />)}</div>
        </div>
      </section>
      <div className="container"><PricingCalculator /></div>
    </main>
  );
}
