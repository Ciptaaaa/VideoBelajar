import React from "react";

const Input = (props) => {
  const {
    type,
    placeholder,
    name,
    id,
    value,
    onChange,
    className = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400",
  } = props;
  return (
    <input
      type={type}
      id={id}
      className={className}
      required
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
