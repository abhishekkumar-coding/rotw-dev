import React from "react";
import Image from "next/image";

const BentoGrid: React.FC = () => {
  const images = [
    { src: "/bento/img1.png", alt: "Image 1", colSpan: 2, rowSpan: 2 },
    { src: "/bento/img11.png", alt: "Image 2", colSpan: 1, rowSpan: 1 },
    { src: "/bento/img3.png", alt: "Image 3", colSpan: 1, rowSpan: 1 },
    { src: "/bento/img4.png", alt: "Image 4", colSpan: 1, rowSpan: 1 },
    { src: "/bento/img5.png", alt: "Image 5", colSpan: 1, rowSpan: 2 },
    { src: "/bento/img6.png", alt: "Image 6", colSpan: 1, rowSpan: 1 },
    { src: "/bento/img7.png", alt: "Image 7", colSpan: 1, rowSpan: 1 },
    { src: "/bento/img8.png", alt: "Image 8", colSpan: 1, rowSpan: 1 },
    { src: "/bento/img9.png", alt: "Image 9", colSpan: 1, rowSpan: 1 },
    { src: "/bento/img10.png", alt: "Image 10", colSpan: 1, rowSpan: 1 },
  ];

  return (
    <section className="hidden lg:block bg-gray-200 py-10">
      <div className="container mx-auto text-left mb-6">
        <h3 className="text-gray-700 text-lg">Tourists talk about Russia</h3>
        <h2 className="text-3xl font-thin text-red-500">#VisitRussia</h2>
        <p className="text-gray-500">
          Share the best of Russia on our networks
        </p>
      </div>

      <div className="grid grid-cols-6 gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative col-span-${image.colSpan} row-span-${image.rowSpan}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
