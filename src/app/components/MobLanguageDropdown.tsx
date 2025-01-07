"use client"

import React, { useState } from "react";
import Image from "next/image";

type Language = {
    code: string;
    label: string;
    image: string;
};

const MobLanguageDropdown: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [langTab, setLangTab] = useState<boolean>(false); 
    console.log(langTab); 

    const toggleLangTab = () => {
        setLangTab((prev) => !prev); 
    };



    const languages: Language[] = [
        { code: "en", label: "EN", image: "/en.png" },
        { code: "ru", label: "RU", image: "/ru.png" }, 
    ];

    const toggleDropdown = () => {
        setIsOpen(!langTab);
    };

    const selectLanguage = (lang: string) => {
        setSelectedLanguage(lang);
        setIsOpen(false);
    };

    const selectedLang = languages.find((lang) => lang.code === selectedLanguage);

    return (
        <div className="absolute md:hidden right-0 ml-7 inline-block text-left">
            <div
                className={`flex items-center ${langTab ? "translate-x-24" : "translate-x-0"
                    } gap-3 bg-white p-2 rounded transition-transform duration-300`}
            >              <Image src="/language.png" onClick={toggleLangTab} className="cursor-pointer z-10" alt="language icon" width={20} height={20} />
                <button
                    className="flex items-center w-fit justify-center rounded-md border-2 border-[#292B5B] bg-white p-1 text-xl font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none"
                    onClick={toggleDropdown}
                >
                    {selectedLang && (
                        <>
                            <Image src={selectedLang.image} alt={selectedLang.label} width={30} height={30} />
                            <span className="ml-2">{selectedLang.label}</span>
                        </>
                    )}
                </button>
            </div>

            {/* Dropdown */}
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-28 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10"
                    role="menu"
                >
                    {languages.map((lang) => (
                        <div
                            key={lang.code}
                            className="flex items-center px-1 py-1 text-xl text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => selectLanguage(lang.code)}
                        >
                            <Image src={lang.image} alt={lang.label} width={30} height={30} />
                            <span className="ml-2">{lang.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobLanguageDropdown;
