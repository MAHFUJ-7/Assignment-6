"use client";
import React from "react";
import TodayPlan from "@/shared/TodayPlan";
import { IWorkout } from "@/type/type";
import { TodaySaveContext } from "@/context/provider";
import Empty from "@/shared/Empty";
import Saved from "@/shared/saved";

const Page = () => {
  const { todayplan, savedworkouts } = React.useContext(TodaySaveContext);
  const [activeTab, setActiveTab] = React.useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = React.useState<string>("Duration");
  const currentList = activeTab === "today" ? todayplan : savedworkouts;

  const sortWorkouts = (workouts: IWorkout[]) => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "Duration") return b.duration - a.duration;
      if (sortBy === "Calories") return b.caloriesBurned - a.caloriesBurned;
      if (sortBy === "Rating") return b.rating - a.rating;
      return 0;
    });
  };

  const sortedTodayPlan = sortWorkouts(todayplan);
  const sortedSavedWorkouts = sortWorkouts(savedworkouts);

  return (
    <div className="container mx-auto py-8 px-4">
      <div>
        <h1>MY PLAN</h1>
        <p className="text-[#9CA3AF]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        <div className="flex justify-evenly gap-2 sm:gap-8 mt-5 mb-5 bg-[#36383b] p-4 rounded-2xl sm:rounded-3xl text-center">
              <div className="flex-1">
                <p className="text-xs sm:text-base">Exercise</p>
                <h1 className="font-bold text-2xl sm:text-3xl text-[#CCFF00]">{currentList.length}</h1>
              </div>
              <div className="border-l border-[#9CA3AF] pl-2 sm:pl-4 flex-1">
                <p className="text-xs sm:text-base">Minutes</p>
                <h1 className="font-bold text-xl sm:text-2xl">{currentList.reduce((acc, workout) => acc + workout.duration, 0)}</h1>
              </div>
              <div className="border-l border-[#9CA3AF] pl-2 sm:pl-4 flex-1">
                <p className="text-xs sm:text-base">Calories</p>
                <h1 className="font-bold text-xl sm:text-2xl">{currentList.reduce((acc, workout) => acc + workout.caloriesBurned, 0)}</h1>
              </div>
            </div>
      </div>

      <div className="flex flex-col gap-4">

        <div className="tabs tabs-border relative w-full">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Today's Plan"
            checked={activeTab === "today"}
            onChange={() => setActiveTab("today")}
          />
          <div className="tab-content border-base-300 bg-base-100 p-3 sm:p-8 w-full">
            {sortedTodayPlan.length > 0 ? (
              sortedTodayPlan.map((workout: IWorkout, index: number) => (
                <TodayPlan key={workout.id || index} workout={workout} />
              ))
            ) : (
              <Empty></Empty>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Saved"
            checked={activeTab === "saved"}
            onChange={() => setActiveTab("saved")}
          />
          <div className="tab-content border-base-300 bg-base-100 p-3 sm:p-8 w-full">
            {sortedSavedWorkouts.length > 0 ? (
              sortedSavedWorkouts.map((workout: IWorkout, index: number) => (
                <Saved key={workout.id || index} workout={workout} />
              ))
            ) : (
              <Empty></Empty>
            )}
          </div>
          <div className="flex gap-2 sm:gap-4 items-center right-0 sm:right-5 absolute top-[-44px] sm:top-0">
            <h3 className="shrink-0 whitespace-nowrap text-xs sm:text-sm text-[#9CA3AF]">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select select-bordered select-xs sm:select-sm max-w-[120px] sm:max-w-xs"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
