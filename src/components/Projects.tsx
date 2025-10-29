import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "P&ID to Digital Intelligence",
    description:
      "AI & Computer Vision solution that digitizes industrial P&IDs using YOLO symbol detection and OCR technology.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "YOLO",
      "OCR",
    ],
    category: "AI & Computer Vision",
    link: "https://github.com/SuryaV-1331/Industrial-PID-to-Digital-Intelligence",
  },
  {
    title: "Employee Management System",
    description:
      "Full-stack CRUD application with DTO-based architecture for efficient employee data management.",
    technologies: ["Java Spring Boot", "Next.js", "PostgreSQL"],
    category: "Full Stack",
    link: "https://github.com/SuryaV-1331/EmployeeManagementSystem---Backend",
  },
  {
    title: "Perfect Plate",
    description:
      "Interactive recipe application with bookmarking and advanced search functionality for food enthusiasts.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    category: "Web Application",
    link: "https://github.com/SuryaV-1331/PerfectPlate",
  },
  {
    title: "Low-Cost Smart Board",
    description:
      "Affordable interactive board solution for education using Wiimote and open-source tools.",
    technologies: ["Wiimote", "Open-Source Tools"],
    category: "Hardware & Software",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <FolderGit2 className="w-12 h-12 text-primary animate-glow mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-mono">
            <span className="text-primary">&lt;</span>Projects
            <span className="text-primary"> /&gt;</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm mb-2">
            // Innovative solutions built with modern technologies
          </p>
          <p className="text-muted-foreground font-mono text-xs">
            console.log("Building the future, one commit at a time");
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                key={index}
                className="bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 shadow-neon hover:shadow-neon-strong transition-smooth cursor-pointer group overflow-hidden"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 font-mono text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-smooth font-mono">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground font-mono text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
