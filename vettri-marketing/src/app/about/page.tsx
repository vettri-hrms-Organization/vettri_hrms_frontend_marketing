import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Vettri HRMS",
  description: "Learn why Vettri HRMS was created and how its product philosophy connects people, HR operations and workplace technology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Vettri HRMS"
      title="Built by brothers for better workplaces."
      intro="Vettri HRMS is a modern HRMS platform for businesses that want a clearer, more connected way to manage people and everyday workplace operations."
      sections={[
        {
          title: "Built from a practical idea",
          body: "Vettri HRMS was born from two brothers, Vikkash and Hariharan, with a shared vision to make everyday business and HR operations simpler through practical technology. What started as an idea grew into a modern HRMS platform built for growing businesses.",
          items: ["Vikkash — Product & Technology", "Hariharan — Product & Technology"],
        },
        {
          title: "One clearer operating picture",
          body: "Vettri HRMS brings employee records, attendance, leave, payroll context and workplace technology into one connected experience, so teams can work with more context and less operational switching.",
          items: ["Employee and organization management", "Attendance, leave and payroll context", "Assets, devices, software and workplace workflows"],
        },
        {
          title: "Designed for growing businesses",
          body: "The product is built around a simple philosophy: make essential HR and workplace operations easier to understand, easier to coordinate and more useful for the people responsible for them.",
          items: ["A practical starting point for HR teams", "Connected context for HR, IT and managers", "A focused platform that grows with everyday work"],
        },
      ]}
    />
  );
}