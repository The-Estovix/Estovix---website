import { Reveal } from "@/components/extovix/Reveal";

const groups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"] },
  { label: "AI / ML", items: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "pgvector"] },
  { label: "Cloud", items: ["AWS", "GCP", "Vercel", "Supabase", "Cloudflare"] },
];

export const TechStack = () => {
  return (
    <section id="stack" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="container">
        <div className="mb-16 grid gap-8 border-b border-border pb-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <span className="eyebrow">— Stack</span>
          </Reveal>
          <Reveal className="md:col-span-9" delay={0.05}>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Tools we trust to <span className="italic-serif text-accent">ship at the edge.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div>
                <div className="eyebrow mb-4">{g.label}</div>
                <ul className="space-y-3 border-t border-border pt-4">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-baseline justify-between font-display text-lg font-light text-foreground"
                    >
                      <span>{it}</span>
                      <span className="font-mono text-[0.65rem] text-muted-foreground">●</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};