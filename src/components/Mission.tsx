import MissionImage from '../assets/mission.webp';
import StatementImage from '../assets/statement.webp';

export default function Mission() {
  return (
    <div className="flex flex-col text-justify py-36 px-6 max-w-7xl mx-auto">
      {/* Mission Section */}
      <div className="flex flex-row justify-center items-start mb-8">
        <div className="flex flex-col text-white w-11/12 sm:w-full md:w-1/2 lg:w-1/2 font-semibold font-poppins">
          <h2 className="font-bold mb-4 text-2xl font-poppins sm:text-3xl md:text-4xl lg:text-5xl">
            Mission
          </h2>
          <p>
            Here at Pöhinä Group, we believe in the power of humor, beer, and high-quality software – not necessarily in that order. Our team of almost vikings come together to create software solutions that are as innovative as they are reliable.
          </p>
        </div>
        <img src={MissionImage} alt="Mission image" className="w-60 ml-12" />
      </div>

      {/* Statement Section - Image on the left, text on the right */}
      <div className="flex flex-row justify-center items-start">
        <img src={StatementImage} alt="Statement image" className="w-60 mr-12 order-first md:order-none" />
        <div className="flex flex-col text-white w-11/12 sm:w-full md:w-1/2 lg:w-1/2 font-semibold font-poppins">
          <h2 className="font-bold mb-4 text-2xl font-poppins sm:text-3xl md:text-4xl lg:text-5xl">
            Statement
          </h2>
          <p>
            In a cozy corner of Finland, armed with nothing but laptops and a limitless supply of coffee (and the occasional pulla), these three amigos set out to create a software house that was different. They dreamt of a place where creativity and code coexist, where innovation is fueled by laughter and camaraderie, and where each project is infused with a bit of Finnish magic.
          </p>
        </div>
      </div>
    </div>
  );
}

