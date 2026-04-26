import { Reveal } from "@/components/extovix/Reveal";
import { Linkedin, Twitter } from "lucide-react";
import founderLitin from "@/assets/Litin-CEO.jpeg";
import founderSanu from "@/assets/Sanu-CFO1.jpeg";
import founderAkhil from "@/assets/Akhil-CTO.jpeg";
import founderAnuvrath from "@/assets/Anuvrath-COO.jpeg";

const founders = [
  {
    name: "Litin Jiji Varghese",
    role: "Co-founder & CEO",
    bio: "Product strategist obsessed with turning fuzzy ideas into shipped, opinionated software.",
    initials: "LV",
    photo: founderLitin,
    linkedin: "https://www.linkedin.com/in/litin-jiji?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    twitter: "https://x.com/litinjiji?s=11",
  },
  {
    name: "Sanu Dilshan",
    role: "Co-founder & CFO",
    bio: "Finance strategist turning complexity into disciplined, high-impact decisions.",
    initials: "SD",
    photo: founderSanu,
    linkedin: "https://www.linkedin.com/in/sanu-dilshan-57ba51269",
    twitter: "https://x.com/sanudilshan?s=11",
  },
  {
    name: "Akhil C J",
    role: "Co-founder & CTO",
    bio: "Engineer at heart — building reliable systems that scale quietly behind beautiful interfaces.",
    initials: "ACJ",
    photo: founderAkhil,
    linkedin: "https://www.linkedin.com/in/akhilcj22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "",
  },
  {
    name: "Anuvrath Dileep A",
    role: "Co-founder & COO",
    bio: "Bridges craft and customers — making sure the right people meet the right product.",
    initials: "AD",
    photo: founderAnuvrath,
    linkedin: "https://www.linkedin.com/in/anuvrathdileepa/",
    twitter: "",
  },
];

export const Founders = () => {
  return (
    <section id="founders" className="relative py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="eyebrow">— Founders</span>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
                The people <span className="italic-serif text-accent">behind</span> Estovix.
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                A small team of makers — engineers, designers, and operators — building software with care, conviction, and a quiet sense of humor.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((f) => (
              <article
                key={f.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-secondary/40 p-8 transition-colors hover:bg-secondary/60"
              >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-60" />

                    <div className="relative flex items-center gap-4">
                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border bg-background">
                        <img
                          src={f.photo}
                          alt={`Portrait of ${f.name}, ${f.role} at Estovix`}
                          loading="lazy"
                          width={768}
                          height={768}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-light tracking-tight text-foreground">
                          {f.name}
                        </h3>
                        <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                          {f.role}
                        </p>
                      </div>
                    </div>

                    <p className="relative mt-8 text-sm leading-relaxed text-muted-foreground">
                      {f.bio}
                    </p>

                    <div className="relative mt-8 flex items-center gap-4 border-t border-border pt-6">
                      <a
                        href={f.linkedin}
                        aria-label={`${f.name} on LinkedIn`}
                        className="text-muted-foreground transition-colors hover:text-accent"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={f.twitter}
                        aria-label={`${f.name} on Twitter`}
                        className="text-muted-foreground transition-colors hover:text-accent"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <span className="ml-auto font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                        Estovix
                      </span>
                    </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
