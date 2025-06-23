import React, { useEffect } from "react";
import CourseCard from "./courseCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/slice";
import Skeleton from "../../components/Skeleton";
const CourseList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  if (status === "loading")
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} type="course" />
        ))}
      </div>
    );
  if (status === "failed") return <p>Error: {status}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <CourseCard
          key={`${product.id}-${index}`}
          id={product.id}
          title={product.Tittle}
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
