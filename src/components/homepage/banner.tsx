import React from 'react'
import { Inter } from "next/font/google";
import { Oswald } from "next/font/google";
import heroImage from "@/assets/banner.png";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
export default function banner() {
  return (
    <div className="bg-[#000000] p-3 sm:p-5">
      <div className="container mx-auto py-6 sm:py-8 bg-[#222630] flex flex-col-reverse md:flex-row justify-between items-center px-6 sm:px-10 rounded-[20px] gap-6">
        <div className="max-w-xl text-center md:text-left">
          <h3 className={`text-[#C2F800] ${inter.className} text-sm sm:text-base font-semibold`}>WORKOUT LIBRARY</h3>
          <h1 className={`text-white ${oswald.className} text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight`}>
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="text-[#9CA3AF] mt-3 text-sm sm:text-base leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <div className="mt-5 flex justify-center md:justify-start">
            <a
              href="#library"
              className="bg-[#C2F800] text-black hover:bg-[#a8d500] rounded-lg py-2.5 px-5 font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer text-sm sm:text-base"
            >
              BROWSE WORKOUTS <FontAwesomeIcon icon={faArrowDown} className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <Image src={heroImage} alt="Hero Image" className="w-56 sm:w-68 md:w-80 h-auto object-contain" priority />
        </div>
      </div>
    </div>
  );
}
