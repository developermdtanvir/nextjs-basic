"use client";
import HookCounter from "@/components/HookCounter";

const Redux = () => {
  return (
    <main class="flex h-screen flex-col justify-center items-center py-10 space-y-5">
      <div>
        <h1 class=" text-3xl font-bold">Simple Counter Application</h1>
      </div>
      <HookCounter />
    </main>
  );
};

export default Redux;
