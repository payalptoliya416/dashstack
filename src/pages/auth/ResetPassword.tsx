// src/pages/ResetPassword.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!password || !confirm) {
      setError("All fields are required");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
    setError("Password must be at least 6 characters long");
    return;
    }
    
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((user: any) => {
      if (user.email === email) {
        return { ...user, password };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setError("");
    setSuccess("Password successfully updated!");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        Invalid access. No email found.
      </div>
    );
  }

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
          Reset Password
        </h1>
        <p className="text-[#202224]/80 text-center mb-8 sm:text-lg text-sm">
          Set a new password for <span className="font-semibold">{email}</span>
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
          <label className="block font-semibold text-base text-[#202224]/80 mb-2">
            New Password:
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
              setSuccess("");
            }}
            className="bg-[#F1F4F9] rounded-md py-3 px-4 text-[#202224] w-full mb-6"
          />

          <label className="block font-semibold text-base text-[#202224]/80 mb-2">
            Confirm Password:
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
              setError("");
              setSuccess("");
            }}
            className="bg-[#F1F4F9] rounded-md py-3 px-4 text-[#202224] w-full mb-6"
          />

          <button
            type="submit"
            className="cursor-pointer text-white bg-[#4880FF]/90 rounded-md w-full py-3 hover:bg-[#3c6fe6] transition"
          >
            Reset Password
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default ResetPassword;
