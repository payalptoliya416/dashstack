import { useState } from "react";
import { Info, Check } from "lucide-react";
import { validateForm } from "./validations";

function TooltipForm() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    terms: false,
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newForm = { ...form, [name]: type === "checkbox" ? checked : value };
    setForm(newForm);

    // 🔹 Always validate while typing
    const newErrors = validateForm(newForm);
    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Tooltip form submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      {/* First, Last, Username */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7 mb-5 sm:mb-7">
        {/* First Name */}
        <div className="relative">
          <label className="text-sm mb-2 block font-semibold">First name</label>
          <input
            type="text"
            name="first"
            value={form.first}
            onChange={handleChange}
            className={`border rounded py-2 px-3 w-full ${
              errors.first ? "border-red-f500" : form.first ? "border-[#25B865]" : "border-gray-100"
            }`}
          />
          {errors.first ? (
            <span className="absolute bg-[#d13b4c] text-white text-xs px-2 py-1 rounded top-full left-0 mt-1">
              {errors.first}
            </span>
          ) : (
            form.first && (
              <>
                <Check className="absolute right-3 top-1/2 -translate-y-[-3px] text-[#25B865]" size={20} />
                <span className="absolute text-white rounded text-xs top-full left-0 px-2 py-1 bg-[#25B865]">Looks good!</span>
              </>
            )
          )}
        </div>

        {/* Last Name */}
        <div className="relative">
          <label className="text-sm mb-2 block font-semibold">Last name</label>
          <input
            type="text"
            name="last"
            value={form.last}
            onChange={handleChange}
            className={`border rounded py-2 px-3 w-full ${
              errors.last ? "border-red-500" : form.last ? "border-[#25B865]" : "border-gray-100"
            }`}
          />
          {errors.last ? (
            <span className="absolute bg-[#d13b4c] text-white text-xs px-2 py-1 rounded top-full left-0 mt-1">
              {errors.last}
            </span>
          ) : (
            form.last && (
              <>
                <Check className="absolute right-3 top-1/2 -translate-y-[-3px] text-[#25B865]" size={20} />
                <span className="absolute text-white rounded text-xs top-full left-0 px-2 py-1 bg-[#25B865]">Looks good!</span>
              </>
            )
          )}
        </div>

        {/* Username */}
        <div className="relative">
          <label className="text-sm mb-2 block font-semibold">Username</label>
          <div className="flex relative">
            <div className="py-2 px-3 border border-gray-200 border-r-0">@</div>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className={`border rounded-r py-2 px-3 w-full ${
                errors.username ? "border-red-500" : form.username ? "border-[#25B865]" : "border-gray-100"
              }`}
              placeholder="Username"
            />
            {errors.username ? (
              <Info className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d13b4c]" size={20} />
            ) : (
              form.username && <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-[#25B865]" size={20} />
            )}
          </div>
          {errors.username && (
            <span className="absolute bg-[#d13b4c] text-white text-xs px-2 py-1 rounded top-full left-0 mt-1">
              {errors.username}
            </span>
          )}
        </div>
      </div>

      {/* City, State, Zip */}
      <div className="grid grid-cols-12 gap-7 mb-7">
        {/* City */}
        <div className="col-span-12 lg:col-span-6 relative">
          <label className="text-sm mb-2 block font-semibold">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className={`border rounded py-2 px-3 w-full ${
              errors.city ? "border-red-500" : form.city ? "border-[#25B865]" : "border-gray-100"
            }`}
            placeholder="City"
          />
          {errors.city ? (
            <Info className="absolute right-3 top-1/2 -translate-y-[-3px] text-[#d13b4c]" size={20} />
          ) : (
            form.city && <Check className="absolute right-3 top-1/2 -translate-y-[-3px] text-[#25B865]" size={20} />
          )}
          {errors.city && (
            <span className="absolute bg-[#d13b4c] text-white text-xs px-2 py-1 rounded top-full left-0 mt-1">
              {errors.city}
            </span>
          )}
        </div>

        {/* State */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 relative">
          <label className="text-sm mb-2 block font-semibold">State</label>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            className={`border rounded py-2 px-3 w-full ${
              errors.state ? "border-red-500" : form.state ? "border-[#25B865]" : "border-gray-100"
            }`}
            placeholder="State"
          />
          {errors.state ? (
            <Info className="absolute right-3 top-1/2 -translate-y-[-3px] text-[#d13b4c]" size={20} />
          ) : (
            form.state && <Check className="absolute right-3 top-1/2 -translate-y-[-3px] text-[#25B865]" size={20} />
          )}
          {errors.state && (
            <span className="absolute bg-[#d13b4c] text-white text-xs px-2 py-1 rounded top-full left-0 mt-1">
              {errors.state}
            </span>
          )}
        </div>

        {/* Zip */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 relative">
          <label className="text-sm mb-2 block font-semibold">Zip</label>
          <input
            type="text"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            className={`border rounded py-2 px-3 w-full ${
              errors.zip ? "border-red-500" : form.zip ? "border-[#25B865]" : "border-gray-100"
            }`}
            placeholder="Zip"
          />
          {errors.zip ? (
            <Info className="absolute right-3 top-1/2 -translate-y-[-3px] text-[#d13b4c]" size={20} />
          ) : (
            form.zip && <Check className="absolute right-3 top-1/2 -translate-y-[-3px] text-[#25B865]" size={20} />
          )}
          {errors.zip && (
            <span className="absolute bg-[#d13b4c] text-white text-xs px-2 py-1 rounded top-full left-0 mt-1">
              {errors.zip}
            </span>
          )}
        </div>
      </div>

      {/* Terms */}
      <div className="mb-7 relative">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className="appearance-none w-5 h-5 bg-[#EEF0F3] border-none rounded cursor-pointer 
             checked:bg-blue checked:border-blue relative 
             checked:after:content-['✔'] checked:after:absolute checked:after:text-white 
             checked:after:font-bold checked:after:text-[12px] checked:after:left-[5px] checked:after:top-[1px] me-2"
          />
          Agree to terms and conditions
        </label>
        {errors.terms && (
          <span className="absolute bg-[#d13b4c] text-white text-xs px-2 py-1 rounded top-full left-0 mt-1">
            {errors.terms}
          </span>
        )}
      </div>

      {/* Submit */}
      <button type="submit" className="text-white bg-blue px-5 py-2 rounded text-sm">
        Submit form
      </button>
    </form>
  );
}

export default TooltipForm;
