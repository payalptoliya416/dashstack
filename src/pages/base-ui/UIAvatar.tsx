import React, { type JSX } from "react";
import UIOptionTable from "./UIOptionTable";
import { usePageAnimation } from "../../hooks/usePageAnimation";
import {motion} from 'framer-motion';

const avatars = [
  "/images/f1.png",
  "/images/f2.png",
  "/images/f3.png",
  "/images/f4.png",
  "/images/f5.png",
  "/images/f6.png",
];

const groupAvatars = [
  "/images/recent1.png",
  "/images/recent2.png",
  "/images/recent3.png",
  "/images/recent4.png",
  "/images/recent5.png",
];
interface Option {
  reference: string;
  details: React.ReactNode;
}
const avatarOptions: Option[] = [
  {
    reference: ".avatar",
    details: <>Initialize user <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">avatar</button></>,
  },
  {
    reference: ".avatar-{size}",
    details: (
      <>
        Use <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">(size)</button> as:{" "}
        <span className="text-[#252f4a] font-bold">xs, sm, md, lg, xl, xxl</span>
      </>
    ),
  },
  {
    reference: ".bg-(color)",
    details: (
      <>
        Use avatar solid color{" "}
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">(colors)</button> from{" "}
        <span className="text-[#252f4a] font-bold">bg-colors</span>
      </>
    ),
  },
  {
    reference: ".bg-(color)-subtle",
    details: (
      <>
        Use avatar soft color{" "}
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">(colors)</button> from{" "}
        <span className="text-[#252f4a] font-bold">bg-colors-subtle</span>
      </>
    ),
  },
  {
    reference: ".rounded-(shape)",
    details: (
      <>
        Use <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">(shape)</button> as:{" "}
        <span className="text-[#252f4a] font-bold">circle, rounded, 0</span>. Default value is{" "}
        <span className="text-[#252f4a] font-bold">circle</span>
      </>
    ),
  },
  {
    reference: ".avatar-status (status)",
    details: (
      <>
        Use <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">(status)</button> as:{" "}
        <span className="text-[#252f4a] font-bold">active, busy, inactive</span>
      </>
    ),
  },
  {
    reference: ".avatar-group .avatar-group-(size)",
    details: (
      <>
        Use <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">(size)</button> as:{" "}
        <span className="text-[#252f4a] font-bold">xs, sm, md, lg, xl, xxl</span>
      </>
    ),
  },
];
function UIAvatar(): JSX.Element {
  
  return (
    <>
    <motion.div
                  {...usePageAnimation()}
                  className="overflow-hidden">
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

      {/* Default */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Default
        </div>
        <div className="flex gap-1 items-center p-4 sm:p-6 flex-wrap">
          {avatars.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`avatar-${index}`}
              className="w-12 h-12 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Solid */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Solid
        </div>
        <div className="flex gap-1 items-center p-4 sm:p-6 flex-wrap">
          {["A", "B", "C", "D", "E", "F"].map((letter, index) => {
            const colors = [
              "#3e97ff",
              "#505863",
              "#25b865",
              "#d13b4c",
              "#e49e3d",
              "#02a0e4",
            ];
            return (
              <div
                key={letter}
                className="w-12 h-12 rounded-full flex justify-center items-center text-white"
                style={{ backgroundColor: colors[index] }}
              >
                {letter}
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Gradient
        </div>
        <div className="flex gap-1 items-center p-4 sm:p-6 flex-wrap">
          {["A", "B", "C", "D", "E", "F"].map((letter, index) => {
            const colors = [
              "#3e97ff",
              "#505863",
              "#25b865",
              "#d13b4c",
              "#e49e3d",
              "#02a0e4",
            ];
            return (
              <div
                key={letter}
                className="relative w-12 h-12 rounded-full flex justify-center items-center text-white overflow-hidden"
                style={{ backgroundColor: colors[index] }}
              >
                <span className="z-10">{letter}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-transparent"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Soft */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Soft
        </div>
        <div className="flex gap-1 items-center p-4 sm:p-6 flex-wrap">
          <div className="w-12 h-12 rounded-full bg-[#ecf5ff] flex justify-center items-center text-[#3e97ff]">
            A
          </div>
          <div className="w-12 h-12 rounded-full bg-[#f1f2f3] flex justify-center items-center text-[#505863]">
            B
          </div>
          <div className="w-12 h-12 rounded-full bg-[#e9f8f0] flex justify-center items-center text-[#25b865]">
            C
          </div>
          <div className="w-12 h-12 rounded-full bg-[#fbeff1] flex justify-center items-center text-[#d13b4c]">
            D
          </div>
          <div className="w-12 h-12 rounded-full bg-[#fcf3e8] flex justify-center items-center text-[#e49e3d]">
            E
          </div>
          <div className="w-12 h-12 rounded-full bg-[#e6f6fc] flex justify-center items-center text-[#02a0e4]">
            F
          </div>
        </div>
      </div>

      {/* Shape */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Shape
        </div>
        <div className="flex gap-1 items-center p-4 sm:p-6 flex-wrap">
          <div className="w-12 h-12 bg-[#3e97ff] flex justify-center items-center text-white">
            A
          </div>
          <div className="w-12 h-12 rounded-sm bg-[#3e97ff] flex justify-center items-center text-white">
            B
          </div>
          <div className="w-12 h-12 rounded-lg bg-[#3e97ff] flex justify-center items-center text-white">
            C
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#3e97ff] flex justify-center items-center text-white">
            D
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#3e97ff] flex justify-center items-center text-white">
            E
          </div>
          <div className="w-12 h-12 rounded-full bg-[#3e97ff] flex justify-center items-center text-white">
            F
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Status
        </div>
        <div className="flex gap-1 items-center p-4 sm:p-6  flex-wrap">
          {avatars.map((src, index) => {
            const statusColors = [
              "#e49e3d",
              "#25b865",
              "#505863",
              "#d13b4c",
              "#000000",
              "#02a0e4",
            ];
            return (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`status-avatar-${index}`}
                  className="w-12 h-12 rounded-full"
                />
                <span
                  className="w-[10px] h-[10px] rounded-full block absolute bottom-0 right-0 border border-white"
                  style={{ backgroundColor: statusColors[index] }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Group */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Group
        </div>
        <div className="flex gap-1 items-center p-4 sm:p-6 border-b border-gray-200  flex-wrap">
          {groupAvatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`group-avatar-${i}`}
              className={`
                w-9 md:w-[43px] h-9 md:h-[43px] rounded-full outline outline-1 outline-white 
                ${i !== 0 ? "-ms-3" : ""} 
                transition-all duration-300 ease-in-out
                hover:scale-110
                cursor-pointer
              `}
            />
          ))}
        </div>
        <div className="flex gap-1 items-center p-4 sm:p-6  flex-wrap">
          {["A", "B", "C", "D", "E", "F"].map((letter, index) => {
            const colors = [
              "#3e97ff",
              "#505863",
              "#25b865",
              "#d13b4c",
              "#e49e3d",
              "#02a0e4",
            ];
            return (
              <div
                key={letter}
                className="w-12 h-12 rounded-full flex justify-center items-center text-white transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer border-2 border-white"
                style={{ backgroundColor: colors[index], marginLeft: index !== 0 ? "-12px" : "0" }}
              >
                {letter}
              </div>
            );
          })}
        </div>
      </div>

      {/* Sizing */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Sizing
        </div>
        <div className="flex gap-3 items-center p-4 sm:p-6 flex-wrap">
          <img src="/images/f1.png" alt="s-1" className="w-8 h-8 rounded-full" />
          <img src="/images/f2.png" alt="s-2" className="w-12 h-12 rounded-full" />
          <img src="/images/f3.png" alt="s-3" className="w-14 h-14 rounded-full" />
          <img src="/images/f4.png" alt="s-4" className="w-16 h-16 rounded-full" />
          <img src="/images/f5.png" alt="s-5" className="w-20 h-20 rounded-full" />
          <img src="/images/f6.png" alt="s-6" className="w-24 h-24 rounded-full" />
        </div>
      </div>
    </div>
    <UIOptionTable title="Options" options={avatarOptions} />
                  </motion.div>
    </>
  );
}

export default UIAvatar;
