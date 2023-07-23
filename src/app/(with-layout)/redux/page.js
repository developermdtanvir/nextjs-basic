"use client"

import Counter from "@/components/Counter"
import Statistics from "@/components/Statistics"
import { useState } from "react"

const intialState = [
    {
        id:1,
        counter:0   
    },
    {
        id:2,
        counter:0   
    }
]

const Redux = () => {
    const [state,setState] = useState(intialState);

    console.log(state);

    const totalCount = () =>{
        return state.reduce((total,counter) =>total + counter.counter,0)
    }

    const incriment = (id) =>{
        const updateCounter = state.map((c) => {
            if(c.id === id){
                return {
                    ...c,
                    counter:c.counter + 1
                }
            }
            return {
                ...c
            }
        })
        setState(updateCounter)
    }

    const decriment = (id) =>{
        const updateCounter = state.map((c) => {
            if(c.id === id){
                return {
                    ...c,
                    counter:c.counter -1
                }
            }
            return {
                ...c
            }
        })
        setState(updateCounter)
    }
    
  return (
         <div className="py-20">
                <main class="flex flex-col justify-center items-center py-10 space-y-5 h-screen">
            <div>
                <h1 class=" text-3xl font-bold">Simple Counter Application</h1>
            </div>
            {
                state.map((counter) => <Counter counter={counter.counter} key={counter.id} id={counter.id} incriment={incriment} decriment={decriment} /> )
            }
            <Statistics counter={totalCount()} />
        </main>
         </div>

  )
}

export default Redux