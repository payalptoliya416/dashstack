import { Dialog, Transition } from "@headlessui/react";
import { Fragment, type ReactNode } from "react";
import { BadgeCheck, CircleX, TriangleAlert, Info, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

// Define prop types
interface UsecaseModalProps {
  open: boolean;
  onClose: () => void;
  type: "success" | "danger" | "warning" | "info";
}

interface ModalConfig {
  color: string;
  icon: ReactNode;
  title: string;
  message: ReactNode;
  button: string;
}

// Reusable Modal Component
const UsecaseModal: React.FC<UsecaseModalProps> = ({ open, onClose, type }) => {
  const config: Record<UsecaseModalProps["type"], ModalConfig> = {
    success: {
      color: "#3e97ff",
      icon: <BadgeCheck className="w-7 h-7" />,
      title: "Congratulations!",
      message: (
        <>
        <h3 className="text-[#4B5675] mb-4 text-lg">
          You've successfully bought <span className="font-black">0.365 BTC</span> for
          <span className="font-black"> $350 USD.</span>
        </h3>
         <p className="text-sm text-[#4B5675] mb-6">Learn when you receive bitcoin in your wallet. <Link to='' className="font-bold">Click here</Link></p>
        </>
      ),
      button: "OK",
    },
    danger: {
      color: "#d13b4c",
      icon: <CircleX className="w-7 h-7" />,
      title: "Unable to Process!",
      message: (
        <>
        <h3 className="text-[#4B5675] mb-4 text-lg">
          We are sorry, we were unable to process your payment. Please try again later.
        </h3>
         <p className="text-sm text-[#4B5675] mb-6">Learn when you receive bitcoin in your wallet. <Link to='' className="font-bold">Click here</Link></p>
        </>
      ),
      button: "Return",
    },
    warning: {
      color: "#e49e3d",
      icon: <TriangleAlert className="w-7 h-7" />,
      title: "Reset your Password!",
      message: (
        <input
          type="text"
          placeholder="Email for password link"
          className="px-3 py-2 rounded border border-gray-100 mb-6 focus:outline-none text-sm w-full"
        />
      ),
      button: "Reset Now",
    },
    info: {
      color: "#02a0e4",
      icon: <Info className="w-7 h-7" />,
      title: "Incorrect Information!",
      message: (
        <h3 className="text-[#4B5675] mb-4 text-lg">
          In this example, you can see a form where you can request some additional information from the customer when they land on the app page.
        </h3>
      ),
      button: "Continue",
    },
  };

  const { color, icon, title, message, button } = config[type];

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[999999]" onClose={onClose}>
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white align-middle shadow-xl transition-all p-10 flex flex-col items-center">
                <div
                  className="flex justify-center items-center w-20 h-20 rounded-full mb-7"
                  style={{ backgroundColor: color + "1a", color }}
                >
                  {icon}
                </div>

                <h2 className="text-2xl mb-4 font-bold" style={{ color }}>
                  {title}
                </h2>

                {message}

                <button
                  className="rounded px-5 py-2 text-white mb-8 w-full max-w-52 cursor-pointer"
                  style={{ backgroundColor: color }}
                  onClick={onClose}
                >
                  {button}
                </button>

                <p className="text-sm text-[#4B5675] mb-4 pt-6">
                  Earn up to $5 USD for each friend you refer!
                  <Link to="" className="font-bold">
                    {" "}Invite friends
                  </Link>
                </p>

                <div className="flex justify-center items-center gap-5">
                  <Link to="">
                    <Facebook size={16} className="text-[#3b5998]" />
                  </Link>
                  <Link to="">
                    <Twitter size={16} className="text-[#1da1f2]" />
                  </Link>
                  <Link to="">
                    <Instagram size={16} className="text-[#e4405f]" />
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UsecaseModal;
