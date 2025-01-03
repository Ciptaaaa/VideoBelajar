import React from "react";
import CourseCard from "./courseCard";
import kelas1 from "../assets/kelas1.png"; // Contoh path untuk gambar
import kelas2 from "../assets/kelas2.png";
import kelas3 from "../assets/kelas3.png";
import AvatarLogo from "../assets/Avatar.png";

const courses = [
  {
    imgSrc: kelas1,
    title: "Data Analyst",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos deleniti? Reiciendis magnam delectus tempora.",
    ownerImg: AvatarLogo,
    ownerName: "Cipta Lionhart",
    ownerTitle: "Front End Developer",
    rating: "★★★☆☆",
    reviews: 40,
    price: "RP.300.000",
  },
  {
    imgSrc: kelas2,
    title: "Pemasaran",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos deleniti? Reiciendis magnam delectus tempora.",
    ownerImg: AvatarLogo,
    ownerName: "Cipta Lionhart",
    ownerTitle: "Front End Developer",
    rating: "★★★☆☆",
    reviews: 40,
    price: "RP.300.000",
  },
  {
    imgSrc: kelas3,
    title: "Full-Stack Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos deleniti? Reiciendis magnam delectus tempora.",
    ownerImg: AvatarLogo,
    ownerName: "Cipta Lionhart",
    ownerTitle: "Front End Developer",
    rating: "★★★☆☆",
    reviews: 40,
    price: "RP.300.000",
  },
];
const CourseList = () => {
  const repeatedCourses = Array.from(
    { length: 12 },
    (_, index) => courses[index % courses.length]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {repeatedCourses.map((course, index) => (
        <CourseCard
          key={index}
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
