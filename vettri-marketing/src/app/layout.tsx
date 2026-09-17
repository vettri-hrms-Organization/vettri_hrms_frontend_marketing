import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/config";
import { LoadingIntro } from "@/components/LoadingIntro";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vettri | HR meets workplace operations",
    template: "%s | Vettri",
  },
  description:
    "One connected platform for your people, payroll, attendance, devices, software and workplace operations.",
  openGraph: {
    title: "Vettri | HR meets workplace operations",
    description:
      "HR knows your people. IT knows their devices. Vettri connects both — one operating layer for people and workplace technology.",
    type: "website",
    url: SITE_URL,
    siteName: "Vettri",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: "Vettri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vettri | HR meets workplace operations",
    description:
      "One connected platform for your people, payroll, attendance, devices, software and workplace operations.",
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
  return (
    <html lang="en">
      <body className="site-shell">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <LoadingIntro />
        {children}
      </body>
    </html>
  );
}
