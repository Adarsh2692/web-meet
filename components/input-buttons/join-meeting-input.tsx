"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

const JoinMeetingInput = () => {
    const [roomID, setRoomID] = useState<string>("");
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const router = useRouter();

    const baseURL = process.env.NEXT_PUBLIC_HTTP_SERVER_BASE_URL;

    const redirectToWaitingArea = async () => {
        const roomExists = await checkRoomID();

        if (roomExists) {
            router.push(`/waiting/${roomID}`);
        }
    };

    const valueChange = (e: any) => {
        setRoomID(e.target.value);

        if (e.target.value !== "") {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    };

    const checkRoomID = async () => {
        const res = await axios.get(`${baseURL}/api/check-room`, {
            params: {
                roomID,
            },
        });
        
        return res.data.isValid;
    };

    return (
        <div>
            <Input
                className="outline-none mb-4 w-[80%]"
                placeholder="Enter room ID"
                value={roomID}
                onChange={(e) => {
                    valueChange(e);
                }}
            />
            <Button
                onClick={() => redirectToWaitingArea()}
                className="bg-[#304CA6] font-semibold text-[25px] text-[#E7F8FF] rounded-full hover:bg-[#2e4386] active:bg-[#304CA6] p-7 shadow-xl"
                disabled={buttonDisabled}
            >
                Enter the room
            </Button>
        </div>
    );
};

export default JoinMeetingInput;
