import React from "react";
import { X } from "lucide-react";

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div className="relative bg-black rounded-lg overflow-hidden max-w-3xl w-full">
        <button
          onClick={() => console.log("hi")}
          className="absolute top-3 right-3 text-white hover:text-gray-300 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="aspect-video">
          <video className="w-full h-full" src={videoUrl} controls autoPlay />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
