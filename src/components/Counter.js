import Button from "./Button"

const Counter = ({id,incriment,decriment,counter}) => {



  return (
    <div class=" w-96 m-auto flex justify-center items-center h-40 bg-white rounded-md">
    <div >
    <p id="counter" class="text-center text-black  text-2xl font-bold">{counter}</p>
     <div class=" flex justify-center items-center space-x-3">
          <Button handler={()=>incriment(id)}>incriment</Button>
          <Button handler={()=>decriment(id)}>decriment</Button>
     </div>
    </div>
 </div>
  )
}

export default Counter