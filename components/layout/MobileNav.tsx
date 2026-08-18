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
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label="Open mobile navigation"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-transparent text-white transition-colors hover:border-cyan-300/45 hover:text-cyan-200"
      >
        <span className="text-base font-semibold" aria-hidden="true">{isOpen ? "×" : "≡"}</span>
        <span className="sr-only">Toggle navigation</span>
      </button>

      {isOpen ? (
        <div id="mobile-nav-panel" className="absolute right-0 top-full z-50 mt-3 w-[min(24rem,calc(100vw-2rem))] border border-white/10 bg-[#050816] p-4 shadow-xl shadow-black/30">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {mainNavItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={handleClose} className="flex min-h-12 items-center py-3 text-sm font-medium text-slate-200 transition-colors hover:text-cyan-200">
                {item.label}
              </Link>
            ))}
          </div>

          <Link href={siteConfig.primaryCta.href} onClick={handleClose} className="mt-5 inline-flex min-h-12 w-full items-center justify-center bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
            Request consultation
            <span className="ml-2" aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
