

import "flatpickr/dist/flatpickr.min.css";
import { BasicPickr } from "./BasicPickr";
import { DateTimePicker } from "./DateTimePickr";
import { MultiplePickr } from "./MultiplePickr";
import { WeekNumbersPicker } from "./WeekNumbers";
import { RangeCalendarPickr } from "./RangeCalendarPickr";
import { HandlerPicker } from "./HandlerPickr";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

function FlatePickr() {
  
  return (
     <motion.div  {...usePageAnimation()} className="overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Basic
        </div>
          <div className="p-6">
                <BasicPickr/>
          </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          DateTime
        </div>
          <div className="p-6">
             <DateTimePicker/>
          </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Multiple
        </div>
          <div className="p-6">
         <MultiplePickr/>
          </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        weekNumbers
        </div>
          <div className="p-6">
           <WeekNumbersPicker/>
          </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
         rangeCalendar
        </div>
          <div className="p-6">
            <RangeCalendarPickr/>
          </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Handler
        </div>
          <div className="p-6">
             <HandlerPicker/>
          </div>
      </div>
    </div>

       <div className="rounded-lg shadow-md border border-gray-200 bg-white mt-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          <h3 className="font-bold text-[17px] text-darkgray">Uses Instruction</h3>
        </div>
        <div className="py-4 px-6 border-b border-gray-200">
          <p className=" text-sm text-lightgray">Quill is delivered primarily via npm.
          <span className="text-[#e83e8c] py-[3px] px-2 rounded bg-[#f1f2f3] text-sm w-max ms-2">
            npm install --save react-flatpickr
          </span>
          </p>
        </div>
          <div className="py-4 px-6">
             <p className=" text-sm text-lightgray">For full documentation please visit the link: <a href="https://github.com/haoxins/react-flatpickr"><strong>https://github.com/haoxins/react-flatpickr</strong></a></p>
          </div>
      </div>
    </motion.div>
  );
}

export default FlatePickr;
