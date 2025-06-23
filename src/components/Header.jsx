import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarLogo from "../assets/logo.png";
import { logoutUser } from "../utils/authUtils";
import useUserStore from "../services/api/useUserStore";
import { toast } from "sonner";

const Header = () => {
  const { currentUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logout berhasil!");
    setTimeout(() => {
      toast.dismiss();
      logoutUser(navigate);
    }, 1000);
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
            currentUser
              ? { label: `Hi, ${currentUser.name}`, to: "/profile" }
              : { label: "Login", to: "/login" },
            { label: "Admin", to: "/Admin/Dashboard" },
            currentUser && { label: "Logout", onClick: handleLogout },
          ].filter(Boolean)} // Filter undefined jika currentUser null
        />
      </div>
    </header>
  );
};

export default Header;
