
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  X,
  Play,
  Pause,
  Share,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

type ImageViewerProps = {
  images: string[];
  initialIndex: number;
  onClose: () => void;
};

const ImageViewer = ({ images, initialIndex, onClose }: ImageViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Auto slideshow
  useEffect(() => {
      let interval: number | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, images.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = images[currentIndex];
    link.download = `image-${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Share (with fallback)
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this image",
          url: images[currentIndex],
        });
      } catch {
        console.log("Share cancelled");
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(images[currentIndex]);
      toast("Image URL copied to clipboard!")
    } else {
      toast("Sharing not supported on this browser")
    }
  };

  // Zoom
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 1));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[99999] flex flex-col items-center justify-center">
      <Toaster/>
      {/* Top bar actions */}
      <div className="absolute top-0 w-full flex justify-end items-center p-4 z-[99999]">
        <div className="flex gap-4 text-white">
          <button onClick={handleShare} className="p-2 cursor-pointer hover:bg-opacity-20 rounded-full">
            <Share size={20} />
          </button>
          <button onClick={handleDownload} className="p-2 cursor-pointer hover:bg-opacity-20 rounded-full">
            <Download size={20} />
          </button>
          <button onClick={handleZoomIn} className="p-2 cursor-pointer hover:bg-opacity-20 rounded-full">
            <ZoomIn size={20} />
          </button>
          <button onClick={handleZoomOut} className="p-2 cursor-pointer hover:bg-opacity-20 rounded-full">
            <ZoomOut size={20} />
          </button>
          <button
            onClick={() => setIsPlaying((prev) => !prev)}
            className="p-2 cursor-pointer hover:bg-opacity-20 rounded-full"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button onClick={onClose} className="p-2 cursor-pointer hover:bg-opacity-20 rounded-full">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main image */}
      <div className="relative flex-grow flex items-center justify-center w-full">
        <button
          onClick={handlePrev}
          className="absolute left-4 text-white text-5xl z-10 p-2 cursor-pointer hover:bg-opacity-20 rounded-full"
        >
          <ChevronLeft size={48} />
        </button>

        <img
          src={images[currentIndex]}
          alt=""
          className="max-w-[90%] max-h-[80vh] object-contain transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
        />

        <button
          onClick={handleNext}
          className="absolute right-4 text-white text-5xl z-10 p-2 cursor-pointer hover:bg-opacity-20 rounded-full"
        >
          <ChevronRight size={48} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 p-4 overflow-x-auto justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`w-20 h-20 object-cover cursor-pointer ${
              index === currentIndex
                ? "border-2 border-green-400 scale-110"
                : "border-2 border-transparent opacity-70 hover:opacity-100"
            } transition`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
