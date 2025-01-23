import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarLogo from "../assets/logo.png";
import { getUserName, logoutUser } from "../utils/authUtils";

const Header = ({ navigate }) => {
  const userName = getUserName();

  const handleLogout = () => {
    logoutUser(navigate);
  };

  return (
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
            { label: "Admin", to: "/Admin/Dashboard" },
            { label: "Logout", onClick: handleLogout },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
