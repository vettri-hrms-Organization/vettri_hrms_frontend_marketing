"use client";

import { useState } from "react";
import { plans, formatPrice } from "@/data/pricing";

export function PricingCalculator() {
  const [employees, setEmployees] = useState(25);
  const plan = employees <= 25 ? plans[0] : plans[1];

  return (
    <section className="pricing-calculator" aria-labelledby="calculator-title">
      <div>
        <span className="eyebrow gold">Find your starting point</span>
        <h2 id="calculator-title">A clear place to begin.</h2>
        <p>Choose your current team size to see the plan that fits today.</p>
      </div>
      <div className="calculator-control">
        <div className="calculator-label"><label htmlFor="employee-count">Your employees</label><output htmlFor="employee-count">{employees}</output></div>
        <input id="employee-count" type="range" min="1" max="50" value={employees} onChange={(event) => setEmployees(Number(event.target.value))} />
        <div className="calculator-scale"><span>1</span><span>50</span></div>
      </div>
      <div className="calculator-answer"><span>Suggested plan</span><strong>{plan.name}</strong><b>{formatPrice(plan.priceMonthly)} <small>/ month</small></b></div>
    </section>
  );
}
