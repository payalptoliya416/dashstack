
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { BasicPickr } from "./BasicPickr";
import { DateTimePicker } from "./DateTimePickr";
import { MultiplePickr } from "./MultiplePickr";
import { WeekNumbersPicker } from "./WeekNumbers";
import { RangeCalendarPickr } from "./RangeCalendarPickr";
import { HandlerPicker } from "./HandlerPickr";

function FlatePickr() {
  
  return (
    <>
    <div className="grid grid-cols-2 gap-7">
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Basic
        </div>
          <div className="p-6">
                <BasicPickr/>
          </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          DateTime
        </div>
          <div className="p-6">
             <DateTimePicker/>
          </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Multiple
        </div>
          <div className="p-6">
         <MultiplePickr/>
          </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        weekNumbers
        </div>
          <div className="p-6">
           <WeekNumbersPicker/>
          </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
         rangeCalendar
        </div>
          <div className="p-6">
            <RangeCalendarPickr/>
          </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Handler
        </div>
          <div className="p-6">
             <HandlerPicker/>
          </div>
      </div>
    </div>
    </>
  );
}

export default FlatePickr;
