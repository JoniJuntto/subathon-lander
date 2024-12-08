import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Sparkles, Code2 } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm -z-10" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-8">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 rounded-full inline-flex items-center bg-secondary hover:bg-secondary/80"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Hi! We are Pöhinä Group
            </Badge>
          </div>

          <Badge
            variant="secondary"
            className="px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full inline-flex items-center bg-primary/10 text-primary hover:bg-primary/20"
          >
            <Code2 className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">
              Where innovation meets implementation
            </span>
            <span className="sm:hidden">Innovation meets code</span>
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
            We Build Software
            <span className="block mt-2 sm:mt-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50">
              That Matters
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Building the digital future isn't just our job—it's our passion.
            From complex enterprise solutions to innovative startups, we
            transform ambitious ideas into powerful software solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button
              size="lg"
              className="gap-2 rounded-full px-8 w-full sm:w-auto group relative overflow-hidden"
              onClick={() => scrollToSection("team")}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              className="rounded-full px-8 w-full sm:w-auto group"
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              <span className="bg-clip-text group-hover:text-transparent bg-gradient-to-r from-primary to-primary-600 transition-colors">
                View Our Work
              </span>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "5+", label: "Projects Delivered" },
              { value: "24/7", label: "Support" },
              { value: "15+", label: "Tech Stack" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
