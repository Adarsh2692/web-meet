"use client";
import { useState } from "react";
import { SocketContext } from "./SocketContext";
import { Socket, io } from "socket.io-client";

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socket, setSocket] = useState<Socket | null>(null);

    const initSocket = (roomID: string) => {
        if (!socket) {
            let newSocket: Socket | null = io("ws://localhost:8000");

            newSocket.on("connect", () => {
                console.log("WebSocket connected");
            });

            newSocket.emit("push-to-room", { roomID });

            newSocket.on("disconnect", () => {
                console.log("WebSocket disconnected");
                newSocket = null;
            });

            setSocket(newSocket);
        }
    };

    return (
        <SocketContext.Provider value={{ socket, setSocket, initSocket }}>
            {children}
        </SocketContext.Provider>
    );
};
