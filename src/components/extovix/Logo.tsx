import { cn } from "@/lib/utils";
import estovixLogo from "@/assets/estovix-logo.png";

export const Logo = ({ className }: { className?: string }) => (
  <a href="#top" className={cn("group flex items-center gap-2", className)}>
    <img
      src={estovixLogo}
      alt="Estovix Logo"
      className="h-8 w-auto"
    />
    <span className="font-display text-2xl font-medium tracking-tight text-foreground">
      Estovix
    </span>
    <span className="text-2xl leading-none text-accent">.</span>
  </a>
);