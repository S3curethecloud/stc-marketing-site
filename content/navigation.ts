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
    description: "Zero-Trust Runtime for AI Agents."
  },
  {
    label: "Copilot Voice Intelligence",
    href: "/products/copilot-voice-intelligence",
    description: "Voice-narrated deterministic intelligence for executives, analysts, and architects."
  },
  {
    label: "SecureTheCloud for Kubernetes",
    href: "/products/kubernetes",
    description: "Kubernetes-native enforcement, workload identity, cluster intelligence, and SIEM-ready telemetry."
  },
  {
    label: "Agent Sovereignty Zones",
    href: "/products/agent-sovereignty-zones",
    description: "Cross-domain trust with signed assertions, trust registries, local policy verification, and dual audit anchoring."
  }
];

export const mainNavItems: NavItem[] = [
  {
    label: "Product",
    href: "/products"
  },
  {
    label: "Aegis Runtime",
    href: "/products/aegis-runtime"
  },
  {
    label: "Platform",
    href: "/platform"
  },
  {
    label: "Use Cases",
    href: "/use-cases"
  },
  {
    label: "Architecture",
    href: "/architecture"
  },
  {
    label: "Security",
    href: "/security"
  },
  {
    label: "Company",
    href: "/company"
  }
];

export const footerNavGroups: FooterNavGroup[] = [
  {
    title: "Products",
    items: productNavItems
  },
  {
    title: "Platform",
    items: [
      { label: "Platform", href: "/platform" },
      { label: "Architecture", href: "/architecture" },
      { label: "Security", href: "/security" },
      { label: "Use Cases", href: "/use-cases" }
    ]
  },
  {
    title: "Company",
    items: [
      { label: "Company", href: "/company" },
      { label: "Request Demo", href: "/request-demo" }
    ]
  }
];
