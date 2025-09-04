import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export const MultiplePickr: React.FC = () => {
  const [dates, setDates] = useState<Date[]>([]);

  return (
    <div>
      <h3 className="font-bold mb-2">Multiple Dates</h3>
      <Flatpickr
        value={dates}
        options={{ mode: "multiple", dateFormat: "Y-m-d" }}
        onChange={(selected) => setDates(selected as Date[])}
        className="border rounded px-3 py-2 w-full"
      />
      {dates.length > 0 && (
        <p className="mt-2 text-purple-600">
          Selected: {dates.map((d) => d.toDateString()).join(", ")}
        </p>
      )}
    </div>
  );
};
