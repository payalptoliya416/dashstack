import { X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import PlacementToast from "./PlacementToast";
import UIOptionTable from "../UIOptionTable";
import { ToastData } from "./ToastData";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

function UIToasts() {
  const handleLIve = ()=>{
    toast.success(
      <div className="flex items-center gap-2">Thanks for your feedback!</div>
    );
  }
  return (
    <>
    <motion.div
                  {...usePageAnimation()}
                  className="overflow-hidden">
     <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "14px",
            marginTop: "5px",
            zIndex: "999",
          },
        }}
      />
      <div className="rounded-lg shadow border border-gray-200 bg-[#F8F9FA] mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Basic
        </div>
        <div className="p-6">
          <div className="bg-white max-w-[348px] rounded shadow-sm">
             <div className="p-4 flex justify-between items-center border-b border-gray-100 gap-5 sm:gap-2">
                  <div className="flex gap-3 sm:gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-darkgray">Toast Notification</h3>
                  </div>
                  <div className="flex gap-3 sm:gap-5 items-center">
                    <p className="text-[#7B7177] text-xs">11 mins ago</p>
                    <X className="text-[#6c757d]/40"/>
                  </div>
             </div>
             <div className="p-4 text-sm text-lightgray">
              Hello, world! This is a toast message.
             </div>
          </div>
        </div>
      </div>
      
      <div className="rounded-lg shadow border border-gray-200 bg-[#F8F9FA] mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Live
        </div>
        <div className="p-6">
         <button className="py-2 px-5 rounded bg-blue-text text-white text-sm" onClick={handleLIve}>Show Live Toast</button>
        </div>
      </div>

      <div className="rounded-lg shadow border border-gray-200 bg-[#F8F9FA] mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Stacking
        </div>
        <div className="p-6">
          <div className="bg-white max-w-[348px] rounded shadow-sm mb-4 md:mb-7">
             <div className="p-4 flex justify-between items-center border-b border-gray-100 gap-5 sm:gap-2">
                  <div className="flex gap-3 sm:gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-darkgray">Toast Notification</h3>
                  </div>
                  <div className="flex gap-3 sm:gap-5 items-center">
                    <p className="text-[#7B7177] text-xs">just now</p>
                    <X className="text-[#6c757d]/40"/>
                  </div>
             </div>
             <div className="p-4 text-sm text-lightgray">
           See? Just like this.
             </div>
          </div>
          <div className="bg-white max-w-[348px] rounded shadow-sm">
             <div className="p-4 flex justify-between items-center border-b border-gray-100 gap-5 sm:gap-2">
                  <div className="flex gap-3 sm:gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-darkgray">Toast Notification</h3>
                  </div>
                  <div className="flex gap-3 sm:gap-5 items-center">
                    <p className="text-[#7B7177] text-xs">2 seconds ago</p>
                    <X className="text-[#6c757d]/40"/>
                  </div>
             </div>
             <div className="p-4 text-sm text-lightgray">
             Heads up, toasts will stack automatically
             </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow border border-gray-200 bg-[#F8F9FA] mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          solidColor
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-blue-text max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-white">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
          <div className="bg-[#505863] max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-white">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
          <div className="bg-[#25b865] max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-white">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
          <div className="bg-[#02a0e4] max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-white">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
          <div className="bg-[#e49e3d] max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-white">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
          <div className="bg-[#d13b4c] max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-white">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow border border-gray-200 bg-[#F8F9FA] mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          softColor
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-[#ecf5ff] max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-blue-text">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
          <div className="bg-[#f1f2f3] max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-[#505863]">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
          <div className="bg-[#e9f8f0] max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-[#25b865]">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
          <div className="bg-[#e6f6fc] max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-[#02a0e4]">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
          <div className="bg-[#fcf3e8] max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-[#e49e3d]">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
          <div className="bg-[#fbeff1] max-w-[348px] rounded shadow-sm mb-0 md:mb-4">
             <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src="/images/bell.svg" alt="" />
                    <h3 className="font-bold text-[#d13b4c]">Toast Notification</h3>
                  </div>
                   <X className="text-[#6c757d]/40"/>
             </div>
          </div>
        </div>
      </div>

         <div className="rounded-lg shadow border border-gray-200 bg-[#F8F9FA] mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
         Placement
        </div>
      <PlacementToast/>
        </div>

           <UIOptionTable title="Options" options={ToastData} />
           </motion.div>
    </>
  );
}

export default UIToasts;
