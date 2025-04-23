import React from "react";
const Banner = ({ title, description, imageSrc, rating, reviewScore }) => {

  return (
    <section
      className="relative bg-cover bg-center py-16 rounded-xl overflow-hidden mx-4 sm:mx-8 md:mx-auto max-w-[1170px] mt-6 md:mt-10 lg:mt-16"
      style={{
        backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 p-8 container mx-auto px-4 md:px-6 lg:px-10 pt-12 text-left text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-gray-200 mb-2 text-sm sm:text-base lg:text-lg leading-relaxed">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-yellow-500">
            {rating}
            <span className="text-gray-400 underline ml-2">{reviewScore}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
