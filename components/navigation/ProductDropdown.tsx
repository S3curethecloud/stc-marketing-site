"use client";

import { useState } from "react";
import Link from "next/link";
import { productNavItems } from "@/content/navigation";

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = "product-dropdown-menu";

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-label="Open product navigation"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={menuId}
        className="inline-flex items-center gap-2 text-sm text-stc-muted transition-colors hover:text-white focus:outline-none focus-visible:text-white"
        onClick={() => setIsOpen((open) => !open)}
      >
        Product
        <span className="text-xs">{isOpen ? "▴" : "▾"}</span>
      </button>

      {isOpen ? (
        <div
          id={menuId}
          role="menu"
          className="absolute left-0 top-full z-50 mt-4 w-[22rem] rounded-3xl border border-white/10 bg-stc-ink/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div className="grid gap-2">
            {productNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className="rounded-2xl border border-transparent px-4 py-3 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                onClick={() => setIsOpen(false)}
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
        </div>
      ) : null}
    </div>
  );
}
