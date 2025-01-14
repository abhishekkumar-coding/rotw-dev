import React from "react";
import Image from "next/image";
import FullScreenBackground from "../components/FullScreenBackground";


const Gallery: React.FC = () => {

    const text = "Explore the beauty of Russia through our curated gallery, showcasing stunning destinations and unforgettable moments from our journeys. From iconic landmarks to hidden gems, these snapshots capture the essence of our travel experiences. Let these images inspire your next adventure with ROTW Travel. Start dreaming of your Russian getaway today!"
    return (
        <div className="w-full">
            <FullScreenBackground imgsrc="/gallery/gallery.png" alt="gallery Img" h1="Gallery" text={text} />

                <div className="w-full graybg mb-10 max-w-6xl mx-auto mt-20 md:mt-0">

                    {/* Content Section */}
                    <div className="flex  flex-col md:flex-row items-center md:items-center justify-center gap-6 w-full py-0">
                        <div className="w-full flex flex-row md:flex-col items-center justify-center md:w-1/2">

                            <div className="relative">
                                <Image
                                    src="/gallery/img1.png"
                                    alt="Customer Story"
                                    layout="responsive"
                                    width={1}
                                    height={1}
                                    priority
                                    className="rounded-md"
                                />
                            </div></div>
                        {/* Text Section */}
                        <div className="w-full md:my-0 my-[400px] px-14 md:px-0 sm:w-2/3 md:w-2/5 flex flex-col justify-center h-screen text-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-0 w-full">
                                <div className="relative">
                                    <Image
                                        src="/gallery/img2.png"
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
                                        src="/gallery/img3.png"
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
                                        src="/gallery/img4.png"
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
                                        src="/gallery/img5.png"
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
                                        src="/gallery/img6.png"
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
                                        src="/gallery/img7.png"
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
    )
}

export default Gallery