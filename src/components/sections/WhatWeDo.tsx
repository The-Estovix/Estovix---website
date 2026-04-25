import { Reveal } from "@/components/extovix/Reveal";

const services = [
  {
    num: "01",
    title: "Product Development",
    desc: "From zero-to-one MVPs to mature platforms — we ship with craft and clarity.",
    tags: ["Discovery", "MVP", "Engineering"],
  },
  {
    num: "02",
    title: "SaaS Solutions",
    desc: "Multi-tenant, billing-ready architectures designed to grow with your customers.",
    tags: ["Architecture", "Billing", "Auth"],
  },
  {
    num: "03",
    title: "AI Tools",
    desc: "LLM products, agents and intelligent workflows that deliver real value.",
    tags: ["LLM", "Agents", "RAG"],
  },
  {
    num: "04",
    title: "Web & Mobile Apps",
    desc: "Performant, beautiful experiences across web, iOS and Android — built for scale.",
    tags: ["React", "iOS", "Android"],
  },
];

export const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="relative py-24 md:py-32">
      <div className="container">
        <div className="mb-16 grid gap-8 border-b border-border pb-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <span className="eyebrow">— Practice</span>
          </Reveal>
          <Reveal className="md:col-span-9" delay={0.05}>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              A studio for the <span className="italic-serif text-accent">product</span> era.
              <br />
              Four practices, one obsession.
            </h2>
          </Reveal>
        </div>

        <div className="divide-y divide-border border-b border-border">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="group grid items-start gap-4 py-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-muted-foreground">{s.num} /</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl font-light text-foreground transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {s.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden md:col-span-1 md:flex md:justify-end">
                  <span className="text-xl text-foreground transition-transform duration-500 group-hover:translate-x-1 group-hover:text-accent">→</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};