import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-[#1E2330] p-4 flex flex-col sm:flex-row justify-between items-center gap-3 mt-3 text-center sm:text-left">
        <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={30} height={30} className="w-5 h-5 text-center"/>
            <h4 className="text-white font-bold">FITLOG</h4>
        </div>
        <p className="text-[#9CA3AF] text-xs sm:text-sm">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </div>
  )
}

export default Footer