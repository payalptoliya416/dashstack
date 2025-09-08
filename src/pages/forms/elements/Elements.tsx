import { useState } from "react";
import UIOptionTable from "../../base-ui/UIOptionTable";
import { ElementTable } from "./ElementsData";

interface Theme {
  name: string;
  color: string;
}
interface ToggleColor {
  name: string;
  color: string;
  disabled?: boolean;
}
const themes: Theme[] = [
  { name: "Primary", color: "#3e97ff" },
  { name: "Secondary", color: "#505863" },
  { name: "Success", color: "#25b865" },
  { name: "Info", color: "#02a0e4" },
  { name: "Warning", color: "#e49e3d" },
  { name: "Danger", color: "#d13b4c" },
];

const toggleColors: ToggleColor[] = [
  { name: "Primary", color: "#3e97ff" },
  { name: "Secondary", color: "#505863" },
  { name: "Warning", color: "#e49e3d" },
  { name: "Info", color: "#02a0e4" },
  { name: "Danger", color: "#d13b4c", disabled: true }, // last button disabled
];

function Elements() {
 const [checkedButtons, setCheckedButtons] = useState<Record<string, boolean>>(
    toggleColors.reduce((acc, btn) => {
      acc[btn.name] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const [selectedRadio, setSelectedRadio] = useState<string>("");
  return (
    <>
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Form Controls
        </div>
        <div className="p-6">
          <form action="">
           <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Basic Input</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray" />
           </div>
           <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Input with Placeholder</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray" placeholder="Placeholder"/>
           </div>
           <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Input with Value</label>
            <input type="text" value="Input with value" className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray"/>
           </div>
           <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Disabled Input</label>
            <input type="text" className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 disabled:bg-[#EEF0F3] text-lightgray" placeholder="Disabled input" disabled/>
           </div>
           <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Input Date</label>
            <input type="date" className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray"/>
           </div>
           <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Input Time</label>
            <input type="time" className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray"/>
           </div>
           <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Example Textarea</label>
            <textarea rows={3} className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray"/>
           </div>
           <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Form Text</label>
            <input type="password" className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray"/>
            <p className="text-xs text-[#4b5675] mt-1">Must be 8-20 characters long.</p>
           </div>
           <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Color Picker</label>
            <input type="color" className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray"/>
           </div>
           <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Input Border Style</label>
            <input type="text" className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray" placeholder="Enter your name"/>
           </div>
           <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Datalist Example</label>
            <input list="datalistOptions" className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray" placeholder="Search your country..."/>
            <datalist id="datalistOptions">
              <option value="Switzerland"></option>
              <option value="New York"></option>
              <option value="France"></option>
              <option value="Spain"></option>
              <option value="Chicago"></option>
              <option value="Bulgaria"></option>
              <option value="Hong Kong"></option>
              </datalist>
           </div>
             <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Rounded Input</label>
            <input type="text" className="border rounded-full border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray" placeholder="Enter your name"/>
           </div>
             <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Floating Input</label>
          <div className="relative w-full">
            <input
              type="password"
              id="floating-input"
              placeholder=" " 
              className="peer block w-full rounded border border-gray-100 px-3 py-4 text-xs  placeholder-transparent focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none text-lightgray"
            />
            <label
              htmlFor="floating-input"
              className="absolute left-3 top-0 text-gray-500 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs peer-focus:top-1 peer-focus:text-gray-700 peer-focus:text-xs"
            >
              Floating Input
            </label>
          </div>
           </div>
            <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Sizing</label>
            <input type="text" className="border rounded-md border-gray-100 py-[14px] px-3 w-full text-sm focus:outline-blue-500 text-lightgray mb-3" placeholder="Large Text"/>
            <input type="text" className="border rounded-md border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray mb-3" placeholder="Normal Text"/>
            <input type="text" className="border rounded-md border-gray-100 py-1 px-2 w-full text-xs focus:outline-blue-500 text-lightgray placeholder:text-xs" placeholder="Normal Text"/>
           </div>
            <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Default file input example</label>
            <input type="file" className="border rounded-md border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray"/>
           </div>
            <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Disabled file input example</label>
            <input type="file" className="border rounded-md border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-lightgray disabled:bg-[#EEF0F3]" disabled/>
           </div>
            <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Small file input example</label>
            <input type="file" className="border rounded-md border-gray-100 py-1 px-3 w-full text-xs focus:outline-blue-500 text-lightgray"/>
           </div>
            <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Large file input example</label>
            <input type="file" className="border rounded-md border-gray-100 py-[14px] px-3 w-full text-sm focus:outline-blue-500 text-lightgray"/>
           </div>
            <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Form Select</label>
            <select name="" id="" className="border rounded-md border-gray-100 py-[14px] px-3 w-full text-sm focus:outline-blue-500 text-lightgray">
              <option value="">Open this select menu</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
           </div>
            <div className="mb-12">
             <label className="text-sm text-lightgray mb-2 block">Solid Checkbox</label>
            <select name="" id="" className="border rounded-md border-gray-100 py-[14px] px-3 w-full text-sm focus:outline-blue-500 text-lightgray">
              <option value="">Open this select menu</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
           </div>
          </form>
        </div>
      </div>

      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
         Solid Checkbox
        </div>
        <div className="p-6">
              <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <div className="w-full overflow-x-auto bg-white rounded-xl">
                     <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr>
                          <th className="py-3 px-6 text-left">Colors</th>
                          <th className="py-3 px-6 text-left">Default</th>
                          <th className="py-3 px-6 text-left">Checked</th>
                          <th className="py-3 px-6 text-left">Disabled</th>
                        </tr>
                      </thead>
                    <tbody>
                      {themes.map((theme, index) => {
                        const [defaultChecked, setDefaultChecked] = useState(false);
                        const [checkedChecked, setCheckedChecked] = useState(true);
                        const [disabledChecked] = useState(true);

                        return (
                          <tr key={theme.name}>
                            <td className="py-3 px-6 font-medium">{theme.name}</td>

                            {/* Default */}
                            <td className="py-3 px-6">
                              <div className="flex items-center mb-10">
                                <input
                                  type="checkbox"
                                  id={`default-${index}`}
                                  checked={defaultChecked}
                                  onChange={() => setDefaultChecked(!defaultChecked)}
                                  className="appearance-none w-5 h-5 border-none rounded cursor-pointer checked:relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:font-bold checked:after:text-[12px] checked:after:left-[5px] checked:after:top-[1px]"
                                  style={{
                                    backgroundColor: defaultChecked ? theme.color : "#EEF0F3",
                                  }}
                                />
                                <label
                                  htmlFor={`default-${index}`}
                                  className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                  {theme.name}
                                </label>
                              </div>
                            </td>

                            {/* Checked */}
                            <td className="py-3 px-6">
                              <div className="flex items-center mb-10">
                                <input
                                  type="checkbox"
                                  id={`checked-${index}`}
                                  checked={checkedChecked}
                                  onChange={() => setCheckedChecked(!checkedChecked)}
                                  className="appearance-none w-5 h-5 border-none rounded cursor-pointer checked:relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:font-bold checked:after:text-[12px] checked:after:left-[5px] checked:after:top-[1px]"
                                  style={{
                                    backgroundColor: checkedChecked ? theme.color : "#EEF0F3",
                                  }}
                                />
                                <label
                                  htmlFor={`checked-${index}`}
                                  className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                  {theme.name}
                                </label>
                              </div>
                            </td>

                            {/* Disabled */}
                            <td className="py-3 px-6">
                              <div className="flex items-center mb-10 opacity-60">
                                <input
                                  type="checkbox"
                                  id={`disabled-${index}`}
                                  checked={disabledChecked}
                                  disabled
                                  className="appearance-none w-5 h-5 border-none rounded checked:relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:font-bold checked:after:text-[12px] checked:after:left-[5px] checked:after:top-[1px] cursor-not-allowed"
                                  style={{
                                    backgroundColor: disabledChecked ? theme.color : "#EEF0F3",
                                  }}
                                />
                                <label
                                  htmlFor={`disabled-${index}`}
                                  className="ml-2 text-sm font-medium text-gray-400 cursor-not-allowed"
                                >
                                  {theme.name}
                                </label>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    </table>
                    </div>
                </div>
              </div>
        </div>
      </div>

      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
       Solid Radio
        </div>
      <div className="p-6">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="w-full overflow-x-auto bg-white rounded-xl">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="py-3 px-6 text-left">Colors</th>
                    <th className="py-3 px-6 text-left">Default</th>
                    <th className="py-3 px-6 text-left">Checked</th>
                    <th className="py-3 px-6 text-left">Disabled</th>
                  </tr>
                </thead>
                <tbody>
                  {themes.map((theme, index) => {
                    const [selected, setSelected] = useState<"default" | "checked" | "disabled">("default");

                    return (
                      <tr key={theme.name}>
                        <td className="py-3 px-6 font-medium">{theme.name}</td>

                        {["default", "checked", "disabled"].map((option) => {
                          const isDisabled = option === "disabled";
                          const isSelected = selected === option;
                          return (
                            <td key={option} className="py-3 px-6">
                              <div className={`flex items-center mb-10 ${isDisabled ? "opacity-60" : ""}`}>
                                <input
                                  type="radio"
                                  id={`${option}-${index}`}
                                  name={`row-${index}`}
                                  checked={isSelected}
                                  disabled={isDisabled}
                                  onChange={() => !isDisabled && setSelected(option as any)}
                                  className={`w-5 h-5 border-none rounded-full cursor-pointer  ${
                                    isDisabled ? "cursor-not-allowed" : ""
                                  }`}
                                  style={{
                                    backgroundColor: isSelected ? theme.color : "#EEF0F3",
                                  }}
                                />
                                <label
                                  htmlFor={`${option}-${index}`}
                                  className={`ml-2 text-sm font-medium ${
                                    isDisabled ? "text-gray-400 cursor-not-allowed" : "text-gray-900 cursor-pointer"
                                  }`}
                                >
                                  {theme.name}
                                </label>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Toggle Button
        </div>
        <div className="p-6 flex gap-3 items-center border-b border-gray-100 flex-wrap">
             {toggleColors.map((btn) => {
          const isChecked = checkedButtons[btn.name];
          return (
            <button
              key={btn.name}
              onClick={() =>
                !btn.disabled &&
                setCheckedButtons({
                  ...checkedButtons,
                  [btn.name]: !isChecked,
                })
              }
              className={`border py-2 px-5 rounded-full font-semibold text-sm transition-colors duration-200 ${
                btn.disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{
                borderColor: btn.color,
                color: btn.disabled
                  ? "#999"
                  : isChecked
                  ? "#fff"
                  : btn.color,
                backgroundColor: isChecked ? btn.color : "#fff",
                cursor: btn.disabled ? "not-allowed" : "pointer",
              }}
            >
              {btn.name}
            </button>
          );
        })}
        </div>
        <div className="p-6 flex gap-3 items-center flex-wrap">
           {toggleColors.map((btn) => {
          const isSelected = selectedRadio === btn.name;
          return (
            <button
              key={btn.name}
              onClick={() => !btn.disabled && setSelectedRadio(btn.name)}
              className={`border py-2 px-5 rounded font-semibold text-sm transition-colors duration-200 ${
                btn.disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{
                borderColor:'#505863',
                color: btn.disabled
                  ? "#505863"
                  : isSelected
                  ? "#fff"
                  : '#505863',
                backgroundColor: isSelected ? '#505863' : "#fff",
                cursor: btn.disabled ? "not-allowed" : "pointer",
              }}
            >
             Radio
            </button>
          );
        })}
        </div>
      </div>

        <UIOptionTable title="Options" options={ElementTable} />
    </>
  );
}

export default Elements;
