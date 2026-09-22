import type { Metadata } from "next";
import FigmaMarketing from "@/components/FigmaMarketing";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Connected Workplace Platform for Modern Teams",
  description: "Vettri connects employee management, attendance, leave, payroll, recruitment and workplace technology in one connected platform.",
  path: "/",
  imageAlt: "Vettri connected workplace platform",
});

export default function HomePage() {
  return <FigmaMarketing />;
}
