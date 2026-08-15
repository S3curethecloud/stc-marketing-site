export type CareerRole = {
  slug: string;
  title: string;
  level: string;
  type: string;
  location: string;
  category: string;
  summary: string;
  overview: string;
  responsibilities: readonly string[];
  qualifications: readonly string[];
  preferred: readonly string[];
  impactAreas: readonly string[];
};

export const careerRoles: readonly CareerRole[] = [
  {
    slug: "lead-enterprise-ai-security-architect",
    title: "Lead Enterprise AI Security Architect",
    level: "Senior / Principal",
    type: "Future role",
    location: "Remote-first / Client-facing",
    category: "AI Security Architecture",
    summary:
      "Lead enterprise AI security architecture, cloud governance, and secure AI adoption initiatives across distributed client environments.",
    overview:
      "This role is for a senior architect who can translate ambiguous business, security, AI, cloud, and compliance needs into scalable, maintainable, implementation-ready technical designs. You will help clients shape secure AI adoption strategies, AI security architectures, control models, and delivery roadmaps.",
    responsibilities: [
      "Lead client-facing AI security architecture engagements with CISOs, CTOs, CIOs, AI leaders, cloud leaders, and compliance stakeholders.",
      "Design secure architectures for GenAI applications, LLM systems, RAG pipelines, agentic workflows, AI gateways, MCP gateways, and enterprise AI platforms.",
      "Develop threat models, reference architectures, architecture decision records, control mappings, and implementation roadmaps.",
      "Translate frameworks such as NIST AI RMF, OWASP LLM Top 10, MITRE ATLAS, ISO/IEC 42001, and internal security policy into practical architecture guidance.",
      "Partner with client teams to align security, cloud, data, governance, compliance, and engineering delivery priorities.",
      "Support proposal shaping, executive workshops, architecture reviews, and solution-design conversations.",
    ],
    qualifications: [
      "8+ years of experience across cybersecurity, cloud security, enterprise architecture, platform security, GRC, AppSec, IAM, SecOps, or related domains.",
      "Hands-on understanding of GenAI, LLM deployment patterns, RAG systems, agentic workflows, AI gateways, or AI-enabled platform architecture.",
      "Working knowledge of AI-specific risks including prompt injection, data leakage, model abuse, insecure tool use, model supply-chain exposure, and agentic workflow risk.",
      "Experience designing secure cloud or distributed system architectures across AWS, Azure, GCP, Kubernetes, SaaS, APIs, or regulated environments.",
      "Ability to communicate with executive stakeholders and technical teams with clarity, structure, and confidence.",
    ],
    preferred: [
      "Experience with NIST AI RMF, ISO/IEC 42001, EU AI Act readiness, SOC 2 readiness, model risk management, or responsible AI programs.",
      "Experience with Claude, OpenAI, Azure OpenAI, Anthropic, GitHub Copilot, Cursor, Codex, or similar AI delivery tools.",
      "Experience leading workshops, writing SOWs, shaping client proposals, or advising C-suite stakeholders.",
      "Strong portfolio of architecture diagrams, security design documents, ADRs, control mappings, or delivery roadmaps.",
    ],
    impactAreas: [
      "AI security architecture",
      "Secure AI adoption",
      "Cloud governance",
      "Client advisory",
    ],
  },
  {
    slug: "cloud-governance-architect",
    title: "Cloud Governance Architect",
    level: "Senior",
    type: "Future role",
    location: "Remote-first / Client-facing",
    category: "Cloud Governance",
    summary:
      "Design cloud governance, IAM, platform security, Kubernetes, policy, and secure operating models for AI-enabled enterprise environments.",
    overview:
      "This role helps clients modernize cloud environments while keeping governance, identity, policy, security, resilience, and compliance aligned. You will shape target-state cloud governance models that support secure AI adoption and enterprise platform maturity.",
    responsibilities: [
      "Assess client cloud governance posture across AWS, Azure, GCP, Kubernetes, IAM, secrets, networking, policy, and platform engineering.",
      "Design cloud governance architecture, workload identity models, privileged access patterns, and policy-as-code guardrails.",
      "Define secure operating models for multi-cloud, Kubernetes, platform engineering, and AI-enabled workloads.",
      "Partner with security, platform, risk, audit, and application teams to align governance with delivery reality.",
      "Produce reference architectures, control maps, implementation roadmaps, and engineering guardrails.",
      "Support executive and technical workshops for cloud modernization and secure AI platform readiness.",
    ],
    qualifications: [
      "6+ years of experience in cloud architecture, cloud security, platform engineering, IAM, infrastructure, Kubernetes, or enterprise security.",
      "Strong understanding of AWS, Azure, GCP, Kubernetes, IAM, secrets management, networking, CI/CD, and infrastructure-as-code.",
      "Experience designing governance models for cloud-native platforms, regulated workloads, or enterprise modernization initiatives.",
      "Ability to connect business goals, security controls, operational constraints, and engineering implementation paths.",
    ],
    preferred: [
      "Experience supporting AI/ML, GenAI, data platforms, RAG pipelines, or AI-enabled cloud workloads.",
      "Experience with zero trust, non-human identity governance, workload identity, policy-as-code, or Kubernetes security.",
      "Certifications or practical depth in AWS, Azure, GCP, Kubernetes, security architecture, or cloud governance.",
    ],
    impactAreas: [
      "Cloud governance",
      "IAM and workload identity",
      "Kubernetes security",
      "Platform modernization",
    ],
  },
  {
    slug: "secure-ai-engineer",
    title: "Secure AI Engineer",
    level: "Mid / Senior",
    type: "Future role",
    location: "Remote-first",
    category: "Secure AI Engineering",
    summary:
      "Build and validate secure AI patterns across LLM applications, RAG systems, AI gateways, agentic workflows, and evaluation pipelines.",
    overview:
      "This role is for an engineer who can move between secure implementation, AI workflow design, evaluation, automation, and architecture support. You will help prototype and validate the secure patterns that support client-facing architecture work.",
    responsibilities: [
      "Prototype secure AI workflows, RAG pipelines, AI gateways, agentic workflows, and governance-aware application patterns.",
      "Implement proof-of-concept controls for prompt injection defense, tool-use boundaries, output validation, audit logging, and sensitive-data handling.",
      "Support architecture teams with working examples, reference implementations, and implementation-ready technical guidance.",
      "Use AI-assisted development tools responsibly in daily delivery while preserving code quality, security, and review discipline.",
      "Contribute to evaluation harnesses, test cases, documentation, and reusable implementation patterns.",
    ],
    qualifications: [
      "3+ years of software engineering, cloud engineering, platform engineering, security engineering, or AI application development experience.",
      "Hands-on experience with Python, TypeScript, APIs, cloud services, CI/CD, containers, or secure application patterns.",
      "Working understanding of LLM applications, RAG, embeddings, agents, tool calling, AI gateways, model APIs, or AI-assisted development.",
      "Familiarity with OWASP LLM risks, secure coding, identity, logging, data protection, and threat modeling.",
    ],
    preferred: [
      "Experience with OpenAI, Azure OpenAI, Anthropic Claude, LangChain, LangGraph, LlamaIndex, vector databases, or model evaluation tooling.",
      "Experience with GitHub Copilot, Cursor, Claude Code, Codex, or similar agentic coding workflows.",
      "Experience building internal demos, architecture proof assets, or client-ready prototypes.",
    ],
    impactAreas: [
      "Secure AI prototypes",
      "RAG and LLM workflows",
      "AI evaluation",
      "Implementation patterns",
    ],
  },
  {
    slug: "ai-governance-consultant",
    title: "AI Governance Consultant",
    level: "Consultant / Senior Consultant",
    type: "Future role",
    location: "Remote-first / Client-facing",
    category: "AI Governance",
    summary:
      "Translate AI risk, compliance, privacy, and governance needs into practical control models and client-ready operating guidance.",
    overview:
      "This role helps clients turn AI governance frameworks, regulatory pressure, risk concerns, and internal policy needs into practical operating models, controls, workflows, and documentation that teams can actually use.",
    responsibilities: [
      "Conduct AI governance, risk, and compliance assessments for enterprise AI initiatives.",
      "Map AI use cases to risk tiers, controls, oversight expectations, and governance workflows.",
      "Support alignment to NIST AI RMF, ISO/IEC 42001, EU AI Act readiness, OWASP LLM risks, privacy expectations, and internal policies.",
      "Develop governance operating models, control libraries, process flows, documentation, and stakeholder-ready materials.",
      "Work with security, legal, privacy, risk, audit, product, engineering, and executive teams.",
      "Support workshops, client interviews, maturity assessments, and implementation roadmap development.",
    ],
    qualifications: [
      "3+ years of experience in AI governance, cybersecurity, risk, privacy, compliance, technology consulting, audit, model risk, or data governance.",
      "Understanding of AI/ML systems, GenAI risks, model lifecycle concepts, responsible AI, human oversight, and explainability.",
      "Experience translating policy or regulatory concepts into practical controls, processes, documentation, or operating models.",
      "Strong client-facing communication, structured thinking, and documentation skills.",
    ],
    preferred: [
      "Experience with NIST AI RMF, ISO/IEC 42001, EU AI Act, SOC 2, GDPR, HIPAA, model risk management, or responsible AI programs.",
      "Experience with AI use-case inventories, risk assessments, bias/fairness review, lifecycle monitoring, or governance committees.",
      "Consulting experience or experience working across legal, risk, audit, privacy, security, and engineering teams.",
    ],
    impactAreas: [
      "AI governance",
      "Risk and compliance",
      "Control mapping",
      "Operating model design",
    ],
  },
  {
    slug: "healthcare-ai-workflow-architect",
    title: "Healthcare AI Workflow Architect",
    level: "Senior",
    type: "Future role",
    location: "Remote-first / Client-facing",
    category: "Healthcare AI",
    summary:
      "Design secure, reviewable AI workflows for healthcare, behavioral health, telehealth, and regulated clinical operations.",
    overview:
      "This role focuses on healthcare and regulated workflow design. You will help shape secure, human-in-the-loop AI workflows that support clinical operations, sensitive-data handling, review before finalization, auditability, and cloud integration.",
    responsibilities: [
      "Design secure AI-assisted workflows for healthcare, behavioral health, telehealth, intake, charting, documentation, and operational support.",
      "Define human review, approval, exception handling, audit logging, and sensitive-data protection patterns.",
      "Partner with clinical, operational, compliance, privacy, security, and engineering stakeholders.",
      "Translate HIPAA-sensitive and regulated workflow needs into architecture diagrams, process models, risk controls, and implementation roadmaps.",
      "Support secure integration planning across cloud, APIs, EHR-adjacent workflows, identity, data stores, and AI services.",
    ],
    qualifications: [
      "5+ years of experience in healthcare technology, clinical workflow design, health IT, cloud architecture, security, product architecture, or regulated systems.",
      "Understanding of healthcare operations, sensitive-data workflows, HIPAA-sensitive design considerations, human review, and auditability.",
      "Experience translating business and compliance needs into workflow architecture, technical design, or implementation guidance.",
      "Strong communication skills with clinical, executive, technical, and compliance stakeholders.",
    ],
    preferred: [
      "Experience with telehealth, behavioral health, EHR workflows, AI-assisted documentation, clinical intake, or patient-facing workflow design.",
      "Experience with cloud security, data protection, AI governance, or regulated AI workflow review.",
      "Experience creating architecture diagrams, workflow maps, control mappings, or implementation roadmaps.",
    ],
    impactAreas: [
      "Healthcare AI workflows",
      "Sensitive data",
      "Human review",
      "Regulated implementation",
    ],
  },
] as const;

export function getCareerRole(slug: string) {
  return careerRoles.find((role) => role.slug === slug);
}
