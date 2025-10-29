import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Terminal } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Surya V — Full Stack Developer";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20"
    >
      {/* Animated background mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-50"></div>
      <div className="absolute inset-0 gradient-hero"></div>

      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-20 right-1/3 w-3 h-3 bg-accent rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="max-w-6xl mx-auto text-center animate-fade-up relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg shadow-neon">
            <Terminal className="w-12 h-12 text-primary animate-glow" />
          </div>
        </div>

        <div className="mb-8">
          <div className="text-primary text-sm mb-2 font-mono">
            &lt;developer&gt;
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow">
              Surya V
            </span>
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-6 h-10 font-mono">
            {text}
            <span
              className={`inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            ></span>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
            React & Spring Boot Enthusiast | ECE Student
          </p>
          <div className="text-primary text-sm mt-2 font-mono">
            &lt;/developer&gt;
          </div>
        </div>

        <div className="mb-10 max-w-4xl mx-auto">
          <div className="p-6 bg-card/30 backdrop-blur-sm border border-border rounded-lg shadow-neon">
            <p className="text-sm md:text-base text-foreground leading-relaxed font-mono">
              <span className="text-accent">//</span> Motivated full-stack
              developer with hands-on experience in{" "}
              <span className="text-primary font-semibold">
                Java Spring Boot
              </span>
              , <span className="text-primary font-semibold">React.js</span>,
              and <span className="text-primary font-semibold">Next.js</span>.
              <br />
              <span className="text-accent">//</span> Eager to contribute to
              innovative software solutions.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Button
            asChild
            size="lg"
            className="gradient-primary border border-primary/50 shadow-neon hover:shadow-neon-strong hover:scale-105 transition-smooth font-mono"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-neon hover:scale-105 transition-smooth font-mono"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center items-center text-muted-foreground mb-8 font-mono text-sm">
          <a
            href="mailto:suryavishalanand@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-smooth hover:glow-cyan"
          >
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">suryavishalanand@gmail.com</span>
          </a>
          <a
            href="tel:+919361381365"
            className="flex items-center gap-2 hover:text-primary transition-smooth hover:glow-cyan"
          >
            <Phone className="w-5 h-5" />
            <span>+91 9361381365</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Coimbatore, Tamil Nadu</span>
          </div>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/SuryaV-1331"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/30 shadow-neon hover:shadow-neon-strong hover:scale-110 hover:border-primary transition-smooth"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6 text-primary" />
          </a>
          <a
            href="https://linkedin.com/in/surya-v07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-secondary/30 shadow-purple hover:shadow-neon-strong hover:scale-110 hover:border-secondary transition-smooth"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 text-secondary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
