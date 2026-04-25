import { Reveal } from "@/components/extovix/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const IdeaCTA = () => {
  return (
    <section id="idea" className="relative py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/40 p-10 md:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

            <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <span className="eyebrow">— Have an idea?</span>
                <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
                  Bring your idea <span className="italic-serif text-accent">to life</span> with us.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  From a half-formed sketch to a shipped product — share what you're dreaming up, and we'll help you turn it into something real, refined, and worth using.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
                <Button asChild variant="accent" size="lg" className="w-full md:w-auto">
                  <a href="#contact">
                    Share your idea
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};