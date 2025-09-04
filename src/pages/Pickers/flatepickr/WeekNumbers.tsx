import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export const WeekNumbersPicker: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div>
      <h3 className="font-bold mb-2">Week Numbers</h3>
      <Flatpickr
        value={date || undefined}
        options={{ weekNumbers: true, dateFormat: "Y-m-d" }}
        onChange={(dates) => setDate(dates[0] || null)}
        className="border rounded px-3 py-2 w-full"
      />
      {date && <p className="mt-2 text-orange-600">Selected: {date.toDateString()}</p>}
    </div>
  );
};
