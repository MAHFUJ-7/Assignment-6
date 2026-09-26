'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { IWorkout } from '@/type/type';
import { TodaySaveContext } from '@/context/provider';
import { toast } from 'react-toastify';

interface DetailsButtonProps {
  data: IWorkout;
}

const DetailsButton =  ({ data }: DetailsButtonProps) => {

  const {
    todayplan,
    setTodayplan,
    savedworkouts,
    setSavedworkouts,
  } = React.useContext(TodaySaveContext);
  const handleAddToPlan = () => {
    if(todayplan.some((workout) => workout.id === data.id)) {
      toast.error('Workout already added to today\'s plan!');
      return;
    }
    setTodayplan([...todayplan, data]);
    toast.success(' "$data.name" added to today\'s plan!')
  }

  const handleSaveForLater = () => {
    if(savedworkouts.some((workout) => workout.id === data.id)) {
      toast.error('Workout already saved for later!');
      return;
    }
    setSavedworkouts([...savedworkouts, data]);
    toast.success(' "$data.name" saved for later!')
  }

  return (
    
    <div className="flex gap-5 mt-5">
        <div className="bg-[#CCFF00] rounded-[10px] p-2 text-black font-semibold"> 
            <button className="flex gap-2 items-center hover:cursor-pointer" onClick={() => handleAddToPlan()}><FontAwesomeIcon icon={faCalendarPlus}  className="h-5 w-5" /> Add to today's plan</button>
        </div>
        <div className="border border-[#9CA3AF] rounded-[10px] p-2 text-[#9CA3AF] font-semibold">
            <button className="flex gap-2 items-center hover:cursor-pointer" onClick={() => handleSaveForLater()}><FontAwesomeIcon icon={faBookmark} className="h-5 w-5" />Save for later</button>
        </div>
        <div>
        </div>
    </div>
  )
}

export default DetailsButton