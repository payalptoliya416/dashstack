import type { FC } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import { Fragment } from "react";

export type Language = {
  name: string;
  flag: string;
};

interface Props {
  languages: Language[];
  selectedLanguage: Language;
  onChange: (lang: Language) => void;
}

const LanguageDropdown: FC<Props> = ({ languages, selectedLanguage, onChange }) => (
  <Listbox value={selectedLanguage} onChange={onChange}>
    <div className="relative">
      <Listbox.Button className="flex items-center justify-between w-full gap-[10px] rounded-md cursor-pointer focus:outline-none">
        <div className="flex items-center gap-3 lg:gap-[18px]">
          <img src={selectedLanguage.flag} alt={selectedLanguage.name} className="w-6 lg:w-10 h-5 lg:h-[27px] rounded-sm" />
          <span className="text-[#646464] text-sm font-semibold">{selectedLanguage.name}</span>
        </div>
        <ChevronDown className="w-4 h-4 text-[#646464]" />
      </Listbox.Button>

      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="opacity-0 -translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-75" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 -translate-y-1">
        <Listbox.Options className="absolute left-0 sm:right-0 mt-2 bg-white rounded-2xl shadow-lg z-10 py-2 w-[254px] focus:outline-none">
          <div className="px-5 py-[10px] text-[#404040] text-[15px] border-b border-gray-200">Select Language</div>
          {languages.map((lang) => (
            <Listbox.Option key={lang.name} value={lang} className={({ active }) => `flex items-center justify-between px-4 py-[12px] cursor-pointer ${active ? "bg-blue-50" : ""}`}>
              {({ selected }) => (
                <>
                  <div className="flex items-center gap-5">
                    <img src={lang.flag} alt={lang.name} className="w-11 h-7" loading="eager" />
                    <span className="text-gray-800">{lang.name}</span>
                  </div>
                  <div className="ml-auto">
                    {selected && <Check className="w-5 h-5 text-[#565656]" />}
                  </div>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
);

export default LanguageDropdown;
