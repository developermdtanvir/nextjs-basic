import { useState } from "react"

const Counter = () => {

  const [counter,setCounter] = useState(0)

    const incriment = () =>{
        setCounter(counter + 1)
    }

    const decriment = () =>{
        if(counter === 0) return
        setCounter(counter - 1)
    }

  return (
    <div class=" w-96 m-auto flex justify-center items-center h-40 bg-white rounded-md">
    <div >
    <p id="counter" class="text-center text-black  text-2xl font-bold">{counter}</p>
     <div class=" flex justify-center items-center space-x-3">
         <button onClick={incriment} id="incriment" class="py-2 px-4 bg-sky-400 rounded-md text-white font-semibold">Incriment</button>
         <button onClick={decriment} id="decriment" class="py-2 px-4 bg-rose-500 rounded-md text-white font-semibold">Decriment</button>
     </div>
    </div>
 </div>
  )
}

export default Counter