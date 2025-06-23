import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import InputForm from "../Elements/Input";
import Masuk from "../Elements/Button/Masuk";
import useUserStore from "../services/api/useUserStore";
import { toast } from "sonner";
import Header from "../components/Header";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser, deleteUser } = useUserStore();
  const [isEdit, setIsEdit] = useState(false);
  const [editIsId, setEditIsId] = useState(null);

  const handleDelete = async () => {
    toast(
      (t) => (
        <div>
          <p className="font-semibold">
            Apakah Anda yakin ingin menghapus akun?
          </p>
          <div className="mt-3 flex justify-end gap-2">
            <button
              onClick={() => toast.dismiss(t)}
              className="px-3 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300"
            >
              Tidak
            </button>
            <button
              onClick={async () => {
                toast.dismiss(t);
                await deleteUser(currentUser.id);
                toast.success("Akun berhasil dihapus.");
                navigate("/login");
              }}
              className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600"
            >
              Ya
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
        position: "middle-center",
      }
    );
  };

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        id: currentUser.id,
        name: currentUser.name || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        password: "", // jangan autofill password
      });
    }
  }, [currentUser]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    toast(
      (t) => (
        <div>
          <p className="font-semibold text-center">
            Apakah Anda yakin ingin menyimpan perubahan?
          </p>
          <div className="mt-3 flex justify-center gap-3">
            <button
              onClick={() => toast.dismiss(t)}
              className="px-4 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300"
            >
              Tidak
            </button>
            <button
              onClick={() => {
                toast.dismiss(t);
                if (isEdit) {
                  updateUser({ ...formData, id: editIsId });
                  setIsEdit(false);
                  setEditIsId(null);
                } else {
                  updateUser(formData);
                }

                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  password: "",
                });

                toast.success("Perubahan berhasil disimpan!");
              }}
              className="px-4 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              Ya
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
        position: "top-center",
      }
    );
  };

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
        <div className="flex border-b mb-4">
          <button className="p-2 focus:outline-none border-b-2 border-blue-500">
            Edit Profile
          </button>
          <button className="p-2 focus:outline-none ">History Checkout</button>
        </div>
        <div className="flex">
          <div className="w-1/3 p-4">
            <div className="flex flex-col items-center">
              {currentUser && (
                <img
                  src={currentUser.avatar}
                  alt="User Avatar"
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
              )}
              <label
                htmlFor="avatar"
                className="block text-gray-700 font-bold mb-2"
              >
                Avatar
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="image/*"
                className="mt-2"
              />
            </div>
          </div>
          <div className="w-2/3 p-4">
            <form action="post" onSubmit={handleSubmit}>
              <div className="mb-4">
                {Object.keys(formData).map(
                  (key) =>
                    key !== "id" && (
                      <div
                        key={key}
                        className="leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <InputForm
                          label={key}
                          type={key === "password" ? "password" : "text"}
                          name={key}
                          value={formData[key]}
                          onChange={handleChange}
                        />
                      </div>
                    )
                )}
              </div>

              <div className="flex items-center justify-between">
                <Masuk
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white"
                >
                  Save Changes
                </Masuk>
                <Masuk
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-700 text-white"
                >
                  Delete Account
                </Masuk>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
