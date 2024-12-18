"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="relative w-32 h-12 md:w-40 md:h-16">
          <Image
            src="/rotw-color.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-700 text-lg`}
        >
          <li>
            <a href="#about" className="hover:text-blue-600">
              About Us
            </a>
          </li>
          <li className="relative group">
            <a href="#destinations" className="hover:text-blue-600">
              Destinations
            </a>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:grid bg-white shadow-md p-4 border mt-2 w-64 grid-cols-3 gap-2 text-sm text-gray-600">
              {[
                "Beach",
                "Mountain",
                "City",
                "Cruise",
                "Desert",
                "Historical",
                "Jungle",
                "Island",
                "Safari",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600"
                >
                  {item}
                </a>
              ))}
            </div>
          </li>
          <li className="relative group">
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>

            <div className="absolute hidden group-hover:grid bg-white shadow-md p-4 border mt-2 w-64 grid-cols-3 gap-2 text-sm text-gray-600">
              {[
                "Hotel Booking",
                "Car Rentals",
                "Flight Booking",
                "Tour Guides",
                "Visa Services",
                "Travel Insurance",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600"
                >
                  {item}
                </a>
              ))}
            </div>
          </li>
          <li>
            <a href="#gallery" className="hover:text-blue-600">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
