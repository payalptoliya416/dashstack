import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBarTable from "./ProgressBarTable";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

function ProgressBar() {
  const [percentage] = useState(60);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [returningValue, setReturningValue] = useState(0);
  const [reactMoveValue, setReactMoveValue] = useState(0);

  // Animation Speed (gradual increase)
  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += 2;
      if (value > 80) {
        clearInterval(interval);
      }
      setAnimatedValue(value);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Animation Returning (oscillating)
  useEffect(() => {
    let value = 0;
    let direction = 1;
    const interval = setInterval(() => {
      value += direction * 2;
      if (value >= 100 || value <= 0) direction *= -1;
      setReturningValue(value);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Animation React Move (looping progress)
  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value = (value + 5) % 101;
      setReactMoveValue(value);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <motion.div  {...usePageAnimation()} className="overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Basic
        </div>
        <div className="p-6 flex justify-center items-center">
          <div className="w-56 h-56">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              strokeWidth={6} 
              styles={buildStyles({
                pathColor: "#3E97FF",
                textColor: "#3E97FF",
                trailColor: "#e5e7eb",
                textSize:"14px",
              })}
            />
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Linecap
        </div>
        <div className="p-6 flex justify-center items-center">
          <div className="w-56 h-56">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
               strokeWidth={6} 
              styles={buildStyles({
                pathColor: "#3E97FF",
                textColor: "#3E97FF",
                trailColor: "#e5e7eb",
                strokeLinecap: "round",
                textSize:"14px",
              })}
            />
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Filled
        </div>
        <div className="p-6 flex justify-center items-center">
          <div className="w-56 h-56">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
               strokeWidth={6} 
              styles={buildStyles({
                pathColor: "#3E97FF",
                textColor: "#3E97FF",
                trailColor: "#e5e7eb",
                backgroundColor: "#3E97FF",
                textSize:"14px",
              })}
              background
              backgroundPadding={6}
            />
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Animation Speed
        </div>
        <div className="p-6 flex justify-center items-center">
          <div className="w-56 h-56">
            <CircularProgressbar
              value={animatedValue}
              text={`${animatedValue}%`}
               strokeWidth={6} 
              styles={buildStyles({
                pathColor: "#3E97FF",
                textColor: "#3E97FF",
                trailColor: "#e5e7eb",
                strokeLinecap: "round",
                textSize:"14px",
              })}
            />
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Animation Returning
        </div>
        <div className="p-6 flex justify-center items-center">
          <div className="w-56 h-56">
            <CircularProgressbar
              value={returningValue}
              text={`${returningValue}%`}
               strokeWidth={6} 
              styles={buildStyles({
                pathColor: "#3E97FF",
                textColor: "#3E97FF",
                trailColor: "#e5e7eb",
                strokeLinecap: "round",
                textSize:"14px",
              })}
            />
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Animation React Move
        </div>
        <div className="p-6 flex justify-center items-center">
          <div className="w-56 h-56">
            <CircularProgressbar
              value={reactMoveValue}
              text={`${reactMoveValue}%`}
               strokeWidth={6} 
              styles={buildStyles({
                pathColor: "#3E97FF",
                textColor: "#3E97FF",
                trailColor: "#e5e7eb",
                strokeLinecap: "round",
                textSize:"14px",
              })}
            />
          </div>
        </div>
      </div>
    </div>
    <ProgressBarTable/>
    </motion.div>
    </>
  );
}

export default ProgressBar;
