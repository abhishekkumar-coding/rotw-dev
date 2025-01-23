import React from "react";
// import Image from "next/image";
import FullScreenBackground from "../components/FullScreenBackground";
import { services } from "../constants/services";
import { ImageWithText } from "../components/ImageWithText";
import { useTranslations } from "next-intl";


const Services:React.FC=()=>{
    const t=useTranslations("services")
    const serviceData=services()
    return(
        <div className="w-full">
            <FullScreenBackground imgsrc="/services/services.png" alt="Services Img" h1={t("heading")} text={ t("text")} />
            <div className="">
                {serviceData.map((elem,idx)=>{
                    return(
                        elem.blueheading?(<ImageWithText key={idx} flexprop={idx%2==0?"flex":"flex-row-reverse"} blueheading={elem.blueheading} redheading={elem.redheading} text={elem.text} paraheading={elem.paraheading} framesrc={elem.frame} imgsrc={elem.img} bgcolor={elem.bgcolor} smallscreenimage={elem.smallimage}/>):
                        (<ImageWithText key={idx} flexprop={idx%2==0?"flex":"flex-row-reverse"} text={elem.text} paraheading={elem.paraheading} framesrc={elem.frame} imgsrc={elem.img} bgcolor={elem.bgcolor} smallscreenimage={elem.smallimage}/>)
                    )
                })}
            </div>
        </div>
    )
}


export default Services