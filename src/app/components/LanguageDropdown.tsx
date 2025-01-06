import React, { useState } from "react";
import Image from "next/image";

type Language = {
    code: string;
    label: string;
    image: string;
};

const LanguageDropdown: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const languages: Language[] = [
        { code: "en", label: "EN", image: "/en.png" }, // English flag/icon
        { code: "ru", label: "RU", image: "/ru.png" }, // Russian flag/icon
    ];

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const selectLanguage = (lang: string) => {
        setSelectedLanguage(lang);
        setIsOpen(false);
        // Add language-switching logic here (e.g., i18n.changeLanguage(lang))
    };

    const selectedLang = languages.find((lang) => lang.code === selectedLanguage);

    return (
        <div className="relative ml-7 inline-block text-left">
            {/* Button */}
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

export default LanguageDropdown;
