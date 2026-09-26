import React from "react";
import { IWorkout } from "@/type/type";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faClock, faFire, faStar, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { TodaySaveContext } from "@/context/provider";
import { toast } from "react-toastify";

interface Iprops {
  workout: IWorkout;
}

const Saved = ({ workout }: Iprops) => {

    const { savedworkouts, setSavedworkouts } = React.useContext(TodaySaveContext);

    const handleRemoveWorkout = (id: number) => {
        toast.success(`"${workout.name}" removed from saved workouts!`);
        const updatedPlan = savedworkouts.filter((workout) => workout.id !== id);
        setSavedworkouts(updatedPlan);
    }

    

  return (
    <div className="flex justify-between gap-5 items-center border rounded-[10px] border-[#9CA3AF] p-5 mb-2">
      <div className="flex gap-5 items-center">
        <Image
          src={workout.image}
          alt={workout.name}
          width={100}
          height={100}
          className="h-25 w-25"
        />
        <div>
          <h1 className="text-bold text-2xl">{workout.name}</h1>
          <p>{workout.equipment}</p>
          <div className="flex gap-2 mt-2 text-[#9CA3AF]">
            <p>
              <FontAwesomeIcon icon={faClock} className="text-[#CCFF00]" />{" "}
              {workout.duration} minutes
            </p>
            <p>
              <FontAwesomeIcon icon={faFire} className="text-[#CCFF00]" />{" "}
              {workout.caloriesBurned} calories
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} className="text-[#CCFF00]" />{" "}
              {workout.rating}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-5">
         <Link href={`/details/${workout.id}`} className=" text-white font-semibold px-4 py-2 rounded-[10px] mt-2 inline-block border border-[#9CA3AF] hover:bg-[#9CA3AF]">View Details</Link>
         <button onClick={() => handleRemoveWorkout(workout.id)}><FontAwesomeIcon icon={faX} /></button>

      </div>
    </div>
  );
};

export default Saved;
