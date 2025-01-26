"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Carousel: React.FC = () => {
   const t = useTranslations("carousel")
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    t("images.image1"),
    t("images.image2"),
    t("images.image3"),
    t("images.image4"),
    t("images.image5"),
    t("images.image6"),
    t("images.image7"),
    t("images.image8"),
    t("images.image9"),
    t("images.image10"),
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative p-10 bg-white w-full">
      {/* Carousel Wrapper */}
      <h3 className="text-[#292B5B] text-base md:text-2xl text-center underline-offset-8 underline decoration-[#FF0000] font-semibold mb-4">
{t("heading")}      </h3>
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
              priority={index === 0} // Prioritize loading for the first slide
            />
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-black" : "bg-gray-400"
              }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        type="button"
        className="absolute max-sm:top-9 sm:top-0 left-0  z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center bg-[#FF0000] justify-center w-10 h-10 rounded-full group-hover:bg-[#FF0000] focus:ring-4 focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute max-sm:top-9 sm:top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center bg-[#FF0000] justify-center w-10 h-10 rounded-full group-hover:bg-[#FF0000] focus:ring-4 focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;