"use client";

import { useState } from "react";
import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

type Trajectory = "elastic" | "stiff";

const TRAJECTORIES = {
  elastic: {
    label: "Траектория A",
    value: "эластичность сохранена",
    duration: "1.9s",
  },
  stiff: {
    label: "Траектория B",
    value: "волна распространяется быстрее",
    duration: ".92s",
  },
} as const;

export default function VascularAgeScene() {
  const [trajectory, setTrajectory] = useState<Trajectory>("elastic");
  const active = TRAJECTORIES[trajectory];

  return (
    <main
      className={`experience vascular-experience is-${trajectory}`}
      style={{ "--wave-duration": active.duration } as React.CSSProperties}
    >
      <div className="scene-layer vascular-scene" aria-hidden="true">
        <div className="cinematic-vessel">
          <div className="vessel-frame vascular-vessel-frame">
            <img
              className="vessel-state vascular-elastic-state"
              src={sitePath("/assets/vessel-early.webp")}
              alt=""
              draggable={false}
            />
            <img
              className="vessel-state vascular-stiff-state"
              src={sitePath("/assets/vessel-stiff.webp")}
              alt=""
              draggable={false}
            />
          </div>
          <div className="vascular-wave" />
          <div className="vessel-light" />
          <div className="vessel-grain" />
        </div>
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="07" previous="/lipids" next="/diagnostics" />
      </header>

      <section className="copy vascular-copy" aria-labelledby="vascular-title">
        <div className="eyebrow">Раннее сосудистое старение</div>
        <h1 id="vascular-title">Паспортный возраст<br />и состояние артерий<br />— не одно и то же</h1>
        <p className="lead">
          У людей одного возраста артериальная стенка может сохранять разную эластичность. VaSera с индексом CAVI даёт дополнительную оценку артериальной жёсткости.
        </p>

        <div className="trajectory-block">
          <div className="trajectory-kicker">Один паспортный возраст · две условные траектории</div>
          <div className="trajectory-switch" role="group" aria-label="Сравнить две условные сосудистые траектории">
            {(Object.keys(TRAJECTORIES) as Trajectory[]).map((id) => {
              const item = TRAJECTORIES[id];
              const selected = trajectory === id;
              return (
                <button
                  key={id}
                  type="button"
                  className={`trajectory-option ${selected ? "is-active" : ""}`}
                  aria-pressed={selected}
                  onClick={() => setTrajectory(id)}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <aside className="scene-caption vascular-caption">
        <span className="pulse-dot vascular-status" />
        <span>Пульсовая волна · {active.label}</span>
        <b>{active.value}</b>
      </aside>

      <footer className="footline">
        <p>CAVI — дополнительная часть клинической картины, а не «истинный биологический возраст» и не самостоятельный прогноз.</p>
        <span>VaSera / CAVI · VERBA</span>
      </footer>
    </main>
  );
}
