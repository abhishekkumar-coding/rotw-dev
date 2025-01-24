import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface DestinationProps {
    id: string;
    heading1: string;
    para: string;
    images: { id: number; src: string }[];
    index: number; // Add index as prop to determine even or odd
}

export const DestinationSection: React.FC<DestinationProps> = ({
    heading1,
    para,
    images,
    index, // Get the index from props
}) => {
    return (
        <div
            className={clsx("w-full flex flex-col items-center justify-between max-w-6xl mx-auto md:px-20 md:pb-10 md:py-10", {
                "md:flex-row bg-[#F0F0F4]": index % 2 === 0, // Apply flex-row for even index
                "md:flex-row-reverse bg-white": index % 2 !== 0, // Apply flex-row-reverse for odd index
            })}
        >
            {/* Text and Heading Section */}
            <div className={clsx("w-full md:w-1/2 px-6 flex flex-col items-center space-y-5 justify-center py-6", { "md:items-start": index % 2 === 0, "md:items-end": index % 2 !== 0 })}>
                {/* Heading for large screens */}
                <h1 className="text-xl hidden md:block md:text-left md:mb-0 text-[#292B5B] md:text-3xl font-bold underline decoration-[#FF0000]">
                    {heading1}
                </h1>

                {/* Main Image and Heading for small screens */}
                <div className="relative w-full md:hidden flex items-center justify-center">
                    <div className="relative w-4/5 h-[48vw] sm:h-[50vw]">
                        <Image
                            src={images[0]?.src || ""}
                            alt={`Main image for ${heading1}`}
                            layout="fill"
                            objectFit="cover"
                            priority
                            className="rounded-md"
                        />
                        <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-extrabold text-white">
                            {heading1}
                        </h1>
                    </div>
                </div>

                {/* Description for large screens */}
                <p className={clsx("text-sm hidden md:block text-left md:text-base text-[#545454]", { "text-left": index % 2 === 0, "text-right": index % 2 !== 0 })}>
                    {para}
                </p>
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
                <div
                    className={clsx(
                        "absolute z-0",
                        {
                            "-top-[0%] lg:-top-[11%] w-[8vw] h-[5.3vw]": index % 2 === 0,
                            "-top-[0%] lg:-top-[14%] left-[45%] w-[8vw] h-[5.5vw]": index % 2 !== 0
                        }
                    )}
                >
                    <Image
                        src={images[1].src}
                        alt="Image 5"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                {/* Image 3 - Positioned to the top-left */}
                <div
                    className={clsx(
                        "absolute w-[10vw] h-[7vw] rounded-md z-0",
                        {
                            "-top-[0%] right-[0] lg:-top-[10%] lg:-right-[10%]": index % 2 === 0,
                            "-top-[0%] left-[0] lg:-top-[2%] lg:left-[0%]": index % 2 !== 0
                        }
                    )}
                >
                    <Image
                        src={images[2].src}
                        alt="Image 3"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                {/* Image 2 - Positioned to the top-right */}
                <div className={clsx("absolute", { "bottom-0 right-[2%] lg:right-[0%] lg:-bottom-4 w-[10vw] h-[5.4vw] z-10": index % 2 === 0, "bottom-0 left-[2%] lg:left-[0%] w-[10vw] h-[5.4vw] z-10": index % 2 !== 0 })}>
                    <Image
                        src={images[3].src}
                        alt="Image 2"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                {/* Image 4 - Positioned at the bottom-right */}
                <div className={clsx("absolute", {" bottom-0 left-[5%] lg:left-[5%] z-10 w-[9vw] h-[7vw]":index % 2 === 0, "bottom-0 right-[5%] lg:right-[10%] z-10 w-[10vw] h-[8vw]":index % 2 !== 0})}>
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
