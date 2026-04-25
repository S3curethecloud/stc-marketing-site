"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNavItems, productNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setProductOpen(false);
  };

  const topLevelItems = mainNavItems.filter((item) => item.label !== "Product");

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label="Open mobile navigation"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-cyan-300/40 hover:text-cyan-200"
      >
        <span className="text-sm font-semibold">{isOpen ? "×" : "≡"}</span>
      </button>

      {isOpen ? (
        <div
          id="mobile-nav-panel"
          className="absolute right-0 top-full z-50 mt-3 w-[min(24rem,calc(100vw-2rem))] rounded-3xl border border-white/10 bg-stc-ink/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div className="grid gap-3">
            <button
              type="button"
              aria-expanded={productOpen}
              onClick={() => setProductOpen((open) => !open)}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <span>Product</span>
              <span className="text-xs">{productOpen ? "▴" : "▾"}</span>
            </button>

            {productOpen ? (
              <div className="grid gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                {productNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleClose}
                    className="rounded-2xl px-3 py-3 transition-colors hover:bg-white/[0.04]"
                  >
                    <div className="text-sm font-semibold text-white">
                      {item.label}
                    </div>
                    {item.description ? (
                      <div className="mt-1 text-xs leading-5 text-stc-muted">
                        {item.description}
                      </div>
                    ) : null}
                  </Link>
                ))}
              </div>
            ) : null}

            {topLevelItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClose}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={siteConfig.primaryCta.href}
              onClick={handleClose}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
            >
              {siteConfig.primaryCta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
