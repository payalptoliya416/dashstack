import { useState } from "react";
import { Check, Info } from "lucide-react";

function NativeForm() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    terms: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.first) newErrors.first = "First name is required.";
    if (!form.last) newErrors.last = "Last name is required.";
    if (!form.username) newErrors.username = "Please choose a username.";
    if (!form.city) newErrors.city = "Please provide a valid city.";
    if (!form.state) newErrors.state = "Please provide a valid state.";
    if (!form.zip) newErrors.zip = "Please provide a valid zip.";
    if (!form.terms) newErrors.terms = "You must agree before submitting.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });

    if (submitted) {
      setErrors(validate());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Form submitted successfully!");
    }
  };

  const renderField = (name: string, label: string, placeholder?: string) => (
    <div className="relative">
      <label className="text-sm mb-2 block font-semibold">{label}</label>
      <input
        type="text"
        name={name}
        value={form[name as keyof typeof form] as string}
        onChange={handleChange}
        placeholder={placeholder}
        className={`border rounded py-2 px-3 w-full ${
          submitted && errors[name]
            ? "border-[#d13b4c]"
            : submitted && form[name as keyof typeof form]
            ? "border-[#25B865]"
            : "border-gray-100"
        }`}
      />
      {submitted && errors[name] && (
        <>
          <Info className="absolute right-3 top-1/2 -translate-y-1/3 text-[#d13b4c]" size={20} />
          <p className="text-[#d13b4c] text-xs mt-1">{errors[name]}</p>
        </>
      )}
      {submitted && !errors[name] && form[name as keyof typeof form] && (
        <>
          <Check className="absolute right-3 top-1/2 -translate-y-1/3 text-[#25B865]" size={20} />
          <p className="text-[#25B865] text-xs mt-1">Looks good!</p>
        </>
      )}
    </div>
  );

  return (
    <form className="p-6" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7 mb-5 sm:mb-7">
        {renderField("first", "First name")}
        {renderField("last", "Last name")}
        {renderField("username", "Username", "Username")}
      </div>

      <div className="grid grid-cols-12 gap-5 sm:gap-7 mb-7">
        <div className="col-span-12 lg:col-span-6">{renderField("city", "City", "City")}</div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">{renderField("state", "State", "State")}</div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">{renderField("zip", "Zip", "Zip")}</div>
      </div>

      <div className="mb-7">
        <label className={`flex items-center ${ submitted && errors.terms ? "text-[#d13b4c]" : ""}`}>
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className={`appearance-none w-5 h-5 bg-[#EEF0F3] border-none rounded cursor-pointer 
             checked:bg-[#3E97FF] checked:border-[#3E97FF] relative 
             checked:after:content-['✔'] checked:after:absolute checked:after:text-white 
             checked:after:font-bold checked:after:text-[12px] checked:after:left-[5px] checked:after:top-[1px] me-2 ${
              submitted && errors.terms ? "border-[#d13b4c]" : "border-gray-100"
            }`}
          />
          Agree to terms and conditions
        </label>
        {submitted && errors.terms && (
          <p className="text-[#d13b4c] text-xs mt-1">{errors.terms}</p>
        )}
      </div>

      <button type="submit" className="text-white bg-[#3E97FF] px-5 py-2 rounded text-sm">
        Submit form
      </button>
    </form>
  );
}

export default NativeForm;
