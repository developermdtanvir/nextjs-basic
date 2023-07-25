import { decrement, increment } from "@/redux/dynamicCounter/actions";
import { useDispatch, useSelector } from "react-redux";

const DynamicHookCounter = ({}) => {
  const count = useSelector((state) => state.dynamicCounter.value);

  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className=" w-96 m-auto h-40 bg-white rounded-md flex justify-center items-center">
      <div>
        <p id="counter" className="text-center text-black  text-2xl font-bold">
          {count}
        </p>
        <div className=" flex justify-center items-center space-x-3">
          <button
            onClick={() => incrementHandler(10)}
            id="incriment"
            className="py-2 px-4 bg-sky-400 rounded-md text-white font-semibold"
          >
            Incriment
          </button>
          <button
            onClick={() => decrementHandler(5)}
            id="decriment"
            className="py-2 px-4 bg-rose-500 rounded-md text-white font-semibold"
          >
            Decriment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicHookCounter;
