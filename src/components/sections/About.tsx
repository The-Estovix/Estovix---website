import { Reveal } from "@/components/extovix/Reveal";

const stats = [
  { value: "2", label: "Products shipped" },
  { value: "1", label: "Countries served" },
  { value: "98%", label: "Client retention" },
  { value: "2", label: "Years of craft" },
];

export const About = () => {
  return (
    <section id="about" className="relative bg-background py-24 text-foreground md:py-32">
      <div className="container">
        <div className="mb-16 grid gap-8 border-b border-border pb-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              — Who we are
            </span>
          </Reveal>
          <Reveal className="md:col-span-9" delay={0.1}>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              A small team building <span className="italic-serif text-accent">software with soul.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={0.1}>
            <p className="font-display text-2xl font-light leading-snug text-foreground md:text-3xl">
              Estovix is a product-first studio. We partner with founders and forward-thinking
              companies to design, build, and scale software that earns daily use.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We believe the best products feel inevitable — clean, fast, and quietly
              powerful. That's the bar we hold every line of code and every pixel to.
            </p>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.2}>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-background p-6">
                  <div className="font-display text-4xl font-light text-accent">{s.value}</div>
                  <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};