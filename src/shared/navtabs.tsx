"use client";

import React, { useState } from "react";

const tabs = [
  { key: "workouts", label: "Workouts" },
  { key: "my-plan", label: "My Plan" },
];

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState("workouts");

  return (
    <div role="tablist" aria-label="Navigation Tabs" className="flex gap-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <div
            key={tab.key}
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveTab(tab.key)}
            className={
              isActive
                ? "bg-[#1A2312] text-[#C2F800] px-8 py-2 rounded-3xl cursor-pointer font-semibold"
                : "text-[#9CA3AF] px-8 py-2 rounded-3xl cursor-pointer font-semibold"
            }
          >
            {tab.label}
          </div>
        );
      })}
    </div>
  );
};

export default NavTabs;