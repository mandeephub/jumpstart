import React, { useState } from "react";
import GoogleIcon from "../assets/Social-icon.png";
import logo from "../assets/logo.png";
import Header from "../components/Header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

// CORRECT basePath (no /v1)
const basePath = "https://jumpstart-backend.alwaysdata.net/api/v1";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch(`${basePath}/user/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("REGISTER RESPONSE:", data);

      if (res.ok) {
        setMsg("Signup successful!");

        // redirect after signup success
        setTimeout(() => {
          navigate("/login");
        }, 500);

      } else {
        setMsg(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("SIGNUP ERROR:", error);
      setMsg("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <>
      <Header />

      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-8 md:px-0 py-10 max-w-[360px] w-full mx-auto">

          <div className="mb-10">
            <img src={logo} alt="logo" />
          </div>

          <h2 className="text-3xl font-bold mb-6">Sign up</h2>

          {/* NAME */}
          <div className="mb-5">
            <label className="block text-sm mb-1 font-medium">Name*</label>
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          {/* MOBILE */}
          <div className="mb-5">
            <label className="block text-sm mb-1 font-medium">Mobile*</label>
            <input
              type="number"
              placeholder="Mobile number"
              onChange={(e) => handleChange("mobile", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="block text-sm mb-1 font-medium">Email*</label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="block text-sm mb-1 font-medium">Password*</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mb-4">
            <label className="block text-sm mb-1 font-medium">Confirm Password*</label>
            <input
              type="password"
              placeholder="Re-enter password"
              onChange={(e) =>
                handleChange("password_confirmation", e.target.value)
              }
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          {/* SUBMIT */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-900 mt-2 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Get started"}
          </button>

          <button className="w-full mt-4 border p-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
            <img src={GoogleIcon} className="w-5" alt="google" />
            Sign up with Google
          </button>

          {msg && (
            <p className="text-center mt-4 text-sm text-red-600">{msg}</p>
          )}
        </div>

        <div className="hidden md:block bg-[#C3EBEB]"></div>
      </div>

      <Footer />
    </>
  );
}
