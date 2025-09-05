import { Switch } from "@headlessui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";
interface NotificationCategory {
  title: string;
}

interface RadioOption {
  id: string;
  title: string;
  description: string;
}

interface SwitchOption {
  id: string;
  title: string;
  description: string;
}

const categories: NotificationCategory[] = [
  { title: "Conversations tones" },
  { title: "Message alerts" },
  { title: "New post or story" },
  { title: "Comment notifications" },
  { title: "Notify Remainders" },
  { title: "Review notificationsrs" },
  { title: "Daily summary emails" },
  { title: "News and updates" },
];

const commonOptions = [
  { label: "Email", value: "email" },
  { label: "Browser", value: "browser" },
  { label: "App", value: "app" },
];

function AccoNotification() {
   const [selectedRadio, setSelectedRadio] = useState<string>("everything");
  const [switchStates, setSwitchStates] = useState<Record<string, boolean>>({
    everything: true,
    disableNotify: false,
    ledNotify: false,
    contactJoining: true,
  });

  const pushNotifyOptions: RadioOption[] = [
    {
      id: "everything",
      title: "Everything",
      description: "Notify on receiving post or story.",
    },
    {
      id: "importantOnly",
      title: "Only what's important",
      description: "These are notifications to remind you.",
    },
    {
      id: "noPush",
      title: "No push notifications",
      description: "Send me an email when my items are approved or rejected.",
    },
  ];

  const miscOptions: SwitchOption[] = [
    {
      id: "everything",
      title: "Everything",
      description: "Notify on receiving post or story.",
    },
    {
      id: "disableNotify",
      title: "Disable notify",
      description: "Disabled notifications for all users.",
    },
    {
      id: "ledNotify",
      title: "LED notify",
      description: "Turn on LED notifications light.",
    },
    {
      id: "contactJoining",
      title: "Contact joining",
      description: "Notify when a contact joins.",
    },
  ];

  const toggleSwitch = (id: string) => {
    setSwitchStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
        <motion.div  {...usePageAnimation()} className="p-6 shadow-sm rounded-lg bg-white mb-7 overflow-hidden">
        <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold leading-[17px]">Nofication Settings</h3>
        <p className="text-sm text-[#4B5675] mb-7"> Select how you'll be notified when the following changes occur.</p>

      {categories.map((category, idx) => (
        <div key={idx} className="grid grid-cols-12 mb-12 gap-3">
          <div className="col-span-12 sm:col-span-4">
            <p className="text-sm text-[#4B5675]">{category.title}</p>
          </div>

          <div className="col-span-12 sm:col-span-8 grid grid-cols-3 xl:grid-cols-4 gap-1">
            {commonOptions.map((opt) => (
              <div key={opt.value} className="flex items-center gap-1 sm:gap-2">
                <input
                  type="checkbox"
                  id={`${category.title}-${opt.value}`}
                  className="appearance-none w-5 h-5 bg-[#EEF0F3] border-none rounded cursor-pointer
                    checked:bg-[#3E97FF] checked:border-[#3E97FF] relative
                    checked:after:content-['✔'] checked:after:absolute checked:after:text-white
                    checked:after:font-bold checked:after:text-[12px] checked:after:left-[5px] checked:after:top-[1px]"
                />
                <label
                  htmlFor={`${category.title}-${opt.value}`}
                  className="text-sm text-[#4B5675] cursor-pointer"
                >
                  {opt.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

        <div className="my-8 border-t border-gray-100" />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 sm:col-span-4 mb-7 sm:mb-0">
          <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold leading-[17px]">
            Push Notify
          </h3>
          <p className="text-sm text-[#4B5675]">
            You will get only notifications you have enabled.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-8">
          {pushNotifyOptions.map((option) => (
            <div className="flex items-start gap-2 mb-6" key={option.id}>
              <input
                type="radio"
                id={option.id}
                name="pushNotify"
                checked={selectedRadio === option.id}
                onChange={() => setSelectedRadio(option.id)}
                className="h-4 w-4 text-[#3e97ff] border-gray-300 focus:ring-[#3e97ff]"
              />
              <label htmlFor={option.id} className="cursor-pointer">
                <h3 className="text-[#252F4A] text-sm mb-2 font-bold leading-[14px]">
                  {option.title}
                </h3>
                <p className="text-sm text-[#4B5675]">{option.description}</p>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 border-t border-gray-100" />
      <div className="grid grid-cols-12  gap-2">
        <div className="col-span-12 sm:col-span-4 mb-7 sm:mb-0">
          <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold leading-[17px]">
            Miscellaneous
          </h3>
          <p className="text-sm text-[#4B5675]">
            You will get only notifications you have enabled.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-8">
          {miscOptions.map((option) => (
            <div className="flex items-start gap-2 mb-6" key={option.id}>
              <Switch
                checked={switchStates[option.id]}
                onChange={() => toggleSwitch(option.id)}
                className="group inline-flex cursor-pointer h-5 w-11 items-center rounded-full bg-gray-100 transition data-[checked]:bg-[#3E97FF]"
              >
                <span className="size-3 translate-x-1 rounded-full bg-gray-500 group-data-[checked]:bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
              <label className="cursor-pointer">
                <h3 className="text-[#252F4A] text-sm mb-2 font-bold leading-[14px]">
                  {option.title}
                </h3>
                <p className="text-sm text-[#4B5675]">{option.description}</p>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 border-t border-gray-100" />
      <div className="grid grid-cols-12 gap-2 my-10">
            <div className="col-span-3 text-sm sm:hidden"></div>
            <div className="col-span-12 sm::col-span-9">
              <div className="flex items-center gap-2 justify-center">
                 <button className="px-5 py-2 rounded bg-[#3E97FF] text-sm text-white cursor-pointer">Save Changes</button>
                 <button className="px-5 py-2 rounded text-[#d13b4c] bg-[#d13b4c1a] hover:text-white hover:bg-[#d13b4c] transition-all duration-500 text-sm cursor-pointer">Reset</button>
              </div>
            </div>
      </div>
      </motion.div>
    </>
  )
}

export default AccoNotification
