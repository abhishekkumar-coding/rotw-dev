import React from "react";
import FullScreenBackground from "../components/FullScreenBackground";
import { destinationsData } from "../constants/destinations"; // Import destinationsData from its defined file
import { DestinationSection } from "../components/DestinationSection";

const Destinations: React.FC = () => {
    const text =
        "Discover the magic of Russia with ROTW Travel's curated destinations. From the iconic cities of Moscow and St. Petersburg to the serene landscapes of the Golden Ring and beyond, we offer journeys to suit every traveler. Explore the history, culture, and natural beauty of this vast country. Let us guide you to unforgettable experiences in Russia's most remarkable locations!";

    return (
        <div className="w-full bg-[#F0F0F4]">
            <FullScreenBackground
                imgsrc="/destinations/destinations.png"
                alt="Destinations Img"
                h1="Destinations"
                text={text}
            />
            <div className="w-full max-w-6xl mx-auto mt-16 md:mt-0 py-6 flex flex-col items-center bg-[#F0F0F4]">
                <h1 className="text-[#292B5B] font-extrabold text-xl md:text-3xl">
                    Top <span className="text-[#FF0000]">Destinations</span> to Visit in Russia
                </h1>
            </div>
            <div className="w-full max-w-6xl mx-auto py-8 space-y-12">
                {destinationsData.map((destination, index) => (
                    <DestinationSection
                        key={destination.id}
                        index={index}
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
