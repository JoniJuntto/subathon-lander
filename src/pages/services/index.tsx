import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Globe, Lightbulb, Lock, Rocket } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    id: "ai",
    title: "AI Solutions",
    description:
      "Custom AI models and machine learning solutions tailored to your business needs. From predictive analytics to natural language processing.",
    icon: Cpu,
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies. Focus on performance, accessibility, and user experience.",
    icon: Globe,
  },
  {
    id: "security",
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets. Including penetration testing and security audits.",
    icon: Lock,
  },
  {
    id: "innovation",
    title: "Innovation Consulting",
    description:
      "Strategic technology consulting to help your business stay ahead of the curve. Digital transformation and innovation roadmaps.",
    icon: Lightbulb,
  },
  {
    id: "development",
    title: "Software Development",
    description:
      "Custom software solutions built to solve your unique business challenges. Enterprise-grade applications and systems.",
    icon: Code,
  },
  {
    id: "startup",
    title: "Startup Acceleration",
    description:
      "End-to-end support for startups, from MVP development to scaling. Technical expertise and strategic guidance.",
    icon: Rocket,
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering businesses with cutting-edge technology solutions that
              drive growth and innovation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                      <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
