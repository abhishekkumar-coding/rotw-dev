import React from "react";
import Image from "next/image";
import FullScreenBackground from "../components/FullScreenBackground";



const Destinations: React.FC = () => {
    const text = "Discover the magic of Russia with ROTW Travel's curated destinations. From the iconic cities of Moscow and St. Petersburg to the serene landscapes of the Golden Ring and beyond, we offer journeys to suit every traveler. Explore the history, culture, and natural beauty of this vast country. Let us guide you to unforgettable experiences in Russia's most remarkable locations!"
    return (
        <div className="w-full bg-[#F0F0F4]">
            <FullScreenBackground imgsrc="/destinations/destinations.png" alt="Destinations Img" h1="Destinations" text={text} />
            <div className="w-full max-w-6xl mx-auto mt-16 md:mt-0 py-6 flex flex-col items-center bg-[#F0F0F4]"> <h1 className="text-[#292B5B] font-extrabold text-xl md:text-3xl">Top <span className="text-[#FF0000]">Destinations</span> to Visit in Russia</h1></div>
            <div className="w-full mx-auto flex flex-col items-center justify-between md:flex-row max-w-6xl  bg-[#F0F0F4] pb-10 md:px-20">
                <div className="w-full md:w-1/2 px-6 flex flex-col items-center md:items-start space-y-5 justify-center py-6">
                    {/* Heading for large screens */}
                    <h1 className="text-xl text-left hidden md:block md:text-left md:mb-0 text-[#292B5B] md:text-3xl font-bold underline decoration-[#FF0000]">
                    MOSCOW
                    </h1>

                    {/* Image Section */}
                    <div className="relative w-full md:hidden flex items-center justify-center">
                        {/* Main Image for small screens */}
                        <div className="relative w-4/5 h-[48vw] sm:h-[50vw]">
                            <Image
                                src="/destinations/img-d1.png"
                                alt="Image 1"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="rounded-md"
                            />
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-extrabold text-white">
                            MOSCOW
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
                    <div className="relative md:w-4/5 lg:w-2/3 h-52 md:h-auto mb-20 md:mb-0 z-10">
                        <Image
                            src="/destinations/img-d1.png"
                            alt="Image 1"
                            layout="responsive"
                            width={1}
                            height={1}
                            priority
                        />
                    </div>
                    <div className="absolute -top-[0%] lg:-top-[11%]  w-[8vw] h-[5vw] z-0">
                        <Image
                            src="/destinations/img-d1-1.png"
                            alt="Image 5"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 3 - Positioned to the top-left */}
                    <div className="absolute -top-[0%] right-[0] lg:-top-[10%] lg:-right-[10%] w-[10vw] h-[7vw] rounded-md z-0">
                        <Image
                            src="/destinations/img-d1-2.png"
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 2 - Positioned to the top-right */}
                    <div className="absolute bottom-0 right-[2%] lg:right-[0%] lg:-bottom-4 w-[10vw] h-[5.4vw] z-10">
                        <Image
                            src="/destinations/img-d1-4.png"
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 4 - Positioned at the bottom-right */}
                    <div className="absolute bottom-0 left-[5%] lg:left-[5%] z-10 w-[9vw] h-[7vw]">
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

            <div className="w-full mx-auto flex flex-col items-center justify-between md:flex-row-reverse max-w-6xl  bg-white py-4 md:px-20  mb-6 ">
                <div className="w-full md:w-1/2 px-6 flex flex-col items-center md:items-end space-y-5 justify-center py-6">
                    {/* Heading for large screens */}
                    <h1 className="text-xl text-left hidden md:block md:text-left md:mb-0 text-[#292B5B] md:text-3xl font-bold underline decoration-[#FF0000]">
                        SAINT PETERSBURG
                    </h1>

                    {/* Image Section */}
                    <div className="relative w-full md:hidden flex items-center justify-center">
                        {/* Main Image for small screens */}
                        <div className="relative w-4/5 h-[48vw] sm:h-[50vw]">
                            <Image
                                src="/destinations/img-d2.png"
                                alt="Image 1"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="rounded-md"
                            />
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-extrabold text-white">
                                SAINT PETERSBURG
                            </h1>
                        </div>
                    </div>

                    {/* Description for large screens */}
                    <p className="text-sm hidden md:block text-right md:text-base text-[#545454]">
                        St. Petersburg, founded in 1703, has a tumultuous history marked by name changes and significant events like the Communist Revolution and Nazi sieges. Once the capital of the Tsars, its Western European ambiance is evident in elegant palaces, grand cathedrals, and leafy parks. The city's rivers, canals, and picturesque bridges add to its charm. Known as the cultural capital of Russia and the "Venice of the North," St. Petersburg offers great shopping, dining, and nightlife. Don't miss the spectacular art collection at the Hermitage Museum. It's the largest city in the North, boasting 94 rivers and canals, and 342 bridges of various sizes and styles.                    </p></div>
                <div className="relative hidden h-64 mt-8 md:flex items-center justify-center">
                    {/* Main Image (Image 1) - Centered */}
                    <div className="relative md:w-4/5 lg:w-2/3 h-52 md:h-auto mb-20 md:mb-0 z-10">
                        <Image
                            src="/destinations/img-d2.png"
                            alt="Image 1"
                            layout="responsive"
                            width={1}
                            height={1}
                            priority
                        />
                    </div>
                    <div className="absolute -top-[0%] lg:-top-[11%]  w-[7vw] h-[5vw] z-0">
                        <Image
                            src="/destinations/img-d2-1.png"
                            alt="Image 5"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 3 - Positioned to the top-left */}
                    <div className="absolute -top-[0%] left-[0] lg:-top-[2%] lg:left-[0%] w-[10vw] h-[7vw] rounded-md z-0">
                        <Image
                            src="/destinations/img-d2-2.png"
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 2 - Positioned to the top-right */}
                    <div className="absolute bottom-0 left-[2%] lg:left-[0%] w-[10vw] h-[5.4vw] z-10">
                        <Image
                            src="/destinations/img-d2-3.png"
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 4 - Positioned at the bottom-right */}
                    <div className="absolute bottom-0 right-[5%] lg:right-[10%] z-10 w-[10vw] h-[8vw]">
                        <Image
                            src="/destinations/img-d2-4.png"
                            alt="Image 4"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-col items-center justify-between md:flex-row max-w-6xl  bg-[#F0F0F4] py-4 md:px-20">
                <div className="w-full md:w-1/2 px-6 flex flex-col items-center md:items-start space-y-5 justify-center py-6">
                    {/* Heading for large screens */}
                    <h1 className="text-xl text-left hidden md:block md:text-left md:mb-0 text-[#292B5B] md:text-3xl font-bold underline decoration-[#FF0000]">
                        SOCHI
                    </h1>

                    {/* Image Section */}
                    <div className="relative w-full md:hidden flex items-center justify-center">
                        {/* Main Image for small screens */}
                        <div className="relative w-4/5 h-[48vw] sm:h-[50vw]">
                            <Image
                                src="/destinations/img-d3.png"
                                alt="Image 1"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="rounded-md"
                            />
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-extrabold text-white">
                            SOCHI
                            </h1>
                        </div>
                    </div>

                    {/* Description for large screens */}
                    <p className="text-sm hidden md:block text-left md:text-base text-[#545454]">
                        Lying on the Black Sea, Sochi hosted the 2014 Winter Olympics. As such, a lot of investment went into improving the city's facilities and tourist services. Russia's most famous seaside resort, it has a lovely waterfront promenade - home to some great nightclubs and restaurants. There are also some delightful parks throughout the city.. The sea is warm to swim in and Sochi has a nice climate. From here, you can visit the Russian Riviera, go hiking in Agura Valley, or head to the nearby ski resorts in the mountains - where the Olympics took place                    </p>
                </div>

                <div className="relative hidden h-64 mt-8 md:flex items-center justify-center">
                    {/* Main Image (Image 1) - Centered */}
                    <div className="relative md:w-4/5 lg:w-2/3 h-52 md:h-auto mb-20 md:mb-0 z-10">
                        <Image
                            src="/destinations/img-d3.png"
                            alt="Image 1"
                            layout="responsive"
                            width={1}
                            height={1}
                            priority
                        />
                    </div>
                    <div className="absolute -top-[0%] lg:-top-[11%]  w-[8vw] h-[6vw] z-0">
                        <Image
                            src="/destinations/img-d3-1.png"
                            alt="Image 5"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 3 - Positioned to the top-left */}
                    <div className="absolute -top-[0%] right-[0] lg:-top-[10%] lg:-right-[10%] w-[10vw] h-[7vw] rounded-md z-0">
                        <Image
                            src="/destinations/img-d3-2.png"
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 2 - Positioned to the top-right */}
                    <div className="absolute bottom-0 right-[2%] lg:right-[0%] lg:-bottom-4 w-[10vw] h-[5.4vw] z-10">
                        <Image
                            src="/destinations/img-d3-3.png"
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 4 - Positioned at the bottom-right */}
                    <div className="absolute bottom-0 left-[5%] lg:left-[5%] z-10 w-[9vw] h-[7vw]">
                        <Image
                            src="/destinations/img-d3-4.png"
                            alt="Image 4"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-col items-center justify-between md:flex-row-reverse max-w-6xl  bg-white py-4 md:px-20  mb-6 ">
                <div className="w-full md:w-1/2 px-6 flex flex-col items-center md:items-end space-y-5 justify-center py-6">
                    {/* Heading for large screens */}
                    <h1 className="text-xl text-left hidden md:block md:text-left md:mb-0 text-[#292B5B] md:text-3xl font-bold underline decoration-[#FF0000]">
                        SIBERIA
                    </h1>

                    {/* Image Section */}
                    <div className="relative w-full md:hidden flex items-center justify-center">
                        {/* Main Image for small screens */}
                        <div className="relative w-4/5 h-[48vw] sm:h-[50vw]">
                            <Image
                                src="/destinations/img-d4.png"
                                alt="Image 1"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="rounded-md"
                            />
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-extrabold text-white">
                                SIBERIA
                            </h1>
                        </div>
                    </div>

                    {/* Description for large screens */}
                    <p className="text-sm hidden md:block text-right md:text-base text-[#545454]">
                        Siberia, a vast and wild region of Russia, is renowned for its stunning natural landscapes, including endless forests, towering mountains, and the crystal-clear Lake Baikal, the world&rsquo;s deepest freshwater lake. It offers a unique blend of adventure and tranquility, with opportunities for trekking, wildlife exploration, and unforgettable journeys on the Trans-Siberian Railway. Siberia&rsquo;s vibrant cities, like Novosibirsk and Irkutsk, showcase a rich cultural heritage amidst modern development. Whether exploring in summer or experiencing its magical snow-covered winters, Siberia promises a truly unforgettable adventure.                                  </p></div>                <div className="relative hidden h-64 mt-8 md:flex items-center justify-center">
                    {/* Main Image (Image 1) - Centered */}
                    <div className="relative md:w-4/5 lg:w-2/3 h-52 md:h-auto mb-20 md:mb-0 z-10">
                        <Image
                            src="/destinations/img-d4.png"
                            alt="Image 1"
                            layout="responsive"
                            width={1}
                            height={1}
                            priority
                        />
                    </div>
                    <div className="absolute -top-[0%] lg:-top-[11%]  w-[7vw] h-[5vw] z-0">
                        <Image
                            src="/destinations/img-d4-1.png"
                            alt="Image 5"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 3 - Positioned to the top-left */}
                    <div className="absolute -top-[0%] left-[0] lg:-top-[2%] lg:left-[0%] w-[10vw] h-[7vw] rounded-md z-0">
                        <Image
                            src="/destinations/img-d4-2.png"
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 2 - Positioned to the top-right */}
                    <div className="absolute bottom-0 left-[2%] lg:left-[0%] w-[10vw] h-[5.4vw] z-10">
                        <Image
                            src="/destinations/img-d4-3.png"
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 4 - Positioned at the bottom-right */}
                    <div className="absolute bottom-0 right-[5%] lg:right-[10%] z-10 w-[10vw] h-[8vw]">
                        <Image
                            src="/destinations/img-d4-4.png"
                            alt="Image 4"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-col items-center justify-between md:flex-row max-w-6xl  bg-[#F0F0F4] py-4 md:px-20">
                <div className="w-full md:w-1/2 px-6 flex flex-col items-center md:items-start space-y-5 justify-center py-6">
                    {/* Heading for large screens */}
                    <h1 className="text-xl text-left hidden md:block md:text-left md:mb-0 text-[#292B5B] md:text-3xl font-bold underline decoration-[#FF0000]">
                        VLADIVOSTOK
                    </h1>

                    {/* Image Section */}
                    <div className="relative w-full md:hidden flex items-center justify-center">
                        {/* Main Image for small screens */}
                        <div className="relative w-4/5 h-[48vw] sm:h-[50vw]">
                            <Image
                                src="/destinations/img-d5.png"
                                alt="Image 1"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="rounded-md"
                            />
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-extrabold text-white">
                                VLADIVOSTOK
                            </h1>
                        </div>
                    </div>

                    {/* Description for large screens */}
                    <p className="text-sm hidden md:block text-left md:text-base text-[#545454]">
                        Vladivostok, Russia's vibrant Pacific port city, is a captivating blend of stunning coastal beauty and rich cultural heritage. Known for its dramatic hills, picturesque harbors, and iconic Golden Bridge, it offers breathtaking views and a dynamic urban vibe. As the terminus of the legendary Trans-Siberian Railway, Vladivostok connects travelers to the heart of Russia and beyond. With its bustling markets, historic sites, and lively seafood cuisine, this city is a gateway to unforgettable adventures in the Russian Far East.</p>                </div>

                <div className="relative hidden h-64 mt-8 md:flex items-center justify-center">
                    {/* Main Image (Image 1) - Centered */}
                    <div className="relative md:w-4/5 lg:w-2/3 h-52 md:h-auto mb-20 md:mb-0 z-10">
                        <Image
                            src="/destinations/img-d5.png"
                            alt="Image 1"
                            layout="responsive"
                            width={1}
                            height={1}
                            priority
                        />
                    </div>
                    <div className="absolute -top-[0%] lg:-top-[11%]  w-[8vw] h-[5.5vw] z-0">
                        <Image
                            src="/destinations/img-d5-1.png"
                            alt="Image 5"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 3 - Positioned to the top-left */}
                    <div className="absolute -top-[0%] right-[0] lg:-top-[10%] lg:-right-[10%] w-[10vw] h-[7vw] rounded-md z-0">
                        <Image
                            src="/destinations/img-d5-2.png"
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 2 - Positioned to the top-right */}
                    <div className="absolute bottom-0 right-[2%] lg:right-[0%] lg:-bottom-4 w-[10vw] h-[5.4vw] z-10">
                        <Image
                            src="/destinations/img-d5-3.png"
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 4 - Positioned at the bottom-right */}
                    <div className="absolute bottom-0 left-[5%] lg:left-[5%] z-10 w-[9vw] h-[7vw]">
                        <Image
                            src="/destinations/img-d5-4.png"
                            alt="Image 4"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-col items-center justify-between md:flex-row-reverse max-w-6xl  bg-white py-4 md:px-20  mb-6 ">
                <div className="w-full md:w-1/2 px-6 flex flex-col items-center md:items-end space-y-5 justify-center py-6">
                    {/* Heading for large screens */}
                    <h1 className="text-xl text-left hidden md:block md:text-left md:mb-0 text-[#292B5B] md:text-3xl font-bold underline decoration-[#FF0000]">
                        KALININGARD
                    </h1>

                    {/* Image Section */}
                    <div className="relative w-full md:hidden flex items-center justify-center">
                        {/* Main Image for small screens */}
                        <div className="relative w-4/5 h-[48vw] sm:h-[50vw]">
                            <Image
                                src="/destinations/img-d6.png"
                                alt="Image 1"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="rounded-md"
                            />
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-extrabold text-white">
                                KALININGARD
                            </h1>
                        </div>
                    </div>

                    {/* Description for large screens */}
                    <p className="text-sm hidden md:block text-right md:text-base text-[#545454]">
                        Kaliningrad, a unique Russian exclave nestled between Poland and Lithuania on the Baltic Sea, boasts a fascinating mix of history and culture. Once part of Prussia, it retains a blend of German and Russian influences, evident in its medieval forts, Gothic cathedrals, and amber museums. The city is famed for the Kaliningrad Cathedral and the nearby Curonian Spit, a UNESCO World Heritage Site known for its stunning dunes. With its rich heritage and coastal charm, Kaliningrad offers visitors a distinctive and memorable travel experience.</p></div>
                <div className="relative hidden h-64 mt-8 md:flex items-center justify-center">
                    {/* Main Image (Image 1) - Centered */}
                    <div className="relative md:w-4/5 lg:w-2/3 h-52 md:h-auto mb-20 md:mb-0 z-10">
                        <Image
                            src="/destinations/img-d6.png"
                            alt="Image 1"
                            layout="responsive"
                            width={1}
                            height={1}
                            priority
                        />
                    </div>
                    <div className="absolute -top-[0%] lg:-top-[11%]  w-[7vw] h-[5vw] z-0">
                        <Image
                            src="/destinations/img-d6-1.png"
                            alt="Image 5"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 3 - Positioned to the top-left */}
                    <div className="absolute -top-[0%] left-[0] lg:-top-[2%] lg:left-[0%] w-[10vw] h-[7vw] rounded-md z-0">
                        <Image
                            src="/destinations/img-d6-2.png"
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 2 - Positioned to the top-right */}
                    <div className="absolute bottom-0 left-[2%] lg:left-[0%] w-[10vw] h-[5.4vw] z-10">
                        <Image
                            src="/destinations/img-d6-3.png"
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 4 - Positioned at the bottom-right */}
                    <div className="absolute bottom-0 right-[5%] lg:right-[10%] z-10 w-[10vw] h-[8vw]">
                        <Image
                            src="/destinations/img-d6-4.png"
                            alt="Image 4"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-col items-center justify-between md:flex-row max-w-6xl  bg-[#F0F0F4] py-4 md:px-20">
                <div className="w-full md:w-1/2 px-6 flex flex-col items-center md:items-start space-y-5 justify-center py-6">
                    {/* Heading for large screens */}
                    <h1 className="text-xl text-left hidden md:block md:text-left md:mb-0 text-[#292B5B] md:text-3xl font-bold underline decoration-[#FF0000]">
                        KAZAN
                    </h1>

                    {/* Image Section */}
                    <div className="relative w-full md:hidden flex items-center justify-center">
                        {/* Main Image for small screens */}
                        <div className="relative w-4/5 h-[48vw] sm:h-[50vw]">
                            <Image
                                src="/destinations/img-d7.png"
                                alt="Image 1"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="rounded-md"
                            />
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-extrabold text-white">
                                KAZAN
                            </h1>
                        </div>
                    </div>

                    {/* Description for large screens */}
                    <p className="text-sm hidden md:block text-left md:text-base text-[#545454]">
                        Kazan, the capital of Russia&rsquo;s Republic of Tatarstan, is a city where European and Asian cultures beautifully converge. Known for its stunning architecture, it features landmarks like the iconic Kazan Kremlin, a UNESCO World Heritage Site, and the magnificent Qol Sharif Mosque. The city boasts a rich history of coexistence between Russian and Tatar cultures, making it a vibrant hub of diverse traditions, cuisine, and arts. Situated along the Volga River, Kazan offers a unique blend of ancient heritage and modern urban charm, making it a must-visit destination for travelers seeking a multicultural experience.</p></div>
                <div className="relative hidden h-64 mt-8 md:flex items-center justify-center">
                    {/* Main Image (Image 1) - Centered */}
                    <div className="relative md:w-4/5 lg:w-2/3 h-52 md:h-auto mb-20 md:mb-0 z-10">
                        <Image
                            src="/destinations/img-d7.png"
                            alt="Image 1"
                            layout="responsive"
                            width={1}
                            height={1}
                            priority
                        />
                    </div>
                    <div className="absolute -top-[0%] lg:-top-[11%]  w-[8vw] h-[5.5vw] z-0">
                        <Image
                            src="/destinations/img-d7-1.png"
                            alt="Image 5"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 3 - Positioned to the top-left */}
                    <div className="absolute -top-[0%] right-[0] lg:-top-[10%] lg:-right-[10%] w-[10vw] h-[7vw] rounded-md z-0">
                        <Image
                            src="/destinations/img-d7-2.png"
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 2 - Positioned to the top-right */}
                    <div className="absolute bottom-0 right-[2%] lg:right-[0%] lg:-bottom-4 w-[10vw] h-[5.4vw] z-10">
                        <Image
                            src="/destinations/img-d7-3.png"
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 4 - Positioned at the bottom-right */}
                    <div className="absolute bottom-0 left-[5%] lg:left-[5%] z-10 w-[9vw] h-[7vw]">
                        <Image
                            src="/destinations/img-d7-4.png"
                            alt="Image 4"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-col items-center justify-between md:flex-row-reverse max-w-6xl  bg-white py-4 md:px-20  mb-6 ">
                <div className="w-full md:w-1/2 px-6 flex flex-col items-center md:items-end space-y-5 justify-center py-6">
                    {/* Heading for large screens */}
                    <h1 className="text-xl text-left hidden md:block md:text-left md:mb-0 text-[#292B5B] md:text-3xl font-bold underline decoration-[#FF0000]">
                        GOLDEN RING
                    </h1>

                    {/* Image Section */}
                    <div className="relative w-full md:hidden flex items-center justify-center">
                        {/* Main Image for small screens */}
                        <div className="relative w-4/5 h-[48vw] sm:h-[50vw]">
                            <Image
                                src="/destinations/img-d8.png"
                                alt="Image 1"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="rounded-md"
                            />
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-extrabold text-white">
                                GOLDEN RING
                            </h1>
                        </div>
                    </div>

                    {/* Description for large screens */}
                    <p className="text-sm hidden md:block text-right md:text-base text-[#545454]">
                        The Golden Ring of Russia is a picturesque collection of ancient towns that showcase the country&rsquo;s rich history, architecture, and culture. Located northeast of Moscow, this route features stunning onion-domed churches, historic monasteries, and charming wooden houses. Iconic towns like Suzdal, Vladimir, and Yaroslavl offer a glimpse into medieval Russia&rsquo;s heritage and traditions. Surrounded by idyllic landscapes, the Golden Ring is a journey through the heart of Russia&rsquo;s cultural and spiritual legacy, perfect for history enthusiasts and nature lovers alike.</p></div>                <div className="relative hidden h-64 mt-8 md:flex items-center justify-center">
                    {/* Main Image (Image 1) - Centered */}
                    <div className="relative md:w-4/5 lg:w-2/3 h-52 md:h-auto mb-20 md:mb-0 z-10">
                        <Image
                            src="/destinations/img-d8.png"
                            alt="Image 1"
                            layout="responsive"
                            width={1}
                            height={1}
                            priority
                        />
                    </div>
                    <div className="absolute -top-[0%] lg:-top-[11%]  w-[7vw] h-[5vw] z-0">
                        <Image
                            src="/destinations/img-d8-1.png"
                            alt="Image 5"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 3 - Positioned to the top-left */}
                    <div className="absolute -top-[0%] left-[0] lg:-top-[2%] lg:left-[0%] w-[10vw] h-[7vw] rounded-md z-0">
                        <Image
                            src="/destinations/img-d8-2.png"
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 2 - Positioned to the top-right */}
                    <div className="absolute bottom-0 left-[2%] lg:left-[0%] w-[10vw] h-[5.4vw] z-10">
                        <Image
                            src="/destinations/img-d8-3.png"
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 4 - Positioned at the bottom-right */}
                    <div className="absolute bottom-0 right-[5%] lg:right-[10%] z-10 w-[10vw] h-[8vw]">
                        <Image
                            src="/destinations/img-d8-4.png"
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