import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
export default function sitemap(): MetadataRoute.Sitemap {
	return ["/", "/platform", "/solutions", "/why-vettri", "/product-tour", "/security", "/pricing", "/contact"].map((path) => ({
		url: `${SITE_URL}${path}`,
		lastModified: new Date(),
	}));
}
