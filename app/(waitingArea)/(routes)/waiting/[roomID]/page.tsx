import VideoContainer from "@/components/video/video-container";
import VideoControllers from "@/components/video/video-controllers";
import JoinButton from "@/components/input-buttons/join-button";

interface RoomParamProps {
    params: {
        roomID: string;
    };
}

const WaitingRoom = ({ params }: RoomParamProps) => {
    const { roomID } = params;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-[600px] h-[400px] flex flex-col justify-center items-center">
                <VideoContainer />
                <VideoControllers
                    audioIcon={true}
                    videoIcon={true}
                    shareScreenIcon={false}
                    chatIcon={false}
                />
            </div>
            <div className="mt-4">
                <JoinButton roomID={roomID} />
            </div>
        </div>
    );
};

export default WaitingRoom;
