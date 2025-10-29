import { Briefcase, Calendar, Code } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Code className="w-12 h-12 text-primary animate-glow mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-mono">
            <span className="text-primary">&lt;</span>Experience<span className="text-primary"> /&gt;</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">// Building scalable solutions</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2 shadow-neon"></div>
          
          <div className="space-y-12">
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
              <div className="md:text-right md:pr-8">
                <div className="inline-block p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/30 shadow-neon hover:shadow-neon-strong hover:border-primary transition-smooth">
                  <div className="flex md:flex-row-reverse items-center gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground font-mono">Software Development Intern</h3>
                  </div>
                  <p className="text-lg font-medium text-primary mb-2 font-mono">Lifafa Tech Services Pvt. Ltd.</p>
                  <div className="flex md:flex-row-reverse items-center gap-2 text-muted-foreground mb-4 font-mono text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>March 2025 – August 2025</span>
                  </div>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-6 md:mt-8 shadow-neon animate-glow border-2 border-background"></div>

              <div className="mt-4 md:mt-0 md:pl-8">
                <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                  <ul className="space-y-3 text-foreground font-mono text-sm">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Developed and integrated <strong className="text-primary">Stock Management</strong> and <strong className="text-primary">Homepage</strong> modules using React.js and Tailwind CSS</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Implemented backend APIs with <strong className="text-primary">Spring Boot</strong> for scalable data handling</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Improved UI/UX consistency in web apps like <strong className="text-primary">WorkPerx</strong> and <strong className="text-primary">Super Admin</strong></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Managed repositories in <strong className="text-primary">Bitbucket</strong>, deployments with <strong className="text-primary">Jenkins</strong>, and backend monitoring with <strong className="text-primary">Graylog</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
