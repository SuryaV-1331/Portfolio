import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Send className="w-12 h-12 text-primary animate-glow mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-mono">
            <span className="text-primary">&lt;</span>Get In Touch<span className="text-primary"> /&gt;</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm mb-2">// Let's build something amazing together</p>
          <p className="text-muted-foreground font-mono text-xs">Feel free to reach out for collaborations or opportunities</p>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg shadow-neon p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:suryavishalanand@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/5 transition-smooth group"
            >
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:scale-110 transition-smooth">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">Email</p>
                <p className="text-sm text-foreground font-mono group-hover:text-primary transition-smooth">
                  suryavishalanand@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+919361381365"
              className="flex items-center gap-4 p-4 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/5 transition-smooth group"
            >
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:scale-110 transition-smooth">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">Phone</p>
                <p className="text-sm text-foreground font-mono group-hover:text-primary transition-smooth">
                  +91 9361381365
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">Location</p>
                <p className="text-sm text-foreground font-mono">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t border-border">
            <p className="text-muted-foreground font-mono text-sm">Connect with me:</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/SuryaV-1331"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/50 border border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth hover:scale-110 group"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-primary group-hover:animate-glow" />
              </a>
              <a
                href="https://linkedin.com/in/surya-v07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/50 border border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-smooth hover:scale-110 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-secondary group-hover:animate-glow" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="gradient-primary border border-primary/50 shadow-neon hover:shadow-neon-strong hover:scale-105 transition-smooth font-mono"
          >
            <a href="mailto:suryavishalanand@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
