"use client";
import { Button } from "@/components/ui/button";
import { generateMeetingId } from "@/utils/generateMeetingID";
import { useRouter } from "next/navigation";
import axios from "axios";

const RedirectButton = () => {
    const router = useRouter();
    const baseURL = process.env.NEXT_PUBLIC_HTTP_SERVER_BASE_URL;

    const redirectToMeeting = async () => {
        let val = null;

        while (!val) {
            const newVal = generateMeetingId();
            console.log(newVal);

            const res = await axios.post(`${baseURL}/api/add-room`, {
                roomID: newVal,
            });

            if (res.data.roomCreated) {
                val = newVal;
            }
        }

        router.push(`/meeting-room/${val}`);
    };

    return (
        <Button
            onClick={() => redirectToMeeting()}
            className="bg-[#304CA6] font-semibold text-[25px] text-[#E7F8FF] rounded-full hover:bg-[#2e4386] active:bg-[#304CA6] p-7 shadow-xl"
        >
            New Meeting
        </Button>
    );
};

export default RedirectButton;
