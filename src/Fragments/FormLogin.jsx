import React, { useState } from "react";
import Daftar from "../Elements/Button/Daftar";
import InputForm from "../Elements/Input/index";
import Masuk from "../Elements/Button/Masuk";
import Google from "../Elements/Button/Google";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <InputForm
          label="Email"
          type="email"
          placeholder="example@mail.com"
          name="email"
          id="email"
          autoComplete="email"
        />
        <InputForm
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="******"
          name="password"
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

        <Masuk>Login</Masuk>
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

export default FormLogin;
