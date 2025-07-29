

import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

 const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  if (!email) {
    setError("Email is required");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userExists = users.some((user: any) => user.email === email);

  if (userExists) {
    setError("");
    setSuccess("Redirecting to reset password...");
    
    setTimeout(() => {
      navigate("/reset-password", { state: { email } }); 
    }, 1000);
  } else {
    setSuccess("");
    setError("Email not found in our system.");
  }
};


  return (
    <div className="min-h-screen w-full bg-[url('/images/loginbg.png')] bg-cover bg-center flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white py-14 px-6 sm:px-10 md:py-[90px] md:px-[57px] rounded-xl w-full max-w-[500px] md:max-w-[630px] shadow-lg"
      >
        <h1 className="text-2xl md:text-[32px] font-bold text-[#202224] text-center mb-4">
          Forgot Password
        </h1>
        <p className="text-[#202224]/80 text-center mb-8 sm:text-lg text-sm">
          Enter your registered email.
        </p>

        {error && (
          <p className="text-red-500 text-center font-semibold mb-4">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-600 text-center font-semibold mb-4">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="font-semibold text-base sm:text-lg text-[#202224]/80 mb-2 block"
          >
            Email address:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
              setSuccess("");
            }}
            placeholder="Enter Email Address"
            className="bg-[#F1F4F9] rounded-md py-3 px-4 sm:p-4 text-[#202224] w-full mb-6"
          />

          <button
            type="submit"
            className="cursor-pointer text-white bg-[#4880FF]/90 rounded-md w-full py-3 hover:bg-[#3c6fe6] transition"
          >
            Send Reset Link
          </button>

          <p
            onClick={() => navigate("/")}
            className="text-center mt-6 text-[#5A8CFF] underline cursor-pointer font-semibold"
          >
            Back to Login
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default ForgotPassword;
