import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="container mx-auto p-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-10 relative text-gray-800 dark:text-gray-100 after:content-[''] after:block after:w-20 after:h-1 after:bg-[#53c28b] dark:after:bg-[#64d59c] after:mt-2">
        Portfolio Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          href="/portfolio/illustrations"
          className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-500 transform hover:-translate-y-2"
        >
          <div className="border-[3px] border-transparent hover:border-[#53c28b] dark:hover:border-[#64d59c] transition-colors duration-300 h-[400px] relative bg-cover bg-center bg-[url('/illustration.png')] before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-0 before:transition-opacity before:duration-300 group-hover:before:bg-opacity-20">
            <div className="absolute inset-0 flex items-end p-6">
              <span className="text-3xl font-bold text-white drop-shadow-lg transition-transform duration-300 transform group-hover:scale-110 group-hover:text-[#53c28b] dark:group-hover:text-[#64d59c]">
                Illustrations
              </span>
            </div>
          </div>
        </Link>
        <Link
          href="/portfolio/websites"
          className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-500 transform hover:-translate-y-2"
        >
          <div className="border-[3px] border-transparent hover:border-[#53c28b] dark:hover:border-[#64d59c] transition-colors duration-300 h-[400px] relative bg-cover bg-center bg-[url('/websites.jpg')] before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-0 before:transition-opacity before:duration-300 group-hover:before:bg-opacity-20">
            <div className="absolute inset-0 flex items-end p-6">
              <span className="text-3xl font-bold text-white drop-shadow-lg transition-transform duration-300 transform group-hover:scale-110 group-hover:text-[#53c28b] dark:group-hover:text-[#64d59c]">
                Websites
              </span>
            </div>
          </div>
        </Link>
        <Link
          href="/portfolio/application"
          className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-500 transform hover:-translate-y-2"
        >
          <div className="border-[3px] border-transparent hover:border-[#53c28b] dark:hover:border-[#64d59c] transition-colors duration-300 h-[400px] relative bg-cover bg-center bg-[url('/apps.jpg')] before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-0 before:transition-opacity before:duration-300 group-hover:before:bg-opacity-20">
            <div className="absolute inset-0 flex items-end p-6">
              <span className="text-3xl font-bold text-white drop-shadow-lg transition-transform duration-300 transform group-hover:scale-110 group-hover:text-[#53c28b] dark:group-hover:text-[#64d59c]">
                Applications
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
