import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { careerRoles, getCareerRole } from "@/content/careers";
import { buildPageMetadata } from "@/lib/metadata";

type CareerRolePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return careerRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: CareerRolePageProps) {
  const { slug } = await params;
  const role = getCareerRole(slug);
  if (!role) return buildPageMetadata({ title: "Career Role", description: "SecureTheCloud career role.", path: "/careers" });
  return buildPageMetadata({ title: role.title, description: role.summary, path: `/careers/${role.slug}` });
}

export default async function CareerRolePage({ params }: CareerRolePageProps) {
  const { slug } = await params;
  const role = getCareerRole(slug);
  if (!role) notFound();

  const relatedRoles = careerRoles.filter((item) => item.slug !== role.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Careers</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">{role.title}</h1>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-400">
            <span>{role.category}</span><span>·</span><span>{role.level}</span><span>·</span><span>{role.type}</span><span>·</span><span>{role.location}</span>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{role.summary}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link href={`/careers/join?role=${role.slug}`} className="inline-flex min-h-11 items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#021018] hover:bg-cyan-200">Express interest -&gt;</Link>
            <Link href="/careers" className="text-sm font-semibold text-slate-300 hover:text-white">Back to careers -&gt;</Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_0.38fr] lg:gap-14">
            <main className="divide-y divide-white/10 border-y border-white/10">
              <article className="py-8"><h2 className="text-2xl font-semibold text-white">Role overview</h2><p className="mt-4 text-base leading-7 text-slate-300">{role.overview}</p></article>

              <article className="py-8"><h2 className="text-2xl font-semibold text-white">What you will do</h2><ul className="mt-5 grid gap-3 text-base leading-7 text-slate-300">{role.responsibilities.map((item) => <li key={item}>— {item}</li>)}</ul></article>

              <article className="py-8"><h2 className="text-2xl font-semibold text-white">Qualifications</h2><ul className="mt-5 grid gap-3 text-base leading-7 text-slate-300">{role.qualifications.map((item) => <li key={item}>— {item}</li>)}</ul></article>

              <article className="py-8"><h2 className="text-2xl font-semibold text-white">Preferred experience</h2><ul className="mt-5 grid gap-3 text-base leading-7 text-slate-300">{role.preferred.map((item) => <li key={item}>— {item}</li>)}</ul></article>

              <article className="py-8"><h2 className="text-2xl font-semibold text-white">Additional information</h2><div className="mt-4 grid gap-4 text-base leading-7 text-slate-300"><p>SecureTheCloud is building a future talent bench. These role pages are intended for interest collection and early conversations. Formal openings, employment terms, compensation, benefits, and legal notices will be published when active hiring plans are finalized.</p><p>We welcome people from different backgrounds and career paths. We evaluate interest based on role fit, judgment, communication, integrity, technical depth, and ability to help clients solve complex AI, cloud, security, and governance problems.</p></div></article>
            </main>

            <aside className="space-y-8">
              <div className="border-t border-white/15 pt-5"><h2 className="text-xl font-semibold text-white">Express interest</h2><p className="mt-3 text-sm leading-6 text-slate-400">Share your background and tell us why this track fits your experience.</p><Link href={`/careers/join?role=${role.slug}`} className="mt-5 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200">Apply / express interest -&gt;</Link></div>

              <div className="border-t border-white/15 pt-5"><h2 className="text-xl font-semibold text-white">Impact areas</h2><ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-300">{role.impactAreas.map((item) => <li key={item}>{item}</li>)}</ul></div>

              <div className="border-t border-white/15 pt-5"><h2 className="text-xl font-semibold text-white">Similar roles</h2><div className="mt-4 grid gap-3">{relatedRoles.map((item) => <Link key={item.slug} href={`/careers/${item.slug}`} className="text-sm font-semibold text-slate-300 hover:text-cyan-200">{item.title} -&gt;</Link>)}</div></div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
