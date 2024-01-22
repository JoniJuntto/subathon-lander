import rateup from "../assets/rateup.webp";
import avatar from "../assets/avatar.png";

export default function Products() {
  return (
    <div className="flex flex-col justify-center sm:h-full lg:h-screen py-12 bg-[#EBE915]">
      <h1 className="font-bold text-center mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900">
        This is what we have done
      </h1>
      <h3 className="font-bold text-center mb-6 text-xl sm:text-2xl md:text-4xl lg:text-3xl text-gray-900">
        So far...
      </h3>
      <div className="flex flex-col justify-center">
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img src={avatar} alt="Antsyavatars logo" className="rounded-xl" />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex item-center">
              <div className="bg-gray-200 mr-1 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Software
              </div>
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Web
              </div>
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              Antsyavatars
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              Antsyavatars is a web app that includes useful tools for live
              streamers. It includes a overlay that shows current viewers as
              animated avatars and a overlay that shows the chat messages in
              stream. Antsyavatars has also a webshop where vierwers can buy new
              skins for their avatar.
            </p>
            <a href="https://www.antsyavatars.com" className="text-blue-500">
              Check out the website
            </a>
          </div>
        </div>
        h1 Hh
      </div>
      <br className="my-12" />
      <div className="flex flex-col justify-center">
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img src={rateup} alt="Rateup logo" className="rounded-xl" />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex item-center">
              <div className="bg-gray-200 mr-1 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Software
              </div>
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Mobile
              </div>
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              RateUp
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              RateUp is a mobile app that allows users to rate their favorite
              drinks and see what other users think about them. RateUp makes it
              possible to find new drinks and share your own favorite drinks
              with others.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.juomaranking"
              className="text-blue-500"
            >
              Download from Google Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
