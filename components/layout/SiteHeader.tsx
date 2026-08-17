import Link from "next/link";
import BrandLogo from "@/components/brand/BrandLogo";
import Container from "@/components/layout/Container";
import MobileNav from "@/components/layout/MobileNav";
import { mainNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02040b]/90 backdrop-blur-2xl">
      <Container className="flex h-[88px] items-center justify-between gap-3 sm:h-[92px] lg:gap-5 xl:h-[96px]">
        <Link
          href="/"
          aria-label={`${siteConfig.name} homepage`}
          className="flex min-w-0 shrink-0 items-center rounded-xl px-1.5 py-2 transition-opacity hover:opacity-90 sm:px-2"
        >
          <BrandLogo variant="header" showTagline />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group inline-flex items-center gap-1 whitespace-nowrap text-sm font-bold text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
              <span className="text-xs text-slate-500 transition-colors group-hover:text-cyan-300">
                v
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 xl:inline-flex">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </span>

          <Link
            href={siteConfig.primaryCta.href}
            className="hidden items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-4 py-2.5 text-sm font-black text-white shadow-lg shadow-violet-950/40 transition-transform hover:-translate-y-0.5 sm:inline-flex xl:px-5"
          >
            {siteConfig.primaryCta.label}
            <span className="ml-2" aria-hidden="true">-&gt;</span>
          </Link>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
