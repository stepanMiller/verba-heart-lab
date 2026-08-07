import { CINEMATIC, UI } from "./config";

export function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

// Это не SCORE2. Число управляет только выраженностью синтетического visual.
export function visualIntensity(exposure: number, activeFactorCount: number) {
  const duration = clamp01(
    (exposure - UI.minExposure) / (UI.maxExposure - UI.minExposure),
  );
  const factorLoad = UI.visualBase + activeFactorCount * UI.visualFactorContribution;
  return clamp01(duration * factorLoad * 1.85);
}

export function intensityLabel(value: number) {
  if (value < 0.24) return "изменения почти не выражены";
  if (value < 0.52) return "изменения накапливаются";
  return "просвет меняется заметнее";
}

export function cinematicStateWeights(intensity: number) {
  const value = clamp01(intensity);
  const early = 1 - clamp01(value / CINEMATIC.earlyFadeEnd);
  const late = clamp01(
    (value - CINEMATIC.lateFadeStart) / (1 - CINEMATIC.lateFadeStart),
  );
  const mid = clamp01(1 - Math.max(early, late));
  const sum = early + mid + late;

  return {
    early: early / sum,
    mid: mid / sum,
    late: late / sum,
  } as const;
}
