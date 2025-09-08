import { useState } from "react";

type Position =
  | "top-start"
  | "top-center"
  | "top-end"
  | "middle-start"
  | "middle-center"
  | "middle-end"
  | "bottom-start"
  | "bottom-center"
  | "bottom-end";

export default function PlacementToast() {
  const [position, setPosition] = useState<Position>("top-start");

  const positionClasses: Record<Position, string> = {
    "top-start": "top-4 left-1 sm:left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-end": "top-4 right-1 sm:right-4",

    "middle-start": "top-1/2 left-1 sm:left-4 -translate-y-1/2",
    "middle-center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "middle-end": "top-1/2 right-1 sm:right-4 -translate-y-1/2",

    "bottom-start": "bottom-4 left-1 sm:left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-end": "bottom-4 right-1 sm:right-4",
  };

  return (
    <div className="p-6">
      <label className="text-[#4b5675] text-sm block mb-2">Toast position</label>
      <select
        value={position}
        onChange={(e) => setPosition(e.target.value as Position)}
        className="w-full border border-gray-100 rounded text-sm text-[#4b5675] py-2 px-3 mb-4"
      >
        <option value="top-start">top-start</option>
        <option value="top-center">top-center</option>
        <option value="top-end">top-end</option>
        <option value="middle-start">middle-start</option>
        <option value="middle-center">middle-center</option>
        <option value="middle-end">middle-end</option>
        <option value="bottom-start">bottom-start</option>
        <option value="bottom-center">bottom-center</option>
        <option value="bottom-end">bottom-end</option>
      </select>

      <div className="w-full h-full min-h-[350px] bg-[#eef0f3] relative p-5 overflow-hidden">
        <div
          className={`absolute ${positionClasses[position]} bg-white w-full max-w-[260px] sm:max-w-[348px] rounded shadow-sm`}
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-100 gap-5 sm:gap-2">
            <div className="flex gap-3 sm:gap-5 items-center">
              <img src="/images/bell.svg" alt="" />
              <h3 className="font-bold text-darkgray">Toast Notification</h3>
            </div>
            <div className="flex gap-3 sm:gap-5 items-center">
              <p className="text-[#7B7177] text-xs">11 mins ago</p>
            </div>
          </div>
          <div className="p-4 text-sm text-lightgray">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </div>
  );
}
