import FeaturesSection from "@/pages/frontpage/sections/features";
import HeroSection from "@/pages/frontpage/sections/hero";
import ProjectsSection from "@/pages/frontpage/sections/projects";
import ServicesSection from "@/pages/frontpage/sections/services";
import TeamSection from "@/pages/frontpage/sections/team";

const Frontpage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
    </div>
  );
};

export default Frontpage;
