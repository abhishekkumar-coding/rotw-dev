import React from "react";
import Image from "next/image";
import FullScreenBackground from "../components/FullScreenBackground";
import AboutSection from "../components/AboutSection";
import {aboutData} from "../constants/about"

let text = "At ROTW Travel, we are passionate about showcasing the best of Russia through unforgettable travel experiences. With years of expertise, we have become a trusted leader in organizing exceptional journeys that highlight the rich culture, history, and natural beauty of this fascinating country. Our commitment to quality ensures that every trip is meticulously planned, combining comfort, safety, and authenticity. From exploring iconic landmarks like the Kremlin and St. Basil's Cathedral to discovering hidden gems off the beaten path, we create itineraries that cater to your interests. Our dedicated team of travel experts is here to provide personalized service, ensuring every detail of your trip is seamless. At ROTW Travel, we don’t just organize tours—we create memories that last a lifetime. Choose us to explore Russia with confidence and experience the journey of your dreams."

const AboutPage: React.FC = () => {
    return (
        <div className="w-full">
            <FullScreenBackground imgsrc="/about/about1.png" alt="About Img" h1="About us" text={text} />

            <AboutSection 
        heading1={aboutData.heading1}
        para={aboutData.para}
        images={aboutData.images}/>
            <div>
                <div className="w-full max-w-6xl mx-auto my-10">
                    {/* Heading */}
                    <h1 className="text-center text-xl md:text-4xl font-extrabold text-[#292B5B] mb-6">
                        Stories from <span className="text-[#FF0000]">Satisfied</span> Customers
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
                                My experience with ROTW Travel was amazing! The trip was perfectly
                                organized, with a personalized itinerary that included both famous
                                landmarks and hidden gems. The knowledgeable guides and excellent
                                attention to detail made my Russian vacation unforgettable.
                            </p>

                            {/* Author Section (Pinned to the Bottom) */}
                            <div className=" text-sm text-left md:text-base font-semibold text-[#292B5B]">
                                <h1>Kushal Kumar</h1>
                                <p className="text-xs md:text-sm text-[#7A7A7A]">INDIA</p>
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
