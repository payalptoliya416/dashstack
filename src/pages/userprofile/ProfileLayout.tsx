import { Link, Outlet } from "react-router-dom";
import ProfileTabs from "./ProfileTabs";
import { Toaster } from "react-hot-toast";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

export default function ProfileLayout() {
  return (
    <>
      <Toaster 
             position="top-center" 
             reverseOrder={false} 
             toastOptions={{
               duration: 3000,
               style: {
                 fontSize: '14px',
                 marginTop:'5px'
               },
             }}
           />
            <motion.div
      {...usePageAnimation()}
       className="w-full shadow rounded-lg bg-white p-[1px] overflow-hidden">
             <img src="/images/profile-bg.png" alt="" className="rounded-t-lg w-full" />
                 <div className="flex gap-5 sm:gap-2 items-end p-4 sm:p-6 -mt-8 sm:-mt-24 border-b border-gray-200">
                     <div className="shadow-sm rounded p-1 w-36 h-28 sm:h-36 bg-white">
                      <img src="/images/recent1.png" alt="" className="w-full h-full"/>
                     </div>
                     <div className="flex justify-between w-full flex-col sm:flex-row gap-4">
                           <div>
                               <h3 className="text-[#202224] text-base font-bold mb-1">Alexndra Della <BadgeCheck className="text-[#25b865] inline-block ms-1" size={12}/></h3>
                             <p className="text-[#202224]/80% text-sm">California, United States</p>
                           </div>
                           <div className="flex gap-1 items-center">
                             <Link to='/account-setting/account' className="bg-[#3e97ff] rounded text-white py-1 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm">Edit Profile</Link>
                             <button className="bg-[#25B865] rounded text-white py-1 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm">Message</button>
                           </div>
                     </div>
                 </div>
                 <div className="grid grid-cols-12">
                 <div className="w-full overflow-x-auto col-span-12">
                      <div className="py-4 px-6 flex gap-1 flex-nowrap ">
                        <ProfileTabs />
                      </div>
                 </div>
                 </div>
           </motion.div>  

      {/* Tab content */}
      <div className="mt-6">
        <Outlet />
      </div>
    </>
  );
}
