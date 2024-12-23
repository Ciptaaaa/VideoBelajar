import React, { useState } from "react";
import NavbarLogo from "../assets/logo.png";
import AvatarLogo from "../assets/Avatar.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  //gunakan state untuk mengontrol dropdown
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  //buat toggle dropdown
  const toggleDropDown = () => {
    setIsDropDownOpen((prev) => !prev);
  };
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
        <Link to="/" className="block">
          <img
            src={NavbarLogo}
            alt="Logo Video Belajar"
            className="h-6 md:h-8"
          />
        </Link>

        <nav className="flex items-center space-x-2">
          <button onClick={toggleDropDown} className="focus:outline-none">
            <img src={AvatarLogo} alt="Profil" className="h-10 w-10" />
          </button>
          {isDropDownOpen && (
            <div className=" absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 ">
              <ul className="py-1">
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-500 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
