"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { asset } from "@/lib/asset";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-paper shadow-[0_1px_0_0_var(--color-rule)]"
          : "bg-paper/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-18 sm:h-24 lg:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={asset("/logo.png")}
              alt="Salt Pro Ceramics"
              width={260}
              height={90}
              className="h-12 sm:h-16 lg:h-20 w-auto"
              priority
            />
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { href: "/", label: "Index" },
              { href: "/products/marine-metal-guard", label: "Product" },
              { href: "#about", label: "Method" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="eyebrow text-ink hover:text-aqua-deep transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <span className="eyebrow text-ink-faint tabular">SPC / 2026</span>
            <a
              href="mailto:info@saltproceramics.com"
              className="inline-flex items-center gap-2 bg-ink hover:bg-aqua-deep text-paper text-[11px] tracking-[0.18em] uppercase font-medium px-5 py-3 transition-colors"
            >
              Inquire
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-ink p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-rule bg-paper">
          <nav className="flex flex-col px-6 py-6">
            {[
              { href: "/", label: "Index" },
              { href: "/products/marine-metal-guard", label: "Product" },
              { href: "#about", label: "Method" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="eyebrow text-ink py-4 border-b border-rule-soft"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:info@saltproceramics.com"
              className="mt-6 inline-flex items-center justify-center bg-ink text-paper text-[11px] tracking-[0.18em] uppercase font-medium px-5 py-3.5"
            >
              Inquire →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
