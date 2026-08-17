import Link from "next/link";
import { footerNavGroups } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import Container from "@/components/layout/Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#02040b]">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr_0.95fr]">
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} homepage`}
              className="inline-flex transition-opacity hover:opacity-90"
            >
              <span className="block h-12 w-[310px] overflow-hidden sm:w-[340px]">
                <img
                  src="/assets/brand/securethecloud-logo.png"
                  alt={siteConfig.name}
                  className="h-20 w-auto max-w-none -translate-y-3 object-contain"
                />
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              We help enterprises design, govern, and implement secure AI systems that drive innovation with trust.
            </p>

            <div className="mt-6 flex gap-3 text-xs font-black text-slate-300">
              <span className="rounded-full border border-white/10 px-3 py-2 transition-colors hover:border-cyan-300/40 hover:text-cyan-200">in</span>
              <span className="rounded-full border border-white/10 px-3 py-2 transition-colors hover:border-cyan-300/40 hover:text-cyan-200">x</span>
              <span className="rounded-full border border-white/10 px-3 py-2 transition-colors hover:border-cyan-300/40 hover:text-cyan-200">yt</span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNavGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-black text-white">{group.title}</h3>
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

          <div className="rounded-[2rem] border border-violet-400/20 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_12rem)] p-6 shadow-2xl shadow-violet-950/20">
            <h3 className="text-xl font-black text-white">Let&apos;s build securely.</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Talk to our experts about your AI security, cloud governance, and secure adoption goals.
            </p>
            <Link
              href={siteConfig.primaryCta.href}
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-black text-white"
            >
              Request Consultation
              <span className="ml-2" aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Privacy Policy | Terms of Use | Cookie Policy</p>
        </div>
      </Container>
    </footer>
  );
}
