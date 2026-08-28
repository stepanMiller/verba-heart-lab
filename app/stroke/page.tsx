"use client";

import { SceneNav } from "../scene-nav";
import { useSceneActivity } from "../scene-activity";
import { sitePath } from "../site-path";
import { STROKE_HEAD_IMAGE } from "../stroke-asset";

export default function StrokeScene() {
  const { sceneRef, active } = useSceneActivity();
  const flowPath = "M 760 520 C 720 462, 700 402, 710 344 C 720 292, 742 250, 775 214";

  return (
    <main ref={sceneRef} className={`experience stroke-experience ${active ? "is-active" : ""}`}>
      <div className="scene-layer" aria-hidden="true">
        <div className="organ-visual stroke-visual">
          <img className="organ-scene-image stroke-scene-image" src={STROKE_HEAD_IMAGE} alt="" draggable={false} />
          <svg className="stroke-flow-overlay" viewBox="0 0 1000 563" role="presentation" preserveAspectRatio="xMidYMid meet">
            <path className="stroke-flow-guide" d={flowPath} />
            {[0, 0.7, 1.4, 2.1].map((delay) => (
              <circle key={delay} className="stroke-flow-particle" r="5" cx="0" cy="0">
                <animateMotion dur="3.2s" begin={`-${delay}s`} repeatCount="indefinite" path={flowPath} />
              </circle>
            ))}
            <circle className="stroke-impact-ring stroke-impact-ring-one" cx="775" cy="214" r="27" />
            <circle className="stroke-impact-ring stroke-impact-ring-two" cx="775" cy="214" r="27" />
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
