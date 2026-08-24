import { brand } from "./brand";

export type IkevarProduct = {
  id: string;
  number: string;
  name: string;
  descriptor: string;
  category: string;
  question: string;
  summary: string;
  role: string;
  href: string;
};

export const ikevarProducts: readonly IkevarProduct[] = [
  {
    id: "nexus",
    number: "01",
    name: brand.products.nexus.name,
    descriptor: brand.products.nexus.description,
    category: "Architecture Intelligence",
    question: "What should we build?",
    summary:
      "Turns ambiguous enterprise AI requirements into architecture decisions, control boundaries, implementation plans, evaluation requirements, and staged rollout models.",
    role:
      "Design intelligence",
    href: "/products#nexus",
  },
  {
    id: "covenant",
    number: "02",
    name: brand.products.covenant.name,
    descriptor: brand.products.covenant.description,
    category: "Enterprise Constitutional Intelligence",
    question: "What must the enterprise require or prohibit?",
    summary:
      "Translates policies, regulations, contracts, risk appetite, architecture standards, and organizational obligations into machine-readable enterprise invariants.",
    role:
      "Enterprise constitution",
    href: "/products#covenant",
  },
  {
    id: "futurestate",
    number: "03",
    name: brand.products.futurestate.name,
    descriptor: brand.products.futurestate.description,
    category: "Enterprise Consequence Intelligence",
    question: "What is likely to happen if we make this change?",
    summary:
      "Models probable security, reliability, identity, data, compliance, cost, customer, and recovery consequences before consequential enterprise changes become real.",
    role:
      "Consequence intelligence",
    href: "/products#futurestate",
  },
  {
    id: "ata",
    number: "04",
    name: brand.products.ata.name,
    descriptor: brand.products.ata.description,
    category: "Autonomous Trust",
    question: "May this autonomous action commit?",
    summary:
      "Evaluates consequential autonomous transactions against identity, policy, authority, evidence, risk, approvals, and enterprise constraints before commitment.",
    role:
      "Commit authority",
    href: "/products#ata",
  },
  {
    id: "humanize-enterprise",
    number: "05",
    name: brand.products.humanize.name,
    descriptor: brand.products.humanize.description,
    category: "Enterprise AI Productivity",
    question: "How do people and AI work effectively together?",
    summary:
      "Governed enterprise AI infrastructure for improving human-machine collaboration, content quality, workflow productivity, and enterprise knowledge work.",
    role:
      "Human + AI productivity",
    href: "/products#humanize-enterprise",
  },
] as const;
