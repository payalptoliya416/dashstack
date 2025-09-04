
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Confirmation() {
    // --handleALert
  const handleALert = () => {
    MySwal.fire({
        html: `
        <div class="text-center">
            <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
          Are you sure?
            </h1>
            <p class='text-sm'>You won't be able to revert this!</p>
        </div>
        `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      buttonsStyling: false, 
      didOpen: () => {
        const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
        if (confirm)
          confirm.className =
            "bg-[#3E97FF] text-white px-4 py-2 rounded text-sm font-semibold";

        const cancel = document.querySelector(".swal2-cancel") as HTMLButtonElement;
        if (cancel)
          cancel.className =
            "bg-[#D13B4C] text-white px-4 py-2 rounded text-sm font-semibold ms-2";
      },
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          html: `
        <div class="text-center">
            <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
        Deleted!
            </h1>
            <p class='text-sm'>Your file has been deleted.</p>
        </div>
        `,
          icon: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm)
              confirm.className =
                "bg-[#3E97FF] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
      }
    });
  };
    // --handleConfirm
  const handleConfirm = () => {
   MySwal.fire({
      html: `
        <div class="text-center">
          <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
            Are you sure?
          </h1>
          <p class='text-sm'>You won't be able to revert this!</p>
        </div>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!", // confirm = delete
      cancelButtonText: "No, cancel!",      // cancel = cancel
      buttonsStyling: false,
      reverseButtons: true, // optional: swap positions
      didOpen: () => {
        const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
        if (confirm)
          confirm.className =
            "bg-[#3E97FF] hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold ms-2";

        const cancel = document.querySelector(".swal2-cancel") as HTMLButtonElement;
        if (cancel)
          cancel.className =
            "bg-[#6E7881] hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-semibold";
      },
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          html: `
            <div class="text-center">
              <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
                Deleted!
              </h1>
              <p class='text-sm'>Your file has been deleted.</p>
            </div>
          `,
          icon: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm)
              confirm.className =
                "bg-[#3E97FF] hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire({
          html: `
            <div class="text-center">
              <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
                Cancelled
              </h1>
              <p class='text-sm'>Your imaginary file is safe :)</p>
            </div>
          `,
          icon: "error",
          confirmButtonText: "OK",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm)
              confirm.className =
                "bg-[#3E97FF] hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
      }
    });
  };

//   --handleMixin
const handleMixin = ()=>{
MySwal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      html: `
              <h1 class="text-sm font-bold text-[#252f4a]">
               Signed in successfully
              </h1>
          `,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);

         const progressBar = document.querySelector(".swal2-timer-progress-bar") as HTMLDivElement;
       if (progressBar) {
        progressBar.style.backgroundColor = "#3E97FF"; // custom color
      }
      },
    });
}

  return (
    <>
    <div className="flex gap-1 items-center">
    <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handleALert}>Alert </button>
    <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handleConfirm}>Confirm</button>
    <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handleMixin}>Mixin </button>
    </div>
    </>
  )
}

export default Confirmation
