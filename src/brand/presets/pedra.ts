import type { Brand } from "@/brand/types";
import { createBaseBrand } from "./base";

/** Claro e quente, acento terracota. */
export const pedra: Brand = {
  ...createBaseBrand("Marca"),
  colorScheme: "light",
  colors: {
    background: "#f4f1ec",
    surface: "#ebe6de",
    foreground: "#1c1a17",
    muted: "#6b655c",
    line: "#d9d2c6",
    accent: "#b4532a",
    accentForeground: "#fbf8f3",
  },
};
