import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

const PAGES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/pricing", priority: 0.9 },
  { path: "/security", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/terms", priority: 0.4 },
  { path: "/privacy", priority: 0.4 },
  { path: "/dpa", priority: 0.4 },
  { path: "/refund-policy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
