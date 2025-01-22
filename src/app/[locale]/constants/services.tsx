import img1 from "/public/services/image1.png"
import img2 from "/public/services/image2.png"
import img3 from "/public/services/image3.png"
import img4 from "/public/services/image4.png"
import img5 from "/public/services/image5.png"
import img6 from "/public/services/image6.png"
import img7 from "/public/services/image7.png"
import img8 from "/public/services/image8.png"
import img9 from "/public/services/image9.png"
import img10 from "/public/services/image10.png"
import img11 from "/public/services/image11.png"
import rightframe from "/public/services/rightframe.png"
import leftframe from "/public/services/leftframe.png"
import smimg1 from "/public/services/small1.png"
import smimg2 from "/public/services/small2.png"
import smimg3 from "/public/services/small3.png"
import smimg4 from "/public/services/small4.png"
import smimg5 from "/public/services/small5.png"
import smimg6 from "/public/services/small6.png"
import smimg7 from "/public/services/small7.png"
import smimg8 from "/public/services/small8.png"
import smimg9 from "/public/services/small9.png"
import smimg10 from "/public/services/small10.png"
import smimg11 from "/public/services/small11.png"
import { useTranslations } from "next-intl"

export const services=()=>{
    const t=useTranslations("services")
    return(
        [
            {
                blueheading:t("service1.blueheading"),
                redheading:t("service1.redheading"),
                text:t("service1.text"),
                img:img1,
                frame:rightframe,
                paraheading:t("service1.paraheading"),
                bgcolor:"bg-[#F0F0F4]",
                smallimage:smimg1
            },
            {
                text:t("service2.text"),
                img:img2,
                frame:leftframe,
                paraheading:t("service1.paraheading"),
                bgcolor:"bg-[#ffffff]",
                smallimage:smimg2
            },
            {
                text:t("service3.text"),
                img:img3,
                frame:rightframe,
                paraheading:t("service3.paraheading"),
                bgcolor:"bg-[#F0F0F4]",
                smallimage:smimg3
            },
            {
                text:t("service4.text"),
                img:img4,
                frame:leftframe,
                paraheading:t("service4.paraheading"),
                bgcolor:"bg-[#ffffff]",
                smallimage:smimg4
            },   
            {
                text:t("service5.text"),
                img:img5,
                frame:rightframe,
                paraheading:t("service5.paraheading"),
                bgcolor:"bg-[#F0F0F4]",
                smallimage:smimg5
            },   
            {
                text:t("service6.text"),
                img:img6,
                frame:leftframe,
                paraheading:t("service6.paraheading"),
                bgcolor:"bg-[#ffffff]",
                smallimage:smimg6
            },   
            {
                text:t("srvice7.text"),
                img:img7,
                frame:rightframe,
                paraheading:t("service7.paraheading"),
                bgcolor:"bg-[#F0F0F4]",
                smallimage:smimg7
            },   
            {
                text:t("service8.text"),
                img:img8,
                frame:leftframe,
                paraheading:t("service8.paraheading"),
                bgcolor:"bg-[#ffffff]",
                smallimage:smimg8
            },   
            {
                text:t("service9.text"),
                img:img9,
                frame:rightframe,
                paraheading:t("service9.paraheading"),
                bgcolor:"bg-[#F0F0F4]",
                smallimage:smimg9
            },   
            {
                text:t("service10.text"),
                img:img10,
                frame:leftframe,
                paraheading:t("service10.paraheading"),
                bgcolor:"bg-[#ffffff]",
                smallimage:smimg10
            },   
            {
                text:t("service11.text"),
                img:img11,
                frame:rightframe,
                paraheading:t("service11.paraheading"),
                bgcolor:"bg-[#F0F0F4]",
                smallimage:smimg11
            },   
        ]
    )
}