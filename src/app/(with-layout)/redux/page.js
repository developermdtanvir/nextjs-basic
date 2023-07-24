"use client";
import Counter from "@/components/Counter";

const Redux = () => {
  return (
    <main class="flex h-screen flex-col justify-center items-center py-10 space-y-5">
      <div>
        <h1 class=" text-3xl font-bold">Simple Counter Application</h1>
      </div>
      <Counter />
    </main>
  );
};

export default Redux;
