import React from "react";

const Input = (props) => {
  const { type, placeholder, name, id } = props;
  return (
    <input
      type={type}
      id={id}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
      required
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
