const AmountsSection = () => {
  const rules = [
    { text: "Striimi alkaa klo 17:00 20.12.2024", icon: "🧑🏼‍💻"},
    { text: "Striimin alussa kellossa on 4h", icon: "⏱️" },
    { text: "Striimi kestää MAX Sunnuntai klo 21", icon: "🎮" },
    { text: "Yöllä saa nukkua MAX 4h, päivällä MAX 1h", icon: "😴" },
  ];

  const pointRules = [
    { 
      text: "1 piste tavoitteisiin kertyy MISTÄ VAIN seuraavista:",
      icon: "⭐"
    },
    { text: "• 1 Sub", icon: "💜" },
    { text: "• 3€ Donation", icon: "💰" },
    { text: "• 400 Bits", icon: "✨" },
    { text: "• 30 Follows", icon: "👥" },
  ];

  const timeRules = [
    { text: "Subi = 10min lisää", icon: "💜" },
    { text: "2€ lahjoitus = 5min lisää", icon: "💰" },
    { text: "200 bits = 5 min lisää", icon: "✨" },
    { text: "1 follow = 1 min lisää", icon: "👥" },
    { text: "5000 channel points = 5min", icon: "🎯" },
    { text: "10 000 channel points = 10 min", icon: "🎯" },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Striimin säännöt
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <RuleCard title="Perus säännöt" rules={rules} icon="📋" />
        <RuleCard title="Pisteytys" rules={pointRules} icon="🎮" />
        <RuleCard title="Ajan lisäykset" rules={timeRules} icon="⌚" />
      </div>
    </div>
  );
};

const RuleCard = ({ 
  title, 
  rules, 
  icon 
}: { 
  title: string; 
  rules: Array<{ text: string; icon: string }>; 
  icon: string;
}) => (
  <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10">
    <div className="flex items-center gap-3 mb-6">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-4">
      {rules.map((rule, index) => (
        <li key={index} className="flex items-start gap-3 group">
          <span className="text-primary text-xl group-hover:scale-110 transition-transform">
            {rule.icon}
          </span>
          <span className="leading-tight">{rule.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default AmountsSection; 