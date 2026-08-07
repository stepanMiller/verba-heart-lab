"use client";

import { useMemo, useState } from "react";
import { CINEMATIC, DEFAULT_ACTIVE_FACTORS, FACTORS, UI } from "../config";
import { cinematicStateWeights, intensityLabel, visualIntensity } from "../model";
import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

type FactorId = (typeof FACTORS)[number]["id"];

function CinematicVessel({ intensity }: { intensity: number }) {
  const weights = useMemo(() => cinematicStateWeights(intensity), [intensity]);
  return (
    <div className="cinematic-vessel">
      <div className="vessel-frame">
        {CINEMATIC.states.map((state) => (
          <img key={state.id} className={`vessel-state vessel-state-${state.id}`} src={state.src} alt="" draggable={false} style={{ opacity: weights[state.id] }} />
        ))}
      </div>
      <div className="vessel-light" />
      <div className="vessel-grain" />
    </div>
  );
}

export default function RiskScene() {
  const [exposure, setExposure] = useState<number>(UI.defaultExposure);
  const [activeFactors, setActiveFactors] = useState<Set<FactorId>>(() => new Set(DEFAULT_ACTIVE_FACTORS));
  const intensity = useMemo(() => visualIntensity(exposure, activeFactors.size), [exposure, activeFactors]);

  function toggleFactor(id: FactorId) {
    setActiveFactors((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  return (
    <main className="experience risk-experience">
      <div className="scene-layer" aria-hidden="true"><CinematicVessel intensity={intensity} /></div>
      <header className="topline">
        <img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" />
        <SceneNav current="03" previous="/no-symptoms" next="/score2" />
      </header>
      <section className="copy" aria-labelledby="risk-title">
        <div className="eyebrow">Как формируется риск</div>
        <h1 id="risk-title">Риск складывается,<br />а не появляется<br />внезапно</h1>
        <p className="lead">Сегодня два человека могут чувствовать себя одинаково хорошо. Разница возникает в траектории факторов, которые действуют годами.</p>
        <div className="factor-group" aria-label="Факторы риска">
          {FACTORS.map((factor) => {
            const active = activeFactors.has(factor.id);
            return <button key={factor.id} type="button" className={`factor ${active ? "is-active" : ""}`} aria-pressed={active} onClick={() => toggleFactor(factor.id)}><span className="factor-dot" />{factor.label}</button>;
          })}
        </div>
        <div className="exposure-control">
          <div className="control-head"><span>Длительность воздействия</span><strong aria-live="polite">{intensityLabel(intensity)}</strong></div>
          <input type="range" min={UI.minExposure} max={UI.maxExposure} value={exposure} onChange={(event) => setExposure(Number(event.target.value))} aria-label="Длительность воздействия факторов" />
          <div className="range-labels"><span>сегодня</span><span>годы</span></div>
        </div>
      </section>
      <aside className="scene-caption"><span className="pulse-dot" /><span>Medical CGI · интерактивная сцена</span><b>Измените факторы или проведите по шкале</b></aside>
      <footer className="footline"><p>Синтетическая медицинская визуализация. Не прогноз и не данные конкретного пациента.</p><span>Сердце до симптомов · VERBA</span></footer>
    </main>
  );
}
