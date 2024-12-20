import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Sparkles } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { useEffect, useState } from "react";
import ClockComponent from "@/components/ClockComponent";

interface LiveStats {
  subCount: number;
  followCount: number;
  bitCount: number;
  viewerCount: number;
  endTime: number;
}

const HeroSection = () => {
  const [stats, setStats] = useState<LiveStats>({
    subCount: 0,
    followCount: 0,
    bitCount: 0,
    viewerCount: 0,
    endTime: 0, // unix timestamp
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://yak-probable-terminally.ngrok-free.app/api/amounts/live",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        console.log("Response status:", response.status);
        console.log("Response headers:", Object.fromEntries(response.headers));

        const text = await response.text();
        console.log("Raw response body:", text);

        if (text.trim().startsWith("{")) {
          const data = JSON.parse(text);
          setStats(data);
        } else {
          throw new Error(
            "Response is not JSON: " + text.substring(0, 100) + "..."
          );
        }
      } catch (error) {
        console.error("Error fetching live stats:", error);
        setStats({
          subCount: 0,
          followCount: 0,
          bitCount: 0,
          viewerCount: 0,
          endTime: 0,
        });
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

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
              className="px-4 py-1.5 rounded-full inline-flex items-center bg-secondary hover:bg-secondary/80 transition-all hover:scale-105 cursor-pointer"
            >
              <a
                href="https://www.twitch.tv/huikkakoodaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                twitch.tv/huikkakoodaa
              </a>
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
            HuikkaThon subathon
            <div className="my-12">
              <ClockComponent unixTimestamp={stats.endTime} />
            </div>
            <span className="block text-3xl mt-2 sm:mt-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50">
              Se hyvän mielen subathoni
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Subathon on maraton-livestream, jossa yhteisö päättää, kuinka kauan
            striimi kestää ja mitä tapahtuu! Lähtökohtaisesti striimi kestää 4
            tuntia, mutta katsojat voivat pidentää aikaa lahjoituksilla,
            tilauksilla, seuraamisilla tai kanavapisteillä.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button
              size="lg"
              className="gap-2 rounded-full px-8 w-full sm:w-auto group relative overflow-hidden"
              onClick={() => scrollToSection("goals")}
            >
              <span className="relative z-10 flex items-center gap-2">
                Subathonin tavoitteet
                <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-4">Tilanne nyt</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-background/40 backdrop-blur-sm p-6 rounded-2xl border border-border/50">
            <StatCard title="Subscribers" value={stats.subCount} />
            <StatCard title="Followers" value={stats.followCount} />
            <StatCard title="Bits" value={stats.bitCount} />
            <StatCard title="Viewers" value={stats.viewerCount} />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ title, value }: { title: string; value: number }) => (
  <div className="text-center">
    <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
      {value}
    </p>
  </div>
);

export default HeroSection;
