"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades + slides its children up the first time they scroll into view.
 * Falls back to immediately visible when IntersectionObserver is missing or
 * the user prefers reduced motion (handled in CSS via the .reveal rules).
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${visible ? " is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
