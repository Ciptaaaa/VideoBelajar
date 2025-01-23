import React from "react";
import AdminHeader from "../components/AdminHeader";
import InputForm from "../Elements/Input/index";
import Masuk from "../Elements/Button/Masuk";

const Product = () => {
  return (
    <>
      <AdminHeader />
      <main className="flex-1 p-6 md:ml-64">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Create New Product
          </h1>
        </div>
        <div className="bg-white border-[0.1px] rounded-lg p-6">
          <form action="#" method="post">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-2 text-lg">
                <InputForm
                  label="Tittle"
                  type="Text"
                  placeholder="Masukan Nama Product"
                  name="Tittle"
                  id="Tittle"
                />
              </div>
              <div className="mb-2 text-lg">
                <InputForm
                  label="Description"
                  type="Text"
                  placeholder="Masukan Description Course"
                  name="Description"
                  id="Description"
                />
              </div>
              <div className="mb-2 text-lg">
                <InputForm
                  label="Price"
                  type="number"
                  placeholder="Masukan Harga Course"
                  name="Price"
                  id="Price"
                />
              </div>
              <div className="mb-2 text-lg">
                <InputForm
                  label="Owner Course"
                  type="text"
                  placeholder="Masukan Nama Pemilik Course"
                  name="ownerCourse"
                  id="ownerCourse"
                />
              </div>
              <div className="mb-2 text-lg">
                <InputForm
                  label="Role Owner"
                  type="Text"
                  placeholder="Masukan Role Owner Course"
                  name="roleOwner"
                  id="roleOwner"
                />
              </div>
              <div className="mb-2 text-lg">
                <InputForm
                  label="Photo Url"
                  type="url"
                  placeholder="Masukan Link Photo Product"
                  name="photoUrl"
                  id="photoUrl"
                />
              </div>
            </div>
            <div className="mb-4">
              <InputForm
                label="Description"
                type="text"
                placeholder="Masukan Deskripsi Product "
                name="Description"
                id="Description"
              />
            </div>
            <div className="flex justify-end mt-6">
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
            Product List
          </h2>
          <div className="bg-white border-[0.1px] rounded-lg p-6">
            <div className="overflow-x-hidden">
                
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
