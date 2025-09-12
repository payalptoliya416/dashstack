import { Switch } from "@headlessui/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";
import type { FormRowProps } from "../../types/AccountSetting";

function FormRow({ label, children }: FormRowProps) {
  return (
    <div className="grid grid-cols-12 gap-2 mb-3 items-start">
      <div className="text-sm col-span-12 lg:col-span-4 text-lightgray block mb-2 md:mb-0">{label}</div>
      <div className="col-span-12 lg:col-span-5">{children}</div>
    </div>
  );
}

function Account() {
    const [enabled, setEnabled] = useState(false)
     const [image, setImage] = useState<string | null>(null);

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };

    const handleReset = () => {
      setImage(null);
    };
  return (
    <>
     <motion.div {...usePageAnimation()} className="p-6 shadow-sm rounded-lg bg-white overflow-hidden">
         <h3 className="text-[#252F4A] text-sm mb-2 font-bold">Avatar & Cover</h3>
         <p className="text-sm text-lightgray mb-7">Change avatar and cover images in your account</p>
         
         <FormRow label="Avatar">
        <div>
          <label>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageSelect}
            />
            <div className="w-24 h-24 rounded bg-[#f1f2f3] flex justify-center items-center cursor-pointer overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Plus size={20} className="text-lightgray" />
              )}
            </div>
          </label>
          <p className="text-sm text-graytext mt-2">
            Click to change avatar image -{" "}
            <span
              className="text-[#D13B4C] cursor-pointer"
              onClick={handleReset}
            >
              Reset
            </span>
          </p>
        </div>
      </FormRow>

      {/* Cover */}
      <FormRow label="Cover">
        <div>
          <div className="w-full h-48 rounded bg-[#f1f2f3] flex justify-center items-center cursor-pointer overflow-hidden">
            {image ? (
              <img
                src={image}
                alt="Cover"
                className="w-full h-full object-fill"
              />
            ) : (
              <Plus size={20} className="text-lightgray" />
            )}
          </div>
          <p className="text-sm text-graytext mt-2">
            Click to change cover image -{" "}
            <span
              className="text-[#D13B4C] cursor-pointer"
              onClick={handleReset}
            >
              Reset
            </span>
          </p>
        </div>
      </FormRow>

        <div className="my-8 border-t border-gray-100" />
         <h3 className="text-[#252F4A] text-sm mb-2 font-bold">Personal Information</h3>
         <p className="text-sm text-lightgray mb-8">Basic info, like your name and address that will displayed in public</p>
       
          {[
        { label: "Fullname", placeholder: "Fullname" },
        { label: "Username", placeholder: "Username" },
        { label: "Email", placeholder: "Email" },
        { label: "Address", placeholder: "Address" },
        { label: "Phone", placeholder: "Phone" },
        { label: "Date of Birth", placeholder: "Select date" },
          ].map((item, i) => (
            <FormRow key={i} label={item.label}>
              <input
                type="text"
                placeholder={item.placeholder}
                className="border border-gray-100 rounded w-full px-3 py-2  text-sm text-[#4b5675] placeholder:text-[#4b5675]"
              />
            </FormRow>
          ))}

          <FormRow label="About">
            <textarea
              placeholder="About"
              className="border border-gray-100 rounded w-full px-3 py-2 text-sm text-[#4b5675] placeholder:text-[#4b5675]"
            />
          </FormRow>

          <div className="my-8 border-t border-gray-100" />
          <h3 className="text-[#252F4A] text-sm mb-2 font-bold">Account Preferences</h3>
          <p className="text-sm text-lightgray mb-8">Your personalized preference displayed in your account</p>
          
           <div className="grid grid-cols-12 gap-2 items-start mb-8">
            <div className="text-sm col-span-12 lg:col-span-4"> Public Profile </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="border rounded-sm border-gray-100 py-4 px-6">
                <div className="flex justify-between items-center gap-3">
                  <div>
                      <h4 className="text-[#252F4A] text-sm mb-1 font-semibold">Make contact info public</h4>
                      <p className="text-sm text-graytext">Means that anyone viwing your profile will able to see.</p>
                  </div>
                   <div>
                    <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className="group inline-flex cursor-pointer h-5 w-11 items-center rounded-full bg-gray-100 transition data-checked:bg-blue"
                >
                  <span className="size-3 translate-x-1 rounded-full bg-gray-500 group-data-checked:bg-white transition group-data-checked:translate-x-6" />
                   </Switch>
                   </div>
                </div>
              </div>
              <div className="border rounded-sm border-gray-100 py-4 px-6 border-t-0">
                <div className="flex justify-between items-center gap-3">
                  <div>
                      <h4 className="text-[#252F4A] text-sm mb-1 font-semibold">Make data syncronize always</h4>
                      <p className="text-sm text-graytext">Means that your data syncronizing always on.</p>
                  </div>
                   <div>
                    <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className="group inline-flex cursor-pointer h-5 w-11 items-center rounded-full bg-gray-100 transition data-checked:bg-blue"
                >
                  <span className="size-3 translate-x-1 rounded-full bg-gray-500 group-data-checked:bg-white transition group-data-checked:translate-x-6" />
                   </Switch>
                   </div>
                </div>
              </div>
            </div>
           </div>

            <FormRow label="Timezone">
            <select className="border border-gray-100 rounded w-full px-3 py-2 text-sm text-[#4b5675]">
              <option>Japan Standard Time (JST)</option>
            </select>
           </FormRow>

           <FormRow label="Language">
          <select className="border border-gray-100 rounded w-full px-3 py-2 text-sm text-[#4b5675]">
            <option>English</option>
            <option>German</option>
            <option>Italian</option>
            <option>Spanish</option>
          </select>
          </FormRow>

           <div className="grid grid-cols-12 gap-2 my-10">
             <div className="col-span-3 text-sm sm:hidden"></div>
            <div className="col-span-12 sm::col-span-9">
              <div className="flex items-center gap-2 justify-center">
                 <button className="px-5 py-2 rounded bg-blue text-sm text-white cursor-pointer">Save Changes</button>
                 <button className="px-5 py-2 rounded text-[#d13b4c] bg-[#d13b4c1a] hover:text-white hover:bg-[#d13b4c] transition-all duration-500 text-sm cursor-pointer">Reset</button>
              </div>
            </div>
          </div>
      </motion.div>
    </>
  );
}

export default Account;
