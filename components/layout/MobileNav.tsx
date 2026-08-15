"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mainNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";

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
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label="Open mobile navigation"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-cyan-300/40 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
      >
        <span className="text-base font-semibold" aria-hidden="true">
          {isOpen ? "×" : "≡"}
        </span>
        <span className="sr-only">Toggle navigation</span>
      </button>

      {isOpen ? (
        <div
          id="mobile-nav-panel"
          className="absolute right-0 top-full z-50 mt-3 w-[min(24rem,calc(100vw-2rem))] rounded-3xl border border-white/10 bg-[#050816]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          <div className="grid gap-3">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClose}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={siteConfig.primaryCta.href}
              onClick={handleClose}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/40"
            >
              {siteConfig.primaryCta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
