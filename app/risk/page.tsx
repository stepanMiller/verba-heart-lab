"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { CINEMATIC, DEFAULT_ACTIVE_FACTORS, FACTORS, UI } from "../config";
import { cinematicStateWeights, intensityLabel, visualIntensity } from "../model";
import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

type FactorId = (typeof FACTORS)[number]["id"];

function CinematicVessel({
  intensity,
  lipidsActive,
  pressureActive,
}: {
  intensity: number;
  lipidsActive: boolean;
  pressureActive: boolean;
}) {
  const weights = useMemo(() => cinematicStateWeights(intensity), [intensity]);
  const livingStyle = {
    "--athero-opacity": lipidsActive ? Math.min(0.92, 0.34 + intensity * 0.82) : 0,
    "--risk-pulse-duration": pressureActive ? "1.18s" : "2.8s",
    "--risk-pulse-opacity": pressureActive ? 0.5 : 0.12,
  } as CSSProperties;

  return (
    <div
      className={`cinematic-vessel risk-living-vessel ${pressureActive ? "has-pressure" : ""} ${lipidsActive ? "has-lipids" : ""}`}
      style={livingStyle}
    >
      <div className="vessel-frame">
        {CINEMATIC.states.map((state) => (
          <img key={state.id} className={`vessel-state vessel-state-${state.id}`} src={state.src} alt="" draggable={false} style={{ opacity: weights[state.id] }} />
        ))}
      </div>
      <div className="risk-pressure-wave" />
      <div className="risk-athero-stream">
        {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
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
  const pressureActive = activeFactors.has("pressure");
  const lipidsActive = activeFactors.has("lipids");
  const stage = intensity < 0.24 ? "I" : intensity < 0.52 ? "II" : "III";

  function toggleFactor(id: FactorId) {
    setActiveFactors((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  return (
    <main className="experience risk-experience">
      <div className="scene-layer" aria-hidden="true">
        <CinematicVessel intensity={intensity} lipidsActive={lipidsActive} pressureActive={pressureActive} />
      </div>
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
        <div className="risk-chain" aria-live="polite">
          <div><span>Факторы</span><strong>{activeFactors.size}/4</strong></div>
          <i />
          <div><span>Накопление</span><strong>{exposure < 34 ? "начало" : exposure < 70 ? "годы" : "длительно"}</strong></div>
          <i />
          <div><span>Стенка</span><strong>стадия {stage}</strong></div>
        </div>
      </section>
      <aside className="scene-caption risk-caption">
        <span className="pulse-dot" />
        <span>Живое состояние · V2</span>
        <b>{lipidsActive ? "Карминовые точки — условный сигнал атерогенной нагрузки" : "Включите атерогенные липиды — появится отдельный потоковый сигнал"}</b>
      </aside>
      <footer className="footline"><p>CGI и частицы — концептуальная визуализация. Размеры и количество частиц не соответствуют реальному измерению и не являются прогнозом.</p><span>Сердце до симптомов · VERBA</span></footer>
    </main>
  );
}
