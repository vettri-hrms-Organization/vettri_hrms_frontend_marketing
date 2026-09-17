export type PricingPlan = {
  id: "starter" | "growth" | "enterprise";
  name: string;
  priceMonthly: number | null;
  priceAnnual: number | null;
  currency: "INR";
  employeeLimit: number | null;
  popular: boolean;
  cta: "Start free" | "Talk to sales";
  description: string;
  featureGroups: { label: string; features: string[] }[];
};

export const plans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 1499,
    priceAnnual: 14990,
    currency: "INR",
    employeeLimit: 25,
    popular: false,
    cta: "Start free",
    description: "The essential foundation for people operations.",
    featureGroups: [{ label: "Includes", features: ["Up to 25 employees", "Core HR", "Employee profiles", "Attendance", "Leave", "Employee self-service", "Documents", "Basic reports"] }],
  },
  {
    id: "growth",
    name: "Growth",
    priceMonthly: 3999,
    priceAnnual: 39990,
    currency: "INR",
    employeeLimit: null,
    popular: true,
    cta: "Start free",
    description: "The connected operating layer for scaling organizations.",
    featureGroups: [{ label: "Everything in Starter, plus", features: ["Payroll", "Performance", "Asset management", "Device management", "Software management", "Automation", "Advanced reports"] }],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: null,
    priceAnnual: null,
    currency: "INR",
    employeeLimit: null,
    popular: false,
    cta: "Talk to sales",
    description: "A considered setup for advanced workplace requirements.",
    featureGroups: [{ label: "Designed around your needs", features: ["Advanced workplace operations", "Larger organizations", "Advanced controls", "Custom workflows", "Integrations", "Dedicated support", "Enterprise requirements"] }],
  },
];

export const formatPrice = (price: number | null) => price === null ? "Custom" : `₹${price.toLocaleString("en-IN")}`;
