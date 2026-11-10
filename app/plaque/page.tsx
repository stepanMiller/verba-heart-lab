"use client";

import { useId, useState } from "react";
import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

const STATES = [
  { id: "intact", label: "Бляшка", title: "Кровоток сохраняется", copy: "Бляшка находится в стенке артерии. Просвет остаётся открытым, и человек может ничего не чувствовать." },
  { id: "rupture", label: "Разрыв", title: "Покрышка разрывается", copy: "Кровь соприкасается с содержимым бляшки. В месте разрыва начинают скапливаться тромбоциты." },
  { id: "clot", label: "Тромб", title: "Тромб растёт в просвете", copy: "Сгусток образуется в месте разрыва. Он может резко ограничить или полностью перекрыть кровоток." },
] as const;

export default function PlaquePage() {
  const [stage, setStage] = useState<(typeof STATES)[number]>(STATES[0]);
  const titleId = useId();
  const captionId = useId();

  return (
    <main className="experience thrombus-scene" data-stage={stage.id}>
      <div className="thrombus-art" aria-hidden="true">
        <div className="thrombus-plate">
          <img className="thrombus-base" src={sitePath("/assets/vessel-mid.webp")} alt="" draggable={false} />
          <img className="thrombus-rupture" src={sitePath("/assets/thrombus-rupture.webp")} alt="" draggable={false} />
          <div className="thrombus-clot-area">
            <img className="thrombus-clot" src={sitePath("/assets/thrombus-formed.webp")} alt="" draggable={false} />
          </div>
          {stage.id === "rupture" && <span className="thrombus-pin" />}
        </div>
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="08" previous="/lipids" next="/vascular-age" />
      </header>

      <section className="thrombus-copy" aria-labelledby={titleId}>
        <div className="eyebrow">Коронарная артерия</div>
        <h1 id={titleId}>Как образуется тромб</h1>
        <p className="thrombus-lead">Бляшка может долго не давать симптомов. Если её покрышка разрывается, кровоток может нарушиться внезапно.</p>
      </section>

      <section className="thrombus-detail" aria-label="Этапы образования тромба">
        <div className="thrombus-steps" role="group" aria-label="Состояние сосуда">
          {STATES.map((item, index) => (
            <button key={item.id} type="button" aria-pressed={stage === item} aria-controls={captionId} onClick={() => setStage(item)}>
              <span aria-hidden="true">0{index + 1}</span>{item.label}
            </button>
          ))}
        </div>
        <div className="thrombus-caption" id={captionId} aria-live="polite" aria-atomic="true">
          <h2>{stage.title}</h2>
          <p>{stage.copy}</p>
        </div>
      </section>

      <footer className="thrombus-footer">
        <span>Один из возможных сценариев. Просветительская визуализация.</span>
        <a href="https://professional.heart.org/en/science-news/fourth-universal-definition-of-myocardial-infarction-2018/top-things-to-know" target="_blank" rel="noreferrer">Источник · ESC / ACC / AHA / WHF</a>
      </footer>
    </main>
  );
}
