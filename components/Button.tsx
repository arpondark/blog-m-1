import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="py-5 px-5 cursor-pointer bg-[#53c28b] dark:bg-[#64d59c] border-none rounded-md w-max text-white shadow-md hover:bg-[#45a475] dark:hover:bg-[#53c28b] transition-all duration-300">
        {text}
      </button>
    </Link>
  );
};

export default Button;
