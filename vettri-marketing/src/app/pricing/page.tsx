import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PricingSection } from "@/components/pricing/PricingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Explore clear Vettri plans for connected people operations and workplace technology.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <><Navbar /><PricingSection /><Footer /></>;
}
