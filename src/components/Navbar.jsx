import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUserStore from "../services/api/useUserStore";
const Navbar = ({ menuItems = [] }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const { currentUser, fetchCurrentUser } = useUserStore();

  useEffect(() => {
    if (!currentUser) {
      fetchCurrentUser(); // Panggil saat component mount
    }
  }, []);

  if (!currentUser) return null;

  const toggleDropDown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  return (
    <nav className="relative flex items-center space-x-2">
      <button onClick={toggleDropDown} className="focus:outline-none">
        <img
          src={currentUser.avatar} // Menggunakan avatar yang sesuai dengan status login
          alt="Profil"
          className="h-8 w-8 rounded-full object-cover"
        />
      </button>
      {isDropDownOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <ul className="py-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                {/* Jika item memiliki onClick, gunakan button, jika tidak, gunakan Link */}
                {item.onClick ? (
                  <button
                    onClick={item.onClick} // Memastikan fungsi dipanggil saat logout
                    className="block w-full px-2 py-1 text-gray-500 hover:bg-gray-100 text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className="block px-2 py-1 text-gray-500 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
