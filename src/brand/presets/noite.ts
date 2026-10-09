import type { Brand } from "@/brand/types";
import { createBaseBrand } from "./base";

const base = createBaseBrand("Noite");

/** Escuro, carvão com acento dourado. */
export const noite: Brand = {
  ...base,
  colorScheme: "dark",
  colors: {
    background: "#141311",
    surface: "#1f1d1a",
    foreground: "#f1ece3",
    muted: "#9a9389",
    line: "#34302b",
    accent: "#c9a25c",
    accentForeground: "#141311",
  },
  hero: {
    ...base.hero,
    eyebrow: "Experiência exclusiva",
    title: { before: "Excelência em ", highlight: "cada", after: " detalhe." },
  },
};
