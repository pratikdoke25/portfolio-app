// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-gradient-to-r from-[#16f2b3] to-transparent"></span>
            <div className="flex items-center gap-2">
              <BsPersonWorkspace className="text-[#16f2b3]" size={24} />
              <span className="bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] bg-clip-text text-transparent p-2 px-5 text-2xl font-bold rounded-md">
                Experiences
              </span>
            </div>
            <span className="w-12 h-[2px] bg-gradient-to-l from-[#16f2b3] to-transparent"></span>
          </div>
          <p className="text-gray-400 text-sm">Journey through my professional growth</p>
        </div>
      </div>

      <div className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-center">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map((exp, idx) => (
                  <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                    <div className="p-3 relative overflow-hidden group">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      
                      {/* Timeline indicator */}
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#16f2b3] via-[#0ef9f3] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="flex justify-center mb-2">
                        <span className="text-xs sm:text-sm text-[#16f2b3] font-semibold uppercase tracking-wider bg-[#16f2b3]/10 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>

                      <div className="flex items-start gap-x-6 px-3 py-5">
                        <div className="text-[#16f2b3] transition-all duration-300 group-hover:scale-125 group-hover:text-[#0ef9f3] flex-shrink-0 mt-1">
                          <BsPersonWorkspace size={40} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-base sm:text-xl mb-2 font-bold text-white group-hover:text-[#16f2b3] transition-colors uppercase">
                            {exp.title}
                          </p>
                          <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors font-medium">
                            {exp.company}
                          </p>
                          {exp.description && (
                            <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Bottom accent */}
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#16f2b3]/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;