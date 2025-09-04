import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export const DateTimePicker: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div>
      <Flatpickr
        value={date || undefined}
        options={{ enableTime: true, dateFormat: "Y-m-d H:i" }}
        onChange={(dates) => setDate(dates[0] || null)}
        className="border border-gray-100 rounded px-3 py-2 w-full text-sm"
         placeholder="Select date..."
      />
    </div>
  );
};
