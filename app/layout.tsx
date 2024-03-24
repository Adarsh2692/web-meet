import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SocketProvider } from "@/socketSetup/SocketProvider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Online Meet",
    description: "Connect with friends",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <SocketProvider>
                <body className={`${poppins.className} bg-[#E7F8FF]`}>
                    {children}
                </body>
            </SocketProvider>
        </html>
    );
}
