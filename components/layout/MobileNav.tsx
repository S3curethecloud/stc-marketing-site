"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

const mobileNavItems = [
  { label: "Capabilities", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Evidence", href: "/evidence" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
] as const;

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-12 w-12 items-center justify-center border border-white/15 text-xl text-white transition-colors hover:border-cyan-300/50"
      >
        <span aria-hidden="true">
          {isOpen ? "×" : "≡"}
        </span>
      </button>

      {isOpen ? (
        <div
          id="mobile-nav-panel"
          className="absolute right-0 top-full z-50 mt-4 w-[min(26rem,calc(100vw-2rem))] border border-white/10 bg-[#050816] p-6 shadow-2xl shadow-black/50"
        >
          <nav className="divide-y divide-white/[0.08]">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-14 items-center text-[15px] font-medium text-slate-200 transition-colors hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={siteConfig.primaryCta.href}
            onClick={() => setIsOpen(false)}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-between bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
          >
            Contact IKEVAR
            <span aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
