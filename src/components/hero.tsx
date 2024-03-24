import logo from "../assets/logo.svg";
export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-screen xl:h-[90vh] sm:h-screen  p-6 sm:p-12 md:p-24">
      <img src={logo} className="w-80 h-64" />
      <div className="text-center pb-12">
        <h1 className="text-white my-1 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins">
          We do what we do best...
        </h1>
        <h2 className="text-white font-avenir font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
          Pöhistään
        </h2>
      </div>
    </div>
  );
}
