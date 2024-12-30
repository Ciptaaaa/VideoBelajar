import React from "react";

const Masuk = (props) => {
  const { children, className = "bg-green-500" } = props;
  return (
    <div className="flex items-center justify-between mb-6">
      <button
        className={`w-full ${className} hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md`}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default Masuk;
