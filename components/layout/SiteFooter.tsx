import Link from "next/link";
import { footerNavGroups } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import Container from "@/components/layout/Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#02040b]">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr_0.9fr]">
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} homepage`}
              className="flex items-center gap-3 font-semibold text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-300 via-violet-500 to-fuchsia-500 text-xs font-black text-white">
                STC
              </span>
              <span className="text-base font-bold">{siteConfig.name}</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              We help enterprises design, govern, and implement secure AI systems that drive innovation with trust.
            </p>

            <div className="mt-6 flex gap-3 text-xs font-semibold text-slate-300">
              <span className="rounded-full border border-white/10 px-3 py-2">in</span>
              <span className="rounded-full border border-white/10 px-3 py-2">x</span>
              <span className="rounded-full border border-white/10 px-3 py-2">yt</span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNavGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold text-white">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-cyan-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-violet-400/20 bg-white/[0.03] p-6 shadow-2xl shadow-violet-950/20">
            <h3 className="text-lg font-bold text-white">Let&apos;s build securely.</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Talk to our experts about your AI security, cloud governance, and secure adoption goals.
            </p>
            <Link
              href={siteConfig.primaryCta.href}
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-bold text-white"
            >
              Request Consultation
              <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Privacy Policy · Terms of Use · Cookie Policy</p>
        </div>
      </Container>
    </footer>
  );
}
