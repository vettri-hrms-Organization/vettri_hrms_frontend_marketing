"use client";

import { useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { APP_URL } from "@/lib/config";
import { plans } from "@/data/pricing";

type Cycle = "monthly" | "quarterly" | "annual";

const plan = plans[0];
const MONTHS: Record<Cycle, number> = { monthly: 1, quarterly: 3, annual: 12 };
const TOTAL: Record<Cycle, number> = {
  monthly: plan.priceMonthly ?? 0,
  quarterly: plan.priceQuarterly ?? 0,
  annual: plan.priceAnnual ?? 0,
};

function savingPercent(cycle: Cycle) {
  const full = TOTAL.monthly * MONTHS[cycle];
  return full ? Math.round((1 - TOTAL[cycle] / full) * 100) : 0;
}

const INCLUDED = [
  "Employee records, documents and org structure",
  "Attendance with GPS check-in and biometric devices",
  "Leave types, balances, approvals and holidays",
  "Salary structures, payroll runs and payslips",
  "Recruitment, careers page and offer letters",
  "Performance goals and reviews",
  "Ask Vettri AI assistant",
  "Device inventory, software deployment and remote support",
  "Roles, permissions and audit logs",
];

export default function PricingBlock() {
  const [cycle, setCycle] = useState<Cycle>("annual");
  const perMonth = Math.round(TOTAL[cycle] / MONTHS[cycle]);
  const rupees = (value: number) => `₹${value.toLocaleString("en-IN")}`;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="v-billing" role="group" aria-label="Billing cycle">
          {(["monthly", "quarterly", "annual"] as Cycle[]).map((value) => (
            <button key={value} type="button" aria-pressed={cycle === value} onClick={() => setCycle(value)}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
              {savingPercent(value) > 0 && <em>Save {savingPercent(value)}%</em>}
            </button>
          ))}
        </div>
      </div>

      <div className="v-price">
        <div className="v-price__main">
          <span className="v-price__name"><Sparkles size={15} aria-hidden="true" /> {plan.name}: everything included</span>
          <div className="v-price__amount">
            <b>{rupees(perMonth)}</b>
            <span>per employee / month</span>
          </div>
          <p className="v-price__note">
            {cycle === "monthly"
              ? "Billed monthly."
              : `Billed ${cycle === "annual" ? "yearly" : "quarterly"} at ${rupees(TOTAL[cycle])} per employee.`}
          </p>
          <a className="v-btn v-btn--primary" href={`${APP_URL}/signup?plan=STARTER`}>
            Start your free trial <ArrowRight size={16} aria-hidden="true" />
          </a>
          <p className="v-price__fine">No payment needed to start the trial.</p>
        </div>
        <div className="v-price__side">
          <h3>Every module, no add-ons</h3>
          <ul className="v-checks">
            {INCLUDED.map((item) => (
              <li key={item}><Check size={16} aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
