import { useEffect } from "react";
import { Navbar } from "@/components/extovix/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/extovix/Reveal";

export const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      
      {/* Main Heading Section */}
      <section className="relative py-24 md:py-40">
        <div className="container">
          <Reveal>
            <h1 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              We're always looking for <span className="italic-serif text-accent">talented builders.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Openings Section */}
      <section className="relative py-24 md:py-40 md:pt-48">
        <div className="container">
          <div className="mb-16 grid gap-8 border-b border-border pb-10 md:grid-cols-12">
            <Reveal className="md:col-span-3">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                — Openings
              </span>
            </Reveal>
            <Reveal className="md:col-span-9" delay={0.05}>
              <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
                No openings <span className="italic-serif text-accent">right now.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-7" delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground">
                We're currently focused on shipping great work with our team. However, we're always interested in hearing from talented individuals. If you'd like to work with us in the future, feel free to reach out.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:theestovix@gmail.com"
                  className="inline-flex items-center gap-2 font-display text-lg text-foreground underline-link"
                >
                  Get in touch
                  <span>→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
