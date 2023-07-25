import { decrement, increment } from "@/redux/counter/actions";
import { connect } from "react-redux";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className=" w-96 m-auto h-40 bg-white rounded-md flex justify-center items-center">
      <div>
        <p id="counter" className="text-center text-black  text-2xl font-bold">
          {count}
        </p>
        <div className=" flex justify-center items-center space-x-3">
          <button
            onClick={() => increment(10)}
            id="incriment"
            className="py-2 px-4 bg-sky-400 rounded-md text-white font-semibold"
          >
            Incriment
          </button>
          <button
            onClick={() => decrement(10)}
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

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
