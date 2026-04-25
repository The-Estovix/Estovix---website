import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/extovix/Reveal";

const products = [
  {
    name: "OFF TO",
    tag: "APP",
    year: "2026",
    desc: "An AI-powered social media travel planner that helps users discover, plan, and share personalized travel experiences in real time..",
    bg: "bg-foreground text-background",
    accent: "text-accent",
  },
  {
    name: "ERP APP",
    tag: "SaaS",
    year: "2026",
    desc: "Analytics and ops platform for modern product teams shipping at speed.",
    bg: "bg-accent text-accent-foreground",
    accent: "text-accent-soft",
  },
];

export const Products = () => {
  return (
    <section id="products" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="container">
        <div className="mb-16 grid gap-8 border-b border-border pb-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <span className="eyebrow">— Our Products</span>
          </Reveal>
          <Reveal className="md:col-span-6" delay={0.05}>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Products built with <span className="italic-serif text-accent">intent.</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-3" delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              A glimpse at things we've shipped — and the kinds of products we love to build.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <article
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-md p-8 hover-lift md:p-10 ${p.bg}`}
                style={{ minHeight: 360 }}
              >
                <div className="flex items-start justify-between">
                  <div className={`font-mono text-xs uppercase tracking-[0.18em] ${p.accent}`}>
                    {String(i + 1).padStart(2, "0")} / {p.tag}
                  </div>
                  <div className="font-mono text-xs opacity-70">{p.year}</div>
                </div>

                <div>
                  <h3 className="font-display text-3xl font-light leading-tight md:text-5xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-80">
                    {p.desc}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-medium transition-all group-hover:gap-3"
                  >
                    View project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};