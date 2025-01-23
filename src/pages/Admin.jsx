import React from "react";
import Masuk from "../Elements/Button/Masuk";
import AdminHeader from "../components/AdminHeader";
const Admin = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <AdminHeader />
      <main className="flex-1 p-6 md:ml-64">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
            Admin Dashboard
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <Masuk
              type="button"
              //   onClick={}
              className="bg-red-500 hover:bg-red-700"
            >
              Logout
            </Masuk>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border-[0.1px] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Total User
            </h2>
            <p className="text-3xl font-bold text-gray-900">200</p>
          </div>
          <div className="bg-white border-[0.1px] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Total Order
            </h2>
            <p className="text-3xl font-bold text-gray-900">67</p>
          </div>
          <div className="bg-white border-[0.1px] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Total Product
            </h2>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>
          <div className="bg-white border-[0.1px] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              User Online
            </h2>
            <p className="text-3xl font-bold text-gray-900">1</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="bg-white border-[0.1px] rounded-lg p-6">
            <ul>
              <li className="mb-2 border-b pt-2">
                <p className="text-gray-900">
                  User <span className="font-semibold">Jhon Dee</span>{" "}
                  Registered
                </p>
                <p className="text-gray-600 text-sm">2 Hours Ago</p>
              </li>
              <li className="mb-2 border-b pt-2">
                <p className="text-gray-900">
                  Order <span className="font-semibold">#4321</span> Success
                </p>
                <p className="text-gray-600 text-sm">2 Hours Ago</p>
              </li>
              <li className="mb-2 border-b pt-2">
                <p className="text-gray-900">
                  Product <span className="font-semibold">New Product</span>{" "}
                  Added
                </p>
                <p className="text-gray-600 text-sm">2 Hours Ago</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
