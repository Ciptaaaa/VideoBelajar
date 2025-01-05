import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarLogo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import avatarUser from "../assets/avatarUser.jpg"; // Avatar default
import InputForm from "../Elements/Input";
import Masuk from "../Elements/Button/Masuk";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userName = userData ? userData.fullName : "Guest";
  const navigate = useNavigate();

  // State untuk menyimpan avatar
  const [avatar, setAvatar] = useState(
    localStorage.getItem("avatar") || avatarUser
  );

  // State untuk menyimpan data input form
  const [name, setName] = useState(userData ? userData.fullName : "");
  const [email, setEmail] = useState(userData ? userData.email : "");
  const [phone, setPhone] = useState(userData ? userData.phone : "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State untuk menyimpan pesan error

  // Fungsi Logout
  const handleLogout = () => {
    // Hapus data user dari localStorage
    localStorage.removeItem("loggedin");
    navigate("/login");
  };

  // Fungsi Delete Account
  const handleDelete = () => {
    // Hapus data user dari localStorage
    localStorage.removeItem("user"); // Hapus data user dari localStorage
    localStorage.removeItem("loggedin"); // Hapus status login
    localStorage.removeItem("avatar"); // Hapus avatar
    navigate("/login"); // Redirect ke halaman login setelah penghapusan akun
  };

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") setName(value);
    if (id === "email") setEmail(value);
    if (id === "phone") setPhone(value);
    if (id === "password") setPassword(value);
    if (id === "confirmPassword") setConfirmPassword(value);
  };

  // Fungsi untuk menyimpan perubahan ke localStorage
  const handleSaveChanges = () => {
    // Validasi password dan confirmPassword
    if (password !== confirmPassword) {
      setErrorMessage("Password and confirm password do not match!");
      return; // Hentikan eksekusi jika password tidak cocok
    }

    // Update data user di localStorage jika password valid
    const updatedUser = {
      fullName: name,
      email: email,
      phone: phone,
      password: password, // simpan password baru
      confirmPassword: confirmPassword, // simpan confirm password baru
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setErrorMessage(""); // Clear error message after successful update
    alert("Changes saved successfully!");
  };

  // Fungsi untuk menangani perubahan avatar
  const handleAvatarChange = (e) => {
    const file = e.target.files[0]; // Ambil file yang dipilih oleh pengguna
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Avatar = reader.result; // Hasil konversi menjadi base64
        setAvatar(base64Avatar); // Set state avatar dengan gambar baru
        localStorage.setItem("avatar", base64Avatar); // Simpan avatar baru ke localStorage
      };
      reader.readAsDataURL(file); // Baca file sebagai data URL (base64)
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto max-w-[1200px] px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
          <Link to="/user" className="block">
            <img
              src={NavbarLogo}
              alt="Logo Video Belajar"
              className="h-6 md:h-8"
            />
          </Link>
          <Navbar
            menuItems={[
              { label: `Hi, ${userName}`, to: "/profile" },
              { label: "Admin", to: "/admin" },
              { label: "Logout", onClick: handleLogout },
            ]}
          />
        </div>
      </header>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
        <div className="flex border-b mb-4">
          <button className="p-2 focus:outline-none border-b-2 border-blue-500">
            Edit Profile
          </button>
          <button className="p-2 focus:outline-none ">History Checkout</button>
        </div>
        <div className="flex">
          <div className="w-1/3 p-4">
            <div className="flex flex-col items-center">
              <img
                src={avatar}
                alt="User Avatar"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <label
                htmlFor="avatar"
                className="block text-gray-700 font-bold mb-2"
              >
                Avatar
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="image/*"
                className="mt-2"
                onChange={handleAvatarChange} // Panggil fungsi untuk mengganti avatar
              />
            </div>
          </div>
          <div className="w-2/3 p-4">
            <form action="">
              <div className="mb-4">
                <InputForm
                  className="leading-tight focus:outline-none focus:shadow-outline"
                  label="Name"
                  id="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <InputForm
                  className="leading-tight focus:outline-none focus:shadow-outline"
                  label="Email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <InputForm
                  className="leading-tight focus:outline-none focus:shadow-outline"
                  label="Phone"
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <InputForm
                  className="leading-tight focus:outline-none focus:shadow-outline"
                  label="New Password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <InputForm
                  className="leading-tight focus:outline-none focus:shadow-outline"
                  label="Confirm Password"
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </div>

              {/* Tampilkan pesan kesalahan jika ada */}
              {errorMessage && (
                <div className="text-red-500 text-sm mt-2 mb-2">
                  {errorMessage}
                </div>
              )}

              <div className="flex items-center justify-between">
                <Masuk
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </Masuk>
                <Masuk
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-700"
                >
                  Delete Account
                </Masuk>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
