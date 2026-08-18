import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Profile from '@/public/profile.png'
import { JSX } from "react/jsx-runtime";

const AboutSection = (): JSX.Element => {

  return (
    <div id="about" className="my-20 lg:my-24 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#16f2b3]/5 via-transparent to-[#1a1443]/10 rounded-3xl pointer-events-none"></div>
      
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] bg-clip-text text-transparent rotate-90 p-2 px-5 text-xl font-bold rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-[#16f2b3] to-transparent"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Content Section */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3]"></div>
              <p className="font-semibold text-[#16f2b3] text-xs lg:text-sm uppercase tracking-[0.15em]">
                Introduction
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Who I am?
            </h2>
          </div>

          <p className="text-gray-400 text-base lg:text-lg leading-relaxed font-light max-w-lg">
            {personalData.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] bg-clip-text text-transparent group-hover:from-[#0ef9f3] group-hover:to-[#16f2b3] transition-all duration-300">
                2+
              </div>
              <p className="text-gray-500 text-xs lg:text-sm mt-2 group-hover:text-gray-400 transition-colors">
                Years
              </p>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] bg-clip-text text-transparent group-hover:from-[#0ef9f3] group-hover:to-[#16f2b3] transition-all duration-300">
                10+
              </div>
              <p className="text-gray-500 text-xs lg:text-sm mt-2 group-hover:text-gray-400 transition-colors">
                Projects
              </p>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] bg-clip-text text-transparent group-hover:from-[#0ef9f3] group-hover:to-[#16f2b3] transition-all duration-300">
                100%
              </div>
              <p className="text-gray-500 text-xs lg:text-sm mt-2 group-hover:text-gray-400 transition-colors">
                Dedicated
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative group">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#16f2b3]/20 to-[#0ef9f3]/20 rounded-2xl blur-2xl group-hover:blur-3xl group-hover:from-[#16f2b3]/40 group-hover:to-[#0ef9f3]/40 transition-all duration-500 -z-10"></div>
            
            <div className="relative p-2 bg-gradient-to-br from-[#16f2b3]/10 to-[#0ef9f3]/10 rounded-2xl backdrop-blur-sm border border-[#16f2b3]/20 group-hover:border-[#16f2b3]/50 transition-all duration-500">
              <Image
                src={Profile}
                width={320}
                height={320}
                alt="Abu Said"
                className="rounded-xl w-64 h-64 lg:w-80 lg:h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;