import React from "react";
import Image from "next/image";
import "../globals.css"
import MobLanguageDropdown from "./MobLanguageDropdown";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const t = useTranslations("heroSection")
  return (
    <section className="relative h-screen overflow-hidden w-full py-6">
      {/* Background Image */}
      <BackgroundImage src="/hero_bg.png" alt="Hero Background" />

      {/* Overlay */}
      <MobLanguageDropdown />

      {/* Content */}
      <div className="relative z-10 text-white px-6 sm:px-12 max-w-6xl mx-auto flex flex-col items-start justify-evenly h-full">
        <HeroHeading t={t}/>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center">
          <HeroDescription t={t} />
          <HeroStatistics t={t}/>
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

const HeroHeading: React.FC<{ t: any }> = ({ t }) => (
  <div className="flex flex-col items-center md:items-start mb-16">
    <h1 className="HeroHeading text-5xl md:text-7xl font-extrabold text-[#FF0000] uppercase leading-tight tracking-wider text-center md:text-left">
    {t("endless")} <br />
    {t("discovery")} <br /> {t("of")}
    </h1>

    <div className="absolute translate-x-28 translate-y-20 md:translate-x-80 md:translate-y-16 w-32 h-32 mt-4 md:mt-0 md: md:w-72 md:h-72">
      <HeroImage src="/russia.png" alt="Russia" />
    </div>
  </div>
);

const HeroImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Image src={src} alt={alt} layout="fill" objectFit="contain" priority />
);

const HeroDescription: React.FC<{ t: any }> = ({ t }) => (
  <p className="mt-4 tracking-wider text-left text-sm sm:text-lg md:text-xl font-light">
    &quot;{t("welcome")}&apos;{t("largestNation")},
    <br /> {t("celebrated")} <br />
    {t("diversity")} <br />
    {t("achievements")}.&quot;
  </p>
);

const HeroStatistics: React.FC<{ t: any }> = ({ t }) => (
  <div className="mt-6 bg-[#D2D2D278] w-fit p-2 rounded-md h-auto">
    <p className="text-sm sm:text-[30px] leading-tight">
      <span className=" text-[#002147]">
        {t("heritageSites")}
      </span>
      <br />
      <span className="bg-gradient-to-r from-[#334DA2] to-[#A41721] font-bold bg-clip-text text-transparent md:text-[40px] text-[30px] mt-4 block">
        {t("siteCount")}
      </span>
    </p>
  </div>


);

export default Hero;
