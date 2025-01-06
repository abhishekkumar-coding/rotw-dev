import clsx from "clsx";
import Image from "next/image";

export const ImageWithText:React.FC<{blueheading?:string; redheading?:string; paraheading:string; text:string; imgsrc:any; framesrc:any; bgcolor:string;flexprop:string;smallscreenimage:any}>=({blueheading,redheading,paraheading,text,imgsrc,framesrc,bgcolor,flexprop,smallscreenimage})=>{
    return(
        <div className={clsx(bgcolor)}>
            <div className={`flex flex-col items-center max-w-6xl mx-auto sm:py-16 py-5 text-black`}>
                {/* main heading */}
            {blueheading&&(
                <h1 className="text-[#292B5B] font-[800] md:text-4xl sm:text-left text-3xl text-center">{blueheading} <span className="text-[#ff0000]">{redheading}</span></h1>
            )}
            {/* image and text */}
            <div className={clsx("flex items-center w-full sm:justify-between justify-center sm:mt-20 mt-5 lg:px-0 sm:px-10 px-0",flexprop)}>
                {/* text */}
                <div className="lg:max-w-[60%] md:max-w-[50%] sm:max-w-[45%] sm:block hidden">
                    <h1 className="text-[#292B5B] font-[700] md:text-2xl text-xl underline decoration-[#ff0000] underline-offset-4">
                        {paraheading}
                    </h1>
                    <p className="text-[#545454] font-[400] tracking-widest mt-16">
                        {text}
                    </p>
                </div>
                {/* image */}
                <div className={clsx("relative",flexprop=="flex"?"lg:mr-10 mr-0":"lg:ml-10 ml-0")}>
                    <Image src={imgsrc} alt="" height={300} width={300} layout="intrinsic" className="z-20 relative sm:block hidden"/>
                    <Image src={framesrc} alt="" height={350} layout="intrinsic" className={clsx("absolute -top-7 z-0 sm:block hidden",flexprop=="flex-row-reverse"?"-left-10":"-right-10")}/>
                    <Image src={smallscreenimage} alt="" height={50} width={400} layout="intrinsic" className="sm:hidden block"/>
                </div>
            </div>
            </div>
        </div>
    )
}