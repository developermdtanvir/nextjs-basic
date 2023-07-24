import { decrement, increment } from "@/redux/counter/actions";
import { connect } from "react-redux";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div class=" w-96 m-auto h-40 bg-white rounded-md flex justify-center items-center">
      <div>
        <p id="counter" class="text-center text-black  text-2xl font-bold">
          {count}
        </p>
        <div class=" flex justify-center items-center space-x-3">
          <button
            onClick={() => increment(10)}
            id="incriment"
            class="py-2 px-4 bg-sky-400 rounded-md text-white font-semibold"
          >
            Incriment
          </button>
          <button
            onClick={() => decrement(10)}
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

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // TODO: one props is my components send props
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
