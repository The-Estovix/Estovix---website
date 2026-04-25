import { Reveal } from "@/components/extovix/Reveal";

const quotes = [
  {
    quote:
      "Estovix shipped our MVP in six weeks and it landed better than products we'd been building for a year.",
    name: "Sarah Lin",
    role: "Founder, Nimbus AI",
  },
  {
    quote:
      "Rare combination of design taste and engineering depth. They feel like a senior in-house team from day one.",
    name: "Marcus Hale",
    role: "VP Product, Lumen",
  },
  {
    quote:
      "They obsess over the details our users feel but never name. That's why retention doubled after launch.",
    name: "Priya Raman",
    role: "CEO, Forge Labs",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container">
        <div className="mb-16 grid gap-8 border-b border-border pb-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <span className="eyebrow">— Voices</span>
          </Reveal>
          <Reveal className="md:col-span-9" delay={0.05}>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              What partners say after <span className="italic-serif text-accent">we ship.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-md border border-border bg-background p-8 hover-lift md:p-10">
                <span className="font-display text-5xl font-light leading-none text-accent">"</span>
                <blockquote className="mt-2 font-display text-lg font-light leading-snug text-foreground md:text-xl">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-4">
                  <div className="font-display text-base text-foreground">{q.name}</div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {q.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};