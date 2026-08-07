import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

const ESC_SOURCE =
  "https://www.escardio.org/news/news-room/congress-news/2024-esc-clinical-practice-guidelines-for-the-management-of-elevated-blood-pressure-and-hypertension/";

export default function PressureScene() {
  return (
    <main className="experience pressure-experience">
      <div className="scene-layer pressure-scene" aria-hidden="true">
        <div className="cinematic-vessel">
          <div className="vessel-frame pressure-vessel-frame">
            <img
              className="vessel-state pressure-base"
              src={sitePath("/assets/vessel-early.webp")}
              alt=""
              draggable={false}
            />
            <img
              className="vessel-state pressure-peak"
              src={sitePath("/assets/vessel-pressure-peak.webp")}
              alt=""
              draggable={false}
            />
          </div>
          <div className="vessel-light" />
          <div className="vessel-grain" />
        </div>
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="05" previous="/score2" next="/lipids" />
      </header>

      <section className="copy pressure-copy" aria-labelledby="pressure-title">
        <div className="eyebrow">Давление, которое можно не чувствовать</div>
        <h1 id="pressure-title"><span className="pressure-title-line">«Рабочее 140» —</span><br />не лучший<br />ориентир</h1>
        <p className="lead">
          Ощущение давления — ненадёжный прибор. Важно не то, чувствуете ли вы цифру, а какое давление у вас в обычной жизни и подтверждается ли оно корректными измерениями.
        </p>

        <div className="pressure-fact" aria-label="Порог артериальной гипертонии при офисном измерении по ESC 2024">
          <strong>140/90</strong>
          <span>мм рт. ст.</span>
          <p>офисный порог гипертонии по ESC 2024</p>
        </div>
      </section>

      <aside className="scene-caption pressure-caption">
        <span className="pulse-dot pressure-status" />
        <span>Систолическая фаза</span>
        <b>Стенка реагирует на каждый удар — человек может этого не ощущать</b>
      </aside>

      <footer className="footline">
        <p>Одно измерение не устанавливает диагноз. Нужны корректные повторные измерения и/или подтверждение вне кабинета.</p>
        <a href={ESC_SOURCE} target="_blank" rel="noreferrer">Источник · ESC 2024</a>
      </footer>
    </main>
  );
}
