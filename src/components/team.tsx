import { Social, SocialInfo } from "./types";
import Socials from "./socials";

const TeamMember = ({
  image,
  name,
  title,
  email,
  socials,
}: {
  image: string;
  name: string;
  title: string;
  email: string;
  socials: SocialInfo[];
}) => {
  return (
    <div className="w-full border border-[#37697F] rounded-lg p-12 flex shadow-md shadow-[#37697F] flex-col justify-center items-center">
      <div className="mb-8">
        <img
          className="object-center object-cover rounded-full h-36 w-36"
          src={image}
          alt="photo"
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">{name}</p>
        <p className="text-base text-gray-400 my-2 font-normal">{title}</p>
        <p className="text-base text-gray-400 font-normal">{email}</p>
      </div>

      <Socials SocialInfo={socials} />
    </div>
  );
};

export default function Team() {
  return (
    <div className=" px-6 py-10 sm:p-12 md:p-24 w-screen h-full">
      <div className="text-center pb-6 sm:pb-12">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
          Check our awesome team members
        </h1>
        <h3 className="font-bold text-base sm:text-lg md:text-xl text-white">
          (If you need to contact someone, just contact Joni)
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TeamMember
          name="Viljami Vastamäki"
          image="https://assembly.galleria.fi/kuvat/Assembly%20Summer%202023/Torstai/EmmiHalmela-ASMS23--29%20%281%29.jpg?img=medium"
          title="Tech King"
          email="viljami@pohina.group"
          socials={[
            {
              url: "https://github.com/vastamaki",
              social: Social.GitHub,
            },
            {
              url: "https://linkedin.com/in/viljami-vastamaki/",
              social: Social.LinkedIn,
            },
            {
              url: "https://twitter.com/wiljamiwho",
              social: Social.Twitter,
            },
          ]}
        />
        <TeamMember
          name="Joni Juntto"
          image="https://assembly.galleria.fi/kuvat/Assembly%20Summer%202023/Torstai/EmmiHalmela-ASMS23--8.jpg?img=medium"
          title="Chief Visionary Officer"
          email="joni@pohina.group"
          socials={[
            {
              url: "https://github.com/JoniJuntto",
              social: Social.GitHub,
            },
            {
              url: "https://www.linkedin.com/in/joni-juntto-406468133/",
              social: Social.LinkedIn,
            },
          ]}
        />
        <TeamMember
          name="Miro Puolanen"
          image="https://cdn.discordapp.com/attachments/1196421402132226058/1197224896925810698/IMG_3751.jpg?ex=65ba7d92&is=65a80892&hm=cdd215a007abe0f9fd8b276c8c08fa25808261e9fb040f65acaac41981b89779&"
          title="Chief Tesla Officer"
          email="miro@pohina.group"
          socials={[
            {
              url: "",
              social: Social.Instagram,
            },
          ]}
        />
      </div>
    </div>
  );
}
