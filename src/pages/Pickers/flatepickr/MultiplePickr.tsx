import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export const MultiplePickr: React.FC = () => {
  const [dates, setDates] = useState<Date[]>([]);

  return (
    <div>
      <Flatpickr
        value={dates}
        options={{ mode: "multiple", dateFormat: "Y-m-d" }}
        onChange={(selected) => setDates(selected as Date[])}
        className="border border-gray-100 rounded px-3 py-2 w-full text-sm"
         placeholder="Select date..."
      />
    </div>
  );
};
