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
    label: "Agent Blackbox",
    href: "/products/agent-blackbox",
    description:
      "Audit-ready evidence capture, replay, and investigation for autonomous systems.",
  },
  {
    label: "RiskDNA",
    href: "/products/riskdna",
    description:
      "Predictive risk scoring, blast-radius intelligence, and autonomous-action exposure analysis.",
  },
];

export const mainNavItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Evidence",
    href: "/evidence",
  },
  {
    label: "Company",
    href: "/company",
  },
];

export const footerNavGroups: FooterNavGroup[] = [
  {
    title: "Services",
    items: [
      { label: "AI Security Architecture", href: "/services#ai-security-architecture" },
      { label: "Cloud Governance", href: "/services#cloud-governance" },
      { label: "Secure AI Adoption", href: "/services#secure-ai-adoption" },
      { label: "Governance and Compliance", href: "/services#governance-compliance" },
      { label: "Executive Advisory", href: "/services#executive-advisory" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Healthcare", href: "/industries#healthcare" },
      { label: "Financial Services", href: "/industries#financial-services" },
      { label: "Technology and SaaS", href: "/industries#technology" },
      { label: "Retail", href: "/industries#retail" },
      { label: "Regulated Environments", href: "/industries#regulated" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Company", href: "/company" },
      { label: "Evidence", href: "/evidence" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/careers" },
      { label: "Request Consultation", href: "/request-demo" },
    ],
  },
];
