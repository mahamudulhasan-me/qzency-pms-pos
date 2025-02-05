"use client";
import { disablePOSystem } from "@/redux/features/enablePOSystem";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const ExitPOS = () => {
  const navigate = useRouter();
  const enablePOSystem = useAppSelector(
    (state) => state.enablePOSystem.isEnabled
  );
  const dispatch = useAppDispatch();
  const handleDisablePOSystem = () => {
    navigate.push("/");
    dispatch(disablePOSystem());
  };
  return (
    <button
      onClick={handleDisablePOSystem}
      className={`${
        enablePOSystem ? "flex items-center gap-x-2 text-slate-500" : "hidden"
      } `}
    >
      <div className="size-9 border border-border rounded-md flex items-center justify-center">
        <LogOut size={20} className="rotate-180" color="#F36960" />
      </div>{" "}
      <span className="font-semibold">Exit Pos</span>
    </button>
  );
};

export default ExitPOS;
