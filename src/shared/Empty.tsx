import Link from "next/link";
import React from "react";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full py-16">
      <h1 className="text-white text-xl font-bold">NOTHING HERE YET</h1>
      <p className="text-[#9CA3AF] text-center">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="bg-[#CCFF00] text-black font-semibold px-4 py-2 rounded-full mt-2 inline-block hover:bg-[#b8e600] transition-colors"
      >
        Browse Library
      </Link>
    </div>
  );
};

export default Empty;