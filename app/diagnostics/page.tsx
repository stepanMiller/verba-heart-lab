"use client";

import { useState } from "react";
import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

const TESTS = [
  { id: "ecg", question: "Что происходит сейчас?", tool: "ЭКГ", answer: "электрическая активность в момент записи", trace: "M2 36 L18 36 L24 30 L30 47 L38 14 L46 50 L54 36 L72 36 L78 29 L84 41 L92 36 L118 36" },
  { id: "holter", question: "Что происходит в течение суток?", tool: "Холтер", answer: "ритм и ЭКГ в обычной жизни", trace: "M2 36 L15 36 L22 33 L27 43 L34 19 L41 47 L49 36 L62 36 L68 31 L73 40 L81 36 L92 36 L98 32 L103 43 L110 21 L117 36" },
  { id: "echo", question: "Как устроено и работает сердце?", tool: "ЭхоКГ", answer: "структура, клапаны и сократительная функция", trace: "M5 38 C18 9 34 9 46 31 C58 9 77 12 83 32 C90 53 65 59 45 69 C27 58 5 53 5 38" },
  { id: "abpm", question: "Как ведёт себя давление вне кабинета?", tool: "СМАД", answer: "давление в течение обычного дня и ночи", trace: "M4 50 C18 44 26 24 38 26 C52 27 54 53 68 52 C82 51 83 18 98 20 C109 22 112 39 118 33" },
  { id: "cavi", question: "Насколько жёсткие артерии?", tool: "VaSera / CAVI", answer: "дополнительная оценка артериальной жёсткости", trace: "M4 48 C22 48 24 20 42 20 S61 48 79 48 S97 20 116 20" },
] as const;

export default function DiagnosticsScene() {
  const [selectedId, setSelectedId] = useState<(typeof TESTS)[number]["id"]>("echo");
  const selected = TESTS.find((item) => item.id === selectedId)!;

  return (
    <main className="experience diagnostics-experience">
      <header className="topline"><img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" /><SceneNav current="08" previous="/vascular-age" next="/case" /></header>
      <section className="copy diagnostics-copy" aria-labelledby="diagnostics-title">
        <div className="eyebrow">Диагностика начинается с вопроса</div>
        <h1 id="diagnostics-title">Нет исследования<br />«проверить сердце<br />полностью»</h1>
        <p className="lead">Каждый метод отвечает на свой клинический вопрос. Хорошая диагностика — не максимум исследований, а нужное исследование в нужном контексте.</p>
      </section>

      <section className="diagnostic-console" aria-label="Выбор исследования по клиническому вопросу">
        <div className="diagnostic-readout">
          <div className="diagnostic-kicker">{selected.question}</div>
          <strong>{selected.tool}</strong>
          <svg viewBox="0 0 120 72" role="img" aria-label={`Условный сигнал: ${selected.tool}`}><path d={selected.trace} /></svg>
          <p>{selected.answer}</p>
        </div>
        <div className="diagnostic-tabs">
          {TESTS.map((item) => <button key={item.id} type="button" className={item.id === selectedId ? "is-active" : ""} aria-pressed={item.id === selectedId} onClick={() => setSelectedId(item.id)}><span>{item.tool}</span><b>{item.question}</b></button>)}
        </div>
      </section>

      <footer className="footline"><p>Набор исследований определяет врач по анамнезу, риску и конкретной задаче пациента.</p><span>ЭКГ · Холтер · ЭхоКГ · СМАД · CAVI</span></footer>
    </main>
  );
}
