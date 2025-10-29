import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certificates = [
  {
    title: "Modern JavaScript From The Beginning",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-2fa551c2-b178-4f88-9c21-a3d8724011c3/",
    tag: "JavaScript",
  },
  {
    title: "Data Structures & Algorithms Using Java",
    provider: "NPTEL",
    link: "https://github.com/SuryaV-1331/Certifications/blob/master/NPTEL/Data%20Structure%20and%20Algorithms%20using%20Java%20(1).pdf",
    tag: "DSA",
  },
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    link: "https://github.com/SuryaV-1331/Certifications/blob/master/freeCodeCamp/Screenshot%202025-01-09%20203632.png",
    tag: "Web Design",
  },
  {
    title: "SQL",
    provider: "HackerRank",
    link: "https://github.com/SuryaV-1331/Certifications/blob/master/HackerRank/sql_basic%20certificate.pdf",
    tag: "Database",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Award className="w-12 h-12 text-primary animate-glow mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-mono">
            <span className="text-primary">&lt;</span>Certificates
            <span className="text-primary"> /&gt;</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            // Continuous learning & growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                key={index}
                className="bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 shadow-neon hover:shadow-neon-strong transition-smooth group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 font-mono text-xs">
                      {cert.tag}
                    </Badge>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-smooth"
                      aria-label="View Certificate"
                    >
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                    </a>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth font-mono">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    {cert.provider}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
