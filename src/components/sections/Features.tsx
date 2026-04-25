import { Reveal } from "@/components/extovix/Reveal";
import { Zap, Shield, GitBranch, BarChart3, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ship in weeks, not quarters",
    desc: "Tight feedback loops, weekly releases, and a bias for shipping over speculation.",
  },
  {
    icon: Shield,
    title: "Production-grade by default",
    desc: "Type-safe code, automated tests, observability and security baked in from day one.",
  },
  {
    icon: GitBranch,
    title: "Scalable architecture",
    desc: "Multi-tenant, event-driven systems designed to grow from MVP to millions of users.",
  },
  {
    icon: BarChart3,
    title: "Data-informed product",
    desc: "Analytics, A/B tests and dashboards so every release is measured against outcomes.",
  },
  {
    icon: Users,
    title: "Embedded with your team",
    desc: "We work as one squad — design, engineering and product — in your tools and rituals.",
  },
  {
    icon: Sparkles,
    title: "AI-native engineering",
    desc: "LLM features, RAG pipelines and intelligent agents wired into real product workflows.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="container">
        <div className="mb-16 grid gap-8 border-b border-border pb-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <span className="eyebrow">— Why Estovix</span>
          </Reveal>
          <Reveal className="md:col-span-9" delay={0.05}>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              The advantages of a <span className="italic-serif text-accent">product company,</span>
              <br />
              with the speed of a studio.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-secondary/50 md:p-10">
                <div className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-accent-soft/40 text-accent transition-transform duration-500 group-hover:-translate-y-0.5">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-light text-foreground md:text-2xl">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};