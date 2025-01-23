import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-Password" element={<ForgotPassword />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/DescCourse/:id" element={<DescCourse />} />
        <Route path="/Admin/Dashboard" element={<Admin />} />
        <Route path="/Admin/Product" element={<Product />} />
        <Route path="/Admin/AddUser" element={<AddUser />} />
      </Routes>
    </Router>
  );
};

export default App;
