import { brand } from "./brand";

export const siteConfig = {
  name: brand.name,
  shortName: brand.shortName,

  platformName:
    "Enterprise AI, Cloud, Security & Governance",

  fullName:
    `${brand.name} Enterprise AI, Cloud, Security & Governance`,

  category:
    "Enterprise AI Architecture, Cloud Platforms, Cybersecurity, and Governance",

  suiteName:
    "Enterprise AI, Cloud, Security & Governance",

  domain: brand.domain,
  url: brand.url,

  description:
    "IKEVAR architects and engineers secure, governed enterprise systems across AI, cloud, security, identity, data, and autonomous workflows.",

  tagline:
    brand.promise,

  brandSignature:
    brand.tagline,

  primaryCta: {
    label: "Start an Architecture Conversation",
    href: "/request-demo",
  },

  secondaryCta: {
    label: "Explore Capabilities",
    href: "/services",
  },

  contact: {
    salesEmail: brand.email,
    demoPath: "/request-demo",
  },

  social: {
    linkedin: brand.social.linkedin,
    youtube: brand.social.youtube,
    x: brand.social.x,
    github: brand.social.github,
    ogImage:
      "/brand/ikevar/ikevar-social-preview.png",
  },

  legacy:
    brand.legacy,
} as const;
