import Link from "next/link";
import Container from "@/components/layout/Container";
import MobileNav from "@/components/layout/MobileNav";
import NavLink from "@/components/navigation/NavLink";
import { mainNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030711]/85 backdrop-blur-2xl">
      <Container className="flex h-[76px] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${siteConfig.name} homepage`}
          className="flex min-w-0 items-center gap-3 font-semibold text-white transition-colors hover:text-cyan-200"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-300 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-950/40">
            <span className="absolute inset-0 bg-white/10" />
            <span className="relative text-xs font-black tracking-tight text-white">
              STC
            </span>
          </span>
          <span className="truncate text-sm font-bold tracking-tight sm:text-base">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {mainNavItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              className="text-sm font-semibold text-slate-300 hover:text-white"
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.primaryCta.href}
            className="hidden items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-950/40 transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {siteConfig.primaryCta.label}
            <span className="ml-2" aria-hidden="true">→</span>
          </Link>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
