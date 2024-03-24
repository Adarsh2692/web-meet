import { useVideoControlState } from "@/hooks/use-video-controllers";
import { cn } from "@/lib/utils";
import { InputWithIcon } from "../ui/inputWithIcon";
import { useEffect, useState } from "react";
import { useSocket } from "@/socketSetup/SocketContext";

const ChatBox = ({ roomID }: { roomID: string }) => {
    const [message, setMessage] = useState("");
    const { chatBox, setChatBox } = useVideoControlState();
    const { socket } = useSocket();

    const [chatHistory, setChatHistory] = useState<string[]>([]);

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        socket?.emit("send-message", { roomID, message });

        setMessage("");
    };

    useEffect(() => {
        if (!socket) {
            return;
        }

        socket.on("new-message", ({ newMessage }: { newMessage: string }) => {
            setChatHistory((previousHistory) => [
                ...previousHistory,
                newMessage,
            ]);
        });

        return () => {
            socket.off("new-message")
        };
    }, [socket]);

    return (
        <div
            className={cn(
                "w-[25%] shadow-lg flex flex-col h-full p-4 transition",
                !chatBox && "hidden"
            )}
        >
            <h2>ChatBox</h2>

            <div className="chat-history">
                {chatHistory.map((chatMessage, i) => (
                    <p key={i}>{chatMessage}</p>
                ))}
            </div>
            <div className="mt-auto">
                <form onSubmit={sendMessage}>
                    <InputWithIcon
                        type="text"
                        placeholder="send a message..."
                        className="outline-none"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />
                </form>
            </div>
        </div>
    );
};

export default ChatBox;
