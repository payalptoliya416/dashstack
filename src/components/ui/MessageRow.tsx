import { Star } from 'lucide-react';
import { type FC, useState } from 'react';
import type { MessageProps } from '../../types/Dashboard';

const MessageRow: FC<MessageProps> = ({
  name,
  label,
  labelColor,
  message,
  time,
  important,
  onToggleStar 
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`grid grid-cols-12 items-center px-2 sm:px-4 py-3 md:py-5 transition border-b border-[#E5E7EB] gap-2 sm:gap-3 md:gap-1 ${
        isChecked ? 'bg-[#F9FAFB]' : 'hover:bg-[#F9FAFB]'
      }`}>
      {/* Checkbox + Star */}
      <div className="col-span-2 md:col-span-1 flex items-center gap-3 2xl:gap-6">
        <div className="relative">
            <input
                id={`checkbox-${name}`}
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                className="peer mt-1 w-4 h-4 appearance-none border border-[#B3B3B3] rounded-sm cursor-pointer
                checked:bg-black checked:border-black focus:outline-none transition"
            />
            <svg
                className="absolute top-[7px] left-[3px] w-[10px] h-[10px] text-white pointer-events-none opacity-0 peer-checked:opacity-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="20 6 9 17 4 12" />
            </svg>
            </div>

        <button onClick={onToggleStar} className='cursor-pointer'>
          <Star
            className={`w-4 h-4 transition ${
              important ? 'text-[#FFC021] fill-[#FFC021]' : 'text-[#B3B3B3]'
            }`}
            fill={important ? '#FFC021' : 'none'}
            stroke={important ? '#FFC021' : '#B3B3B3'}
          />
        </button>

      </div>

      {/* Name */}
      <div className="col-span-7 md:col-span-2">
        <h3 className="text-darkgray text-sm font-bold ">{name}</h3>
      </div>

      {/* Label */}
        {label && (
      <div className={`col-span-3 md:col-span-1 text-end  md:text-start`}>
          <button
            className="text-xs font-medium rounded-md py-[3px] px-2 w-[60px]"
            style={{
              color: labelColor,
              backgroundColor: `${labelColor}33`,
            }}
          >
            {label}
          </button>
      </div>
        )}

      {/* Message */}
      <div
        className={`md:mx-2 ${label ? 'col-span-6 sm:col-span-8 md:col-span-7' : 'col-span-9 sm:col-span-10 md:col-span-8'  }`}
      >
        <p className="text-sm font-medium text-darkgray">{message}</p>
      </div>
      {/* Time */}
      <div className="col-span-3 sm:col-span-2 md:col-span-1 text-right">
        <p className="text-sm text-[#555] whitespace-nowrap">{time}</p>
      </div>
    </div>
  );
};

export default MessageRow;
