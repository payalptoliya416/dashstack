import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import UIOptionTable from "../UIOptionTable";
import UsecaseModal from "./UsecaseModal";
import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PositionModal from "./PositionModal";
import { ModalOptions } from "./ModalData";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";
interface ButtonType {
  color: string;
  text: string;
}

function UIModals() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

   const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);
  const [currentModalColor, setCurrentModalColor] = useState<string>("bg-white");

  // --- Modal control functions ---
  const openThemeModal = (color: string) => {
    setCurrentModalColor(color);
    setIsThemeModalOpen(true);
  };

  const closeThemeModal = () => {
    setIsThemeModalOpen(false);
  };

  // --- Buttons array ---
  const buttons: ButtonType[] = [
    { color: "bg-[#3e97ff]", text: "Primary" },
    { color: "bg-[#505863]", text: "Secondary" },
    { color: "bg-[#25b865]", text: "Success" },
    { color: "bg-[#02a0e4]", text: "Info" },
    { color: "bg-[#e49e3d]", text: "Warning" },
    { color: "bg-[#d13b4c]", text: "Danger" },
  ];
    // ---usecase modal
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<"success" | "danger" | "warning" | "info">("success");

  const openModala = (type: "success" | "danger" | "warning" | "info") => {
    setModalType(type);
    setOpen(true);
  };

  // --positon modal

const [isModal, setIsModal] = useState(false);
  const [modalPosition, setModalPosition] = useState("items-center justify-center");

  const openPositionModal = (pos: string) => {
    setModalPosition(pos);
    setIsModal(true);
  };
  return (
    <>
      <motion.div
                  {...usePageAnimation()}
                  className="overflow-hidden">
      <div className="p-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Basic
        </div>
        <div className="p-4 sm:p-6">
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold cursor-pointer"    onClick={openModal}>Launch Live Modal</button>
        </div>
        </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[99999]" onClose={closeModal}>
          {/* Modal backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-sm bg-black/20" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            {/* The main change is here: using items-start and pt-16 for top alignment */}
            <div className="flex min-h-full items-start justify-center p-4 text-center pt-16">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* Modal panel and content */}
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold p-6 leading-6 text-gray-900 flex justify-between items-center"
                  >
                    Modal heading
                    <button
                      type="button"
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-500 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </Dialog.Title>
                  <div className="p-6 border-y border-gray-100">
                    <p className="text-sm text-gray-500">
                    Woohoo, you are reading this text in a modal!
                    </p>
                  </div>

                  <div className="p-6 flex justify-end space-x-2">
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-[#d13b4c] bg-[#d13b4c1a] rounded-lg hover:bg-[#d13b4c1a] transition-colors"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-[#3e97ff] transition-colors"
                      onClick={closeModal}
                    >
                      Save Changes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

        <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Modal Theme
        </div>
        <div className="p-4 sm:p-6 flex gap-2 items-center flex-wrap">
          {buttons.map((button) => (
          <button
            key={button.text}
            onClick={() => openThemeModal(button.color)}
            className={`px-5 py-2 rounded-lg ${button.color} text-white text-sm font-semibold hover:opacity-80 transition-opacity shadow cursor-pointer`}
          >
            {button.text}
          </button>
        ))}
        </div>
        </div>
        
         <Transition appear show={isThemeModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999999]" onClose={closeThemeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-sm bg-black/20" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 text-center pt-16">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full max-w-xl transform overflow-hidden rounded-2xl ${currentModalColor} text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className={`text-xl font-medium leading-6 p-6 border-b ${
                      currentModalColor === "bg-white" ? "text-gray-900" : "text-white"
                    } flex justify-between items-center`}
                  >
                    Modal heading
                    <button
                      type="button"
                      onClick={closeThemeModal}
                      className="text-white hover:opacity-80 transition-opacity"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </Dialog.Title>

                  <div className="mt-2">
                    <p
                      className={`text-sm p-6 border-b ${
                        currentModalColor === "bg-white" ? "text-gray-500" : "text-white"
                      }`}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis et, necessitatibus cupiditate nemo corrupti possimus nesciunt ipsa numquam ea earum velit laboriosam eos omnis officia nam similique neque fuga pariatur. Vitae similique porro adipisci sunt? Sequi, qui dolorem veritatis nobis soluta deserunt illum iure. Asperiores neque eveniet veritatis voluptatem reprehenderit eius repellendus beatae cum ullam, fugit, vero rerum quis consequatur ratione, a facere voluptatum minus doloribus autem molestias. Temporibus deserunt ipsam unde neque impedit enim, fugiat ullam. Quo recusandae cumque nobis, placeat, modi voluptates nemo dicta ullam voluptate laudantium aliquid necessitatibus sit, aliquam deserunt atque dolorum molestiae? Tempora, nostrum nam?
                    </p>
                  </div>

                  <div className="flex justify-end space-x-2 p-6">
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      onClick={closeThemeModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors`}
                      onClick={closeThemeModal}
                    >
                      Save Changes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
        </Transition>

        <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Modal Usecase
        </div>
        <div className="p-4 sm:p-6 flex gap-2 items-center flex-wrap">
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold" onClick={() => openModala("success")}>Usecase Success</button>
          <button className="px-5 py-2 rounded bg-[#d13b4c] text-white text-sm font-semibold" onClick={() => openModala("danger")}>Usecase Danger</button>
          <button className="px-5 py-2 rounded bg-[#e49e3d] text-white text-sm font-semibold" onClick={() => openModala("warning")}>Usecase Warning</button>
          <button className="px-5 py-2 rounded bg-[#02a0e4] text-white text-sm font-semibold"  onClick={() => openModala("info")}>Usecase Info</button>
        </div>
        <UsecaseModal
        open={open}
        onClose={() => setOpen(false)}
        type={modalType}
      />
        </div>

        <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Modal Position
        </div>
        <div className="p-4 sm:p-6 flex gap-2 items-center flex-wrap">
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold" onClick={() => openPositionModal("items-start justify-start")}>Top Start</button>
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold" onClick={() => openPositionModal("items-start justify-end")}>Usecase End</button>
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold" onClick={() => openPositionModal("items-end justify-end")}>Bottom End</button>
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold" onClick={() => openPositionModal("items-end justify-start")}>Bottom Start</button>
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold" onClick={() => openPositionModal("items-start justify-center")}>Top Center</button>
        </div>
        
        </div>
        <PositionModal
        open={isModal}
        onClose={() => setIsModal(false)}
        position={modalPosition}
      >
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-20 h-20 rounded-full mb-7 bg-[#e9f8f0]">
            <BadgeCheck className="w-7 h-7 text-[#25b865]" />
          </div>
          <h2 className="text-2xl mb-4 font-bold">Congratulations!</h2>
          <h3 className="text-[#4B5675] mb-4 text-lg">
            You’ve successfully bought <span className="font-black">0.365 BTC</span>
          </h3>
           <p className="text-sm text-[#4B5675]">Learn when you receive bitcoin in your wallet. <Link to='' className="font-bold">Click here</Link></p>
        </div>
      </PositionModal>
      </div>
                  </motion.div>
      <UIOptionTable title="Options" options={ModalOptions} />
    </>
  );
}

export default UIModals;
