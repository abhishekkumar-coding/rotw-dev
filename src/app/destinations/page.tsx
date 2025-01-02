import React from "react";
import Image from "next/image";
import FullScreenBackground from "../components/FullScreenBackground";



const Destinations: React.FC = () => {
    const h1 = "MOSCOW"
    const text = "Discover the magic of Russia with ROTW Travel’s curated destinations. From the iconic cities of Moscow and St. Petersburg to the serene landscapes of the Golden Ring and beyond, we offer journeys to suit every traveler. Explore the history, culture, and natural beauty of this vast country. Let us guide you to unforgettable experiences in Russia’s most remarkable locations!"
    return (
        <div className="w-full">
            <FullScreenBackground imgsrc="/destinations/destinations.png" alt="Destinations Img" h1="Destinations" text={text} />
            <div className="w-full mx-auto flex flex-col items-center justify-between md:flex-row max-w-6xl  bg-[#292B5B12] py-10 md:px-20 mt-10 md:mt-0 mb-6 ">
                <div className="w-full md:w-1/2 px-6 flex flex-col items-center space-y-5 justify-center py-6">
                    {/* Heading for large screens */}
                    <h1 className="text-xl text-center md:text-left md:mb-0 text-[#292B5B] md:text-3xl font-extrabold underline decoration-[#FF0000]">
                        {h1}
                    </h1>

                    {/* Image Section */}
                    <div className="relative w-full md:hidden mt-8 flex items-center justify-center">
                        {/* Main Image for small screens */}
                        <div className="relative w-full h-60 sm:h-72 z-10">
                            <Image
                                src="/destinations/img-d1.png"
                                alt="Image 1"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="rounded-md"
                            />
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-extrabold text-white">
                                {h1}
                            </h1>
                        </div>
                    </div>

                    {/* Description for large screens */}
                    <p className="text-sm hidden md:block text-left md:text-base text-[#545454]">
                        Moscow, the majestic capital of Russia, exudes grandeur and epic scale. Highlights include the Kremlin, Red Square, and the awe-inspiring St. Basil's Cathedral. Monuments, museums, and statues commemorate its Soviet past, with the Bunker-42 Cold War museum standing out. With over 600 churches, orthodoxy is prevalent, symbolized by gold-plated domes. Moscow's renowned performing arts scene offers unforgettable ballet, circus, and opera performances. The city also boasts fantastic restaurants, trendy bars, and vibrant nightlife. It's the largest and wealthiest city in Russia, home to 12 million people, 446 museums, and 837 Orthodox churches and chapels.
                    </p>
                </div>

                <div className="relative hidden h-64 mt-8 md:flex items-center justify-center">
                    {/* Main Image (Image 1) - Centered */}
                    <div className="relative md:w-1/2 h-52 md:h-auto mb-20 md:mb-0 z-10">
                        <Image
                            src="/destinations/img-d1.png"
                            alt="Image 1"
                            layout="responsive"
                            width={1}
                            height={1}
                            priority
                        />
                    </div>
                    <div className="absolute -top-[24%]  w-[11vw] h-[8vw] z-0">
                        <Image
                            src="/destinations/img-d1-1.png"
                            alt="Image 5"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 3 - Positioned to the top-left */}
                    <div className="absolute -top-[2%] right-[5%] w-[12vw] h-[9vw] rounded-md z-0">
                        <Image
                            src="/destinations/img-d1-2.png"
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 2 - Positioned to the top-right */}
                    <div className="absolute bottom-0 right-[10%] w-[10vw] h-[5.4vw] z-10">
                        <Image
                            src="/destinations/img-d1-4.png"
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 4 - Positioned at the bottom-right */}
                    <div className="absolute bottom-0 left-[10%] z-10 w-[10vw] h-[8vw]">
                        <Image
                            src="/destinations/img-d1-3.png"
                            alt="Image 4"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Destinations