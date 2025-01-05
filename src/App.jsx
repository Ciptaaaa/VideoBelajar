import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/forgotPassword";
import Register from "./pages/Register";
import DescCourse from "./pages/descCourse";
import User from "./pages/User";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/forgot-Password" element={<ForgotPassword />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/DescCourse" element={<DescCourse />} />
      </Routes>
    </Router>
  );
};

export default App;
