import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { careerRoles, getCareerRole } from "@/content/careers";
import { buildPageMetadata } from "@/lib/metadata";

type CareerRolePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return careerRoles.map((role) => ({
    slug: role.slug,
  }));
}

export async function generateMetadata({ params }: CareerRolePageProps) {
  const { slug } = await params;
  const role = getCareerRole(slug);

  if (!role) {
    return buildPageMetadata({
      title: "Career Role",
      description: "SecureTheCloud career role.",
      path: "/careers",
    });
  }

  return buildPageMetadata({
    title: role.title,
    description: role.summary,
    path: `/careers/${role.slug}`,
  });
}

export default async function CareerRolePage({ params }: CareerRolePageProps) {
  const { slug } = await params;
  const role = getCareerRole(slug);

  if (!role) {
    notFound();
  }

  const relatedRoles = careerRoles
    .filter((item) => item.slug !== role.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#030711]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
        <Container className="relative py-20 md:py-24">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Careers
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
            {role.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-slate-300">
            <span>{role.category}</span>
            <span>|</span>
            <span>{role.level}</span>
            <span>|</span>
            <span>{role.type}</span>
            <span>|</span>
            <span>{role.location}</span>
          </div>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {role.summary}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/careers/join?role=${role.slug}`}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white shadow-2xl shadow-violet-950/40"
            >
              Express interest
              <span className="ml-2" aria-hidden="true">-&gt;</span>
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white hover:border-cyan-300/60 hover:text-cyan-200"
            >
              Back to careers
              <span className="ml-2" aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_0.38fr]">
            <main className="grid gap-8">
              <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
                <h2 className="text-3xl font-black text-white">Role overview</h2>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  {role.overview}
                </p>
              </article>

              <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
                <h2 className="text-3xl font-black text-white">What you will do</h2>
                <ul className="mt-6 grid gap-4">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                      <span className="mt-1 text-cyan-300">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
                <h2 className="text-3xl font-black text-white">Qualifications</h2>
                <ul className="mt-6 grid gap-4">
                  {role.qualifications.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                      <span className="mt-1 text-violet-300">■</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
                <h2 className="text-3xl font-black text-white">Preferred experience</h2>
                <ul className="mt-6 grid gap-4">
                  {role.preferred.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                      <span className="mt-1 text-cyan-300">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 p-6 md:p-8">
                <h2 className="text-3xl font-black text-white">Additional information</h2>
                <div className="mt-5 grid gap-5 text-base leading-7 text-slate-300">
                  <p>
                    SecureTheCloud is building a future talent bench. These role pages are intended for interest collection and early conversations. Formal openings, employment terms, compensation, benefits, and legal notices will be published when active hiring plans are finalized.
                  </p>
                  <p>
                    We welcome people from different backgrounds and career paths. We evaluate interest based on role fit, judgment, communication, integrity, technical depth, and ability to help clients solve complex AI, cloud, security, and governance problems.
                  </p>
                </div>
              </article>
            </main>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-violet-400/20 bg-white/[0.035] p-6">
                <h2 className="text-2xl font-black text-white">Express interest</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Share your background and tell us why this track fits your experience.
                </p>
                <Link
                  href={`/careers/join?role=${role.slug}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-black text-white"
                >
                  Apply / express interest
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
                <h2 className="text-2xl font-black text-white">Impact areas</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.impactAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-violet-300/20 bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
                <h2 className="text-2xl font-black text-white">Similar roles</h2>
                <div className="mt-5 grid gap-4">
                  {relatedRoles.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/careers/${item.slug}`}
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
