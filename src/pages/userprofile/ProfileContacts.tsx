import { Star } from "lucide-react";
import { useState } from "react";
import { contactsData } from "./UserProfileData";
import toast from "react-hot-toast";
import type { ContactType } from "../../types/UserProfile";

function ProfileContacts() {
  const [contacts, setContacts] = useState<ContactType[]>(contactsData);

  const handleStarToggle = (index: number) => {
    setContacts((prev) => {
      const wasStarred = prev[index].starred;

      const updated = prev.map((contact, i) =>
        i === index ? { ...contact, starred: !contact.starred } : contact
      );

      if (!wasStarred) {
        toast.success(`Starred ${prev[index].name}!`);
      } else {
        toast.error(`Unstarred ${prev[index].name}!`);
      }

      return updated;
    });
  };

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-white flex gap-3 justify-between items-center shadow-sm"
          >
            <div className="flex items-center gap-3">
              <img
                src={contact.img}
                alt={contact.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-[#252F4A] text-sm mb-1">{contact.name}</h3>
                <p className="text-[#6B7175] text-sm">{contact.email}</p>
                <p className="text-[#6B7175] text-sm">{contact.phone}</p>
              </div>
            </div>

            <button onClick={() => handleStarToggle(index)}>
              <Star
                size={20}
                color={contact.starred ? "#e49e3d" : "#6B7175"}
                className="cursor-pointer transition-colors duration-200"
              />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClick}
          disabled={loading}
          className="py-[10px] px-5 bg-white rounded-full text-sm text-[#252F4A] my-7 flex items-center gap-2 border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
        >
          {loading ? (
            <>
              <span className="w-3 h-3 border-2 border-t-transparent rounded-full animate-spin mr-1"></span>
              Loading...
            </>
          ) : (
            "Load more..."
          )}
        </button>
      </div>
    </>
  );
}

export default ProfileContacts;
