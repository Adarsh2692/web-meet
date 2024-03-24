import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";

interface SocketContextProps {
    socket: Socket | null;
    setSocket: (socket: Socket | null) => void;
    initSocket: (roomID: string) => void;
}

export const SocketContext = createContext<SocketContextProps>({
    socket: null,
    setSocket: () => {},
    initSocket: () => {},
});

export const useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error("useSocket must be used within a SocketProvider");
    }

    return context;
};
