
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";

export const DateRangeBasic = () => {
  const [range, setRange] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setRange([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={range}
      rangeColors={["#3B82F6"]}
      months={1}
      direction="horizontal"
    />
  );
};

