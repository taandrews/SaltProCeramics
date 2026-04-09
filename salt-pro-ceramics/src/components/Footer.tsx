import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";

export default function Footer() {
  return (
    <footer className="relative bg-paper">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">
        {/* Big wordmark */}
        <div className="border-t border-rule pt-12 sm:pt-16 lg:pt-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Brand block */}
            <div className="lg:col-span-5">
              <Image
                src={asset("/logo.png")}
                alt="Salt Pro Ceramics"
                width={280}
                height={96}
                className="h-16 sm:h-20 lg:h-24 w-auto mb-6 sm:mb-8"
              />
              <p className="text-ink-soft text-sm leading-relaxed max-w-sm font-light">
                Industry-leading nano ceramic protection for marine surfaces.
                Engineered for the world&rsquo;s harshest environments.
              </p>
            </div>

            {/* Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
              <div>
                <h3 className="eyebrow mb-5">Index</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/products/marine-metal-guard", label: "The Compound" },
                    { href: "#about", label: "Method" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-ink hover:text-aqua-deep transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="eyebrow mb-5">Compound</h3>
                <ul className="space-y-3 text-sm">
                  {["Marine Metal Guard", "Specifications", "Application", "REACH Cert."].map(
                    (label) => (
                      <li key={label} className="text-ink-soft">
                        {label}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div id="contact" className="col-span-2 sm:col-span-1">
                <h3 className="eyebrow mb-5">Contact</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="mailto:info@saltproceramics.com"
                      className="text-ink hover:text-aqua-deep transition-colors"
                    >
                      info@saltproceramics.com
                    </a>
                  </li>
                  <li className="text-ink-soft">Florida, USA</li>
                  <li className="text-ink-faint tabular text-xs mt-4">
                    N27° 39′ / W80° 23′
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Massive wordmark */}
          <div className="mt-12 sm:mt-16 lg:mt-20 overflow-hidden -mx-5 sm:-mx-10 lg:-mx-16 px-5 sm:px-10 lg:px-16">
            <p className="display text-[18vw] sm:text-[15vw] lg:text-[13vw] leading-[0.85] text-ink select-none whitespace-nowrap">
              SALT PRO<span className="display-soft text-aqua-deep">.</span>
            </p>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <p className="eyebrow text-ink-faint">
              © {new Date().getFullYear()} Salt Pro Ceramics · All rights reserved
            </p>
            <div className="flex items-center gap-3 sm:gap-6 eyebrow text-ink-faint flex-wrap">
              <span className="tabular">SPC / 2026</span>
              <span>·</span>
              <span>REACH Compliant</span>
              <span>·</span>
              <span className="tabular">v1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
