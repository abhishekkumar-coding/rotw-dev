import React from "react";
import Image from "next/image";

const TravelTips: React.FC = () => {
  return (
    <section className="relative bg-white py-16">
      {/* Background Dots */}
      <div className="absolute inset-0">
        <Image
          src="/dots.png" // Replace with your background dots image
          alt="Background Dots"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        {/* Heading */}
        <div className="text-left mb-12">
          <h3 className="text-sm tracking-wide text-gray-600">Travel Tips</h3>
          <h2 className="text-3xl md:text-4xl font-thin text-red-500">
            Prepare for your trip
          </h2>
          <p className="text-sm text-gray-800 mt-2">
            Practical information for your trip to Russia
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-[#E1E1E1] border border-gray-300 rounded-md">
            <div className="w-20 h-20 mb-4">
              <Image
                src="/flight.png"
                alt="Visa"
                width={60}
                height={60}
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h4 className="text-sm underline underline-offset-4 text-black uppercase text-center mb-2">
              #How to get to Russia
            </h4>
            <p className="text-sm text-black text-left mb-4">
              &quot;The most popular way to reach Russia is by plane.
              Additionally, we’ll guide you on traveling by train or sea.&quot;
            </p>
            <a
              href="#"
              className="block uppercase text-center text-gray-950 hover:text-red-700 mt-8"
            >
              —- Read more
            </a>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white border border-gray-300 rounded-md">
            <div className="w-20 h-20 mb-4">
              <Image
                src="/visa_logo.png"
                alt="Visa"
                width={60}
                height={60}
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h4 className="text-sm underline underline-offset-4 text-black uppercase text-center mb-2">
              #Visa Information
            </h4>
            <a
              href="#"
              className="block uppercase text-center text-gray-950 hover:text-red-700 mt-8"
            >
              —- Read more
            </a>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-gray-200 border border-gray-300 rounded-md">
            <div className="w-20 h-20 mb-4">
              <Image
                src="/booking_tips.png"
                alt="Visa"
                width={60}
                height={60}
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h4 className="text-sm underline underline-offset-4 text-black uppercase text-center mb-2">
              #Booking Tips
            </h4>
            <p className="text-sm text-gray-600 text-left mb-4">
              &quot;Planning a trip to Russia? Discover what to book in advance
              with our tips to ensure you don’t miss out on the must-see
              museums.&quot;
            </p>
            <a
              href="#"
              className="blockuppercase text-center text-gray-950 hover:text-red-700 mt-8"
            >
              —- Read more
            </a>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white border border-gray-300 rounded-md">
            <div className="w-20 h-20 mb-4">
              <Image
                src="/safety_tips.png"
                alt="Visa"
                width={60}
                height={60}
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h4 className="text-sm underline underline-offset-4 text-black uppercase text-center mb-2">
              #Safety Tips
            </h4>
            <a
              href="#"
              className="block uppercase text-center text-gray-950 hover:text-red-700 mt-8"
            >
              —- Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
