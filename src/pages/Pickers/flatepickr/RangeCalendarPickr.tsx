import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export const RangeCalendarPickr: React.FC = () => {
  const [range, setRange] = useState<Date[]>([]);

  return (
    <div>
      <Flatpickr
        value={range}
        options={{ mode: "range", dateFormat: "Y-m-d" }}
        onChange={(selected) => setRange(selected as Date[])}
        className="border border-gray-100 rounded px-3 py-2 w-full text-sm"
         placeholder="Select date..."
      />
    </div>
  );
};
