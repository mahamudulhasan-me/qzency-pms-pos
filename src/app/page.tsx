"use client";

import { enablePOSystem } from "@/redux/features/enablePOSystem";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";

export default function Home() {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const handleEnablePOSystem = () => {
    dispatch(enablePOSystem());
    navigate.push("/products");
  };
  return (
    <div className="w-4/5 mx-auto h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="w-full h-[80vh] bg-white rounded-3xl border shadow-[0px_2px_4px_0px_rgba(45,54,67,0.08)] flex justify-center items-center">
        <div className="p-5 border shadow-md rounded-md">
          <button
            onClick={handleEnablePOSystem}
            className="bg-primary text-white py-2 px-10 rounded-lg font-semibold "
          >
            Enter POS System
          </button>
        </div>
      </div>
    </div>
  );
}
