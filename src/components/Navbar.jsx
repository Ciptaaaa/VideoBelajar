import React, { useState } from "react";
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
    <nav className="relative flex items-center space-x-2">
      <button onClick={toggleDropDown} className="focus:outline-none">
        <img src={AvatarLogo} alt="Profil" className="h-10 w-10" />
      </button>
      {isDropDownOpen && (
        <div className=" absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 ">
          <ul className="py-1">
            <li>
              <Link
                to="/login"
                className="block px-2 py-1 text-gray-500 hover:bg-gray-100"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
