import { SceneNav } from "./scene-nav";
import { sitePath } from "./site-path";
import NinetyDaysScene from "./90-days/page";
import CaseScene from "./case/page";
import ChoiceScene from "./choice/page";
import DiagnosticsScene from "./diagnostics/page";
import FinalScene from "./final/page";
import LipidsScene from "./lipids/page";
import NoSymptomsScene from "./no-symptoms/page";
import PressureScene from "./pressure/page";
import RiskScene from "./risk/page";
import Score2Scene from "./score2/page";
import VascularAgeScene from "./vascular-age/page";

function OpeningScene({ mobile = false }: { mobile?: boolean }) {
  const titleId = mobile ? "hero-title-mobile" : "hero-title";

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

      <section className="copy hero-copy" aria-labelledby={titleId}>
        <div className="eyebrow">Профилактическая кардиология</div>
        <h1 id={titleId}>Сердце<br />до симптомов</h1>
        <p className="hero-subtitle">Как понять свой сердечно-сосудистый риск и научиться им управлять</p>
        <div className="hero-speaker">
          <strong>Кондальская Юлия Олеговна</strong>
          <span>Врач-терапевт, кардиолог</span>
          <b>Заместитель главного врача<br />по медицинской части</b>
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

      <div className="mobile-scroll-cue" aria-hidden="true"><span>Листайте вниз</span><i>↓</i></div>
    </main>
  );
}

export default function Home() {
  return (
    <>
      <div className="desktop-opening"><OpeningScene /></div>

      <div className="mobile-deck" aria-label="Сердце до симптомов · 12 сцен">
        <OpeningScene mobile />
        <NoSymptomsScene />
        <RiskScene />
        <Score2Scene />
        <PressureScene />
        <LipidsScene />
        <VascularAgeScene />
        <DiagnosticsScene />
        <CaseScene />
        <ChoiceScene />
        <NinetyDaysScene />
        <FinalScene />
      </div>
    </>
  );
}
