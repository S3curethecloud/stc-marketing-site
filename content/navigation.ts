export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type FooterNavGroup = {
  title: string;
  items: NavItem[];
};

export const productNavItems: NavItem[] = [
  {
    label: "Aegis Runtime",
    href: "/products/aegis-runtime",
    description:
      "Runtime authority and deterministic governance for AI-agent actions before execution.",
  },
  {
    label: "Kubernetes Sentinel",
    href: "/products/kubernetes",
    description:
      "Enterprise Kubernetes governance, runtime enforcement, workload intelligence, and deterministic policy orchestration.",
  },
  {
    label: "Agent Sovereignty Zones",
    href: "/products/agent-sovereignty-zones",
    description:
      "Cross-zone trust verification with signed assertions, trust registries, local policy verification, and dual audit anchoring.",
  },
  {
    label: "SecureTheCloud Trust Intelligence Copilot",
    href: "/products/copilot-voice-intelligence",
    description:
      "Ecosystem Evidence & Readiness Navigator for governed explanations, evidence tracing, and authority-boundary review.",
  },
];

export const mainNavItems: NavItem[] = [
  {
    label: "Product",
    href: "/products",
  },
  {
    label: "Ecosystem",
    href: "/ecosystem",
  },
  {
    label: "Platform",
    href: "/platform",
  },
  {
    label: "Use Cases",
    href: "/use-cases",
  },
  {
    label: "Architecture",
    href: "/architecture",
  },
  {
    label: "Security",
    href: "/security",
  },
  {
    label: "Company",
    href: "/company",
  },
];

export const footerNavGroups: FooterNavGroup[] = [
  {
    title: "Products",
    items: productNavItems,
  },
  {
    title: "Control Plane",
    items: [
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "Platform", href: "/platform" },
      { label: "Architecture", href: "/architecture" },
      { label: "Security", href: "/security" },
      { label: "Use Cases", href: "/use-cases" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Company", href: "/company" },
      { label: "Request Demo", href: "/request-demo" },
    ],
  },
];
