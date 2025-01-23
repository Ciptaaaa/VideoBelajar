import React from "react";

const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-gray-700 text-sm font-semibold mb-2"
    >
      {children} <span className="text-red-500">*</span>
    </label>
  );
};

export default Label;
