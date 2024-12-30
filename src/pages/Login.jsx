import React, { useState } from "react";
import NavbarLogo from "../assets/logo.png";
import AvatarLogo from "../assets/Avatar.png";
import { Link } from "react-router-dom";
import Daftar from "../Elements/Button/Daftar";
import InputForm from "../Elements/Input/index";
import Masuk from "../Elements/Button/Masuk";
import Google from "../Elements/Button/google";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto max-w-[1200px] px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
          <Link to="/login" className="block">
            <img
              src={NavbarLogo}
              alt="Logo Video Belajar"
              className="h-6 md:h-8"
            />
          </Link>

          <nav className="flex items-center space-x-2">
            <Link to="#">
              <img src={AvatarLogo} alt="Profil" className="h-10 w-10" />
            </Link>
          </nav>
        </div>
      </header>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg border-[0.1px]">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Masuk ke akun</h3>
            <p className="text-gray-500 font-normal font-sans">
              Yuk, lanjutin belajarmu di videobelajar.
            </p>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <InputForm
                label="Email"
                type="email"
                placeholder="example@mail.com"
                name="email"
              />
              <InputForm
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="******"
                name="password"
                showPassword={showPassword} // Menyediakan nilai showPassword
                togglePasswordVisibility={togglePasswordVisibility} // Fungsi untuk toggle visibilitas password
                hasToggle={true} // Mengaktifkan tombol toggle
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
        </div>
      </div>
    </>
  );
};

export default Login;
