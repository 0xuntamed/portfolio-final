import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        /* Base Styles */
        px-6 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out

        /* Dark background, white text */
        bg-slate-900 text-white

        /* Hover: White background, dark text */
        hover:bg-white hover:text-slate-900

        /* Sky-blue-400 shadow */
        shadow-[0_4px_14px_0_rgba(56,189,248,0.6)]

        /* Subtle scale effect on hover */
        hover:scale-105 active:scale-95
      "
    >
      {text}
    </button>
  );
};

export default Button;
