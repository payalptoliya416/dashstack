import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const NouiSlider: React.FC = () => {
  const [skipValue, setSkipValue] = useState(20);
  const [nonLinear, setNonLinear] = useState<[number, number]>([500, 1000]);
  const [keyboardValue, setKeyboardValue] = useState(10);
  const [pipsValue, setPipsValue] = useState(50);

  return (
    <>
      {/* Basic Range Slider */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Basic
        </div>
        <div className="p-6">
          <Slider
            range
            defaultValue={[20, 80]}
            allowCross={false}
            trackStyle={[{ backgroundColor: "#3E97FF" }]}
            handleStyle={[
              { borderColor: "#3E97FF", backgroundColor: "#3E97FF" },
              { borderColor: "#3E97FF", backgroundColor: "#3E97FF" },
            ]}
          />
        </div>
      </div>

      {/* Non Linear Range Slider */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Non Linear
        </div>
        <div className="p-6">
          <Slider
            range
            min={0}
            max={1000}
            step={10}
            value={nonLinear}
            onChange={(v) => setNonLinear(v as [number, number])}
            trackStyle={[{ backgroundColor: "#3E97FF" }]}
            handleStyle={[
              { borderColor: "#3E97FF", backgroundColor: "#3E97FF" },
              { borderColor: "#3E97FF", backgroundColor: "#3E97FF" },
            ]}
          />
          <p className="mt-2 text-sm text-gray-600">
            Value: {nonLinear[0].toFixed(2)},{" "}
            {((nonLinear[0] / 1000) * 100).toFixed(2)} %
          </p>
        </div>
      </div>

      {/* Keyboard Support Slider */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Keyboard Support
        </div>
        <div className="p-6">
          <p className="mb-2 text-sm text-gray-600">Value: {keyboardValue}</p>
          <Slider
            min={0}
            max={100}
            value={keyboardValue}
            onChange={(v) => setKeyboardValue(v as number)}
            keyboard
            trackStyle={{ backgroundColor: "transparent" }}    
            railStyle={{ backgroundColor: "#e5e7eb" }}         
            handleStyle={{
              borderColor: "#3E97FF",                           
              backgroundColor: "#fff",                        
              boxShadow: "0 0 0 2px #3E97FF33"                 
            }}
          />
        </div>
      </div>

      {/* Clicking Pips Slider */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Clicking Pips
        </div>
        <div className="p-6">
          <p className="mb-2 text-sm text-gray-600">Value: {pipsValue}</p>
          <Slider
            min={0}
            max={100}
            step={5}
            marks={{ 0: "0", 25: "25", 50: "50", 75: "75", 100: "100" }}
            value={pipsValue}
            onChange={(v) => setPipsValue(v as number)}
            trackStyle={{ backgroundColor: "transparent" }}
            handleStyle={{
              borderColor: "#3E97FF",
              backgroundColor: "#3E97FF",
            }}
          />
        </div>
      </div>

      {/* Skipping Slider */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Skipping
        </div>
        <div className="p-6">
          <p className="mb-2 text-sm text-gray-600">Value: {skipValue}</p>
          <Slider
            min={0}
            max={100}
            step={10}
            value={skipValue}
            onChange={(v) => setSkipValue(v as number)}
            trackStyle={{ backgroundColor: "transparent" }}
            handleStyle={{
              borderColor: "#3E97FF",
              backgroundColor: "#3E97FF",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NouiSlider;
