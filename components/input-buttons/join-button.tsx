"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSocket } from "@/socketSetup/SocketContext";

const JoinButton = ({ roomID }: { roomID: string }) => {
    const router = useRouter();
    const baseURL = process.env.NEXT_PUBLIC_HTTP_SERVER_BASE_URL;
    const { socket, setSocket, initSocket } = useSocket();

    const redirectToMeeting = () => {
        router.push(`/meeting-room/${roomID}`);
    };

    return (
        <Button
            onClick={() => redirectToMeeting()}
            className="bg-[#304CA6] text-[#E7F8FF] text-[18px] p-6 rounded-full hover:bg-[#2e4386] active:bg-[#304CA6]"
        >
            Join now
        </Button>
    );
};

export default JoinButton;
