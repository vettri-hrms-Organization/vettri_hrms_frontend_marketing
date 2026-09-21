"use client";

import { ArrowRight, Check, ShieldCheck, Sparkles, UsersRound, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { plans } from "@/data/pricing";
import { APP_URL } from "@/lib/config";
import { PricingCalculator } from "./PricingCalculator";
import { PricingSwitch } from "./PricingSwitch";
import { useState } from "react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly" | "annual">("monthly");
  const plan = plans[0];
  const price = billingCycle === "annual" ? plan.priceAnnual : billingCycle === "quarterly" ? plan.priceQuarterly : plan.priceMonthly;
  const monthlyEquivalent = billingCycle === "annual" ? Math.round((plan.priceAnnual ?? 0) / 12) : billingCycle === "quarterly" ? Math.round((plan.priceQuarterly ?? 0) / 3) : plan.priceMonthly;
  const billingUnit = billingCycle === "annual" ? "year" : billingCycle === "quarterly" ? "quarter" : "month";
  const annualSaving = (plan.priceMonthly ?? 0) * 12 - (plan.priceAnnual ?? 0);
  const annualBaseline = (plan.priceMonthly ?? 0) * 12;
  const savings = {
    quarterly: Math.round((1 - ((plan.priceQuarterly ?? 0) * 4) / annualBaseline) * 100),
    annual: Math.round((1 - (plan.priceAnnual ?? 0) / annualBaseline) * 100),
  };

  return (
    <main id="main-content" className="pricing-page premium-pricing">
      <section className="pricing-hero premium-pricing-hero">
        <div className="pricing-orb pricing-orb-a" />
        <div className="pricing-orb pricing-orb-b" />
        <div className="container premium-pricing-hero-grid">
          <motion.div className="premium-pricing-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <span className="eyebrow">Simple, transparent pricing</span>
            <h1>Everything your workplace needs. <em>One clear plan.</em></h1>
            <p>Start with Vettri HRMS and scale your connected workplace as your team grows.</p>
            <div className="pricing-proof-row">
              <span><Check size={14} /> No feature maze</span>
              <span><Check size={14} /> HR + workplace + IT</span>
              <span><Check size={14} /> Start small, scale cleanly</span>
            </div>
          </motion.div>
          <motion.div className="pricing-hero-offer" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>
            <div className="offer-glow" />
            <div className="offer-top"><span><Sparkles size={13}/> VETTRI HRMS</span><b>Most popular</b></div>
            <div className="offer-price"><span>₹{price?.toLocaleString("en-IN")}</span><small>/ employee / {billingUnit}</small></div>
            <div className="offer-equivalent">{billingCycle === "monthly" ? "Billed monthly per employee" : `≈ ₹${monthlyEquivalent?.toLocaleString("en-IN")}/employee/month equivalent`} {billingCycle === "annual" && <b>Save ₹{annualSaving.toLocaleString("en-IN")} / employee / year</b>}</div>
            <p>One connected platform for your people and workplace operations.</p>
            <a className="btn btn-primary" href={`${APP_URL}/signup?plan=VETTRI_HRMS`}>Get started <ArrowRight size={16}/></a>
            <div className="offer-note"><ShieldCheck size={14}/> ₹1 verification starts your free trial</div>
          </motion.div>
        </div>
      </section>

      <section className="premium-pricing-plans">
        <div className="container">
          <div className="premium-pricing-toolbar">
            <div><span className="eyebrow">Pricing, without the maze</span><h2>Choose how you want to grow.</h2><p className="pricing-toolbar-copy">One product. One clear price. Switch billing whenever your needs change.</p></div>
            <PricingSwitch billingCycle={billingCycle} onChange={setBillingCycle} savings={savings} />
          </div>

          <div className="premium-plan-shell">
            <div className="premium-plan-intro">
              <div className="premium-plan-icon"><UsersRound size={20}/></div>
              <div><span>ONE PRODUCT</span><h3>Vettri HRMS</h3><p>People, attendance, leave, payroll and workplace technology in one connected experience.</p></div>
            </div>
            <div className="premium-plan-price"><strong>₹{price?.toLocaleString("en-IN")}</strong><span>/ employee / {billingUnit}</span></div>
            <a className="btn btn-primary" href={`${APP_URL}/signup?plan=VETTRI_HRMS`}>Start with Vettri <ArrowRight size={15}/></a>
          </div>

          <div className="premium-benefits" aria-label="What is included">
            {[
              [UsersRound, "People operations", "Employee records, attendance, leave & payroll"],
              [Zap, "Workplace operations", "Assets, requests and connected workflows"],
              [ShieldCheck, "Technology control", "Devices, software, support & governance"],
            ].map(([Icon, title, copy]) => <div className="premium-benefit" key={title as string}><span><Icon size={17}/></span><div><b>{title as string}</b><p>{copy as string}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="premium-feature-section">
        <div className="container premium-feature-grid">
          <div><span className="eyebrow">Included</span><h2>Everything you need to run the workplace.</h2><p>One system. One shared context. No feature maze.</p></div>
          <div className="premium-feature-list">
            {["Employee & organization management", "Attendance, leave & payroll", "Assets, devices & software", "Requests, workflows & approvals", "Reports, controls & auditability", "Connected workplace support"].map((item, i) => <motion.div key={item} initial={{opacity:0,x:12}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.04}}><Check size={16}/><span>{item}</span></motion.div>)}
          </div>
        </div>
      </section>

      <div className="container"><PricingCalculator /></div>
    </main>
  );
}
