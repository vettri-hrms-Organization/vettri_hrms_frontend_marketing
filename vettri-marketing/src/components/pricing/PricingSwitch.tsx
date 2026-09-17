"use client";

import { motion } from "framer-motion";

export function PricingSwitch({ yearly, onChange }: { yearly: boolean; onChange: (yearly: boolean) => void }) {
  return (
    <div className="pricing-switch" aria-label="Billing period">
      <motion.span className={`pricing-switch-thumb ${yearly ? "is-yearly" : ""}`} layoutId="billing-thumb" transition={{ type: "spring", stiffness: 420, damping: 30 }} />
      <button className={`pricing-switch-option ${!yearly ? "active" : ""}`} type="button" aria-pressed={!yearly} onClick={() => onChange(false)}>Monthly</button>
      <button className={`pricing-switch-option ${yearly ? "active" : ""}`} type="button" aria-pressed={yearly} onClick={() => onChange(true)}>Annual <span>Save 17%</span></button>
    </div>
  );
}
