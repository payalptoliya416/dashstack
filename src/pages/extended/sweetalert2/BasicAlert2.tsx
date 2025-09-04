
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function BasicAlert2() {

    // --basic 
  const handleClick = () => {
    MySwal.fire({
      html: `
        <div class="text-center">
          <h1 class="text-xl font-bold text-gray-900 mb-2 pt-7">
           Any fool can use a computer
          </h1>
        </div>
      `,
      showConfirmButton: true,
      confirmButtonText: "OK",
      buttonsStyling: false, 
      didOpen: () => {
        const btn = document.querySelector(".swal2-confirm") as HTMLButtonElement;
        if (btn) {
          btn.className =
            "bg-[#3E97FF] hover:bg-blue-600 text-white px-4 mb-3 py-2 rounded text-sm font-semibold";
        }
      },
    });
  };
   //   --withTitle
  const handleWithTitleClick = () => {
    MySwal.fire({
      html: `
        <div class="text-center">
          <h1 class="text-xl font-bold text-gray-900 mb-2 pt-7">
           The Internet?
          </h1>
          <p class="text-sm text-[#6B7177]">That thing is still around?</p>
        </div>
      `,
      showConfirmButton: true,
      confirmButtonText: "OK",
      buttonsStyling: false, 
      icon: "question",
      didOpen: () => {
        const btn = document.querySelector(".swal2-confirm") as HTMLButtonElement;
        if (btn) {
          btn.className =
            "bg-[#3E97FF] hover:bg-blue-600 text-white px-4 mb-3 py-2 rounded text-sm font-semibold";
        }
         const icon = document.querySelector(".swal2-icon") as HTMLDivElement;
      if (icon) {
        icon.className =
          "swal2-icon swal2-question text-[#87adbd] border-2 border-[#C9DAE1] !rounded-full !w-[76px] !h-[76px]";
      }
      },
    });
  };
  //   --withfooter
    const handleWithFooterClick = () => {
    MySwal.fire({
        html: `
        <div class="text-center">
            <h1 class="text-xl font-bold text-gray-900 mb-2 pt-7">
            Oops...
            </h1>
            <p class="text-sm text-[#6B7177]">Something went wrong!</p>
        </div>
        `,
        footer: `
        <div class="text-center text-sm text-[#353f4a] mb-2 mt-3 font-bold">
            Why do I have this issue?
        </div>
        `,
        showConfirmButton: true,
        confirmButtonText: "OK",
        buttonsStyling: false, 
        icon: "error",
        didOpen: () => {
        const btn = document.querySelector(".swal2-confirm") as HTMLButtonElement;
        if (btn) {
            btn.className =
            "bg-[#3E97FF] hover:bg-blue-600 text-white px-4 mb-3 py-2 rounded text-sm font-semibold";
        }

        const icon = document.querySelector(".swal2-icon") as HTMLDivElement;
        if (icon) {
            icon.classList.add(
            "swal2-icon",
            "swal2-error",
            "swal2-animate-error-icon"
            );
            icon.style.borderColor = "#F27474"; 
            icon.style.color = "#F27474"; 
            icon.style.width = "76px";
            icon.style.height = "76px";
            icon.style.borderRadius = "50%";
        }

        const footer = document.querySelector(".swal2-footer") as HTMLDivElement;
        if (footer) {
            footer.className = "swal2-footer text-gray-500 text-xs mt-3";
        }
        },
    });
    };
    // --withHTML
    const handleWithHTML = () => {
    MySwal.fire({
      title: "<strong class='text-[#252f4a] text-xl font-block'>HTML <u>example</u></strong>",
      icon: "info",
      html: `
        <div class="text-center text-[#6B7177] text-sm font-semibold">
          You can use <strong>bold text</strong>,
          <a href="#" class="text-[#252f4a]">links</a>,
          and other HTML tags.
        </div>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Great!",
      cancelButtonText: "",
      buttonsStyling: false, 
      didOpen: () => {
        const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
        if (confirm) {
          confirm.className =
            "bg-[#3E97FF] text-white px-4 py-2 rounded text-sm font-semibold flex items-center justify-center";
              confirm.innerHTML = `<i class='fi fi-rr-social-network me-2'></i><span>Great!</span>`;
        }

        const cancel = document.querySelector(".swal2-cancel") as HTMLButtonElement;
        if (cancel) {
          cancel.className =
            "ms-2 bg-[#6E7881] text-white px-4 py-2 rounded text-sm font-semibold flex items-center justify-center";
            cancel.innerHTML = `<i class='fi fi-rr-hand me-2'></i>`;
        }
      },
    });
    };
    // --actions
    const handleAction = () => {
     MySwal.fire({
        html: `
        <div class="text-center">
            <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
           Do you want to save the changes?
            </h1>
        </div>
        `,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: "Don't save",
      cancelButtonText: "Cancel",
      buttonsStyling: false,
      didOpen: () => {
        const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
        if (confirm) {
          confirm.className =
            "bg-[#3E97FF] text-white px-4 py-2 rounded text-sm font-semibold";
        }

        const deny = document.querySelector(".swal2-deny") as HTMLButtonElement;
        if (deny) {
          deny.className =
            "bg-[#DC3741] text-white px-4 py-2 rounded text-sm font-semibold ms-2";
        }

        const cancel = document.querySelector(".swal2-cancel") as HTMLButtonElement;
        if (cancel) {
          cancel.className =
                "bg-[#6E7881] text-white px-4 py-2 rounded text-sm font-semibold ms-2";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
            html: `
        <div class="text-center">
            <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
            Saved!
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
      } else if (result.isDenied) {
         MySwal.fire({
           html: `
        <div class="text-center">
            <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">
            Changes are not saved
            </h1>
        </div>
        `,
          icon: "info",
          confirmButtonText: "OK",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(".swal2-confirm") as HTMLButtonElement;
            if (confirm) confirm.className = "bg-[#3E97FF] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
      }
    });
    };

  return (
      <div className="flex gap-1 items-center flex-wrap">
      <button onClick={handleClick} className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" >Show Alert </button>
        <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handleWithTitleClick}>withTitle</button>
        <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handleWithFooterClick}>withFooter</button>
        <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handleWithHTML}>withHTML</button>
        <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handleAction}>Actions</button>
      </div>
  )
}

export default BasicAlert2
