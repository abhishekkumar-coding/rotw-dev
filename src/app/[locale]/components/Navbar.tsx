"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servDrop, setServDrop] = useState(false)
  const [destDrop, setDestDrop] = useState(false)
  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
  
      // Close all dropdowns if click is outside all of them
      if (
        !target.closest(".dest") && // Check for Destinations dropdown
        !target.closest(".serv") && // Check for Services dropdown
        !target.closest(".hamburger") // Check for Hamburger dropdown
      ) {
        setDestDrop(false); // Close Destinations dropdown
        setServDrop(false); // Close Services dropdown
        setIsOpen(false); // Close Hamburger dropdown
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  



  const switchLocale = (locale: string) => {
    router.push(`/${locale}${pathname}`);
  };
  const toggleDrop1 = ()=>setServDrop((prev) =>!prev)
  const toggleDrop = () => setDestDrop((prev) => !prev);
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
          onClick={() => {
            setIsOpen(!isOpen)
            console.log("open");

          }}
          className="hamburger text-gray-700 md:hidden"
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
            className={clsx("md:flex md:items-center md:static md:w-auto md:space-y-0 md:h-auto md:space-x-4 lg:space-x-6 space-y-4 text-gray-700 text-lg", isOpen
              ? "absolute w-full left-0 top-20 bg-white z-10 block"
              : "absolute w-full left-0 top-20 bg-white z-10 hidden")}
          >
            <li className="text-center border-b border-gray-300 md:border-none pb-2 ">
              <Link href={`/${pathname.split("/")[1]}/about`} className="text-[#292B5B] text-[20px] font-[500] hover:text-[#FF0000]  transform hover:scale-110 transition-all duration-300 ease-in-out">
                {t("about")}
              </Link>
            </li>
            <li  onMouseEnter={() => setDestDrop(true)} className="relative group text-center border-b md:border-none border-gray-300 pb-2">
              <Link
                href={`/${pathname.split("/")[1]}/destinations`}
                onClick={(event) => event.preventDefault()} // Prevent navigation
                className="text-[#292B5B] text-[20px] font-[500] hover:text-[#FF0000] transform hover:scale-110 transition-all duration-300 ease-in-out"
              >
                {t("destinations")}
              </Link>

              {/* Dropdown */}
              <div className={`absolute z-50 top-14 left-0 bg-white shadow-lg rounded-lg p-4 border mt-2 w-64 text-sm ${destDrop ? "block" : "hidden"}`}
                onMouseLeave={() => setDestDrop(false)}>
                <ul className="grid grid-cols-2 gap-4">
                  {[
                    // { key: "Moscow", label: t("destiniDropdown.Moscow") },
                    // { key: "Saint Petersburg", label: t("destiniDropdown.Saint Petersburg") },
                    // { key: "Sochi", label: t("destiniDropdown.Sochi") },
                    // { key: "Siberia", label: t("destiniDropdown.Siberia") },
                    // { key: "Vladivostok", label: t("destiniDropdown.Vladivostok") },
                    // { key: "Kaliningrad", label: t("destiniDropdown.Kaliningrad") },
                    // { key: "Kazan", label: t("destiniDropdown.Kazan") },
                    // { key: "Golden Ring", label: t("destiniDropdown.Golden Ring") }
                    { key: "inbound", label: t("destiniDropdown.inbound") },
                    { key: "outbound", label: t("destiniDropdown.outbound") }
                  ].map((item) => (
                    <li key={item.key}>
                      <Link
                        href={`/${pathname.split("/")[1]}/destinations/${item.key}`}
                        className="block text-center text-wrap text-gray-700 text-[18px] font-medium hover:text-[#FF0000]  transition duration-300 ease-in-out"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </li>

            <li onMouseEnter={()=>setServDrop(true)} className="relative group text-center border-b md:border-none border-gray-300 pb-2">
              <Link href={`/${pathname.split("/")[1]}/services`} 
                onClick={(event) => event.preventDefault()} // Prevent navigation
                className="text-[#292B5B] text-[20px] font-[500] hover:text-[#FF0000]  transform hover:scale-110 transition-all duration-300 ease-in-out">
                {t("services")}

              </Link>
              <div onMouseLeave={()=>setServDrop(false)} className={`serv absolute left-0 top-16 bg-white shadow-lg rounded-lg p-4 border mt-2 w-96 text-sm ${servDrop ? "block" : "hidden"}`}>
                <ul className="grid grid-cols-2 gap-4">
                  {[
                    t("servicesDropdown.hotel"),
                    t("servicesDropdown.car"),
                    t("servicesDropdown.flight"),
                    t("servicesDropdown.tour"),
                    t("servicesDropdown.visa"),
                    t("servicesDropdown.travel"),
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-center text-gray-700 text-[18px] font-medium hover:text-[#FF0000] transition duration-300 ease-in-out"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </li>
            <li className="text-center border-b md:border-none border-gray-300 pb-2">
              <Link href={`/${pathname.split("/")[1]}/gallery`} className="text-[#292B5B] text-[20px] font-[500] hover:text-[#FF0000]  transform hover:scale-110 transition-all duration-300 ease-in-out">
                {t("gallery")}
              </Link>
            </li>
            <li className="text-center border-b md:border-none border-gray-300 pb-2">
              <Link href={`/${pathname.split("/")[1]}/contactus`} className="text-[#292B5B] text-[20px] font-[500] hover:text-[#FF0000]  transform hover:scale-110 transition-all duration-300 ease-in-out">
                {t("contact")}
              </Link>
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
