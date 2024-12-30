import React from "react";
import { Link } from "react-router-dom";

const Daftar = (props) => {
  const { children, className = "bg-green-100" } = props;
  return (
    <div className="flex items-center justify-center mb-4">
      <Link
        to="/Register"
        className={`w-full ${className} hover:bg-green-200 text-green-700 font-semibold py-2 px-4 rounded-md text-center`}
        type="submit"
      >
        {children}
      </Link>
    </div>
  );
};

export default Daftar;
