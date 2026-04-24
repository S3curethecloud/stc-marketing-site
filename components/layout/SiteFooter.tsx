import Link from "next/link";
import { footerNavGroups } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import Container from "@/components/layout/Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-stc-navy">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} homepage`}
              className="flex items-center gap-3 font-semibold text-stc-text"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-sm text-cyan-200">
                {siteConfig.shortName}
              </span>
              <span className="text-sm sm:text-base">{siteConfig.name}</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-stc-muted">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNavGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-stc-muted">
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
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-stc-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
