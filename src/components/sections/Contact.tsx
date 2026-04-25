import { useState } from "react";
import { Reveal } from "@/components/extovix/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "";
    const email = data.get("email")?.toString().trim() || "";
    const message = data.get("message")?.toString().trim() || "";

    const subject = encodeURIComponent("New contact request from Estovix site");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailto = `mailto:theestovix@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;

    setTimeout(() => {
      setLoading(false);
      form.reset();
      toast.success("Email draft opened — send it from your mail app.");
    }, 500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <div className="mb-16 grid gap-8 border-b border-border pb-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <span className="eyebrow">— Contact</span>
          </Reveal>
          <Reveal className="md:col-span-9" delay={0.05}>
            <h2 className="font-display text-4xl font-light leading-[1.0] tracking-tight md:text-7xl">
              Let's build something <span className="italic-serif text-accent">worth using.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <aside className="space-y-8">
              <div>
                <div className="eyebrow mb-2">Email</div>
                <a href="mailto:theestovix@gmail.com" className="font-display text-xl text-foreground underline-link">
                  theestovix@gmail.com
                </a>
              </div>
              <div>
                <div className="eyebrow mb-2">Located</div>
                <p className="font-display text-xl text-foreground">Keralam, India</p>
              </div>
              <div>
                <div className="eyebrow mb-2">Reply within</div>
                <p className="font-display text-xl text-foreground">1 business day</p>
              </div>
            </aside>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="eyebrow">01 / Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-2 h-12 rounded-none border-0 border-b border-border bg-transparent px-0 font-display text-lg shadow-none focus-visible:border-accent focus-visible:ring-0"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="eyebrow">02 / Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="mt-2 h-12 rounded-none border-0 border-b border-border bg-transparent px-0 font-display text-lg shadow-none focus-visible:border-accent focus-visible:ring-0"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="eyebrow">03 / Project</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project, timeline, and goals…"
                  className="mt-2 resize-none rounded-none border-0 border-b border-border bg-transparent px-0 font-display text-lg shadow-none focus-visible:border-accent focus-visible:ring-0"
                />
              </div>
              <div className="flex justify-end pt-2">
                <Button type="submit" variant="accent" size="lg" disabled={loading}>
                  {loading ? "Sending…" : "Send message →"}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};