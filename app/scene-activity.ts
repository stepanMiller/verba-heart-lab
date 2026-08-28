"use client";

import { useEffect, useRef, useState } from "react";

export function useSceneActivity() {
  const sceneRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (!scene.closest(".mobile-deck")) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting && entry.intersectionRatio > 0.42),
      { threshold: [0, 0.42, 0.7] },
    );

    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  return { sceneRef, active };
}
