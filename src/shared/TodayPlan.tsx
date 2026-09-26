import React from "react";
import { IWorkout } from "@/type/type";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClock, faFire, faStar, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { TodaySaveContext } from "@/context/provider";
import { toast } from "react-toastify";

interface Iprops {
  workout: IWorkout & { isDone?: boolean };
}

const TodayPlan = ({ workout }: Iprops) => {

    const { todayplan, setTodayplan } = React.useContext(TodaySaveContext);

    const handleRemoveWorkout = (id: number) => {
        toast.success(`"${workout.name}" removed from today's plan!`);
        const updatedPlan = todayplan.filter((workout) => workout.id !== id);
        setTodayplan(updatedPlan);
    }

    const handleMark = (id: number) => {
        toast.success(`"${workout.name}" marked as done!`);
        const updatedPlan = todayplan.map((item) => {
            if (item.id === id) {
                return { ...item, isDone: true };
            }
            return item;
        });
        setTodayplan(updatedPlan);
    };

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
         <button
           disabled={workout.isDone}
           onClick={() => handleMark(workout.id)}
           className={`font-semibold px-4 py-2 rounded-full mt-2 inline-block ${
             workout.isDone
               ? "bg-gray-600 text-gray-300 cursor-not-allowed opacity-60"
               : "bg-[#CCFF00] text-black hover:bg-[#CCFF00] cursor-pointer"
           }`}
         >
           <FontAwesomeIcon icon={faCheck} /> {workout.isDone ? "Done" : "Mark as Done"}
         </button>
         <button onClick={() => handleRemoveWorkout(workout.id)}><FontAwesomeIcon icon={faX} /></button>

      </div>
    </div>
  );
};

export default TodayPlan;
