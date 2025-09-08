import { Camera } from "lucide-react";
import MainTitle from "../../hooks/useMainTitle";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { AppDispatch } from "../../redux/store";
import { addContact } from "../../redux/slice/contactSlice";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../hooks/usePageAnimation";

function AddNewContact() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [image, setImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    image: "",
  });

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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  const validate = () => {
    const newErrors: typeof errors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      image: "",
    };

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!image) newErrors.image = "Profile photo is required";

    setErrors(newErrors);
    return Object.values(newErrors).every((val) => val === "");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    dispatch(
      addContact({
        id: Date.now(),
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        image: image || "/images/default-profile.png",
      })
    );

    navigate("/contact");
  };
  const animation = usePageAnimation();
  return (
    <>
      <MainTitle title="Add New Contact" />
      <motion.div  variants={animation}
        initial="initial"
        animate="animate"
        exit="exit" className="bg-white border border-[#B9B9B9]/60 rounded-xl py-8 lg:py-[60px] px-5 sm:px-10 lg:px-20 2xl:px-[180px]">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center flex-col items-center gap-4 mb-7 sm:mb-10">
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden bg-[#ECECEE] shadow-sm flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Camera className="text-[#414141]" />
              )}
            </div>
            <label className="text-[#4379EE] text-sm font-semibold cursor-pointer">
              Upload Photo
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
              ["First Name", "firstName"],
              ["Last Name", "lastName"],
              ["Your Email", "email"],
              ["Phone Number", "phone"],
              ["Date of Birth", "dob"],
            ].map(([label, name]) => (
              <div
                key={name}
                className="col-span-12 sm:col-span-6 mb-6 sm:mb-0"
              >
                <label className="block text-[#606060] text-sm font-semibold mb-11">
                  {label}
                </label>
                <input
                  type={name === "dob" ? "date" : "text"}
                  name={name}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="w-full py-3 sm:py-[18px] px-4 border border-[#D5D5D5]/60 bg-[#F5F6FA] rounded-sm"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                />
                {errors[name as keyof typeof errors] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[name as keyof typeof errors]}
                  </p>
                )}
              </div>
            ))}

            <div className="col-span-12 sm:col-span-6">
              <label className="block text-[#606060] text-sm font-semibold mb-11">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full py-3 sm:py-[18px] px-4 border border-[#D5D5D5]/60 bg-[#F5F6FA] rounded-sm"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
              )}
            </div>
          </div>

          <div className="mt-10 text-center">
            <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="bg-blue-light text-white font-bold px-20 sm:px-24 py-3 sm:py-4 rounded-xl"
      >
        Add Now
      </motion.button>  
          </div>
        </form>
      </motion.div>
    </>
  );
}

export default AddNewContact;
