import React, { useState } from "react";
import InputForm from "../Elements/Input";
import Masuk from "../Elements/Button/Masuk";
import Google from "../Elements/Button/Google";
import { useNavigate } from "react-router-dom";

const formForgotPass = () => {
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
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Email"
          type="email"
          placeholder="example@mail.com"
          name="email"
          id="email"
        />
        {/* Password */}

        <InputForm
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="******"
          name="password"
          id="password"
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
          id="password1"
          showPassword={showPassword} // Menyediakan nilai showPassword
          togglePasswordVisibility={togglePasswordVisibility} // Fungsi untuk toggle visibilitas password
          hasToggle={true} // Mengaktifkan tombol toggle
        />
        <Masuk
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md text-center"
        >
          Confirm Reset Password
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

export default formForgotPass;
