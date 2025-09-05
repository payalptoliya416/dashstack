
import { ArrowRight, Facebook, Github, Linkedin, MoveRight, Plus, Twitter,  Youtube } from "lucide-react"
import UseProgressBar from "../../hooks/useProgressBar";
import { connectionsData, experiences, interests, introData, skills } from "./UserProfileData";
import toast from "react-hot-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

function ProfileOverview() {
    const [connections, setConnections] = useState(connectionsData);
    const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  
    const handleFollowToggle = (index: number) => {
      setLoadingIndex(index); 
      setTimeout(() => {
        setConnections((prev) =>
          prev.map((conn, i) =>
            i === index ? { ...conn, following: !conn.following } : conn
          )
        );
  
        const user = connections[index];
        toast.success(
          user.following ? `Unfollowed ${user.name}` : `Followed ${user.name}`
        );
  
        setLoadingIndex(null);
      }, 1000);
    };

  return (
    <>
     <motion.div
      {...usePageAnimation()}
      className="overflow-hidden">
          <h3 className="text-lg font-bold mb-4">Profile Overview</h3>
        <div className="grid grid-cols-12 gap-7">
              <div className="col-span-12 xl:col-span-4">
                <div className="shadow-sm rounded-lg p-6 bg-white mb-6">
                    <div className="flex  justify-between mb-10">
                        <h3 className="text-[17px] leading-[20px] font-bold text-[#202224]/90">Compleation</h3>
                        <h3 className="group text-[#3E97FF] text-sm cursor-pointer">  Complete   <ArrowRight
                        className="inline-block text-[#3E97FF] ms-1 transition-transform duration-200 group-hover:translate-x-1"
                        size={12}   /></h3>
                    </div>
                    <UseProgressBar
                    label="Profile compleation"
                    amount=""
                    percentage={78}
                    barColor="#3E97FF"
                    />
                </div>
                <div className="shadow-sm rounded-lg p-6 bg-white mb-6">
                     <h3 className="text-[17px] leading-[20px] font-bold text-[#202224]/90 mb-6">Introduction</h3>
                     {/* -- */}
                     <ul className="mb-7">
                        {introData.map((item, idx) => (
                        <li key={idx} className="flex gap-4 mb-3">
                            <h3 className="text-[#4B5675] text-sm w-36 font-bold">{item.label}</h3>
                            <p className="text-sm text-[#4B5675]">{item.value}</p>
                        </li>
                        ))}
                     </ul>
                      {/* -- */}
                     <div className="flex items-center gap-3">
                          <button className="w-7 h-7 rounded bg-[#3B5998] flex justify-center items-center text-white"><Facebook size={14}/></button>
                          <button  className="w-7 h-7 rounded bg-[#1DA1F2] flex justify-center items-center text-white"><Twitter size={14}/></button>
                          <button  className="w-7 h-7 rounded bg-[#0E76A8] flex justify-center items-center text-white"><Linkedin size={14}/></button>
                          <button  className="w-7 h-7 rounded bg-[#C4302B] flex justify-center items-center text-white"><Youtube size={14}/></button>
                          <button  className="w-7 h-7 rounded bg-[#333333] flex justify-center items-center text-white"><Github size={14}/></button>
                     </div>
                </div>
                 <div className="shadow-sm rounded-lg p-6 bg-white mb-6">
                      <div className="flex  justify-between mb-10">
                        <h3 className="text-[17px] leading-[20px] font-bold text-[#202224]/90">Compleation</h3>
                         <Plus className="inline-block text-[#202224] ms-1" size={18}/>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                         {skills.map((skill, idx) => (
                        <button key={idx} className="border border-gray-200 rounded-full py-1 px-2 text-xs leading-[12px] font-semibold">
                            {skill.name}
                        </button>   
                        ))}
                    </div>
                </div>
                <div className="shadow-sm rounded-lg p-6 bg-white xl:mb-6">
                     <h3 className="text-[17px] leading-[20px] font-bold text-[#202224]/90 mb-6">Connections</h3>
                     {connections.map((conn, idx) => (
                        <div key={idx} className="flex justify-between items-center mb-5">
                        <div className="flex gap-3 items-center">
                            <div className="w-10 xl:w-12 h-10 xl:h-12 rounded-full">
                            <img src={conn.img} alt="" className="w-10 xl:w-12 h-10 xl:h-12 rounded-full" />
                            </div>
                            <div>
                            <h3 className="text-sm text-[#202224]/80 font-semibold">{conn.name}</h3>
                            <p className="text-[12px] text-[#6B7177]">{conn.connections} Connections</p>
                            </div>
                        </div>
                         <button
                            onClick={() => handleFollowToggle(idx)}
                            disabled={loadingIndex === idx}
                            className={`py-1 2xl:py-2 px-2 2xl:px-5 text-xs sm:text-sm border border-gray-100 rounded-full transition-all duration-200 ${
                            conn.following
                                ? "text-[#25b865] bg-[#e9f8f0]"
                                : "text-[#252F4A] bg-white"
                            }`}
                        >
                            {loadingIndex === idx ? (
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 border-2 border-t-transparent rounded-full animate-spin mr-1"></span>
                                Loading...
                            </span>
                            ) : conn.following ? (
                            "Following"
                            ) : (
                            "Follow"
                            )}
                        </button>
                        </div>
                    ))}
                      <h3 className="group text-[#3E97FF] text-sm cursor-pointer">  All Connections   <ArrowRight
                        className="inline-block text-[#3E97FF] ms-1 transition-transform duration-200 group-hover:translate-x-1" size={12}   /></h3>
                </div>
              </div>
              <div className="col-span-12 xl:col-span-8">
                   <div className="shadow-sm rounded-lg p-6 bg-white mb-6">
                     <h3 className="text-[17px] leading-[20px] font-bold text-[#202224]/90 mb-6">About Me</h3>
                     <p className="text-sm text-[#4B5675] mb-4">
                        Hi I'm Alexandra Della, has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Alexandra is a frontend developer with over 5 years of experience creating high-quality, user-friendly websites and web applications. He has a strong understanding of web development technologies and a keen eye for design.
                     </p>
                     <ul className="mb-4 list-disc ps-6">
                        <li className="text-sm text-[#4B5675]">Dreams 👉 Goals</li>
                        <li className="text-sm text-[#4B5675]">Midnight snacker 🌝</li>
                        <li className="text-sm text-[#4B5675]">Recovering cake addict 🎂</li>
                        <li className="text-sm text-[#4B5675]">I make money in my sleep 🛌</li>
                        <li className="text-sm text-[#4B5675]">People call me Sara, but you can call me tonight 😉</li>
                     </ul>
                     <p className="text-sm text-[#4B5675] mb-1">Looking forward to hearing from you!</p>
                     <p className="text-sm text-[#4B5675]">Thanks by, <strong>Alexandra Della</strong></p>
                   </div>
                   <div className="shadow-sm rounded-lg p-6 bg-white mb-6">
                     <h3 className="text-[17px] leading-[20px] font-bold text-[#202224]/90 mb-6">Experiences</h3>
                      {experiences.map((exp, idx) => (
                        <div key={idx} className="border-gray-100 border rounded p-4 flex gap-4 flex-col md:flex-row mb-4">
                        <img src={exp.img} className="w-12 h-12" alt="" />
                        <div>
                            <h3 className="font-bold text-[#252F4A] text-sm mb-1">{exp.title}</h3>
                            <p className="text-[12px] text-[#4B5675] mb-1">
                            <span>{exp.date}</span> <span className="mx-1">•</span> <span>{exp.duration}</span>
                            </p>
                            <p className="text-sm text-[#4B5675] mb-4">{exp.description}</p>
                            <h3 className="group hover:text-[#3E97FF] text-sm cursor-pointer font-bold">
                            View Details
                            <MoveRight className="inline-block hover:text-[#3E97FF] ms-1 transition-transform duration-200 group-hover:translate-x-1" size={14} />
                            </h3>
                        </div>
                        </div>
                    ))}
                   </div>
                   <div className="shadow-sm rounded-lg p-6 bg-white mb-6">
                     <h3 className="text-[17px] leading-[20px] font-bold text-[#202224]/90 mb-6">Interested</h3>
                     {interests.map((cat, idx) => (
                        <div key={idx} className="border-b border-gray-100 py-4 flex gap-2 flex-wrap">
                        <h3 className="text-[#6B7177] text-sm me-4">{cat.title}</h3>
                        {cat.items.map((item, i) => (
                            <button key={i} className="text-[#252F4A] rounded-full py-1 px-2 text-xs font-bold border border-gray-100">
                            {item}
                            </button>
                        ))}
                        </div>
                    ))}
                   </div>
              </div>
        </div>
    </motion.div>
    </>
  )
}

export default ProfileOverview
