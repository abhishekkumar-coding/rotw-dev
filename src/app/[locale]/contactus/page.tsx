import React from "react";
import FullScreenBackground from "../components/FullScreenBackground";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ContactUs: React.FC = () => {
    const t = useTranslations("contact")
    return (
        <div className="w-full">
            <FullScreenBackground imgsrc="/contact/contactus.png" alt="contactus Img"
                h1={t("heading")}
                text={t("description")} />

            <div className="w-full md:max-w-6xl bg-[#292B5B12] mb-10 mx-auto flex flex-col-reverse items-center justify-center py-7 md:flex-row gap-6">
                {/* Contact Details Section */}
                <div className="flex flex-col md:flex-row items-center justify-center md:items-stretch space-y-6 md:space-y-0 md:space-x-6 w-full md:w-1/2">
                    {/* Email Contact */}
                    <div className="flex shadow bg-white md:h-72 w-full md:w-auto rounded-lg flex-col items-start justify-center p-6 md:space-y-10">
                        <Image
                            src="/contact/@.png"
                            alt="Email Icon"
                            width={50}
                            height={50}
                            className="rounded-md"
                        />
                        <div className="text-start mt-4 md:space-y-3">
                            <p className="text-sm md:text-base font-semibold text-gray-700">
                            {t("emailPrompt")}
                            </p>
                            <p className="text-sm md:text-base text-[#FF0000]">inbound@rotwtravels.com</p>
                        </div>
                    </div>

                    {/* Phone Contact */}
                    <div className="flex bg-[#E1E1E1] shadow md:h-72 w-full md:w-auto rounded-lg flex-col items-start justify-center p-6 md:space-y-10">
                        <Image
                            src="/contact/phone.png"
                            alt="Phone Icon"
                            width={50}
                            height={50}
                            className="rounded-md"
                        />
                        <div className="text-start mt-4 md:space-y-3">
                            <p className="text-sm md:text-base font-semibold text-gray-700">
                            {t("phonePrompt")}
                            </p>
                            <p className="text-sm md:text-base text-[#FF0000]">+7-9309454007</p>
                        </div>
                    </div>
                </div>


                {/* Form Section */}
                <form
                    action=""
                    className="relative md:bottom-28 flex flex-col space-y-3 w-[60%] md:w-[40%] bg-white p-2  shadow-lg"
                >
                    <h1 className="text-sm md:text-base tracking-widest">{t("requestAssistance")}</h1>
                    {/* Contact Person */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="name"
                            className="text-sm md:text-base font-medium text-gray-700 mb-2"
                        >
                            {t("heading")} <span className="text-[#FF0000]">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder={t("namePlaceholder")}
                            required
                            className="p-2 border-black border rounded-md text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-sm md:text-base font-medium text-gray-700 mb-2"
                        >
                            {t("email")}<span className="text-[#FF0000]">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder={t("emailplaceholder")}
                            required
                            className="p-2 border-black border rounded-md text-sm"
                        />
                    </div>

                    {/* Start Date */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="startDate"
                            className="text-sm md:text-base font-medium text-gray-700 mb-2"
                        >
                            {t("startDate")}<span className="text-[#FF0000]">*</span>
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            required
                            className="p-2 border-black text-gray-700 border rounded-md text-sm"
                        />
                    </div>

                    {/* Special Request */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="specialRequest"
                            className="text-sm md:text-base font-medium text-gray-700 mb-2"
                        >
                            {t("specialRequest")}<span className="text-[#FF0000]">*</span>
                        </label>
                        <textarea
                            id="specialRequest"
                            rows={4}
                            placeholder={t("request")}
                            className="p-2 border-black border rounded-md text-sm"
                        ></textarea>
                    </div>
                    <div className="flex items-center space-x-3">
                        {/* Checkbox */}
                        <input
                            type="checkbox"
                            className="w-5  h-5 border-gray-300 rounded "
                        />

                        {/* Text */}
                        <p className="text-sm md:text-base text-gray-700">
                            {t("byclick")} <span className="font-semibold">{t("sendRequest")}</span>, {t("iAgry")}
                            <span className="border-b border-[#FF0000] cursor-pointer hover:text-[#FF0000]">
                                {t("privacyPolicy")}
                            </span>.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="text-black border border-black py-2 md:py-3 px-4 md:px-6 rounded-md transition-all duration-150 text-sm md:text-base font-medium hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        {t("submitRequest")}
                    </button>
                </form>
            </div>

        </div>
    )
}

export default ContactUs