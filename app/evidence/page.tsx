import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Evidence and Public Engineering",
  description:
    "Reference architectures, technical labs, governance evidence, and public engineering work that show how SecureTheCloud approaches enterprise AI security, governance, RAG, evaluation, and implementation readiness.",
  path: "/evidence",
});

const proofModel = [
  { title: "Reference architectures", body: "System boundaries, identity flows, retrieval patterns, gateways, control points, and implementation decisions expressed as architecture rather than marketing claims." },
  { title: "Control models", body: "Policy, authorization, governance, review, evidence, and runtime expectations translated into technical control structures that engineering teams can reason about." },
  { title: "Implementation artifacts", body: "ADRs, test harnesses, evidence records, schemas, trace models, verification scripts, readiness gates, and delivery documentation that make architecture reviewable." },
  { title: "Public engineering", body: "Selected public repositories expose the design assumptions, boundaries, verification discipline, and technical artifacts behind SecureTheCloud architecture work." },
] as const;

const publicEngineering = [
  {
    title: "Enterprise Secure RAG Lab",
    href: "https://github.com/S3curethecloud/enterprise-rag-lab",
    type: "Secure RAG architecture",
    proof: "A phase-gated tutorial covering RAG foundations through secure ingestion, identity and ACL-aware retrieval, context assembly, response security, evaluation, red teaming, and architecture review.",
    principle: "Retrieval authorization occurs before enterprise context reaches the model; the LLM does not grant data access.",
    artifacts: ["phase-gated architecture documentation", "secure ingestion and retrieval patterns", "identity and ACL-aware retrieval design", "evaluation and red-team exercises"],
  },
  {
    title: "Enterprise AI Integration Architecture Lab",
    href: "https://github.com/S3curethecloud/enterprise-ai-integration-architecture-lab",
    type: "Enterprise integration architecture",
    proof: "A modular architecture for connecting AI to identity, policy repositories, CMDB-style systems, ticketing workflows, audit services, observability, and approval paths without bypassing enterprise controls.",
    principle: "AI integration is treated as an enterprise system-design problem, not as a standalone chatbot implementation.",
    artifacts: ["AI gateway and identity boundaries", "RAG and policy-engine integration model", "audit and approval service patterns", "operational observability architecture"],
  },
  {
    title: "Agent Evaluation Platform",
    href: "https://github.com/S3curethecloud/securethecloud-agent-eval-platform",
    type: "Agent evaluation and assurance",
    proof: "A lab-safe evaluation platform for benchmark-driven testing of agent safety, factuality, RAG grounding, tool-call correctness, policy compliance, regression risk, and evidence readiness.",
    principle: "Agents should be evaluated before deployment, monitored after deployment, and re-evaluated whenever prompts, tools, retrieval, memory, policies, or workflows change.",
    artifacts: ["ground-truth benchmark records", "hallucination and RAG evaluation suites", "tool-call and policy verification", "regression and evidence-package models"],
  },
  {
    title: "Multi-Framework Agentic Evidence Lab",
    href: "https://github.com/S3curethecloud/multi-framework-agentic-evidence-lab",
    type: "Governed agent framework comparison",
    proof: "A completed comparison lab that implements the same evidence-review workflow across LangChain, LangGraph, Strands, and ADK-style tracks using shared schemas, traces, benchmark questions, and a scoring rubric.",
    principle: "Framework choices should be evaluated against the same governed workflow and evidence model rather than compared through unrelated demos.",
    artifacts: ["shared report and trace schemas", "human-review routing", "cross-framework benchmark execution", "comparison matrix and verification evidence"],
  },
  {
    title: "SecureTheCloud Doctrine Control Plane",
    href: "https://github.com/S3curethecloud/securethecloud-doctrine-control-plane",
    type: "Governance doctrine and traceability",
    proof: "A canonical governance repository for portfolio doctrine, authority boundaries, machine-readable contracts, product packaging rules, change traceability, and SOC 2-aligned readiness evidence.",
    principle: "Governance boundaries and authority should be explicit, versioned, reviewable, and separated from runtime enforcement implementation.",
    artifacts: ["authority and module boundaries", "machine-readable governance contracts", "SOC 2-aligned traceability artifacts", "change-management and evidence records"],
  },
] as const;

const evidenceBoundaries = [
  "Public labs and reference implementations demonstrate architecture patterns and engineering discipline; they are not representations of customer production environments unless explicitly stated.",
  "Mock evidence, simulated services, and deterministic test harnesses are labeled as such in their source repositories.",
  "SOC 2-aligned readiness artifacts do not claim SOC 2 certification or replace an independent examination.",
  "Repository evidence is used to show how SecureTheCloud designs, tests, governs, and documents systems—not to manufacture customer outcomes or performance claims.",
] as const;

export default function EvidencePage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Evidence and public engineering</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">Show the architecture. Show the controls. Show the evidence.</h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">SecureTheCloud builds credibility through reviewable technical work: reference architectures, control models, implementation artifacts, evaluation harnesses, governance evidence, and public repositories that expose how the systems are designed.</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400"><span>No invented customer logos</span><span>No fabricated metrics</span><span>No certification overclaims</span><span>Evidence before claims</span></div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">Proof model</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Enterprise proof should be inspectable, not implied.</h2>
          <div className="mt-10 grid gap-8 border-y border-white/10 py-8 md:grid-cols-2 lg:grid-cols-4">
            {proofModel.map((item) => <article key={item.title}><h3 className="text-lg font-semibold text-white">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Selected public engineering</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Repositories that expose the design and verification path.</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">These repositories are selected because their architecture boundaries, artifacts, and verification approach can be inspected directly. They are evidence of technical method, not substitutes for customer references.</p>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {publicEngineering.map((item) => (
              <article key={item.title} className="py-9 sm:py-10">
                <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
                  <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{item.type}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h3><a href={item.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200">Inspect repository -&gt;</a></div>
                  <div className="grid gap-7 md:grid-cols-3">
                    <div><h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">What it demonstrates</h4><p className="mt-3 text-sm leading-6 text-slate-300">{item.proof}</p></div>
                    <div><h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Architecture principle</h4><p className="mt-3 text-sm leading-6 text-slate-300">{item.principle}</p></div>
                    <div><h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Inspectable artifacts</h4><ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">{item.artifacts.map((artifact) => <li key={artifact}>{artifact}</li>)}</ul></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.72fr_1.28fr] lg:py-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">Evidence boundary</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Proof is strongest when its limits are explicit.</h2></div>
          <ul className="divide-y divide-white/10 border-y border-white/10 text-sm leading-6 text-slate-300">{evidenceBoundaries.map((item) => <li key={item} className="py-5">{item}</li>)}</ul>
        </Container>
      </section>

      <section className="bg-[#030711]">
        <Container className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20">
          <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">From evidence to engagement</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Bring us the architecture problem you need to make reviewable.</h2><p className="mt-4 text-base leading-7 text-slate-400">We can help turn AI security, governance, RAG, agent, cloud, or regulated-workflow requirements into architecture decisions, control models, evidence expectations, and implementation-ready artifacts.</p><div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><Link href="/services" className="text-slate-300 hover:text-white">Explore services -&gt;</Link><Link href="/insights" className="text-slate-300 hover:text-white">Read architecture notes -&gt;</Link></div></div>
          <Link href="/request-demo" className="inline-flex min-h-11 items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#021018] hover:bg-cyan-200">Request Architecture Consultation</Link>
        </Container>
      </section>
    </>
  );
}
