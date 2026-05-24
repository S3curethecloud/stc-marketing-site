import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/ecosystem", changeFrequency: "monthly", priority: 0.95 },
    { path: "/platform", changeFrequency: "monthly", priority: 0.9 },
    { path: "/products", changeFrequency: "monthly", priority: 0.9 },
    { path: "/products/aegis-runtime", changeFrequency: "monthly", priority: 0.9 },
    { path: "/products/kubernetes", changeFrequency: "monthly", priority: 0.85 },
    { path: "/products/agent-sovereignty-zones", changeFrequency: "monthly", priority: 0.85 },
    { path: "/products/agent-blackbox", changeFrequency: "monthly", priority: 0.85 },
    { path: "/products/agent-risk-exchange", changeFrequency: "monthly", priority: 0.8 },
    { path: "/products/riskdna", changeFrequency: "monthly", priority: 0.8 },
    { path: "/products/veracity", changeFrequency: "monthly", priority: 0.8 },
    { path: "/products/safp", changeFrequency: "monthly", priority: 0.75 },
    { path: "/products/secret-vault", changeFrequency: "monthly", priority: 0.75 },
    { path: "/products/sagemaker-risk-intelligence", changeFrequency: "monthly", priority: 0.7 },
    { path: "/products/copilot-voice-intelligence", changeFrequency: "monthly", priority: 0.75 },
    { path: "/architecture", changeFrequency: "monthly", priority: 0.8 },
    { path: "/security", changeFrequency: "monthly", priority: 0.75 },
    { path: "/use-cases", changeFrequency: "monthly", priority: 0.75 },
    { path: "/company", changeFrequency: "monthly", priority: 0.65 },
    { path: "/request-demo", changeFrequency: "monthly", priority: 0.7 },
    { path: "/request-demo/success", changeFrequency: "monthly", priority: 0.3 },
  ] as const;

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
