import Link from "next/link";
import BrandLogo from "@/components/brand/BrandLogo";
import Container from "@/components/layout/Container";
import MobileNav from "@/components/layout/MobileNav";
import { mainNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02040b]/95 backdrop-blur-xl">
      <Container className="flex h-[82px] items-center justify-between gap-4 sm:h-[86px] lg:h-[88px]">
        <Link
          href="/"
          aria-label={`${siteConfig.name} homepage`}
          className="flex min-w-0 shrink-0 items-center py-2 transition-opacity hover:opacity-90"
        >
          <BrandLogo variant="header" showTagline />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex xl:gap-9">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-semibold text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
              <span className="text-[10px] text-slate-600 transition-colors group-hover:text-cyan-300">v</span>
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={siteConfig.primaryCta.href}
            className="hidden min-h-11 items-center justify-center whitespace-nowrap border border-cyan-300/45 bg-cyan-300/10 px-5 py-2.5 text-[13px] font-semibold text-cyan-100 transition-colors hover:border-cyan-200 hover:bg-cyan-300/15 sm:inline-flex"
          >
            Request consultation
            <span className="ml-2" aria-hidden="true">-&gt;</span>
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
