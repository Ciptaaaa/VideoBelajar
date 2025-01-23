import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveUserData } from "../utils/authUtils";
import InputForm from "../Elements/Input/index";
import Masuk from "../Elements/Button/Masuk";
import Flag from "../assets/flag_indo.svg";
import Google from "../Elements/Button/Google";

const formDaftar = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  //password toggle
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.password !== input.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    saveUserData(input);
    navigate("/login");
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="enter your full name"
          id="fullName"
          value={input.fullName}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <InputForm
          label="Email"
          type="email"
          name="email"
          placeholder="example@.com"
          id="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <div className="flex items-center border border-gray-300 rounded-l-md bg-gray-100 px-4">
              <img src={Flag} alt="Bendera Indonesia" className="h-5 w-5" />
              <select
                className="text-gray-700 bg-gray-100 text-sm outline-none border-none"
                name="selectFlag"
                id="selectFlag"
              >
                <option value="+62">+62</option>
                <option value="+123">+123</option>
                <option value="+742">+74</option>
              </select>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 80 15"
                strokeWidth="4.5"
                stroke="currentColor"
                className="h-4 w-4 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <input
              type="tel"
              name="phone"
              value={input.phone}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="628xx-xxxx-xxxx"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="12"
            />
          </div>
        </div>
        <InputForm
          label="Password"
          type="password"
          name="password"
          placeholder="**********"
          id="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          hasToggle={true}
        />
        <InputForm
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="**********"
          id="confirmPassword"
          value={input.confirmPassword}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          hasToggle={true}
        />
        <div className="text-right my-4">
          <Link
            to="/login"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Sudah punya akun?
          </Link>
        </div>
        <Masuk type="submit" className="w-full bg-green-500">
          Daftar
        </Masuk>
        <div className="my-4 flex items-center gap-4">
          <hr className="w-full border-gray-300" />
          <p className="text-sm text-gray-800 text-center">atau</p>
          <hr className="w-full border-gray-300" />
        </div>

        <Google />
      </form>
    </div>
  );
};

export default formDaftar;
