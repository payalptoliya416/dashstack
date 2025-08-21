import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type PositionModalProps = {
  open: boolean;
  onClose: () => void;
  position?: string; 
  children: React.ReactNode;
};

export default function PositionModal({
  open,
  onClose,
  position = "items-center justify-center",
  children,
}: PositionModalProps) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[999999]" onClose={onClose}>
        {/* backdrop */}
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

        {/* position wrapper */}
        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={`flex min-h-full p-4 text-center ${position}`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white align-middle shadow-xl transition-all p-10">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
