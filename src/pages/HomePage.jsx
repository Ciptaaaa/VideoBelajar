import React, { useState } from "react";
import NavbarLogo from "../assets/logo.png";
import AvatarLogo from "../assets/Avatar.png";
import { Link } from "react-router-dom";
import CourseList from "../services/data/courseList";
import NewsLetter from "../components/newsLetter";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
const homePage = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownOpen((prev) => !prev);
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
          <nav className="relative flex items-center space-x-2">
            <button onClick={toggleDropDown} className="focus:outline-none">
              <img src={AvatarLogo} alt="Profil" className="h-10 w-10" />
            </button>
            {isDropDownOpen && (
              <div className=" absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 ">
                <ul className="py-1">
                  <li>
                    <Link
                      to="/login"
                      className="block px-2 py-1 text-gray-500 hover:bg-gray-100"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
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

export default homePage;
