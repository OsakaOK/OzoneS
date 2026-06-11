"use client";

import { useEffect, useRef, useState } from "react";
import { Penguin } from "@/components/penguin";

const MESSAGES = [
  "Hello, there. I'll walk with you.",
  "This looks nice isn't it?",
  "That is the end, it was a fun journey. Thanks for visiting.",
];

export function PenguinMascot() {
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    let stopTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;

      setProgress(max > 0 ? scrollTop / max : 0);
      setDirection(scrollTop >= lastScrollTop.current ? "right" : "left");
      lastScrollTop.current = scrollTop;

      setIsScrolling(true);
      clearTimeout(stopTimer);
      stopTimer = setTimeout(() => setIsScrolling(false), 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(stopTimer);
    };
  }, []);

  const zone = progress >= 2 / 3 ? 2 : progress >= 1 / 3 ? 1 : 0;
  const message = MESSAGES[zone];
  const bubblePosition =
    zone === 0 ? "left-0" : zone === 2 ? "right-0" : "left-1/2 -translate-x-1/2";
  const tailPosition = zone === 0 ? "left-4" : zone === 2 ? "right-4" : "left-1/2 -translate-x-1/2";

  return (
    <div
      className="penguin-mascot pointer-events-none"
      style={{ left: `calc(${progress * 100}% - ${progress * 3}rem)` }}
    >
      <div
        className={`absolute bottom-full mb-3 w-max max-w-50 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 ${bubblePosition}`}
      >
        {message}
        <div
          className={`absolute -bottom-1 size-2 rotate-45 border-b border-r border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900 ${tailPosition}`}
        />
      </div>

      <div style={{ transform: direction === "left" ? "scaleX(-1)" : undefined }}>
        <div className={`penguin-waddle${isScrolling ? " is-running" : ""}`}>
          <Penguin className="size-10 sm:size-12" />
        </div>
      </div>
    </div>
  );
}
