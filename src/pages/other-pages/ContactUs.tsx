import { Map, MessageSquareMore, PhoneCall } from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function ContactUs() {
   const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
    <motion.div {...usePageAnimation()}  className="overflow-hidden">
     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 py-10 sm:py-16 px-8">
         <div className="shadow-sm rounded-md p-6 flex flex-col text-center">
               <MessageSquareMore className="text-blue-text mb-4 mx-auto" size={30}/>
               <h2 className="text-[17px] leading-[17px] text-[#252D4A] mb-2 font-semibold">Chat to sales</h2>
               <p className="text-lightgray text-sm mb-4">Speaks to our friendly teams.</p>
               <a href="javascript:voide()" className="text-sm font-semibold">support@wrapcoders.com</a>
         </div>
         <div className="shadow-sm rounded-md p-6 flex flex-col text-center">
               <Map className="text-blue-text mb-4 mx-auto" size={30}/>
               <h2 className="text-[17px] leading-[17px] text-[#252D4A] mb-2 font-semibold">Visit our store</h2>
               <p className="text-lightgray text-sm mb-4">Visit our office HQ.</p>
               <a href="javascript:voide()" className="text-sm font-semibold">Smith Street, California, USA</a>
         </div>
         <div className="shadow-sm rounded-md p-6 flex flex-col text-center">
               <PhoneCall className="text-blue-text mb-4 mx-auto" size={30}/>
               <h2 className="text-[17px] leading-[17px] text-[#252D4A] mb-2 font-semibold">Call now us</h2>
               <p className="text-lightgray text-sm mb-4">Mon-Fri from 10am to 6pm.</p>
               <a href="javascript:voide()" className="text-sm font-semibold">+1(375)-98745-632</a>
         </div>
    </div> 
    <div className="px-8 py-8 md:py-13 sm:py-16 grid grid-cols-12 mx-auto z-10 relative">
    <form className="p-6 sm:p-9 md:p-16 rounded-2xl shadow-sm col-span-12 xl:col-span-6 xl:col-start-4 bg-[#F1F2F3]"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl text-darkgray font-bold mb-2">Get in touch</h3>
      <p className="text-lightgray text-sm mb-4">
        Our friendly team would love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-5 md:mb-8">
        <div>
          <label htmlFor="firstName" className="text-13 text-[#4b5675] block mb-2">
            Firstname
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="px-3 py-2 bg-[#f8f9fa] rounded w-full outline-none focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="text-13 text-[#4b5675] block mb-2">
            Lastname
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="px-3 py-2 bg-[#f8f9fa] rounded w-full outline-none focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-13 text-[#4b5675] block mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="px-3 py-2 bg-[#f8f9fa] rounded w-full outline-none focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-13 text-[#4b5675] block mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="px-3 py-2 bg-[#f8f9fa] rounded w-full outline-none focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-5 md:mb-8">
        <label htmlFor="subject" className="text-13 text-[#4b5675] block mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className="px-3 py-2 bg-[#f8f9fa] rounded w-full outline-none focus:outline-none"
        />
      </div>

      <div className="mb-5 md:mb-8">
        <label htmlFor="message" className="text-13 text-[#4b5675] block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="px-3 py-2 bg-[#f8f9fa] rounded w-full outline-none focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-text/60 py-[10px] px-5 rounded w-full text-white text-sm"
      >
        Send Message
      </button>
    </form>
    </div>
     <div className="w-full h-[500px] overflow-hidden shadow-md -mt-52 -z-10- relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19218.666257142526!2d-0.038921204804245685!3d52.97840720396935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d7c2c53856f733%3A0x8406d541f1a0910c!2sBoston%2C%20UK!5e0!3m2!1sen!2sbd!4v1632376229328!5m2!1sen!2sbd"
        title="Boston UK Map"
        width="100%"
        height="100%"
        className="border-0"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
     </motion.div>
    </>
  )
}

export default ContactUs
