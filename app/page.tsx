import Image from "next/image";
import Hero from "../public/hero.png";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Responsive hero section with improved layout */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Content section */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-500 dark:from-emerald-500 dark:to-emerald-300 inline-block text-transparent bg-clip-text leading-tight">
            Better design for your digital products.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry to create exceptional digital experiences.
          </p>
          <div className="mt-2">
            <Button url="/portfolio" text="See Our Works" />
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 hidden md:block">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Trusted by leading brands</p>
            <div className="flex items-center gap-8 opacity-70">
              <div className="font-semibold text-gray-800 dark:text-gray-200">Microsoft</div>
              <div className="font-semibold text-gray-800 dark:text-gray-200">Google</div>
              <div className="font-semibold text-gray-800 dark:text-gray-200">Amazon</div>
              <div className="font-semibold text-gray-800 dark:text-gray-200">Meta</div>
            </div>
          </div>
        </div>
        
        {/* Image section with optimizations */}
        <div className="flex-1">
          <div className="relative">
            <div className="absolute -z-10 w-full h-full rounded-full blur-3xl bg-emerald-200 dark:bg-emerald-900 opacity-30 animate-pulse" />
            <Image 
              src={Hero} 
              alt="Hero image"
              width={600}
              height={600}
              priority
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Features section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow dark:hover:shadow-gray-900/30 bg-white dark:bg-gray-800/20">
          <h3 className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-200">Innovative Design</h3>
          <p className="text-gray-600 dark:text-gray-300">Create cutting-edge digital experiences with our forward-thinking design approach.</p>
        </div>
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow dark:hover:shadow-gray-900/30 bg-white dark:bg-gray-800/20">
          <h3 className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-200">Seamless Development</h3>
          <p className="text-gray-600 dark:text-gray-300">Transform designs into functional, performant applications built with modern technologies.</p>
        </div>
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow dark:hover:shadow-gray-900/30 bg-white dark:bg-gray-800/20">
          <h3 className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-200">User-Centric</h3>
          <p className="text-gray-600 dark:text-gray-300">Focus on creating intuitive, accessible experiences that delight your users.</p>
        </div>
      </div>
    </div>
  );
}
