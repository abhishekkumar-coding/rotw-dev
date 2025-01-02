// BackgroundImage.tsx (or .jsx)
import React from "react";
import Image from "next/image";

const BackgroundImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="absolute inset-0">
    <Image src={src} alt={alt} layout="fill" objectFit="cover" priority />
  </div>
);

export default BackgroundImage;
