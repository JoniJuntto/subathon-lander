import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Rocket,
  Users,
  Code,
  Target,
} from "lucide-react";

const people = [
  {
    id: "person-1",
    name: "Viljami Vastamäki",
    role: "Tech King",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
    links: { github: "#", linkedin: "#", email: "#" },
  },
  {
    id: "person-2",
    name: "Joni Juntto",
    role: "Chief Visionary Officer",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
    links: { github: "#", linkedin: "#", email: "#" },
  },
  {
    id: "person-3",
    name: "Miro Puolanen",
    role: "Chief Tesla Officer",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
    links: { github: "#", linkedin: "#", email: "#" },
  },
];

const stats = [
  { number: "100+", label: "Happy Clients", icon: Users },
  { number: "50K+", label: "Lines of Code", icon: Code },
  { number: "24/7", label: "Support", icon: Target },
  { number: "4+", label: "Years", icon: Rocket },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            We're Hiring!
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl lg:text-6xl">
            Meet Our Visionaries
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Join our innovative team of creators, builders, and visionaries as
            we shape the future of technology together.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{stat.number}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Who We Are</h3>
              <p className="text-muted-foreground">
                We're a team of passionate innovators, founded in Helsinki with
                a mission to revolutionize how businesses connect with
                technology. Our expertise spans from AI to cloud architecture,
                but our real strength lies in turning complex challenges into
                elegant solutions.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <p className="text-muted-foreground">
                We believe in agile development, rapid iteration, and close
                collaboration. Every line of code we write is crafted with
                scalability and future-proofing in mind. We're not just building
                for today – we're architecting for tomorrow.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {people.map((person) => (
              <Card
                key={person.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <Avatar
                      className="w-32 h-32 border-4 border-primary/10 mb-6 
                      transition-transform duration-300 group-hover:scale-105"
                    >
                      <AvatarImage src={person.avatar} />
                      <AvatarFallback>{person.name[0]}</AvatarFallback>
                    </Avatar>

                    <h3 className="text-xl font-semibold mb-2">
                      {person.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{person.role}</p>

                    <div className="flex gap-4">
                      <a
                        href={person.links.github}
                        className="text-muted-foreground 
                        hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={person.links.linkedin}
                        className="text-muted-foreground 
                        hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={person.links.email}
                        className="text-muted-foreground 
                        hover:text-primary transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
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
