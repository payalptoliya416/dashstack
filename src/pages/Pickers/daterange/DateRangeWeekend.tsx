import { useState } from "react";
import {
  DateRangePicker,
  createStaticRanges,
  defaultInputRanges,
} from "react-date-range";
import {
  addDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  subDays,
  subMonths,
} from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export const DateRangeWeekend = () => {
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // Weekend dots
  const customDayContent = (day: Date) => {
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
    return (
      <div className="relative w-7 h-7 flex items-center justify-center">
        <span>{day.getDate()}</span>
        {isWeekend && (
          <span className="absolute bottom-1 -right-2 top-0 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 opacity-70"></span>
        )}
      </div>
    );
  };

  // ✅ Only custom ranges
  const customRanges = [
    {
      label: "Today",
      range: () => ({
        startDate: new Date(),
        endDate: new Date(),
      }),
    },
    {
      label: "Yesterday",
      range: () => ({
        startDate: subDays(new Date(), 1),
        endDate: subDays(new Date(), 1),
      }),
    },
    {
      label: "This Week",
      range: () => ({
        startDate: startOfWeek(new Date(), { weekStartsOn: 1 }),
        endDate: endOfWeek(new Date(), { weekStartsOn: 1 }),
      }),
    },
    {
      label: "Last Week",
      range: () => {
        const start = startOfWeek(subDays(new Date(), 7), { weekStartsOn: 1 });
        const end = endOfWeek(subDays(new Date(), 7), { weekStartsOn: 1 });
        return { startDate: start, endDate: end };
      },
    },
    {
      label: "This Month",
      range: () => ({
        startDate: startOfMonth(new Date()),
        endDate: endOfMonth(new Date()),
      }),
    },
    {
      label: "Last Month",
      range: () => ({
        startDate: startOfMonth(subMonths(new Date(), 1)),
        endDate: endOfMonth(subMonths(new Date(), 1)),
      }),
    },
  ];

  const customStaticRanges = createStaticRanges(customRanges);

  return (
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
        dayContentRenderer={customDayContent}
        staticRanges={customStaticRanges} 
        inputRanges={defaultInputRanges}    
      />
  );
};
