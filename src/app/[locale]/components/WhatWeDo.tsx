import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WhatWeDo: React.FC = () => {

  const t = useTranslations("whatwedo")

  const items = [
    { src: "/handcrafted.png", title: t("items.handcraftedJourneys.title") },
    { src: "/meeting.png", title: t("items.mice.title") },
    { src: "/railway.png", title: t("items.railway.title") },
    { src: "/excursions1.png", title: t("items.excursions.title") },
    { src: "/yacht.png", title: t("items.cruises.title") },
    { src: "/cuisine.png", title: t("items.cuisine.title") },
    { src: "/visa.png", title: t("items.visa.title") },
    { src: "/addservice.png", title: t("items.addServices.title") },
    { src: "/24hours.png", title: t("items.support.title") }
  ];

  return (
    <section className="bg-gray-200 py-16 border border-gray-600 px-4">
      <div className="container mx-auto text-center">
        <h3 className="text-[#292B5B] text-2xl text-center underline-offset-8 underline decoration-[#FF0000] font-semibold mb-6">
          {t("heading")}
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
