import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export const RangeCalendarPickr: React.FC = () => {
  const [range, setRange] = useState<Date[]>([]);

  return (
    <div>
      <h3 className="font-bold mb-2">Date Range</h3>
      <Flatpickr
        value={range}
        options={{ mode: "range", dateFormat: "Y-m-d" }}
        onChange={(selected) => setRange(selected as Date[])}
        className="border rounded px-3 py-2 w-full"
      />
      {range.length === 2 && (
        <p className="mt-2 text-red-600">
          From: {range[0].toDateString()} → To: {range[1].toDateString()}
        </p>
      )}
    </div>
  );
};
