"use client";
import DynamicHookCounter from "@/components/DynamicHokCounter";
import HookCounter from "@/components/HookCounter";

const Redux = () => {
  return (
    <main className="flex h-screen flex-col justify-center items-center py-10 space-y-5">
      <div>
        <h1 className=" text-3xl font-bold">Simple Counter Application</h1>
      </div>
      <HookCounter />
      <DynamicHookCounter />
    </main>
  );
};

export default Redux;
