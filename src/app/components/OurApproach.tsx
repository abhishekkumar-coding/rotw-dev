import React from "react";
import Image from "next/image";

const OurApproach: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h3 className="text-[#292B5B] text-2xl text-center underline-offset-8 underline font-semibold mb-4">
        “Our Approach”
      </h3>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-0 border-2 border-gray-400 translate-x-0 translate-y-6 hidden md:block"></div>
          <div className="relative w-full h-80 md:h-[400px]">
            <Image
              src="/approach-image.png" // Replace with your image path
              alt="Our Approach"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
            Your adventure, our passion – <br /> Let&apos;s plan together
          </h2>
          <p className="text-[#878787] mb-6 tracking-widest leading-relaxed">
            We cared from the very start of our company when we helped
            around-the-world travelers to cross Siberia, and we continue to work
            with simple, yet powerful principles. We work with the very best
            suppliers, with the best hotels, with best guides, with the best
            transportation companies. We negotiate the very best rates, and we
            pass many of the savings to our customers offering a remarkable
            overall quality of service and travel experience.
          </p>
          <button className="px-3 py-3 font-semibold text-slate-500 border-2 border-slate-400 hover:bg-red-500 hover:text-white rounded-md">
            Check why go with us
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
