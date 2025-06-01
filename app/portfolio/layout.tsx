import React, { ReactNode } from 'react'; // Import ReactNode for typing children

interface LayoutProps {
  children: ReactNode; // Explicitly type children
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-6xl md:text-8xl font-bold mb-10 text-gray-800 dark:text-gray-100 relative overflow-hidden">
        <span className="relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-[#53c28b] dark:after:bg-[#64d59c]">
          Our Works
        </span>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#53c28b] dark:bg-[#64d59c] rounded-full opacity-10 blur-3xl"></div>
      </h1>
      <div className="relative">
        {children}
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400 dark:bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Layout;