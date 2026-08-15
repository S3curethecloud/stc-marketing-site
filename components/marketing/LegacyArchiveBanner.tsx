import Link from "next/link";
import Container from "@/components/layout/Container";

type LegacyArchiveBannerProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export default function LegacyArchiveBanner({
  eyebrow,
  title,
  body,
}: LegacyArchiveBannerProps) {
  return (
    <div className="border-b border-white/10 bg-[#050816]">
      <Container className="py-5">
        <div className="rounded-[1.5rem] border border-violet-400/20 bg-white/[0.035] p-5 shadow-2xl shadow-violet-950/10">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-violet-300">
                {eyebrow}
              </p>
              <h2 className="mt-2 text-xl font-black tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-400">
                {body}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white hover:border-cyan-300/60 hover:text-cyan-200"
              >
                View Services
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-black text-white"
              >
                Request Consultation
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
