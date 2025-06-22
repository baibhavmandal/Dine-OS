import React, { useState } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const variantStyles = {
    primary: `
      py-[0.75rem] px-[1.25rem] 
      text-button-text 
      bg-button-primary-bg hover:bg-button-primary-hover-bg active:bg-button-primary-active-bg 
      text-button-size 
      font-button 
      rounded-lg 
      transition-colors duration-200
      `,
    secondary: `
      px-2 py-1
      rounded-full
      text-button-secondary-text
      bg-button-secondary-bg hover:bg-button-secondary-hover-bg active:bg-button-secondary-active-bg
      text-small 
      transition-colors duration-200`,
    tertiary: `
      text-button-tertiary-text hover:text-button-tertiary-hover-text active:text--button-tertiary-active-text 
      bg-transparent 
      active:underline 
      transition-all duration-200`,
    quaternary: `
    px-2 py-1
    border-1 ${
      isActive
        ? "border-button-border-quaternary-active"
        : "border-button-border-quaternary"
    }
    hover:border-button-border-quaternary-hover
    ${
      isActive
        ? "text-button-quaternary-active-text"
        : "text-button-quaternary-text"
    } 
    hover:text-button-quaternary-hover-text
    ${
      isActive ? "bg-button-quaternary-active-bg" : "bg-button-quaternary-bg"
    } hover:bg-button-quaternary-hover-bg
    text-small 
    rounded-md 
    transition-colors duration-200

    `,
  };

  return (
    <button
      className={`${variantStyles[variant]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
