import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import ProofStrip from "@/components/marketing/ProofStrip";
import SectionIntro from "@/components/marketing/SectionIntro";
import { homepageContent } from "@/content/homepage";

const suiteToneClasses = {
  cyan: {
    border: "border-cyan-400/30",
    text: "text-cyan-300",
    bg: "bg-cyan-400/10",
    glow: "shadow-cyan-950/30",
  },
  green: {
    border: "border-emerald-400/30",
    text: "text-emerald-300",
    bg: "bg-emerald-400/10",
    glow: "shadow-emerald-950/30",
  },
  amber: {
    border: "border-amber-400/35",
    text: "text-amber-300",
    bg: "bg-amber-400/10",
    glow: "shadow-amber-950/30",
  },
  purple: {
    border: "border-fuchsia-400/30",
    text: "text-fuchsia-300",
    bg: "bg-fuchsia-400/10",
    glow: "shadow-fuchsia-950/30",
  },
} as const;

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex w-fit rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
      {children}
    </span>
  );
}

function Card({
  title,
  body,
  className = "",
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <article
      className={`rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/10 ${className}`}
    >
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-stc-muted">{body}</p>
    </article>
  );
}

export default function HomePage() {
  const c = homepageContent;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_85%_35%,rgba(168,85,247,0.12),transparent_28%)]">
        <Container className="py-24 sm:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300">
                {c.hero.eyebrow}
              </p>
              <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {c.hero.headline}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stc-muted sm:text-xl">
                {c.hero.subheadline}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={c.hero.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
                >
                  {c.hero.primaryCta.label}
                </Link>
                <Link
                  href={c.hero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  {c.hero.secondaryCta.label}
                </Link>
              </div>

              <p className="mt-8 max-w-2xl text-sm font-medium text-cyan-100/80">
                {c.hero.trustLine}
              </p>
            </div>

            <aside className="rounded-[2rem] border border-cyan-300/20 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-950/30">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  {c.principles.title}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-stc-muted">
                  {c.principles.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {c.proof.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <ProofStrip items={c.proof} />

      <Section className="border-b border-white/10 bg-white/[0.02]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                ENTERPRISE PRODUCT PORTFOLIO
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Modular platforms. Connected through governed trust.
              </h2>
              <p className="mt-5 text-base leading-8 text-stc-muted sm:text-lg">
                SecureTheCloud products can be adopted independently, by suite, or as a connected enterprise portfolio for runtime governance, evidence, risk, federation, secrets, and trust intelligence.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
                >
                  View Product Suites
                </Link>
                <Link
                  href="/ecosystem"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  Explore Ecosystem
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/20 bg-slate-950/50 p-3 shadow-2xl shadow-cyan-950/20">
              <Image
                src="/images/portfolio/securethecloud-enterprise-product-portfolio.webp"
                alt="SecureTheCloud Enterprise Product Portfolio diagram showing shared trust fabric, product suites, composition layer, SENTINEL adapter, enterprise outcomes, and buyer mapping"
                width={1800}
                height={1800}
                className="h-auto w-full rounded-[1.5rem] border border-white/10"
                sizes="(min-width: 1024px) 58vw, 100vw"
                priority
                unoptimized
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow={c.trustFabric.eyebrow}
            title={c.trustFabric.title}
            body={c.trustFabric.body}
          />

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {c.trustFabric.items.map((item) => (
              <Card key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </Container>
      </Section>

      <div id="portfolio">
        <Section className="border-y border-white/10 bg-white/[0.02]">
          <Container>
            <SectionIntro
              eyebrow={c.portfolio.eyebrow}
              title={c.portfolio.title}
              body={c.portfolio.body}
            />

            <div className="mt-10 grid gap-6 xl:grid-cols-4">
              {c.portfolio.suites.map((suite) => {
                const tone = suiteToneClasses[suite.tone];

                return (
                  <article
                    key={suite.title}
                    className={`rounded-[2rem] border ${tone.border} bg-white/[0.03] p-6 shadow-2xl ${tone.glow}`}
                  >
                    <h3 className={`text-xl font-bold tracking-tight ${tone.text}`}>
                      {suite.title}
                    </h3>

                    <div className="mt-6 grid gap-4">
                      {suite.products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className={`group rounded-3xl border ${tone.border} ${tone.bg} p-5 transition-transform hover:-translate-y-1`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="text-lg font-semibold tracking-tight text-white">
                                {product.name}
                              </h4>
                              <p className="mt-2 text-sm leading-6 text-stc-muted">
                                {product.description}
                              </p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Badge>{product.status}</Badge>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.78fr]">
            <div className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.03] p-8 shadow-2xl shadow-black/10">
              <SectionIntro
                eyebrow={c.composition.eyebrow}
                title={c.composition.title}
                body={c.composition.body}
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {c.composition.items.map((item) => (
                  <Card key={item.title} title={item.title} body={item.body} />
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-cyan-300/30 bg-cyan-300/[0.06] p-8 shadow-2xl shadow-cyan-950/20">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                {c.sentinel.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                {c.sentinel.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-stc-muted">
                {c.sentinel.body}
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-cyan-100">
                {c.sentinel.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow={c.outcomes.eyebrow}
            title={c.outcomes.title}
            body="SecureTheCloud is designed to make autonomous-system behavior governable, provable, and explainable across enterprise environments."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {c.outcomes.items.map((item) => (
              <Card key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionIntro
                eyebrow={c.adoption.eyebrow}
                title={c.adoption.title}
                body="Customers can start with a single urgent control problem or deploy the connected portfolio as the enterprise standard for autonomous-system governance."
              />
            </div>

            <div className="grid gap-4">
              {c.adoption.items.map((item) => (
                <Card key={item.title} title={item.title} body={item.body} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow={c.buyers.eyebrow}
            title={c.buyers.title}
            body="Each buyer can enter through the module or suite that maps to their responsibility, then expand into the broader portfolio."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {c.buyers.items.map((item) => (
              <article
                key={item.buyer}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  {item.buyer}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                  {item.need}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stc-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/10">
            <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
              {c.doctrine.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-center text-sm font-semibold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        headline={c.cta.headline}
        subheadline={c.cta.subheadline}
        primaryCta={c.cta.primaryCta}
        secondaryCta={c.cta.secondaryCta}
      />
    </>
  );
}
