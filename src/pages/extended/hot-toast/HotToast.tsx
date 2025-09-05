import { Toaster, toast } from "react-hot-toast";

function HotToast() {
  return (
    <>
      {/* Toast container */}
      <Toaster />

      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Toast Type
        </div>
        <div className="p-4 sm:p-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => toast.success("This didn't work.")}
            className="px-5 py-2 rounded text-sm bg-[#25B865] text-white font-semibold"
          >
            Success
          </button>
          <button
            onClick={() => toast.error("Something went wrong!")}
            className="px-5 py-2 rounded text-sm bg-[#D13B4C] text-white font-semibold"
          >
            Error
          </button>
          <button
            onClick={() => toast("👏 Good Job!")}
            className="px-5 py-2 rounded text-sm bg-[#E49E3D] text-white font-semibold"
          >
            Emoji
          </button>
          <button
            onClick={() =>
              toast("👏 Hello Darkness!", {
                style: {
                  background: "#252F4A",
                  color: "#fff",
                },
              })
            }
            className="px-5 py-2 rounded text-sm bg-[#252F4A] text-white font-semibold"
          >
            Dark
          </button>
          <button
        onClick={() => {
          toast((t) => (
            <div className="flex items-center gap-2">
              Custom and <strong>bold</strong>
              <span
                className="py-1 px-[10px] bg-[#FAEBED] text-[#D14B3C] text-sm cursor-pointer rounded"
                onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </span>
            </div>
          ));
        }}
        className="px-5 py-2 rounded text-sm bg-[#3E97FF] text-white font-semibold"
      >
        Content
      </button>
          <button
            onClick={() =>
              toast.success("Look at my styles.", {
                style: { background: "#fff", color: "#02A0E4", borderColor: '#02A0E4' },
                iconTheme: {
                  primary: "#02A0E4",
                  secondary: "#fff",
                },
              })
            }
            className="px-5 py-2 rounded text-sm bg-[#02A0E4] text-white font-semibold"
          >
            Themed
          </button>
        </div>
      </div>

      {/* Toast Position Section */}
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Toast Position
        </div>
        <div className="p-4 sm:p-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => toast.success("Position set to top-left.", { position: "top-left" })}
            className="px-5 py-2 rounded text-sm bg-[#3E97FF] text-white font-semibold"
          >
            top-left
          </button>
          <button
            onClick={() => toast.success("Position set to top-center.", { position: "top-center" })}
            className="px-5 py-2 rounded text-sm bg-[#3E97FF] text-white font-semibold"
          >
            top-center
          </button>
          <button
            onClick={() => toast.success("Position set to top-right.", { position: "top-right" })}
            className="px-5 py-2 rounded text-sm bg-[#3E97FF] text-white font-semibold"
          >
            top-right
          </button>
          <button
            onClick={() => toast("Position set to bottom-left.", { position: "bottom-left" })}
            className="px-5 py-2 rounded text-sm bg-[#3E97FF] text-white font-semibold"
          >
            bottom-left
          </button>
          <button
            onClick={() => toast.success("Position set to bottom-center.", { position: "bottom-center" })}
            className="px-5 py-2 rounded text-sm bg-[#3E97FF] text-white font-semibold"
          >
            bottom-center
          </button>
          <button
            onClick={() => toast.success("Position set to bottom-right.", { position: "bottom-right" })}
            className="px-5 py-2 rounded text-sm bg-[#3E97FF] text-white font-semibold"
          >
            bottom-right
          </button>
        </div>
      </div>
            <div className="rounded-lg shadow-md border border-gray-200 bg-white mt-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          <h3 className="font-bold text-[17px] text-[#252f4a]">Uses Instruction</h3>
        </div>
        <div className="py-4 px-6 border-b border-gray-200">
          <p className=" text-sm text-[#4B5675]">HotToast is delivered primarily via npm
          <span className="text-[#e83e8c] py-[3px] px-2 rounded bg-[#f1f2f3] text-sm w-max ms-2">
        npm install react-hot-toast
          </span>
          </p>
        </div>
          <div className="py-4 px-6">
             <p className=" text-sm text-[#4B5675]">For full documentation please visit the link: <a href="https://react-hot-toast.com/docs" className=" break-all"><strong className="underline">https://react-hot-toast.com/docs</strong></a></p>
          </div>
      </div>
    </>
  );
}

export default HotToast;
