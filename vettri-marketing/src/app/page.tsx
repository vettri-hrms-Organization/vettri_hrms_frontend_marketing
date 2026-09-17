import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductModules } from "@/components/ProductModules";
import {
  AutomationSecurity,
  ConnectedSystem,
  EmployeeExperience,
  FinalCta,
  HrItDifference,
  IntelligenceSection,
  Lifecycle,
  PricingPreview,
  ProofRail,
  SoftwareAndSupport,
  ValueStrip,
  WorkplaceTechnology,
} from "@/components/MarketingSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connected HR and workplace operations",
  description: "Vettri connects people operations, HR workflows, devices, software, and workplace technology in one operating layer.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ValueStrip />
        <ProofRail />
        <ConnectedSystem />
        <ProductModules />
        <HrItDifference />
        <Lifecycle />
        <IntelligenceSection />
        <EmployeeExperience />
        <WorkplaceTechnology />
        <SoftwareAndSupport />
        <AutomationSecurity />
        <PricingPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
