"use client";

import { useEffect, useRef, useState } from "react";

const PRIMARY_FILM_URL = "https://verba-heart.website.yandexcloud.net/media/VERBA-Heart-Review-v05.mp4?v=20260913-2";
const FALLBACK_FILM_URL = "https://verba-heart.website.yandexcloud.net/media/VERBA-Heart-Review-v02.mp4";
const SESSION_KEY = "verba-heart-intro-seen-v05-2";

export default function IntroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [filmUrl, setFilmUrl] = useState(PRIMARY_FILM_URL);

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
  }, [visible, filmUrl]);

  function closeIntro() {
    window.sessionStorage.setItem(SESSION_KEY, "1");
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 620);
  }

  function handleFilmError() {
    if (filmUrl !== FALLBACK_FILM_URL) {
      setFilmUrl(FALLBACK_FILM_URL);
      return;
    }
    closeIntro();
  }

  if (!visible) return null;

  return (
    <div className={`intro-film-overlay ${leaving ? "is-leaving" : ""}`} role="dialog" aria-label="Вступительный ролик VERBA">
      <video
        ref={videoRef}
        className="intro-film-video"
        src={filmUrl}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={closeIntro}
        onError={handleFilmError}
      />

      <div className="intro-film-actions">
        <button className="intro-film-skip" type="button" onClick={closeIntro}>Пропустить</button>
      </div>

      <div className="intro-film-progress" aria-hidden="true" />
    </div>
  );
}
