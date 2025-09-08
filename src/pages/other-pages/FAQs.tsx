import { Map, MessageSquareMore, Minus, PhoneCall, Plus } from "lucide-react"
import { useState } from "react";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: AccordionItem[] = [
  {
    id: 1,
    question: "Can I change my plan later?",
    answer:
      "Yes! You can try us for free for 30 days. If you want, we'll provide you with a free personalized 30-minute onboarding call to get you up and running.",
  },
  {
    id: 2,
    question: "How do you process payments?",
    answer:
      "We accept Visa®, MasterCard®, American Express®, and PayPal®. So you can be confident that your credit card information will be kept safe and secure.",
  },
  {
    id:3,
    question: "How do you process payments?",
    answer:
      "We accept Visa®, MasterCard®, American Express®, and PayPal®. So you can be confident that your credit card information will be kept safe and secure.",
  },
  {
    id: 4,
    question: "Can I change my plan later?",
    answer:
      "Yes! you can try us for free for 30 days. If you want, we'll provide you with a free personalize 30-minutes onbording call to get you up and running.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "2Checkout accepts all types of credit and debit cards.",
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer:
      "2Checkout accepts all types of credit and debit cards.",
  },
  {
    id: 7,
    question: "Do you have a money-back guarantee?",
    answer:
      "Yes. You may request a refund within 30 days of your purchase without any additional explanations.",
  },
  {
    id: 8,
    question: "I have more questions. Where can I get help?",
    answer:
      "Please contact us if you have any other questions or concerns. We're here to help!",
  },
  {
    id: 9,
    question: "I have more questions. Where can I get help?",
    answer:
      "Please contact us if you have any other questions or concerns. We're here to help!",
  },
  {
    id: 10,
    question: "Do you have a money-back guarantee?",
    answer:
      "Yes. You may request a refund within 30 days of your purchase without any additional explanations.",
  },
];

function FAQs() {
   const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
       <motion.div {...usePageAnimation()}  className="overflow-hidden">       
    <div className="px-6 py-16 flex justify-center items-center text-center rounded-t-lg">
      <div>
      <button className="text-blue-text text-13 rounded-full leading-[13px] font-semibold mb-4">FAQ'S</button>
      <h2 className="font-bold text-[28px] text-[#252f4A] mb-4">Frequently asked questions</h2>
      <p className="text-[17px]">Everything you need to know about the product and billing.</p>
      </div>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[960px] mx-auto pb-8 px-4">
      {faqData.map((item) => (
        <div key={item.id} className="rounded overflow-hidden shadow-sm">
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full flex justify-between items-center px-6 py-4 bg-[#F8F9FA] text-lightgray text-sm font-semibold"
          >
            {item.question}
            {openId === item.id ? (
              <Minus size={16} />
            ) : (
              <Plus size={16} />
            )}
          </button>

          {openId === item.id && (
            <p className="px-6 py-4 text-sm text-lightgray bg-white">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
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
     <div className="px-6 py-10 sm:py-16 flex justify-center items-center text-center rounded-t-lg border-b border-gray-100">
      <div>
      <h2 className="font-bold text-2xl sm:text-[28px] text-[#252f4A] mb-4">Still Have A Question?</h2>
      <p className="text-sm md:text-[17px] text-lightgray mb-3 w-full max-w-[600px]">There are several ways to say "not yet" and "still have questions" in an email response, depending on the context and tone of the message.</p>
      <button className="text-white bg-blue px-5 py-2 rounded text-sm">Get touch</button>
      </div>
    </div>
    </motion.div>
    </>
  )
}

export default FAQs
