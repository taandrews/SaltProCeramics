import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";

const stats = [
  { value: "10H", label: "Pencil Hardness" },
  { value: "107°", label: "Water Contact" },
  { value: "150°C", label: "Heat Stable" },
  { value: "1100", label: "Film Thickness (nm)" },
];

const principles = [
  {
    n: "01",
    title: "Salt-Forward Engineering",
    body: "Formulated specifically for chloride-rich environments. Where traditional waxes degrade in weeks, our compound holds its bond through full marine seasons.",
  },
  {
    n: "02",
    title: "Nano-Scale Bond",
    body: "An 800–1100 nm covalent layer fuses with the substrate. The result is a surface that behaves like glass — repellent, chemically inert, and optically clear.",
  },
  {
    n: "03",
    title: "Single-Component System",
    body: "No catalysts, no curing chambers, no heat. One pass with a microfiber cloth is all the application requires. Field-ready.",
  },
  {
    n: "04",
    title: "REACH Compliant",
    body: "Engineered to meet European chemical safety standards. Safe to ship, safe to apply, safe for crew and waterways.",
  },
  {
    n: "05",
    title: "Tested on Working Vessels",
    body: "Validated by commercial fleets in the Atlantic and Mediterranean — not in laboratory conditions, but where corrosion happens.",
  },
  {
    n: "06",
    title: "Industry Leadership",
    body: "Salt Pro Ceramics sets the standard for marine surface protection. The benchmark every other compound is measured against.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-ink-deep text-paper overflow-hidden min-h-[600px] sm:min-h-[720px] sm:h-screen sm:max-h-[1080px] flex flex-col">
        {/* Background video with poster */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={asset("/hero-poster.jpg")}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={asset("/hero.mp4")} type="video/mp4" />
        </video>

        {/* Gradient overlays — strong on left for legibility, lighter on right to show video */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/90 via-ink-deep/45 to-ink-deep/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/40 via-transparent to-ink-deep/70" />

        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Top eyebrow bar */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-5 sm:px-10 lg:px-16 pt-6 sm:pt-10">
          <div className="animate-rise-sm flex items-center justify-between gap-4 border-b border-paper/15 pb-4 sm:pb-6">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 sm:w-12 h-px bg-paper flex-shrink-0" />
              <span className="eyebrow text-paper truncate">
                Marine Protection / No. 01
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6 flex-shrink-0">
              <span className="eyebrow text-paper/50 tabular">
                N51° 30′ / W00° 07′
              </span>
              <span className="hidden md:flex items-center gap-2 eyebrow text-paper/50">
                <span className="w-1.5 h-1.5 rounded-full bg-aqua animate-pulse" />
                Live
              </span>
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex-1 flex items-center py-12 sm:py-0">
          <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              {/* Headline */}
              <div className="lg:col-span-8">
                <h1 className="display animate-rise text-[44px] xs:text-[56px] sm:text-[88px] md:text-[108px] lg:text-[148px] text-paper">
                  Engineered<br />
                  <span className="display-soft text-aqua">beyond</span><br />
                  the surface.
                </h1>
              </div>

              {/* Right CTAs */}
              <div className="lg:col-span-4 lg:pb-10">
                <div className="animate-rise delay-300 flex flex-col gap-3 max-w-sm">
                  <Link
                    href="/products/marine-metal-guard"
                    className="inline-flex items-center justify-between bg-paper hover:bg-aqua text-ink hover:text-paper text-[11px] tracking-[0.2em] uppercase font-medium px-7 py-4 transition-colors group"
                  >
                    <span>View the Compound</span>
                    <span className="ml-6 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex items-center justify-between border border-paper/40 hover:border-paper hover:bg-paper/10 text-paper text-[11px] tracking-[0.2em] uppercase font-medium px-7 py-4 transition-colors"
                  >
                    <span>The Method</span>
                    <span className="ml-6">↓</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-5 sm:px-10 lg:px-16 pb-6 sm:pb-10">
          <div className="animate-rise delay-500 border-t border-paper/15 pt-4 sm:pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-baseline gap-2 sm:gap-3 animate-rise-sm delay-${(i + 5) * 100}`}
              >
                <span className="display text-xl sm:text-2xl lg:text-3xl text-paper tabular">
                  {s.value}
                </span>
                <span className="eyebrow text-paper/50 text-[9px] sm:text-[11px]">{s.label}</span>
              </div>
            ))}
          </div>
          {/* Scroll cue */}
          <div className="mt-4 sm:mt-6 flex items-center justify-between">
            <span className="eyebrow text-paper/40">Scroll</span>
            <div className="hidden sm:flex items-center gap-2 eyebrow text-paper/40">
              <span className="tabular">SPC / 2026</span>
              <span>·</span>
              <span>Florida, USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="relative bg-paper py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-faint opacity-40 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <span className="eyebrow text-ink-faint tabular">No. 00</span>
                <div className="w-8 sm:w-12 h-px bg-ink-faint" />
                <span className="eyebrow">Index</span>
              </div>
              <h2 className="display text-[34px] sm:text-4xl lg:text-6xl text-ink leading-[0.95]">
                We protect what the<br />
                <span className="display-soft text-aqua-deep">ocean</span> tries to take back.
              </h2>
              <p className="mt-5 sm:mt-6 text-ink-soft text-base sm:text-lg leading-[1.65] font-light max-w-2xl">
                A single-component nano coating that creates a permanent
                hydrophobic barrier on marine metals — anchors, rails, cleats,
                fittings. Validated by working fleets across three oceans.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-aqua/[0.06] blur-3xl" />
                </div>
                <Image
                  src={asset("/product-trio.png")}
                  alt="Salt Pro Ceramics product range"
                  width={700}
                  height={700}
                  className="relative w-[280px] sm:w-[360px] lg:w-[460px] h-auto animate-drift"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE / DIVIDER ── */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-6 sm:py-8">
          <div className="flex items-center justify-between gap-4 sm:gap-6 flex-wrap">
            <p className="display text-xl sm:text-2xl lg:text-3xl">
              Industry leading <span className="display-soft text-aqua">marine</span> protection.
            </p>
            <div className="flex items-center gap-4 sm:gap-8 eyebrow text-paper/60 text-[9px] sm:text-[11px]">
              <span>EST. 2018</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Florida, USA</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline tabular">REACH Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT FEATURE ── */}
      <section className="relative bg-paper py-16 sm:py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="flex items-end justify-between mb-12 sm:mb-16 lg:mb-24 flex-wrap gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <span className="eyebrow text-ink-faint tabular">No. 01</span>
              <div className="w-12 h-px bg-ink-faint" />
              <span className="eyebrow">The Compound</span>
            </div>
            <Link
              href="/products/marine-metal-guard"
              className="link-line eyebrow text-ink"
            >
              Full Specifications →
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image left */}
            <div className="lg:col-span-6 relative">
              <div className="relative bg-paper aspect-[4/5] flex items-center justify-center overflow-hidden">
                <Image
                  src={asset("/product-single.png")}
                  alt="Marine Metal Guard"
                  width={700}
                  height={900}
                  className="relative z-10 w-[70%] max-w-[400px] h-auto"
                />
                {/* Editorial corner labels */}
                <div className="absolute top-6 left-6 eyebrow text-ink-faint">Marine Metal Guard</div>
                <div className="absolute bottom-6 right-6 eyebrow text-ink-faint tabular">100 mL</div>
                <div className="absolute top-6 right-6 eyebrow text-ink-faint">SPC / 01</div>
                <div className="absolute bottom-6 left-6 eyebrow text-ink-faint">↗ Premium</div>
              </div>
            </div>

            {/* Copy right */}
            <div className="lg:col-span-6 lg:pl-8">
              <h2 className="display text-[40px] sm:text-5xl lg:text-7xl text-ink">
                Marine Metal<br />
                <span className="display-soft text-aqua-deep">Guard</span>
              </h2>
              <p className="mt-6 sm:mt-8 text-ink-soft text-base sm:text-lg leading-[1.65] font-light max-w-lg">
                A one-component rust and corrosion-resistant nano coating that
                protects marine metal — both above and below the waterline —
                against salt, UV, oxidation, and chemical exposure.
              </p>

              <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-5 sm:gap-y-6 max-w-lg">
                {[
                  ["Anti-Corrosion", "Permanent oxidation barrier"],
                  ["Hydrophobic", "Water beads & rolls off"],
                  ["UV Stable", "No yellowing or degradation"],
                  ["Easy Clean", "Salt & grime wipe away"],
                ].map(([title, sub]) => (
                  <div key={title} className="hairline-top pt-3">
                    <p className="text-ink font-medium text-sm">{title}</p>
                    <p className="eyebrow mt-1 normal-case tracking-normal text-xs text-ink-mute">{sub}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/products/marine-metal-guard"
                className="mt-12 inline-flex items-center justify-between bg-ink hover:bg-aqua-deep text-paper text-[11px] tracking-[0.2em] uppercase font-medium px-7 py-4 transition-colors group"
              >
                <span>Read the Specification</span>
                <span className="ml-6 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES / METHOD ── */}
      <section id="about" className="relative bg-paper-warm py-16 sm:py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-12 sm:mb-16 lg:mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <span className="eyebrow text-ink-faint tabular">No. 02</span>
                <div className="w-8 sm:w-12 h-px bg-ink-faint" />
                <span className="eyebrow">The Method</span>
              </div>
              <h2 className="display text-[40px] sm:text-5xl lg:text-7xl text-ink">
                Six principles<br />
                <span className="display-soft text-aqua-deep">that hold.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-ink-soft text-base sm:text-lg leading-[1.65] font-light">
                We do not compete with marine waxes. We replaced them. Salt Pro
                Ceramics is built on six commitments — from formulation to field
                application — that make it the standard for vessel protection
                worldwide.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
            {principles.map((p) => (
              <div
                key={p.n}
                className="bg-paper-warm p-8 sm:p-10 lg:p-12 transition-colors hover:bg-paper group"
              >
                <div className="flex items-start justify-between mb-6 sm:mb-8">
                  <span className="display text-3xl sm:text-4xl text-ink-faint group-hover:text-aqua-deep transition-colors tabular">
                    {p.n}
                  </span>
                  <span className="eyebrow text-ink-faint">/ Principle</span>
                </div>
                <h3 className="display text-xl sm:text-2xl text-ink mb-3 sm:mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed font-light">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL QUOTE ── */}
      <section className="relative bg-paper py-16 sm:py-24 lg:py-36">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="w-8 sm:w-12 h-px bg-ink-faint" />
            <span className="eyebrow">Field Note</span>
            <div className="w-8 sm:w-12 h-px bg-ink-faint" />
          </div>
          <blockquote className="display text-[28px] sm:text-4xl lg:text-6xl text-ink leading-[1.1]">
            “Three seasons. Atlantic crossings. The rails look like the day we
            commissioned her. Nothing else even <span className="display-soft text-aqua-deep">comes close.</span>”
          </blockquote>
          <div className="mt-8 sm:mt-12 flex items-center justify-center gap-3 flex-wrap">
            <span className="eyebrow text-ink">Captain L. Hartmann</span>
            <span className="w-1 h-1 rounded-full bg-ink-faint" />
            <span className="eyebrow text-ink-faint">M/Y Solène · 38m</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-ink text-paper py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-aqua/[0.06] blur-3xl pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <span className="eyebrow text-paper/40 tabular">No. 03</span>
                <div className="w-8 sm:w-12 h-px bg-paper/30" />
                <span className="eyebrow text-paper/60">Inquiries</span>
              </div>
              <h2 className="display text-[42px] sm:text-6xl lg:text-8xl text-paper">
                Protect what the<br />
                <span className="display-soft text-aqua">ocean</span> tries to take.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pb-4">
              <p className="text-paper/60 text-base leading-relaxed font-light max-w-sm">
                Speak with our team about commercial pricing, bulk supply, and
                application training for your fleet.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                <a
                  href="mailto:info@saltproceramics.com"
                  className="inline-flex items-center justify-between bg-paper hover:bg-aqua text-ink hover:text-paper text-[11px] tracking-[0.2em] uppercase font-medium px-7 py-4 transition-colors group"
                >
                  <span>Contact Sales</span>
                  <span className="ml-6 transition-transform group-hover:translate-x-1">→</span>
                </a>
                <Link
                  href="/products/marine-metal-guard"
                  className="inline-flex items-center justify-between border border-paper/20 hover:border-paper text-paper text-[11px] tracking-[0.2em] uppercase font-medium px-7 py-4 transition-colors"
                >
                  <span>View Product</span>
                  <span className="ml-6">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
