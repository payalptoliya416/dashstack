import { Switch } from "@headlessui/react";
import { useState, type ReactNode } from "react";

interface FormRowProps {
  label: string;
  children: ReactNode;
}

interface SecurityOption {
  title: string;
  description: string;
  type: "switch" | "button";
  buttonLabel?: string;
}


const securitySwitchOptions: SecurityOption[] = [
  {
    title: "Enable 2-step authentication",
    description:
      "Protects you against password theft by requesting an authentication code via SMS on every login.",
    type: "switch",
  },
  {
    title: "Ask to change password on every 6 months",
    description:
      "A simple but an effective way to be protected against data leaks and password theft.",
    type: "switch",
  },
  {
    title: "Save my Activity Logs",
    description:
      "You can save your all activity logs including unusual activity detected.",
    type: "switch",
  },
];

const securityButtonOptions: SecurityOption[] = [
  {
    title: "Authentication app",
    description: "Google or anyothers auth app setup.",
    type: "button",
    buttonLabel: "Setup",
  },
  {
    title: "Recovery email",
    description: "E-mail used to send recovery link.",
    type: "button",
    buttonLabel: "Setup",
  },
  {
    title: "Phone recovery",
    description: "Your phone number or something",
    type: "button",
    buttonLabel: "Setup",
  },
];


function FormRow({ label, children }: FormRowProps) {
  return (
    <div className="md:grid md:grid-cols-3 gap-2 mb-3 items-start">
      <div className="text-sm text-[#4B5675] block mb-2 md:mb-0">{label}</div>
      <div className="col-span-2">{children}</div>
    </div>
  );
}

function Security() {
     const [switchStates, setSwitchStates] = useState<boolean[]>(
    Array(securitySwitchOptions.length).fill(false)
  );

  const toggleSwitch = (index: number) => {
    setSwitchStates((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };
  return (
    <>
      <div className="p-6 shadow-sm rounded-lg bg-white mb-7">
        <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold">Password</h3>
        <p className="text-sm text-[#4B5675] mb-7"> Change password on your account </p>
        {[
          { label: "Current Password", placeholder: "Current Password" },
          { label: "New Password", placeholder: "New Password" },
          { label: "Confirm Password", placeholder: "Confirm Password" },
        ].map((item, i) => (
          <FormRow key={i} label={item.label}>
            <input
              type="text"
              placeholder={item.placeholder}
              className="border border-gray-100 rounded w-full px-3 py-2 text-sm text-[#4b5675] placeholder:text-[#4b5675]"
            />
          </FormRow>
        ))}

        <div className="md:grid md:grid-cols-3 gap-2 mb-3 items-start">
          <div></div>
          <div className="col-span-2">
            <p  className="text-sm text-[#4B5675] mb-2 font-bold"> Password Requirements: </p>
            <ul className="list-disc ps-4">
              <li className="text-sm text-[#4B5675]">At least one lowercase character</li>
              <li className="text-sm text-[#4B5675]">Minimum 8 characters long - the more, the better</li>
              <li className="text-sm text-[#4B5675]">At least one number, symbol, or whitespace character</li>
            </ul>
          </div>
        </div>

        <div className="my-8 border-t border-gray-100" />
        <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold">Questions</h3>
        <p className="text-sm text-[#4B5675] mb-7">Change security questions for your account </p>

          <FormRow label="Question #1">
          <select className="border border-gray-100 rounded w-full px-3 py-2  text-sm text-[#4b5675]">
            <option>1.What city were you born in?</option>
            <option>1.What city were you born in?</option>
            <option>1.What city were you born in?</option>
          </select>
          </FormRow>

          <FormRow label="Answer #1">
          <input
              type="password"
              placeholder="Answer #1"
              className="border border-gray-100 rounded w-full px-3 py-2 text-sm text-[#4b5675] placeholder:text-[#4b5675]"
            />
          </FormRow>

          <FormRow label="Question #2">
          <select className="border border-gray-100 rounded w-full px-3 py-2  text-sm text-[#4b5675]">
            <option>1.What city were you born in?</option>
            <option>1.What city were you born in?</option>
            <option>1.What city were you born in?</option>
          </select>
          </FormRow>

          <FormRow label="Answer #2">
          <input
              type="password"
              placeholder="Answer #1"
              className="border border-gray-100 rounded w-full px-3 py-2 text-sm text-[#4b5675] placeholder:text-[#4b5675]"
            />
          </FormRow>
          
          <div className="my-8 border-t border-gray-100" />
            <div>
      <div className="grid grid-cols-12 gap-2 items-start mb-8">
        <div className="text-sm col-span-12 md:col-span-4">
          <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold">Security</h3>
          <p className="text-sm text-[#4B5675] mb-7">
            Ensure security on your account
          </p>
        </div>

        <div className="col-span-12 md:col-span-8">
          {securitySwitchOptions.map((opt, idx) => (
            <div
              key={opt.title}
              className={`border rounded-sm border-gray-100 py-4 px-6 w-full xl:max-w-[600px] ${
                idx > 0 ? "border-t-0" : ""
              }`}
            >
              <div className="flex justify-between items-center gap-3">
                <div>
                  <h4 className="text-[#252F4A] text-sm mb-1 font-semibold">
                    {opt.title}
                  </h4>
                  <p className="text-sm text-[#6B7177]">{opt.description}</p>
                </div>
                <Switch
                  checked={switchStates[idx]}
                  onChange={() => toggleSwitch(idx)}
                  className="group inline-flex cursor-pointer h-5 w-11 items-center rounded-full bg-gray-100 transition data-checked:bg-[#3E97FF]"
                >
                  <span className="size-3 translate-x-1 rounded-full bg-gray-500 group-data-checked:bg-white transition group-data-checked:translate-x-6" />
                </Switch>
              </div>
            </div>
          ))}
            <div className="mt-5"></div>
          {/* Button-based options */}
          {securityButtonOptions.map((opt) => (
            <div
              key={opt.title}
              className="border rounded-sm border-gray-100 py-4 px-6 w-full xl:max-w-[600px]"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-[#252F4A] text-sm mb-1 font-semibold">
                    {opt.title}
                  </h4>
                  <p className="text-sm text-[#6B7177]">{opt.description}</p>
                </div>
                <button className="text-xs sm:text-sm text-[#252f4A] py-2 px-4 rounded bg-[#f1f2f3] font-semibold">
                  {opt.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

  <div className="my-8 border-t border-gray-100" />
      <div className="grid grid-cols-12 gap-2 my-10">
         <div className="col-span-3 text-sm sm:hidden"></div>
            <div className="col-span-12 sm::col-span-9">
          <div className="flex items-center gap-2 justify-center">
            <button className="px-5 py-2 rounded bg-[#3E97FF] text-sm text-white cursor-pointer">
              Save Changes
            </button>
            <button className="px-5 py-2 rounded text-[#d13b4c] bg-[#d13b4c1a] hover:text-white hover:bg-[#d13b4c] transition-all duration-500 text-sm cursor-pointer">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
      </div>

      <div className="p-6 shadow-sm rounded-lg bg-white">
         <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold">Delete Account</h3>
        <p className="text-sm text-[#4B5675] mb-7"> He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. </p>
        <p className="text-[#d13b4c] bg-[#d13b4c1a] p-4 rounded text-xs mb-6">Go to the Data & Privacy section of your profile Account. Scroll to "Your data & privacy options." Delete your Profile Account. Follow the instructions to delete your account:</p>
        <input type="text" className="border border-gray-100 rounded w-full px-3 py-2 text-sm text-[#4b5675] placeholder:text-[#4b5675] mb-3" placeholder="Enter your password" />
        <div className="flex gap-3 items-start sm:items-center mb-3 ">
          <input id="check" type="checkbox"  className=" appearance-none w-5 h-5 bg-[#EEF0F3] border-none rounded cursor-pointer 
             checked:bg-[#3E97FF] checked:border-[#3E97FF] relative 
             checked:after:content-['✔'] checked:after:absolute checked:after:text-white 
             checked:after:font-bold checked:after:text-[12px] checked:after:left-[5px] checked:after:top-[1px]"/>
           <label className="text-sm text-[#4B5675]  cursor-pointer " htmlFor="check"> I confirm my account deletions or deactivation.</label>
        </div>
         <div className="flex gap-3 items-center flex-wrap">
          <button className="text-white bg-[#d13b4c] py-2 px-5 rounded text-xs sm:text-sm opacity-70">Delete Account</button>
          <button className="text-black bg-[#e49e3d] py-2 px-5 rounded text-xs sm:text-sm opacity-70">Deactivate Account</button>
         </div>
      </div>
    </>
  );
}

export default Security;
