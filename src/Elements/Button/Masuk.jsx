// File: Elements/Button/Masuk.jsx
import React from "react";

const Masuk = ({ type = "submit", className, onClick, children }) => {
  return (
    <div className="">
      <button
        type={type} // Default type is 'submit', but it can be overridden
        className={`px-4 py-2 text-white rounded-md focus:outline-none ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Masuk;
