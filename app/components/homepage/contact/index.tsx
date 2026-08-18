// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from "./contact-form";
import { JSX } from "react/jsx-runtime";

const ContactSection = (): JSX.Element => {
  return (
    <div id="contact" className="my-12 lg:my-24 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] bg-clip-text text-transparent rotate-90 p-2 px-5 text-xl font-bold rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-[#16f2b3] to-transparent"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <ContactForm />

        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3]"></div>
              <p className="font-semibold text-[#16f2b3] text-xs uppercase tracking-[0.15em]">
                Contact Info
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#16f2b3]/20 to-[#0ef9f3]/20 border border-[#16f2b3]/30 group-hover:border-[#16f2b3]/60 group-hover:bg-gradient-to-br group-hover:from-[#16f2b3]/30 group-hover:to-[#0ef9f3]/30 transition-all duration-300">
                  <MdAlternateEmail
                    className="text-[#16f2b3] group-hover:text-[#0ef9f3] transition-colors"
                    size={24}
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wide mb-1">Email</p>
                  <a href={`mailto:${personalData.email}`} className="text-white text-lg hover:text-[#16f2b3] transition-colors">
                    {personalData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#16f2b3]/20 to-[#0ef9f3]/20 border border-[#16f2b3]/30 group-hover:border-[#16f2b3]/60 group-hover:bg-gradient-to-br group-hover:from-[#16f2b3]/30 group-hover:to-[#0ef9f3]/30 transition-all duration-300">
                  <IoMdCall
                    className="text-[#16f2b3] group-hover:text-[#0ef9f3] transition-colors"
                    size={24}
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wide mb-1">Phone</p>
                  <a href={`tel:${personalData.phone}`} className="text-white text-lg hover:text-[#16f2b3] transition-colors">
                    {personalData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#16f2b3]/20 to-[#0ef9f3]/20 border border-[#16f2b3]/30 group-hover:border-[#16f2b3]/60 group-hover:bg-gradient-to-br group-hover:from-[#16f2b3]/30 group-hover:to-[#0ef9f3]/30 transition-all duration-300">
                  <CiLocationOn
                    className="text-[#16f2b3] group-hover:text-[#0ef9f3] transition-colors"
                    size={24}
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wide mb-1">Location</p>
                  <p className="text-white text-lg">{personalData.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3]"></div>
              <p className="font-semibold text-[#16f2b3] text-xs uppercase tracking-[0.15em]">
                Follow Me
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link target="_blank" href={personalData.github}>
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#16f2b3]/20 to-[#0ef9f3]/20 border border-[#16f2b3]/30 hover:border-[#16f2b3]/60 hover:bg-gradient-to-br hover:from-[#16f2b3]/30 hover:to-[#0ef9f3]/30 hover:scale-110 transition-all duration-300">
                  <IoLogoGithub
                    className="text-[#16f2b3] hover:text-[#0ef9f3] transition-colors"
                    size={24}
                  />
                </div>
              </Link>
              <Link target="_blank" href={personalData.linkedIn}>
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#16f2b3]/20 to-[#0ef9f3]/20 border border-[#16f2b3]/30 hover:border-[#16f2b3]/60 hover:bg-gradient-to-br hover:from-[#16f2b3]/30 hover:to-[#0ef9f3]/30 hover:scale-110 transition-all duration-300">
                  <BiLogoLinkedin
                    className="text-[#16f2b3] hover:text-[#0ef9f3] transition-colors"
                    size={24}
                  />
                </div>
              </Link>
              <Link target="_blank" href={personalData.twitter}>
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#16f2b3]/20 to-[#0ef9f3]/20 border border-[#16f2b3]/30 hover:border-[#16f2b3]/60 hover:bg-gradient-to-br hover:from-[#16f2b3]/30 hover:to-[#0ef9f3]/30 hover:scale-110 transition-all duration-300">
                  <FaXTwitter
                    className="text-[#16f2b3] hover:text-[#0ef9f3] transition-colors"
                    size={24}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;