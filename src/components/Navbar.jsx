import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Trainers", href: "#trainers" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-black fixed top-0  py-8 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-6xl font-bold text-yellow-500">
          Ronnix<span className="text-red-600">Fit</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-semibold">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="hover:text-yellow-500 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-500 text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col gap-6 p-6 font-semibold">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-yellow-500 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
