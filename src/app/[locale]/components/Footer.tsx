import React from "react";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t=useTranslations("footer")
  return (
    <footer className="bg-[#292B5B] relative text-white text-center py-10 overflow-x-hidden">
      {/* bg image */}
      <div className="absolute md:inset-0 md:h-full">
        <Image
          src="/footer_bg.png" // Replace with your background dots image
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>
      <div className="lg:w-full lg:mx-0 md:w-[95%] md:mx-auto px-4 lg:px-0">
        {/* Top Section */}
        <div className="md:flex md:flex-row w-full lg:px-8 flex flex-col md:items-start items-center lg:gap-20 gap-10 md:gap-36">
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
          </div>
          <div className="md:flex md:flex-row md:justify-between md:w-full md:flex-wrap flex flex-col md:gap-0 gap-8">
            {/* Destinations */}
            <div className="lg:basis-[17%] md:basis-[20%] md:mb-10 lg:mb-0">
              <h3 className="md:font-extralight text-[#FF0000] font-semibold md:tracking-[0.12rem] mb-4 md:text-left text-center">
                {t("destination.heading")}
              </h3>
              <ul className="space-y-2 md:list-disc">
                {[
                  t("destination.destination1"),
                  t("destination.destination2"),
                  t("destination.destination3"),
                  t("destination.destination4"),
                  t("destination.destination5"),
                  t("destination.destination6"),
                  t("destination.destination7"),
                  t("destination.destination8"),
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
            <div className="lg:basis-[17%] md:basis-[30%] md:mb-10 lg:mb-0">
              <h3 className="md:font-extralight text-[#FF0000] font-semibold md:tracking-[0.12rem] mb-4 md:text-left text-center">
                {t("service.heading")}
              </h3>
              <ul className="space-y-2 md:list-disc">
                {[
                  t("service.service1"),
                  t("service.service2"),
                  t("service.service3"),
                  t("service.service4"),
                  t("service.service5"),
                  t("service.service6"),
                  t("service.service7"),
                  t("service.service8"),
                  t("service.service9"),
                  t("service.service10"),
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
            <div className="lg:basis-[17%] md:basis-[30%]">
              <h3 className="md:font-extralight text-[#FF0000] font-semibold md:tracking-[0.12rem] mb-4 md:text-left text-center">
                {t("company.heading")}
              </h3>
              <ul className="space-y-2 md:list-disc">
                {[t("company.company1"),t("comapny.company2"),t("company.company3")].map((item) => (
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
            <div className="lg:basis-[17%] md:basis-[30%]">
              <h3 className="md:font-extralight text-[#FF0000] font-semibold md:tracking-[0.12rem] mb-4 md:text-left text-center">
                {t("legal.heading")}
              </h3>
              <ul className="space-y-2 md:list-disc">
                {[t("legal.legal1"),t("legal.legal2"),t("legal.legal3")].map(
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
            {/* Contact us */}
            <div className="lg:basis-[17%] md:basis-[30%]">
              <h3 className="md:font-extralight text-[#FF0000] font-semibold md:tracking-[0.12rem]  mb-4 md:text-left text-center">
                {t("contactus.heading")}
              </h3>
              <div className="flex flex-col md:items-start items-center gap-2">
                <div className="flex gap-2 items-center">
                  <CiPhone/>
                  <p>+7-9096897125</p>
                </div>
                <div className="flex gap-2 items-center">
                  <CiMail/>
                  <p>inbound@rotwtravels.com</p>
                </div>
                <div className="flex gap-2 justify-center md:justify-start">
                  <CiLocationOn className="mt-1"/>
                  <p className="md:text-left md:max-w-[80%] text-center">{t("contactus.address")}</p>
                </div>
                <div className="w-full h-[1px] bg-white mt-14 mb-5 md:hidden block"/>
              </div>
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
        <div className="mt-10 md:w-[31%] w-full mx-auto text-sm text-gray-400">
          <div className="w-full mx-auto h-[0.05rem] md:block hidden bg-white rounded-md" />
          <p className="my-1">{t("copyright.text")}</p>
          <div className="w-full mx-auto h-[0.05rem] bg-white rounded-md md:block hidden" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
