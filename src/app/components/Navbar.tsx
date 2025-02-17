"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "../[locale]/components/LanguageDropdown";
import clsx from "clsx";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 py-1 z-50">
      <div className="container mx-auto max-w-6xl  py-3 flex justify-between items-center">

        <div className="relative w-32 h-12 md:w-40 md:h-16">
          <Link href="/">
            <Image
              src="/rotw-color.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Link>
        </div>

        <button
          onClick={() => {setIsOpen(!isOpen)
            console.log("open");
            
          }}
          className="text-gray-700 md:hidden"
        >
          <div className="absolute right-0 bottom-5 w-10 h-10">
            <Image
              src="/hameburger.png"
              alt="hamburger"
              layout="fill"
              priority
            />
          </div>
        </button>
        <div className="md:flex justify-between items-center">
          <ul
            className={clsx("md:flex md:items-center md:static md:w-auto md:space-y-0 md:h-auto md:space-x-4 lg:space-x-6 space-y-4 text-gray-700 text-lg",isOpen
              ? "absolute w-full left-0 top-20 bg-white z-10 block"
              : "absolute w-full left-0 top-20 bg-white z-10 hidden")}
          >
            <li className="text-center border-b border-gray-300 md:border-none pb-2 ">
              <a href="/about" className="text-[#292B5B] text-[20px] font-[500] hover:text-[#FF0000]  transform hover:scale-110 transition-all duration-300 ease-in-out">
                About Us
              </a>
            </li>
            <li className="relative group text-center border-b md:border-none border-gray-300 pb-2">
              <a
                href="/destinations"
                className="text-[#292B5B] text-[20px] font-[500] hover:text-[#FF0000] transform hover:scale-110 transition-all duration-300 ease-in-out"
              >
                Destinations
              </a>

              {/* Dropdown */}
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 border mt-2 w-72 text-sm">
                <ul className="grid grid-cols-3 gap-4">
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
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="block text-center text-gray-700 text-[18px] font-medium hover:text-[#FF0000]  transition duration-300 ease-in-out"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </li>

            <li className="relative group text-center border-b md:border-none border-gray-300 pb-2">
              <a href="/services" className="text-[#292B5B] text-[20px] font-[500] hover:text-[#FF0000]  transform hover:scale-110 transition-all duration-300 ease-in-out">
                Services
              </a>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 border mt-2 w-72 text-sm">
                <ul className="grid grid-cols-2 gap-4">
                  {[
                    "Hotel Booking",
                    "Car Rentals",
                    "Flight Booking",
                    "Tour Guides",
                    "Visa Services",
                    "Travel Insurance",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-center text-gray-700 text-[18px] font-medium hover:text-[#FF0000] transition duration-300 ease-in-out"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </li>
            <li className="text-center border-b md:border-none border-gray-300 pb-2">
              <a href="/gallery" className="text-[#292B5B] text-[20px] font-[500] hover:text-[#FF0000]  transform hover:scale-110 transition-all duration-300 ease-in-out">
                Gallery
              </a>
            </li>
            <li className="text-center border-b md:border-none border-gray-300 pb-2">
              <a href="/contactus" className="text-[#292B5B] text-[20px] font-[500] hover:text-[#FF0000]  transform hover:scale-110 transition-all duration-300 ease-in-out">
                Contact Us
              </a>
            </li>

          </ul>
          <div className="hidden md:block">
            <LanguageDropdown /></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
