
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Positioned() {
    // --handletopStart
 const handletopStart = () => {
    MySwal.fire({
          position: "top-start", 
            html: `
        <div class="text-center">
            <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
           Your work has been saved
            </h1>
        </div>
        `,
          icon: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm) confirm.className = "bg-[#3E97FF] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
  };
    // --handletopEnd
 const handletopEnd = () => {
    MySwal.fire({
          position: "top-end", 
            html: `
        <div class="text-center">
            <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
           Your work has been saved
            </h1>
        </div>
        `,
          icon: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm) confirm.className = "bg-[#3E97FF] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });}
    // --handlebottomStart
 const handleBottomStart = () => {
    MySwal.fire({
          position: "bottom-start", 
            html: `
        <div class="text-center">
            <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
           Your work has been saved
            </h1>
        </div>
        `,
          icon: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm) confirm.className = "bg-[#3E97FF] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
  };
    // --handleBottomEnd
 const handleBottomEnd = () => {
    MySwal.fire({
          position: "bottom-end", 
            html: `
        <div class="text-center">
            <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
           Your work has been saved
            </h1>
        </div>
        `,
          icon: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm) confirm.className = "bg-[#3E97FF] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
  };
  return (
    <div className="flex gap-1 items-center">
    <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handletopStart}>TopStart </button>
    <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handletopEnd}>TopEnd</button>
    <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handleBottomStart}>BottomStart </button>
    <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handleBottomEnd}>BottomEnd </button>
    </div>
  )
}

export default Positioned
