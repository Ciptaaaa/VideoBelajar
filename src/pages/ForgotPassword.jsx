import React, { useState } from "react";
import NavbarLogo from "../assets/logo.png";
import AvatarLogo from "../assets/Avatar.png";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../Elements/Input";
import Masuk from "../Elements/Button/Masuk";
import Google from "../Elements/Button/google";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.password1.value;
    if (!password || !confirmPassword || !email) {
      alert("Please fill in all fields.");
      return; // Hentikan jika ada field yang kosong
    }

    // Cek apakah password dan confirm password sama
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return; // Hentikan jika password tidak cocok
    }
    navigate("/login");
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
            {/* <span class="text-gray-800 text-lg mr-2">Kategori</span> */}
            <Link to="/profile">
              <img src={AvatarLogo} alt="Profil" className="h-10 w-10" />
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
              <InputForm
                label="Email"
                type="email"
                placeholder="example@mail.com"
                name="email"
              />
              {/* Password */}
              <InputForm
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="******"
                name="password"
                showPassword={showPassword} // Menyediakan nilai showPassword
                togglePasswordVisibility={togglePasswordVisibility} // Fungsi untuk toggle visibilitas password
                hasToggle={true} // Mengaktifkan tombol toggle
              />

              {/* Confirm Password */}
              <InputForm
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                placeholder="******"
                name="password1"
                showPassword={showPassword} // Menyediakan nilai showPassword
                togglePasswordVisibility={togglePasswordVisibility} // Fungsi untuk toggle visibilitas password
                hasToggle={true} // Mengaktifkan tombol toggle
              />
              <Masuk>Confirm Reset Password</Masuk>

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

export default ForgotPassword;
