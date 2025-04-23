import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import useProductStore from "../services/api/useProductStore";
import { Link } from "react-router-dom";

const CarouselComponents = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (!products || products.length === 0) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="relative bg-cover bg-center py-4 sm:py-8 md:py-10 lg:py-12 mx-4 sm:mx-8 md:mx-auto max-w-[1170px] mt-2">
      <Carousel slideInterval={5000}>
        {products.map((product, index) => (
          <div key={index} className="relative">
            <img
              src={product.photoProduct}
              alt={`Carousel_gambar_${index + 1}`}
              className="w-full h-[400px] sm:h-[500px] xl:h-[600px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {product.Tittle}
              </h2>
              <p className="text-gray-200 text-center mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                {product.descriptionClass}
              </p>
              <Link
                to={`/DescCourse/${product.id}`}
                className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 text-sm md:text-base"
              >
                Daftar sekarang!
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponents;
