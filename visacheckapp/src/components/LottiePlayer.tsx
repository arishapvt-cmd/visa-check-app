"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottiePlayerProps {
  animationData: object;
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function LottiePlayer({
  animationData,
  width = 40,
  height = 40,
  loop = true,
  autoplay = true,
  className,
  style,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Destroy existing animation if any
    if (animRef.current) {
      animRef.current.destroy();
    }

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData,
    });

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [animationData, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        overflow: "hidden",
        ...style,
      }}
    />
  );
}
