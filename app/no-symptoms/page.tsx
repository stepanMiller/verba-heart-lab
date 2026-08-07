import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

export default function NoSymptomsScene() {
  return (
    <main className="experience symptoms-experience">
      <div className="scene-layer symptoms-scene" aria-hidden="true">
        <div className="horizon-field">
          <div className="horizon-now">
            <span>сегодня</span>
            <strong>0</strong>
            <b>жалоб</b>
          </div>
          <div className="horizon-line" />
          <div className="horizon-future">
            <span>горизонт</span>
            <strong>10</strong>
            <b>лет</b>
          </div>
          <div className="horizon-pulse" />
        </div>
      </div>

      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="02" previous="/" next="/risk" />
      </header>

      <section className="copy symptoms-copy" aria-labelledby="symptoms-title">
        <div className="eyebrow">Самочувствие ≠ прогноз</div>
        <h1 id="symptoms-title">«Если сердце<br />не беспокоит —<br />зачем кардиолог?»</h1>
        <p className="lead">
          Симптомы описывают самочувствие сегодня. Профилактика смотрит дальше: на сочетание факторов, которые меняют вероятность событий в будущем.
        </p>
      </section>

      <aside className="scene-caption symptoms-caption">
        <span className="pulse-dot" />
        <span>Два горизонта</span>
        <b>Не искать болезнь любой ценой — сначала понять риск</b>
      </aside>

      <footer className="footline">
        <p>Отсутствие жалоб не означает необходимость «проверить всё». Глубина диагностики зависит от исходного риска и клинической задачи.</p>
        <span>Профилактика начинается с контекста</span>
      </footer>
    </main>
  );
}
