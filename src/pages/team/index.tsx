import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, LucideIcon } from "lucide-react";

interface PersonLink {
  github: string;
  linkedin: string;
  email: string;
}

interface Person {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
  avatar: string;
  links: PersonLink;
}

const people: Person[] = [
  {
    id: "person-1",
    firstName: "Viljami",
    lastName: "Vastamäki",
    role: "Tech King",
    bio: "Turning coffee into code since 2018",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
    links: { github: "#", linkedin: "#", email: "#" },
  },
  {
    id: "person-2",
    firstName: "Joni",
    lastName: "Juntto",
    role: "Chief Visionary Officer",
    bio: "Making impossible possible daily",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
    links: { github: "#", linkedin: "#", email: "#" },
  },
  {
    id: "person-3",
    firstName: "Miro",
    lastName: "Puolanen",
    role: "Chief Tesla Officer",
    bio: "Driving innovation at light speed",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
    links: { github: "#", linkedin: "#", email: "#" },
  },
];

type SocialPlatform = keyof PersonLink;
type IconMap = Record<SocialPlatform, LucideIcon>;

const socialIcons: IconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

const TeamPage: React.FC = () => {
  return (
    <div className="bg-background">
      <section className="relative py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Meet The Innovators
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We're not just another tech company. We're the architects of
              tomorrow, building solutions that push the boundaries of what's
              possible. Meet the team that's making it all happen. We're excited
              to meet you!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {people.map((person) => (
              <Card
                key={person.id}
                className="hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <Avatar
                      className="w-40 h-40 border-4 border-primary/10 mb-6 
                      transition-transform duration-300 hover:scale-105"
                    >
                      <AvatarImage src={person.avatar} alt={person.firstName} />
                    </Avatar>

                    <div className="flex flex-col justify-center items-center">
                      <h3 className="text-2xl font-semibold mb-2">
                        {person.firstName}
                      </h3>

                      <h3 className="text-2xl font-semibold mb-2">
                        {person.lastName}
                      </h3>
                    </div>
                    <p className="text-primary font-medium mb-2">
                      {person.role}
                    </p>
                    <p className="text-muted-foreground mb-6 text-center">
                      {person.bio}
                    </p>

                    <div className="flex gap-4">
                      {(
                        Object.entries(person.links) as [
                          SocialPlatform,
                          string
                        ][]
                      ).map(([platform, link]) => {
                        const Icon = socialIcons[platform];
                        return (
                          <a
                            key={platform}
                            href={link}
                            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 
                              transition-colors duration-300"
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      })}
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

export default TeamPage;
