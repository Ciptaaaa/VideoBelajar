import React from "react";
import Carousel from "../components/Carousel";
import CourseList from "../components/courseList";
import NewsLetter from "../components/newsLetter";
import Footer from "../components/Footer";
import Header from "../components/Header";
const User = () => {
  return (
    <>
      <Header />
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
