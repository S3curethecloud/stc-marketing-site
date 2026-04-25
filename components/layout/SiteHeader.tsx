import Link from "next/link";
import Container from "@/components/layout/Container";
import MobileNav from "@/components/layout/MobileNav";
import NavLink from "@/components/navigation/NavLink";
import ProductDropdown from "@/components/navigation/ProductDropdown";
import { mainNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";

const desktopNavItems = mainNavItems.filter((item) => item.label !== "Product");

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stc-ink/85 backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between gap-4">
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
          className="hidden items-center gap-6 lg:flex"
        >
          <ProductDropdown />
          {desktopNavItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              className="text-sm text-stc-muted"
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.primaryCta.href}
            className="hidden items-center justify-center rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 sm:inline-flex"
          >
            {siteConfig.primaryCta.label}
          </Link>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
