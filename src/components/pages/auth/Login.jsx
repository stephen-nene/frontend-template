import React, { useState } from "react";
import { useUserStore } from "../../../store/useUserStore";

import { toast } from "sonner";
import { Eye, EyeOff, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { handleServerLogin } from "../../../services/requests/auth";

import { SideImg } from "./Reset";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  // console.log(user);

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await handleServerLogin(formData, navigate);
        // console.log(res);
      } catch (error) {
        let errorMSG =
          error.response.data.detail || "server error, try again later";
        toast.error(errorMSG);
        console.log("Caught error is", error.response.data.detail);
      }
    } else {
      toast.error("Please fix the errors in the form.", 2);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="font-[sans-serif] min-h-screen flex items-center justify-center max-w- screen sm:px-4 lg:px-40">
      <div className=" min-h-screen grid lg:grid-cols-2 items-center gap-4 bg-white rounded-md overflow-hidden w-full md:max -w-[80%]">
        {/* Right Side - Form */}
        <div className="p-6 w-full">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold">
                Welcome Back {(user && user?.username) || user?.first_name} to
              </h3>
              <h3 className="text-gray-800 text-3xl font-extrabold">
                Tender<span className="text-green-500">-Hub</span>
              </h3>
            </div>

            {/* Email Input */}
            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-green-600 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter email"
                />
                <Mail className="w-[18px] h-[18px] absolute right-4" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="mt-4">
              <label className="text-gray-800 text-[15px] mb-2 block">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={!showPassword ? "password" : "text"}
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-green-600 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter password"
                />
                {showPassword ? (
                  <EyeOff
                    onClick={() => setShowPassword(!showPassword)}
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                  />
                ) : (
                  <Eye
                    onClick={() => setShowPassword(!showPassword)}
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                  />
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-wrap items-center justify-between gap-4 my-8">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 shrink-0 text-green-600 focus:ring-green-500 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
              <div>
                <Link
                  to="/forgot"
                  className="text-green-600 font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 px-6 text-xl tracking-wide rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none"
              >
                Login
              </button>
            </div>

            {/* Register Link */}
            <p className="text-sm mt-4 text-gray-800">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-green-600 font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>
        {/* Left Side - Image */}
        <SideImg className="hidden " height="full" />
      </div>
    </div>
  );
}
