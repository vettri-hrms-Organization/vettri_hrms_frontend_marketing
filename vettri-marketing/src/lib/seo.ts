import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
  noIndex?: boolean;
};

export function createPageMetadata({ title, description, path, imageAlt, noIndex = false }: PageSeo): Metadata {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Vettri HRMS",
      images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: imageAlt ?? `${title} - Vettri HRMS` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/og-image.png"],
    },
  };
}