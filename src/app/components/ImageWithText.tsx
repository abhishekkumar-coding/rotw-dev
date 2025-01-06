import clsx from "clsx";
import Image from "next/image";

export const ImageWithText:React.FC<{blueheading?:string; redheading?:string; paraheading:string; text:string; imgsrc:any; framesrc:any; bgcolor:string;flexprop:string}>=({blueheading,redheading,paraheading,text,imgsrc,framesrc,bgcolor,flexprop})=>{
    return(
        <div className={clsx(bgcolor)}>
            <div className={`flex flex-col items-center max-w-6xl mx-auto py-16 text-black`}>
                {/* main heading */}
            {blueheading&&(
                <h1 className="text-[#292B5B] font-[800] text-4xl">{blueheading} <span className="text-[#ff0000]">{redheading}</span></h1>
            )}
            {/* image and text */}
            <div className={clsx("flex items-center w-full justify-between mt-20",flexprop)}>
                {/* text */}
                <div className="w-[60%]">
                    <h1 className="text-[#292B5B] font-[700] text-2xl underline decoration-[#ff0000] underline-offset-4">
                        {paraheading}
                    </h1>
                    <p className="text-[#545454] font-[400] tracking-widest mt-16">
                        {text}
                    </p>
                </div>
                {/* image */}
                <div className={clsx("relative",flexprop=="flex"?"mr-10":"ml-10")}>
                    <Image src={imgsrc} alt="" height={300} width={300} layout="intrinsic" className="z-20 relative"/>
                    <Image src={framesrc} alt="" height={350} layout="intrinsic" className={clsx("absolute -top-7 z-0",flexprop=="flex-row-reverse"?"-left-10":"-right-10")}/>
                </div>
            </div>
            </div>
        </div>
    )
}