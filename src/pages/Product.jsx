import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import InputForm from "../Elements/Input/index";
import Masuk from "../Elements/Button/Masuk";
import useProductStore from "../services/api/useProductStore";
import { toast } from "sonner";

const Product = () => {
  const { products, fetchProducts, addProduct, updateProduct, deleteProduct } =
    useProductStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    Tittle: "",
    descriptionClass: "",
    Price: "",
    discountPrice: "",
    discount: "",
    ownerCourse: "",
    roleOwner: "",
    photoProduct: "",
    descriptionProduct: "",
    photoOwner: "",
    ratingCourse: "★★★★★",
    totalRiview: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const price = parseFloat(formData.Price.toString().replace(/\./g, ""));
    const discountText = formData.discount?.trim();

    if (!isNaN(price) && discountText.includes("%")) {
      const match = discountText.match(/(\d+)(?=%)/);
      if (match) {
        const discountPercent = parseFloat(match[1]);
        if (discountPercent >= 0 && discountPercent <= 100) {
          const discountedPrice = price - (price * discountPercent) / 100;

          const formattedDiscountPrice = new Intl.NumberFormat("id-ID").format(
            discountedPrice
          );

          setFormData((prevData) => ({
            ...prevData,
            discountPrice: formattedDiscountPrice,
          }));
        }
      }
    }
  }, [formData.discount, formData.Price]);

  const handleEdit = (product) => {
    setFormData(product);
    setEditId(product.id);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEdit = isEditing;
    toast(
      (t) => (
        <div>
          <p className="font-semibold text-center">
            {" "}
            apakah anda yakin ingin {isEdit ? "Update" : "Tambahkan"} product?
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
                if (isEditing) {
                  updateProduct(formData.id, formData);
                  setIsEditing(false);
                  setEditId(null);
                } else {
                  addProduct(formData);
                }
                setFormData({
                  Tittle: "",
                  descriptionClass: "",
                  Price: "",
                  discountPrice: "",
                  discount: "",
                  ownerCourse: "",
                  roleOwner: "",
                  photoProduct: "",
                  descriptionProduct: "",
                  photoOwner: "",
                  ratingCourse: "★★★★★",
                  totalRiview: "",
                });
                toast.success("Product berhasil disimpan.");
              }}
              className="px-4 py-1 text-sm rounded bg-green-500 text-white hover:bg-green-600"
            >
              ya
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
      <AdminHeader />
      <main className="flex-1 p-6 md:ml-64">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {isEditing ? "Update Product" : "Create a new product"}
          </h1>
        </div>
        <div className="bg-white border-[0.1px] rounded-lg p-6">
          <form method="post" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {Object.keys(formData).map((key) => (
                <div key={key} className="mb-2 text-lg">
                  <InputForm
                    label={key}
                    type={
                      key === "Price" || key === "discountPrice"
                        ? "number"
                        : "text"
                    }
                    placeholder={`Masukkan ${key}`}
                    name={key}
                    id={key}
                    value={formData[key]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <Masuk
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isEditing ? "Update Product" : "Save Changes"}
              </Masuk>
            </div>
          </form>
        </div>

        {/* Tabel Produk */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Product List
          </h2>
          <div className="bg-white border-[0.1px] rounded-lg p-6">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      No.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      DescClass
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      discountPercent
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      discountPrice
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mentor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.length > 0 ? (
                    products.map((product, index) => (
                      <tr key={product.id} className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {product.Tittle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.descriptionClass
                            .split(" ")
                            .slice(0, 5)
                            .join(" ")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Rp. {product.Price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.discount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.discountPrice}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.ownerCourse}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex space-x-2">
                          <Masuk
                            onClick={() =>
                              toast(
                                (t) => (
                                  <div>
                                    <p className="font-semibold text-center">
                                      Apakah Anda yakin ingin menghapus produk
                                      ini?
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
                                          deleteProduct(product.id);
                                          toast.dismiss(t);
                                          toast.success(
                                            "Produk berhasil dihapus."
                                          );
                                        }}
                                        className="px-4 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600"
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
                              )
                            }
                            className="text-white bg-red-500 hover:bg-red-600 rounded-lg"
                          >
                            Delete
                          </Masuk>

                          <Masuk
                            onClick={() => handleEdit(product)}
                            className="text-white bg-yellow-300 hover:bg-yellow-500 rounded-lg"
                          >
                            Edit
                          </Masuk>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="px-6 py-4 text-center text-gray-500"
                      >
                        No products available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
