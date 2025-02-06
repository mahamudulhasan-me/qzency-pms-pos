"use client";
import { Maximize, Minimize } from "lucide-react";
import { useEffect, useState } from "react";

const FullScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Add fullscreenchange event listener
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    // Add Enter key event listener
    const handleKeyPress = (e: KeyboardEvent): void => {
      if (e.key === "Enter" && !document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err: Error) => {
          console.error(
            `Error attempting to enable fullscreen: ${err.message}`
          );
        });
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup listeners on component unmount
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      // Exit fullscreen
      document.exitFullscreen().catch((err) => {
        console.error(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
  };

  return (
    <button
      onClick={toggleFullScreen}
      className="w-fit flex items-center gap-x-2 bg-slate-200 hover:bg-slate-300 transition-colors font-semibold px-3 py-2 rounded-md text-gray-800"
    >
      {isFullscreen ? (
        <Maximize size={20} strokeWidth={1} absoluteStrokeWidth />
      ) : (
        <Minimize size={20} strokeWidth={1} absoluteStrokeWidth />
      )}
      <span>{isFullscreen ? "Exit Fullscreen" : "Full Screen"}</span>
    </button>
  );
};

export default FullScreen;
