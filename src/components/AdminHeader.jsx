import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarLogo from "../assets/logo.png";

const AdminHeader = () => {
  const location = useLocation();
  return (
    <aside className="w-full md:w-64 bg-white shadow-md p-4 md:fixed md:h-full md:overflow-y-auto">
      <div className="flex items-center justify-center mb-8">
        <Link to="/user" className="block">
          <img
            src={NavbarLogo}
            alt="Logo Video Belajar"
            className="h-6 md:h-8"
          />
        </Link>
      </div>
      <nav>
        <ul>
          {[
            { name: "Dashboard", path: "/Admin/Dashboard" },
            { name: "Add Product", path: "/Admin/Product" },
            { name: "Add User", path: "/Admin/AddUser" },
          ].map((item) => (
            <li className="mb-4" key={item.path}>
              <Link
                className={`block text-gray-700 hover:bg-gray-200 rounded-md p-3 ${
                  location.pathname === item.path ? "bg-gray-300" : "" }`}
                to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminHeader;
