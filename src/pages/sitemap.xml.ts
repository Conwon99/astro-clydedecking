import type { APIRoute } from "astro";
import { absoluteUrl } from "@/data/business";
import { services } from "@/data/services";
import { categories } from "@/data/categories";
import { locations } from "@/data/locations";
import { locationServicePages } from "@/data/locationServices";
import { getLocationServicePath } from "@/data/locationServices";

interface SitemapEntry {
  loc: string;
  changefreq: string;
  priority: string;
}

function buildEntries(): SitemapEntry[] {
  const today = new Date().toISOString().split("T")[0];
  const entries: SitemapEntry[] = [
    { loc: absoluteUrl("/"), changefreq: "weekly", priority: "1.0" },
    { loc: absoluteUrl("/services"), changefreq: "weekly", priority: "0.9" },
    { loc: absoluteUrl("/locations"), changefreq: "weekly", priority: "0.8" },
    { loc: absoluteUrl("/contact"), changefreq: "monthly", priority: "0.8" },
  ];

  for (const category of categories) {
    entries.push({ loc: absoluteUrl(`/${category.slug}`), changefreq: "weekly", priority: "0.8" });
  }

  for (const service of services) {
    entries.push({ loc: absoluteUrl(`/services/${service.slug}`), changefreq: "monthly", priority: "0.8" });
  }

  for (const location of locations) {
    entries.push({ loc: absoluteUrl(`/locations/${location.slug}`), changefreq: "monthly", priority: "0.7" });
  }

  for (const page of locationServicePages) {
    entries.push({
      loc: absoluteUrl(getLocationServicePath(page.locationSlug, page.categorySlug)),
      changefreq: "monthly",
      priority: "0.6",
    });
  }

  return entries.map((entry) => ({ ...entry, lastmod: today } as SitemapEntry & { lastmod: string }));
}

export const GET: APIRoute = () => {
  const entries = buildEntries() as (SitemapEntry & { lastmod: string })[];

  const urlset = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
