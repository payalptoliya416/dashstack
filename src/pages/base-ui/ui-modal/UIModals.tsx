import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import UIOptionTable from "../UIOptionTable";
import type { Option } from "../../../types/UiType";

interface ButtonType {
  color: string;
  text: string;
}
const ModalOptions: Option[] = [
  {
    reference: "Dropdown",
    details: <>Wrap the dropdown's toggle (your button or link) and the dropdown menu within 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .dropdown
        </button> ,or another element that declares 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .dropdown
        </button> position: <br/>
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          relative;
        </button>. Ideally, you should use a 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
            &lt;button&gt;
        </button>
        element as the dropdown trigger, but the plugin will work with 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
            &lt;a&gt;
        </button>
         elements as well. The examples shown here use semantic 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
            &lt;ul&gt;
        </button> <br/>
        elements where appropriate, but custom markup is supported.
    </>,
  },
  {
    reference: "Split button",
    details: (
      <>
       Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .dropdown-toggle-split
        </button>
         for proper spacing around the dropdown caret. <br/>
         We use this extra class to reduce the horizontal
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          padding
        </button> on either side of the caret by 25% and remove the 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         margin-left
        </button> <br/> that's added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.
      </>
    ),
  },
  {
    reference: "Sizing",
    details: (
      <>
       Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.
      </>
    ),
  },
  {
    reference: "Dark dropdowns",
    details: (
      <>
       Opt into darker dropdowns to match a dark navbar or custom style by adding
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .dropdown-menu-dark
        </button> onto an existing
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .dropdown-menu
        </button> . No changes are required to the dropdown items.
      </>
    ),
  },
  {
    reference: "Centered",
    details: (
      <>
      Make the dropdown menu centered below the toggle with
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .dropdown-center
        </button>  on the parent element.
      </>
    ),
  },
  {
    reference: "Dropup",
    details: (
      <>
     Trigger dropdown menus above elements by adding
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .dropup
        </button> to the parent element.
      </>
    ),
  },
  {
    reference: "Dropup centered",
    details: (
      <>
    Make the dropup menu centered above the toggle with
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropup-center
        </button>  on the parent element.
      </>
    ),
  },
  {
    reference: "Dropend",
    details: (
      <>
   Trigger dropdown menus at the right of the elements by adding 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .dropend
        </button>   to the parent element.
      </>
    ),
  },
  {
    reference: "Dropstart",
    details: (
      <>
   Trigger dropdown menus at the left of the elements by adding
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       .dropstart
        </button>    to the parent element.
      </>
    ),
  },
  {
    reference: "Documentations",
    details: (
      <>
        Please visit:{" "}
        <a
          href="https://react-bootstrap.netlify.app/docs/components/accordion"
          className="text-[#252f4a] font-bold"
          target="_blank"
          rel="noreferrer"
        >
          https://react-bootstrap.netlify.app/docs/components/accordion
        </a>
      </>
    ),
  },
];

function UIModals() {
    const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentModalColor, setCurrentModalColor] = useState<string>("bg-white");

  // --- Modal control functions ---
  const openModals = (color: string) => {
    setCurrentModalColor(color);
    setIsModalOpen(true);
  };

  const closeModals = () => {
    setIsModalOpen(false);
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

  
  return (
    <>
      <div className="p-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Basic
        </div>
        <div className="p-4 sm:p-6">
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold"    onClick={openModal}>Launch Live Modal</button>
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
          {/* <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold">Primary</button>
          <button className="px-5 py-2 rounded bg-[#505863] text-white text-sm font-semibold">Secondary</button>
          <button className="px-5 py-2 rounded bg-[#25b865] text-white text-sm font-semibold">Success</button>
          <button className="px-5 py-2 rounded bg-[#02a0e4] text-white text-sm font-semibold">Info</button>
          <button className="px-5 py-2 rounded bg-[#e49e3d] text-white text-sm font-semibold">Warning</button>
          <button className="px-5 py-2 rounded bg-[#d13b4c] text-white text-sm font-semibold">Danger</button> */}
          {buttons.map((button) => (
          <button
            key={button.text}
            onClick={() => openModals(button.color)}
            className={`px-5 py-2 rounded-lg ${button.color} text-white text-sm font-semibold hover:opacity-80 transition-opacity shadow`}
          >
            {button.text}
          </button>
        ))}
        </div>
        </div>
        
         <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999999]" onClose={closeModals}>
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
                      onClick={closeModals}
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
                      onClick={closeModals}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors`}
                      onClick={closeModals}
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
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold">Usecase Success</button>
          <button className="px-5 py-2 rounded bg-[#d13b4c] text-white text-sm font-semibold">Usecase Danger</button>
          <button className="px-5 py-2 rounded bg-[#e49e3d] text-white text-sm font-semibold">Usecase Warning</button>
          <button className="px-5 py-2 rounded bg-[#02a0e4] text-white text-sm font-semibold">Usecase Info</button>
        </div>
        </div>

        <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Modal Position
        </div>
        <div className="p-4 sm:p-6 flex gap-2 items-center flex-wrap">
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold">Top Start</button>
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold">Usecase End</button>
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold">Bottom End</button>
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold">Bottom Start</button>
          <button className="px-5 py-2 rounded bg-[#3e97ff] text-white text-sm font-semibold">Top Center</button>
        </div>
        </div>
      </div>
      <UIOptionTable title="Options" options={ModalOptions} />
    </>
  );
}

export default UIModals;
