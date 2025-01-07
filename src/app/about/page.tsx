import React from "react";
import Image from "next/image";
import FullScreenBackground from "../components/FullScreenBackground";

let text = "At ROTW Travel, we are passionate about showcasing the best of Russia through unforgettable travel experiences. With years of expertise, we have become a trusted leader in organizing exceptional journeys that highlight the rich culture, history, and natural beauty of this fascinating country. Our commitment to quality ensures that every trip is meticulously planned, combining comfort, safety, and authenticity. From exploring iconic landmarks like the Kremlin and St. Basil's Cathedral to discovering hidden gems off the beaten path, we create itineraries that cater to your interests. Our dedicated team of travel experts is here to provide personalized service, ensuring every detail of your trip is seamless. At ROTW Travel, we don’t just organize tours—we create memories that last a lifetime. Choose us to explore Russia with confidence and experience the journey of your dreams."

const AboutPage: React.FC = () => {
    return (
        <div className="w-full">
            <FullScreenBackground imgsrc="/about/about1.png" alt="About Img" h1="About us" text={text} />

            <div className="w-full max-sm:mt-44 md:px-10 mx-auto flex flex-col items-center justify-between md:flex-row max-w-6xl mt-28 md:mt-10 bg-[#292B5B12] py-10 p ">
                <div className="w-full md:w-1/3 px-6 flex flex-col items-center space-y-5 justify-center mb-16">
                    <h1 className="text-xl text-center md:text-left mb-20 md:mb-0 text-[#292B5B] md:text-3xl font-extrabold">The perfect <span className="text-[#FF0000]">vacation</span> come true with our
                        Travel Agency</h1>
                    <div className="relative md:hidden h-64 mt-8 flex items-center justify-center">
                        {/* Main Image (Image 1) - Centered */}
                        <div className="relative w-full md:h-auto mb-20 md:mb-0 z-10">
                            <Image
                                src="/about/img1.png"
                                alt="Image 1"
                                layout="responsive"
                                width={1}
                                height={1}
                                priority
                            />
                        </div>
                        <div className="absolute max-sm:-top-[10%] -top-[26%]  w-[17vw] h-[12vw] z-0">
                            <Image
                                src="/about/img5.png"
                                alt="Image 5"
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>

                        {/* Image 3 - Positioned to the top-left */}
                        <div className="absolute max-sm:-top-[10%] -top-[20%] -right-[50%] w-[19vw] h-[14vw] rounded-md z-0">
                            <Image
                                src="/about/img3.png"
                                alt="Image 3"
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>

                        {/* Image 2 - Positioned to the top-right */}
                        <div className="absolute max-sm:bottom-14 bottom-0 -right-[50%] w-[25vw] h-[15.4vw] z-10">
                            <Image
                                src="/about/img2.png"
                                alt="Image 2"
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>

                        {/* Image 4 - Positioned at the bottom-right */}
                        <div className="absolute max-sm:bottom-16 bottom-0 -left-[40%] z-10 w-[20vw] h-[15vw]">
                            <Image
                                src="/about/img4.png"
                                alt="Image 4"
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </div>
                    <p className="text-sm md:text-base text-[#545454]">We are a team of experienced travel experts who specialize in planning and organizing unforgettable travel experiences for our clients with a wide range of travel services, including flight bookings, hotel reservations and more.</p></div>
                <div className="relative hidden h-64 mt-8 md:flex items-center justify-center">
                    {/* Main Image (Image 1) - Centered */}
                    <div className="relative md:w-4/5 lg:w-2/3 h-52 md:h-auto mb-20 md:mb-0 z-10">
                        <Image
                            src="/about/img1.png"
                            alt="Image 1"
                            layout="responsive"
                            width={1}
                            height={1}
                            priority
                        />
                    </div>
                    <div className="absolute -top-[0%] lg:-top-[11%]  w-[8vw] h-[5.5vw] z-0">
                        <Image
                            src="/about/img5.png"
                            alt="Image 5"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 3 - Positioned to the top-left */}
                    <div className="absolute -top-[0%] right-[0] lg:-top-[10%] lg:-right-[10%] w-[10vw] h-[7vw] rounded-md z-0">
                        <Image
                            src="/about/img3.png"
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 2 - Positioned to the top-right */}
                    <div className="absolute bottom-0 right-[2%] lg:right-[0%] lg:-bottom-4 w-[10vw] h-[5.4vw] z-10">
                        <Image
                            src="/about/img2.png"
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 4 - Positioned at the bottom-right */}
                    <div className="absolute bottom-0 left-[5%] lg:left-[5%] z-10 w-[9vw] h-[7vw]">
                        <Image
                            src="/about/img4.png"
                            alt="Image 4"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>
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
