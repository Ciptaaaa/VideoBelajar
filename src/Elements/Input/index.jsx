import React from "react";
import Input from "./input";
import Label from "./label";
import PasswordLogo from "../../assets/logo password.svg";
import PasswordLogoOpen from "../../assets/logo-password-open.svg";

const inputForm = (props) => {
  const {
    label,
    name,
    type,
    placeholder,
    showPassword,
    togglePasswordVisibility,
    hasToggle,
    id,
  } = props;

  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>

      <div className="relative mt-2">
        <Input
          type={hasToggle && showPassword ? "text" : type} // Menggunakan showPassword untuk mengontrol visibilitas password
          id={id}
          name={name}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {hasToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              <img
                className="h-5 w-5"
                src={PasswordLogo}
                alt="eye_password_Hide"
              />
            ) : (
              <img
                className="h-5 w-5"
                src={PasswordLogoOpen}
                alt="eye_password_Open"
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default inputForm;
