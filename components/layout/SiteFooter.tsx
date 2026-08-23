import Link from "next/link";
import BrandLogo from "@/components/brand/BrandLogo";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

const footerGroups = [
  {
    title: "Capabilities",
    items: [
      { label: "AI & Autonomous Systems", href: "/services#ai-security-architecture" },
      { label: "Cloud & Platform Engineering", href: "/services#cloud-governance" },
      { label: "Cybersecurity & Zero Trust", href: "/security" },
      { label: "Governance, Risk & Assurance", href: "/services#governance-compliance" },
      { label: "Enterprise Architecture", href: "/architecture" },
    ],
  },
  {
  title: "Products",
  items: [
    { label: "NEXUS", href: "/products" },
    { label: "ATA", href: "/products" },
    { label: "Humanize Enterprise", href: "/products" },
    { label: "Explore Products", href: "/products" },
  ],
},
  {
    title: "Industries",
    items: [
      { label: "Healthcare", href: "/industries#healthcare" },
      { label: "Financial Services", href: "/industries#financial-services" },
      { label: "Enterprise Technology", href: "/industries#technology" },
      { label: "Regulated Environments", href: "/industries#regulated" },
      { label: "View Industries", href: "/industries" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About IKEVAR", href: "/company" },
      { label: "Insights", href: "/insights" },
      { label: "Evidence", href: "/evidence" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/request-demo" },
    ],
  },
] as const;

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "YouTube", href: siteConfig.social.youtube },
  { label: "X", href: siteConfig.social.x },
  { label: "GitHub", href: siteConfig.social.github },
] as const;

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#02040b]">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-14 xl:grid-cols-[1.2fr_3.3fr] xl:gap-20">
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} homepage`}
              className="inline-flex transition-opacity hover:opacity-90"
            >
              <BrandLogo variant="footer" />
            </Link>

            <p className="mt-7 max-w-md text-[15px] font-medium leading-7 text-white">
              Enterprise AI, Cloud, Security & Governance
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              IKEVAR architects and engineers secure, governed enterprise
              systems across AI, cloud, security, identity, data, and
              autonomous workflows.
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Secure | Govern | Enable
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                  <span className="ml-1.5" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                  {group.title}
                </h3>

                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.label}`}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-slate-400 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/[0.08] pt-8 lg:mt-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Engineered trust. Governed intelligence.
              </p>

              <p className="mt-3 max-w-2xl text-xl font-medium tracking-tight text-white sm:text-2xl">
                Build the architecture for what comes next.
              </p>
            </div>

            <Link
              href={siteConfig.primaryCta.href}
              className="inline-flex min-h-12 w-fit items-center border border-cyan-300/50 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-300/10"
            >
              Contact IKEVAR
              <span className="ml-3 text-cyan-300" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/[0.08] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <nav
            aria-label="Legal"
            className="flex flex-wrap gap-x-5 gap-y-2"
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
