import { Reveal } from "@/components/extovix/Reveal";

const steps = [
  { num: "I", title: "Idea", desc: "We sharpen the vision — discovery, strategy, and product definition.", weeks: "1–2 weeks" },
  { num: "II", title: "Build", desc: "Design and engineering in tight loops, shipping the right thing fast.", weeks: "4–12 weeks" },
  { num: "III", title: "Launch", desc: "Go-to-market with confidence — refined, tested, ready for users.", weeks: "1–2 weeks" },
  { num: "IV", title: "Scale", desc: "Iterate, measure, and scale — from first users to product-market fit.", weeks: "Ongoing" },
];

export const Process = () => {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container">
        <div className="mb-16 grid gap-8 border-b border-border pb-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <span className="eyebrow">— What we do</span>
          </Reveal>
          <Reveal className="md:col-span-9" delay={0.05}>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Four chapters. <span className="italic-serif text-accent">Zero noise.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative h-full bg-background p-8 transition-colors duration-500 hover:bg-secondary/50 md:p-10">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-display text-5xl font-light text-accent md:text-6xl">{s.num}</span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Ch. 0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-8 border-t border-border pt-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Duration · {s.weeks}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};