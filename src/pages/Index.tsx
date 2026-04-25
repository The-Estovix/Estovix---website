import { Navbar } from "@/components/extovix/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { IdeaCTA } from "@/components/sections/IdeaCTA";
import { Products } from "@/components/sections/Products";
import { Features } from "@/components/sections/Features";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { Founders } from "@/components/sections/Founders";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Process />
      <IdeaCTA />
      <Features />
      <Products />
      <Contact />
      <Founders />
      <Footer />
    </main>
  );
};

export default Index;
