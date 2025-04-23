import React, { useEffect } from "react";
import CourseCard from "./courseCard";
import useProductStore from "../api/useProductStore";

const CourseList = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts(); // panggil API saat komponen pertama kali render
  }, [fetchProducts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <CourseCard
          key={`${product.id}-${index}`}
          id={product.id}
          title={product.Title}
          description={product.descriptionClass}
          originalPrice={product.Price}
          price={product.discountPrice}
          discount={product.discount}
          imgSrc={product.photoProduct}
          ownerImg={product.photoOwner}
          ownerName={product.ownerCourse}
          ownerTitle={product.roleOwner}
          rating={product.ratingCourse}
          reviews={product.totalRiview}
        />
      ))}
    </div>
  );
};

export default CourseList;
