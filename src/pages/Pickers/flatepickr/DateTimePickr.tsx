import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export const DateTimePicker: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div>
      <h3 className="font-bold mb-2">Date & Time Picker</h3>
      <Flatpickr
        value={date || undefined}
        options={{ enableTime: true, dateFormat: "Y-m-d H:i" }}
        onChange={(dates) => setDate(dates[0] || null)}
        className="border rounded px-3 py-2 w-full"
      />
      {date && <p className="mt-2 text-blue-600">Selected: {date.toLocaleString()}</p>}
    </div>
  );
};
