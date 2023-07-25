import { decrement, increment } from "@/redux/counter/actions";
import { useDispatch, useSelector } from "react-redux";

const HookCounter = ({}) => {
  const count = useSelector((state) => state.value);

  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div class=" w-96 m-auto h-40 bg-white rounded-md flex justify-center items-center">
      <div>
        <p id="counter" class="text-center text-black  text-2xl font-bold">
          {count}
        </p>
        <div class=" flex justify-center items-center space-x-3">
          <button
            onClick={() => incrementHandler(10)}
            id="incriment"
            class="py-2 px-4 bg-sky-400 rounded-md text-white font-semibold"
          >
            Incriment
          </button>
          <button
            onClick={() => decrementHandler(10)}
            id="decriment"
            class="py-2 px-4 bg-rose-500 rounded-md text-white font-semibold"
          >
            Decriment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HookCounter;
