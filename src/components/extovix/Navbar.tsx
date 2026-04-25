import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Who we are", num: "01" },
  { href: "#process", label: "What we do", num: "02" },
  { href: "#products", label: "Studio", num: "03" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full border border-border bg-background/80 px-4 py-2 shadow-pill backdrop-blur-xl transition-all duration-500 md:px-5",
          )}
        >
          <Logo />

          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group flex items-baseline gap-1.5 text-sm text-foreground"
                >
                  <span className="font-mono text-[0.62rem] text-muted-foreground">{l.num}</span>
                  <span className="underline-link">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button asChild variant="accent" size="sm">
              <a href="#idea">Have an idea →</a>
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-border bg-background/95 p-4 shadow-pill backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 px-1 py-3 text-base text-foreground"
                  >
                    <span className="font-mono text-xs text-muted-foreground">{l.num}</span>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <Button asChild variant="accent" className="w-full">
                  <a href="#idea" onClick={() => setOpen(false)}>Have an idea →</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};