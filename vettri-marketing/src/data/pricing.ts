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
    description: "One connected HRMS for people and workplace operations.",
    featureGroups: [{ label: "Includes", features: ["People + workplace platform", "Attendance, leave, payroll & employee records", "Devices & software", "Support & workplace controls", "Flexible billing", "₹1 verification before activation"] }],
  },
];

export const formatPrice = (price: number | null) => price === null ? "Custom" : `₹${price.toLocaleString("en-IN")}`;
