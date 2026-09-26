import React from "react";

const page = () => {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1>MY PLAN</h1>
        <p className="text-[#9CA3AF]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="flex justify-evenly content-left gap-8 mt-5 mb-5 bg-[#36383b] p-4 rounded-3xl">
        <div>
          <p>Exercise</p>
          <h1 className="text-bold text-3xl text-[#CCFF00]">2</h1>
        </div>
        <div className="border-l border-[#9CA3AF] pl-4">
          <p>Minutes</p>
          <h1 className="text-bold text-2xl">30</h1>
        </div>
        <div className="border-l border-[#9CA3AF] pl-4">
          <p>Calories</p>
          <h1 className="text-bold text-2xl">200</h1>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <div className="tabs tabs-box">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Today’s Plan"
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Saved"
            defaultChecked
          />

        </div>
        <div className="flex gap-5 text-center items-center">
          <h3>SortBy</h3>
          <select className="select select-bordered w-full max-w-xs">
            <option  selected>
              Duration
            </option>
            <option>Calories</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default page;
