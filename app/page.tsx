import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <Section>
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          ZERO-TRUST RUNTIME FOR AI AGENTS
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Govern AI Agent Actions Before They Execute
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stc-muted">
          {siteConfig.name} is building deterministic runtime governance
          infrastructure for AI agents, autonomous systems, and high-trust
          execution environments.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={siteConfig.primaryCta.href}
            className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
          >
            {siteConfig.primaryCta.label}
          </a>

          <a
            href={siteConfig.secondaryCta.href}
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            {siteConfig.secondaryCta.label}
          </a>
        </div>
      </Container>
    </Section>
  );
}
