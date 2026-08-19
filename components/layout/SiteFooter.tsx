import Link from "next/link";
import BrandLogo from "@/components/brand/BrandLogo";
import { footerNavGroups } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import Container from "@/components/layout/Container";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "YouTube", href: siteConfig.social.youtube },
  { label: "X", href: siteConfig.social.x },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#02040b]">
      <Container className="py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_2fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} homepage`}
              className="inline-flex transition-opacity hover:opacity-90"
            >
              <BrandLogo variant="footer" showTagline />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Enterprise AI architecture, cloud governance, security, and implementation guidance for organizations operating under real technical and regulatory constraints.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-200"
                  aria-label={`${siteConfig.name} on ${item.label}`}
                >
                  {item.label}
                  <span className="ml-1" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNavGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  {group.title}
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Engage SecureTheCloud
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Discuss an architecture challenge.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Bring the business goal, implementation pressure, and control requirements. We will help clarify the architecture path.
            </p>

            <Link
              href={siteConfig.primaryCta.href}
              className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Request architecture consultation
              <span className="ml-2" aria-hidden="true">
                -&gt;
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <nav
            aria-label="Legal"
            className="flex flex-wrap gap-x-4 gap-y-2"
          >
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-slate-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
