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
    <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center border rounded-[10px] border-[#9CA3AF] p-4 sm:p-5 mb-3 w-full">
      <div className="flex gap-4 items-center w-full sm:w-auto">
        <Image
          src={workout.image}
          alt={workout.name}
          width={100}
          height={100}
          className="h-20 w-20 sm:h-25 sm:w-25 rounded-lg object-cover shrink-0"
        />
        <div className="min-w-0 flex-1">
          <h1 className="font-bold text-lg sm:text-2xl">{workout.name}</h1>
          <p className="text-xs sm:text-sm text-[#9CA3AF]">{workout.equipment}</p>
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-[#9CA3AF]">
            <p>
              <FontAwesomeIcon icon={faClock} className="text-[#CCFF00]" />{" "}
              {workout.duration} min
            </p>
            <p>
              <FontAwesomeIcon icon={faFire} className="text-[#CCFF00]" />{" "}
              {workout.caloriesBurned} kcal
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} className="text-[#CCFF00]" />{" "}
              {workout.rating}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#2D313B]">
         <Link href={`/details/${workout.id}`} className="text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-[10px] inline-block border border-[#9CA3AF] hover:bg-[#9CA3AF] transition-colors">View Details</Link>
         <button
           disabled={workout.isDone}
           onClick={() => handleMark(workout.id)}
           className={`font-semibold text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full inline-flex items-center gap-1.5 transition-colors ${
             workout.isDone
               ? "bg-gray-600 text-gray-300 cursor-not-allowed opacity-60"
               : "bg-[#CCFF00] text-black hover:bg-[#CCFF00] cursor-pointer"
           }`}
         >
           <FontAwesomeIcon icon={faCheck} /> {workout.isDone ? "Done" : "Mark as Done"}
         </button>
         <button onClick={() => handleRemoveWorkout(workout.id)} className="p-2 text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"><FontAwesomeIcon icon={faX} /></button>
      </div>
    </div>
  );
};

export default TodayPlan;
