import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline";

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  variant,
  children,
  onClick,
}: ButtonProps) => {
  const baseStyle =
    "px-8 py-3 rounded-full font-semibold text-sm transition";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-800",

    secondary:
      "bg-gray-100 text-black hover:bg-gray-200",

    outline:
      "border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};