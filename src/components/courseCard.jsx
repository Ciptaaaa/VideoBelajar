import React from "react";
import { Link } from "react-router-dom";
import DescCourse from "../pages/DescCourse";

const CourseCard = ({
  imgSrc,
  title,
  description,
  ownerImg,
  ownerName,
  ownerTitle,
  rating,
  reviews,
  price,
}) => (
  <>
    <div className="bg-white rounded-lg border overflow-hidden">
      <Link to="/DescCourse">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center mb-4">
            <img src={ownerImg} alt={ownerName} className="w-10 h-10 mr-4" />
            <div>
              <p className="text-gray-900 font-medium">{ownerName}</p>
              <p className="text-gray-600 text-sm">{ownerTitle}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-yellow-500">
              <span className="text-xl">{rating}</span>
              <span className="text-gray-600 ml-3">({reviews})</span>
            </div>
            <div className="text-green-500 font-bold">{price}</div>
          </div>
        </div>
      </Link>
    </div>
  </>
);

export default CourseCard;
