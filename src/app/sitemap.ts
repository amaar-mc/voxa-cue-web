import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = ["", "/privacy", "/terms", "/support"] as const;

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-07-16T00:00:00.000Z"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}
