import React, { useState } from "react";
import Flag from "../assets/flag_indo.svg";
import NavbarLogo from "../assets/logo.png";
import AvatarLogo from "../assets/Avatar.png";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../Elements/Input/index";
import Masuk from "../Elements/Button/Masuk";
import Google from "../Elements/Button/google";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah submit default

    // Mengambil nilai input berdasarkan nama input
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.password1.value;
    // Cek apakah ada field yang kosong
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return; // Hentikan jika ada field yang kosong
    }

    // Cek apakah password dan confirm password sama
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return; // Hentikan jika password tidak cocok
    }

    // Jika semua validasi lolos, navigasi ke login
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
            <Link to="#">
              <img src={AvatarLogo} alt="Profil" className="h-10 w-10" />
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white p-8 rounded-lg border-[0.1px]">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Pendaftaran Akun
            </h3>
            <p className="text-gray-500 font-normal font-sans">
              Yuk, daftarkan akunmu sekarang juga!
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <InputForm
                label="Full Name"
                type="text"
                placeholder="Enter your name.."
                name="fullName"
              />

              {/* Email */}
              <InputForm
                label="Email"
                type="email"
                placeholder="example@mail.com"
                name="email"
              />

              {/* Phone Number */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <div className="flex items-center border border-gray-300 rounded-l-md bg-gray-100 px-4">
                    <img
                      src={Flag}
                      alt="Bendera Indonesia"
                      className="h-5 w-5"
                    />
                    <select className="text-gray-700 bg-gray-100 text-sm outline-none border-none">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="628xx-xxxx-xxxx"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength="12"
                  />
                </div>
              </div>

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

              {/* Submit Button */}
              <Masuk>Daftar</Masuk>

              {/* Or Section */}
              <div className="my-4 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">atau</p>
                <hr className="w-full border-gray-300" />
              </div>

              {/* Google Button */}
              <Google />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
