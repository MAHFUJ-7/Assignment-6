"use client";
import React from "react";
import TodayPlan from "@/shared/TodayPlan";
import { IWorkout } from "@/type/type";
import { TodaySaveContext } from "@/context/provider";
import Empty from "@/shared/Empty";

const Page = () => {
  const { todayplan, savedworkouts } = React.useContext(TodaySaveContext);

  console.log(todayplan, "todayplan");
  console.log(savedworkouts, "savedworkouts");
  return (
    <div className="container mx-auto py-8 px-4">
      <div>
        <h1>MY PLAN</h1>
        <p className="text-[#9CA3AF]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        <div className="flex justify-evenly content-left gap-8 mt-5 mb-5 bg-[#36383b] p-4 rounded-3xl">
              <div>
                <p>Exercise</p>
                <h1 className="text-bold text-3xl text-[#CCFF00]">{todayplan.length}</h1>
              </div>
              <div className="border-l border-[#9CA3AF] pl-4">
                <p>Minutes</p>
                <h1 className="text-bold text-2xl">{todayplan.reduce((acc, workout) => acc + workout.duration, 0)}</h1>
              </div>
              <div className="border-l border-[#9CA3AF] pl-4">
                <p>Calories</p>
                <h1 className="text-bold text-2xl">{todayplan.reduce((acc, workout) => acc + workout.caloriesBurned, 0)}</h1>
              </div>
            </div>
      </div>

      <div className="flex justify-between gap-4">

        <div className="tabs tabs-border">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Today's Plan"
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            {todayplan.length > 0 ? (
              todayplan.map((workout: IWorkout, index: number) => (
                <TodayPlan key={index} workout={workout} />
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
            defaultChecked
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            {savedworkouts.length > 0 ? (
              savedworkouts.map((workout: IWorkout, index: number) => (
                <TodayPlan key={index} workout={workout} />
              ))
            ) : (
              <Empty></Empty>
            )}
          </div>
          <div className="flex gap-5 text-center items-center right-5 absolute">
            <h3 className="shrink-0 whitespace-nowrap">Sort By</h3>
            <select className="select select-bordered w-full max-w-xs">
              <option selected>Duration</option>
              <option>Calories</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
