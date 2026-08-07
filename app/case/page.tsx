import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

const SCORE2_PAPER = "https://academic.oup.com/eurheartj/article/42/25/2439/6297709";

export default function CaseScene() {
  return (
    <main className="experience case-experience">
      <div className="scene-layer case-scene" aria-hidden="true"><img className="case-image" src={sitePath("/assets/slide09-patient.webp")} alt="" draggable={false} /><div className="vessel-grain" /></div>
      <header className="topline"><img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" /><SceneNav current="09" previous="/diagnostics" next="/choice" /></header>

      <section className="copy case-copy" aria-labelledby="case-title">
        <div className="eyebrow">Учебный пример SCORE2</div>
        <h1 id="case-title">Чувствует себя<br />здоровым. Риск<br />уже измерим.</h1>
        <div className="case-facts" aria-label="Данные учебного пациента">
          <span>мужчина · 50 лет</span><span>курит</span><span>САД · 140</span><span>холестерин · 5,5</span><span>HDL-C · 1,3</span>
        </div>
        <div className="case-risk">
          <div><strong>5,9%</strong><span>низкорисковый регион</span></div>
          <i><b /></i>
          <div><strong>14,0%</strong><span>регион очень высокого риска</span></div>
        </div>
      </section>

      <aside className="scene-caption case-caption"><span className="pulse-dot" /><span>Одинаковое самочувствие</span><b>не означает одинаковый прогноз</b></aside>
      <footer className="footline"><p>Опубликованный учебный пример, не данные пациента VERBA. Перед публичной лекцией заменить обезличенным клиническим кейсом практики.</p><a href={SCORE2_PAPER} target="_blank" rel="noreferrer">Источник · SCORE2, EHJ 2021</a></footer>
    </main>
  );
}
