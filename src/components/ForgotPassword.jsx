import React, { useState } from "react";
import PasswordLogo from "../assets/logo password.svg";
import PasswordLogoOpen from "../assets/logo-password-open.svg";
import NavbarLogo from "../assets/logo.png";
import AvatarLogo from "../assets/Avatar.png";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <header class="bg-white shadow-sm">
        <div class="container mx-auto max-w-[1200px] px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
          <Link to="/login" class="block">
            <img src={NavbarLogo} alt="Logo Video Belajar" class="h-6 md:h-8" />
          </Link>

          <nav class="flex items-center space-x-2">
            {/* <span class="text-gray-800 text-lg mr-2">Kategori</span> */}
            <Link to="/profile">
              <img src={AvatarLogo} alt="Profil" class="h-10 w-10" />
            </Link>
          </nav>
        </div>
      </header>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg border-[0.1px]">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Lupa Akun</h3>
            <p className="text-gray-500 font-normal font-sans">
              Yuk, Reset password kamu sekarang juga!
            </p>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Password Baru <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <img
                        className="h-5 w-5"
                        src={PasswordLogo}
                        alt="eye_password_Hide"
                      />
                    ) : (
                      <img
                        className="h-5 w-5"
                        src={PasswordLogoOpen}
                        alt="eye_password_Open"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Konfirmasi Password Baru{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <img
                        className="h-5 w-5"
                        src={PasswordLogo}
                        alt="eye_password_Hide"
                      />
                    ) : (
                      <img
                        className="h-5 w-5"
                        src={PasswordLogoOpen}
                        alt="eye_password_Open"
                      />
                    )}
                  </button>
                </div>
                <div className="text-right my-4">
                  <Link
                    to="/login"
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Sudah Punya Akun?
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Konfirmasi Reset Password
                </button>
              </div>

              <div className="my-4 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">atau</p>
                <hr className="w-full border-gray-300" />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    className="inline mr-2"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fbbd00"
                      d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    />
                    <path
                      fill="#0f9d58"
                      d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    />
                    <path
                      fill="#31aa52"
                      d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    />
                    <path
                      fill="#3c79e6"
                      d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    />
                    <path
                      fill="#cf2d48"
                      d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    />
                    <path
                      fill="#eb4132"
                      d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    />
                  </svg>
                  Masuk dengan Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
