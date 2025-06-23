import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import DescCourse from "./pages/descCourse";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import AddUser from "./pages/AddUser";
import NotFoundPages from "./pages/NotFoundPages";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-Password" element={<ForgotPassword />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/DescCourse/:id"
          element={
            <ProtectedRoute>
              <DescCourse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Admin/Dashboard"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Admin/Product"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Admin/AddUser"
          element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </>
  );
};

export default App;
