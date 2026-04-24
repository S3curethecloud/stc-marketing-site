import Link from "next/link";
import { mainNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import Container from "@/components/layout/Container";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stc-ink/85 backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between">
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

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 text-sm text-stc-muted lg:flex"
        >
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={siteConfig.primaryCta.href}
          className="hidden rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 sm:inline-flex"
        >
          {siteConfig.primaryCta.label}
        </Link>
      </Container>
    </header>
  );
}
