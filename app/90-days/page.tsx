"use client";

import { useState } from "react";
import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

const STEPS = [
  { day: "00", title: "Исходный риск", detail: "собрать базовую картину" },
  { day: "07", title: "1–3 фактора", detail: "выделить главное" },
  { day: "21", title: "Уточнить", detail: "только по клинической задаче" },
  { day: "45", title: "Действовать", detail: "реалистично и последовательно" },
  { day: "90", title: "Динамика", detail: "вернуться к цифрам" },
] as const;

export default function NinetyDaysScene() {
  const [step, setStep] = useState(0);
  const current = STEPS[step];

  return (
    <main className="experience days-experience">
      <header className="topline"><img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" /><SceneNav current="13" previous="/choice" next="/final" /></header>
      <section className="copy days-copy" aria-labelledby="days-title">
        <div className="eyebrow">Следующие 90 дней</div>
        <h1 id="days-title">Не «пройти всё».<br />Понять главное.</h1>
        <p className="lead">Профилактика — не фотография одного обследования. Это управление риском во времени: выбрать главное, действовать и затем проверить динамику.</p>
      </section>

      <section className="days-stage" aria-label="Пять шагов профилактики">
        <div className="days-number"><span>день</span><strong>{current.day}</strong><b>{current.title}</b><em>{current.detail}</em></div>
        <div className="days-rail">
          {STEPS.map((item, index) => <button key={item.day} type="button" className={index <= step ? "is-active" : ""} aria-pressed={index === step} onClick={() => setStep(index)}><i /><span>{item.day}</span><b>{item.title}</b></button>)}
          <div className="days-progress" style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }} />
        </div>
      </section>
      <footer className="footline"><p>Срок повторной оценки и набор действий определяются вместе с врачом и зависят от исходной ситуации.</p><span>Риск → приоритет → действие → динамика</span></footer>
    </main>
  );
}
