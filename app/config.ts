export const FACTORS = [
  { id: "pressure", label: "Давление" },
  { id: "lipids", label: "Атерогенные липиды" },
  { id: "smoking", label: "Курение" },
  { id: "glucose", label: "Глюкоза / диабет" },
] as const;

export const DEFAULT_ACTIVE_FACTORS = ["pressure", "lipids"] as const;

export const UI = {
  defaultExposure: 58,
  minExposure: 0,
  maxExposure: 100,
  visualBase: 0.12,
  visualFactorContribution: 0.14,
} as const;

export const CINEMATIC = {
  // Переходы перекрываются, чтобы три CGI-кадра воспринимались как одна сцена.
  earlyFadeEnd: 0.48,
  lateFadeStart: 0.42,
  states: [
    { id: "early", src: sitePath("/assets/vessel-early.webp") },
    { id: "mid", src: sitePath("/assets/vessel-mid.webp") },
    { id: "late", src: sitePath("/assets/vessel-late.webp") },
  ],
} as const;
import { sitePath } from "./site-path";
