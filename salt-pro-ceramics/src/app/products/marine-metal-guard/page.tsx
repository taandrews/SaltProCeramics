import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Marine Metal Guard | Salt Pro Ceramics",
  description:
    "Nano ceramic coating for marine metal protection. Rust and corrosion resistant, UV protection, easy clean. 100 mL bottle, up to 1 season durability.",
};

const specs = [
  { label: "Packaging", value: "100 mL" },
  { label: "Appearance", value: "Colorless liquid" },
  { label: "Chemical Resistance", value: "12 > pH > 1" },
  { label: "Salt Water Resistance", value: "Yes" },
  { label: "Moisture Resistance", value: "Yes" },
  { label: "Pencil Hardness (ISO 15184)", value: "10H" },
  { label: "Dry Film Thickness", value: "800\u20131100 nm" },
  { label: "Consumption per m\u00b2", value: "4\u20135 mL" },
  { label: "Density @23\u00b0C", value: "0.87 g/cm\u00b3" },
  { label: "pH Value", value: "5.5\u20136" },
  { label: "Dry to Touch", value: "4 hours" },
  { label: "Application Temp", value: "5\u00b0C \u2013 30\u00b0C" },
  { label: "Temperature Durability", value: "150\u00b0C" },
  { label: "Water Contact Angle", value: "107\u00b0 @10 \u03bcL" },
  { label: "Water Sliding Angle", value: "11\u00b0 @20 \u03bcL" },
  { label: "Oil Contact Angle", value: "87\u00b0 @10 \u03bcL" },
  { label: "Gloss Rate @60\u00b0 (ISO 2813)", value: "96 (Acrylic)" },
  { label: "REACH Compliance", value: "Yes" },
];

const applicationSteps = [
  "Surface should be absolutely clean and dry.",
  "Do not apply under direct sunlight.",
  "Test on a small, inconspicuous area before full application.",
  "Wear protective nitrile gloves.",
  "Shake the product gently before use.",
  "Consumption is 4\u20135 mL/m\u00b2. Do not work on areas larger than 1 m\u00b2 per session.",
  "Spray the product onto the surface using the trigger bottle.",
  "Immediately buff with a dry, lint-free microfiber cloth in circular motions.",
  "Allow 24 hours for drying and curing.",
];

const benefits = [
  { title: "Water & Oil Repellency", desc: "Highly hydrophobic. Water and oil bead and roll off on contact." },
  { title: "Rust & Corrosion Resistance", desc: "Nano-barrier against oxidation and saltwater corrosion." },
  { title: "Chemical Resistance", desc: "Withstands harsh marine chemicals and cleaning agents." },
  { title: "UV Resistance", desc: "Shields metal from UV degradation and sun damage." },
  { title: "Easy to Clean", desc: "Dirt and grime slide off effortlessly with a wipe." },
];

export default function MarineMetalGuardPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-paper overflow-hidden">
        <div className="absolute inset-0 grid-faint opacity-40 pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-aqua/[0.05] blur-3xl pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-32">
          {/* Breadcrumb */}
          <nav className="animate-rise-sm flex items-center gap-2 sm:gap-3 mb-12 sm:mb-16 lg:mb-24 flex-wrap">
            <Link href="/" className="eyebrow text-ink-faint hover:text-ink transition-colors">
              Index
            </Link>
            <span className="eyebrow text-ink-faint">/</span>
            <Link href="/" className="eyebrow text-ink-faint hover:text-ink transition-colors">
              Compound
            </Link>
            <span className="eyebrow text-ink-faint">/</span>
            <span className="eyebrow text-ink">Marine Metal Guard</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="animate-rise flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <span className="eyebrow text-ink-faint tabular">SPC / 01</span>
                <div className="w-8 sm:w-12 h-px bg-ink-faint" />
                <span className="eyebrow">The Compound</span>
              </div>
              <h1 className="display animate-rise text-[44px] xs:text-[56px] sm:text-[72px] md:text-[88px] lg:text-[112px] text-ink">
                Marine<br />
                Metal<br />
                <span className="display-soft text-aqua-deep">Guard.</span>
              </h1>
              <p className="animate-rise delay-200 mt-6 sm:mt-10 text-base sm:text-lg lg:text-xl text-ink-soft leading-[1.6] max-w-lg font-light">
                A one-component rust and corrosion-resistant nano coating that
                protects boat and yacht metal, above and below the waterline,
                against the harshest marine conditions.
              </p>

              <div className="animate-rise delay-300 mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:info@saltproceramics.com"
                  className="inline-flex items-center justify-between bg-ink hover:bg-ink-deep text-paper text-[11px] tracking-[0.2em] uppercase font-medium px-7 py-4 transition-colors group"
                >
                  <span>Inquire to Order</span>
                  <span className="ml-6 transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#specs"
                  className="inline-flex items-center justify-between border border-ink/15 hover:border-ink text-ink text-[11px] tracking-[0.2em] uppercase font-medium px-7 py-4 transition-colors"
                >
                  <span>Specifications</span>
                  <span className="ml-6">↓</span>
                </a>
              </div>
            </div>

            {/* Right: product image */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="animate-rise delay-200 relative bg-paper aspect-[4/5] flex items-center justify-center overflow-hidden">
                <Image
                  src={asset("/product-single.png")}
                  alt="Marine Metal Guard"
                  width={700}
                  height={900}
                  className="relative z-10 w-[72%] max-w-[420px] h-auto"
                  priority
                />
                {/* Editorial corner labels */}
                <div className="absolute top-6 left-6 eyebrow text-ink-faint">Marine Metal Guard</div>
                <div className="absolute bottom-6 right-6 eyebrow text-ink-faint tabular">100 mL</div>
                <div className="absolute top-6 right-6 eyebrow text-ink-faint">SPC / 01</div>
                <div className="absolute bottom-6 left-6 eyebrow text-ink-faint">↗ 1 Season</div>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-16 sm:mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 hairline-top pt-8 sm:pt-10">
            {[
              ["100", "mL Bottle"],
              ["10H", "Pencil Hardness"],
              ["107°", "Water Contact"],
              ["150°C", "Heat Stable"],
              ["1 Season", "Durability"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="display text-2xl sm:text-3xl lg:text-4xl text-ink tabular">{v}</p>
                <p className="eyebrow mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT LINEUP ── */}
      <section className="relative bg-paper-warm py-16 sm:py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="flex items-end justify-between mb-12 sm:mb-16 lg:mb-24 flex-wrap gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="eyebrow text-ink-faint tabular">No. 02</span>
              <div className="w-8 sm:w-12 h-px bg-ink-faint" />
              <span className="eyebrow">Nano Protection</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-aqua/[0.06] blur-3xl" />
              </div>
              <Image
                src={asset("/product-trio.png")}
                alt="Salt Pro Ceramics product range"
                width={800}
                height={700}
                className="relative w-full max-w-md sm:max-w-2xl h-auto mx-auto"
              />
            </div>

            <div className="lg:col-span-5">
              <h2 className="display text-[40px] sm:text-5xl lg:text-7xl text-ink leading-[0.95]">
                A surface that<br />
                <span className="display-soft text-aqua-deep">repels.</span>
              </h2>
              <p className="mt-6 sm:mt-8 text-ink-soft text-base sm:text-lg leading-[1.65] font-light">
                Salt Pro Marine Metal Guard makes the surface highly repellent
                and resistant to water, protecting metal from UV, salt, and
                stains, with an easy-clean effect and a deep optical shine.
              </p>

              <div className="mt-8 sm:mt-10 space-y-px bg-rule">
                {[
                  "Instant gloss with remarkable water repellency",
                  "Unrivaled protection against salt water",
                  "Most durable protective coating in its class",
                  "Perfect oxidation barrier",
                  "Rust and corrosion resistance",
                  "Effortless easy-to-clean properties",
                ].map((text, i) => (
                  <div
                    key={text}
                    className="bg-paper-warm flex items-baseline gap-3 sm:gap-4 py-3 sm:py-4"
                  >
                    <span className="eyebrow text-ink-faint tabular">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink text-sm sm:text-base font-light">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="relative bg-paper py-16 sm:py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-12 sm:mb-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <span className="eyebrow text-ink-faint tabular">No. 03</span>
                <div className="w-8 sm:w-12 h-px bg-ink-faint" />
                <span className="eyebrow">Performance</span>
              </div>
              <h2 className="display text-[40px] sm:text-5xl lg:text-7xl text-ink leading-[0.95]">
                Five<br />
                <span className="display-soft text-aqua-deep">guarantees.</span>
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-rule">
            {benefits.map((b, i) => (
              <div key={b.title} className="bg-paper p-7 sm:p-8 lg:p-10 group">
                <span className="display text-3xl text-ink-faint group-hover:text-aqua-deep transition-colors tabular">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-xl text-ink mt-5 sm:mt-6 leading-tight">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed font-light">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION SURFACES ── */}
      <section className="relative bg-ink text-paper py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <span className="eyebrow text-paper/40 tabular">No. 04</span>
                <div className="w-8 sm:w-12 h-px bg-paper/30" />
                <span className="eyebrow text-paper/60">Versatile</span>
              </div>
              <h2 className="display text-[40px] sm:text-5xl lg:text-6xl text-paper leading-[0.95]">
                Where it<br />
                <span className="display-soft text-aqua">protects.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-paper/60 text-base sm:text-lg leading-[1.65] font-light max-w-xl mb-8 sm:mb-10">
                Marine Metal Guard is engineered for any metal surface that meets
                marine conditions, from anchor chains to deck fittings.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                {[
                  "Stainless Rails",
                  "Anchor Chains",
                  "Mooring Cleats",
                  "Carabiners",
                  "Deck Fittings",
                  "Propeller Shafts",
                  "Hardware",
                  "Hatches",
                  "Fasteners",
                ].map((item) => (
                  <div key={item} className="border-t border-paper/15 pt-2">
                    <span className="text-sm text-paper font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION INSTRUCTIONS ── */}
      <section className="relative bg-paper py-16 sm:py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <span className="eyebrow text-ink-faint tabular">No. 05</span>
                <div className="w-8 sm:w-12 h-px bg-ink-faint" />
                <span className="eyebrow">Method</span>
              </div>
              <h2 className="display text-[40px] sm:text-5xl lg:text-7xl text-ink leading-[0.95] lg:sticky lg:top-32">
                How it<br />
                <span className="display-soft text-aqua-deep">applies.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ol className="space-y-px bg-rule">
                {applicationSteps.map((step, i) => (
                  <li key={i} className="bg-paper flex items-start gap-4 sm:gap-6 py-5 sm:py-6 group">
                    <span className="display text-2xl sm:text-3xl text-ink-faint group-hover:text-aqua-deep transition-colors tabular w-10 sm:w-12 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink text-sm sm:text-base leading-relaxed font-light pt-1.5 sm:pt-2">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIFICATIONS ── */}
      <section id="specs" className="relative bg-paper-warm py-16 sm:py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="flex items-end justify-between mb-12 sm:mb-16 flex-wrap gap-4 sm:gap-6">
            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <span className="eyebrow text-ink-faint tabular">No. 06</span>
                <div className="w-8 sm:w-12 h-px bg-ink-faint" />
                <span className="eyebrow">Technical</span>
              </div>
              <h2 className="display text-[40px] sm:text-5xl lg:text-7xl text-ink leading-[0.95]">
                The<br />
                <span className="display-soft text-aqua-deep">specification.</span>
              </h2>
            </div>
            <p className="text-ink-faint text-xs sm:text-sm tabular">REACH compliant · ISO 15184</p>
          </div>

          <div className="bg-paper overflow-x-auto">
            <table className="w-full text-left tabular text-sm">
              <tbody>
                {specs.map((s, i) => (
                  <tr
                    key={s.label}
                    className="border-t border-rule hover:bg-paper-cool transition-colors"
                  >
                    <td className="py-4 sm:py-5 px-3 sm:px-4 lg:px-8 text-xs eyebrow text-ink-faint tabular w-12 sm:w-16">
                      {String(i + 1).padStart(2, "0")}
                    </td>
                    <td className="py-4 sm:py-5 px-2 sm:px-4 lg:px-8 text-ink font-light">{s.label}</td>
                    <td className="py-4 sm:py-5 px-3 sm:px-4 lg:px-8 text-ink-soft text-right">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border-t border-rule" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-paper py-16 sm:py-24 lg:py-36">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10 lg:px-16 text-center">
          <h2 className="display text-[44px] sm:text-6xl lg:text-8xl text-ink leading-[0.95]">
            Ready to<br />
            <span className="display-soft text-aqua-deep">protect.</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-ink-soft text-base sm:text-lg leading-relaxed max-w-md mx-auto font-light">
            Get in touch with our team to order Marine Metal Guard or discuss
            commercial supply.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:info@saltproceramics.com"
              className="inline-flex items-center justify-between bg-ink hover:bg-ink-deep text-paper text-[11px] tracking-[0.2em] uppercase font-medium px-7 py-4 transition-colors group"
            >
              <span>Contact Sales</span>
              <span className="ml-6 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-between border border-ink/15 hover:border-ink text-ink text-[11px] tracking-[0.2em] uppercase font-medium px-7 py-4 transition-colors"
            >
              <span>Back to Index</span>
              <span className="ml-6">←</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
