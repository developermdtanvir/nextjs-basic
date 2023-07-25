const Statistics = ({ count }) => {
  return (
    <div className=" w-96 m-auto h-40 bg-white rounded-md flex justify-center items-center">
      <div>
        <p id="counter" className="text-center text-black  text-2xl font-bold">
          {count}
        </p>
      </div>
    </div>
  );
};

export default Statistics;
