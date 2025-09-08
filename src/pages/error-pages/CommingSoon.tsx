import React, { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CommingSoon: React.FC = () => {
 const targetDate = new Date("2025-10-25T00:00:00"); // launch date

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // progress calculation
  const getProgress = (value: number, max: number) => {
    const radius = 40; // circle radius
    const circumference = 2 * Math.PI * radius;
    const progress = ((max - value) / max) * circumference; // shrink as countdown goes
    return { circumference, progress };
  };
  
  return (
    <div className="min-h-screen w-full bg-[url('/images/loginbg.png')] bg-cover bg-center flex items-center justify-center px-4 py-10">
      <div className="bg-white py-14 px-6 sm:px-10 md:py-[90px] md:px-[57px] rounded-xl w-full max-w-[650px] shadow-lg text-center">
        
        {/* Countdown */}
      <div className="flex justify-center gap-3 sm:gap-10 mb-10">
          {[
            { label: "Days", value: timeLeft.days, max: 30 }, // assume month = 30 days
            { label: "Hrs", value: timeLeft.hours, max: 24 },
            { label: "Mins", value: timeLeft.minutes, max: 60 },
            { label: "Secs", value: timeLeft.seconds, max: 60 },
          ].map((item, idx) => {
            const { circumference, progress } = getProgress(item.value, item.max);

            return (
              <div key={idx} className="flex flex-col items-center">
               <svg className="w-13 sm:w-20 h-13 sm:h-20" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#e5e7eb"
                strokeWidth="6"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#3b82f6"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={progress}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-linear"
                style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
              />
              {/* text */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                className="text-lg font-bold fill-gray-800"
              >
                {item.value}
              </text>
            </svg>
                <span className="mt-2 text-sm font-medium text-gray-500">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          We're launching soon
        </h2>
        <p className="text-gray-600 mb-8">
          We're creating something awesome. Please subscribe to get notified when it's ready!
        </p>

        {/* Subscribe Form */}
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-l-md w-full max-w-[300px] focus:outline-none text-sm sm:text-base"
          />
          <button className="bg-blue-500 text-white px-3 sm:px-5 py-2 rounded-r-md hover:bg-blue-600 text-sm sm:text-base">
            Subscribe
          </button>
        </div>

        <ul className="flex justify-center gap-5 mt-8 text-gray-500">
           <li className="text-sm font-semibold text-darkgray">
                <Facebook size={16} />
              </li>
              <li className="text-sm font-semibold text-darkgray">
                <Twitter size={16} />
              </li>
              <li className="text-sm font-semibold text-darkgray">
                <Instagram size={16} />
              </li>
              <li className="text-sm font-semibold text-darkgray">
                <Linkedin size={16} />
              </li>
        </ul>
      </div>
    </div>
  );
};

export default CommingSoon;
