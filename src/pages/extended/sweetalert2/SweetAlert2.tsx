import BasicAlert2 from "./BasicAlert2";
import Confirmation from "./Confirmation";
import CustomeMessage from "./CustomeMessage";
import Positioned from "./Positioned";
import TypeAlert from "./TypeAlert";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

function SweetAlert2() {
  return (
     <motion.div  {...usePageAnimation()} className="overflow-hidden">
      <div className="grid grid-cols-12 2xl:gap-7">
        <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7 2xl:mb-0">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Basic
          </div>
          <div className="p-6"><BasicAlert2/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7 2xl:mb-0">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Positioned
          </div>
          <div className="p-6"><Positioned/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7 2xl:mb-0">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Types
          </div>
          <div className="p-6"><TypeAlert/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7 2xl:mb-0">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Confirmation
          </div>
          <div className="p-6"><Confirmation/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Custom Message
          </div>
          <div className="p-6"><CustomeMessage/></div>
        </div>
      </div>
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mt-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          <h3 className="font-bold text-[17px] text-darkgray">Uses Instruction</h3>
        </div>
        <div className="py-4 px-6 border-b border-gray-200">
          <p className=" text-sm text-lightgray">SweetAlert2 is delivered primarily via npm.
          <span className="text-[#e83e8c] py-[3px] px-2 rounded bg-[#f1f2f3] text-sm w-max ms-2">
         npm install --save sweetalert2 sweetalert2-react-content
          </span>
          </p>
        </div>
          <div className="py-4 px-6">
             <p className=" text-sm text-lightgray">For full documentation please visit the link: <a href="https://github.com/sweetalert2/sweetalert2-react-content" className=" break-all"><strong className="underline">https://github.com/sweetalert2/sweetalert2-react-content</strong></a></p>
          </div>
      </div>
    </motion.div>
  );
}

export default SweetAlert2;
