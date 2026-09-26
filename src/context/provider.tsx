"use client";
import React, { createContext, useState } from "react";
import { IWorkout } from "@/type/type";

interface ProviderContextType {
  todayplan: IWorkout[];
  setTodayplan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  savedworkouts: IWorkout[];
  setSavedworkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const TodaySaveContext = createContext<ProviderContextType>({
  todayplan: [],
  setTodayplan: () => {},
  savedworkouts: [],
  setSavedworkouts: () => {},
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [todayplan, setTodayplan] = useState<IWorkout[]>([]);
  const [savedworkouts, setSavedworkouts] = useState<IWorkout[]>([]);

  return (
    <TodaySaveContext.Provider
      value={{ todayplan, setTodayplan, savedworkouts, setSavedworkouts }}
    >
      {children}
    </TodaySaveContext.Provider>
  );
};

export default Provider;