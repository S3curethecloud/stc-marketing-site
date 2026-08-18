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
  image = siteConfig.social.ogImage,
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
