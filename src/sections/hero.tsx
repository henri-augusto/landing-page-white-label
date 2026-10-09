import type { ReactNode } from "react";
import Image from "next/image";
import { brand } from "@/brand/brand.config";
import { GradedPhoto } from "@/components/graded-photo";
import { PillLink } from "@/components/pill-link";

function Rise({ delay, className = "", children }: { delay: number; className?: string; children: ReactNode }) {
  return (
    <div className={`animate-rise ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Hero() {
  const { hero } = brand;

  return (
    <section
      id="inicio"
      className="mx-auto grid w-full min-w-0 max-w-7xl items-center gap-12 px-5 pt-[calc(6.75rem+env(safe-area-inset-top))] pb-16 md:px-8 md:pb-20 lg:min-h-[100dvh] lg:grid-cols-12 lg:gap-10 lg:pb-16"
    >
      <div className="min-w-0 lg:col-span-7">
        <Rise delay={0}>
          <span className="inline-flex rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-accent ring-1 ring-accent/30">
            {hero.eyebrow}
          </span>
        </Rise>

        <Rise delay={80}>
          <h1 className="mt-7 max-w-[14ch] font-display text-[clamp(2.75rem,11vw,6rem)] leading-[0.98] tracking-tight text-balance sm:max-w-[18ch]">
            {hero.title.before}
            <br />
            <em className="italic text-accent">{hero.title.highlight}</em>
            {hero.title.after}
          </h1>
        </Rise>

        <Rise delay={160}>
          <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-muted">{hero.description}</p>
        </Rise>

        <Rise delay={240} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <PillLink href={hero.primaryCta.href} withArrow={false}>
            {hero.primaryCta.label}
          </PillLink>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex min-h-11 items-center text-[15px] font-medium"
          >
            <span className="border-b border-foreground pb-0.5 transition-colors hover:border-accent hover:text-accent">
              {hero.secondaryCta.label}
            </span>
          </a>
        </Rise>

        <Rise delay={320}>
          <ul className="mt-12 grid w-full grid-cols-1 border-t border-line sm:mt-14 sm:grid-cols-3 sm:border-t-0">
            {hero.stats.map((stat) => (
              <li
                key={stat.label}
                className="min-w-0 border-b border-line py-4 sm:border-b-0 sm:border-l sm:px-6 sm:py-0 first:sm:border-l-0 first:sm:pl-0"
              >
                <span className="block break-words font-display text-[clamp(2rem,5vw,2.25rem)] leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-muted">{stat.label}</span>
              </li>
            ))}
          </ul>
        </Rise>
      </div>

      <Rise delay={120} className="relative min-w-0 lg:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
          <GradedPhoto
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[center_18%]"
          />
        </div>

        <div className="absolute right-4 bottom-4 left-4 flex max-w-none items-center gap-4 rounded-2xl bg-background px-5 py-4 shadow-[0_20px_50px_-20px_color-mix(in_oklab,var(--color-foreground)_35%,transparent)] ring-1 ring-line md:right-auto md:bottom-8 md:left-6 lg:-left-8">
          {hero.badge.avatars.length > 0 ? (
            <div className="flex -space-x-3">
              {hero.badge.avatars.map((avatar) => (
                <Image
                  key={avatar}
                  src={avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover ring-2 ring-background"
                />
              ))}
            </div>
          ) : null}
          <p className="min-w-0 text-sm font-medium text-pretty">
            {hero.badge.text} <span className="text-accent">{hero.badge.highlight}</span>
          </p>
        </div>
      </Rise>
    </section>
  );
}
