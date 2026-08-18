"use client";

import Link from "next/link";
import { JSX, useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { label: "ABOUT", href: "/#about" },
    { label: "EXPERIENCE", href: "/#experience" },
    { label: "SKILLS", href: "/#skills" },
    { label: "EDUCATION", href: "/#education" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top
      if (currentScrollY < 100) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Hide navbar when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-gradient-to-b from-[#0a0e27]/95 to-[#0a0e27]/80 backdrop-blur-md border-b border-[#16f2b3]/10 transition-all duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] bg-clip-text text-transparent hover:from-[#0ef9f3] hover:to-[#16f2b3] transition-all duration-300">
              Pratik Doke
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group relative px-4 py-2 no-underline">
                  <span className="text-xs lg:text-sm font-semibold text-gray-300 group-hover:text-[#16f2b3] transition-colors duration-300 tracking-wide">
                    {link.label}
                  </span>
                  <span className="absolute bottom-1 left-4 w-0 h-[2px] bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] group-hover:w-[calc(100%-32px)] transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="/#contact" className="hidden md:block">
            <button className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-gray-900 bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] rounded-lg hover:shadow-lg hover:shadow-[#16f2b3]/50 hover:scale-105 transition-all duration-300">
              Contact
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#16f2b3]/10 transition-colors"
          >
            {isOpen ? (
              <IoClose size={24} className="text-[#16f2b3]" />
            ) : (
              <IoMenu size={24} className="text-[#16f2b3]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-semibold text-gray-300 hover:text-[#16f2b3] hover:bg-[#16f2b3]/10 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              <button className="w-full px-4 py-2 text-sm font-semibold uppercase text-gray-900 bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] rounded-lg hover:shadow-lg hover:shadow-[#16f2b3]/50 transition-all duration-300 mt-2">
                Contact
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;