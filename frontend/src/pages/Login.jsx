import React from "react";
import GoogleIcon from "../assets/Social-icon.png";
import logo from "../assets/logo.png";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function Login() {
  return (
    <>
      <Header />

      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SECTION - FORM */}
        <div className="flex flex-col justify-center px-8 md:px-0 py-10 max-w-[360px] w-full mx-auto">

          {/* Logo */}
          <div className="mb-10">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-2">Log in</h2>
          <p className="text-gray-500 mb-6">
            Welcome back! Please enter your details.
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mb-5">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="w-4 h-4" />
              Remember for 30 days
            </label>

            <button className="text-sm text-gray-700 hover:underline">
              Forgot password
            </button>
          </div>

          {/* Sign In */}
          <button className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-900">
            Sign in
          </button>

          {/* Google */}
          <button className="w-full mt-4 border p-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
            <img src={GoogleIcon} className="w-5" alt="google" />
            Sign in with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>

        {/* RIGHT SECTION - IMAGE / BG */}
        <div className="hidden md:block bg-[#C3EBEB]">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] bg-white rounded-2xl border-6 border-black"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
