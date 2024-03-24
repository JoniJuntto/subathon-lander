import linkedin from "../assets/LinkedIn.svg";
import github from "../assets/github.svg";
import { Social, SocialInfo } from "./types";

export const GitHub = () => {
return(
  <div className="bg-gray-200 border mx-1 hover:bg-gray-400 w-12 h-12 fill-[#1d9bf0] hover:fill-white border-gray-400 rounded-full flex items-center justify-center shadow-xl hover:shadow-gray-400/50 cursor-pointer">
    <img src={github} alt="github" className="w-8" />
  </div>
);
}

export const LinkedIn = () => {
return(
  <div className="mx-1 hover:bg-[#1d9bf0] w-12 h-12 fill-[#1d9bf0] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer">
    <img src={linkedin} alt="linkedin" className="w-12 rounded-full" />
  </div>
  
);
}

export const Twitter = () => {

return(
  <div className="mx-1 hover:bg-[#1d9bf0] w-12 bg-slate-200 h-12 fill-[#1d9bf0] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer">
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      enableBackground="new 0 0 24 24"
      version="1.1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
        fill="#000"
    >
      <path d="M14.095 10.316L22.286 1h-1.94L13.23 9.088 7.551 1H1l8.59 12.231L1 23h1.94l7.51-8.543L16.45 23H23l-8.905-12.684zm-2.658 3.022l-.872-1.218L3.64 2.432h2.98l5.59 7.821.869 1.219 7.265 10.166h-2.982l-5.926-8.3z"></path>
    </svg>
  </div>
);
}

export const Instagram = () => {
return(
  <div className="bg-gray-200 mx-1 hover:bg-[#bc2a8d] w-12 h-12 fill-[#bc2a8d] hover:fill-white border-pink-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-pink-500/50 cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
      <circle cx="16.806" cy="7.207" r="1.078"></circle>
      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
    </svg>
  </div>
);
}

export default function Socials({ SocialInfo }: { SocialInfo: SocialInfo[] }) {
  return (
    <div className="flex justify-around my-4">
      {SocialInfo.map((info) => {
        switch (info.social) {
          case Social.GitHub:
            return (
              <a href={info.url} target="_blank" rel="noreferrer">
                <GitHub />
              </a>
            );
          case Social.LinkedIn:
            return (
              <a href={info.url} target="_blank" rel="noreferrer">
                <LinkedIn />
              </a>
            );
          case Social.Twitter:
            return (
              <a href={info.url} target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            );
          case Social.Instagram:
            return (
              <a href={info.url} target="_blank" rel="noreferrer">
                <Instagram />
              </a>
            );
        }
      })}
    </div>
  );
}
