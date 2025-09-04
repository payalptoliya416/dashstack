import { DateRangeBasic } from "./DateRangeBasic";
import { DateRangeMultiple } from "./DateRangeMultiple";
import { MyDateRangePicker } from "./DateRangePicker";
import { DateRangeWeekend } from "./DateRangeWeekend";

function DateRange() {
  return (
    <>
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Basic
        </div>
        <div className="p-6">
          <DateRangeBasic />
        </div>
      </div>

      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          DateRangeMultiple
        </div>
        <div className="p-6">
          <DateRangeMultiple />
        </div>
      </div>

      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          DateRangePicker
        </div>
        <div className="p-6">
          <MyDateRangePicker />
        </div>
      </div>

      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          DateRangeWeekend
        </div>
        <div className="p-6">
          <DateRangeWeekend />
        </div>
      </div>

      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Uses Instruction
        </div>
        <div className="py-4 px-6 border-b border-gray-200">
          <p className="text-sm text-[#4b5675]">
            Quill is delivered primarily via npm.{" "}
            <span className="ms-1 text-[#e83e8c] py-[3px] px-2 rounded bg-[#f1f2f3] text-sm w-max">
              npm install react-icons --save
            </span>
          </p>
        </div>
        <div className="py-4 px-6">
          <p className="text-sm text-[#4b5675]">
            For full documentation please visit the link:{" "}
            <strong>https://hypeserver.github.io/react-date-range/</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default DateRange;
