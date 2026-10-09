import { brand } from "@/brand/brand.config";
import { GradedPhoto } from "@/components/graded-photo";
import { PillLink } from "@/components/pill-link";
import { Reveal } from "@/components/reveal";
import { Eyebrow, SectionTitle } from "@/components/section-heading";

export function Showcase() {
  const { showcase } = brand;
  const [main, ...rest] = showcase.items;

  return (
    <section id="trabalhos" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 pb-24 md:px-8 md:pb-36">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <Reveal>
          <Eyebrow>{showcase.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5">{showcase.title}</SectionTitle>
        </Reveal>
        <Reveal delay={0.1} className="flex max-w-sm flex-col items-start gap-6 md:items-end md:text-right">
          <p className="leading-relaxed text-muted">{showcase.description}</p>
          <PillLink href={showcase.cta.href} variant="line" withArrow={false}>
            {showcase.cta.label}
          </PillLink>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-12">
        {main ? (
          <Reveal className="md:col-span-7 md:row-span-2">
            <figure className="group flex h-full min-h-80 flex-col overflow-hidden rounded-[1.75rem] bg-surface ring-1 ring-line">
              <div className="relative min-h-72 flex-1">
                <GradedPhoto
                  src={main.image}
                  alt={main.imageAlt}
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-fluid group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="px-5 py-4">
                <span className="block font-medium">{main.title}</span>
                <span className="text-sm text-muted">{main.category}</span>
              </figcaption>
            </figure>
          </Reveal>
        ) : null}

        {rest.map((item, index) => (
          <Reveal key={item.title} delay={0.1 * (index + 1)} className="md:col-span-5">
            <figure className="group overflow-hidden rounded-[1.75rem] bg-surface ring-1 ring-line">
              <div className="relative aspect-[16/9]">
                <GradedPhoto
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover object-[center_35%] transition-transform duration-1000 ease-fluid group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="px-5 py-4">
                <span className="block font-medium">{item.title}</span>
                <span className="text-sm text-muted">{item.category}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
