import { Navigate } from "react-router-dom";
import { create } from "zustand";

const API_URL = import.meta.env.VITE_API_URL;

const useUserStore = create((set) => ({
  users: [],
  currentUser: (() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.warn("Data user di localStorage tidak valid:", e);
      localStorage.removeItem("user");
      return null;
    }
  })(),
  setCurrentUser: (user) => {
    set({ currentUser: user });
  },

  // Fetch all users
  fetchUsers: async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      set({ users: data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },

  // Add new user (Daftar)
  addUser: async (userData) => {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error("Gagal menambahkan user.");

      const newUser = await response.json();
      set((state) => ({ users: [...state.users, newUser] }));

      // Simpan user ke localStorage setelah daftar
      localStorage.setItem("user", JSON.stringify(newUser));

      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  // Login User
  loginUser: async (email, password) => {
    try {
      const response = await fetch(API_URL);
      const users = await response.json();

      // Cek apakah email dan password cocok
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (!user)
        return { success: false, message: "Email atau password salah!" };

      // Simpan user ke localStorage dengan key yang benar
      localStorage.setItem("user", JSON.stringify(user));
      set({ currentUser: user });

      return { success: true, user };
    } catch (error) {
      return { success: false, message: "Terjadi kesalahan, coba lagi!" };
    }
  },

  // Logout User
  logoutUser: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loggedInUser"); // Pastikan semua data dihapus
    localStorage.removeItem("loggedin");
    set({ currentUser: null }); // Hapus user dari state
  },

  // Check login status saat aplikasi dimuat
  checkLoginStatus: () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      set({ currentUser: user });
    }
  },

  // Update user
  updateUser: async (user) => {
    try {
      const res = await fetch(`${API_URL}/${user.id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Failed to update: ${errText}`);
      }
      const updatedUser = await res.json();
      set((state) => ({
        users: state.users.map((u) => (u.id === user.id ? user : u)),
        currentUser: updatedUser,
      }));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  },

  // Delete user
  deleteUser: async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      set((state) => ({
        users: state.users.filter((u) => u.id !== id),
        currentUser: null, // opsional, bisa clear currentUser juga
      }));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  },
  fetchCurrentUser: async () => {
    try {
      const stored = localStorage.getItem("user");
      if (!stored) return;

      const parsed = JSON.parse(stored);
      const response = await fetch(`${API_URL}/${parsed.id}`);
      if (!response.ok) throw new Error("Gagal mengambil data user");

      const updatedUser = await response.json();
      set({ currentUser: updatedUser });

      // Update localStorage juga biar data tetap sinkron
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Gagal fetch current user:", error);
    }
  },
}));

export default useUserStore;
