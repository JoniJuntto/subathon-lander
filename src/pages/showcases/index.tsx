import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "AI-Powered Analytics",
    description:
      "Advanced analytics platform using machine learning to provide real-time business insights.",
    image: "/api/placeholder/600/400",
    tags: ["React", "TypeScript", "TensorFlow", "AWS"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: "project-2",
    title: "Smart City Solutions",
    description:
      "IoT platform for managing urban infrastructure and improving city services.",
    image: "/api/placeholder/600/400",
    tags: ["IoT", "Python", "React", "MongoDB"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: "project-3",
    title: "Quantum Computing Interface",
    description:
      "User-friendly interface for quantum computing simulations and experiments.",
    image: "/api/placeholder/600/400",
    tags: ["Quantum", "TypeScript", "Next.js", "Python"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: "project-4",
    title: "Blockchain Trading Platform",
    description:
      "Secure and efficient platform for trading digital assets using blockchain technology.",
    image: "/api/placeholder/600/400",
    tags: ["Blockchain", "Solidity", "React", "Node.js"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: "project-5",
    title: "AR Navigation System",
    description:
      "Augmented reality navigation system for indoor and outdoor environments.",
    image: "/api/placeholder/600/400",
    tags: ["AR", "Unity", "C#", "iOS/Android"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: "project-6",
    title: "Green Energy Monitor",
    description:
      "Real-time monitoring system for renewable energy production and consumption.",
    image: "/api/placeholder/600/400",
    tags: ["IoT", "React", "Python", "InfluxDB"],
    links: {
      demo: "#",
      github: "#",
    },
  },
];

const ShowcasePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our innovative solutions that are shaping the future of
              technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <a
                        href={project.links.demo}
                        className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.links.github}
                        className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowcasePage;
