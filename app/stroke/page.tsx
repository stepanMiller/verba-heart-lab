"use client";

import { SceneNav } from "../scene-nav";
import { useSceneActivity } from "../scene-activity";
import { sitePath } from "../site-path";

export default function StrokeScene() {
  const { sceneRef, active } = useSceneActivity();

  return (
    <main ref={sceneRef} className={`experience stroke-experience ${active ? "is-active" : ""}`}>
      <div className="scene-layer" aria-hidden="true">
        <img className="organ-scene-image stroke-scene-image" src={sitePath("/assets/scene-stroke.webp")} alt="" draggable={false} />
        <div className="stroke-brain-pulse" />
        <div className="stroke-flow-visual">
          <svg viewBox="0 0 220 220" role="presentation">
            <circle className="stroke-halo" cx="110" cy="110" r="102" />
            <path className="stroke-vessel" d="M30 112 C66 104, 92 108, 124 111 C152 113, 172 109, 191 100" />
            <circle className="stroke-flow f1" cx="44" cy="110" r="6" />
            <circle className="stroke-flow f2" cx="44" cy="110" r="6" />
            <circle className="stroke-flow f3" cx="44" cy="110" r="6" />
            <circle className="stroke-flow f4" cx="44" cy="110" r="6" />
            <circle className="stroke-clot" cx="137" cy="111" r="17" />
            <line className="stroke-stopline" x1="151" y1="88" x2="151" y2="134" />
          </svg>
        </div>
        <div className="vessel-grain" />
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="09" previous="/vascular-age" next="/diagnostics" />
      </header>

      <section className="copy stroke-copy" aria-labelledby="stroke-title">
        <div className="eyebrow">Когда страдает не только сердце</div>
        <h1 id="stroke-title">Симптомы — внезапно.<br />Сосудистый процесс — нет.</h1>
        <p className="lead">При ишемическом инсульте кровоток к участку мозга резко нарушается. Но сосудистые изменения, которые создают условия для события, могут формироваться задолго до первых симптомов.</p>
        <div className="stroke-mechanism" aria-label="Упрощённый механизм ишемического инсульта">
          <div><span>01</span><strong>Перекрытие</strong><small>тромб или эмбол нарушает просвет сосуда</small></div>
          <i />
          <div><span>02</span><strong>Кровоток ↓</strong><small>ткань получает меньше кислорода</small></div>
          <i />
          <div><span>03</span><strong>Ишемия</strong><small>возникает повреждение участка мозга</small></div>
        </div>
      </section>

      <footer className="footline"><p>Показан упрощённый механизм ишемического инсульта. Просветительская визуализация, не индивидуальная диагностика.</p><span>Сердце до симптомов · VERBA</span></footer>
    </main>
  );
}
