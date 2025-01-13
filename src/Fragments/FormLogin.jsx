import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserData, setLoginStatus } from "../utils/authUtils";
import InputForm from "../Elements/Input/index";
import Masuk from "../Elements/Button/Masuk";
import Google from "../Elements/Button/Google";
import Daftar from "../Elements/Button/Daftar";

const formLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const [input, setInput] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    const user = getUserData();
    if (
      user &&
      input.email === user.email &&
      input.password === user.password
    ) {
      setLoginStatus(true);
      navigate("/user");
    } else {
      alert("Wrong email or password");
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

        <Masuk type="submit" className="w-full bg-green-500">
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
