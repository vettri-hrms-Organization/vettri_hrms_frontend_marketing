import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenText, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Resources",
  description: "Guides, product updates, and onboarding resources from Vettri HRMS.",
  path: "/resources",
  imageAlt: "Vettri HRMS resources and documentation",
});

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="inner-page">
        <section className="inner-hero" style={{ paddingBottom: "clamp(3rem, 7vw, 6rem)" }}>
          <div className="container" style={{ display: "grid", placeItems: "center", paddingTop: "clamp(7rem, 18vw, 10rem)" }}>
            <div
              style={{
                width: "100%",
                maxWidth: 580,
                background: "rgba(255,255,255,0.82)",
                border: "1px solid rgba(148, 163, 184, 0.38)",
                borderRadius: 28,
                boxShadow: "0 24px 70px rgba(9, 32, 63, 0.08)",
                padding: "clamp(1.5rem, 4vw, 2.5rem)",
                textAlign: "center",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 78,
                  height: 78,
                  borderRadius: 20,
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto 1.1rem",
                  background: "linear-gradient(180deg, #eef5ff 0%, #e7f0ff 100%)",
                  color: "#1d4ed8",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <BookOpenText size={32} />
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.42rem 0.8rem",
                  borderRadius: 999,
                  background: "#eef6ff",
                  color: "#1d4ed8",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Documentation
              </div>

              <h1
                style={{
                  margin: "0 0 0.9rem",
                  fontSize: "clamp(2.15rem, 4vw, 3.15rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.065em",
                  color: "var(--navy)",
                  fontFamily: "var(--figma-display)",
                  fontWeight: 600,
                }}
              >
                Documentation is coming soon
              </h1>

              <p
                style={{
                  margin: "0 auto 1.75rem",
                  maxWidth: 470,
                  color: "var(--muted)",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                }}
              >
                We are polishing the guides, onboarding checklists, and product references for this section.
                Please check back soon or contact our team for a live walkthrough.
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                <Link href="/" className="btn btn-primary">
                  <ArrowLeft size={15} />
                  Back Home
                </Link>
                <Link href="/contact" className="btn btn-quiet">
                  Talk to the team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
