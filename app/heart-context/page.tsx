"use client";

import { SceneNav } from "../scene-nav";
import { useSceneActivity } from "../scene-activity";
import { sitePath } from "../site-path";

export default function HeartContextScene() {
  const { sceneRef, active } = useSceneActivity();

  return (
    <main ref={sceneRef} className={`experience heart-context-experience ${active ? "is-active" : ""}`}>
      <div className="scene-layer" aria-hidden="true">
        <img className="organ-scene-image heart-context-image" src={sitePath("/assets/scene-heart.webp")} alt="" draggable={false} />
        <div className="heart-context-glow" />
        <div className="vessel-grain" />
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="03" previous="/no-symptoms" next="/risk" />
      </header>

      <section className="copy heart-context-copy" aria-labelledby="heart-context-title">
        <div className="eyebrow">Что именно мы защищаем</div>
        <h1 id="heart-context-title">Сердце может молчать.<br />Риск — уже формироваться.</h1>
        <p className="lead">Сердце обладает большим запасом компенсации. Изменения в коронарных артериях могут накапливаться годами, пока человек чувствует себя совершенно здоровым.</p>
        <p className="organ-thesis">Поэтому профилактика начинается раньше, чем появляется боль.</p>
        <div className="organ-tags" aria-label="Ключевые элементы">
          <div><strong>Коронарные артерии</strong><span>доставляют кровь к сердечной мышце</span></div>
          <div><strong>Миокард</strong><span>непрерывно нуждается в кислороде</span></div>
          <div><strong>Компенсация</strong><span>симптомы могут появиться не сразу</span></div>
        </div>
      </section>

      <aside className="scene-caption organ-caption">
        <span className="pulse-dot" />
        <span>Сердце и мозг — разные органы</span>
        <b>Сосудистый риск — общий</b>
      </aside>

      <footer className="footline"><p>Просветительская визуализация. Не индивидуальная диагностика.</p><span>Сердце до симптомов · VERBA</span></footer>
    </main>
  );
}
