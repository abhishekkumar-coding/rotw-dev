import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <BackgroundImage src="/hero_bg.png" alt="Hero Background" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 sm:px-12 max-w-4xl mx-auto flex flex-col items-start justify-center h-full">
        <HeroHeading />
        <HeroDescription />
        <HeroStatistics />
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
    <h1 className="text-5xl sm:text-5xl md:text-6xl text-[#FF0000] font-bold uppercase leading-tight text-center md:text-left">
      Endless <br />
      Discovery <br /> of
    </h1>
    <div className="absolute translate-x-28 translate-y-16 w-32 h-32 mt-4 md:mt-0 md: md:w-60 md:h-60">
      <HeroImage src="/russia.png" alt="Russia" />
    </div>
  </div>
);

const HeroImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Image src={src} alt={alt} layout="fill" objectFit="contain" priority />
);

const HeroDescription: React.FC = () => (
  <p className="mt-4 text-sm sm:text-lg md:text-xl font-light">
    &quot;Welcome to Russia, the world&apos;s largest nation,
    <br /> celebrated for its breathtaking nature, rich cultural <br />
    diversity, storied history, and scientific <br />
    achievements.&quot;
  </p>
);

const HeroStatistics: React.FC = () => (
  <div className="mt-6 bg-[#D2D2D278] p-2 rounded-md">
    <p className="text-sm sm:text-base">
      <span className="font-semibold text-[#002147]">
        Cultural and Archaeological Heritage Sites for Tourism
      </span>
      <br />
      <span className=" text-2xl md:text-3xl font-bold text-">
        155.5 thousand
      </span>
    </p>
  </div>
);

export default Hero;
