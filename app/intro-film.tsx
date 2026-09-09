"use client";

import { useEffect, useRef, useState } from "react";

const FILM_URL = "https://verba-heart.website.yandexcloud.net/media/VERBA-Heart-Review-v02.mp4";
const SESSION_KEY = "verba-heart-intro-seen-v1";

export default function IntroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forced = params.get("intro") === "1";
    const alreadySeen = window.sessionStorage.getItem(SESSION_KEY) === "1";

    if (forced || !alreadySeen) setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const video = videoRef.current;
    if (!video) return;

    const attempt = video.play();
    if (attempt) attempt.catch(() => undefined);
  }, [visible]);

  function closeIntro() {
    window.sessionStorage.setItem(SESSION_KEY, "1");
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 620);
  }

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = soundOn;
    setSoundOn(!soundOn);
    if (video.paused) video.play().catch(() => undefined);
  }

  if (!visible) return null;

  return (
    <div className={`intro-film-overlay ${leaving ? "is-leaving" : ""}`} role="dialog" aria-label="Вступительный ролик VERBA">
      <video
        ref={videoRef}
        className="intro-film-video"
        src={FILM_URL}
        autoPlay
        muted={!soundOn}
        playsInline
        preload="auto"
        onEnded={closeIntro}
        onError={closeIntro}
      />

      <div className="intro-film-actions">
        <button className="intro-film-sound" type="button" onClick={toggleSound}>
          {soundOn ? "Выключить звук" : "Включить звук"}
        </button>
        <button className="intro-film-skip" type="button" onClick={closeIntro}>Пропустить</button>
      </div>

      <div className="intro-film-progress" aria-hidden="true" />
    </div>
  );
}
