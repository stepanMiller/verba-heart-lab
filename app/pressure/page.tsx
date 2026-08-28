"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

const ESC_SOURCE =
  "https://www.escardio.org/news/news-room/congress-news/2024-esc-clinical-practice-guidelines-for-the-management-of-elevated-blood-pressure-and-hypertension/";

const MIN_SYSTOLIC = 110;
const MAX_SYSTOLIC = 170;

function pressureState(systolic: number) {
  if (systolic >= 140) {
    return {
      label: "≥140 · порог гипертонии по офисному САД",
      note: "Это порог определения гипертонии по систолическому давлению; диагноз не ставят по одному измерению.",
    };
  }

  if (systolic >= 120) {
    return {
      label: "120–139 · повышенное САД",
      note: "ESC 2024 относит офисное САД 120–139 мм рт. ст. к категории elevated BP.",
    };
  }

  return {
    label: "<120 · ниже диапазона elevated САД",
    note: "Здесь показано только систолическое значение; клиническая оценка учитывает и диастолическое давление.",
  };
}

export default function PressureScene() {
  const [systolic, setSystolic] = useState(140);
  const normalized = (systolic - MIN_SYSTOLIC) / (MAX_SYSTOLIC - MIN_SYSTOLIC);
  const state = useMemo(() => pressureState(systolic), [systolic]);
  const vesselStyle = {
    "--pressure-peak-opacity": (0.16 + normalized * 0.58).toFixed(2),
    "--pressure-wave-opacity": (0.16 + normalized * 0.44).toFixed(2),
    "--pressure-wave-scale": (0.98 + normalized * 0.04).toFixed(3),
  } as CSSProperties;

  return (
    <main className="experience pressure-experience" style={vesselStyle}>
      <div className="scene-layer pressure-scene" aria-hidden="true">
        <div className="cinematic-vessel">
          <div className="vessel-frame pressure-vessel-frame">
            <img
              className="vessel-state pressure-base"
              src={sitePath("/assets/vessel-early.webp")}
              alt=""
              draggable={false}
            />
            <img
              className="vessel-state pressure-peak"
              src={sitePath("/assets/vessel-pressure-peak.webp")}
              alt=""
              draggable={false}
            />
          </div>
          <div className="pressure-live-wave" />
          <div className="vessel-light" />
          <div className="vessel-grain" />
        </div>
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="06" previous="/score2" next="/lipids" />
      </header>

      <section className="copy pressure-copy" aria-labelledby="pressure-title">
        <div className="eyebrow">Давление, которое можно не чувствовать</div>
        <h1 id="pressure-title"><span className="pressure-title-line">«Рабочее 140» —</span><br />не лучший<br />ориентир</h1>
        <p className="lead">
          Ощущение давления — ненадёжный прибор. Важно не то, чувствуете ли вы цифру, а какое давление у вас в обычной жизни и подтверждается ли оно корректными измерениями.
        </p>

        <div className="pressure-control" aria-label="Интерактивная визуализация систолического давления">
          <div className="pressure-reading">
            <strong aria-live="polite">{systolic}</strong>
            <span>мм рт. ст. · САД</span>
          </div>
          <input
            type="range"
            min={MIN_SYSTOLIC}
            max={MAX_SYSTOLIC}
            step="1"
            value={systolic}
            onChange={(event) => setSystolic(Number(event.target.value))}
            aria-label="Систолическое давление"
            aria-valuetext={`${systolic} миллиметров ртутного столба`}
          />
          <div className="pressure-range-labels"><span>110</span><span>140</span><span>170</span></div>
          <div className={`pressure-state ${systolic >= 140 ? "is-threshold" : ""}`} aria-live="polite">
            <strong>{state.label}</strong>
            <span>{state.note}</span>
          </div>
        </div>
      </section>

      <aside className="scene-caption pressure-caption">
        <span className="pulse-dot pressure-status" />
        <span>Живое САД · {systolic} мм рт. ст.</span>
        <b>Выраженность сцены меняется, ритм намеренно остаётся постоянным</b>
      </aside>

      <footer className="footline">
        <p>Сила визуального эффекта условна и не моделирует деформацию артерии количественно. Одно измерение не устанавливает диагноз.</p>
        <a href={ESC_SOURCE} target="_blank" rel="noreferrer">Источник · ESC 2024</a>
      </footer>
    </main>
  );
}
