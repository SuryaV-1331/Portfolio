import { Code, Database, Wrench, Users, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["Java", "Spring Boot", "React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Python"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["VS Code", "IntelliJ IDEA", "Git", "GitHub", "Bitbucket", "Jenkins", "Graylog"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Adaptable", "Rapid Learner", "Team Collaboration", "Problem Solving"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Terminal className="w-12 h-12 text-primary animate-glow mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-mono">
            <span className="text-primary">&lt;</span>Skills & Tools<span className="text-primary"> /&gt;</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">// Tech stack & expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 shadow-neon hover:shadow-neon-strong transition-smooth group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:scale-110 transition-smooth">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth font-mono">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-sm border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 transition-smooth font-mono"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
