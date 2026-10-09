import { CheckCircle } from "@phosphor-icons/react/ssr";
import { brand } from "@/brand/brand.config";
import { GradedPhoto } from "@/components/graded-photo";
import { Reveal } from "@/components/reveal";
import { Eyebrow, SectionTitle } from "@/components/section-heading";

export function Benefits() {
  const { benefits } = brand;

  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <ul className="@container grid grid-cols-2 gap-y-10 sm:gap-y-12 lg:grid-cols-4">
          {benefits.metrics.map((metric, index) => (
            <li
              key={metric.label}
              className="min-w-0 border-background/15 px-3 text-center max-lg:odd:border-r lg:border-l lg:px-4 lg:first:border-l-0"
            >
              <Reveal delay={0.06 * index}>
                <p className="font-display text-[clamp(1.65rem,8cqi,3.75rem)] leading-none tracking-tight text-balance">
                  {metric.value}
                </p>
                <p className="mt-4 text-sm text-pretty text-background/60 md:text-base">{metric.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid items-center gap-10 md:mt-24 md:grid-cols-2 md:gap-12 lg:mt-32 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
              <GradedPhoto
                src={benefits.image}
                alt={benefits.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[center_40%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>{benefits.eyebrow}</Eyebrow>
            <SectionTitle className="mt-5 max-w-[16ch]">{benefits.title}</SectionTitle>
            <ul className="mt-10 divide-y divide-background/15">
              {benefits.items.map((item) => (
                <li key={item.title} className="flex gap-4 py-5 first:pt-0">
                  <CheckCircle size={24} weight="light" className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    {item.description ? (
                      <p className="mt-1 text-[15px] leading-relaxed text-background/60">{item.description}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
