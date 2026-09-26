import Link from "next/link";
import React from "react";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-10 h-full w-full">
      <h1>NOTHING HERE YET</h1>
      <p>Browse the library and add a lift to get today moving.</p>
      <Link
        href="/"
        className="bg-[#CCFF00] text-black font-semibold px-4 py-2 rounded-full mt-2 inline-block hover:bg-[#CCFF00]"
      >
        Browse Library
      </Link>
    </div>
  );
};

export default Empty;
