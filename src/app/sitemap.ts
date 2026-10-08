export const dynamic = "force-static";
import type { MetadataRoute } from "next";

const baseUrl = "https://cloudbond.ltd";
const lastModified = "2026-01-01";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/platform", changeFrequency: "monthly", priority: 0.9 },
  { path: "/platform/multi-cloud-networking", changeFrequency: "monthly", priority: 0.8 },
  { path: "/platform/cloud-interconnects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/platform/hybrid-connectivity", changeFrequency: "monthly", priority: 0.8 },
  { path: "/platform/network-automation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/platform/secure-connectivity", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions/cloud-migration", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/global-expansion", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/network-modernization", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.7 },
  { path: "/resources/multi-cloud-needs-its-own-network-layer", changeFrequency: "yearly", priority: 0.6 },
  { path: "/resources/interconnects-vs-vpns", changeFrequency: "yearly", priority: 0.6 },
  { path: "/resources/the-hidden-cost-of-flat-cloud-networking", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
