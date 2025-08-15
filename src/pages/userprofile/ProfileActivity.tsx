
import {  Brush, Camera,FileArchive, MapPin, Plus, SquareUserRound, Tag, Video } from "lucide-react"
import { useState } from "react";
function ProfileActivity() {

  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const handleLoadMore = (): void => {
    setLoadingMore(true);

    setTimeout(() => {
      setLoadingMore(false);
    }, 2000);
  };

  return (
     <div>
             <div className="shadow-sm rounded-lg p-6 bg-white mb-6 relative after:absolute after:w-[1px] after:h-full after:bg-gray-100 after:content-[''] after:top-0 after:left-11.5 z-10 after:-z-10">
             <div className="flex items-start gap-3 mb-2 py-4">
                 <div>
                              <div className="w-[47px] h-[47px] bg-white roudned-full flex items-center justify-center border border-gray-100 rounded-full ">
                                <Video className="text-[#02a0e4]" size={16} />
                              </div>
                 </div>
                 <div>
                              <h2 className="text-sm text-[#252F4A] font-semibold uppercase">
                               MEETING WITH CLIENT
                              </h2>
                              <p className="text-[#4B5675] text-sm mb-4">
                               Meeting with USA Client, today at 12:00 PM
                              </p>
                              <div className="flex gap-1 items-center">
                                <button className="text-[11px] leading-[11px] bg-[#fbeff1] text-[#d13b4c] py-[5px] px-[7px] rounded">
                                  React
                                </button>
                                <button className="text-[11px] leading-[11px] bg-[#e9f8f0] text-[#25b865] py-[5px] px-[7px] rounded">
                                  Typescript
                                </button>
                                <button className="text-[11px] leading-[11px] bg-[#fcf3e8] text-[#e49e3d] py-[5px] px-[7px] rounded">
                                  Admin
                                </button>
                                <button className="text-[11px] leading-[11px] bg-[#ecf5ff] text-[#3e97ff] py-[5px] px-[7px] rounded">
                                  Dashboard
                                </button>
                              </div>
                 </div>
             </div>
             <div className="flex items-start gap-3 mb-2 py-4">
                 <div>
                    <div className="w-[47px] h-[47px] bg-white roudned-full flex items-center justify-center border border-gray-100 rounded-full ">  <Video className="text-[#e49e3d]" size={16} /> </div>
                 </div>
                 <div>
                    <h2 className="text-sm text-[#252F4A] font-semibold">
                               Another meeting with UK client today, at <span className="text-[#d13b4c] font-bold">3:00 PM</span>
                    </h2>
                    <p className="text-[#4B5675] text-sm mb-4">
                              Yet another one, at <span className="text-[#25b865]"> 5:00 PM</span>
                    </p>
                    <div className="flex gap-3 flex-wrap">
                               <div className="flex border border-gray-200 rounded py-4 px-6 gap-3 items-center">
                                 <FileArchive className="text-[#3e97ff]" size={24}/>
                                 <div>
                                    <h3 className="text-[#252F4A] text-sm mb-1">Dashboard UiKit</h3>
                                    <p className="text-[#6B7177] text-xs">34.75 MB</p>
                                 </div>
                               </div>
                               <div className="flex border border-gray-200 rounded py-4 px-6 gap-3 items-center">
                                 <FileArchive className="text-[#3e97ff]" size={24}/>
                                 <div>
                                    <h3 className="text-[#252F4A] text-sm mb-1">Discussion Platform</h3>
                                    <p className="text-[#6B7177] text-xs">23.48 MB</p>
                                 </div>
                               </div>
                    </div>
                 </div>
             </div>
             <div className="flex items-start gap-3 mb-2 py-4">
                 <div>
                    <div className="w-[47px] h-[47px] bg-white roudned-full flex items-center justify-center border border-gray-100 rounded-full "><Tag className="text-[#02a0e4]" size={16} /></div>
                 </div>
                  <div>
                    <h2 className="text-sm text-[#252F4A] font-semibold">
                          <span className="text-[#3e97ff]">Alexandra Della</span> posted a status update
                    </h2>
                    <p className="text-[#4B5675] text-sm mb-4">
                          Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise.
                    </p>
                 </div>
             </div>
             <div className="flex items-start gap-3 mb-2 py-4">
                 <div>
                    <div className="w-[47px] h-[47px] bg-white roudned-full flex items-center justify-center border border-gray-100 rounded-full "> <Brush className="text-[#d13b4c]" size={16} /> </div>
                 </div>
                  <div>
                    <h2 className="text-sm text-[#252F4A] font-semibold">
                        DISCUSSION WITH TEAM ABOUT NEW PRODUCT LAUNCH
                    </h2>
                    <p className="text-[#4B5675] text-sm mb-4">
                          Yet another one, at<span className="text-[#25b865]"> 1:00 PM</span>
                    </p>
                 </div>
             </div>
             <div className="flex items-start gap-3 mb-2 py-4">
                 <div>
                    <div className="w-[47px] h-[47px] bg-white roudned-full flex items-center justify-center border border-gray-100 rounded-full "> <MapPin className="text-[#4b5675]" size={16} /> </div>
                 </div>
                  <div>
                    <h2 className="text-sm text-[#252F4A] font-semibold">
                      Arlind Nushi checked in at <span className="text-[#02a0e4]">New York</span>
                    </h2>
                    <p className="text-[#4B5675] text-[17px] mb-4">
                       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." 
                       - Isabella
                    </p>
                    <p className="text-sm text-[#4b5675]">Discussion with marketing team about the popularity of last product</p>
                 </div>
             </div>
              <div className="flex items-start gap-3 mb-2 py-4">
                 <div>
                    <div className="w-[47px] h-[47px] bg-white roudned-full flex items-center justify-center border border-gray-100 rounded-full "><Camera className="text-[#e49e3d]" size={16} /></div>
                 </div>
                  <div>
                    <h2 className="text-sm text-[#252F4A] font-semibold">
                         Eroll Maxhuni uploaded 4 new photos to album <span className="text-[#e49e3d]"> Summer Trip</span>
                    </h2>
                    <p className="text-[#4B5675] text-sm mb-4">
                          Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise.
                    </p>
                    <button className="py-2 px-5 rounded border border-gray-100 bg-[#f1f2f3] text-[#252F4A] text-sm"><Plus size={16} className="inline-block"/> New Message</button>
                 </div>
             </div>
             <div className="flex items-start gap-3 mb-2 py-4">
                 <div>
                    <div className="w-[47px] h-[47px] bg-white roudned-full flex items-center justify-center border border-gray-100 rounded-full "> <Video className="text-[#25b865]" size={16} /> </div>
                 </div>
                  <div>
                    <h2 className="text-sm text-[#25b865] font-semibold">
                     Discussion with marketing team
                    </h2>
                    <p className="text-[#4B5675] text-sm mb-4">
                       You have a meeting at <strong>Laborator Office</strong> Today.
                    </p>
                    <p className="text-sm text-[#4b5675]">Discussion with marketing team about the popularity of last product</p>
                 </div>
             </div>
               <div className="flex items-start gap-3 mb-2 py-4">
                 <div>
                              <div className="w-[47px] h-[47px] bg-white roudned-full flex items-center justify-center border border-gray-100 rounded-full ">
                                <MapPin className="text-[#02a0e4]" size={16} />
                              </div>
                 </div>
                 <div>
                              <h2 className="text-sm text-[#252F4A] font-semibold">
                              Arlind Nushi checked in at Laborator
                              </h2>
                              <p className="text-[#4B5675] text-sm mb-4">
                             urchase new hosting plan as discussed with development team, today at <strong>10:00 AM</strong>
                              </p>
                              <div className="flex gap-1 items-center">
                                <button className="text-[11px] leading-[11px] bg-[#fbeff1] text-[#d13b4c] py-[5px] px-[7px] rounded">
                                  React
                                </button>
                                <button className="text-[11px] leading-[11px] bg-[#e9f8f0] text-[#25b865] py-[5px] px-[7px] rounded">
                                  Typescript
                                </button>
                                <button className="text-[11px] leading-[11px] bg-[#fcf3e8] text-[#e49e3d] py-[5px] px-[7px] rounded">
                                  Admin
                                </button>
                                <button className="text-[11px] leading-[11px] bg-[#ecf5ff] text-[#3e97ff] py-[5px] px-[7px] rounded">
                                  Dashboard
                                </button>
                              </div>
                 </div>
             </div>
               <div className="flex items-start gap-3 mb-2 py-4">
                 <div>
                              <div className="w-[47px] h-[47px] bg-white roudned-full flex items-center justify-center border border-gray-100 rounded-full ">
                                <SquareUserRound className="text-[#000]" size={16} />
                              </div>
                 </div>
                 <div>
                              <h2 className="text-sm text-[#252F4A] font-semibold">
                            Another conference call today, at <strong>11:00 AM</strong>
                              </h2>
                              <p className="text-[#4B5675] text-sm mb-4">
                            Yet another one, at <strong className="text-[#25b865]">1:00 PM</strong>
                              </p>
                 </div>
             </div>
             <div className="ps-12">
              <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="cursor-pointer py-[10px] px-5 border rounded-full border-gray-100 text-sm leading-[14px] flex items-center justify-center gap-2"
                >
                  {loadingMore ? (
                    <>
                      <span className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
                      Loading...
                    </>
                  ) : (
                    "Load more..."
                  )}
                </button>
             </div>
             </div>
        </div>
  )
}

export default ProfileActivity
