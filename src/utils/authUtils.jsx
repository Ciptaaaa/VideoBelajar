// Fungsi untuk menyimpan data pengguna ke localStorage
export const saveUserData = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// Fungsi untuk mendapatkan data pengguna dari localStorage
export const getUserData = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Fungsi untuk memeriksa status login
export const isUserLoggedIn = () => {
  return JSON.parse(localStorage.getItem("loggedin")) || false;
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
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.fullName : "Guest";
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
