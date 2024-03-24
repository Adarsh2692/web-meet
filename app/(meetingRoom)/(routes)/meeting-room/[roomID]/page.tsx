"use client";
import { useSocket } from "@/socketSetup/SocketContext";
import ChatBox from "@/components/chat/chat-box";
import VideoContainer from "@/components/video/video-container";
import VideoControllers from "@/components/video/video-controllers";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";

interface RoomParamProps {
    params: {
        roomID: string;
    };
}

const MeetingRoom = ({ params }: RoomParamProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    let myStream: MediaStream | null;

    const { roomID } = params;

    const startCamera = async () => {
        myStream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true,
        });

        if (videoRef.current) {
            videoRef.current.srcObject = myStream;
        }
    };

    const stopCamera = async () => {
        try {
            if (!myStream) return;

            for (const track of myStream.getTracks()) {
                track.stop();
            }

            if (videoRef.current) {
                videoRef.current.srcObject = null;
                videoRef.current.pause();
            }

            myStream = null;
        } catch (error) {
            console.error("Error stopping camera:", error);
        }
    };

    useEffect(() => {
        const socket = io("ws://localhost:8000");

        socket.emit("push-to-room", { roomID });

        socket.on("new-user-joined", () => {
            console.log("New User Joined");

        });

    }, []);

    useEffect(() => {
        startCamera();

        window.addEventListener("popstate", stopCamera);

        return () => {
            window.removeEventListener("popstate", stopCamera);
        };
    }, []);

    return (
        <div className="w-[100%] h-[100%] flex">
            <div className="w-[100%] h-[100%] flex flex-col">
                <div className="flex justify-center items-center h-[85%] w-[95%] mx-auto mt-4">
                    <div className="w-full h-full border-solid border border-[#304CA6] rounded-xl mx-1 overflow-hidden">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className="w-full h-full object-fit: contain"
                        />
                    </div>
                    <div className="w-full h-full border-solid border border-[#304CA6] rounded-xl mx-1 overflow-hidden">
                        <video
                            // ref={videoRef}
                            autoPlay
                            playsInline
                            className="w-full h-full object-fit: contain"
                        />
                    </div>
                    {/* <VideoContainer /> */}
                </div>
                <div className="h-[10%] flex justify-center items-center mx-auto">
                    <VideoControllers
                        audioIcon={true}
                        videoIcon={true}
                        shareScreenIcon={true}
                        chatIcon={true}
                    />
                </div>
            </div>
            <>
                <ChatBox roomID={roomID} />
            </>
        </div>
    );
};

export default MeetingRoom;
