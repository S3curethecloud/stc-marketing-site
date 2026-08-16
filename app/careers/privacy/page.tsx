import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Careers Privacy Notice",
  description:
    "How SecureTheCloud handles candidate interest, resume links, recruiting review, and future restricted resume intake.",
  path: "/careers/privacy",
});

const collectedItems = [
  "Full name and email address",
  "Current role or title",
  "Location or remote preference",
  "LinkedIn, GitHub, portfolio, personal website, or resume link",
  "Role of interest and experience area",
  "Availability and candidate-provided interest statement",
] as const;

const safeguards = [
  "The public careers form does not upload resume files to the website.",
  "Resume files are not stored in GitHub, Cloudflare Pages, or the static website repository.",
  "If resume file collection becomes necessary, SecureTheCloud intends to use a restricted Google Drive intake folder.",
  "Access to candidate materials should be limited to approved recruiting reviewers.",
  "Public sharing links should not be used for candidate resume folders.",
] as const;

const deletionRules = [
  "If a candidate is not selected, resume files are deleted once the decision is final.",
  "Duplicate resume copies should be removed from recruiting folders and email where operationally practical.",
  "Candidate form submissions should be removed from the form provider when no longer needed for recruiting follow-up.",
  "Candidates may request deletion of their submitted recruiting materials.",
] as const;

export default function CareersPrivacyPage() {
  return (
    <section className="relative overflow-hidden bg-[#030711] py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />

      <Container className="relative">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Careers Privacy Notice
          </p>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-white md:text-7xl">
            How we handle career interest and candidate materials.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            SecureTheCloud uses the careers form to understand candidate interest in future roles, advisory opportunities, contract paths, and collaboration conversations. This notice explains how candidate information is handled.
          </p>

          <div className="mt-10 grid gap-6">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
              <h2 className="text-3xl font-black text-white">
                What the careers form collects
              </h2>
              <ul className="mt-6 grid gap-4">
                {collectedItems.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                    <span className="mt-1 text-cyan-300">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
              <h2 className="text-3xl font-black text-white">
                Resume links and future resume files
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                The current careers form asks for a resume, LinkedIn, GitHub, portfolio, or personal website link. It does not accept direct resume file uploads through the website.
              </p>
              <ul className="mt-6 grid gap-4">
                {safeguards.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                    <span className="mt-1 text-violet-300">■</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 p-6 md:p-8">
              <h2 className="text-3xl font-black text-white">
                Deletion-first recruiting posture
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                SecureTheCloud does not intend to keep not-selected candidate resumes indefinitely. If a candidate is not selected, resume files are deleted once the decision is final.
              </p>
              <ul className="mt-6 grid gap-4">
                {deletionRules.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                    <span className="mt-1 text-cyan-300">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
              <h2 className="text-3xl font-black text-white">
                Sensitive information
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Candidates should not submit passwords, credentials, protected health information, financial account details, Social Security numbers, production secrets, or highly sensitive business data through the careers form.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
              <h2 className="text-3xl font-black text-white">
                Requesting deletion
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Candidates may request deletion of submitted recruiting materials. SecureTheCloud will remove resume files and unnecessary recruiting records where available and operationally practical.
              </p>
            </article>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/careers/join"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white"
            >
              Join talent network
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

          <p className="mt-8 text-xs leading-5 text-slate-500">
            This notice describes SecureTheCloud's recruiting intake practice. It is not a full employment policy manual or legal advice.
          </p>
        </div>
      </Container>
    </section>
  );
}
