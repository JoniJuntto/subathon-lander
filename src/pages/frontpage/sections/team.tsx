import { Card } from "@/components/ui/card";
import { Linkedin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Viljami Vastamäki",
    role: "CTO",
    bio: "Turning coffee into code since 2018",
    email: "viljami@pohina.group",
    image:
      "https://assembly.galleria.fi/kuvat/Assembly%20Summer%202023/Torstai/EmmiHalmela-ASMS23--29%20%281%29.jpg?img=medium",
    links: {
      linkedin: "https://linkedin.com/in/viljami-vastamaki/",
    },
  },
  {
    name: "Joni Juntto",
    role: "CEO",
    bio: "Making impossible possible daily",
    email: "joni@pohina.group",
    image:
      "https://assembly.galleria.fi/kuvat/Assembly%20Summer%202023/Torstai/EmmiHalmela-ASMS23--8.jpg?img=medium",
    links: {
      linkedin: "https://www.linkedin.com/in/joni-juntto-406468133/",
    },
  },
  {
    name: "Miro Puolanen",
    role: "CMO",
    bio: "Driving innovation at light speed",
    email: "miro@pohina.group",
    image: "/images/miro.png",
    links: {},
  },
];

const TeamSection = () => {
  return (
    <section className="min-h-screen py-16 sm:py-32 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto space-y-8 mb-16">
          <div className="text-center space-y-4">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-primary/10 text-primary"
            >
              <Sparkles className="w-4 h-4" />
              Meet the Team
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-bold">
              The Innovators Behind Pöhinä Group
            </h2>
          </div>

          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              We are the team behind Pöhinä – passionate individuals striving to
              make the world better through technology. For new projects and
              inquiries, we recommend reaching out to{" "}
              <span className="text-primary font-medium">Joni</span> or{" "}
              <span className="text-primary font-medium">Viljami</span> directly
              via email or LinkedIn.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card
              key={member.name}
              className="group relative h-[28rem] overflow-hidden border-primary/5 hover:border-primary/10 transition-colors ring-1 ring-primary/20"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${member.image})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

              <div className="absolute top-4 right-4 flex gap-2 z-10">
                {Object.entries(member.links).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/10 hover:bg-primary/20 backdrop-blur-sm transition-colors"
                  >
                    {platform === "linkedin" && (
                      <Linkedin className="w-5 h-5" />
                    )}
                  </a>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-3">
                  {member.bio}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className={`text-sm transition-colors block ${
                    member.primary
                      ? "text-primary hover:text-primary/80"
                      : "text-muted-foreground hover:text-muted-foreground/80"
                  }`}
                >
                  {member.email}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
