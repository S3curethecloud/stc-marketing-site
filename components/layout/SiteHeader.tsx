import Link from "next/link";
import BrandLogo from "@/components/brand/BrandLogo";
import Container from "@/components/layout/Container";
import MobileNav from "@/components/layout/MobileNav";
import { siteConfig } from "@/content/site";

const headerNavItems = [
  { label: "Capabilities", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Evidence", href: "/evidence" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
] as const;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#02040b]/96 backdrop-blur-xl">
      <Container className="flex h-[88px] items-center justify-between gap-8 sm:h-[94px] lg:h-[102px]">
        <Link
          href="/"
          aria-label={`${siteConfig.name} homepage`}
          className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-90"
        >
          <BrandLogo variant="header" />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden min-w-0 flex-1 items-center justify-end gap-5 lg:flex xl:gap-7"
        >
          {headerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-medium tracking-[0.01em] text-slate-300 transition-colors duration-200 hover:text-white xl:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={siteConfig.primaryCta.href}
            className="hidden min-h-12 items-center justify-center whitespace-nowrap border border-cyan-300/50 px-5 py-3 text-[13px] font-semibold text-white transition-all duration-200 hover:border-cyan-200 hover:bg-cyan-300/10 xl:inline-flex"
          >
            Contact
            <span className="ml-2 text-cyan-300" aria-hidden="true">
              →
            </span>
          </Link>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
