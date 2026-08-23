import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { siteConfig } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const socialImageUrl =
  `${siteConfig.url}${siteConfig.social.ogImage}`;

export const metadata: Metadata = {
  title: {
    default:
      `${siteConfig.name} | ${siteConfig.tagline}`,
    template:
      `%s | ${siteConfig.name}`,
  },

  description:
    siteConfig.description,

  metadataBase:
    new URL(siteConfig.url),

  alternates: {
    canonical: "/",
  },

  icons: {
    icon:
      "/brand/ikevar/favicon.svg",
    shortcut:
      "/brand/ikevar/favicon.svg",
    apple:
      "/brand/ikevar/favicon.svg",
  },

  openGraph: {
    title:
      `${siteConfig.name} | ${siteConfig.tagline}`,

    description:
      siteConfig.description,

    url:
      siteConfig.url,

    siteName:
      siteConfig.name,

    type:
      "website",

    images: [
      {
        url:
          socialImageUrl,
        width: 1280,
        height: 640,
        alt:
          `${siteConfig.name} — ${siteConfig.brandSignature}`,
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      `${siteConfig.name} | ${siteConfig.tagline}`,

    description:
      siteConfig.description,

    images:
      [socialImageUrl],
  },

  robots: {
    index:
      true,

    follow:
      true,

    googleBot: {
      index:
        true,

      follow:
        true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },
  },
};

const organizationSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "Organization",

  name:
    siteConfig.name,

  url:
    siteConfig.url,

  description:
    siteConfig.description,

  email:
    siteConfig.contact.salesEmail,

  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.youtube,
    siteConfig.social.x,
    siteConfig.social.github,
  ],

  contactPoint: {
    "@type":
      "ContactPoint",

    contactType:
      "sales",

    email:
      siteConfig.contact.salesEmail,

    url:
      `${siteConfig.url}${siteConfig.contact.demoPath}`,
  },

  knowsAbout: [
    "Enterprise AI architecture",
    "Agentic AI",
    "Autonomous systems",
    "Cloud platform engineering",
    "Cybersecurity architecture",
    "Zero trust",
    "AI governance",
    "AI assurance",
    "Identity and access architecture",
    "Retrieval-augmented generation security",
    "Runtime AI controls",
    "Evidence architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                organizationSchema,
              ).replace(
                /</g,
                "\\u003c",
              ),
          }}
        />

        <SiteHeader />

        <main className="flex-1">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
