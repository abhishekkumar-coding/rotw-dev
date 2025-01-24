"use client"
import React from "react";
import FullScreenBackground from "../components/FullScreenBackground";// Import destinationsData from its defined file
import { useTranslations } from "next-intl";
import { DestinationSection } from "../components/DestinationSection";




const Destinations: React.FC = () => {
    const t = useTranslations("destinationsData")

    const destinationsData = [

        {
            id: 1,
            heading1: t("destination1.heading1"),
            para: t("destination1.para"),
            "images": [
                {
                    "id": 1,
                    "src": "/destinations/img-d1.png"
                },
                {
                    "id": 2,
                    "src": "/destinations/img-d1-1.png"
                },
                {
                    "id": 3,
                    "src": "/destinations/img-d1-2.png"
                },
                {
                    "id": 4,
                    "src": "/destinations/img-d1-4.png"
                },
                {
                    "id": 5,
                    "src": "/destinations/img-d1-3.png"
                }
            ]
        },
        {
            id: 2,
            heading1: t("destination2.heading1"),
            para: t("destination2.para"),
            "images": [
                {
                    "id": 1,
                    "src": "/destinations/img-d2.png"
                },
                {
                    "id": 1,
                    "src": "/destinations/img-d2-1.png"
                },
                {
                    "id": 1,
                    "src": "/destinations/img-d2-2.png"
                },
                {
                    "id": 1,
                    "src": "/destinations/img-d2-3.png"
                },
                {
                    "id": 1,
                    "src": "/destinations/img-d2-4.png"
                }
            ]
        },
        {
            id: 3,
            heading1: t("destination3.heading1"),
            para: t("destination3.para"),
            "images": [
                {
                    "id": 1,
                    "src": "/destinations/img-d3.png"
                },
                {
                    "id": 2,
                    "src": "/destinations/img-d3-1.png"
                },
                {
                    "id": 3,
                    "src": "/destinations/img-d3-2.png"
                },
                {
                    "id": 4,
                    "src": "/destinations/img-d3-3.png"
                },
                {
                    "id": 5,
                    "src": "/destinations/img-d3-4.png"
                }
            ]
        },
        {
            id: 4,
            heading1: t("destination4.heading1"),
            para: t("destination4.para"),
            "images": [
                {
                    "id": 1,
                    "src": "/destinations/img-d4.png"
                },
                {
                    "id": 2,
                    "src": "/destinations/img-d4-1.png"
                },
                {
                    "id": 3,
                    "src": "/destinations/img-d4-2.png"
                },
                {
                    "id": 4,
                    "src": "/destinations/img-d4-3.png"
                },
                {
                    "id": 5,
                    "src": "/destinations/img-d4-4.png"
                }
            ]
        },
        {
            id: 5,
            heading1: t("destination5.heading1"),
            para: t("destination5.para"),
            "images": [
                {
                    "id": 1,
                    "src": "/destinations/img-d5.png"
                },
                {
                    "id": 2,
                    "src": "/destinations/img-d5-1.png"
                },
                {
                    "id": 3,
                    "src": "/destinations/img-d5-2.png"
                },
                {
                    "id": 4,
                    "src": "/destinations/img-d5-3.png"
                },
                {
                    "id": 5,
                    "src": "/destinations/img-d5-4.png"
                }
            ]
        },
        {
            id: 6,
            heading1: t("destination6.heading1"),
            para: t("destination6.para"),
            "images": [
                {
                    "id": 1,
                    "src": "/destinations/img-d6.png"
                },
                {
                    "id": 2,
                    "src": "/destinations/img-d6-1.png"
                },
                {
                    "id": 3,
                    "src": "/destinations/img-d6-2.png"
                },
                {
                    "id": 4,
                    "src": "/destinations/img-d6-3.png"
                },
                {
                    "id": 5,
                    "src": "/destinations/img-d6-4.png"
                }
            ]
        },
        {
            id: 7,
            heading1: t("destination7.heading1"),
            para: t("destination7.para"),
            "images": [
                {
                    "id": 1,
                    "src": "/destinations/img-d7.png"
                },
                {
                    "id": 2,
                    "src": "/destinations/img-d7-1.png"
                },
                {
                    "id": 3,
                    "src": "/destinations/img-d7-2.png"
                },
                {
                    "id": 4,
                    "src": "/destinations/img-d7-3.png"
                },
                {
                    "id": 5,
                    "src": "/destinations/img-d7-4.png"
                }
            ]
        },
        {
            id: 8,
            heading1: t("destination8.heading1"),
            para: t("destination8.para"),
            "images": [
                {
                    "id": 1,
                    "src": "/destinations/img-d8.png"
                },
                {
                    "id": 2,
                    "src": "/destinations/img-d8-1.png"
                },
                {
                    "id": 3,
                    "src": "/destinations/img-d8-2.png"
                },
                {
                    "id": 4,
                    "src": "/destinations/img-d8-3.png"
                },
                {
                    "id": 5,
                    "src": "/destinations/img-d8-4.png"
                }
            ]
        }
    ]

    return (
        <div className="w-full bg-[#F0F0F4]">
            <FullScreenBackground
                imgsrc="/destinations/destinations.png"
                alt="Destinations Img"
                h1={t("heading")}
                text={t("text")}
            />
            <div className="w-full max-w-6xl mx-auto mt-16 md:mt-0 pt-5 flex flex-col items-center bg-[#F0F0F4]">
                <h1 className="text-[#292B5B] font-extrabold text-xl md:text-3xl">
                    {t("top")} <span className="text-[#FF0000]">{t("destination")}</span> {t("toVisit")}
                </h1>
            </div>
            <div className="w-full max-w-6xl mx-auto py-8 md:space-y-12">
                {destinationsData.map((destination, index) => (
                    <DestinationSection
                        key={destination.id}
                        index={index}
                        id={destination.id}
                        heading1={destination.heading1}
                        para={destination.para}
                        images={destination.images}
                    />
                ))}
            </div>
        </div>
    );
};

export default Destinations;
