"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const totalScroll = documentHeight - windowHeight;
      const currentProgress = (scrollTop / totalScroll) * 100;

      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-gray-200">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
