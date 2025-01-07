import React from "react";
import Image from "next/image";
import MobLanguageDropdown from "./MobLanguageDropdown";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden w-full py-6">
      {/* Background Image */}
      <BackgroundImage src="/hero_bg.png" alt="Hero Background" />

      {/* Overlay */}
      <MobLanguageDropdown />

      {/* Content */}
      <div className="relative z-10 text-white px-6 sm:px-12 max-w-6xl mx-auto flex flex-col items-start justify-evenly h-full">
        <HeroHeading />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center">
          <HeroDescription />
          <HeroStatistics />
        </div>
      </div>
    </section>
  );
};

const BackgroundImage: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => (
  <div className="absolute  inset-0">
    <Image src={src} alt={alt} layout="fill" objectFit="cover" priority />
  </div>
);

const HeroHeading: React.FC = () => (
  <div className="flex flex-col items-center md:items-start mb-16">
    <h1 className="text-5xl md:text-7xl font-extrabold text-[#FF0000] uppercase leading-tight tracking-wider text-center md:text-left">
      Endless <br />
      Discovery <br /> of
    </h1>

    <div className="absolute translate-x-28 translate-y-20 md:translate-x-80 md:translate-y-16 w-32 h-32 mt-4 md:mt-0 md: md:w-72 md:h-72">
      <HeroImage src="/russia.png" alt="Russia" />
    </div>
  </div>
);

const HeroImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Image src={src} alt={alt} layout="fill" objectFit="contain" priority />
);

const HeroDescription: React.FC = () => (
  <p className="mt-4 tracking-wider text-left text-sm sm:text-lg md:text-xl font-light">
    &quot;Welcome to Russia, the world&apos;s largest nation,
    <br /> celebrated for its breathtaking nature, rich cultural <br />
    diversity, storied history, and scientific <br />
    achievements.&quot;
  </p>
);

const HeroStatistics: React.FC = () => (
  <div className="mt-6 bg-[#D2D2D278] w-fit p-2 rounded-md h-auto">
    <p className="text-sm sm:text-[30px] leading-tight">
      <span className=" text-[#002147]">
        Cultural and Archaeological Heritage Sites for Tourism
      </span>
      <br />
      <span className="bg-gradient-to-r from-[#334DA2] to-[#A41721] font-bold bg-clip-text text-transparent md:text-[40px] text-[30px] mt-4 block">
        155.5 thousand
      </span>
    </p>
  </div>


);

export default Hero;
