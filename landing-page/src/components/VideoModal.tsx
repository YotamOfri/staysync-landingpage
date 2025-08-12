import React from "react";
import { X } from "lucide-react";

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-black/80 rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl ring-1 ring-white/20 p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-3 right-3 text-white hover:text-gray-300 cursor-pointer z-50"
          type="button"
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
