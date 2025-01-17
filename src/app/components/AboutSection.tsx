// components/TravelAgency.tsx
import React from 'react';
import Image from 'next/image';

type ImageData = {
    id: number;
    src: string;
};

type TravelAgencyProps = {
    heading1: string;
    para: string;
    images: ImageData[];
};

const AboutSection: React.FC<TravelAgencyProps> = ({ heading1, para, images }) => {
    return (
        <div className="w-full max-sm:mt-44 bg-[#F0F0F4] mx-auto flex flex-col items-center justify-evenly md:flex-row max-w-6xl mt-28 md:mt-10 graybg py-10 p">
            <div className="w-full md:w-1/3  px-6 flex flex-col items-center space-y-5 justify-center mb-16">
                <h1 className="text-xl text-center md:text-left mb-20 md:mb-0 text-[#292B5B] md:text-3xl font-extrabold">
                    {heading1}
                </h1>
                <div className="relative md:hidden h-64 mt-8 flex items-center justify-center">
                    <div className="relative w-full md:h-auto mb-20 md:mb-0 z-10">
                        <Image
                            src={images[0].src}
                            alt="Image 1"
                            layout="responsive"
                            width={1}
                            height={1}
                            priority
                        />
                    </div>
                    <div className="absolute max-sm:-top-[10%] -top-[26%]  w-[17vw] h-[12vw] z-0">
                        <Image
                            src={images[1].src}
                            alt="Image 5"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 3 - Positioned to the top-left */}
                    <div className="absolute max-sm:-top-[10%] -top-[20%] -right-[50%] w-[19vw] h-[14vw] rounded-md z-0">
                        <Image
                            src={images[2].src}
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 2 - Positioned to the top-right */}
                    <div className="absolute max-sm:bottom-14 bottom-0 -right-[50%] w-[25vw] h-[15.4vw] z-10">
                        <Image
                            src={images[3].src}
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Image 4 - Positioned at the bottom-right */}
                    <div className="absolute max-sm:bottom-16 bottom-0 -left-[40%] z-10 w-[20vw] h-[15vw]">
                        <Image
                            src={images[4].src}
                            alt="Image 4"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
                <p className="text-sm md:text-base text-[#545454]">{para}</p>
            </div>
            <div className="relative hidden h-64 mt-8 md:flex items-center justify-center">
                {/* Main Image (Image 1) - Centered */}
                <div className="relative md:w-4/5 lg:w-2/3 h-52 md:h-auto mb-20 md:mb-0 z-10">
                    <Image
                        src={images[0].src}
                        alt="Image 1"
                        layout="responsive"
                        width={1}
                        height={1}
                        priority
                    />
                </div>
                <div className="absolute -top-[0%] lg:-top-[11%]  w-[8vw] h-[5.5vw] z-0">
                    <Image
                        src={images[1].src}
                        alt="Image 5"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                {/* Image 3 - Positioned to the top-left */}
                <div className="absolute -top-[0%] right-[0] lg:-top-[10%] lg:-right-[10%] w-[10vw] h-[7vw] rounded-md z-0">
                    <Image
                        src={images[2].src}
                        alt="Image 3"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                {/* Image 2 - Positioned to the top-right */}
                <div className="absolute bottom-0 right-[2%] lg:right-[0%] lg:-bottom-4 w-[10vw] h-[5.4vw] z-10">
                    <Image
                        src={images[3].src}
                        alt="Image 2"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                {/* Image 4 - Positioned at the bottom-right */}
                <div className="absolute bottom-0 left-[5%] lg:left-[5%] z-10 w-[9vw] h-[7vw]">
                    <Image
                        src={images[4].src}
                        alt="Image 4"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
