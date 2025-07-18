import { Mail } from "lucide-react";
import MainTitle from "../../hooks/MainTitle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

function Contact() {
  const contacts = useSelector((state: RootState) => state.contact.contacts);

  return (
    <>
      <div className="flex justify-between items-start mb-[6px]">
        <MainTitle title="Contact" />
        <Link
          to="/contact/add-new-contact"
          className="text-white text-sm font-bold bg-[#4379EE] rounded-md py-2 sm:py-[11px] px-[27px] transition-all duration-200 hover:shadow-md"
        >
          Add New Contact
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-[30px]">
        {contacts.map((contact ,index : number) => (
          <div
            key={index}
            className="col-span-12 sm:col-span-6 xl:col-span-4"
          >
            <div className="rounded-xl">
              <img
                src={contact.image}
                alt={contact.name}
                className="rounded-t-xl w-full object-cover"
              />
              <div className="p-4 bg-white border border-[#B9B9B9] border-t-0 rounded-b-2xl text-center">
                <h3 className="text-[#202224] text-base font-bold mb-1">
                  {contact.name}
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[#202224]/60 text-sm font-normal block cursor-pointer"
                >
                  {contact.email}
                </a>
                <a href={`mailto:${contact.email}`} className="inline-block mt-4">
                  <button className="flex items-center gap-[13px] cursor-pointer text-[#767676] text-sm font-bold px-[25px] py-[10px] border border-[#979797] rounded-md mx-auto">
                    <Mail strokeWidth={2} size={16} className="text-[#767676]" />
                    Message
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Contact;
