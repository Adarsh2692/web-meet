"use client";
import JoinMeetingInput from "@/components/input-buttons/join-meeting-input";
import RedirectButton from "@/components/input-buttons/redirect-button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const handleNavigation = () => {
            setKey((prevKey) => prevKey + 1);
        };

        window.addEventListener("popstate", handleNavigation);

        return () => {
            window.removeEventListener("popstate", handleNavigation);
        };
    }, [key]);

    return (
        <div className="h-full" key={key}>
            <div className="relative pt-4 pb-4 w-full flex justify-center border-b shadow-md">
                <Image
                    height="100"
                    width="225"
                    src={"/logo.png"}
                    alt="Logo"
                    priority
                    className="w-auto h-auto"
                />
            </div>
            <div className="h-[700px] flex items-center">
                <div className="flex-1">
                    <div className="ml-40">
                        <p className="text-[#304CA6] font-semibold text-[30px] pb-4">
                            Initiate a meeting
                        </p>
                        <RedirectButton />
                    </div>
                    <div className="ml-40 mt-10">
                        <p className="text-[#304CA6] font-semibold text-[30px] pb-4">
                            Join an existing meeting
                        </p>
                        <JoinMeetingInput />
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <Image
                        height="100"
                        width="400"
                        src="/homePageBG.png"
                        alt="Home Page Background Image"
                        className="w-auto h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
