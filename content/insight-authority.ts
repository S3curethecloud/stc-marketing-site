export type InsightAuthority = {
  taxonomy: string;
  problem: string;
  architecturePrinciple: string;
  tradeoffs: readonly string[];
  controlImplications: readonly string[];
  evidence: readonly string[];
  implementationArtifacts: readonly string[];
  leadershipDecisions: readonly string[];
  engineeringBuild: readonly string[];
  serviceHref: string;
  serviceLabel: string;
  industryHref: string;
  industryLabel: string;
};

export const insightAuthorityBySlug: Record<string, InsightAuthority> = {
  "why-secure-ai-adoption-needs-architecture-before-acceleration": {
    taxonomy: "Enterprise Architecture Brief",
    problem: "AI programs often scale vendor choices and pilots before identity, data, governance, and operating boundaries are explicit.",
    architecturePrinciple: "Define the control plane and trust boundaries before scaling use cases. Architecture should make ownership, access, evidence, and implementation decisions visible across teams.",
    tradeoffs: [
      "Faster experimentation versus production-grade control consistency",
      "Central platform standards versus business-unit autonomy",
      "Broad model access versus explicit workload and data boundaries",
    ],
    controlImplications: [
      "Risk-tier use cases before production approval",
      "Separate experimentation, staging, and production patterns",
      "Require explicit identity, authorization, logging, and exception paths",
    ],
    evidence: [
      "Architecture decision records",
      "Control ownership map",
      "Use-case risk classification",
      "Production readiness review evidence",
    ],
    implementationArtifacts: [
      "AI reference architecture",
      "Trust-boundary and data-flow diagrams",
      "Control map",
      "Implementation roadmap",
    ],
    leadershipDecisions: [
      "Which AI use cases are strategic enough to standardize around",
      "Which controls are mandatory before production",
      "Who owns policy exceptions and residual risk",
    ],
    engineeringBuild: [
      "Reusable identity and authorization patterns",
      "Centralized model and gateway access paths",
      "Standard logging, evidence, and environment separation",
    ],
    serviceHref: "/services#secure-ai-adoption",
    serviceLabel: "Secure AI Adoption Strategy",
    industryHref: "/industries",
    industryLabel: "Industry architecture priorities",
  },
  "designing-secure-agentic-systems-with-explicit-control-boundaries": {
    taxonomy: "Agentic AI Architecture Note",
    problem: "Agents can retrieve context, call tools, and influence workflows, which creates an authority problem rather than only a model-quality problem.",
    architecturePrinciple: "Treat each agent as a governed workload identity. Retrieval, tool use, secrets, and mutating actions should sit behind explicit authorization and policy gates.",
    tradeoffs: [
      "Agent autonomy versus approval and policy latency",
      "Tool breadth versus least privilege",
      "Rich context versus retrieval and data-exposure risk",
    ],
    controlImplications: [
      "Scope tool permissions by role, task, and data sensitivity",
      "Authorize retrieval before context reaches the model",
      "Require review for high-impact or irreversible actions",
    ],
    evidence: [
      "Tool-call logs",
      "Policy decision records",
      "Context-source provenance",
      "Human approval records where required",
    ],
    implementationArtifacts: [
      "Agent trust model",
      "Tool authorization matrix",
      "Gateway policy design",
      "Prompt-injection threat model",
    ],
    leadershipDecisions: [
      "Which actions may be autonomous",
      "Which actions require human approval",
      "What level of evidence is required for investigation and audit",
    ],
    engineeringBuild: [
      "Agent identity and scoped credentials",
      "Policy gates between reasoning and execution",
      "Retrieval authorization and tool allowlists",
      "Replayable audit telemetry",
    ],
    serviceHref: "/services#ai-security-architecture",
    serviceLabel: "Enterprise AI Security Architecture",
    industryHref: "/industries#technology",
    industryLabel: "Technology and SaaS",
  },
  "building-ai-governance-that-scales-with-enterprise-ambition": {
    taxonomy: "AI Governance Operating Model",
    problem: "Governance fails when policy, risk review, and engineering delivery operate as separate processes.",
    architecturePrinciple: "Governance should be embedded into intake, platform workflows, controls, evidence, and production approval rather than added after deployment.",
    tradeoffs: [
      "Central governance consistency versus local business flexibility",
      "Review depth versus delivery speed",
      "Policy completeness versus implementable control scope",
    ],
    controlImplications: [
      "Risk tiers should drive access, review, logging, and deployment requirements",
      "Controls need named owners and implementation patterns",
      "Exceptions need explicit approval and expiration paths",
    ],
    evidence: [
      "Use-case intake records",
      "Risk-tier decisions",
      "Control evidence register",
      "Exception and approval history",
    ],
    implementationArtifacts: [
      "AI governance operating model",
      "Control library",
      "Evidence register",
      "Governance workflow map",
    ],
    leadershipDecisions: [
      "Risk appetite and approval thresholds",
      "Decision rights across business, security, privacy, legal, and engineering",
      "Which controls are enterprise standards versus use-case specific",
    ],
    engineeringBuild: [
      "Governance gates in platform workflows",
      "Policy-as-code where feasible",
      "Evidence collection integrated with delivery pipelines",
    ],
    serviceHref: "/services#governance-compliance",
    serviceLabel: "AI Governance and Compliance Readiness",
    industryHref: "/industries#financial-services",
    industryLabel: "Financial Services",
  },
  "designing-secure-agent-architectures-for-the-enterprise-era": {
    taxonomy: "Reference Architecture Note",
    problem: "Enterprise agents are often designed as application features even though they behave more like distributed integration workloads with delegated authority.",
    architecturePrinciple: "Design agents with explicit purpose, identity, permissions, retrieval boundaries, tool controls, policy decisions, and evidence capture.",
    tradeoffs: [
      "Shared agent platforms versus purpose-built agent boundaries",
      "Central gateways versus direct service integrations",
      "Developer flexibility versus reusable enterprise controls",
    ],
    controlImplications: [
      "Separate read-only retrieval from mutating actions",
      "Require policy decisions before sensitive execution",
      "Constrain credentials and secrets by workload identity",
    ],
    evidence: [
      "Agent execution traces",
      "Gateway decisions",
      "Tool and retrieval provenance",
      "Security evaluation results",
    ],
    implementationArtifacts: [
      "Agent reference architecture",
      "MCP or tool-gateway design",
      "Authorization model",
      "Runtime evidence model",
    ],
    leadershipDecisions: [
      "Which agent capabilities become enterprise platform services",
      "Which actions remain human-controlled",
      "What control plane is required before scaling agents",
    ],
    engineeringBuild: [
      "AI and tool gateways",
      "Scoped agent identities",
      "Policy enforcement points",
      "Trace and evidence pipelines",
    ],
    serviceHref: "/services#ai-security-architecture",
    serviceLabel: "Enterprise AI Security Architecture",
    industryHref: "/industries#technology",
    industryLabel: "Technology and SaaS",
  },
  "modernizing-cloud-platforms-for-secure-ai-innovation": {
    taxonomy: "Cloud Platform Architecture Note",
    problem: "AI workloads expose weak cloud identity, secret handling, network, environment, and observability patterns faster than conventional applications.",
    architecturePrinciple: "Modernize the cloud control foundation alongside AI adoption so product teams inherit secure workload identity, policy, observability, and environment boundaries.",
    tradeoffs: [
      "Platform standardization versus product-team customization",
      "Central policy enforcement versus cloud-native service flexibility",
      "Rapid experimentation versus environment isolation",
    ],
    controlImplications: [
      "Use workload identity instead of long-lived shared credentials",
      "Standardize approved model, vector, data, and integration paths",
      "Enforce environment separation and centralized logging",
    ],
    evidence: [
      "Infrastructure policy results",
      "Identity and access traces",
      "Configuration evidence",
      "Platform observability records",
    ],
    implementationArtifacts: [
      "AI-ready cloud reference architecture",
      "Workload identity pattern",
      "Platform control model",
      "Environment and logging standards",
    ],
    leadershipDecisions: [
      "Which cloud capabilities become shared AI platform services",
      "Which controls are mandatory across environments",
      "Where teams may deviate from reference patterns",
    ],
    engineeringBuild: [
      "Reusable workload identity",
      "Policy-as-code guardrails",
      "Approved model and data integration patterns",
      "Standard telemetry and secrets handling",
    ],
    serviceHref: "/services#cloud-governance",
    serviceLabel: "Cloud Governance and Platform Security",
    industryHref: "/industries#technology",
    industryLabel: "Technology and SaaS",
  },
  "implementing-ai-in-regulated-industries-with-confidence": {
    taxonomy: "Regulated AI Architecture Brief",
    problem: "Regulated AI programs stall when reviewability, accountability, sensitive-data handling, and evidence are treated as documentation tasks after design decisions are made.",
    architecturePrinciple: "Design review, evidence, access, and escalation into the workflow before production so governance is part of system behavior.",
    tradeoffs: [
      "Automation depth versus human accountability",
      "Data richness versus minimization and privacy",
      "Uniform controls versus risk-based workflow treatment",
    ],
    controlImplications: [
      "Classify workflows by impact and data sensitivity",
      "Require human review for high-impact outputs",
      "Separate AI recommendations from approved business records",
    ],
    evidence: [
      "Review and approval records",
      "Context and output logs",
      "Access records",
      "Governance checkpoint evidence",
    ],
    implementationArtifacts: [
      "Regulated workflow reference architecture",
      "Review and escalation model",
      "Evidence map",
      "Control readiness plan",
    ],
    leadershipDecisions: [
      "Which workflows may automate decisions",
      "Where human approval remains mandatory",
      "What evidence is required for assurance and oversight",
    ],
    engineeringBuild: [
      "Reviewable workflow states",
      "Role-based access and logging",
      "Evidence capture and exception handling",
    ],
    serviceHref: "/services#regulated-ai",
    serviceLabel: "Healthcare and Regulated AI Workflows",
    industryHref: "/industries#regulated",
    industryLabel: "Regulated Environments",
  },
  "designing-reviewable-ai-workflows-for-clinical-environments": {
    taxonomy: "Healthcare AI Architecture Note",
    problem: "Clinical AI can create unsafe ambiguity when drafts, recommendations, approved records, and human accountability are not architecturally separated.",
    architecturePrinciple: "AI may assist the workflow, but authorization and human review determine what becomes an approved clinical or operational record.",
    tradeoffs: [
      "Clinical efficiency versus review burden",
      "Context completeness versus sensitive-data minimization",
      "Automation convenience versus record integrity",
    ],
    controlImplications: [
      "Keep AI-generated drafts distinct from approved records",
      "Authorize access to patient context explicitly",
      "Create escalation paths for uncertainty and exceptions",
    ],
    evidence: [
      "Prompt and context provenance where appropriate",
      "Review actions",
      "Final approval events",
      "Access and exception records",
    ],
    implementationArtifacts: [
      "Clinical workflow architecture",
      "Data-flow and trust-boundary model",
      "Human-review control design",
      "Audit evidence requirements",
    ],
    leadershipDecisions: [
      "Which workflow steps AI may assist",
      "Who owns final approval",
      "Which data classes may enter the AI path",
    ],
    engineeringBuild: [
      "Draft-versus-record separation",
      "Explicit retrieval authorization",
      "Review and escalation states",
      "Traceable approval events",
    ],
    serviceHref: "/services#regulated-ai",
    serviceLabel: "Healthcare and Regulated AI Workflows",
    industryHref: "/industries#healthcare",
    industryLabel: "Healthcare and Behavioral Health",
  },
  "turning-ai-risk-frameworks-into-buildable-control-architecture": {
    taxonomy: "Control Architecture Brief",
    problem: "Frameworks describe desired outcomes, but engineering teams need system controls, owners, evidence sources, and implementation patterns.",
    architecturePrinciple: "Translate governance language into testable control architecture that connects policy intent to system components, delivery workflows, and evidence.",
    tradeoffs: [
      "Framework coverage versus implementation depth",
      "Control standardization versus system-specific context",
      "Evidence completeness versus operational overhead",
    ],
    controlImplications: [
      "Each control needs an owner, implementation pattern, evidence source, and test method",
      "AI-specific risks should map to concrete enforcement points",
      "Control exceptions should be visible and reviewable",
    ],
    evidence: [
      "Control traceability matrix",
      "Evidence register",
      "Test results",
      "Architecture decision records",
    ],
    implementationArtifacts: [
      "Framework-to-control mapping",
      "Control library",
      "Evidence model",
      "Implementation roadmap",
    ],
    leadershipDecisions: [
      "Which frameworks define the enterprise baseline",
      "Which controls are mandatory for each risk tier",
      "Who accepts residual risk and exceptions",
    ],
    engineeringBuild: [
      "Control enforcement points",
      "Automated evidence where practical",
      "Policy and exception workflows",
      "Traceable testing and validation",
    ],
    serviceHref: "/services#governance-compliance",
    serviceLabel: "AI Governance and Compliance Readiness",
    industryHref: "/industries#financial-services",
    industryLabel: "Financial Services",
  },
};

export function getInsightAuthority(slug: string) {
  return insightAuthorityBySlug[slug];
}
