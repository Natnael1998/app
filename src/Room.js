import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { AiOutlineLeft } from "react-icons/ai";

const Room = () => {
  const navigate = useNavigate();
 
  const { roomId } = useParams();
  const myMetting = async (element) => {
    const appId = 1939000826;
  
    const serverSecret = "79580348bff88f5ebef9d43ef485d77b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,

      Date.now().toString(),
      "Name"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
   <>
    <div  >
    <button
    className="btnn"
      onClick={(e) => {
        navigate("/result")
      }}
    >
   <AiOutlineLeft/>
      <span>Back</span>
    </button>
  </div>
   
    <div>
   
      <div ref={myMetting} />
    </div>
   </>
  );
};

export default Room;
