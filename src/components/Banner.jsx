import React from "react";
import banner from "../assets/banner.jpg";
const Banner = () => {
  return (
    <section className="relative bg-cover bg-center py-16 rounded-xl overflow-hidden mx-4 sm:mx-8 md:mx-auto max-w-[1170px] mt-6 md:mt-10 lg:mt-16">
      <div className="absolute inset-0">
        <img
          src={banner}
          alt="dining"
          className="w-full h-full absolute z-0 object-cover hidden xl:block max-w-[1200px] "
        />

        <img
          src={banner}
          alt="dining"
          className="w-full h-full absolute z-0 object-cover hidden sm:block xl:hidden mr-4 ml-4 "
        />

        <img
          src={banner}
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
  );
};

export default Banner;
