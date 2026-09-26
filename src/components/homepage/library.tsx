import React from 'react'
import { allData } from '@/lib/alldata'
import { IWorkout } from '@/type/type'
import Card from '@/shared/card'
export default async function library() {
    const data = await allData();
  return (
    <div id="library" className="container mx-auto px-4 py-8">
      <div>
        <h1 className="text-white text-3xl font-bold">THE LIBRARY</h1>
        <p className="text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-6">
            {
                data.map((prop: IWorkout, index: number) => {
                    return <Card props={prop} key={index} />
                })
            }
      </div>
      {data.length === 0 && (
        <div className="text-center text-[#9CA3AF] py-8">
          <p>No workout data available at the moment.</p>
        </div>
      )}
    </div>
  )
}
