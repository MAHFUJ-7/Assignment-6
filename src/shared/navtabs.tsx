"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Workout" },
  { href: "/my-plan", label: "My Plan" },
];

const NavTabs = () => {
  const pathname = usePathname();

  return (
    <div role="tablist" aria-label="Navigation Tabs" className="flex gap-2">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            role="tab"
            aria-selected={isActive}
            className={
              isActive
                ? "bg-[#1A2312] text-[#C2F800] px-4 sm:px-8 py-1.5 sm:py-2 rounded-3xl cursor-pointer font-semibold text-xs sm:text-base transition-colors"
                : "text-[#9CA3AF] px-4 sm:px-8 py-1.5 sm:py-2 rounded-3xl cursor-pointer font-semibold text-xs sm:text-base transition-colors hover:text-white"
            }
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavTabs;