import React, { useState, useContext } from "react";
import GoogleIcon from "../assets/Social-icon.png";
import logo from "../assets/logo.png";
import Header from "../components/Header";
import Footer from "../components/footer";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Invalid Credentials");
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center px-8 py-10 max-w-[360px] w-full mx-auto">
          <img src={logo} className="mb-10" />

          <h2 className="text-3xl font-bold mb-2">Log in</h2>
          <p className="text-gray-500 mb-6">
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border p-3 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full border p-3 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white p-3 rounded-lg"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <button className="w-full mt-4 border p-3 rounded-lg flex justify-center gap-2">
            <img src={GoogleIcon} className="w-5" />
            Sign in with Google
          </button>

          <p className="text-center mt-6 text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>

        <div className="hidden md:block bg-[#C3EBEB]"></div>
      </div>
      <Footer />
    </>
  );
}
