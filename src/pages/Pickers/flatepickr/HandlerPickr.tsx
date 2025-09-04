import React, { useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
import type { Instance as FlatpickrInstance } from "flatpickr/dist/types/instance";
import "flatpickr/dist/flatpickr.min.css";
import { CalendarClock, CircleX } from "lucide-react";

export const HandlerPicker: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const pickerRef = useRef<FlatpickrInstance | null>(null);

  const clearDate = () => {
    setDate(null);
    pickerRef.current?.clear();
  };

  return (
    <div className="flex relative">
      <div className="py-2 px-3 border border-gray-100 border-r-0 rounded-l">
        <CalendarClock className="text-[#4b5675]" size={18} />
      </div>
      <Flatpickr
        ref={(node) => {
          pickerRef.current = (node as any)?.flatpickr ?? null;
        }}
        value={date || undefined}
        options={{
          enableTime: true,
          dateFormat: "Y-m-d H:i",
        }}
        onChange={(selectedDates) => setDate(selectedDates[0] || null)}
        className="border border-gray-100 rounded-none px-3 py-2 w-full text-sm focus:outline-none"
        placeholder="Select date..."
      />
      <button
        type="button"
        onClick={clearDate}
        disabled={!date}
        className={`py-2 px-3 border border-gray-100 border-l-0 rounded-r ${
          date
            ? "cursor-pointer hover:text-red-500"
            : "text-gray-300 cursor-not-allowed"
        }`}
        aria-label="Clear date"
      >
        <CircleX
          className={date ? "text-[#4b5675]" : "text-gray-300"}
          size={16}
        />
      </button>
    </div>
  );
};
