import Link from "next/link";
import Container from "@/components/layout/Container";
import { ikevarProducts } from "@/content/ikevar-products";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Products",
  description:
    "IKEVAR builds enterprise intelligence systems for architecture, constitutional governance, consequence analysis, autonomous trust, and governed AI productivity.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Products
              </p>

              <h1 className="mt-6 max-w-4xl text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.5rem]">
                Enterprise intelligence
                <span className="block text-slate-300">
                  infrastructure.
                </span>
              </h1>
            </div>

            <div>
              <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                IKEVAR builds systems that help enterprises determine what
                should be built, what rules govern it, what may happen when
                it changes, whether autonomous actions may commit, and how
                people work effectively with AI.
              </p>

              <Link
                href="#portfolio"
                className="mt-7 inline-flex items-center text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
              >
                Explore the portfolio
                <span className="ml-2" aria-hidden="true">
                  -&gt;
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="portfolio"
        className="border-b border-white/10 bg-[#050816]"
      >
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              The IKEVAR portfolio
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.8rem] lg:leading-[1.08]">
              Five systems. Five governing questions.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Each product governs a distinct enterprise intelligence
              problem while remaining capable of operating independently.
            </p>
          </div>

          <div className="mt-12 border-t border-white/10">
            {ikevarProducts.map((product) => (
              <article
                key={product.id}
                id={product.id}
                className="scroll-mt-28 border-b border-white/10 py-10 sm:py-12"
              >
                <div className="grid gap-6 lg:grid-cols-[4rem_1fr_1.15fr] lg:gap-12">
                  <span className="text-xs font-semibold text-cyan-300">
                    {product.number}
                  </span>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      {product.category}
                    </p>

                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-sm font-medium text-slate-300">
                      {product.descriptor}
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold leading-7 text-white">
                      {product.question}
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">
                      {product.summary}
                    </p>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {product.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                How the portfolio connects
              </p>

              <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                A control stack for enterprise intelligence.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-400">
                The products do not collapse into one monolith. Each retains
                a distinct authority boundary and governing question.
              </p>
            </div>

            <div className="border-t border-white/10">
              {[
                ["COVENANT", "What must be true?", "Enterprise Constitution"],
                ["NEXUS", "What should we build?", "Architecture Intelligence"],
                ["FUTURESTATE", "What would happen?", "Consequence Intelligence"],
                ["ATA", "May it happen?", "Commit Authority"],
              ].map(([name, question, role], index) => (
                <div
                  key={name}
                  className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[3rem_10rem_1fr_12rem] sm:items-start"
                >
                  <span className="text-xs font-semibold text-cyan-300">
                    0{index + 1}
                  </span>

                  <h3 className="text-lg font-semibold text-white">
                    {name}
                  </h3>

                  <p className="text-sm leading-6 text-slate-300">
                    {question}
                  </p>

                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {role}
                  </p>
                </div>
              ))}

              <div className="mt-8 border border-white/10 bg-[#07101d] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Human + AI productivity layer
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-[12rem_1fr]">
                  <h3 className="text-xl font-semibold text-white">
                    Humanize Enterprise
                  </h3>

                  <p className="text-sm leading-6 text-slate-400">
                    Extends the portfolio into governed enterprise knowledge
                    work, collaboration, and human-machine productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#050816]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-8 border-y border-white/10 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Engineered trust. Governed intelligence.
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Build the intelligence architecture for what comes next.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                Start with a product, an architecture problem, or an
                enterprise control challenge. IKEVAR will help define the
                right path.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-demo"
                className="inline-flex min-h-12 items-center justify-center bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
              >
                Start a conversation
                <span className="ml-2" aria-hidden="true">
                  -&gt;
                </span>
              </Link>

              <Link
                href="/archive/architecture-accelerators"
                className="inline-flex min-h-12 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-300/50 hover:text-white"
              >
                Legacy architecture archive
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
