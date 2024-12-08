import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Users, Shapes } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Code,
    title: "Full-Stack Excellence",
    description:
      "From pixels to databases, we build it all. No challenge too complex, no stack too deep.",
    tags: ["TypeScript", "React", "Node.js"],
  },
  {
    icon: Rocket,
    title: "Launch at Light Speed",
    description:
      "We turn ideas into reality faster than you can say 'MVP'. Time to market? Yesterday.",
    tags: ["Agile", "CI/CD", "DevOps"],
  },
  {
    icon: Users,
    title: "Personal Attention",
    description:
      "Direct collaboration with developers means your vision is understood and implemented exactly as you want.",
    tags: ["Support", "Collaboration", "Communication"],
  },
  {
    icon: Shapes,
    title: "Infinite Scalability",
    description:
      "Built for growth from day one. Your success is our architecture.",
    tags: ["Cloud", "Kubernetes", "Microservices"],
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <Badge
            variant="secondary"
            className="px-4 py-1.5 mb-6 rounded-full inline-flex items-center bg-primary/10 text-primary"
          >
            Our Approach
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">How We Work</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with a personalized approach to
            deliver exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-background/50 backdrop-blur-sm border-primary/5 hover:border-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
