
import Grouped from './Grouped';
import Multiple from './Multiple';
import Animation from './Animation';
import SingleStyle from './SingleStyle';
import MultiSelect from './MultiSelect';
import Creatable from './Creatable';
import FixedOption from './FixedOption';
import CustomSingle from './CustomSingle';
import Single from './Single';
import CustomeMultiple from './CustomeMultiple';
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

function Select2() {

  return (
      <motion.div  {...usePageAnimation()} className="overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
            Single
          </div>
          <div className="p-6"><Single/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
            Grouped
          </div>
          <div className="p-6"><Grouped/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
            Multiple
          </div>
          <div className="p-6"><Multiple/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
            Animation
          </div>
          <div className="p-6"><Animation/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
            Single Style
          </div>
          <div className="p-6"><SingleStyle/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
         Multiple Style
          </div>
          <div className="p-6"><MultiSelect/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
            Creatable
          </div>
          <div className="p-6"><Creatable/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Fixed Options
          </div>
          <div className="p-6"><FixedOption/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Custom Single
          </div>
          <div className="p-6"><CustomSingle/></div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
         Custom Multiple
          </div>
          <div className="p-6"><CustomeMultiple/></div>
        </div>
      </div>
       <div className="rounded-lg shadow-md border border-gray-200 bg-white mt-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          <h3 className="font-bold text-[17px] text-darkgray">Uses Instruction</h3>
        </div>
        <div className="py-4 px-6 border-b border-gray-200">
          <p className=" text-sm text-lightgray">Quill is delivered primarily via npm.
          <span className="text-[#e83e8c] py-[3px] px-2 rounded bg-[#f1f2f3] text-sm w-max ms-2">
          npm install jsvectormap
          </span>
          </p>
        </div>
          <div className="py-4 px-6">
             <p className=" text-sm text-lightgray">For full documentation please visit the link: <a href="https://jvm-docs.vercel.app/docs/introduction"><strong className="underline">https://jvm-docs.vercel.app/docs/introduction</strong></a></p>
          </div>
      </div>
    </motion.div>
  );
}

export default Select2;
