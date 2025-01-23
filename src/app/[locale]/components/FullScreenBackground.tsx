import React from "react";
import Image from "next/image";

const FullScreenBackground: React.FC<{
  imgsrc: string;
  alt: string;
  h1: string;
  text: string;
}> = ({ imgsrc, alt, h1, text }) => {
  return (
    <section className="relative bg-white h-screen w-full py-6">
      {/* Background Image */}
      <BackgroundImage src="/about/aboutbg.png" alt="About Background" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full sm:space-y-20 md:space-y-0 mt-10 max-w-6xl mx-auto">
        {/* Left Side Image */}
        <div className="relative w-2/3 md:w-1/3  h-48 md:h-auto mb-28 md:mb-0">
          <Image
            src={imgsrc}
            alt={alt}
            layout="responsive"
            width={1} // Aspect ratio width
            height={1} // Aspect ratio height (adjust according to your image)
            priority
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col items-center md:mt-0  justify-center text-center w-full md:w-1/2 space-y-0 md:space-y-4">
          {/* Title */}
          <h1 className="text-3xl text-[#292B5B] text-center md:text-4xl underline decoration-[#FF0000] font-bold relative md:pb-2">
            {h1}
          </h1>

          <p className="text-[#545454] py-10 text-sm md:text-base">{text}</p>
        </div>
      </div>
    </section>
  );
};
const BackgroundImage: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => (
  <div className="absolute inset-0">
    <Image src={src} alt={alt} layout="fill" objectFit="cover" priority />
  </div>
);
export default FullScreenBackground;
