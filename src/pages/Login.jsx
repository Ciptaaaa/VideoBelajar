import React from "react";
import NavbarLogo from "../assets/logo.png";
import AvatarLogo from "../assets/Avatar.png";
import { Link } from "react-router-dom";
import FormLogin from "../Fragments/FormLogin";

const Login = () => {
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
          <FormLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
