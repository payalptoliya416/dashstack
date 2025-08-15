import { Switch } from "@headlessui/react"
import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";

interface Integration {
  id: number;
  name: string;
  installs: string;
  icon: string;
  description: string;
  enabled: boolean;
}


const integrationsData: Integration[] = [
  {
    id: 1,
    name: "Dropbox",
    installs: "2,589,157 Installed",
    icon: "/images/in1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: true,
  },
  {
    id: 2,
    name: "Facebook",
    installs: "9,789,963 Installed",
    icon: "/images/in3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: false,
  },
  {
    id: 3,
    name: "Figma",
    installs: "2,245,325 Installed",
    icon: "/images/in2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: true,
  },
  {
    id: 4,
    name: "GitHub",
    installs: "5,478,962 Installed",
    icon: "/images/in4.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: false,
  },
  {
    id: 5,
    name: "Gmail",
    installs: "6,357,954 Installed",
    icon: "/images/in5.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: false,
  },
  {
    id: 6,
    name: "Instagram",
    installs: "3,754,359 Installed",
    icon: "/images/in6.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: true,
  },
];


function Integration() {

  const [integrations, setIntegrations] = useState<Integration[]>(integrationsData);

  const toggleSwitch = (id: number) => {
    setIntegrations((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <>
       <div className="p-6 shadow-sm rounded-lg bg-white mb-7">
         <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold leading-[17px]">
           Connected
            </h3>
            <p className="text-sm text-[#4B5675] mb-7">
            Display content from your connected accounts on your site
            </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {integrations.map((integration) => (
        <div key={integration.id} className="shadow-sm rounded-md bg-white">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex gap-5">
                <div className="w-[47px] h-[47px] rounded bg-[#f1f2f3] flex justify-center items-center p-2">
                  <img src={integration.icon} alt={integration.name} />
                </div>
                <div>
                  <h3 className="text-sm text-[#252F4A] font-bold">{integration.name}</h3>
                  <p className="text-[#4B5675] text-sm">{integration.installs}</p>
                </div>
              </div>

              <Switch
                checked={integration.enabled}
                onChange={() => toggleSwitch(integration.id)}
                className="group inline-flex cursor-pointer h-5 w-11 items-center rounded-full bg-gray-100 transition data-[checked]:bg-[#3E97FF]"
              >
                <span className="size-3 translate-x-1 rounded-full bg-gray-500 group-data-[checked]:bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </div>

            <p className="text-[#4B5675] text-sm my-7">{integration.description}</p>
          </div>

          <div className="px-6 py-4">
            <button className="py-2 px-5 rounded border border-gray-200 text-sm bg-[#f1f2f3] text-[#252f4a]">
              View Integration{" "}
              <SquareArrowOutUpRight className="inline-block ms-2" size={14} />
            </button>
          </div>
        </div>
      ))}
             </div>

              <div className="flex items-center justify-between]">
                <div>
                  <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold leading-[17px]">
           Available
            </h3>
            <p className="text-sm text-[#4B5675] mb-7">
           Display content from your connected accounts on your site </p>
                </div>
              </div>
       </div>
    </>
  )
}

export default Integration
