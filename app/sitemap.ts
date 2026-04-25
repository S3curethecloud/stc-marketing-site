import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/products", changeFrequency: "monthly", priority: 0.9 },
    { path: "/products/aegis-runtime", changeFrequency: "monthly", priority: 0.9 },
    { path: "/products/copilot-voice-intelligence", changeFrequency: "monthly", priority: 0.8 },
    { path: "/products/kubernetes", changeFrequency: "monthly", priority: 0.8 },
    { path: "/products/agent-sovereignty-zones", changeFrequency: "monthly", priority: 0.8 },
    { path: "/platform", changeFrequency: "monthly", priority: 0.8 },
    { path: "/use-cases", changeFrequency: "monthly", priority: 0.8 },
    { path: "/architecture", changeFrequency: "monthly", priority: 0.8 },
    { path: "/security", changeFrequency: "monthly", priority: 0.7 },
    { path: "/company", changeFrequency: "monthly", priority: 0.7 },
    { path: "/request-demo", changeFrequency: "monthly", priority: 0.6 },
  ] as const;

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
