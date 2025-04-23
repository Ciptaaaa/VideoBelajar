// Fungsi untuk menyimpan data pengguna ke localStorage
export const saveUserData = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// Fungsi untuk mendapatkan data pengguna dari localStorage
export const getUserData = () => {
  try {
    const user = localStorage.getItem("user");
    const parsedUser = user ? JSON.parse(user) : null;
    return parsedUser || { fullName: "" }; // Jika tidak ada user, kembalikan default "Guest"
  } catch (e) {
    console.warn("User data di localStorage rusak, dibersihkan.");
    localStorage.removeItem("user");
    return { fullName: "Guest" }; // Defaultkan "Guest" jika ada error
  }
};

// Fungsi untuk memeriksa status login
export const isUserLoggedIn = () => {
  try {
    const logged = localStorage.getItem("loggedin");
    return logged ? JSON.parse(logged) : false;
  } catch (e) {
    console.warn("Status login invalid, default ke false.");
    localStorage.removeItem("loggedin");
    return false;
  }
};

// Fungsi untuk menyimpan status login ke localStorage
export const setLoginStatus = (status) => {
  localStorage.setItem("loggedin", status);
};

// Fungsi untuk menghapus status login dan data pengguna
export const logoutUserProfile = () => {
  localStorage.removeItem("loggedin");
  localStorage.removeItem("user");
};

// Fungsi untuk mendapatkan nama pengguna atau nilai default "Guest"
export const getUserName = () => {
  try {
    const user = localStorage.getItem("user");
    const parsed = user ? JSON.parse(user) : null;
    return parsed?.fullName || "Guest"; // Mengambil fullName dari user atau default "Guest"
  } catch (e) {
    console.warn("Gagal ambil nama user:");
    localStorage.removeItem("user");
    return "Guest";
  }
};

// Fungsi untuk logout pengguna
export const logoutUser = (navigate) => {
  localStorage.removeItem("loggedin");
  if (navigate) {
    navigate("/login");
  }
};

// Fungsi untuk mendapatkan avatar dari localStorage
export const getAvatar = (defaultAvatar) => {
  return localStorage.getItem("avatar") || defaultAvatar;
};

// Fungsi untuk menghapus akun
export const deleteUserAccount = (navigate) => {
  localStorage.removeItem("user");
  localStorage.removeItem("loggedin");
  localStorage.removeItem("avatar");
  if (navigate) navigate("/login");
};

// Fungsi untuk menyimpan perubahan data pengguna ke localStorage
export const saveUserChanges = (
  userData,
  password,
  confirmPassword,
  callback
) => {
  if (password !== confirmPassword) {
    if (callback) callback("Password and confirm password do not match!");
    return false; // Gagal menyimpan karena password tidak cocok
  }

  const updatedUser = {
    ...userData,
    password, // Simpan password baru
  };

  localStorage.setItem("user", JSON.stringify(updatedUser));
  if (callback) callback(""); // Bersihkan pesan error jika berhasil
  return true; // Berhasil menyimpan
};
