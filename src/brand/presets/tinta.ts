import type { Brand } from "@/brand/types";
import { createBaseBrand } from "./base";

const base = createBaseBrand("Tinta");

/** Claro e frio, acento azul-tinta, com logo em SVG tingido pela cor de acento. */
export const tinta: Brand = {
  ...base,
  logo: { src: "/brand/logo.svg", alt: "Tinta", tint: true, showName: true },
  colorScheme: "light",
  colors: {
    background: "#f3f4f2",
    surface: "#e5e8e6",
    foreground: "#121a24",
    muted: "#5b6573",
    line: "#d1d6da",
    accent: "#1f4a7a",
    accentForeground: "#f3f4f2",
  },
  hero: {
    ...base.hero,
    eyebrow: "Consultoria e projetos",
    title: { before: "Decisões ", highlight: "claras", after: " para crescer com segurança." },
  },
};
