import { Mail } from "lucide-react";
import MainTitle from "../../hooks/MainTitle";
import type { ContactItem } from "../../types/Dashboard";

const contactList: ContactItem[] = [
  {
    id: 1,
    name: "Jason Price",
    email: "kuhlman.jermey@yahoo.com",
    image: "/images/bitm1.png",
  },
  {
    id: 2,
    name: "Duane Dean",
    email: "rusty.botsford@wilfrid.io",
    image: "/images/bitm2.png",
  },
  {
    id: 3,
    name: "Jonathan Barker",
    email: "cora_haley@quinn.biz",
    image: "/images/bitm3.png",
  },
  {
    id: 4,
    name: "Rosie Glover",
    email: "lockman.marques@hotmail.com",
    image: "/images/bitm4.png",
  },
  {
    id: 5,
    name: "Patrick Greer",
    email: "pearlie.eichmann@trevion.net",
    image: "/images/bitm5.png",
  },
  {
    id: 6,
    name: "Darrell Ortega",
    email: "chaya.shields@ferry.info",
    image: "/images/bitm6.png",
  },
];

function Contact() {
  return (
    <>
      <div className="flex justify-between items-start mb-[6px]">
        <MainTitle title="Contact" />
        <button className="text-white text-sm font-bold bg-[#4379EE] rounded-md py-2 sm:py-[11px] px-[27px] transition-all duration-200 hover:shadow-md">
          Add New Contact
        </button>
      </div>

      <div className="grid grid-cols-12 gap-[30px]">
        {contactList.map((contact) => (
          <div
            key={contact.id}
            className="col-span-12 sm:col-span-6 xl:col-span-4"
          >
            <div className="rounded-xl">
              <img
                src={contact.image}
                alt={contact.name}
                className="rounded-t-xl w-full"
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
                    <Mail
                      strokeWidth={2}
                      size={16}
                      className="text-[#767676]"
                    />
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
