import { SceneNav } from "./scene-nav";
import { sitePath } from "./site-path";

export default function OpeningScene() {
  return (
    <main className="experience hero-experience">
      <div className="scene-layer hero-scene" aria-hidden="true">
        <img className="hero-image" src={sitePath("/assets/slide01-hero.webp")} alt="" draggable={false} />
        <div className="hero-breath" />
        <div className="vessel-grain" />
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="01" next="/no-symptoms" />
      </header>

      <section className="copy hero-copy" aria-labelledby="hero-title">
        <div className="eyebrow">Профилактическая кардиология</div>
        <h1 id="hero-title">Сердце<br />до симптомов</h1>
        <p className="hero-subtitle">Как понять свой сердечно-сосудистый риск и научиться им управлять</p>
        <div className="hero-speaker">
          <span>Юлия</span>
          <b>врач-кардиолог · VERBA</b>
        </div>
      </section>

      <aside className="scene-caption hero-caption">
        <span className="pulse-dot" />
        <span>Сегодня ничего не болит</span>
        <b>Это хорошая отправная точка — но не вся картина риска</b>
      </aside>

      <footer className="footline">
        <p>Просветительский материал. Не индивидуальная медицинская рекомендация.</p>
        <span>Сердце до симптомов · VERBA</span>
      </footer>
    </main>
  );
}
