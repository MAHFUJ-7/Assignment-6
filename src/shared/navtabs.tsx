"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

const NavTabs = () => {
  const pathname = usePathname();

  return (
    <div role="tablist" aria-label="Navigation Tabs" className="flex gap-2">
      {tabs.map((tab) => {
        const isActive =
          tab.href === "/workouts"
            ? pathname === "/workouts" || pathname === "/"
            : pathname === tab.href;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            role="tab"
            aria-selected={isActive}
            className={
              isActive
                ? "bg-[#1A2312] text-[#C2F800] px-8 py-2 rounded-3xl cursor-pointer font-semibold"
                : "text-[#9CA3AF] px-8 py-2 rounded-3xl cursor-pointer font-semibold"
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