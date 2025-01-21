import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BentoGrid: React.FC = () => {
  const t = useTranslations("bentoGrid")
  const images = [
    { src: "/bento/img1.png", alt: "Image 1", colSpan: "col-span-1", rowSpan: "row-span-1", top: 120 },
    { src: "/bento/img2.png", alt: "Image 2", colSpan: "col-span-1", rowSpan: "row-span-1", top: 30 },
    { src: "/bento/img3.png", alt: "Image 3", colSpan: "col-span-1", rowSpan: "row-span-1", top: -105 },
    { src: "/bento/img4.png", alt: "Image 4", colSpan: "col-span-2", rowSpan: "row-span-3", top: 10 },
    { src: "/bento/img5.png", alt: "Image 5", colSpan: "col-span-1", rowSpan: "row-span-2", top: 100 },
    { src: "/bento/img6.png", alt: "Image 6", colSpan: "col-span-1", rowSpan: "row-span-3", top: 100 },
    { src: "/bento/img7.png", alt: "Image 7", colSpan: "col-span-1", rowSpan: "row-span-2", top: 15 },
    { src: "/bento/img8.png", alt: "Image 8", colSpan: "col-span-1", rowSpan: "row-span-1", top: -30 },
    { src: "/bento/img10.png", alt: "Image 10", colSpan: "col-span-1", rowSpan: "row-span-2", top: 80 },
    { src: "/bento/img11.png", alt: "Image 11", colSpan: "col-span-1", rowSpan: "row-span-1", top: 25 },
    { src: "/bento/img12.png", alt: "Image 12", colSpan: "col-span-1", rowSpan: "row-span-1", top: 0 },
    { src: "/bento/img13.png", alt: "Image 13", colSpan: "col-span-1", rowSpan: "row-span-1", top: 40 },
  ];

  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto text-left mb-6">
        <h3 className="text-gray-700 text-lg">{t("heading")}</h3>
        <h2 className="text-3xl font-thin text-red-500">{t("hashtag")}</h2>
        <p className="text-gray-500">{t("description")}</p>
      </div>

      <div
        className="hidden md:grid  grid-cols-6 max-w-6xl mx-auto h-auto mt-28"
        style={{ gridAutoRows: "150px" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative ${image.colSpan} ${image.rowSpan}`}
            style={{
              top: `${image.top}px`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={1}
              height={1}
              className="rounded-md object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="w-full columns-3  gap-0 md:hidden mx-auto">
        {images.map((image, index) => (
          <div key={index} className="mb-4 overflow-hidden rounded-lg relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default BentoGrid;