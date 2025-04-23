import React from "react";
import { Link } from "react-router-dom";
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
  id,
  discount,
}) => (
  <div className="bg-white rounded-lg border overflow-hidden">
    <Link to={`/DescCourse/${id}`}>
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {description.split(" ").slice(0, 10).join(" ")}
        </p>
        <div className="flex items-center mb-4 my-8">
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
          <div className="flex items-center space-x-4">
            <div className="text-green-500 font-bold">Rp.{price}</div>
            <span className="inline-flex items-center rounded-md bg-yellow-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-yellow-600/20">
              {discount}
            </span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default CourseCard;
