const Statistics = ({ count }) => {
  return (
    <div class=" w-96 m-auto h-40 bg-white rounded-md flex justify-center items-center">
      <div>
        <p id="counter" class="text-center text-black  text-2xl font-bold">
          {count}
        </p>
      </div>
    </div>
  );
};

export default Statistics;
