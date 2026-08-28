"use client";

import { useState } from "react";
import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

const SCORE2_SOURCE = "https://www.escardio.org/guidelines/practice-tools/cvd-prevention-toolbox/score-risk-charts/";

const INPUTS = [
  { id: "age", label: "Возраст + пол", note: "Базовый контекст риска" },
  { id: "smoke", label: "Курение", note: "Модифицируемый фактор" },
  { id: "pressure", label: "Систолическое АД", note: "Важно корректное измерение" },
  { id: "lipids", label: "Холестерин", note: "Общий + HDL-C" },
  { id: "region", label: "Регион", note: "Модель калибруется по региону риска" },
] as const;

export default function Score2Scene() {
  const [active, setActive] = useState<(typeof INPUTS)[number]["id"]>("pressure");
  const selected = INPUTS.find((item) => item.id === active)!;

  return (
    <main className="experience score-experience">
      <div className="score-stage" aria-label="Факторы, которые объединяет SCORE2">
        <div className="score-halo score-halo-one" />
        <div className="score-halo score-halo-two" />
        <div className="score-core">
          <span>SCORE2</span>
          <strong>10</strong>
          <b>лет</b>
          <em>{selected.note}</em>
        </div>
        <div className="score-inputs">
          {INPUTS.map((item, index) => (
            <button key={item.id} type="button" className={`score-input score-input-${index + 1} ${active === item.id ? "is-active" : ""}`} aria-pressed={active === item.id} onClick={() => setActive(item.id)}>
              <i />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="05" previous="/risk" next="/pressure" />
      </header>

      <section className="copy score-copy" aria-labelledby="score-title">
        <div className="eyebrow">Один показатель не рассказывает всю историю</div>
        <h1 id="score-title">Не одна цифра.<br />Общий риск.</h1>
        <p className="lead">SCORE2 объединяет несколько факторов и оценивает 10-летний риск первого сердечно-сосудистого события. Это инструмент для разговора с врачом, а не предсказатель будущего.</p>
        <p className="micro-instruction">Нажмите на фактор справа</p>
      </section>

      <footer className="footline">
        <p>Оценка риска дополняется семейным анамнезом, сопутствующими заболеваниями и клиническим контекстом.</p>
        <a href={SCORE2_SOURCE} target="_blank" rel="noreferrer">Источник · ESC SCORE2</a>
      </footer>
    </main>
  );
}
