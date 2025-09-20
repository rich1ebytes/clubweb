// src/pages/Login.jsx
import React, { useState, useEffect } from "react"; // Import useEffect
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const pageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Check for existing login on component mount
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    const userRole = localStorage.getItem("userRole");
    if (userToken && userRole === "club") {
      navigate("/dashboard");
    }
  }, [navigate]); // Dependency array includes navigate to prevent lint warnings

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/login", formData);

      localStorage.setItem("userToken", response.data.token);
      localStorage.setItem("userEmail", response.data.email);
      localStorage.setItem("userRole", response.data.role); // Store the role

      // Always navigate to dashboard for club users
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
      className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center text-brand-primary">
        Club Member Login
      </h2>
      <p className="text-center text-gray-500">
        Sign in to manage events and openings.
      </p>
      <div className="text-center">
        <button
          onClick={() => navigate("/admin")}
          className="text-sm text-brand-primary hover:text-brand-secondary underline"
        >
          Admin Login
        </button>
      </div>

      {error && (
        <div className="text-center p-3 bg-red-100 text-red-600 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 sr-only"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 sr-only"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
            tabIndex={-1}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-colors"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
