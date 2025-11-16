import React, { useState } from "react";
import GoogleIcon from "../assets/Social-icon.png";
import logo from "../assets/logo.png";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Signup form submitted:", form);
  };

  return (
    <>
      <Header />

      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-8 md:px-0 py-10 max-w-[360px] w-full mx-auto">

          {/* LOGO */}
          <div className="mb-10">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" />
            </div>
          </div>

          {/* TITLE */}
          <h2 className="text-3xl font-bold mb-6">Sign up</h2>

          {/* NAME */}
          <div className="mb-5">
            <label className="block text-sm mb-1 font-medium">Name*</label>
            <input
              type="text"
              placeholder="Student’s name"
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="block text-sm mb-1 font-medium">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="block text-sm mb-1 font-medium">Password*</label>
            <input
              type="password"
              placeholder="Create a password"
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters.</p>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-900 mt-2"
          >
            Get started
          </button>

          {/* GOOGLE BUTTON */}
          <button className="w-full mt-4 border p-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
            <img src={GoogleIcon} className="w-5" alt="google" />
            Sign up with Google
          </button>

          {/* LOGIN LINK */}
          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <a href="/login" className="font-semibold hover:underline">
              Log in
            </a>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:block bg-[#C3EBEB]"></div>
      </div>

      <Footer />
    </>
  );
}
