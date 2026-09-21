import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PricingSection } from "@/components/pricing/PricingSection";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Vettri HRMS Pricing | Plans and Features",
  description: "Explore Vettri HRMS pricing for employee, attendance, leave, payroll and connected workplace operations.",
  path: "/pricing",
});

export default function PricingPage() {
  return <><Navbar /><PricingSection /><Footer /></>;
}
