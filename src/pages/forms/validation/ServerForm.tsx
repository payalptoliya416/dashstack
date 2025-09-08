import { useState } from "react";
import { Check, Info } from "lucide-react";
import { validateForm } from "./validations";

function ServerForm() {
  const [form, setForm] = useState({
    first: "Mark",
    last: "Otto",
    username: "",
    city: "",
    state: "",
    zip: "",
    terms: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newForm = { ...form, [name]: type === "checkbox" ? checked : value };
    setForm(newForm);

    if (submitted) {
      const newErrors = validateForm(newForm);
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validateForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Server form submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7 mb-5 sm:mb-7">
        {/* First name */}
        <div className="relative">
          <label className="text-sm mb-2 block font-semibold">First name</label>
          <input
            type="text"
            name="first"
            value={form.first}
            onChange={handleChange}
            className={`border border-gray-100 rounded py-2 px-3 w-full ${
              errors.first ? "border-[#d13b4c]" : "border-[#25B865]"
            }`}
          />
          {!errors.first && (
            <>
              <Check
                className="absolute right-3 top-1/2 -translate-y-1/3 text-[#25B865]"
                size={20}
              />
              <p className="text-[#25B865] text-xs mt-1">Looks good!</p>
            </>
          )}
        </div>

        {/* Last name */}
        <div className="relative">
          <label className="text-sm mb-2 block font-semibold">Last name</label>
          <input
            type="text"
            name="last"
            value={form.last}
            onChange={handleChange}
            className={`border border-gray-100 rounded py-2 px-3 w-full ${
              errors.last ? "border-[#d13b4c]" : "border-[#25B865]"
            }`}
          />
          {!errors.last && (
            <>
              <Check
                className="absolute right-3 top-1/2 -translate-y-1/3 text-[#25B865]"
                size={20}
              />
              <p className="text-[#25B865] text-xs mt-1">Looks good!</p>
            </>
          )}
        </div>

        {/* Username */}
        <div>
          <label className="text-sm mb-2 block font-semibold">Username</label>
          <div className="flex relative">
            <div className="py-2 px-3 border border-gray-200 border-r-0">@</div>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className={`border border-gray-100 rounded-r py-2 px-3 w-full ${
                errors.username ? "border-[#d13b4c]" : ""
              }`}
              placeholder="Username"
            />
            {errors.username && (
              <Info
                className="absolute right-3 top-1/2 -translate-y-1/3 text-[#d13b4c]"
                size={20}
              />
            )}
          </div>
          {errors.username && (
            <p className="text-[#d13b4c] text-xs mt-1">{errors.username}</p>
          )}
        </div>
      </div>

      {/* City / State / Zip */}
      <div className="grid grid-cols-12 gap-7 mb-7">
        <div className="col-span-12 lg:col-span-6 relative">
          <label className="text-sm mb-2 block font-semibold">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className={`border border-gray-100 rounded py-2 px-3 w-full ${
              errors.city ? "border-[#d13b4c]" : ""
            }`}
            placeholder="City"
          />
          {errors.city && (
            <>
              <Info
                className="absolute right-3 top-1/2 -translate-y-1/3 text-[#d13b4c]"
                size={20}
              />
              <p className="text-[#d13b4c] text-xs mt-1">{errors.city}</p>
            </>
          )}
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-3 relative">
          <label className="text-sm mb-2 block font-semibold">State</label>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            className={`border border-gray-100 rounded py-2 px-3 w-full ${
              errors.state ? "border-[#d13b4c]" : ""
            }`}
            placeholder="State"
          />
          {errors.state && (
            <>
              <Info
                className="absolute right-3 top-1/2 -translate-y-1/3 text-[#d13b4c]"
                size={20}
              />
              <p className="text-[#d13b4c] text-xs mt-1">{errors.state}</p>
            </>
          )}
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-3 relative">
          <label className="text-sm mb-2 block font-semibold">Zip</label>
          <input
            type="text"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            className={`border border-gray-100 rounded py-2 px-3 w-full ${
              errors.zip ? "border-[#d13b4c]" : ""
            }`}
            placeholder="Zip"
          />
          {errors.zip && (
            <>
              <Info
                className="absolute right-3 top-1/2 -translate-y-1/3 text-[#d13b4c]"
                size={20}
              />
              <p className="text-[#d13b4c] text-xs mt-1">{errors.zip}</p>
            </>
          )}
        </div>
      </div>

      {/* Terms */}
      <div className="mb-7">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className={`appearance-none w-5 h-5 bg-[#EEF0F3] border-none rounded cursor-pointer 
             checked:bg-blue checked:border-blue relative 
             checked:after:content-['✔'] checked:after:absolute checked:after:text-white 
             checked:after:font-bold checked:after:text-[12px] checked:after:left-[5px] checked:after:top-[1px] me-2 ${errors.terms ? "border-[#d13b4c]" : ""}`}
          />
          Agree to terms and conditions
        </label>
        {errors.terms && (
          <p className="text-[#d13b4c] text-xs mt-1">{errors.terms}</p>
        )}
      </div>

      <button
        type="submit"
        className="text-white bg-blue px-5 py-2 rounded text-sm"
      >
        Submit form
      </button>
    </form>
  );
}

export default ServerForm;
