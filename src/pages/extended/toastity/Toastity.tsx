import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

function Toastity() {
  // === Positions ===
  const notify = (position: any) =>
    toast("Wow! This is a toast!", { position });

  // === States ===
  const notifySuccess = () => toast.success(" Success! Operation done.");
  const notifyError = () => toast.error(" Error! Something went wrong.");
  const notifyWarning = () => toast.warning(" Warning! Please check.");
  const notifyInfo = () => toast.info(" Info! Read carefully.");
  const notifyCustom = () =>
    toast(
      <div>
        Custom and <strong>bold</strong> message 🎉
      </div>
    );

  // === Custom Examples ===
  const notifyWithTitle = () =>
    toast(
      <div>
        <h4 className="font-bold">Title Here</h4>
        <p>Message with a title line</p>
      </div>
    );

  const notifyNoIcon = () =>
    toast("No icon version toast!", {
      icon: false,
    });

  const notifyDark = () =>
    toast("🌙 Dark version toast", {
      theme: "dark",
    });

  return (
     <motion.div  {...usePageAnimation()} className="overflow-hidden">
      <ToastContainer
         style={{ zIndex: 999999 }} 
      />

      {/* === Positions === */}
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Position
        </div>
        <div className="p-4 sm:p-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => notify("top-left")}
            className="px-5 py-2 rounded text-sm bg-blue text-white font-semibold"
          >
            Top Left
          </button>
          <button
            onClick={() => notify("top-center")}
            className="px-5 py-2 rounded text-sm bg-blue text-white font-semibold"
          >
            Top Center
          </button>
          <button
            onClick={() => notify("top-right")}
            className="px-5 py-2 rounded text-sm bg-blue text-white font-semibold"
          >
            Top Right
          </button>
          <button
            onClick={() => notify("bottom-left")}
            className="px-5 py-2 rounded text-sm bg-blue text-white font-semibold"
          >
            Bottom Left
          </button>
          <button
            onClick={() => notify("bottom-center")}
            className="px-5 py-2 rounded text-sm bg-blue text-white font-semibold"
          >
            Bottom Center
          </button>
          <button
            onClick={() => notify("bottom-right")}
            className="px-5 py-2 rounded text-sm bg-blue text-white font-semibold"
          >
            Bottom Right
          </button>
        </div>
      </div>

      {/* === States === */}
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          States
        </div>
        <div className="p-4 sm:p-6 flex flex-wrap items-center gap-2">
          <button
            onClick={notifySuccess}
            className="px-5 py-2 rounded text-sm bg-[#25B865] text-white font-semibold"
          >
            Success
          </button>
          <button
            onClick={notifyError}
            className="px-5 py-2 rounded text-sm bg-[#D13B4C] text-white font-semibold"
          >
            Error
          </button>
          <button
            onClick={notifyWarning}
            className="px-5 py-2 rounded text-sm bg-[#E49E3D] text-white font-semibold"
          >
            Warning
          </button>
          <button
            onClick={notifyInfo}
            className="px-5 py-2 rounded text-sm bg-[#02A0E4] text-white font-semibold"
          >
            Info
          </button>
          <button
            onClick={notifyCustom}
            className="px-5 py-2 rounded text-sm bg-blue text-white font-semibold"
          >
            Custom
          </button>
        </div>
      </div>

      {/* === Custom Examples === */}
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Custom
        </div>
        <div className="p-4 sm:p-6 flex flex-wrap items-center gap-2">
          <button
            onClick={notifyWithTitle}
            className="px-5 py-2 rounded text-sm bg-[#25B865] text-white font-semibold"
          >
            Message With Title
          </button>
          <button
            onClick={notifyNoIcon}
            className="px-5 py-2 rounded text-sm bg-blue text-white font-semibold"
          >
            No Icon Version
          </button>
          <button
            onClick={notifyDark}
            className="px-5 py-2 rounded text-sm bg-[#252F4A] text-white font-semibold"
          >
            Dark Version
          </button>
        </div>
      </div>

      {/* === Docs Section === */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mt-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          <h3 className="font-bold text-[17px] text-darkgray">
            Uses Instruction
          </h3>
        </div>
        <div className="py-4 px-6 border-b border-gray-200">
          <p className=" text-sm text-lightgray">
            Toastify is delivered primarily via npm.
          </p>
        </div>
        <div className="py-4 px-6">
          <p className=" text-sm text-lightgray">
            For full documentation please visit the link:{" "}
            <a
              href="https://fkhadra.github.io/react-toastify/installation"
              className=" break-all"
            >
              <strong className="underline">
                https://fkhadra.github.io/react-toastify/installation
              </strong>
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Toastity;
