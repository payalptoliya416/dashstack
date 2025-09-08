import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { Camera } from "lucide-react";
import MainTitle from "../../hooks/useMainTitle";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { setSettings } from "../../redux/slice/settingSlice";
import { usePageAnimation } from "../../hooks/usePageAnimation";
import {motion } from 'framer-motion';

function Setting() {
  const dispatch = useDispatch<AppDispatch>();
  const savedData = useSelector((state: RootState) => state.settings);
  const [image, setImage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    siteName: "",
    seoTitle: "",
    seoKeywords: "",
    seoDescription: "",
    copyright: "",
  });

  const [errors, setErrors] = useState({
    siteName: "",
    seoTitle: "",
    seoKeywords: "",
    seoDescription: "",
    copyright: "",
    logo: "",
  });

  useEffect(() => {
    if (savedData) {
      setFormData({
        siteName: savedData.siteName || "",
        seoTitle: savedData.seoTitle || "",
        seoKeywords: savedData.seoKeywords || "",
        seoDescription: savedData.seoDescription || "",
        copyright: savedData.copyright || "",
      });
      setImage(savedData.logo || "");
    }
  }, [savedData]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setErrors((prev) => ({ ...prev, logo: "" }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {
      siteName: "",
      seoTitle: "",
      seoKeywords: "",
      seoDescription: "",
      copyright: "",
      logo: "",
    };

    if (!formData.siteName.trim()) newErrors.siteName = "Site Name is required";
    if (!formData.seoTitle.trim()) newErrors.seoTitle = "SEO Title is required";
    if (!formData.seoKeywords.trim())
      newErrors.seoKeywords = "SEO Keywords are required";
    if (!formData.seoDescription.trim())
      newErrors.seoDescription = "SEO Description is required";
    if (!formData.copyright.trim())
      newErrors.copyright = "Copyright is required";
    if (!image) newErrors.logo = "Logo is required";

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    dispatch(setSettings({ ...formData, logo: image }));
     setSuccessMessage("General settings saved successfully!");

  setTimeout(() => {
    setSuccessMessage("");
  }, 3000);
  };
  const animation = usePageAnimation();
  return (
    <>
      <MainTitle title="General Settings" />
      <motion.div
        variants={animation}
        initial="initial"
        animate="animate"
        exit="exit" className="bg-white border border-[#B9B9B9]/60 rounded-xl py-8 lg:py-[60px] px-5 sm:px-10 lg:px-20 2xl:px-[180px]">
       {successMessage && (
  <div className="text-center mb-4 text-green-600 font-semibold">
    {successMessage}
  </div>
)}
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
              Upload Logo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            {errors.logo && (
              <p className="text-red-500 text-xs">{errors.logo}</p>
            )}
          </div>

          <div className="grid grid-cols-12 sm:gap-6 xl:gap-[60px]">
            <div className="col-span-12 sm:col-span-6 mb-6 sm:mb-0">
              <label className="block text-[#606060] text-sm font-semibold mb-[11px]">
                Site Name
              </label>
              <input
                type="text"
                name="siteName"
                value={formData.siteName}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-[#D5D5D5]/60 bg-[#F5F6FA] rounded-sm"
                placeholder="Enter your Site Name"
              />
              {errors.siteName && (
                <p className="text-red-500 text-xs mt-1">{errors.siteName}</p>
              )}
            </div>

            <div className="col-span-12 sm:col-span-6 mb-6 sm:mb-0">
              <label className="block text-[#606060] text-sm font-semibold mb-[11px]">
                Copyright
              </label>
              <input
                type="text"
                name="copyright"
                value={formData.copyright}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-[#D5D5D5]/60 bg-[#F5F6FA] rounded-sm"
                placeholder="Enter your Copyright"
              />
              {errors.copyright && (
                <p className="text-red-500 text-xs mt-1">{errors.copyright}</p>
              )}
            </div>

            <div className="col-span-12 sm:col-span-6 mb-6 sm:mb-0">
              <div className="flex flex-col sm:gap-6 xl:gap-[60px]">
                <div className=" mb-6 sm:mb-0">
                  <label className="block text-[#606060] text-sm font-semibold mb-[11px]">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    name="seoTitle"
                    value={formData.seoTitle}
                    onChange={handleChange}
                    className="w-full py-3 px-4 border border-[#D5D5D5]/60 bg-[#F5F6FA] rounded-sm"
                    placeholder="Enter your SEO Title"
                  />
                  {errors.seoTitle && (
                    <p className="text-red-500 text-xs mt-1">{errors.seoTitle}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[#606060] text-sm font-semibold mb-[11px]">
                    SEO Keywords
                  </label>
                  <input
                    type="text"
                    name="seoKeywords"
                    value={formData.seoKeywords}
                    onChange={handleChange}
                    className="w-full py-3 px-4 border border-[#D5D5D5]/60 bg-[#F5F6FA] rounded-sm"
                    placeholder="Enter your SEO Keywords"
                  />
                  {errors.seoKeywords && (
                    <p className="text-red-500 text-xs mt-1">{errors.seoKeywords}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 flex flex-col h-full">
              <label
                className="block text-[#606060] text-sm font-semibold mb-[11px] sm:mt-[6px]"
              >
                SEO Description
              </label>
              <textarea
                name="seoDescription"
                value={formData.seoDescription}
                onChange={handleChange}
                className="w-full h-full py-3 px-4 border border-[#D5D5D5]/60 bg-[#F5F6FA] rounded-sm resize-none"
                placeholder="Enter your SEO Description"
              />
              {errors.seoDescription && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.seoDescription}
                </p>
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
       Save
      </motion.button> 
          </div>
        </form>
      </motion.div>
    </>
  );
}

export default Setting;
