"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { APP_URL } from "@/lib/config";
import { formatPrice, type PricingPlan } from "@/data/pricing";
import { PricingFeatureList } from "./PricingFeatureList";

export function PricingCard({ plan, index, billingCycle }: { plan: PricingPlan; index: number; billingCycle: "monthly" | "quarterly" | "annual" }) {
  const href = `${APP_URL}/signup?plan=VETTRI_HRMS`;
  const price = billingCycle === "annual" ? plan.priceAnnual : billingCycle === "quarterly" ? plan.priceQuarterly : plan.priceMonthly;

  return (
    <motion.article
      className={`pricing-card pricing-card-${plan.id}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {plan.popular && <span className="popular-label"><Sparkles size={13} />Most popular</span>}
      <div className="pricing-card-heading">
        <span className="pricing-plan-index">0{index + 1}</span>
        <h2>{plan.name}</h2>
        <p>{plan.description}</p>
      </div>
      <div className="pricing-price" aria-label={price ? `${formatPrice(price)} per ${billingCycle}` : "Custom pricing"}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span key={price ?? "custom"} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.25 }}>
            {formatPrice(price)}
          </motion.span>
        </AnimatePresence>
        {price !== null && <small>/ {billingCycle}</small>}
      </div>
      {plan.employeeLimit && <p className="pricing-capacity">Up to {plan.employeeLimit} employees</p>}
      <PricingFeatureList groups={plan.featureGroups} />
      <a className={`btn ${plan.popular ? "btn-primary" : "btn-quiet"} pricing-card-cta`} href={href}>
        {plan.cta}<ArrowUpRight size={16} />
      </a>
    </motion.article>
  );
}
