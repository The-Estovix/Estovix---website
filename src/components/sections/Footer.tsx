const cols = [
  { title: "Studio", links: [{ label: "About", href: "#about" }, { label: "Method", href: "#process" }, { label: "Careers", href: "/careers" }] },
  { title: "Elsewhere", links: [{ label: "Twitter", href: "#" }, { label: "LinkedIn", href: "#" }, { label: "GitHub", href: "#" },{label: "Instagram", href: "#"}] },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background pt-20 pb-10">
      <div className="container">
        {/* Giant wordmark */}
        <div className="mb-16 select-none overflow-hidden">
          <h2 className="font-display text-[20vw] font-light leading-[0.85] tracking-tighter text-foreground">
            Estovix<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid gap-12 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-xl font-light leading-snug text-foreground md:text-2xl">
              We build software <span className="italic-serif text-accent">people actually use</span> —
              for founders and forward-thinking companies.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="eyebrow mb-4">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-foreground underline-link">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Estovix — All rights reserved</p>
          <p>Crafted with intent · Issue № 01</p>
        </div>
      </div>
    </footer>
  );
};