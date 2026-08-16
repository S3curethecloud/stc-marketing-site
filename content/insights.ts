export type InsightArticle = {
  slug: string;
  category: string;
  eyebrow: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  gradient: string;
  summary: readonly string[];
  keyPoints: readonly string[];
  architectureImplications: readonly string[];
  howWeHelp: readonly string[];
};

export const insightArticles: readonly InsightArticle[] = [
  {
    slug: "why-secure-ai-adoption-needs-architecture-before-acceleration",
    category: "Perspective",
    eyebrow: "Perspective",
    title: "Why secure AI adoption needs architecture before acceleration",
    description:
      "Enterprise AI initiatives fail when strategy, security, cloud governance, data flows, and implementation reality are treated as separate conversations.",
    date: "May 20, 2026",
    readTime: "7 min read",
    gradient: "from-violet-400/25 via-fuchsia-500/10 to-cyan-500/20",
    summary: [
      "AI adoption is accelerating faster than many enterprise control models can support.",
      "The organizations that succeed are not simply adopting more tools; they are designing the architecture, governance, identity, data, and delivery patterns that make AI usable at scale.",
      "Secure AI adoption should begin with system design, not vendor selection.",
    ],
    keyPoints: [
      "AI strategy, security, data architecture, cloud governance, and operating model decisions must be handled together.",
      "Architecture gives teams a shared language for risk, ownership, controls, integration, and implementation readiness.",
      "Without architecture, AI initiatives often become fragmented experiments with unclear access paths, weak auditability, and inconsistent control enforcement.",
      "Secure acceleration requires reusable patterns for identity, authorization, data protection, logging, review, and exception handling.",
    ],
    architectureImplications: [
      "Define the AI control plane before scaling use cases.",
      "Map identity, data movement, model access, tool use, and audit evidence before deployment.",
      "Establish architecture decision records for major AI platform and workflow choices.",
      "Separate experimentation environments from production-grade AI operating patterns.",
    ],
    howWeHelp: [
      "SecureTheCloud helps leadership teams translate AI ambition into implementation-ready architecture.",
      "We design AI security reference architectures, control maps, governance workflows, and delivery roadmaps.",
      "We help teams align cloud, security, compliance, product, and engineering stakeholders before adoption pressure creates unmanaged risk.",
    ],
  },
  {
    slug: "designing-secure-agentic-systems-with-explicit-control-boundaries",
    category: "Architecture Note",
    eyebrow: "Architecture Note",
    title: "Designing secure agentic systems with explicit control boundaries",
    description:
      "Agentic AI requires identity, tool-use governance, authorization paths, prompt-injection defenses, and evidence trails before it can safely operate near enterprise workflows.",
    date: "May 6, 2026",
    readTime: "8 min read",
    gradient: "from-fuchsia-400/25 via-violet-500/10 to-cyan-500/20",
    summary: [
      "Agentic systems introduce a new enterprise design problem: software can now reason over instructions, call tools, use context, and influence workflows.",
      "That power requires explicit control boundaries.",
      "Secure agent architecture depends on identity, scoped permissions, tool governance, prompt-injection defenses, and traceable decision paths.",
    ],
    keyPoints: [
      "Agents should never receive broad ambient authority.",
      "Tool access should be scoped by role, context, sensitivity, and business process.",
      "Human review is required for high-risk actions, sensitive workflow changes, regulated outputs, and irreversible operations.",
      "Evidence capture should record inputs, context sources, tool calls, policy decisions, and final outputs.",
    ],
    architectureImplications: [
      "Treat agents as governed workload identities, not generic chat interfaces.",
      "Create policy gates between model reasoning and external tool execution.",
      "Validate retrieved context before it reaches the model.",
      "Build logs that support investigation, audit, replay, and control testing.",
    ],
    howWeHelp: [
      "SecureTheCloud designs agentic system boundaries for enterprise environments.",
      "We help teams define AI gateways, tool-use policies, approval flows, evidence trails, and runtime governance models.",
      "We translate agent risk into buildable architecture patterns.",
    ],
  },
  {
    slug: "building-ai-governance-that-scales-with-enterprise-ambition",
    category: "AI Governance",
    eyebrow: "AI Governance",
    title: "Building AI governance that scales with enterprise ambition",
    description:
      "How to align AI use cases, policies, controls, and operating decisions before adoption spreads faster than governance can follow.",
    date: "May 12, 2026",
    readTime: "6 min read",
    gradient: "from-cyan-400/25 via-blue-500/10 to-violet-500/20",
    summary: [
      "AI governance fails when it is treated as a committee process detached from delivery.",
      "Governance must become an operating capability that helps teams classify use cases, assign risk, apply controls, and move responsibly.",
      "Scalable governance is practical, repeatable, and close to implementation.",
    ],
    keyPoints: [
      "Create a clear AI use-case intake and risk-tiering model.",
      "Map policies to controls that engineering, security, and product teams can actually implement.",
      "Define ownership across business, legal, privacy, security, data, engineering, and operations.",
      "Use evidence registers and decision records to support auditability and leadership visibility.",
    ],
    architectureImplications: [
      "Governance should be embedded into platform workflows, not added after launch.",
      "Risk tiers should determine identity, logging, review, data, and deployment requirements.",
      "Control libraries should map to actual system components and delivery artifacts.",
      "Governance metrics should measure implementation readiness, not just policy completion.",
    ],
    howWeHelp: [
      "SecureTheCloud helps organizations design AI governance operating models that connect policy to architecture.",
      "We build control maps, intake workflows, evidence structures, and implementation roadmaps.",
      "We help leaders move from AI governance theory to repeatable execution.",
    ],
  },
  {
    slug: "designing-secure-agent-architectures-for-the-enterprise-era",
    category: "Architecture",
    eyebrow: "Architecture",
    title: "Designing secure agent architectures for the enterprise era",
    description:
      "A practical view of identity, tool access, runtime boundaries, AI gateways, MCP gateways, and evidence capture.",
    date: "April 28, 2026",
    readTime: "7 min read",
    gradient: "from-violet-400/25 via-fuchsia-500/10 to-cyan-500/20",
    summary: [
      "Enterprise agents need more than prompts and tool lists.",
      "They require identity-aware architecture, bounded tool access, runtime policy checks, contextual retrieval controls, and evidence capture.",
      "Agent architecture should be designed like an enterprise integration system with AI-specific risks.",
    ],
    keyPoints: [
      "Each agent should operate with explicit purpose, identity, permissions, and workflow boundaries.",
      "Tool calling requires authorization, allowlists, input validation, and output review.",
      "Retrieval pipelines must enforce access before context reaches the model.",
      "Evidence capture must include decisions, tool calls, context sources, and policy outcomes.",
    ],
    architectureImplications: [
      "Use AI gateways to centralize control, logging, evaluation, and routing.",
      "Use MCP or tool gateways with explicit permission models.",
      "Separate read-only knowledge retrieval from mutating actions.",
      "Require policy decisions before sensitive tool execution.",
    ],
    howWeHelp: [
      "SecureTheCloud helps teams design secure enterprise agent architectures.",
      "We define identity models, tool-control patterns, runtime governance, and evidence trails.",
      "We make agent architecture reviewable by security, cloud, compliance, and engineering teams.",
    ],
  },
  {
    slug: "modernizing-cloud-platforms-for-secure-ai-innovation",
    category: "Cloud Governance",
    eyebrow: "Cloud Modernization",
    title: "Modernizing cloud platforms for secure AI innovation",
    description:
      "How cloud governance, workload identity, secrets, infrastructure, and platform controls shape safe AI-enabled operations.",
    date: "April 15, 2026",
    readTime: "5 min read",
    gradient: "from-blue-400/25 via-cyan-500/10 to-violet-500/20",
    summary: [
      "AI adoption exposes weaknesses in cloud governance quickly.",
      "Data movement, model access, secrets, workload identity, and environment separation become more important when systems are connected to AI services.",
      "Secure AI innovation requires a governed cloud foundation.",
    ],
    keyPoints: [
      "Cloud modernization should address identity, network paths, secrets, logging, and policy before AI scale.",
      "AI workloads need clear boundaries between experimentation, staging, and production.",
      "Platform teams should provide secure patterns that product teams can reuse.",
      "Cloud governance must support both speed and control.",
    ],
    architectureImplications: [
      "Design workload identity patterns for AI services, agents, and automation.",
      "Create policy-as-code guardrails for AI-enabled infrastructure.",
      "Standardize logging and monitoring for AI platform components.",
      "Define approved patterns for model APIs, vector stores, data pipelines, and application integrations.",
    ],
    howWeHelp: [
      "SecureTheCloud helps organizations modernize cloud governance for AI-enabled workloads.",
      "We design platform security patterns, cloud control models, and AI-ready architecture roadmaps.",
      "We help teams balance innovation speed with enterprise-grade guardrails.",
    ],
  },
  {
    slug: "implementing-ai-in-regulated-industries-with-confidence",
    category: "Regulated AI",
    eyebrow: "Regulated AI",
    title: "Implementing AI in regulated industries with confidence",
    description:
      "How healthcare, finance, and high-compliance teams can move from experimentation to governed AI workflows.",
    date: "April 2, 2026",
    readTime: "6 min read",
    gradient: "from-fuchsia-400/25 via-violet-500/10 to-cyan-500/20",
    summary: [
      "Regulated industries can adopt AI, but they need clear workflow boundaries, human oversight, evidence, and data protection.",
      "The goal is not to stop AI experimentation.",
      "The goal is to move from unmanaged experimentation to governed implementation.",
    ],
    keyPoints: [
      "AI use cases should be classified by risk, data sensitivity, and workflow impact.",
      "Human review should be explicit for regulated, clinical, financial, legal, or customer-impacting outputs.",
      "Audit trails should capture context, model outputs, review decisions, and final actions.",
      "Sensitive data should be minimized, protected, and governed throughout the workflow.",
    ],
    architectureImplications: [
      "Design reviewable workflows rather than fully autonomous paths for high-risk use cases.",
      "Implement role-based access, logging, retention, and exception handling.",
      "Separate advisory AI outputs from approved business records.",
      "Use governance checkpoints before production rollout.",
    ],
    howWeHelp: [
      "SecureTheCloud helps regulated teams design AI workflows that are secure, reviewable, and implementation-ready.",
      "We support healthcare, financial, and high-compliance environments with architecture, governance, and evidence models.",
      "We help leaders adopt AI without losing control of risk, data, or accountability.",
    ],
  },
  {
    slug: "designing-reviewable-ai-workflows-for-clinical-environments",
    category: "Healthcare AI",
    eyebrow: "Healthcare AI",
    title: "Designing reviewable AI workflows for clinical environments",
    description:
      "Why human review, sensitive-data handling, workflow boundaries, and audit readiness matter in healthcare AI adoption.",
    date: "March 19, 2026",
    readTime: "5 min read",
    gradient: "from-cyan-400/25 via-blue-500/10 to-violet-500/20",
    summary: [
      "Healthcare AI requires careful workflow design because clinical and operational contexts involve sensitive information and human impact.",
      "AI should assist, draft, summarize, classify, or recommend within controlled boundaries.",
      "Human review and auditability are central design requirements.",
    ],
    keyPoints: [
      "AI-assisted clinical workflows should preserve human review before finalization.",
      "Sensitive information should be minimized and handled through approved data paths.",
      "Workflow boundaries should define what AI can suggest and what humans must approve.",
      "Audit readiness should be designed into the workflow from the beginning.",
    ],
    architectureImplications: [
      "Separate AI-generated drafts from final approved records.",
      "Log prompts, context sources, outputs, review actions, and final decisions where appropriate.",
      "Avoid broad access to clinical or patient data unless authorization is explicit and necessary.",
      "Design exception paths for uncertainty, escalation, and manual review.",
    ],
    howWeHelp: [
      "SecureTheCloud helps healthcare and behavioral health teams design reviewable AI workflows.",
      "We create architecture patterns for intake, charting support, documentation assistance, and operational AI use cases.",
      "We help teams preserve privacy, auditability, and human oversight.",
    ],
  },
  {
    slug: "turning-ai-risk-frameworks-into-buildable-control-architecture",
    category: "Compliance",
    eyebrow: "Compliance",
    title: "Turning AI risk frameworks into buildable control architecture",
    description:
      "How NIST AI RMF, OWASP LLM risks, SOC 2 readiness, and internal governance can become practical delivery artifacts.",
    date: "March 5, 2026",
    readTime: "8 min read",
    gradient: "from-violet-400/25 via-fuchsia-500/10 to-cyan-500/20",
    summary: [
      "AI risk frameworks are useful, but they do not implement themselves.",
      "Organizations need to translate framework language into controls, architecture patterns, ownership models, evidence, and testable delivery artifacts.",
      "The gap between policy and implementation is where AI governance often fails.",
    ],
    keyPoints: [
      "Frameworks should be mapped to concrete system controls and operational workflows.",
      "Controls should identify the owner, implementation pattern, evidence source, and testing method.",
      "AI-specific risks should be addressed through design patterns, not only policy statements.",
      "Governance artifacts should support both leadership reporting and engineering delivery.",
    ],
    architectureImplications: [
      "Map NIST AI RMF outcomes to AI platform components, workflows, and evidence points.",
      "Translate OWASP LLM risks into design requirements for prompts, retrieval, tool use, and output handling.",
      "Use SOC 2 readiness thinking to define evidence registers and control traceability.",
      "Create implementation-ready control libraries that engineering teams can adopt.",
    ],
    howWeHelp: [
      "SecureTheCloud helps organizations turn AI risk frameworks into buildable control architecture.",
      "We produce control maps, evidence registers, architecture decisions, and implementation roadmaps.",
      "We help governance, security, compliance, and engineering teams work from the same control model.",
    ],
  },
] as const;

export const featuredInsightCards = insightArticles.slice(0, 2);

export const researchInsightCards = insightArticles.slice(2);

export const homepageInsightCards = [
  insightArticles[2],
  insightArticles[3],
  insightArticles[4],
  insightArticles[5],
] as const;

export function getInsightArticle(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}
