import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import DescCourse from "./pages/descCourse";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Forgot-Password" element={<ForgotPassword />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/DescCourse" element={<DescCourse />} />
      </Routes>
    </Router>
  );
};

export default App;
