"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../globals.css"
import { useTranslations } from "next-intl";

const TravelTips: React.FC = () => {

  const t =useTranslations("cards")

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const cards = [
    {
      image: "/ourProd1.png",
      title: t("airTickets.title"),
      description: t("airTickets.description"),
      bgColor: "bg-[#E1E1E1]",
    },
    {
      image: "/ourProd2.png",
      title: t("hotels.title"),
      description: t("hotels.description"),
      bgColor: "bg-white",
    },
    {
      image: "/ourProd3.png",
      title: t("holidayTours.title"),
      description: t("holidayTours.description"),
      bgColor: "bg-gray-200",
    },
    {
      image: "/ourProd4.png",
      title: t("visa.title"),
      description: t("visa.description"),
      bgColor: "bg-white",
    },
    {
      image: "/ourProd5.png",
      title: t("insurance.title"),
      description: t("insurance.description"),
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="relative bg-white py-16">
      {/* Background Dots */}
      <div className="absolute inset-0">
        <Image
          src="/dots.png"
          alt="Background Dots"
          fill
          className="object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto  px-8 md:px-20">
        {/* Heading */}
        <div className="text-left mb-12">
          <h2 className="text-3xl text-center md:text-4xl font-thin text-red-500">
            {t("heading")}
          </h2>
          <p className="text-sm text-center text-gray-800 mt-2">
            {t("subheading")}
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-3 ${card.bgColor} h-96 border border-gray-300  rounded-md flex-shrink-0 w-[150px]`}
            >
              <div className="w-20 h-20 mx-auto">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={60}
                  height={60}
                  className="rounded-md object-contain"
                />
              </div>
              <h4 className="text-sm mt-0 mb-8 underline underline-offset-4 text-black uppercase text-center">
                {card.title}
              </h4>
              <p className="text-base text-gray-600 text-left mb-4">
                {card.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TravelTips;
