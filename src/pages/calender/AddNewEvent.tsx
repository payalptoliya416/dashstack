import { Camera } from "lucide-react";
import MainTitle from "../../hooks/useMainTitle";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { addEvent } from "../../redux/slice/eventSlice";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { motion} from 'framer-motion';

type FormData = {
  eventName: string;
  time: string;
  date: string;
  address: string;
  contactNumber: string;
};

type FormErrors = Partial<Record<keyof FormData | "image", string>>;

function AddNewEvent() {
    const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<FormData>({
    eventName: "",
    time: "",
    date: "",
    address: "",
    contactNumber: "",
  });
  const navigate= useNavigate();
  const [image, setImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string); 
    };
    reader.readAsDataURL(file);
  }
};


  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.eventName) newErrors.eventName = "Event name is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required.";
    if (!image) newErrors.image = "Cover photo is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
const formattedDateTime = dayjs(`${formData.date} ${formData.time}`)
  .format("D MMMM, YYYY [at] h:mm A");
   const newEvent = {
  id: Date.now(),
  avatar: image!,
  title: formData.eventName,
  dateTime:formattedDateTime,
  address: formData.address,
  attendees: [],
  extraAttendeeCount: 0,
  startDate: formData.date,
  endDate: formData.date,
};

dispatch(addEvent(newEvent));
    setFormData({
      eventName: "",
      time: "",
      date: "",
      address: "",
      contactNumber: "",
    });
    setImage(null);
    setErrors({});
    navigate
    navigate('/calendar')
  };

  return (
    <>
      <MainTitle title="Add New Event" />
      <motion.div   initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }} className="bg-white border border-[#B9B9B9]/60 rounded-xl py-8 lg:py-[60px] px-5 sm:px-10 lg:px-20 2xl:px-[180px]">
        <form onSubmit={handleSubmit}>
          {/* Image upload */}
          <div className="flex justify-center flex-col items-center gap-4 mb-7 sm:mb-10">
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden bg-[#ECECEE] shadow-sm flex items-center justify-center">
              {image ? (
                <img src={image} alt="preview" className="w-full h-full object-cover" />
              ) : (
                <Camera className="text-[#414141]" />
              )}
            </div>
            <label className="text-[#4379EE] text-sm font-semibold cursor-pointer">
              Upload Cover Photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image}</p>
            )}
          </div>

          <div className="grid grid-cols-12 sm:gap-6 xl:gap-[60px]">
            {[
              ["Event Name", "eventName"],
              ["Time", "time"],
              ["Date", "date"],
              ["Address", "address"],
              ["Contact Number", "contactNumber"],
            ].map(([label, name]) => (
              <div
                key={name}
                className="col-span-12 sm:col-span-6 mb-6 sm:mb-0"
              >
                <label className="block text-[#606060] text-sm font-semibold mb-[11px]">
                  {label}
                </label>
                <input
                  type={
                name === "date"
                  ? "date"
                  : name === "time"
                  ? "time"
                  : "text"}
                  name={name}
                  value={formData[name as keyof FormData]}
                  onChange={handleInputChange}
                  className="w-full py-3 sm:py-[18px] px-4 border border-[#D5D5D5]/60 bg-[#F5F6FA] rounded-sm"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                />
                {errors[name as keyof FormErrors] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[name as keyof FormErrors]}
                  </p>
                )}
              </div>
            ))}

          </div>

          {/* Submit */}
          <div className="mt-5 lg:mt-10 text-center">
          <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="bg-[#4880FF] text-white font-bold px-20 sm:px-24 py-3 sm:py-4 rounded-xl"
      >
        Add Now
      </motion.button>  
          </div>
        </form>
      </motion.div>
    </>
  );
}

export default AddNewEvent;
