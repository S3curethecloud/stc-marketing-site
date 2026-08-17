import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { getInsightArticle, insightArticles } from "@/content/insights";
import { buildPageMetadata } from "@/lib/metadata";

type InsightArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return insightArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: InsightArticlePageProps) {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) {
    return buildPageMetadata({
      title: "Insight",
      description: "SecureTheCloud insight.",
      path: "/insights",
    });
  }

  return buildPageMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${article.slug}`,
  });
}

export default async function InsightArticlePage({
  params,
}: InsightArticlePageProps) {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insightArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#030711]">
        <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient}`} />
        <div className="absolute inset-0 bg-[#030711]/70" />

        <Container className="relative py-20 md:py-28">
          <Link
            href="/insights"
            className="inline-flex text-sm font-black text-cyan-300 hover:text-cyan-200"
          >
            &lt;- Back to insights
          </Link>

          <p className="mt-10 text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            {article.eyebrow}
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
            {article.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {article.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-slate-400">
            <span>{article.category}</span>
            <span>|</span>
            <span>{article.date}</span>
            <span>|</span>
            <span>{article.readTime}</span>
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_0.32fr]">
            <main className="grid gap-8">
              <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-violet-300">
                  Executive summary
                </p>
                <div className="mt-6 grid gap-5 text-lg leading-8 text-slate-300">
                  {article.summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
                <h2 className="text-3xl font-black text-white">Key points</h2>
                <ul className="mt-6 grid gap-4">
                  {article.keyPoints.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                      <span className="mt-1 text-cyan-300">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[2rem] border border-violet-400/20 bg-violet-500/5 p-6 md:p-8">
                <h2 className="text-3xl font-black text-white">
                  Architecture implications
                </h2>
                <ul className="mt-6 grid gap-4">
                  {article.architectureImplications.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                      <span className="mt-1 text-violet-300">■</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 p-6 md:p-8">
                <h2 className="text-3xl font-black text-white">
                  How SecureTheCloud helps
                </h2>
                <ul className="mt-6 grid gap-4">
                  {article.howWeHelp.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                      <span className="mt-1 text-cyan-300">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/request-demo"
                  className="mt-8 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white"
                >
                  Request Consultation
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
              </article>
            </main>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                  Article details
                </p>
                <div className="mt-5 grid gap-4 text-sm font-bold text-slate-300">
                  <div>
                    <p className="text-slate-500">Category</p>
                    <p className="mt-1 text-white">{article.category}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Published</p>
                    <p className="mt-1 text-white">{article.date}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Read time</p>
                    <p className="mt-1 text-white">{article.readTime}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
                <h2 className="text-2xl font-black text-white">Related insights</h2>
                <div className="mt-5 grid gap-4">
                  {relatedArticles.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/insights/${item.slug}`}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-bold text-slate-200 hover:border-cyan-300/40 hover:text-cyan-200"
                    >
                      {item.title}
                      <span className="ml-2" aria-hidden="true">-&gt;</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
