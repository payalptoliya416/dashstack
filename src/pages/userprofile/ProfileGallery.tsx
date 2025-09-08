

import { Fragment, useState } from "react";
import { albums } from "./UserProfileData";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

function ProfileGallery() {

   const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  };

  return (
   <>
    <motion.div
         {...usePageAnimation()}
         className="overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
           {albums.map((album) => (
               <div key={album.id} className="shadow-sm rounded-lg bg-white">
               {/* Header */}
               <div className="flex justify-between items-center border-b border-gray-100 p-6">
                   <button className="py-[5px] px-[7px] rounded-full text-[17px] font-bold">
                   {album.title}
                   </button>
                   <Menu as="div" className="relative inline-block text-left">
                   <Menu.Button>
                       <h3 className="text-[#252f4A] text-xs py-[6px] px-[10px] border border-gray-100 rounded-full bg-[#F8F9FA]">
                       Action <ChevronDown size={10} className="inline-block" />
                       </h3>
                   </Menu.Button>
                   <Transition
                       as={Fragment}
                       enter="transition ease-out duration-150"
                       enterFrom="opacity-0 scale-95 -translate-y-1"
                       enterTo="opacity-100 scale-100 translate-y-0"
                       leave="transition ease-in duration-100"
                       leaveFrom="opacity-100 scale-100 translate-y-0"
                       leaveTo="opacity-0 scale-95 -translate-y-1"
                   >
                       <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg focus:outline-none z-10">
                       <ul className="p-[10px] border-b border-gray-200">
                           {["Invite", "Rename", "View Details", "Add to Favorite"].map(
                           (item, i) => (
                               <li
                               key={i}
                               className="py-[10px] px-4 mb-1 text-sm cursor-pointer hover:bg-gray-50 text-[#252F4A]"
                               >
                               {item}
                               </li>
                           )
                           )}
                       </ul>
                       <div className="px-[10px] py-2">
                           <div className="flex items-center gap-2 px-4 py-[10px] cursor-pointer hover:bg-gray-50">
                           <h3 className="text-sm mb-0 text-[#D14B3C]">Delete</h3>
                           </div>
                       </div>
                       </div>
                   </Transition>
                   </Menu>
               </div>
   
               {/* Images */}
               <div className="p-6 border-b border-gray-100 grid grid-cols-3 gap-2">
                   {album.images.map((img, i) => (
                   <img key={i} src={img} alt="" className="w-full h-[83px]" />
                   ))}
               </div>
   
               {/* Footer */}
               <div className="p-6 flex items-center text-[#6b7177] text-13 gap-2">
                   {album.photoCount} Photos{" "}
                   <span className="inline-block w-1 h-1 rounded-full bg-[#6b7177]"></span>{" "}
                   {album.date}
               </div>
               </div>
           ))}
           </div> 
           <div className="flex justify-center">
               <button
                   onClick={handleClick}
                   disabled={loading}
                   className="py-[10px] px-5 bg-white rounded-full text-sm text-[#252F4A] my-7 flex items-center gap-2 border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
               >
                   {loading ? (
                   <>
                   <span className="w-3 h-3 border-2 border-t-transparent rounded-full animate-spin mr-1"></span>
                       Loading...
                   </>
                   ) : (
                   "Load more..."
                   )}
               </button>
           </div> 
    </motion.div>
    </>
  )
}

export default ProfileGallery
