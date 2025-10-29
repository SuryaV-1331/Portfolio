import { Trophy, Award, Code2, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "Smart India Hackathon 2023",
    subtitle: "Grand Finalist - Top 5 National",
    icon: Trophy,
    color: "text-primary",
  },
  {
    title: "TN EDII Hackathon",
    subtitle: "Second Runner-up - State Level",
    icon: Award,
    color: "text-secondary",
  },
  {
    title: "EngineeredX ABB Hackathon 2025",
    subtitle: "Finalist",
    icon: Code2,
    color: "text-accent",
  },
  {
    title: "LeetCode 200-Day Badge",
    subtitle: "Consistent Problem Solving",
    icon: Star,
    color: "text-primary",
  },
  {
    title: "Paper Presentation Awards",
    subtitle: "1st & 2nd prizes - Hindusthan & KGISL",
    icon: Award,
    color: "text-secondary",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Trophy className="w-12 h-12 text-primary animate-glow mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-mono">
            <span className="text-primary">&lt;</span>Achievements<span className="text-primary"> /&gt;</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">// Milestones & recognitions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 shadow-neon hover:shadow-neon-strong transition-smooth group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-lg bg-primary/10 border border-primary/30 mb-4 group-hover:scale-110 transition-smooth`}>
                      <Icon className={`w-8 h-8 ${achievement.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth font-mono">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">{achievement.subtitle}</p>
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

export default Achievements;
