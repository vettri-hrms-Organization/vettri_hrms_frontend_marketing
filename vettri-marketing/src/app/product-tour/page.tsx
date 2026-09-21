import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProductTour } from "@/components/ProductTour";
import { Reveal } from "@/components/Reveal";
import { GradientBackground } from "@/components/ui/gradient-background";
import { APP_URL } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Vettri HRMS Product Tour",
  description: "Explore how Vettri HRMS connects employee records, attendance, leave, payroll context and workplace technology.",
  path: "/product-tour",
});

export default function ProductTourPage() {
  return <>
    <Navbar />
    <main id="main-content">
      <section className="inner-hero inner-hero-dark">
        <GradientBackground variant="dark" overlayOpacity={0.18} />
        <div className="container">
          <Reveal>
            <div className="eyebrow">Product tour</div>
            <h1 className="display">See the operating picture Vettri is built around.</h1>
            <p className="body-copy lg">Move from the employee record to the assigned device, the software it needs and the work that keeps the workplace ready.</p>
            <a className="btn btn-primary" href={`${APP_URL}/signup`}>Start free <ArrowRight size={16} /></a>
          </Reveal>
        </div>
      </section>
      <ProductTour />
    </main>
    <Footer />
  </>;
}
