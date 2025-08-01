import React from "react";
import clsx from "clsx";

type butonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function Buton({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
}: butonProps) {
  const variantClasses = {
    primary: "bg-raspberry-pink text-white hover:bg-raspberry-dark",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2 rounded-xl font-semibold transition",
        variantClasses[variant],
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
}
