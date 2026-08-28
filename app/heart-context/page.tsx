"use client";

import { SceneNav } from "../scene-nav";
import { useSceneActivity } from "../scene-activity";
import { sitePath } from "../site-path";
import { HEART_CUTAWAY_IMAGE } from "../heart-asset";

export default function HeartContextScene() {
  const { sceneRef, active } = useSceneActivity();

  return (
    <main ref={sceneRef} className={`experience heart-rebuilt-scene ${active ? "is-active" : ""}`}>
      <div className="heart-rebuilt-art" aria-hidden="true">
        <img className="heart-rebuilt-image" src={HEART_CUTAWAY_IMAGE} alt="" draggable={false} />
        <div className="heart-rebuilt-halo" />
        <div className="heart-rebuilt-ring heart-rebuilt-ring-a" />
        <div className="heart-rebuilt-ring heart-rebuilt-ring-b" />
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="03" previous="/no-symptoms" next="/risk" />
      </header>

      <section className="heart-rebuilt-copy" aria-labelledby="heart-rebuilt-title">
        <div className="eyebrow">Что именно мы защищаем</div>
        <h1 id="heart-rebuilt-title">Сердце может молчать.<br />Риск — уже формироваться.</h1>
        <p className="heart-rebuilt-lead">Сердце обладает большим запасом компенсации. Изменения в коронарных артериях могут накапливаться годами, пока человек чувствует себя совершенно здоровым.</p>
        <p className="heart-rebuilt-thesis">Поэтому профилактика начинается раньше, чем появляется боль.</p>
        <div className="heart-rebuilt-tags" aria-label="Ключевые элементы">
          <div><strong>Коронарные артерии</strong><span>доставляют кровь к сердечной мышце</span></div>
          <div><strong>Миокард</strong><span>непрерывно нуждается в кислороде</span></div>
          <div><strong>Компенсация</strong><span>симптомы могут появиться не сразу</span></div>
        </div>
      </section>

      <footer className="footline"><p>Просветительская визуализация. Не индивидуальная диагностика.</p><span>Сердце до симптомов · VERBA</span></footer>
    </main>
  );
}
