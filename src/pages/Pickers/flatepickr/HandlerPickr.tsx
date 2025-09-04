import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export const HandlerPicker: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div>
      <h3 className="font-bold mb-2">Handler Example</h3>
      <Flatpickr
        value={date || undefined}
        options={{
          dateFormat: "Y-m-d",
        }}
        onChange={(dates) => setDate(dates[0] || null)}
        className="border rounded px-3 py-2 w-full"
      />
      {date && <p className="mt-2 text-teal-600">Picked: {date.toDateString()}</p>}
    </div>
  );
};

