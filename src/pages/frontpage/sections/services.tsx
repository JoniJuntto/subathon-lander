import { Card, CardContent } from "@/components/ui/card";
import { Globe, Lightbulb, Code } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Modern Web Apps",
    description:
      "We build blazing-fast web applications using TypeScript and modern frameworks.",
    icon: Globe,
    features: [
      "TypeScript-First Development",
      "Next.js & React Applications",
      "Cloud-Native Architecture",
      "Developer-Friendly APIs",
    ],
  },
  {
    id: "innovation",
    title: "Technical Architecture",
    description:
      "Need help choosing the right tech stack or modernizing your infrastructure? Let's design a solution your team will love.",
    icon: Lightbulb,
    features: [
      "Cloud Infrastructure Design",
      "Tech Stack Consultation",
      "Developer Experience (DX)",
      "Serverless Architecture",
    ],
  },
  {
    id: "development",
    title: "Custom Development",
    description:
      "From greenfield projects to complex integrations, we write clean, maintainable code.",
    icon: Code,
    features: [
      "Full-Stack TypeScript",
      "Kubernetes & Docker",
      "Microservices Architecture",
      "CI/CD Pipeline Setup",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-32 relative px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology solutions that
            drive growth and innovation. But in theory, we can help you with any
            tech-related problem you might have.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl bg-background/50 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="rounded-2xl bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-xs sm:text-sm text-muted-foreground"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
