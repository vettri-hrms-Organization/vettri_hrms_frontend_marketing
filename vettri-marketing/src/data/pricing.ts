export type PricingPlan = {
  id: "vettri";
  name: string;
  priceMonthly: number | null;
  priceQuarterly: number | null;
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
    id: "vettri",
    name: "Vettri HRMS",
    priceMonthly: 199,
    priceQuarterly: 537,
    priceAnnual: 2148,
    currency: "INR",
    employeeLimit: null,
    popular: true,
    cta: "Start free",
    description: "One complete HRMS platform with a single product and flexible billing cycles.",
    featureGroups: [{ label: "Includes", features: ["Unified HR & workspace platform", "Attendance, leave, payroll, and employee records", "Device & software oversight", "Remote support and productivity controls", "Quarterly or annual billing savings", "Clear ₹1 verification step before activation"] }],
  },
];

export const formatPrice = (price: number | null) => price === null ? "Custom" : `₹${price.toLocaleString("en-IN")}`;
