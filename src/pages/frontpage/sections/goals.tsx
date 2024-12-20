import CountdownTimer from "@/components/ClockComponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

interface Goal {
  points: number;
  description: string;
}

interface GoalCategory {
  name: string;
  range: string;
  goals: Goal[];
}

const GoalsSection = () => {
  const [currentPoints, setCurrentPoints] = useState<number>(0);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await fetch(
          "https://yak-probable-terminally.ngrok-free.app/api/points/now",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
        const data = await response.json();
        console.log("data", data);
        setCurrentPoints(data);
      } catch (error) {
        console.error("Failed to fetch points:", error);
      }
    };

    fetchPoints();
    // Refresh every minute
    const interval = setInterval(fetchPoints, 60000);
    return () => clearInterval(interval);
  }, []);

  const categorizedGoals: GoalCategory[] = [
    {
      name: "Alkuvaihe",
      range: "1-10 pistettä",
      goals: [
        { points: 1, description: "Assembly liput arvontaan 2x2 kpl" },
        { points: 2, description: "Korjataan subathon kello" },
        { points: 3, description: "Koiranulkoituslive" },
        { points: 5, description: "Kissan korvat subathonin ajaks" },
        { points: 7, description: "Funlight tier list" },
        { points: 9, description: "Kalja ykkösellä" },
        { points: 10, description: "Kaljamaili Forsun kanssa" },
      ],
    },
    {
      name: "Keski vaihe",
      range: "11-50 pistettä",
      goals: [
        {
          points: 11,
          description: "Lähetetään Funlightille sponsorointi pyyntö",
        },
        { points: 15, description: "Kokki live (tehää ruokaa emt)" },
        { points: 17, description: "Kalja ykkösellä" },
        {
          points: 18,
          description: "Chat saa päättää aiheen ja scriptin Tiktok videolle",
        },
        { points: 20, description: "Kick kanava" },
        { points: 25, description: "Toteutetaan chatin päättämä SaaS idea" },
        { points: 30, description: "Kalja ykkösellä" },
        { points: 31, description: "Kokkilive" },
        { points: 40, description: "Haetaan Jumaljoni" },
        { points: 50, description: "Mennään kahville Juhikselle" },
      ],
    },
    {
      name: "Korkeat tavoitteet",
      range: "51-1000 pistettä",
      goals: [
        { points: 69, description: "Tehdään katsojien päättämä pizza" },
        {
          points: 75,
          description: "Jokelan paikalliseen kaljalle (haetaan Wiineri mukaan)",
        },
        { points: 84, description: "1h karaoke" },
        { points: 100, description: "Minecraft skywars" },
        {
          points: 150,
          description: "Perustetaan Minecraft HuikaaPelaa let's play kanava",
        },
        { points: 200, description: "Juoksukaljat" },
        {
          points: 500,
          description:
            "Thaimaahan Pottukoiran kanssa (tarvii pottukoiran hyväksynnän)",
        },
        { points: 666, description: "Kirkkoon" },
        {
          points: 667,
          description:
            "Järjestetään reivit ja essot naamaan (ne baarit ei huumeet)",
        },
        { points: 900, description: "Deadline vaihtuu keskiviikkoon" },
        { points: 1000, description: "Mutsi koodaa" },
        { points: 1100, description: "Viljami messiin" },
        { points: 1200, description: "Varahahmo messiin" },
        { points: 1500, description: "Haetaan Riinatti" },
        { points: 1111, description: "Deadline vaihtuu" },
        {
          points: 2000,
          description: "Modien kanssa ruotsin laivalle (juhis tarjoo)",
        },
        { points: 3000, description: "Soitetaan duunii" },
        {
          points: 4000,
          description: "kirjoitetaan kirja jokelassa asumisesta",
        },
        { points: 728536, description: "MAAILMANENNÄTYS (kalja ykkösellä)" },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Striimin tavoitteet
      </h2>
      <div className="text-center mb-6">
        <p className="text-2xl font-bold">Nykyiset pisteet: {currentPoints}</p>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {categorizedGoals.map((category, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="bg-card p-4 rounded-t-lg">
              <div className="flex items-center gap-4">
                <span className="font-bold">{category.name}</span>
                <span className="text-muted-foreground">
                  ({category.range})
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-card rounded-b-lg">
              <div className="space-y-2 p-4">
                {category.goals.map((goal, goalIndex) => (
                  <div
                    key={goalIndex}
                    className={`flex items-center gap-4 p-2 rounded-lg transition-colors ${
                      goal.points <= currentPoints
                        ? "bg-primary/20"
                        : "hover:bg-accent"
                    }`}
                  >
                    <div
                      className={`${
                        goal.points <= currentPoints
                          ? "bg-green-600"
                          : "bg-primary"
                      } text-primary-foreground rounded-full p-2 min-w-[2.5rem] text-center`}
                    >
                      {goal.points}
                    </div>
                    <p
                      className={
                        goal.points <= currentPoints
                          ? "line-through opacity-70"
                          : ""
                      }
                    >
                      {goal.description}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default GoalsSection;
