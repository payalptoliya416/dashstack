import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";

export const DateRangeMultiple = () => {
  const [ranges, setRanges] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection1",
    },
    {
      startDate: addDays(new Date(), 8),
      endDate: addDays(new Date(), 13),
      key: "selection2",
    },
    {
      startDate: addDays(new Date(), 14),
      endDate: addDays(new Date(), 18),
      key: "selection3",
    },
  ]);

  return (
      <DateRange
        onChange={(item: any) => {
          const updated = ranges.map((range: any) =>
            item[range.key] ? item[range.key] : range
          );
          setRanges(updated);
        }}
        moveRangeOnFirstSelection={false}
        ranges={ranges}
        months={1} 
        direction="horizontal"
        editableDateInputs={true}
      />
  );
};
