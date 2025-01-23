import React from "react";
import { Link } from "react-router-dom";
import NavbarLogo from "../assets/logo.png"

const AdminHeader = () => {
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
          <li className="mb-4">
            <Link
              className="block text-gray-700 hover:bg-gray-200 rounded-md p-3 bg-gray-200"
              to="/Admin/Dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              className="block text-gray-700 hover:bg-gray-200 rounded-md p-3 "
              to="/Admin/Product"
            >
              Product
            </Link>
          </li>
          <li className="mb-4">
            <Link
              className="block text-gray-700 hover:bg-gray-200 rounded-md p-3 "
              to="/Admin/AddUser"
            >
              Add User
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminHeader;
