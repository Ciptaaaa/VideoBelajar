import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import InputForm from "../Elements/Input/index";
import Masuk from "../Elements/Button/Masuk";
import useUserStore from "../services/api/useUserStore";
const AddUser = () => {
  const { addUser, users, fetchUsers } = useUserStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
    password: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addUser(formData); // Tambah user ke API
    if (result.success) {
      alert("User berhasil ditambahkan!");
      fetchUsers();
      setFormData({ name: "", email: "", phone: "", avatar: "", password: "" });
    } else {
      alert("Gagal menambahkan user.");
    }
  };
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
          <form action="#" method="post" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputForm
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <InputForm
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <InputForm
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <InputForm
                label="Avatar URL"
                type="url"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
              />
              <InputForm
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
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
            <div className="overflow-x-hidden">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Avatar</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Email</th>
                    <th className="border border-gray-300 px-4 py-2">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="text-center">
                      <td className="border border-gray-300 px-4 py-2">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full mx-auto"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.email}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.phone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
