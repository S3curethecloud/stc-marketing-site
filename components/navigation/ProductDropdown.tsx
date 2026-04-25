"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { productNavItems } from "@/content/navigation";

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
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
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 text-sm font-medium text-stc-muted transition-colors hover:border-white/10 hover:bg-white/[0.03] hover:text-white focus:outline-none focus-visible:border-white/10 focus-visible:bg-white/[0.03] focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/50"
      >
        <span>Product</span>
        <span
          aria-hidden="true"
          className={`inline-block text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {isOpen ? (
        <div
          id={menuId}
          role="menu"
          className="absolute left-0 top-full z-50 mt-3 w-[24rem] rounded-3xl border border-white/10 bg-stc-ink/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div className="grid gap-2">
            {productNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-transparent px-4 py-3 transition-colors hover:border-white/10 hover:bg-white/[0.04] focus:outline-none focus-visible:border-white/10 focus-visible:bg-white/[0.04]"
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
