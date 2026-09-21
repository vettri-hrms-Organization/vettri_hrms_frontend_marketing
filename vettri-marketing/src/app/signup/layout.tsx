import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Start with Vettri HRMS",
  description: "Start your Vettri HRMS account setup for connected employee and workplace operations.",
  path: "/signup",
  noIndex: true,
});

export default function SignupLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}