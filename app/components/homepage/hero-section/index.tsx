// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center space-y-8">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#16f2b3] animate-pulse"></div>
            <span className="text-xs font-semibold text-[#16f2b3] uppercase tracking-widest">
              Welcome to my portfolio
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-red-500 bg-clip-text text-transparent">
                {personalData.name}
              </span>
            </h1>
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                I'm a
              </h2>
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] bg-clip-text text-transparent">
                {personalData.designation}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg">
            I build modern, responsive web applications with cutting-edge
            technologies. Passionate about creating seamless user experiences
            and solving complex problems.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link href={personalData.github} target="_blank" className="group">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#16f2b3]/20 to-pink-500/20 border border-[#16f2b3]/30 group-hover:border-[#16f2b3]/60 group-hover:from-[#16f2b3]/30 group-hover:to-pink-500/30 group-hover:shadow-lg group-hover:shadow-[#16f2b3]/20 group-hover:scale-110 transition-all duration-300">
                <BsGithub
                  className="text-[#16f2b3] group-hover:text-[#0ef9f3] transition-colors"
                  size={24}
                />
              </div>
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="group"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#16f2b3]/20 to-pink-500/20 border border-[#16f2b3]/30 group-hover:border-[#16f2b3]/60 group-hover:from-[#16f2b3]/30 group-hover:to-pink-500/30 group-hover:shadow-lg group-hover:shadow-[#16f2b3]/20 group-hover:scale-110 transition-all duration-300">
                <BsLinkedin
                  className="text-[#16f2b3] group-hover:text-[#0ef9f3] transition-colors"
                  size={24}
                />
              </div>
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              className="group"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#16f2b3]/20 to-pink-500/20 border border-[#16f2b3]/30 group-hover:border-[#16f2b3]/60 group-hover:from-[#16f2b3]/30 group-hover:to-pink-500/30 group-hover:shadow-lg group-hover:shadow-[#16f2b3]/20 group-hover:scale-110 transition-all duration-300">
                <SiLeetcode
                  className="text-[#16f2b3] group-hover:text-[#0ef9f3] transition-colors"
                  size={24}
                />
              </div>
            </Link>
            <Link href={personalData.twitter} target="_blank" className="group">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#16f2b3]/20 to-pink-500/20 border border-[#16f2b3]/30 group-hover:border-[#16f2b3]/60 group-hover:from-[#16f2b3]/30 group-hover:to-pink-500/30 group-hover:shadow-lg group-hover:shadow-[#16f2b3]/20 group-hover:scale-110 transition-all duration-300">
                <FaTwitterSquare
                  className="text-[#16f2b3] group-hover:text-[#0ef9f3] transition-colors"
                  size={24}
                />
              </div>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link href="#contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] text-gray-900 font-bold uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-[#16f2b3]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Get in touch</span>
                <RiContactsFill size={20} />
              </button>
            </Link>
            <Link href={""} target="_blank" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-[#16f2b3] text-[#16f2b3] font-bold uppercase tracking-wider rounded-lg hover:bg-[#16f2b3]/10 hover:shadow-lg hover:shadow-[#16f2b3]/30 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Download CV</span>
                <MdDownload size={20} />
              </button>
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Pratik Doke</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  hardWorker:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  quickLearner:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  problemSolver:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                  hireable:
                </span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                  return
                </span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
