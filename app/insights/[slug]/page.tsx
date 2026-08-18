import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { getInsightArticle, insightArticles } from "@/content/insights";
import { getInsightAuthority } from "@/content/insight-authority";
import { buildPageMetadata } from "@/lib/metadata";

type InsightArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: InsightArticlePageProps) {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (!article) return buildPageMetadata({ title: "Insight", description: "SecureTheCloud architecture insight.", path: "/insights" });
  return buildPageMetadata({ title: article.title, description: article.description, path: `/insights/${article.slug}` });
}

function ListSection({ title, items }: { title: string; items: readonly string[] }) {
  return <section className="border-t border-white/10 pt-7"><h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2><ul className="mt-5 space-y-3 text-base leading-7 text-slate-300">{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

function consultationFocus(serviceHref?: string) {
  if (serviceHref?.includes("ai-security-architecture")) return "ai-security";
  if (serviceHref?.includes("cloud-governance")) return "cloud-governance";
  if (serviceHref?.includes("secure-ai-adoption")) return "secure-adoption";
  if (serviceHref?.includes("governance-compliance")) return "governance";
  if (serviceHref?.includes("regulated-ai")) return "regulated";
  return "advisory";
}

export default async function InsightArticlePage({ params }: InsightArticlePageProps) {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (!article) notFound();

  const authority = getInsightAuthority(article.slug);
  const relatedArticles = insightArticles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const focus = consultationFocus(authority?.serviceHref);

  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span><Link href="/insights" className="hover:text-white">Insights</Link><span>/</span><span className="text-slate-300">{authority?.taxonomy ?? article.category}</span>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">{authority?.taxonomy ?? article.eyebrow}</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{article.description}</p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500"><span>{article.category}</span><span>{article.date}</span><span>{article.readTime}</span></div>
        </Container>
      </section>

      <section className="bg-[#030711]">
        <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 lg:py-20">
          <main className="space-y-10">
            <section><p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">Problem</p><div className="mt-4 space-y-4 text-lg leading-8 text-slate-300">{authority ? <p>{authority.problem}</p> : article.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
            {authority ? <section className="border-t border-white/10 pt-7"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Architecture principle</p><p className="mt-4 text-xl leading-8 text-white">{authority.architecturePrinciple}</p></section> : null}
            <ListSection title="Control implications" items={authority?.controlImplications ?? article.keyPoints} />
            <ListSection title="Architecture and implementation guidance" items={article.architectureImplications} />
            {authority ? <><ListSection title="Design tradeoffs" items={authority.tradeoffs} /><ListSection title="Evidence to design for" items={authority.evidence} /><ListSection title="Implementation artifacts" items={authority.implementationArtifacts} /><section className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2"><div><h2 className="text-2xl font-semibold text-white">What leadership should decide</h2><ul className="mt-5 space-y-3 text-base leading-7 text-slate-300">{authority.leadershipDecisions.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2 className="text-2xl font-semibold text-white">What engineering should build</h2><ul className="mt-5 space-y-3 text-base leading-7 text-slate-300">{authority.engineeringBuild.map((item) => <li key={item}>{item}</li>)}</ul></div></section></> : null}

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-semibold text-white">Continue from architecture thinking to action</h2>
              <p className="mt-4 text-base leading-7 text-slate-400">Use the related service to understand engagement scope, the industry path to add operating context, and Evidence to inspect how SecureTheCloud turns architecture ideas into reviewable technical artifacts.</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
                {authority ? <><Link href={authority.serviceHref} className="text-cyan-300 hover:text-cyan-200">{authority.serviceLabel} -&gt;</Link><Link href={authority.industryHref} className="text-slate-300 hover:text-white">{authority.industryLabel} -&gt;</Link></> : null}
                <Link href="/evidence" className="text-slate-300 hover:text-white">Inspect technical evidence -&gt;</Link>
              </div>
              <Link href={`/request-demo?focus=${focus}&from=insight-${article.slug}`} className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#021018] hover:bg-cyan-200">Discuss this architecture decision</Link>
            </section>
          </main>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            {authority ? <div className="border-t border-white/15 pt-5"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Due diligence path</p><div className="mt-4 space-y-3 text-sm font-semibold"><Link href={authority.serviceHref} className="block text-cyan-300 hover:text-cyan-200">Service: {authority.serviceLabel} -&gt;</Link><Link href={authority.industryHref} className="block text-slate-300 hover:text-white">Industry: {authority.industryLabel} -&gt;</Link><Link href="/evidence" className="block text-slate-300 hover:text-white">Evidence: inspect public engineering -&gt;</Link></div></div> : null}
            <div className="border-t border-white/15 pt-5"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Article details</p><dl className="mt-4 space-y-3 text-sm"><div><dt className="text-slate-500">Category</dt><dd className="text-white">{article.category}</dd></div><div><dt className="text-slate-500">Published</dt><dd className="text-white">{article.date}</dd></div><div><dt className="text-slate-500">Read time</dt><dd className="text-white">{article.readTime}</dd></div></dl></div>
            <div className="border-t border-white/15 pt-5"><h2 className="text-lg font-semibold text-white">Related architecture notes</h2><div className="mt-4 space-y-4">{relatedArticles.map((item) => <Link key={item.slug} href={`/insights/${item.slug}`} className="block text-sm leading-6 text-slate-300 hover:text-cyan-200">{item.title} -&gt;</Link>)}</div></div>
          </aside>
        </Container>
      </section>
    </>
  );
}
