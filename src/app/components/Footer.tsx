import React from "react";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#292B5B] relative text-white text-center py-10 overflow-x-hidden">
      <div className="absolute md:inset-0 md:h-full">
        <Image
          src="/footer_bg.png" // Replace with your background dots image
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>
      <div className="lg:w-[90%] lg:mx-auto px-4 lg:px-0">
        {/* Top Section */}
        <div className="md:flex md:flex-row w-full lg:px-8 flex flex-col md:items-start items-center lg:gap-32 gap-10">
          <div className="flex flex-col lg:gap-28 md:gap-64 md:justify-between items-center md:items-start">
          {/* Logo and Social Media */}
            <div className="flex flex-col gap-2 items-center md:items-start">
              {/* Logo */}
              <div className="relative w-40 h-20">
                <Image
                  src="/rotw-white.svg" // Replace with your actual logo path in the public folder
                  alt="Logo"
                  layout="fill"
                  objectFit="contain" // Ensures the logo is fully visible
                  priority // Ensures the logo loads quickly
                  className=""
                />
                {/* <p className="md:hidden block font-semibold mt-20">Your Gateway to Unforgettable Journeys</p>
               <div className="h-[0.05rem] bg-white rounded-md md:hidden block w-[96%] mx-auto absolute bottom-0"/> */}
              </div>
                <div className="absolute left-0 h-36 top-0 w-screen md:hidden block">
                  <Image
                    src="/footer_bg.png" // Replace with your background dots image
                    alt="Footer Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-60"
                  />
                </div>
              <p className="font-semibold mt-3 md:hidden block">Your Gateway to Unforgettable Journeys</p>
              <div className="w-[98vw] mx-auto h-[0.05rem] bg-white rounded-md md:hidden block mt-6" />


              {/* Social Media Icons */}
              <div className="md:flex space-x-4 hidden">
                <a href="#facebook" aria-label="Facebook">
                  <FiFacebook className="text-2xl" />
                </a>
                <a href="#instagram" aria-label="Instagram">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#twitter" aria-label="Twitter">
                  <FaXTwitter className="text-2xl" />
                </a>
                <a href="#linkedin" aria-label="LinkedIn">
                  <FiLinkedin className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="md:block hidden">
              <h3 className="text-lg mb-3 text-left">Address:</h3>
              <p className="text-left">
                House 32 Premises, 4/2 Kalanchevskaya St.,
                <br />
                129090, Moscow, Russia
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-row md:justify-between md:w-full md:flex-wrap flex flex-col items-cente md:gap-0 gap-8">
            {/* Destinations */}
            <div className="lg:basis-[20%] md:basis-[30%] md:mb-10 lg:mb-0">
              <h3 className="md:font-extralight font-semibold md:tracking-[0.3rem] text-lg mb-4 md:text-left text-center">
                Destinations
              </h3>
              <ul className="space-y-2 md:list-disc">
                {[
                  "Moscow",
                  "Saint Petersburg",
                  "Sochi",
                  "Siberia",
                  "Vladivostok",
                  "Kaliningrad",
                  "Kazan",
                  "Golden Ring",
                ].map((item) => (
                  <li
                    key={item}
                    className="md:text-left text-center md:ml-[0.8rem] font-extralight text-sm"
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-blue-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:basis-[20%] md:basis-[30%] md:mb-10 lg:mb-0">
              <h3 className="md:font-extralight font-semibold md:tracking-[0.3rem] text-lg mb-4 md:text-left text-center">
                Services
              </h3>
              <ul className="space-y-2 md:list-disc">
                {[
                  "Inbound Tour Operator",
                  "Airport Service",
                  "Group & Events",
                  "Ahlan Service",
                  "Hala Service",
                  "Airport Transfer",
                  "Visa Assistant",
                  "Meet & Assist",
                  "Outbound Tour",
                  "Car Rental Service",
                ].map((item) => (
                  <li
                    key={item}
                    className="md:text-left text-center md:ml-[0.8rem] text-sm"
                  >
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-blue-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:basis-[20%] md:basis-[30%]">
              <h3 className="md:font-extralight font-semibold md:tracking-[0.3rem] text-lg mb-4 md:text-left text-center">
                Company
              </h3>
              <ul className="space-y-2 md:list-disc">
                {["Gallery", "About us", "Contact us"].map((item) => (
                  <li
                    key={item}
                    className="md:ml-[0.8rem] md:text-left text-center text-sm"
                  >
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-blue-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:basis-[20%] md:basis-[30%]">
              <h3 className="md:font-extralight font-semibold md:tracking-[0.3rem] text-lg mb-4 md:text-left text-center">
                Legal
              </h3>
              <ul className="space-y-2 md:list-disc">
                {["Privacy Policy", "Terms of Service", "Payment Terms"].map(
                  (item) => (
                    <li
                      key={item}
                      className="md:ml-[0.8rem] md:text-left text-center text-sm"
                    >
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="hover:text-blue-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Address */}
            <div className="md:hidden block">
              <div className="w-full mx-auto h-[0.05rem] bg-white rounded-md md:hidden block mb-6" />
              <h3 className="text-lg mb-4 md:text-left text-center font-light tracking-[0.08rem]">
                Address:
              </h3>
              <p className="md:text-left text-center">
                House 32 Premises, 4/2 Kalanchevskaya St.,
                <br />
                129090, Moscow, Russia
              </p>
              <div className="w-full mx-auto h-[0.05rem] bg-white rounded-md md:hidden block mt-6" />
            </div>

            {/* social media icons */}
            <div className="md:hidden space-x-4 flex justify-center gap-4">
              <a href="#facebook" aria-label="Facebook">
                <FiFacebook className="text-2xl" />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <FaXTwitter className="text-2xl" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <FiLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 md:w-[26%] w-full mx-auto text-sm text-gray-400">
          <div className="w-full mx-auto h-[0.05rem] md:block hidden bg-white rounded-md" />
          <p className="my-1">Copyright © 2024 ROTW. All Rights Reserved.</p>
          <div className="w-full mx-auto h-[0.05rem] bg-white rounded-md md:block hidden" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
