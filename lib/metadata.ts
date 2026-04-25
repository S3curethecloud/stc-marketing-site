import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

function normalizePath(path: string) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function buildPageMetadata({
  title,
  description,
  path = "",
}: MetadataInput): Metadata {
  const normalizedPath = normalizePath(path);
  const url = `${siteConfig.url}${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
