import React from 'react'
import { useState } from "react";
const Video = () => {
    const [mediaStream, setMediaStream] = useState(null);

  const handleGetUserMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      setMediaStream(stream);
    } catch (e) {
      // Handle errors here
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={handleGetUserMedia}>Get User Media</button>
      {mediaStream && <video src={URL.createObjectURL(mediaStream)} autoPlay />}
    </div>
  );
}


export default Video