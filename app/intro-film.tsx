"use client";

import { useEffect, useRef, useState } from "react";

const PRIMARY_FILM_URL = "https://verba-heart.website.yandexcloud.net/media/VERBA-Heart-Review-v05.mp4?v=20260913-2";
const FALLBACK_FILM_URL = "https://verba-heart.website.yandexcloud.net/media/VERBA-Heart-Review-v02.mp4";

export default function IntroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [filmUrl, setFilmUrl] = useState(PRIMARY_FILM_URL);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forced = params.get("intro") === "1" || params.get("video") === "on";

    if (forced) {
      setEnabled(true);
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    const attempt = video.play();
    if (attempt) attempt.catch(() => undefined);
  }, [visible, filmUrl]);

  function startIntro() {
    setFilmUrl(PRIMARY_FILM_URL);
    setLeaving(false);
    setEnabled(true);
    setVisible(true);
  }

  function closeIntro() {
    const video = videoRef.current;
    if (video) video.pause();

    setEnabled(false);
    setLeaving(true);
    window.setTimeout(() => {
      setVisible(false);
      setLeaving(false);
    }, 620);
  }

  function toggleIntro() {
    if (enabled || visible) {
      closeIntro();
      return;
    }
    startIntro();
  }

  function handleFilmError() {
    if (filmUrl !== FALLBACK_FILM_URL) {
      setFilmUrl(FALLBACK_FILM_URL);
      return;
    }
    closeIntro();
  }

  return (
    <>
      <button
        className={`intro-film-toggle ${enabled ? "is-on" : "is-off"}`}
        type="button"
        aria-pressed={enabled}
        aria-label={enabled ? "Выключить вступительное видео" : "Включить вступительное видео"}
        onClick={toggleIntro}
      >
        <span className="intro-film-toggle-dot" aria-hidden="true" />
        <span>Видео</span>
        <strong>{enabled ? "ON" : "OFF"}</strong>
      </button>

      {visible ? (
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
      ) : null}
    </>
  );
}
