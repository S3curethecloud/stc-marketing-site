import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  image = "/images/og/stc-og-default.png",
}: MetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

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
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
