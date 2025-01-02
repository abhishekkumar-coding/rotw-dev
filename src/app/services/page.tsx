import React from "react";
import Image from "next/image";
import FullScreenBackground from "../components/FullScreenBackground";



const Services:React.FC=()=>{
const text = "At ROTW Travel, we offer a wide range of services to ensure your journey through Russia is seamless and unforgettable. From custom itineraries and expert guides to comfortable accommodations and hassle-free transportation, we handle every detail with care. Whether you’re traveling for leisure, business, or adventure, our dedicated team is here to make your trip extraordinary. Experience the best of Russia with our personalized services!"
    return(
        <div className="w-full">
            <FullScreenBackground imgsrc="/services/services.png" alt="Services Img" h1="Services" text={text} />
        </div>
    )
}


export default Services