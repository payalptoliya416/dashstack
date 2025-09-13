
import { ArrowRight, Loader2, Plus, SquareArrowOutUpRight, X } from "lucide-react";
import { Fragment, useState } from "react";
import { Switch, Dialog, Transition } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";
import type { Available, Integration } from "../../types/AccountSetting";

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

const availableData: Available[] = [
  {
    id: 1,
    name: "Gitlab",
    installs: "2,589,157 Installed",
    icon: "/images/in7.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: true,
  },
  {
    id: 2,
    name: "Gitlab",
    installs: "9,789,963 Installed",
    icon: "/images/in8.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: false,
  },
  {
    id: 3,
    name: "Google Drive",
    installs: "2,245,325 Installed",
    icon: "/images/in9.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: true,
  },
  {
    id: 4,
    name: "Shopify",
    installs: "5,478,962 Installed",
    icon: "/images/ex1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: false,
  },
  {
    id: 5,
    name: "Spotify",
    installs: "6,357,954 Installed",
    icon: "/images/in10.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: true,
  },
  {
    id: 6,
    name: "Whatsapp",
    installs: "3,754,359 Installed",
    icon: "/images/in11.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates error veritatis pariatur quia exercitationem! Repudiandae corporis quibusdam",
    enabled: true,
  },
];

function IntegrationSeting() {

  const [integrations, setIntegrations] = useState<Integration[]>(integrationsData);
  const toggleSwitch = (id: number) => {
  setIntegrations((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, enabled: !item.enabled } : item
    )
  );

  const integration = integrations.find((i) => i.id === id);
  if (integration) {
    toast.success(
      `${integration.name} Sync is ${integration.enabled ? "OFF" : "ON"}`
    );
  }
};

  const [available] = useState<Available[]>(availableData);
  const [selected, setSelected] = useState<Integration | null>(null);
  const [selectedAvailable, setSelectedAvailable] = useState<Available | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUninstall = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success(`Uninstalled ${selected?.name} successfully`);
      }, 2000);
  }

  const handleAvailableUninstall = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success(`Installed ${selectedAvailable?.name} successfully`);
      }, 2000);
  }
    
  return (
    <>
     <motion.div {...usePageAnimation()}  className="overflow-hidden">
     <Toaster 
            position="top-center" 
            reverseOrder={false} 
            toastOptions={{
              duration: 3000,
              style: {
                fontSize: '14px',
                marginTop:'5px',
                zIndex:'999'
              },
            }}
          />
      <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold leading-[17px]">
           Connected
       </h3>
      <p className="text-sm text-lightgray mb-7">
            Display content from your connected accounts on your site
      </p>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
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
                  <p className="text-lightgray text-sm">{integration.installs}</p>
                </div>
              </div>

              <Switch
                checked={integration.enabled}
                onChange={() => toggleSwitch(integration.id)}
                className="group inline-flex cursor-pointer h-5 w-11 items-center rounded-full bg-gray-100 transition data-[checked]:bg-blue"
              >
                <span className="size-3 translate-x-1 rounded-full bg-gray-500 group-data-[checked]:bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </div>

            <p className="text-lightgray text-sm my-7">{integration.description}</p>
          </div>

          <div className="px-6 py-4">
            <button className="py-2 px-5 rounded border border-gray-200 text-sm bg-[#f1f2f3] text-darkgray  cursor-pointer"   onClick={() => setSelected(integration)}>
              View Integration{" "}
              <SquareArrowOutUpRight className="inline-block ms-2" size={14} />
            </button>
          </div>
        </div>
      ))}
      </div>
      <div className="flex sm:items-center justify-between  mb-7 flex-col gap-4 sm:flex-row">
         <div>
        <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold leading-[17px]"> Available</h3>
        <p className="text-sm text-lightgray">Display content from your connected accounts on your site </p>
        </div>
       <h3 className="group text-blue text-sm cursor-pointer">  All Available  <ArrowRight className="inline-block text-blue ms-1 transition-transform duration-200 group-hover:translate-x-1" size={12}/></h3>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
      {available.map((integration) => (
        <div key={integration.id} className="shadow-sm rounded-md bg-white">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex gap-5">
                <div className="w-[47px] h-[47px] rounded bg-[#f1f2f3] flex justify-center items-center p-2">
                  <img src={integration.icon} alt={integration.name} />
                </div>
                <div>
                  <h3 className="text-sm text-[#252F4A] font-bold">{integration.name}</h3>
                  <p className="text-lightgray text-sm">{integration.installs}</p>
                </div>
              </div>

           {integration.enabled ? (
          <button className="px-2 border rounded-full border-[#25b865] text-[#25b865] text-xs  cursor-pointer">
            Verified
          </button>
        ) : (
          <button className="px-2 border rounded-full border-[#d13b4c] text-[#d13b4c] text-xs  cursor-pointer">
            Unverified
          </button>
        )}
            </div>

            <p className="text-lightgray text-sm my-7">{integration.description}</p>
          </div>

          <div className="px-6 py-4">
            <button className="py-2 px-5 rounded border  cursor-pointer border-gray-200 text-sm bg-[#f1f2f3] text-darkgray"   onClick={() => setSelectedAvailable(integration)}>
              <Plus className="inline-block me-2" size={14} />
             Install Now
            </button>
          </div>
        </div>
      ))}
      </div>

      {/* --modal-- */}
    <Transition appear show={!!selectedAvailable} as={Fragment}>
    <Dialog as="div" className="relative z-[99999]" onClose={() => setSelected(null)}>
        <Transition.Child
        as={Fragment}
        enter="ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
        <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <Dialog.Panel className="w-full max-w-[600px] rounded-lg bg-white shadow-lg">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <Dialog.Title className="text-lg font-bold text-darkgray">
                {selectedAvailable?.name}
                </Dialog.Title>
                <button onClick={() => setSelectedAvailable(null)}>
                <X className="w-5 h-5 text-gray-500  cursor-pointer" />
                </button>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                <div className="flex gap-5">
                    <div className="w-[47px] h-[47px] rounded bg-[#f1f2f3] flex justify-center items-center p-2">
                    <img src={selectedAvailable?.icon} alt={selectedAvailable?.name} />
                    </div>
                    <div>
                    <h3 className="text-sm text-[#252F4A] font-bold">{selectedAvailable?.name}</h3>
                    <p className="text-lightgray text-sm">{selectedAvailable?.installs}</p>
                    </div>
                </div>
                </div>

                <p className="text-lightgray text-sm mb-6"><strong>Description:</strong>  {selectedAvailable?.description}</p>
            </div>
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200">
                <button
                onClick={() => setSelectedAvailable(null)}
                className="px-4 py-2 text-sm rounded text-[#d13b4c]  cursor-pointer"
                >
                Close
                </button>
                <button
                    onClick={handleAvailableUninstall}
                    disabled={loading}
                    className={`px-4 py-2 text-sm rounded text-white bg-[#25b865] hover:bg-[#25b865]  cursor-pointer flex items-center justify-center gap-2 
                    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#25b865] hover:bg-[#25b865]"}`}
                >
                    {loading ? (
                    <>
                        <Loader2 className="animate-spin" size={16} /> Install Now
                    </>
                    ) : (
                    "Install Now"
                    )}
                </button>
            </div>
            </Dialog.Panel>
        </Transition.Child>
        </div>
    </Dialog>
    </Transition>

      {/* --selected modal-- */}
    <Transition appear show={!!selected} as={Fragment}>
    <Dialog as="div" className="relative z-[99999]" onClose={() => setSelected(null)}>
        {/* Overlay */}
        <Transition.Child
        as={Fragment}
        enter="ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
        <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <Dialog.Panel className="w-full max-w-[600px] rounded-lg bg-white shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <Dialog.Title className="text-lg font-bold text-darkgray">
                {selected?.name}
                </Dialog.Title>
                <button onClick={() => setSelected(null)} >
                <X className="w-5 h-5 text-gray-500  cursor-pointer" />
                </button>
            </div>

            {/* Body */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                <div className="flex gap-5">
                    <div className="w-[47px] h-[47px] rounded bg-[#f1f2f3] flex justify-center items-center p-2">
                    <img src={selected?.icon} alt={selected?.name} />
                    </div>
                    <div>
                    <h3 className="text-sm text-[#252F4A] font-bold">{selected?.name}</h3>
                    <p className="text-lightgray text-sm">{selected?.installs}</p>
                    </div>
                </div>

               
           {/* {selected.enabled === true ? (
                <button className="px-2 border rounded-full border-[#25b865] text-[#25b865] text-xs">
                    Verified
                </button>
                ) : (
                <button className="px-2 border rounded-full border-[#d13b4c] text-[#d13b4c] text-xs">
                    Unverified
                </button>
                )} */}
                </div>

                <p className="text-lightgray text-sm mb-6"><strong>Description:</strong>  {selected?.description}</p>
            </div>

            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200">
                <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 text-sm rounded text-[#d13b4c]  cursor-pointer"
                >
                Close
                </button>
                <button
                    onClick={handleUninstall}
                    disabled={loading}
                    className={`px-4 py-2 text-sm rounded text-white flex items-center justify-center gap-2  cursor-pointer bg-[#d13b4c] hover:bg-[#d13b4c] 
                    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#d13b4c] hover:bg-[#d13b4c] "}`}
                >
                    {loading ? (
                    <>
                        <Loader2 className="animate-spin" size={16} /> UnInstall...
                    </>
                    ) : (
                    "UnInstall"
                    )}
                </button>
            </div>
            </Dialog.Panel>
        </Transition.Child>
        </div>
    </Dialog>
    </Transition>
      </motion.div>
    </>
  )
}

export default IntegrationSeting
