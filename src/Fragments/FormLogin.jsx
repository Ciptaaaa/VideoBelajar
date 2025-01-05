import React, { useState } from "react";
import Daftar from "../Elements/Button/Daftar";
import InputForm from "../Elements/Input/index";
import Masuk from "../Elements/Button/Masuk";
import Google from "../Elements/Button/Google";
import { Link, useNavigate } from "react-router-dom";

const formLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/user");
    } else {
      alert("Wrong email Or Passowrd");
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
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          id="email"
          autoComplete="email"
        />
        <InputForm
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="******"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          showPassword={showPassword} // Menyediakan nilai showPassword
          togglePasswordVisibility={togglePasswordVisibility} // Fungsi untuk toggle visibilitas password
          hasToggle={true} // Mengaktifkan tombol toggle
          id="password"
        />

        <div className="text-right my-4">
          <Link
            to="/Forgot-Password"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Lupa Password?
          </Link>
        </div>

        <Masuk
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md text-center"
        >
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
