import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Section with improved overlay and text positioning */}
      <div className="w-full h-[400px] relative rounded-xl overflow-hidden mb-16 shadow-xl">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="Team working together"
          className="object-cover"
          priority
        />
        <div className="absolute z-20 inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Storytellers
          </h1>
          <div className="w-24 h-1 bg-[#53c28b] dark:bg-[#64d59c] mb-6"></div>
          <h2 className="text-xl md:text-2xl max-w-2xl">
            Handcrafting award winning digital experiences since 2010
          </h2>
        </div>
      </div>

      {/* Content Section with improved layout and typography */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-1 bg-[#53c28b] dark:bg-[#64d59c]"></div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Who Are We?</h1>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-xl shadow-sm dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
              Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
              beatae, a suscipit eos. Animi quibusdam cum omnis officiis
              voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
              esse tempora beatae, a suscipit eos.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-1 bg-[#53c28b] dark:bg-[#64d59c]"></div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">What We Do?</h1>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-xl shadow-sm dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet?
            </p>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              {[
                "Creative Illustrations",
                "Dynamic Websites",
                "Fast and Handy",
                "Mobile Apps",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#53c28b] dark:bg-[#64d59c] flex-shrink-0"></div>
                  <p className="text-lg font-medium">{service}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button url="/contact" text="Contact Us" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - New addition */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "10+", label: "Years Experience" },
          { value: "234", label: "Projects Completed" },
          { value: "12", label: "Industry Awards" },
          { value: "24/7", label: "Customer Support" },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-gray-50 dark:bg-gray-800/40 rounded-xl shadow-sm dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-800"
          >
            <p className="text-3xl md:text-4xl font-bold text-[#53c28b] dark:text-[#64d59c] mb-2">
              {stat.value}
            </p>
            <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
