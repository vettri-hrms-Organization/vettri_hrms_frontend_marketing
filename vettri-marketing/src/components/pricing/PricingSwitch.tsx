"use client";

import { motion } from "framer-motion";

export function PricingSwitch({ billingCycle, onChange }: { billingCycle: "monthly" | "quarterly" | "annual"; onChange: (cycle: "monthly" | "quarterly" | "annual") => void }) {
  return (
    <div className="pricing-switch" aria-label="Billing period">
      <motion.span className={`pricing-switch-thumb ${billingCycle === "annual" ? "is-yearly" : billingCycle === "quarterly" ? "is-quarterly" : "is-monthly"}`} layoutId="billing-thumb" transition={{ type: "spring", stiffness: 420, damping: 30 }} />
      <button className={`pricing-switch-option ${billingCycle === "monthly" ? "active" : ""}`} type="button" aria-pressed={billingCycle === "monthly"} onClick={() => onChange("monthly")}>Monthly</button>
      <button className={`pricing-switch-option ${billingCycle === "quarterly" ? "active" : ""}`} type="button" aria-pressed={billingCycle === "quarterly"} onClick={() => onChange("quarterly")}>Quarterly <span>Save 5%</span></button>
      <button className={`pricing-switch-option ${billingCycle === "annual" ? "active" : ""}`} type="button" aria-pressed={billingCycle === "annual"} onClick={() => onChange("annual")}>Annual <span>Save 10%</span></button>
    </div>
  );
}
