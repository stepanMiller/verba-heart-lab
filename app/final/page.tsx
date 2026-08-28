import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

export default function FinalScene() {
  return (
    <main className="experience final-experience">
      <div className="scene-layer final-scene" aria-hidden="true"><img className="final-image" src={sitePath("/assets/slide01-hero.webp")} alt="" draggable={false} /><div className="final-wash" /><div className="vessel-grain" /></div>
      <header className="topline"><img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" /><SceneNav current="14" previous="/90-days" /></header>
      <section className="copy final-copy" aria-labelledby="final-title">
        <div className="eyebrow">Главная мысль</div>
        <h1 id="final-title">Не доказать,<br />что человек болен.</h1>
        <p className="final-thesis">Сделать всё разумно возможное, чтобы болезнь как можно дольше <em>не появилась.</em></p>
        <div className="final-line"><span className="pulse-dot" /><b>Кардиология до симптомов — это возможность немного больше управлять будущим.</b></div>
      </section>
      <footer className="footline"><p>Просветительский материал. Индивидуальная тактика определяется врачом.</p><span>VERBA · профилактическая кардиология</span></footer>
    </main>
  );
}
