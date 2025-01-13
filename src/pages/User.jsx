import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarLogo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import CourseList from "../components/courseList";
import NewsLetter from "../components/newsLetter";
import Footer from "../components/Footer";
import { getUserName, logoutUser } from "../utils/authUtils";
const User = () => {
  const navigate = useNavigate();
  const userName = getUserName();

  // Fungsi untuk logout dan navigasi ke halaman login
  const handleLogout = () => {
    logoutUser(navigate);
    
  };
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto max-w-[1200px] px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
          <Link to="/" className="block">
            <img
              src={NavbarLogo}
              alt="Logo Video Belajar"
              className="h-6 md:h-8"
            />
          </Link>
          <Navbar
            menuItems={[
              { label: `Hi, ${userName}`, to: "/profile" },
              { label: "Admin", to: "/admin" },
              { label: "Logout", onClick: handleLogout },
            ]}
          />
        </div>
      </header>
      <Carousel />
      <section className="pt-16">
        <div className="container max-w-[1200px] mx-auto px-4 text-start">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-10">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
          <div className="flex justify-start space-x-7 mb-12 overflow-x-auto whitespace-nowrap">
            <p className="text-orange-700 border-b-4 border-orange-700 inline">
              Semua kelas
            </p>
            <a href="#" className="font-light text-gray-700">
              Pemasaran
            </a>
            <a href="#" className="font-light text-gray-700">
              Pengembangan diri
            </a>
            <a href="#" className="font-light text-gray-700">
              Bisnis
            </a>
            <a href="#" className="font-light text-gray-700">
              Desain
            </a>
          </div>
          <CourseList />
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default User;
