import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-mint-wash pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* dashed side guides — Litmus7 cue */}
      <div className="pointer-events-none absolute inset-y-0 left-6 hidden w-px dashed-rule md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-px dashed-rule md:block" />

      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground/70">
              A product engineering studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-medium text-foreground"
          >
            <span className="block text-[3rem] font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.5rem]">
              Innovation
            </span>
            <span className="mt-2 block italic-serif text-[2.4rem] leading-[1.05] text-accent sm:text-6xl lg:text-[5.5rem]">
              Meet Precision
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Estovix is a product-focused studio crafting{" "}
            <span className="text-foreground">SaaS, AI tools, and modern apps</span> —
            engineered for craft, designed for outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild variant="accent" size="lg">
              <a href="#products">
                Explore Products <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="#contact">Contact us ↗</a>
            </Button>
          </motion.div>
        </div>

        {/* footer strip — magazine meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-24 flex max-w-4xl flex-wrap items-center justify-between gap-4 border-t border-border pt-5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground"
        >
          <span>Vol. 01 — Studio</span>
          <span className="hidden sm:inline">Est. 2025 · Worldwide</span>
          <span className="text-accent">● Booking Q3 2026</span>
        </motion.div>
      </div>
    </section>
  );
};