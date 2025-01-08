import React from "react";
import Image from "next/image";

const WhatWeDo: React.FC = () => {
  const items = [
    {
      src: "/handcrafted.png", // Replace with the correct paths to your images
      title: "Handcrafted Travel Journeys",
    },
    {
      src: "/meeting.png",
      title: "MICE and conference organization",
    },
    {
      src: "/railway.png",
      title: "Trans-Siberian Railway",
    },
    {
      src: "/excursions1.png",
      title: "Custom-Curated Excursions",
    },
    {
      src: "/yacht.png",
      title: "River cruises",
    },
    {
      src: "/cuisine.png",
      title: "Classic Russian Cuisine with a Unique Twist",
    },
    {
      src: "/visa.png",
      title: "Visa support",
    },
    {
      src: "/addservice.png",
      title: "Additional services on request",
    },
    {
      src: "/24hours.png",
      title: "24/7 support",
    },
  ];

  return (
    <section className="bg-gray-200 py-16 border border-gray-600 px-4">
      <div className="container mx-auto text-center">
        <h3 className="text-[#292B5B] text-2xl text-center underline-offset-8 underline decoration-[#FF0000] font-semibold mb-6">
          “What We Do”
        </h3>
        {/* <div className="w-16 h-1 bg-red-500 mx-auto mb-6"></div> */}

        {/* Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center`}
              >
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={item.src}
                    alt={item.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
                <p className="text-lg text-gray-800 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default WhatWeDo;
