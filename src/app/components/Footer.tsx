import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#292B5B] relative text-white text-center py-10">
      <div className="absolute inset-0">
        <Image
          src="/footer_bg.png" // Replace with your background dots image
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Logo and Social Media */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="relative w-32 h-12">
              <Image
                src="/rotw-white.svg" // Replace with your actual logo path in the public folder
                alt="Logo"
                layout="fill"
                objectFit="contain" // Ensures the logo is fully visible
                priority // Ensures the logo loads quickly
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#facebook" aria-label="Facebook">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Destinations</h3>
            <ul className="space-y-2">
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
                <li key={item}>
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
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
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
                <li key={item}>
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
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {["Gallery", "About us", "Contact us"].map((item) => (
                <li key={item}>
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

          {/* Address */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Address</h3>
            <p>
              House 32 Premises, 4/2 Kalanchevskaya St.,
              <br />
              129090, Moscow, Russia
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-sm text-gray-400">
          <p>Copyright © 2024 ROTW. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
