import React from "react";
import CourseCard from "./courseCard";
import kelas1 from "../assets/kelas1.png"; // Contoh path untuk gambar
import kelas2 from "../assets/kelas2.png";
import kelas3 from "../assets/kelas3.png";
import AvatarInstructor from "../assets/avatarInstructor.svg";

export const courses = [
  {
    imgSrc: kelas1,
    title: "Data-Analyst",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos deleniti? Reiciendis magnam delectus tempora.",
    ownerImg: AvatarInstructor,
    ownerName: "Cipta Lionhart",
    ownerTitle: "Front End Developer",
    rating: "★★☆☆☆",
    reviews: 25,
    price: "RP.300.000",
    originalPrice: "RP.600.000",
    discount: 50,
    id: "Data-Analyst",
  },
  {
    imgSrc: kelas2,
    title: "Pemasaran",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos deleniti? Reiciendis magnam delectus tempora.",
    ownerImg: AvatarInstructor,
    ownerName: "Cipta Lionhart",
    ownerTitle: "Front End Developer",
    rating: " ★★★☆☆",
    reviews: 40,
    price: "RP.400.000",
    originalPrice: "RP.800.000",
    discount: 50,
    id: "Pemasaran",
  },
  {
    imgSrc: kelas3,
    title: "Full-Stack-Web-Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos deleniti? Reiciendis magnam delectus tempora.",
    ownerImg: AvatarInstructor,
    ownerName: "Cipta Lionhart",
    ownerTitle: "Front End Developer",
    rating: "★★★★★",
    reviews: 150,
    price: "RP.1.500.000",
    originalPrice: "RP.3.000.000",
    discount: 50,
    id: "Full-Stack-Web-Developer",
  },
];
const CourseList = () => {
  const repeatedCourses = Array.from({ length: 12 }, (_, index) => ({
    ...courses[index % courses.length],
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {repeatedCourses.map((course, index) => (
        <CourseCard
          key={`${course.id}-${index}`}
          id={course.id}
          originalPrice={course.originalPrice}
          discount={course.discount}
          imgSrc={course.imgSrc}
          title={course.title}
          description={course.description}
          ownerImg={course.ownerImg}
          ownerName={course.ownerName}
          ownerTitle={course.ownerTitle}
          rating={course.rating}
          reviews={course.reviews}
          price={course.price}
        />
      ))}
    </div>
  );
};

export default CourseList;
