import { create } from "zustand";

const API_URL = import.meta.env.VITE_API_URL_Product; 

const useProductStore = create((set) => ({
  products: [],
  
  fetchProducts: async () => {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  addProduct: async (product) => {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const newProduct = await response.json();
      set((state) => ({ products: [...state.products, newProduct] }));
    } catch (error) {
      console.error("Error adding product:", error);
    }
  },

  updateProduct: async (id, updatedProduct) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      set((state) => ({
        products: state.products.map((product) =>
          product.id === id ? { ...product, ...updatedProduct } : product
        ),
      }));
    } catch (error) {
      console.error("Error updating product:", error);
    }
  },

  deleteProduct: async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  },
}));


export default useProductStore;
