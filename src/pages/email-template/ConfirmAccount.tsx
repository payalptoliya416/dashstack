import { CircleQuestionMark, EllipsisVertical, Facebook, Twitter, Youtube, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { usePageAnimation } from '../../hooks/usePageAnimation';
import {motion} from 'framer-motion';

function ConfirmAccount() {
  return (
     <motion.div
          {...usePageAnimation()}
          className="overflow-hidden">
    <div className="min-h-screen w-full flex justify-center my-5 px-5 sm:px-1">
      <div>
      <div className="bg-white rounded-xl w-full max-w-[650px] shadow-lg">
         <div className="p-4 sm:p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#252f4a]">Window</div>
          <EllipsisVertical size={18} />
        </div>
          <div className="p-7 sm:p-10">
          <div className="text-center">
            <img src="/images/confirm.svg" alt="" className="my-6 pb-12 mx-auto" />
            <h3 className="text-xl sm:text-2xl mb-4 font-bold text-[#252f4a]">
             Confirm your account!
            </h3>
            <p>
            We're excited to have you get started. First, you need to confirm your account. Just press the button below.
            </p>
            <button className="text-sm my-12 sm:my-16 bg-[#3e97ff] rounded text-white py-[10px] px-5">
             Confirm Account
            </button>
          </div>
          <p className="text-[15px] leading-[20px] text-[#4B5675] mb-4">
           If that doesn't work, copy and paste the following link in your browser: <b/>
           <Link to='' className="text-[#3e97ff] text-base ">https://bit.ly/3xyXdr2</Link>
          </p>
          <p className="text-[15px] leading-[20px] text-[#4B5675] mb-4">
           Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="my-16 bg-[#F1F2F3] rounded-lg text-center p-8">
            <CircleQuestionMark className="inline-block mb-6 text-[#252f4a] " />
            <h3 className="text-[#252f4a] text-lg  mb-2 font-bold">
              Still needs more help?
            </h3>
            <p className="text-[#3e97ff] text-[13px] mb-6">
             We're here, ready to talk
            </p>
            <div className="flex gap-5 items-center justify-center">
              <a href="javascrcipt:void()">
                <Facebook size={16} className="fill-[#252f4a]" />
              </a>
              <a href="javascrcipt:void()">
                <Twitter size={16} className="fill-[#252f4a]" />
              </a>
              <a href="javascrcipt:void()">
                <Linkedin size={16} className="fill-[#252f4a]" />
              </a>
              <a href="javascrcipt:void()">
                <Youtube size={16} className="fill-[#252f4a]" />
              </a>
            </div>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-[#252f4a] text-base mb-2">
              It's all about customers!
            </h3>
            <p className="mb-2 text-sm text-[#6B7177]">
             Call our customer care number:
              <a
                href="tel:+137533445566"
                className="text-[#252f4a] font-medium hover:underline"
              >
                +1 (375) 3344 5566
              </a>
            </p>
            <p className="mb-2 text-sm text-[#6B7177]">
              You may reach us at: 
              <a
                href="mailto:support@wrapcoders.com"
                className="text-[#252f4a] font-medium hover:underline"
              >
                support@wrapcoders.com
              </a>
            </p>
            <p className="mb-2 text-sm text-[#6B7177]">
              We serve Mon-Fri, 9AM-6PM
            </p>
          </div>

          <p className="mb-2 text-sm text-[#6B7177] text-center">
            Please feel free to{" "}
            <span className="text-[#D13B4C] text-sm">Unsubscribe</span> from
            newsletter.
          </p>
          <div className="my-12 border border-gray-100" />
          <div className="flex justify-between items-center flex-col sm:flex-row gap-5">
            <h3 className="text-[#4B5675] text-sm">Copyright © 2024</h3>
            <div className="flex gap-5 items-center">
              <Link
                to=""
                className="text-#252f4a uppercase text-[11px] leading-[11px] font-bold"
              >
                ABout
              </Link>
              <Link
                to=""
                className="text-#252f4a uppercase text-[11px] leading-[11px] font-bold"
              >
                Contact
              </Link>
              <Link
                to=""
                className="text-#252f4a uppercase text-[11px] leading-[11px] font-bold"
              >
                policy
              </Link>
              <Link
                to=""
                className="text-#252f4a uppercase text-[11px] leading-[11px] font-bold"
              >
                terms
              </Link>
            </div>
          </div>
        </div>
      </div>
          <Link to='/eCommerce' className="block group text-[#3E97FF] text-base cursor-pointer my-11 text-center font-bold">
          {" "}
          <ArrowLeft
            className="inline-block text-[#3E97FF] me-1 transition-transform duration-200 group-hover:-translate-x-1"
            size={12}
          />{" "}
          Back to Home
        </Link>
      </div>
    </div>
    </motion.div>
  );
}

export default ConfirmAccount;
