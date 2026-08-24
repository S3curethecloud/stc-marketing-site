import Link from "next/link";
import Container from "@/components/layout/Container";
import { ikevarProducts } from "@/content/ikevar-products";
import { siteConfig } from "@/content/site";
import { insightArticles } from "@/content/insights";

const capabilityAreas = [
  {
    number: "01",
    title: "AI & Autonomous Systems",
    body:
      "Agentic platforms, GenAI systems, RAG, orchestration, AI gateways, model boundaries, tool governance, evaluation, and autonomous-system architecture.",
    href: "/services#ai-security-architecture",
  },
  {
    number: "02",
    title: "Cloud & Platform Engineering",
    body:
      "Cloud foundations, platform engineering, Kubernetes, distributed systems, API architecture, identity integration, observability, and production operating models.",
    href: "/services#cloud-governance",
  },
  {
    number: "03",
    title: "Cybersecurity & Zero Trust",
    body:
      "Security architecture, zero-trust controls, IAM, runtime authorization, workload identity, data protection, threat modeling, and secure system boundaries.",
    href: "/security",
  },
  {
    number: "04",
    title: "Governance, Risk & Assurance",
    body:
      "AI governance, policy architecture, risk controls, Responsible AI, evidence, assurance, compliance readiness, and architecture review.",
    href: "/services#governance-compliance",
  },
  {
    number: "05",
    title: "Enterprise Architecture & Transformation",
    body:
      "Ambiguous business requirements translated into target states, architecture decisions, roadmaps, ADRs, operating models, and implementation-ready designs.",
    href: "/architecture",
  },
] as const;

const approach = [
  [
    "01",
    "Discover",
    "Clarify the business objective, operating environment, stakeholders, data sensitivity, regulatory obligations, technical constraints, and decision context.",
  ],
  [
    "02",
    "Architect",
    "Define target-state architecture, trust boundaries, identity flows, platform patterns, policy controls, data paths, evidence requirements, and governing decisions.",
  ],
  [
    "03",
    "Engineer",
    "Translate architecture decisions into reference implementations, ADRs, control configurations, integration patterns, backlog-ready guidance, and production-oriented technical artifacts.",
  ],
  [
    "04",
    "Validate",
    "Evaluate security assumptions, policy behavior, observability, resilience, operational readiness, evidence quality, and rollout conditions before production adoption.",
  ],
] as const;

const featuredInsights = insightArticles.slice(0, 3);

function ArchitectureSignal() {
  const domains = [
    ["01", "AI & autonomous systems"],
    ["02", "Cloud & platform engineering"],
    ["03", "Security & identity"],
    ["04", "Governance & evidence"],
  ] as const;

  return (
    <div className="border border-white/10 bg-[#07101d] p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
        Enterprise architecture view
      </p>

      <div className="mt-8 grid gap-0 border border-white/10 sm:grid-cols-2">
        {domains.map(([number, label]) => (
          <div
            key={number}
            className="flex min-h-24 items-center justify-between border-b border-white/10 px-5 py-5 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
          >
            <span className="max-w-[12rem] text-sm font-medium text-slate-200">
              {label}
            </span>

            <span className="text-xs font-semibold text-cyan-300">
              {number}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 max-w-xl text-sm leading-6 text-slate-400">
        IKEVAR connects architecture, engineering, security, governance,
        identity, data, and operational evidence into implementation-ready
        enterprise systems.
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Enterprise AI, Cloud, Security & Governance
              </p>

              <h1 className="mt-6 max-w-4xl text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.5rem]">
                Engineered trust.
                <span className="block text-slate-300">
                  Governed intelligence.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                IKEVAR architects and engineers secure, governed enterprise
                systems across AI, cloud, security, identity, data, and
                autonomous workflows.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={siteConfig.primaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
                >
                  Start an architecture conversation
                  <span className="ml-2" aria-hidden="true">
                    -&gt;
                  </span>
                </Link>

                <Link
                  href="/products"
                  className="inline-flex min-h-12 items-center text-sm font-semibold text-slate-200 transition-colors hover:text-cyan-200"
                >
                  Explore products
                  <span className="ml-2" aria-hidden="true">
                    -&gt;
                  </span>
                </Link>
              </div>

              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                {siteConfig.brandSignature}
              </p>
            </div>

            <ArchitectureSignal />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                What we architect
              </p>

              <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.55rem] lg:leading-[1.1]">
                Enterprise systems built across technology, security,
                governance, and operations.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-400">
                IKEVAR combines architecture and engineering across the
                control planes that determine whether enterprise systems
                can operate securely, reliably, and at scale.
              </p>
            </div>

            <div className="border-t border-white/10">
              {capabilityAreas.map((area) => (
                <Link
                  key={area.number}
                  href={area.href}
                  className="group grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[3.5rem_14rem_1fr_auto] sm:items-start sm:gap-6"
                >
                  <span className="text-xs font-semibold text-cyan-300">
                    {area.number}
                  </span>

                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-200">
                    {area.title}
                  </h3>

                  <p className="max-w-2xl text-sm leading-6 text-slate-400">
                    {area.body}
                  </p>

                  <span
                    className="text-sm font-semibold text-cyan-300 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    -&gt;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Products
              </p>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.8rem] lg:leading-[1.08]">
                Five systems for governing enterprise intelligence.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-400 lg:justify-self-end lg:text-right">
              IKEVAR products address distinct questions across architecture,
              enterprise policy, consequence intelligence, autonomous trust,
              and human-AI productivity.
            </p>
          </div>

          <div className="divide-y divide-white/10">
            {ikevarProducts.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group grid gap-6 py-9 sm:py-10 lg:grid-cols-[4rem_1fr_1.15fr_12rem_auto] lg:items-start lg:gap-8"
              >
                <span className="text-xs font-semibold text-cyan-300">
                  {product.number}
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {product.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white transition-colors group-hover:text-cyan-200 sm:text-3xl">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-300">
                    {product.descriptor}
                  </p>
                </div>

                <div>
                  <p className="text-base font-semibold leading-6 text-white">
                    {product.question}
                  </p>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                    {product.summary}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Role
                  </p>

                  <p className="mt-2 text-sm font-medium text-slate-300">
                    {product.role}
                  </p>
                </div>

                <span
                  className="text-sm font-semibold text-cyan-300 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  -&gt;
                </span>
              </Link>
            ))}
          </div>

          <div className="flex justify-end border-t border-white/10 pt-7">
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
            >
              Explore the full IKEVAR portfolio
              <span className="ml-2" aria-hidden="true">
                -&gt;
              </span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">How we work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">From ambiguity to engineered enterprise systems.</h2>
              <p className="mt-5 text-base leading-7 text-slate-400">A repeatable architecture and engineering method that connects executive intent, technical constraints, governance, implementation, evidence, and production readiness.</p>
            </div>
            <div className="border-t border-white/10">
              {approach.map(([number, title, body]) => (
                <div key={number} className="grid gap-3 border-b border-white/10 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:items-start">
                  <span className="text-xs font-semibold text-cyan-300">{number}</span>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Insights</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Architecture intelligence for enterprise technology leaders.</h2>
            </div>
            <Link href="/insights" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">View all insights -&gt;</Link>
          </div>

          <div className="mt-10 grid gap-px bg-white/10 lg:grid-cols-3">
            {featuredInsights.map((article) => (
              <article key={article.slug} className="bg-[#050816] p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">{article.eyebrow}</p>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-white">{article.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">{article.description}</p>
                <div className="mt-6 text-xs text-slate-500">{article.date} · {article.readTime}</div>
                <Link href={`/insights/${article.slug}`} className="mt-5 inline-flex text-sm font-semibold text-slate-200 hover:text-cyan-200">Read perspective -&gt;</Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-8 border-y border-white/10 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Engineered trust. Governed intelligence.</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Build the architecture for what comes next.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">Bring us the business objective, technical constraint, security boundary, or autonomous-system challenge. IKEVAR will help define the architecture path.</p>
            </div>
            <Link href={siteConfig.primaryCta.href} className="inline-flex min-h-12 items-center justify-center bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
              Start an architecture conversation
              <span className="ml-2" aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
