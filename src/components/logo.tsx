import Image from "next/image";
import { brand } from "@/brand/brand.config";

export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const { logo, name } = brand;
  const markSize = size === "lg" ? "size-9" : "size-6";
  const textSize =
    size === "lg"
      ? "text-balance text-[clamp(2.25rem,7vw,3rem)] leading-[0.95]"
      : "truncate text-[clamp(1.15rem,4.2vw,1.5rem)] leading-none";

  return (
    <span className="inline-flex max-w-full items-center gap-2.5">
      {logo.src && logo.tint ? (
        <span
          role="img"
          aria-label={logo.alt}
          className={`${markSize} shrink-0 bg-accent`}
          style={{
            maskImage: `url(${logo.src})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      ) : null}
      {logo.src && !logo.tint ? (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={size === "lg" ? 160 : 112}
          height={size === "lg" ? 40 : 28}
          className="h-7 w-auto"
          unoptimized
        />
      ) : null}
      {logo.showName || !logo.src ? (
        <span className={`min-w-0 font-display tracking-tight ${textSize}`}>{name}</span>
      ) : null}
    </span>
  );
}
