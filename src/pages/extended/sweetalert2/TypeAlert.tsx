
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function TypeAlert() {
      // --handleSuccess
 const handleSuccess = () => {
    MySwal.fire({
            html: `
        <div class="text-center">
            <h1 class="text-sm  text-[#252f4a] mb-2">
          Success: Good job!
            </h1>
        </div>
        `,
          icon: "success",
          confirmButtonText: "Ok, got it!",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm) confirm.className = "bg-[#25B865] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
  };
      // --handleInfo
 const handleInfo = () => {
    MySwal.fire({
            html: `
        <div class="text-center">
            <h1 class="text-sm  text-[#252f4a] mb-2">
        Info: About information
            </h1>
        </div>
        `,
          icon: "info",
          confirmButtonText: "Ok, got it!",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm) confirm.className = "bg-[#02A0E4] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
  };
      // --handleWarning
 const handleWarning = () => {
    MySwal.fire({
            html: `
        <div class="text-center">
            <h1 class="text-sm  text-[#252f4a] mb-2">
         Warning: Your attention
            </h1>
        </div>
        `,
          icon: "warning",
          confirmButtonText: "Ok, got it!",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm) confirm.className = "bg-[#E49E3D] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
  };
      // --handleDanger
 const handleDanger = () => {
    MySwal.fire({
            html: `
        <div class="text-center">
            <h1 class="text-sm  text-[#252f4a] mb-2">
         Error: Something error
            </h1>
        </div>
        `,
          icon: "error",
          confirmButtonText: "Ok, got it!",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm) confirm.className = "bg-[#D13B4C] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
  };
      // --handleSecondary
 const handleSecondary = () => {
    MySwal.fire({
            html: `
        <div class="text-center">
            <h1 class="text-sm  text-[#252f4a] mb-2">
         Question: What's the matter?
            </h1>
        </div>
        `,
          icon: "question",
          confirmButtonText: "Ok, got it!",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm) confirm.className = "bg-[#505863] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
  };

  return (
    <div className="flex gap-1 items-center flex-wrap">
    <button className="px-5 py-2 rounded bg-[#25B865] text-white text-sm font-semibold" onClick={handleSuccess}>Success </button>
    <button className="px-5 py-2 rounded bg-[#02A0E4] text-white text-sm font-semibold" onClick={handleInfo}>Info</button>
    <button className="px-5 py-2 rounded bg-[#E49E3D] text-white text-sm font-semibold" onClick={handleWarning}>Warning </button>
    <button className="px-5 py-2 rounded bg-[#D13B4C] text-white text-sm font-semibold" onClick={handleDanger}>Danger </button>
    <button className="px-5 py-2 rounded bg-[#505863] text-white text-sm font-semibold" onClick={handleSecondary}>Secondary </button>
    </div>
  )
}

export default TypeAlert
