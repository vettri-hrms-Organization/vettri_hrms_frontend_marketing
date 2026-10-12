import type { Metadata } from "next";
import FigmaMarketing from "@/components/FigmaMarketing";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI-Powered HRMS with Vettri AI Assistant",
  description: "Meet Vettri AI, an AI HR assistant for conversational leave requests, checking your leave information and finding guidance for supported HRMS workflows.",
  path: "/",
  imageAlt: "Vettri AI assistant for supported HRMS workflows",
});

export default function HomePage() {
  return <FigmaMarketing />;
}
