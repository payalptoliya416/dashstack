import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import {motion} from 'framer-motion';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    password: "",
    general: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "", general: "" }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", name: "", general: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.name) {
      newErrors.name = "Username is required";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find(
      (user: any) => user.email === formData.email
    );

    if (existingUser) {
      setErrors((prev) => ({
        ...prev,
        general: "Email already exists",
      }));
      return;
    }

    const newUser = {
      email: formData.email,
      name: formData.name,
      password: formData.password,
    };

    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    dispatch(login(newUser));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-[url('/images/loginbg.png')] bg-cover bg-center flex items-center justify-center overflow-y-auto px-4 py-10">
       <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4, ease: "easeOut" }} className="bg-white py-14 px-6 sm:px-10 md:py-[90px] md:px-[57px] rounded-xl w-full max-w-[500px] md:max-w-[630px] shadow-lg">
        <h1 className="text-2xl md:text-[32px] mb-[15px] font-bold text-[#202224] text-center">
          Create an Account
        </h1>
        <h2 className="font-semibold text-sm sm:text-lg mb-8 sm:mb-[37px] text-[#202224]/80 text-center">
          Create an account to continue
        </h2>

        {errors.general && (
          <p className="text-red-500 text-center font-semibold mb-4">
            {errors.general}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="font-semibold text-base sm:text-lg text-[#202224]/80 mb-[10px] block"
            >
              Email address:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="bg-[#F1F4F9] rounded-md py-3 px-4 sm:p-4 text-[#202224] w-full"
            />
            {errors.email && (
              <p className="text-red-500 mt-2 text-sm font-medium">
                {errors.email}
              </p>
            )}
          </div>

          {/* Username */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="font-semibold text-base sm:text-lg text-[#202224]/80 mb-[10px] block"
            >
              Username
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Username"
              className="bg-[#F1F4F9] rounded-md py-3 px-4 sm:p-4 text-[#202224] w-full"
            />
            {errors.name && (
              <p className="text-red-500 mt-2 text-sm font-medium">
                {errors.name}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="font-semibold text-base sm:text-lg text-[#202224]/80 mb-[10px] block"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="bg-[#F1F4F9] rounded-md py-3 px-4 sm:p-4 text-[#202224] w-full"
            />
            {errors.password && (
              <p className="text-red-500 mt-2 text-sm font-medium">
                {errors.password}
              </p>
            )}
          </div>

      <div className="flex items-center mt-6 mb-10 gap-4">
        <label htmlFor="terms" className="relative flex items-center cursor-pointer">
            <input
            id="terms"
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="peer appearance-none w-6 h-6 border border-[#A3A3A3] rounded-md checked:border-black"
            />
            <span className="pointer-events-none absolute left-2 top-1 text-[#656565] text-sm scale-110 hidden peer-checked:block">
            ✓
            </span>
            <span className="ml-3 text-[#202224]/60 text-base sm:text-lg font-semibold">
            I accept terms and conditions
            </span>
        </label>
        </div>

          <div className="mx-4 sm:mx-10">
            <button
              type="submit"
              className="text-white bg-[#4880FF]/90 rounded-md w-full sm:mb-[18px] py-2 sm:py-[15px] hover:bg-[#3c6fe6] transition"
            >
              Register
            </button>
          </div>

          <p className="text-center text-[#202224]/65 text-base sm:text-lg font-semibold mt-4 flex items-center flex-col sm:flex-row justify-center gap-1">
            Already have an account?
            <Link
              to="/"
              className="text-[#5A8CFF] text-base sm:text-lg font-semibold underline"
            >
              Login
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Register;
