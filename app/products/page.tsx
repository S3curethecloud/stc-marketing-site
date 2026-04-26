import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import SectionIntro from "@/components/marketing/SectionIntro";
import { productPortfolio } from "@/content/products";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Products",
  description:
    "Explore the SecureTheCloud product portfolio for deterministic runtime governance, operational intelligence, Kubernetes security, and cross-domain trust.",
  path: "/products",
});

export default function ProductsPage() {
  const featuredProduct = productPortfolio[0];
  const otherProducts = productPortfolio.slice(1);

  return (
    <>
      <Section>
        <Container>
          <SectionIntro
            eyebrow="PRODUCT PORTFOLIO"
            title="A product stack for governing autonomous systems."
            body="The SecureTheCloud portfolio is designed to govern action before execution, preserve policy authority, and extend trust boundaries across runtime, infrastructure, and cross-domain agent operations."
            align="center"
          />

          {featuredProduct ? (
            <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/10 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                FEATURED PRODUCT
              </p>

              <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {featuredProduct.name}
                  </h2>

                  <p className="mt-4 max-w-2xl text-lg leading-8 text-stc-muted">
                    {featuredProduct.description}
                  </p>
                </div>

                <div className="flex lg:justify-end">
                  <Link
                    href={featuredProduct.href}
                    className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
                  >
                    View Aegis Runtime
                  </Link>
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {otherProducts.map((product) => (
              <article
                key={product.href}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  {product.eyebrow}
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  {product.name}
                </h2>

                <p className="mt-4 text-base leading-7 text-stc-muted">
                  {product.description}
                </p>

                <div className="mt-8">
                  <Link
                    href={product.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
                  >
                    Explore Product
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container>
          <SectionIntro
            eyebrow="PRODUCT RELATIONSHIP"
            title="One runtime baseline. Multiple product layers."
            body="Aegis Runtime provides the governed baseline. Copilot Voice Intelligence interprets deterministic records. SecureTheCloud for Kubernetes extends enforcement into cluster environments. Agent Sovereignty Zones extends trust across domain boundaries."
            align="center"
          />
        </Container>
      </Section>

      <CTASection
        headline="Need a guided walkthrough of the product portfolio?"
        subheadline="See how SecureTheCloud products work together across runtime governance, operational intelligence, Kubernetes enforcement, and cross-domain trust architecture."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "View Architecture", href: "/architecture" }}
      />
    </>
  );
}
