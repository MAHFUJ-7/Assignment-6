import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import NavTabs from "./navtabs";
import Link from "next/dist/client/link";

const Navbar = () => {
  return (
    <div className="bg-[#000000] border-b border-b-[#404047] border-0.5 px-3">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center gap-2 text-center">
          <Image
            src={logo}
            alt="Logo"
            width={30}
            height={30}
            className="w-6.25 h-6.25 text-center"
          />
          <h1 className="text-white text-2xl font-bold">FITLOG</h1>
        </div>

        <NavTabs />

        <div className="flex gap-8 items-center">
            <div>
                <Link href="/my-plan">Plan <span className="bg-[#C2F800] text-black text-sm font-bold px-2 py-1 mx-1 rounded-full">0</span></Link>
            </div>
            <div className="text-[#9CA3AF]">
                <Link href="/my-plan">Saved <span className="text-[#9CA3AF] text-sm font-bold px-2 py-1 mx-1 rounded-full border border-[#2D313B] ">1</span></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;