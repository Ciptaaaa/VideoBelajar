import React from "react";
import Navbar from "../components/Navbar";
import NavbarLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Kelas1 from "../assets/kelas1.png";
import AvatarInstructor from "../assets/avatarInstructor.svg";
import Down from "../assets/down.png";
import Check from "../assets/check.png";

const descCourse = () => {
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
          <Navbar />
        </div>
      </header>
      <main className="pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-4 mx-4 max-w-[1170px]">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li>
                <a
                  href="/"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li className="text-gray-500">&gt;</li>
              <li>
                <a
                  href="/"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >
                  Detail
                </a>
              </li>
            </ol>
          </nav>
          <Banner
            title="Gapai karier impianmu sebagai Seorang Data Analyst."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique vitae purus at iaculis."
            imageSrc={Kelas1}
            rating={3}
            reviewScore="3.0 (40)"
          />
          <div className="lg:flex lg:space-x-8 mt-8 mx-4 max-w-[1170px]">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Deskripsi
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Ipsam aliquam iure facilis facilis. Optio nam quas natus
                  labore dolorem quos ut molestiae. Veniam praesentium suscipit
                  quibusdam. Consequuntur quis quidem itaque. Optio eius nulla
                  nihil accusantium libero facilis animi qui. Tempore in
                  voluptatibus iste porro neque doloribus incidunt. Eveniet
                  quibusdam ab deleniti dolor pariatur quidem necessitatibus.
                  Rerum ipsam temporibus delectus. Officiis maxime pariatur
                  doloribus. Tempora doloribus harum quia dolorum facilis
                  tempore minima doloribus corporis. Quasi illum odio. Modi
                  expedita architecto error sit quae illum. Rerum temporibus
                  quia esse voluptas aliquam. Ut deleniti unde. Amet ab
                  accusantium eaque dolore veniam quis illo. Numquam pariatur ea
                  distinctio consectetur necessitatibus nisi.
                </p>
              </div>
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Belajar Bersama Tutor Profesional
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={AvatarInstructor}
                        alt="Avatar_Instructor"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Cipta LeonHeart
                        </p>
                        <p className="text-sm text-gray-600">
                          Front End Developer
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga cumque incidunt totam tenetur veritatis obcaecati aut
                      hic laudantium minima non dolorum ipsam, velit eos quae
                      officiis exercitationem ipsum odit numquam.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={AvatarInstructor}
                        alt="Avatar_Instructor"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Cipta LeonHeart
                        </p>
                        <p className="text-sm text-gray-600">
                          Front End Developer
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga cumque incidunt totam tenetur veritatis obcaecati aut
                      hic laudantium minima non dolorum ipsam, velit eos quae
                      officiis exercitationem ipsum odit numquam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Kamu akan mempelajari
                </h2>
                <div className="border border-gray-200 rounded-lg">
                  <div className="border-b">
                    <button className="w-full text-left p-4 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 flex justify-between items-center">
                      <span className="text-green-600 font-semibold">
                        Introduction Course 1: Foundation of Data Analyst
                      </span>
                      <img
                        src={Down}
                        alt="Select_Option"
                        className="w-6 h-6 text-gray-500 transform "
                      />
                    </button>
                  </div>
                  <div className="border-b">
                    <button className="w-full text-left p-4 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 flex justify-between items-center">
                      <span className="text-green-600 font-semibold">
                        Introduction Course 2: Learn Fast Data Analyst
                      </span>
                      <img
                        src={Down}
                        alt="Select_Option"
                        className="w-6 h-6 text-gray-500 transform "
                      />
                    </button>
                  </div>
                  <div className="border-b">
                    <button className="w-full text-left p-4 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 flex justify-between items-center">
                      <span className="text-green-600 font-semibold">
                        Introduction Course 3: Intermediate Data Analyst
                      </span>
                      <img
                        src={Down}
                        alt="Select_Option"
                        className="w-6 h-6 text-gray-500 transform "
                      />
                    </button>
                  </div>
                  <div className="border-b">
                    <button className="w-full text-left p-4 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 flex justify-between items-center">
                      <span className="text-green-600 font-semibold">
                        Introduction Course 4: Advance Data Analyst
                      </span>
                      <img
                        src={Down}
                        alt="Select_Option"
                        className="w-6 h-6 text-gray-500 transform "
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border p-6 mb-6">
                <div className="text-xl font-bold text-gray-900 mb-4">
                  {" "}
                  Rating dan Riview
                </div>
                <div className="relative">
                  <h1>NANTI DI MAPING DATA !! SOON</h1>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  Gapai Karier Impianmu sebagai Seorang Data Analyst
                </h2>
                <div className="flex justify-between">
                  <div className="flex items-center text-green-600 text-xl font-bold mb-2">
                    Rp.300.000
                    <div className="text-gray-500 line-through ml-2 text-sm">
                      Rp.600.000
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center rounded-md bg-yellow-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-yellow-600/20 ">
                      Discount 50%
                    </span>
                  </div>
                </div>
                <p className="text-blue-600 text-sm mb-6">
                  Penawaran spesial tersisa 2 hari lagi!
                </p>
                <Link
                  to="/"
                  className="block w-full bg-green-500 text-white text-center py-3 mb-6 rounded-lg font-semibold hover:bg-green-600 cursor-pointer"
                >
                  Beli Sekarang
                </Link>
                <h3 className="text-md font-semibold text-gray-900 mb-4">
                  Kelas ini sudah termasuk
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center space-x-2">
                    <img
                      src={Check}
                      alt="Check_Icons"
                      className="w-5 h-5 text-gray-500"
                    />{" "}
                    <span>Ujian Akhir</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img
                      src={Check}
                      alt="Check_Icons"
                      className="w-5 h-5 text-gray-500"
                    />{" "}
                    <span>49 Video Online</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img
                      src={Check}
                      alt="Check_Icons"
                      className="w-5 h-5 text-gray-500"
                    />{" "}
                    <span>Akses kelas seumur hidup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img
                      src={Check}
                      alt="Check_Icons"
                      className="w-5 h-5 text-gray-500"
                    />{" "}
                    <span>Sertifikat Online</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img
                      src={Check}
                      alt="Check_Icons"
                      className="w-5 h-5 text-gray-500"
                    />{" "}
                    <span>Pretest</span>
                  </li>
                </ul>
                <h3 className="text-md font-semibold text-gray-900 mt-6">
                  Bahasa Pengantar
                </h3>
                <div className="flex items-center space-x-2 text-gray-700 text-sm mt-2 pb-4">
                  <img
                    src={Check}
                    alt="Check_Icons"
                    className="w-5 h-5 text-gray-500"
                  />{" "}
                  <span>Bahasa indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default descCourse;
