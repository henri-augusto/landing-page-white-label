import type { CSSProperties, ReactNode } from "react";

/** Entrada suave ao rolar, só com CSS. Sem suporte a scroll-driven animations, o conteúdo aparece direto. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Atraso relativo em segundos (0.08 = um passo da cascata). */
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`reveal ${className}`} style={{ "--reveal-step": Math.round(delay * 100) } as CSSProperties}>
      {children}
    </div>
  );
}
