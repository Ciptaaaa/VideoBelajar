import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../Elements/Input/index";
import Masuk from "../Elements/Button/Masuk";
import Google from "../Elements/Button/Google";
import Daftar from "../Elements/Button/Daftar";
import useUserStore from "../services/api/useUserStore";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const formLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, setCurrentUser } = useUserStore();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const [input, setInput] = useState({ email: "", password: "" });
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(API_URL);
      const users = response.data;

      const user = users.find(
        (u) => u.email === input.email && u.password === input.password
      );

      if (user) {
        const safeUserData = {
          name: user.name,
          fullName: user.fullName,
          avatar: user.avatar,
        };
        localStorage.setItem("user", JSON.stringify(safeUserData));
        setCurrentUser(user); // set ke zustand
        localStorage.setItem("loggedin", "true");
        navigate("/user");
      } else {
        alert("Email atau password salah.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Terjadi kesalahan saat login.");
    }
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        className="space-y-6"
        action="#"
        method="POST"
        onSubmit={handleLogin}
      >
        <InputForm
          label="Email"
          type="email"
          placeholder="example@mail.com"
          name="email"
          id="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <InputForm
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="******"
          name="password"
          id="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          hasToggle={true}
        />
        <div className="text-right my-4">
          <Link
            to="/Forgot-Password"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Lupa Password?
          </Link>
        </div>

        <Masuk type="submit" className="w-full bg-green-500 text-white">
          Login
        </Masuk>
        <Daftar>Daftar</Daftar>
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

export default formLogin;
