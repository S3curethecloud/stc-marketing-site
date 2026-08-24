import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionIntro from "@/components/marketing/SectionIntro";
import { productPortfolio } from "@/content/products";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Legacy Architecture Accelerators",
  description:
    "Legacy SecureTheCloud architecture accelerators retained by IKEVAR as historical design references and architecture evidence.",
  path: "/archive/architecture-accelerators",
});

const archivePrinciples = [
  {
    title: "Historical architecture evidence",
    body:
      "These accelerators preserve prior SecureTheCloud architecture work, design patterns, and technical provenance.",
  },
  {
    title: "Not current IKEVAR products",
    body:
      "The assets remain available for reference, but they are not part of the current IKEVAR public product portfolio.",
  },
  {
    title: "Available for technical reuse",
    body:
      "Patterns may still inform architecture reviews, implementation planning, research, evidence, and future component reuse.",
  },
] as const;

export default function ArchitectureAcceleratorsArchivePage() {
  return (
    <>
      <Section>
        <Container>
          <SectionIntro
            eyebrow="Legacy Architecture Archive"
            title="Architecture accelerators retained as technical evidence."
            body="IKEVAR preserves selected SecureTheCloud architecture accelerators as historical design references. They document earlier work across autonomous systems, runtime governance, evidence, trust, risk, Kubernetes security, federation, and secure AI architecture."
            align="center"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {archivePrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.03] p-6"
              >
                <h2 className="text-2xl font-black text-cyan-300">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {productPortfolio.map((product) => (
              <article
                key={product.href}
                className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/10"
              >
                <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                  {product.eyebrow}
                </p>

                <h2 className="mt-4 text-2xl font-black tracking-tight text-white">
                  {product.name}
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-400">
                  {product.description}
                </p>

                <div className="mt-8">
                  <Link
                    href={product.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
                  >
                    Review legacy accelerator
                    <span className="ml-2" aria-hidden="true">
                      -&gt;
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10 bg-white/[0.02]">
        <Container>
          <div className="rounded-[2.25rem] border border-cyan-300/15 bg-[#07101d] p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              Current IKEVAR portfolio
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white">
              These accelerators are legacy. IKEVAR's current products are
              being built around enterprise intelligence.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              Visit the current product portfolio for NEXUS, COVENANT,
              FUTURESTATE, ATA, and Humanize Enterprise.
            </p>

            <div className="mt-8">
              <Link
                href="/products"
                className="inline-flex items-center justify-center border border-cyan-300/50 px-6 py-3 text-sm font-black text-white transition-colors hover:bg-cyan-300/10"
              >
                Explore current products
                <span className="ml-2 text-cyan-300" aria-hidden="true">
                  -&gt;
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
