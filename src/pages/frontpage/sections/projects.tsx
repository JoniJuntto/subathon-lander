import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CircleHelp } from "lucide-react";

const products = [
  {
    id: "antsyavatars",
    title: "Antsyavatars",
    description:
      "Antsyavatars is a web app that includes useful tools for live streamers. It includes an overlay that shows current viewers as animated avatars and an overlay that shows the chat messages in stream. Antsyavatars also has a webshop where viewers can buy new skins for their avatar.",
    image: "/images/avatar.png",
    tags: ["Software", "Web"],
    link: {
      url: "https://www.antsyavatars.com",
      text: "Check out the website",
    },
  },
  {
    id: "rateup",
    title: "RateUp",
    description:
      "RateUp is a mobile app that allows users to rate their favorite drinks and see what other users think about them. RateUp makes it possible to find new drinks and share your own favorite drinks with others.",
    image: "/images/rateup.webp",
    tags: ["Software", "Mobile"],
    link: {
      url: "https://play.google.com/store/apps/details?id=com.juomaranking",
      text: "Download from Google Play",
    },
  },
  {
    id: "yours",
    title: "The idea you have in mind right now",
    description:
      "Since we don't know what you have in mind right now, we can't tell you what it is. But we can tell you that we can build it for you.",
    image: null,
    tags: ["Web?", "Mobile?", "Software?"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 sm:py-32 relative px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Our Digital Footprint
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project is a testament to our commitment to excellence and
            innovation.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card className="group  overflow-hidden border border-primary/5 bg-background/50 hover:bg-secondary/10 transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 relative h-64 md:h-full min-h-[320px] overflow-hidden bg-secondary/10">
                    {product.image ? (
                      <>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CircleHelp className="w-24 h-24 text-primary/50" />
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-center space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag: string) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                      {product.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                      {product.description}
                    </p>

                    {product.link && (
                      <a
                        href={product.link.url}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group/link w-fit"
                        target={
                          product.link.url.startsWith("/")
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          product.link.url.startsWith("/")
                            ? undefined
                            : "noopener noreferrer"
                        }
                      >
                        {product.link.text}
                        <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    )}
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

export default ProjectsSection;
