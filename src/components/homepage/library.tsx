import React from 'react'
import { allData } from '@/lib/alldata'
import { IWorkout } from '@/type/type'
import Card from '@/shared/card'
export default async function library() {
    const data = await allData();
  return (
    <div className="container mx-auto mt-3">
      <div>
        <h1 className="text-white text-3xl font-bold">THE LIBRARY</h1>
        <p className="text-[#9CA3AF] ">Twelve lifts covering every major muscle group.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 ">
            {
                data.map((prop: IWorkout, index: number) => {
                    return <Card props={prop} key={index} />
                })
            }
      </div>
    </div>
  )
}
