import Socials from "./socials"

const TeamMember = ({image, name, title, email}: {image: string, name: string, title: string, email: string}) => {
    return(
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src={image} alt="photo"/>
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">{name}</p>
                <p className="text-base text-gray-400 my-2 font-normal">{title}</p>
                <p className="text-base text-gray-400 font-normal">{email}</p>
            </div>
            
            <Socials />
            
        </div>
    )
}

export default function Team() {
    return(
        <div className="bg-[#E9C0E9] p-6 sm:p-12 md:p-24 w-screen h-full">
        <div className="text-center pb-6 sm:pb-12">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900">
            Check our awesome team members
          </h1>
          <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-900">
            (If you need to contact someone, just contact Joni)
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TeamMember name="Viljami Vastamäki" image="https://assembly.galleria.fi/kuvat/Assembly%20Summer%202023/Torstai/EmmiHalmela-ASMS23--29%20%281%29.jpg?img=medium"  title="Tech King" email="viljami@pohina.group"/>
<TeamMember name="Joni Juntto" image="https://assembly.galleria.fi/kuvat/Assembly%20Summer%202023/Torstai/EmmiHalmela-ASMS23--8.jpg?img=medium" title="Chief Visionary Officer" email="joni@pohina.group"/>
<TeamMember name="Miro Puolanen" image="https://cdn.discordapp.com/attachments/1196421402132226058/1197224896925810698/IMG_3751.jpg?ex=65ba7d92&is=65a80892&hm=cdd215a007abe0f9fd8b276c8c08fa25808261e9fb040f65acaac41981b89779&" title="Chief Tesla Officer" email="miro@pohina.group"/>
        </div>
      </div>
    )

}

