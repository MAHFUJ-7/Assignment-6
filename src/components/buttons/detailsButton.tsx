"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { IWorkout } from '@/type/type';
import { TodaySaveContext } from '@/context/provider';
interface DetailsButtonProps {
  data: IWorkout;
}

const DetailsButton = ({ data }: DetailsButtonProps) => {

  const {
    todayplan,
    setTodayplan,
    savedworkouts,
    setSavedworkouts,
  } = React.useContext(TodaySaveContext);
  const handleAddToPlan = () => {
    setTodayplan([...todayplan, data]);
  }

  const handleSaveForLater = () => {
    setSavedworkouts([...savedworkouts, data]);
  }

  console.log(todayplan, "todayplan");
  console.log(savedworkouts, "savedworkouts");
  return (
    
    <div className="flex gap-5 mt-5">
        <div className="bg-[#CCFF00] rounded-[10px] p-2 text-black font-semibold"> 
            <button className="flex gap-2 items-center"><FontAwesomeIcon icon={faCalendarPlus}  className="h-5 w-5" onClick={() => handleAddToPlan()}/> Add to today's plan</button>
        </div>
        <div className="border border-[#9CA3AF] rounded-[10px] p-2 text-[#9CA3AF] font-semibold">
            <button className="flex gap-2 items-center"><FontAwesomeIcon icon={faBookmark} className="h-5 w-5" onClick={() => handleSaveForLater()}/>Save for later</button>
        </div>
        <div>
        </div>
    </div>
  )
}

export default DetailsButton