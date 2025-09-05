import { SquareArrowOutUpRight, UserCog } from "lucide-react";
import AccountTab from "./AccountTab";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

function AccountLayout() {
  return (
    <>
      <motion.div {...usePageAnimation()}  className="shadow-sm rounded bg-white overflow-hidden">
        <div className="flex justify-center md:justify-between flex-col md:flex-row gap-8 items-center border-b border-gray-100 py-8 px-6">
          <div className="flex gap-4 sm:gap-5 items-center flex-wrap">
            <div className="w-16 sm:w-[73px] h-16 sm:h-[73px] rounded-full border-4 border-[#3e97ff] flex justify-center items-center"> <UserCog className="text-[#3e97ff] " size={30}/> </div>
            <div>
              <h3 className="text-base sm:text-[21px] font-bold text-[#252F4A] mb-1 sm:mb-2">
                Account Settings
              </h3>
              <p className="text-[]6B7177] text-sm sm:max-w-64">
                Set your pictures, name, bio, and others public-facing
                information.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <h3 className="text-[#D13B4C] text-sm">Reset</h3>
            <button className="py-2 px-5 rounded text-[#252F4A] flex gap-3 items-center text-sm bg-[#f1f2f3]">
              Finish Now
              <SquareArrowOutUpRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="w-full overflow-x-auto col-span-12">
            <div className="py-4 px-6 flex gap-1 flex-nowrap ">
              <AccountTab />
            </div>
          </div>
        </div>
      </motion.div>
       <div className="mt-6">
        <Outlet />
      </div>
    </>
  );
}

export default AccountLayout;
