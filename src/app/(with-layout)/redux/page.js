"use client"

import Counter from "@/components/Counter"


const Redux = () => {
    
  return (
         <div className="py-20">
                <main class="flex flex-col justify-center items-center py-10 space-y-5 h-screen">
            <div>
                <h1 class=" text-3xl font-bold">Simple Counter Application</h1>
            </div>
            <Counter />
            <Counter />
        </main>
         </div>

  )
}

export default Redux