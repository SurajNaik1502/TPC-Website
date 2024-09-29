import React, { useRef, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import './RecordingInterface.css'

const RecordingInterface: React.FC = () => {
  const VideoPreview = ({ stream }: { stream: MediaStream | null }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
      }
    }, [stream]);
    if (!stream) {
      return null;
    }
    return <video ref={videoRef} width={500} height={500} autoPlay controls />;
  };
  return (
    <>
      <div className="containerV">
        <ReactMediaRecorder
          video
          render={({ status, startRecording, stopRecording, mediaBlobUrl, previewStream}) => (
            <div className="recorded-video">
              <p>{status}</p>
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={stopRecording}>Stop Recording</button>
              <video src={mediaBlobUrl} controls autoPlay loop />
              <VideoPreview stream={previewStream} />
            </div>
          )}
        />
      </div>
      
    </>
  );
};

export default RecordingInterface;
