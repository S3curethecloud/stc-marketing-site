import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionIntro from "@/components/marketing/SectionIntro";
import { productPortfolio } from "@/content/products";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Architecture Accelerators",
  description:
    "SecureTheCloud architecture accelerators are proof assets and design references supporting enterprise AI security architecture, cloud governance, and secure AI adoption services.",
  path: "/products",
});

const acceleratorPrinciples = [
  {
    title: "Reference, not front-door offer",
    body:
      "These assets support services conversations. They are not the primary public packaging of the business.",
  },
  {
    title: "Proof of architecture depth",
    body:
      "Each accelerator demonstrates thinking around control planes, runtime governance, evidence, trust, risk, and secure AI implementation.",
  },
  {
    title: "Used to shape client work",
    body:
      "The patterns can inform workshops, architecture reviews, implementation roadmaps, and governance design.",
  },
] as const;

export default function ProductsPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionIntro
            eyebrow="Architecture Accelerators"
            title="Reference assets for secure AI and cloud governance architecture."
            body="SecureTheCloud maintains architecture accelerators that demonstrate design patterns for runtime governance, evidence, risk, trust, Kubernetes security, and secure AI adoption. These assets support client services engagements; they are no longer the main public product offer."
            align="center"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {acceleratorPrinciples.map((item) => (
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
                    Review Accelerator
                    <span className="ml-2" aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10 bg-white/[0.02]">
        <Container>
          <div className="rounded-[2.25rem] border border-violet-400/20 bg-[linear-gradient(135deg,rgba(88,28,135,0.62),rgba(3,7,17,0.88))] p-8 shadow-2xl shadow-violet-950/30 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-200">
              Current business offer
            </p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white">
              SecureTheCloud is now services-first.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              For customer conversations, start with enterprise AI security architecture, cloud governance, secure AI adoption, regulated workflow design, and implementation-ready consulting services.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white hover:border-cyan-300/60 hover:text-cyan-200"
              >
                Explore Services
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white"
              >
                Request Consultation
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
