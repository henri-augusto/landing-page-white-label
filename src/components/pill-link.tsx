import type { ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/ssr";

const variants = {
  accent: "bg-accent text-accent-foreground",
  solid: "bg-foreground text-background",
  outline: "ring-1 ring-foreground/80 text-foreground hover:bg-foreground hover:text-background",
  line: "ring-1 ring-accent text-accent hover:bg-accent hover:text-accent-foreground",
};

export function PillLink({
  href,
  children,
  variant = "accent",
  withArrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-11 items-center gap-3 rounded-full py-1.5 pl-6 text-[15px] font-medium transition-[transform,background-color,color] duration-500 ease-fluid active:scale-[0.98] ${
        withArrow ? "pr-1.5" : "pr-6"
      } ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow ? (
        <span className="flex size-9 items-center justify-center rounded-full ring-1 ring-current/40 transition-transform duration-500 ease-fluid group-hover:translate-x-0.5">
          <ArrowRight size={16} weight="regular" aria-hidden />
        </span>
      ) : null}
    </a>
  );
}
