import React from 'react'
import { Inter } from "next/font/google";
import { Oswald } from "next/font/google";
import heroImage from "@/assets/banner.png";
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
export default function banner() {
  return (
    <div className="bg-[#000000] p-5 " >
    <div className="container mx-auto py-5 bg-[#222630] flex justify-between items-center px-5 rounded-[20px]">
      <div>
        <h3 className={`text-[#C2F800] ${inter.className}`}>WORKOUT LIBRARY</h3>
        <h1 className={`text-white ${oswald.className} text-4xl font-bold mt-3`}>TRAIN WITH INTENT. LOG<br/>EVERY SET.</h1>
        <p className="text-[#9CA3AF] mt-3">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/>into today's plan, and watch the week's work add up.</p>
        <button className="bg-[#C2F800] text-black hover:bg-[#a8d500] rounded-lg py-1 px-2 my-5 font-semibold">BROWSE WORKOUTS</button>
      </div>
      <div>
        <Image src={heroImage} alt="Hero Image" className="w-75 h-auto object-cover"/>
      </div>
    </div>
    </div>
  )
}
