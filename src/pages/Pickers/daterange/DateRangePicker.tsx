import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";

export const MyDateRangePicker = () => {
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <DateRangePicker
      onChange={(item) => setState([item.selection])}
    //   showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
    />
  );
};
