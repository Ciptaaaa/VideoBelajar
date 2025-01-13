import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarLogo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import avatarUser from "../assets/avatarUser.jpg"; // Avatar default
import InputForm from "../Elements/Input";
import Masuk from "../Elements/Button/Masuk";
import {
  getUserData,
  getAvatar,
  logoutUser,
  deleteUserAccount,
  saveUserChanges,
} from "../utils/authUtils";

const Profile = () => {
  const navigate = useNavigate();

  // Ambil data pengguna dari authUtils
  const userData = getUserData();
  const userName = userData ? userData.fullName : "Guest";

  // State untuk avatar dan form
  const [avatar, setAvatar] = useState(getAvatar(avatarUser));
  const [name, setName] = useState(userData ? userData.fullName : "");
  const [email, setEmail] = useState(userData ? userData.email : "");
  const [phone, setPhone] = useState(userData ? userData.phone : "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Logout handler
  const handleLogout = () => {
    logoutUser(navigate);
  };

  // Delete account handler
  const handleDelete = () => {
    deleteUserAccount(navigate);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") setName(value);
    if (id === "email") setEmail(value);
    if (id === "phone") setPhone(value);
    if (id === "password") setPassword(value);
    if (id === "confirmPassword") setConfirmPassword(value);
  };

  // Save changes handler
  const handleSaveChanges = () => {
    const userData = { fullName: name, email, phone };
    const success = saveUserChanges(
      userData,
      password,
      confirmPassword,
      setErrorMessage
    );
    if (success) {
      alert("Changes saved successfully!");
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
