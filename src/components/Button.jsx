import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 text-lg font-montserrat border px-7 py-4 leading-none rounded-full
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : `bg-coral-red  border-coral-red text-white`
    } ${
        fullWidth && "w-full"
      } hover:bg-transparent hover:text-coral-red duration-200`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
