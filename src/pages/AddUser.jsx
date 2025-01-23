import React from "react";
import AdminHeader from "../components/AdminHeader";
import InputForm from "../Elements/Input/index";
import Masuk from "../Elements/Button/Masuk";

const AddUser = () => {
  return (
    <>
      <AdminHeader />
      <div className="flex-1 p-6 md:ml-64">
        <div className="mb-6">
          <div className="text-2xl font-bold text-gray-900">
            Create New User
          </div>
        </div>
        <div className="bg-white border-[0.1px] rounded-lg p-6">
          <form action="#" method="post">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-2 text-lg ">
                <InputForm
                  label="Name"
                  type="Text"
                  placeholder="Masukan Nama User yang mau Ditambahkan"
                  name="nameNewUser"
                  id="nameNewUser"
                  
                />
              </div>
              <div className="mb-2 text-lg">
                <InputForm
                  label="Email"
                  type="email"
                  placeholder="Masukan Email User yang mau Ditambahkan"
                  name="emailNewUser"
                  id="emailNewUser"
                />
              </div>
              <div className="mb-2 text-lg">
                <InputForm
                  label="Phone"
                  type="tel"
                  placeholder="Masukan Nomor Telefon User yang mau Ditambahkan"
                  name="phoneNewUser"
                  id="phoneNewUser"
                />
              </div>
              <div className="mb-2 text-lg">
                <InputForm
                  label="Avatar Url"
                  type="url"
                  placeholder="Masukan link Avatar User yang mau Ditambahkan"
                  name="avatarNewUser"
                  id="avatarNewUser"
                />
              </div>
              <div className="mb-2 text-lg">
                <InputForm
                  label="Password"
                  type="password"
                  placeholder="Masukan Password User yang mau Ditambahkan"
                  name="passwordNewUser"
                  id="passwordNewUser"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Masuk
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save Changes
              </Masuk>
            </div>
          </form>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            User List
          </h2>
          <div className="bg-white border-[0.1px] rounded-lg p-6">
            <div className="overflow-x-hidden"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
