import { Mail } from "lucide-react";
import MainTitle from "../../hooks/useMainTitle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const contacts = useSelector((state: RootState) => state.contact.contacts);
const MotionLink = motion(Link);
  return (
    <>
      <div className="flex justify-between items-start mb-[6px]">
        <MainTitle title="Contact" />
        <MotionLink
          to="/contact/add-new-contact"
           whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="text-white text-sm font-bold bg-[#4379EE] rounded-md py-2 sm:py-[11px] px-[27px] transition-all duration-200 hover:shadow-md"
        >
          Add New Contact
        </MotionLink>
      </div>

      <div className="grid grid-cols-12 gap-[30px]">
          <AnimatePresence>
        {contacts.map((contact ,index : number) => (
          <motion.div
            key={index}
             layout
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
            className="col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3"
          >
            <div className="rounded-xl">
              <div className="h-[276px] overflow-hidden rounded-t-xl">
              <img
                src={contact.image}
                alt={contact.name}
                className="rounded-t-xl w-full h-full object-fill"
              />
              </div>
              <div className="p-4 bg-white border border-[#B9B9B9] border-t-0 rounded-b-2xl text-center">
                <h3 className="text-darkgray text-base font-bold mb-1">
                  {contact.name}
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-darkgray/60 text-sm font-normal block cursor-pointer"
                >
                  {contact.email}
                </a>
                <a href={`mailto:${contact.email}`} className="inline-block mt-4">
                  <motion.button  whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.02 }} className="flex items-center gap-[13px] cursor-pointer text-[#767676] text-sm font-bold px-[25px] py-[10px] border border-[#979797] rounded-md mx-auto">
                    <Mail strokeWidth={2} size={16} className="text-[#767676]" />
                    Message
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
          </AnimatePresence>
      </div>
    </>
  );
}

export default Contact;
