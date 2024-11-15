"use client";

import { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("header")) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed w-[90%] mx-auto mt-5 bg-white shadow-lg z-50 transition-all duration-300 ${
        isMobileMenuOpen ? "rounded-none" : "rounded-full"
      }`}
      style={{ left: "50%", transform: "translateX(-50%)" }} // Ensure it's perfectly centered
    >
      <nav className="flex justify-between items-center py-4 px-6 sm:px-8 lg:px-10">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Therawel Logo */}
          <div className="flex items-center">
            <Image src="/favicon.ico" alt="Therawel Logo" width={40} height={40} />
            <span className="ml-2 text-xl font-bold">Therawel</span>
          </div>
        </div>

        {/* Center Section - Menu */}
        <ul className="hidden lg:flex space-x-6 font-semibold">
          <li><a href="#" className="hover:text-green-600 transition duration-300">Home</a></li>
          <li><a href="#" className="hover:text-green-600 transition duration-300">Service</a></li>
          <li><a href="#" className="hover:text-green-600 transition duration-300">Shop</a></li>
          <li><a href="#" className="hover:text-green-600 transition duration-300">Pages</a></li>
          <li><a href="#" className="hover:text-green-600 transition duration-300">Blog</a></li>
          <li><a href="#" className="hover:text-green-600 transition duration-300">Contact</a></li>
        </ul>

        {/* Right Section - Icons and Button */}
        <div className="flex items-center space-x-4">
          {/* Search and Cart Icons */}
          <FaSearch className="text-xl cursor-pointer hover:text-green-600 transition duration-300" />
          <FaShoppingCart className="text-xl cursor-pointer hover:text-green-600 transition duration-300" />

          {/* Start Now Button */}
          <a
            href="#"
            className="hidden lg:inline-block bg-green-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-green-700 transition duration-300"
          >
            Start Now <FaArrowRight className="inline ml-1" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden flex flex-col items-center w-full bg-white py-4 space-y-4 font-semibold shadow-lg">
          <li><a href="#" className="hover:text-green-600 transition duration-300">Home</a></li>
          <li><a href="#" className="hover:text-green-600 transition duration-300">Service</a></li>
          <li><a href="#" className="hover:text-green-600 transition duration-300">Shop</a></li>
          <li><a href="#" className="hover:text-green-600 transition duration-300">Pages</a></li>
          <li><a href="#" className="hover:text-green-600 transition duration-300">Blog</a></li>
          <li><a href="#" className="hover:text-green-600 transition duration-300">Contact</a></li>

          {/* Start Now Button in Mobile Menu */}
          <a
            href="#"
            className="bg-green-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-green-700 transition duration-300"
          >
            Start Now <FaArrowRight className="inline ml-1" />
          </a>
        </ul>
      )}
    </header>
  );
}
