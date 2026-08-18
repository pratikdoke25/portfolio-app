"use client";

import Link from 'next/link';
import { JSX } from 'react/jsx-runtime';
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: IoLogoGithub, href: "https://github.com", label: "GitHub" },
    { icon: BiLogoLinkedin, href: "https://linkedin.com/in/pratik-doke-3539a3249", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: MdAlternateEmail, href: "mailto:your@email.com", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-[#16f2b3]/10 bg-gradient-to-t from-[#0a0e27] via-[#0d1224] to-transparent text-white pt-12 pb-6">
      {/* Gradient line */}
      <div className="flex justify-center -z-40 absolute top-0 left-0 right-0">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-[#16f2b3]/30 to-transparent"></div>
      </div>

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] bg-clip-text text-transparent">
              Pratik Doke
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Frontend developer building elegant solutions with modern web technologies.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-[#16f2b3] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-xs text-gray-400 hover:text-[#16f2b3] transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-gray-400 hover:text-[#16f2b3] transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-gray-400 hover:text-[#16f2b3] transition-colors duration-300"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200">Connect</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    target="_blank"
                    href={social.href}
                    className="group"
                    aria-label={social.label}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#16f2b3]/20 to-[#0ef9f3]/20 border border-[#16f2b3]/30 group-hover:border-[#16f2b3]/60 group-hover:shadow-lg group-hover:shadow-[#16f2b3]/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-[#16f2b3] group-hover:text-[#0ef9f3] transition-colors" size={18} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#16f2b3]/20 to-transparent mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {currentYear} <Link target="_blank" href="https://www.linkedin.com/in/pratik-doke-3539a3249/" className="text-[#16f2b3] hover:text-[#0ef9f3] transition-colors">Pratik Doke</Link>. All rights reserved.
          </p>
          <p>
            Crafted with <span className="text-[#16f2b3]">♥</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;