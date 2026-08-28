"use client";

import { SceneNav } from "../scene-nav";
import { useSceneActivity } from "../scene-activity";
import { sitePath } from "../site-path";
import { STROKE_HEAD_IMAGE } from "../stroke-asset";

export default function StrokeScene() {
  const { sceneRef, active } = useSceneActivity();
  const flowPath = "M58 88 C58 73 60 62 64 52 C68 43 72 37 76 33";

  return (
    <main ref={sceneRef} className={`experience stroke-rebuilt-scene ${active ? "is-active" : ""}`}>
      <div className="stroke-rebuilt-art" aria-hidden="true">
        <img className="stroke-rebuilt-image" src={STROKE_HEAD_IMAGE} alt="" draggable={false} />
        <svg className="stroke-rebuilt-overlay" viewBox="0 0 100 100" role="presentation" preserveAspectRatio="none">
          <path className="stroke-rebuilt-guide" d={flowPath} />
          {[0, 0.7, 1.4, 2.1].map((delay) => (
            <circle key={delay} className="stroke-rebuilt-particle" r="1.1" cx="0" cy="0">
              <animateMotion dur="3.4s" begin={`-${delay}s`} repeatCount="indefinite" path={flowPath} />
            </circle>
          ))}
          <circle className="stroke-rebuilt-impact stroke-rebuilt-impact-a" cx="76" cy="33" r="4" />
          <circle className="stroke-rebuilt-impact stroke-rebuilt-impact-b" cx="76" cy="33" r="4" />
        </svg>
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="09" previous="/vascular-age" next="/diagnostics" />
      </header>

      <section className="stroke-rebuilt-copy" aria-labelledby="stroke-rebuilt-title">
        <div className="eyebrow">Когда страдает не только сердце</div>
        <h1 id="stroke-rebuilt-title">Симптомы — внезапно.<br />Сосудистый процесс — нет.</h1>
        <p className="stroke-rebuilt-lead">При ишемическом инсульте кровоток к участку мозга резко нарушается. Но сосудистые изменения, которые создают условия для события, могут формироваться задолго до первых симптомов.</p>
        <div className="stroke-rebuilt-mechanism" aria-label="Упрощённый механизм ишемического инсульта">
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
