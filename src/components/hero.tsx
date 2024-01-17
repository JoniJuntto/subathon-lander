export default function Hero() {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-[90vh] bg-[#254F1A] p-6 sm:p-12 md:p-24">
        <div className="text-center pb-12">
          <h1 className="text-[#D2E823] font-oswald font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            We do what we do best
          </h1>
          <h2 className="text-[#D2E823] font-oswald font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl underline italic">
            Pöhistään
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6">
            <div className="text-[#D2E823] font-oswald text-center">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                Mission
              </h2>
              <p className="mx-auto w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
              Here at Pöhinä Group, we believe in the power of humor, beer, and
              high-quality software – not necessarily in that order. Our team of
              almost vikings come together to create software solutions that are
              as innovative as they are reliable.
              </p>
            </div>
            <div className="text-[#D2E823] font-oswald text-center">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                Statement
              </h2>
              <p className="mx-auto w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
              In a cozy corner of Finland, armed with nothing but laptops and a
              limitless supply of coffee (and the occasional pulla), these three
              amigos set out to create a software house that was different. They
              dreamt of a place where creativity and code coexist, where
              innovation is fueled by laughter and camaraderie, and where each
              project is infused with a bit of Finnish magic. Everyone says that
              their company is cool, we are just too cool to admit it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  