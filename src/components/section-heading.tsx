export function Eyebrow({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`text-xs font-medium uppercase tracking-[0.22em] text-accent ${className}`}>{children}</p>
  );
}

export function SectionTitle({ children, className = "" }: { children: string; className?: string }) {
  return (
    <h2
      className={`font-display text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.05] tracking-tight text-balance ${className}`}
    >
      {children}
    </h2>
  );
}
