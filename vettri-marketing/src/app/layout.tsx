import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/config";
import { LoadingIntro } from "@/components/LoadingIntro";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vettri HRMS - Modern HRMS Software for Businesses",
    template: "%s | Vettri HRMS",
  },
  description:
    "Vettri HRMS is a modern HR management platform for employee records, attendance, leave, payroll context and everyday workplace operations.",
  openGraph: {
    title: "Vettri HRMS - Modern HRMS Software for Businesses",
    description:
      "Manage employee records, attendance, leave, payroll context and workplace operations in one connected HRMS platform.",
    type: "website",
    url: SITE_URL,
    siteName: "Vettri HRMS",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: "Vettri HRMS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vettri HRMS - Modern HRMS Software for Businesses",
    description:
      "Manage employee records, attendance, leave, payroll context and workplace operations in one connected HRMS platform.",
    images: ["/brand/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/brand/vettri-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/vettri-favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/brand/vettri-apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const softwareId = `${SITE_URL}/#software`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: "Vettri HRMS",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/vettri-logo-full.png`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "customersupport@vettrihrms.in",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: "Vettri HRMS",
      url: SITE_URL,
      publisher: { "@id": organizationId },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": softwareId,
      name: "Vettri HRMS",
      description: "Vettri HRMS is modern HRMS software for businesses that connects employee records, attendance, leave, payroll context and workplace operations.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE_URL,
      provider: { "@id": organizationId },
    },
  ];

  return (
    <html lang="en">
      <body className="site-shell">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <LoadingIntro />
        {children}
      </body>
    </html>
  );
}
