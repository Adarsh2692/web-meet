"use client";
import { useVideoControlState } from "@/hooks/use-video-controllers";
import { MessageSquareMore, Mic, Monitor, Video } from "lucide-react";

interface VideoControllerOptions {
    audioIcon?: boolean;
    videoIcon?: boolean;
    shareScreenIcon?: boolean;
    chatIcon?: boolean;
}

const VideoControllers = ({
    audioIcon,
    videoIcon,
    shareScreenIcon,
    chatIcon,
}: VideoControllerOptions) => {
    const { chatBox, setChatBox } = useVideoControlState();

    const iconClassName =
        "rounded-full overflow-hidden border border-solid border-[#304CA6] text-[#304CA6] hover:bg-[#304CA6] hover:bg-opacity-50 cursor-pointer p-4 m-5";
    return (
        <div className="flex">
            {audioIcon && (
                <div className={iconClassName}>
                    <Mic />
                </div>
            )}
            {videoIcon && (
                <div className={iconClassName}>
                    <Video />
                </div>
            )}
            {shareScreenIcon && (
                <div className={iconClassName}>
                    <Monitor />
                </div>
            )}
            {chatIcon && (
                <div
                    className={iconClassName}
                    onClick={() => {
                        setChatBox(!chatBox);
                    }}
                >
                    <MessageSquareMore />
                </div>
            )}
        </div>
    );
};

export default VideoControllers;
