import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IWorkout } from "@/type/type";
import DetailsButton from "@/components/buttons/detailsButton";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getWorkout(id: string): Promise<IWorkout | null> {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!response.ok) {
    return null;
  }

  return response.json() as Promise<IWorkout>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const data = await getWorkout(id);

  if (!data) {
    notFound();
  }

  const stats: { label: string; value: string | number }[] = [
    { label: "EQUIPMENT", value: data.equipment },
    { label: "DIFFICULTY", value: data.difficulty },
    { label: "SETS", value: data.sets },
    { label: "REPS", value: data.reps },
    { label: "DURATION", value: data.duration },
    { label: "CALORIES", value: data.caloriesBurned },
    { label: "RATING", value: data.rating },
  ];

  return (
    <div className="container mx-auto bg-[#000000] p-5 flex flex-col lg:flex-row items-start gap-6">
      <div className="w-full lg:w-auto shrink-0">
        <Image
          src={data.image}
          alt={data.name}
          width={500}
          height={520}
          className="w-full lg:w-125 h-100 lg:h-130 object-cover rounded-[10px]"
        />
      </div>

      <div className="px-4 py-3 flex-1">
        <h1 className="text-white text-3xl font-bold mt-2">{data.name}</h1>
        <p className="text-[#9CA3AF]">{data.description}</p>

        <div className="flex gap-3 mt-3">
          {data.muscleGroups.map((group) => (
            <span
              key={group}
              className="bg-[#C2F800] px-2 py-1 text-black rounded-full text-sm font-bold"
            >
              {group}
            </span>
          ))}
        </div>

        <div className="bg-[#1E2330] rounded-[10px] p-4 mt-4 text-[#a4a6ab]">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex justify-between gap-5 py-3 ${
                index !== stats.length - 1 ? "border-b border-[#404047]" : ""
              }`}
            >
              <p>{stat.label}</p>
              <p>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="text-white mt-4">
          <h3 className="font-bold mb-2">INSTRUCTIONS</h3>
          <ol className="text-[#c0c5ce] list-decimal list-inside space-y-1">
            {data.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="mt-4">
          <DetailsButton data={data} />
        </div>
      </div>
    </div>
  );
};

export default Page;
