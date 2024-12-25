import React, { useState } from "react";
import NavbarLogo from "../assets/logo.png";
import AvatarLogo from "../assets/Avatar.png";
import Carousel from "../assets/carousel.jpg";

import { Link } from "react-router-dom";
import CourseList from "./courseList";

const HomePage = () => {
  //gunakan state untuk mengontrol dropdown
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  //buat toggle dropdown
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
      <section className="relative bg-cover bg-center py-16 rounded-xl overflow-hidden mx-4 sm:mx-8 md:mx-auto max-w-[1170px] mt-6 md:mt-10 lg:mt-16">
        <div className="absolute inset-0">
          <img
            src={Carousel}
            alt="dining"
            className="w-full h-full absolute z-0 object-cover hidden xl:block max-w-[1200px] "
          />

          <img
            src={Carousel}
            alt="dining"
            className="w-full h-full absolute z-0 object-cover hidden sm:block xl:hidden mr-4 ml-4 "
          />

          <img
            src={Carousel}
            alt="dining"
            className="w-full h-full absolute z-0 object-cover sm:hidden  "
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative container mx-auto px-4 md:px-6 lg:px-10 pt-12 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolusi Pembelajaran: Temukan <br />
            Ilmu baru melalui platform video
            <br />
            Interaktif
          </h1>
          <p className="text-gray-200 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. <br />
            Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan
            interaktif yang akan meningkatkan pemahaman Anda.
          </p>

          <a
            href="#"
            className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 text-sm md:text-base"
          >
            Temukan Video Course untuk Dipelajari!
          </a>
        </div>
      </section>
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
      <section className="relative bg-cover bg-center py-16 rounded-xl overflow-hidden mx-4 sm:mx-8 md:mx-auto max-w-[1170px] mt-6 md:mt-10 lg:mt-16 mb-10">
        <div className="absolute inset-0 ">
          <img
            src={Carousel}
            alt="dining"
            className="w-full h-full absolute z-0 object-cover hidden xl:block max-w-[1200px] "
          />

          <img
            src={Carousel}
            alt="dining"
            className="w-full h-full absolute z-0 object-cover hidden sm:block xl:hidden mr-4 ml-4 "
          />

          <img
            src={Carousel}
            alt="dining"
            className="w-full h-full absolute z-0 object-cover sm:hidden  "
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative container mx-auto px-4 md:px-6 lg:px-10 pt-12 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Mau belajar lebih banyak?
          </h1>
          <p className="text-gray-200 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan <br />
            penawaran spesial dari program-program terbaik hariesok.id.
          </p>

          <div className="relative w-full max-w-[500px] mt-8 gap-2 flex mx-auto">
            <input
              type="email"
              id="email"
              required
              placeholder="Tulis E-Mail kamu.."
              className="w-full py-2.5 pr-12 pl-2.5 border border-gray-300 rounded-md outline-none text-black"
            />
            <button className="absolute top-0 right-0 h-[80%] mt-1 mr-1 px-4 bg-yellow-500 text-white rounded-lg cursor-pointer hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-white py-8 border-t-[0.5px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-start space-y-8 lg:space-y-0">
            <div className="w-full lg:w-1/3">
              <img src={NavbarLogo} alt="Logo" className="h-6 md:h-8 mb-5" />
              <div className="text-gray-600">
                Gali potensi anda melalui <br /> Pembelajaran di hariesok.id
              </div>
              <address className="text-gray-600 mt-2">
                Jl. Usman Effendi <br /> No. 50 Lowokwaru, Malang
                +62-877-7123-1234
              </address>
            </div>
            <div className="w-full lg:w-2/3 flex flex-wrap justify-between space-y-8 lg:space-y-0">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                {" "}
                <h4 className="font-bold text-gray-900 mb-4">Kategori</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Digital & Teknologi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Pemasaran
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Manajemen Bisnis
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Full-Stack Web Developer
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <h4 className="font-bold text-gray-900 mb-4">Perusahaan</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Tentang Kami
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      FAQ{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="hover:underline">
                      Kebijakan Privasi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Ketentuan Layanan
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="hover:underline">
                      Bantuan
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/3">
                <h4 className="font-bold text-gray-900 mb-4">Komunitas</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Tips Sukses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
