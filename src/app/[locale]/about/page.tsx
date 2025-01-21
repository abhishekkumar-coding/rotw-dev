import React from "react";
import Image from "next/image";
import FullScreenBackground from "../components/FullScreenBackground";
import AboutSection from "../components/AboutSection";
import { useTranslations } from "next-intl";

const AboutPage: React.FC = () => {
    const t = useTranslations("about")

    const aboutData =
    {
        id: 1,
        heading1: t("heading1"),
        para: t("sectionPara"),
        images: [
            { id: 1, src: "/about/img1.png" },
            { id: 2, src: "/about/img5.png" },
            { id: 3, src: "/about/img3.png" },
            { id: 4, src: "/about/img2.png" },
            { id: 5, src: "/about/img4.png" },
        ],
    }

    return (
        <div className="w-full">
            <FullScreenBackground imgsrc="/about/about1.png" alt="About Img" h1={t("heading")} text={t("description")} />

            <AboutSection
                heading1={aboutData.heading1}
                para={aboutData.para}
                images={aboutData.images} />
            <div>
                <div className="w-full max-w-6xl mx-auto my-10">
                    {/* Heading */}
                    <h1 className="text-center text-xl md:text-4xl font-extrabold text-[#292B5B] mb-6">
                        {t("stories")} <span className="text-[#FF0000]">{t("satisfied")}</span> {t("customers")}
                    </h1>

                    {/* Content Section */}
                    <div className="flex flex-col my-14 md:flex-row items-center md:items-start justify-between w-full space-y-6 md:space-y-4">
                        <div className="w-full flex flex-row md:flex-col items-center jus md:w-1/2">
                            <div className="relative h-48 md:h-auto">
                                <Image
                                    src="/about/img-6.png"
                                    alt="Customer Story"
                                    layout="responsive"
                                    width={1}
                                    height={1}
                                    priority
                                    className="rounded-md"
                                />
                            </div>
                            <div className="relative h-48 md:h-auto">
                                <Image
                                    src="/about/img-7.png"
                                    alt="Customer Story"
                                    layout="responsive"
                                    width={1}
                                    height={1}
                                    priority
                                    className="rounded-md"
                                />
                            </div></div>

                        {/* Text Section */}
                        <div className="w-full md:px-14 md:w-2/3 flex flex-col justify-between h-full text-center md:text-left space-y-7 lg:space-y-20">
                            {/* Main Text */}
                            <p className="text-base text-justify text-[#545454] font-normal md:text-xl leading-relaxed">
                                {t("para")}
                            </p>

                            {/* Author Section (Pinned to the Bottom) */}
                            <div className=" text-sm text-left md:text-base font-semibold text-[#292B5B]">
                                <h1>{t("name")}</h1>
                                <p className="text-xs md:text-sm text-[#7A7A7A]">{t("cName")}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-0 p-0 w-full">
                                <div className="relative">
                                    <Image
                                        src="/about/img-8.png"
                                        alt="Customer Story"
                                        layout="responsive"
                                        width={1}
                                        height={1}
                                        priority
                                        className="rounded-md"
                                    />
                                </div>
                                <div className="relative">
                                    <Image
                                        src="/about/img-9.png"
                                        alt="Customer Story"
                                        layout="responsive"
                                        width={1}
                                        height={1}
                                        priority
                                        className="rounded-md"
                                    />
                                </div>
                                <div className="relative">
                                    <Image
                                        src="/about/img-10.png"
                                        alt="Customer Story"
                                        layout="responsive"
                                        width={1}
                                        height={1}
                                        priority
                                        className="rounded-md"
                                    />
                                </div>
                                <div className="relative">
                                    <Image
                                        src="/about/img-11.png"
                                        alt="Customer Story"
                                        layout="responsive"
                                        width={1}
                                        height={1}
                                        priority
                                        className="rounded-md"
                                    />
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
