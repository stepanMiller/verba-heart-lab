"use client";

import { useEffect, useRef } from "react";
import { sitePath } from "./site-path";

type SceneNavProps = {
  current: string;
  previous?: string;
  next?: string;
};

export function SceneNav({ current, previous, next }: SceneNavProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // The mobile homepage is a continuous vertical deck. Route navigation and
    // horizontal swipe handling belong only to the desktop, one-scene view.
    const nav = navRef.current;
    const isMobileDeck = Boolean(nav?.closest(".mobile-deck"));
    const isHiddenDesktopCopy = Boolean(
      nav?.closest(".desktop-opening") && window.matchMedia("(max-width: 640px)").matches,
    );
    if (isMobileDeck || isHiddenDesktopCopy) return;

    const navigate = (href?: string) => {
      if (href) window.location.assign(sitePath(href));
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") navigate(previous);
      if (event.key === "ArrowRight") navigate(next);
    };

    let touchStartX = 0;
    let touchStartY = 0;
    let interactiveStart = false;

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      const target = event.target as HTMLElement | null;
      interactiveStart = Boolean(target?.closest("button, input, a"));
      touchStartX = touch?.clientX ?? 0;
      touchStartY = touch?.clientY ?? 0;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (interactiveStart) return;
      const touch = event.changedTouches[0];
      if (!touch) return;
      const dx = touch.clientX - touchStartX;
      const dy = touch.clientY - touchStartY;
      if (Math.abs(dx) < 64 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
      navigate(dx < 0 ? next : previous);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, previous]);

  return (
    <nav ref={navRef} className="slide-index scene-navigation" aria-label="Навигация по слайдам">
      {previous ? (
        <a href={sitePath(previous)} aria-label="Предыдущая сцена">←</a>
      ) : (
        <span className="scene-nav-spacer" aria-hidden="true">←</span>
      )}
      <span>{current}</span>
      <i />
      <span>14</span>
      {next ? (
        <a href={sitePath(next)} aria-label="Следующая сцена">→</a>
      ) : (
        <span className="scene-nav-spacer" aria-hidden="true">→</span>
      )}
    </nav>
  );
}
