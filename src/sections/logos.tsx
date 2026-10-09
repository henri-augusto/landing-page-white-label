import Image from "next/image";
import { Reveal } from "@/components/reveal";

/**
 * Fechamento da página. Fica sempre por último e não entra no toggle de seções do preset.
 */
export function Logos() {
  return (
    <section id="logos" aria-label="Preço da landing page customizada" className="bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-7xl items-end gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <Image
            src="/logos/mark.png"
            alt="Logos"
            width={72}
            height={72}
            className="size-[4.5rem] rounded-[1.15rem]"
          />
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-background/55">Logos</p>
          <h2 className="mt-4 max-w-[14ch] font-display text-4xl leading-[1.02] tracking-tight text-balance md:text-6xl">
            Landing page totalmente customizada
          </h2>
          <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-background/70">
            O preço era R$&nbsp;200. Para ter esse acesso, agora são apenas R$&nbsp;180.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5 lg:pb-1 lg:text-right">
          <p className="text-sm uppercase tracking-[0.18em] text-background/50">
            Antes{" "}
            <span className="ml-2 font-display text-3xl normal-case tracking-tight line-through decoration-background/35">
              R$ 200
            </span>
          </p>
          <p className="mt-2 font-display text-[clamp(4.75rem,9vw,8rem)] leading-none tracking-tight text-accent tabular-nums">
            R$ 180
          </p>
        </Reveal>
      </div>
    </section>
  );
}
