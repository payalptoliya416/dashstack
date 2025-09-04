import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function CustomeMessage() {
       // -- handleCommunity
  const handleCommunity = () => {
    MySwal.fire({
      html: `
        <div class="text-center">
          <h1 class="text-2xl font-bold text-gray-900 mb-5 pt-5">
          Join Community
          </h1>
          <form>
          <div class='mx-6'>
          <input class='border px-2 py-2 rounded border-gray-100 text-sm  w-full text-[#6B7177] placeholder:text-[#6B7177]' placeholder='Enter Email Address'/>
          </div>
          </form>
        </div>
      `,
       footer: `
        <div class="text-center text-sm text-[#6B7177] mb-2 mt-3 font-semibold">
           Already have an account ? <a href='javascript:void(0)' class='underline font-bold'>Login</a>
        </div>
        `,
      showConfirmButton: true,
      confirmButtonText: "Register",
      buttonsStyling: false, 
      didOpen: () => {
        const btn = document.querySelector(".swal2-confirm") as HTMLButtonElement;
        if (btn) {
          btn.className =
            "bg-[#3E97FF] hover:bg-blue-600 text-white px-10 my-10 py-[6px] rounded text-sm font-semibold !flex items-center";
               btn.innerHTML = `<span>Register</span><i class='fi fi-rr-arrow-small-right align-bottom ms-3 mt-2'></i>`;
        }
      },
    });
  };
       // -- handleEmailVerify
  const handleEmailVerify = () => {
    MySwal.fire({
      html: `
      
        <div class="text-center">
        <div class="mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-[#3E97FF]">
          <i class="fi fi-rr-envelope-dot text-white text-3xl"></i>
        </div>

          <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-4">
        Email Verification
          </h1>
          <form>
         <p class='text-sm text-[#6B7177]'>We have sent you verification email example@abc.com, <br/> Please check it.</p>
          </form>
        </div>
      `,
       footer: `
        <div class="text-center text-sm text-[#6B7177] mb-2 mt-3 font-semibold">
           Didn't receive an email ? <a href='javascript:void(0)' class='underline font-bold'>Resend</a>
        </div>
        `,
      showConfirmButton: true,
      confirmButtonText: "Register",
      buttonsStyling: false, 
      didOpen: () => {
        const btn = document.querySelector(".swal2-confirm") as HTMLButtonElement;
        if (btn) {
          btn.className =
            "bg-[#3E97FF] hover:bg-blue-600 text-white px-10 mb-10 py-[6px] rounded text-sm font-semibold !flex items-center";
               btn.innerHTML = `<span>Verify</span><i class='fi fi-rr-arrow-small-right align-bottom ms-3 mt-2'></i>`;
        }
      },
    });
  };
       // -- handleNotification
  const handleNotification = () => {
    MySwal.fire({
      html: `
      
        <div class="text-center">
        <div class="mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-[#3E97FF] border border-gray-50">
        <img src='/images/f1.png' class='rounded-full border-5 border-white'/>
        </div>

          <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-4">
      Alexandra Della
          </h1>
          <form>
         <p class='text-sm text-[#6B7177]'>You have <button class='bg-[#fbeff1] text-[#d13b4c] rounded px-2 py-[5px] text-xs'>25+</button>  Notifications</p>
          </form>
        </div>
      `,
      showConfirmButton: true,
      confirmButtonText: " All Notifications",
      buttonsStyling: false, 
      didOpen: () => {
        const btn = document.querySelector(".swal2-confirm") as HTMLButtonElement;
        if (btn) {
          btn.className =
            "bg-[#3E97FF] hover:bg-blue-600 text-white px-6 mb-10 py-2 rounded text-sm font-semibold !flex items-center";
               btn.innerHTML = `<i class='fi fi-rr-bell me-3 align-bottom !mt-1'></i> <span> All Notifications</span>`;
        }
      },
    });
  };
  return (
    <div className="flex gap-1 items-center flex-wrap">
    <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm font-semibold" onClick={handleCommunity}>Join Community </button>
    <button className="px-5 py-2 rounded bg-[#25B865] text-white text-sm font-semibold" onClick={handleEmailVerify}>Email Verification</button>
    <button className="px-5 py-2 rounded bg-[#D13B4C] text-white text-sm font-semibold" onClick={handleNotification}>Notification Message </button>
    </div>
  )
}

export default CustomeMessage
