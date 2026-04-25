import { Reveal } from "@/components/extovix/Reveal";

const milestones = [
  {
    year: "2025",
    title: "Studio founded",
    body: "Estovix begins as a four-person practice shipping bespoke product work for early-stage founders.",
  },
  {
    year: "2026",
    title: "First flagship product",
    body: "Launched our first Application, reaching 10k active users within six months of release.",
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="relative bg-background py-24 text-foreground md:py-32">
      <div className="container">
        <div className="mb-16 grid gap-8 border-b border-border pb-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              — Timeline
            </span>
          </Reveal>
          <Reveal className="md:col-span-9" delay={0.1}>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Two years of <span className="italic-serif text-accent">quiet compounding.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative md:pl-8">
          {/* vertical rail */}
          <div
            aria-hidden
            className="absolute left-2 top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block"
          />

          <ol className="space-y-12 md:space-y-16">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05}>
                <li className="relative grid gap-6 md:grid-cols-12 md:gap-10">
                  {/* dot */}
                  <span
                    aria-hidden
                    className="absolute -left-[1.85rem] top-2 hidden h-3 w-3 rounded-full border border-accent bg-background md:block"
                  />
                  <div className="md:col-span-3">
                    <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                      Year
                    </div>
                    <div className="mt-1 font-display text-5xl font-light text-accent md:text-6xl">
                      {m.year}
                    </div>
                  </div>
                  <div className="md:col-span-9 md:border-l md:border-border md:pl-10">
                    <h3 className="font-display text-2xl font-light leading-snug md:text-3xl">
                      {m.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {m.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};