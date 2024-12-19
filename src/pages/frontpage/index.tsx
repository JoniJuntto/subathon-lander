import HeroSection from "@/pages/frontpage/sections/hero";
import AmountsSection from "@/pages/frontpage/sections/amounts";
import GoalsSection from "@/pages/frontpage/sections/goals";

const Frontpage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="goals">
        <GoalsSection />
      </div>
      <div id="amounts">
        <AmountsSection />
      </div>
    </div>
  );
};

export default Frontpage;
