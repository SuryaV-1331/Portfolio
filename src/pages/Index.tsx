import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 px-4 bg-card/30 backdrop-blur-sm border-t border-primary/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20"></div>
        <p className="text-muted-foreground font-mono text-sm relative z-10">
          <span className="text-primary">&lt;</span>© 2025 Surya V. All rights reserved.<span className="text-primary"> /&gt;</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
