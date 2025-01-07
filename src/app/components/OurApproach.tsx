import React from "react";
import Image from "next/image";
import "../globals.css"

const OurApproach: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h3 className="text-[#292B5B] text-2xl text-center underline-offset-8 underline decoration-[#FF0000] font-semibold mb-20">
        “Our Approach”
      </h3>

      <div className="container mx-auto flex flex-col py-10 md:flex-row items-center justify-between gap-8">
        <div className="relative w-full md:w-1/2">
          <div className="bg_line absolute w-[22vw] h-[38vw] border-[4px] border-[#c9c9c9] sm:-translate-x-10 md:translate-x-0 md:-translate-y-14 hidden md:block"></div>

          <div className="relative h-80 md:h-[30vw]">
            <Image
              src="/approach-image.png" // Ensure your image is stored in the `public` folder
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
          <button className="px-3 py-3 font-semibold text-slate-500 border-2 transition-all duration-500 border-slate-400 hover:bg-[#FF0000] hover:text-white rounded-md">
            Check why go with us
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
