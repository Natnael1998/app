import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Room = () => {
  const { roomId } = useParams();
  const myMetting = async (element) => {
    const appId = 1383486895;

    const serverSecret = "ecbac440f6f3b432ab846af043260fbb";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,

      Date.now().toString(),
      "clear this and enter your name"
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
    <div>
      <div ref={myMetting} />
    </div>
  );
};

export default Room;
