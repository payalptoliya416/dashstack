import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function UnderMaintenance() {
  return (
    <div className="min-h-screen w-full bg-[url('/images/loginbg.png')] bg-cover bg-center flex items-center justify-center overflow-y-auto px-4 py-10">
      <div className="bg-white py-14 px-6 sm:px-10 md:py-[90px] md:px-[57px] rounded-xl w-full max-w-[500px] md:max-w-[630px] shadow-lg text-center">
        <img
          src="/images/maintanance.svg"
          alt=""
          className="max-w-32 md:max-w-52 mx-auto mb-10"
        />
        <h3 className="text-[#202224] font-semibold text-lg sm:text-2xl md:text-[32px] mb-7 md:mb-[35px]">
          Under Maintenance!
        </h3>
        <p className="text-base sm:text-lg max-w-[500px] mb-5">
          Hang on! We are under maintenance! We apologize for any inconvenience
          caused.
        </p>
        <ul className="flex justify-center gap-5 mt-8 text-gray-500">
          <li className="text-sm font-semibold text-[#252f4a]">
            <Facebook size={16} />
          </li>
          <li className="text-sm font-semibold text-[#252f4a]">
            <Twitter size={16} />
          </li>
          <li className="text-sm font-semibold text-[#252f4a]">
            <Instagram size={16} />
          </li>
          <li className="text-sm font-semibold text-[#252f4a]">
            <Linkedin size={16} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UnderMaintenance;
