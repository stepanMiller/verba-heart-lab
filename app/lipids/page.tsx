"use client";

import { useState } from "react";
import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

const LIPID_SOURCE = "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/dyslipidaemias/";

const VIEWS = {
  ldl: {
    label: "LDL-C · ApoB",
    title: "атерогенные частицы",
    copy: "Ключевая часть оценки атеросклеротического риска. Целевые значения зависят от общего риска пациента.",
  },
  lpa: {
    label: "Lp(a)",
    title: "модификатор риска",
    copy: "Уровень во многом определяется генетически и может уточнять общую оценку риска.",
  },
} as const;

type LipidView = keyof typeof VIEWS;

export default function LipidsScene() {
  const [view, setView] = useState<LipidView>("ldl");
  const active = VIEWS[view];

  return (
    <main className={`experience lipids-experience lipids-${view}`}>
      <div className="scene-layer lipids-scene" aria-hidden="true">
        <img className="lipids-image" src={sitePath("/assets/slide06-lipids.webp")} alt="" draggable={false} />
        <div className="lipid-particles">
          {Array.from({ length: 14 }, (_, index) => <i key={index} />)}
        </div>
        <div className="vessel-grain" />
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="06" previous="/pressure" next="/vascular-age" />
      </header>

      <section className="copy lipids-copy" aria-labelledby="lipids-title">
        <div className="eyebrow">Холестерин — не одна общая цифра</div>
        <h1 id="lipids-title">«Общий холестерин»<br />— только начало<br />разговора</h1>
        <p className="lead">Для профилактики важен не один показатель из бланка, а липидный профиль в контексте общего сердечно-сосудистого риска.</p>
        <div className="lipid-switch" role="group" aria-label="Сравнить липидные показатели">
          {(Object.keys(VIEWS) as LipidView[]).map((id) => (
            <button key={id} type="button" className={view === id ? "is-active" : ""} aria-pressed={view === id} onClick={() => setView(id)}>{VIEWS[id].label}</button>
          ))}
        </div>
        <div className="lipid-note" aria-live="polite"><strong>{active.title}</strong><span>{active.copy}</span></div>
      </section>

      <aside className="scene-caption lipids-caption"><span className="pulse-dot lipid-status" /><span>Кармин · атерогенный поток</span><b>Частицы — условный визуальный сигнал; клинический смысл задаёт профиль риска</b></aside>
      <footer className="footline"><p>Визуализация концептуальная; размеры, цвет и концентрации частиц не являются измерением конкретного пациента.</p><a href={LIPID_SOURCE} target="_blank" rel="noreferrer">Источник · ESC/EAS 2025</a></footer>
    </main>
  );
}
