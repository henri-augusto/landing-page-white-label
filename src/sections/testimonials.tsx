import Image from "next/image";
import { Quotes, Star } from "@phosphor-icons/react/ssr";
import { brand } from "@/brand/brand.config";
import type { Person } from "@/brand/types";
import { Reveal } from "@/components/reveal";
import { Eyebrow, SectionTitle } from "@/components/section-heading";

function initials(name: string) {
  return name
    .split(/[^A-Za-zÀ-ÿ0-9]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function Author({ person, size }: { person: Person; size: number }) {
  return (
    <div className="flex items-center gap-4">
      {person.avatar ? (
        <Image
          src={person.avatar}
          alt=""
          width={size}
          height={size}
          className="rounded-full object-cover ring-4 ring-background"
          style={{ width: size, height: size }}
        />
      ) : (
        <span
          className="inline-flex items-center justify-center rounded-full text-sm font-medium tracking-wide text-accent ring-1 ring-accent/50"
          style={{ width: size, height: size }}
          aria-hidden
        >
          {initials(person.name)}
        </span>
      )}
      <div className="min-w-0">
        <p className="font-medium text-pretty">{person.name}</p>
        {person.role ? <p className="text-sm text-pretty text-muted">{person.role}</p> : null}
      </div>
    </div>
  );
}

export function Testimonials() {
  const { testimonials } = brand;
  const { featured } = testimonials;

  return (
    <section id="depoimentos" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 pb-24 md:px-8 md:pb-36">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5 lg:self-center">
          <Eyebrow>{testimonials.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5 max-w-[12ch]">{testimonials.title}</SectionTitle>
          <div className="mt-10 flex items-center gap-5">
            <p className="font-display text-7xl leading-none tracking-tight">{testimonials.rating.value}</p>
            <div>
              <div className="flex gap-1 text-accent" aria-hidden>
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={18} weight="fill" />
                ))}
              </div>
              <p className="mt-2 text-sm text-muted">{testimonials.rating.label}</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          <Reveal className="sm:col-span-2">
            <figure className="rounded-[1.75rem] bg-surface p-8 ring-1 ring-line md:p-12">
              <Quotes size={44} weight="fill" className="text-accent" aria-hidden />
              <blockquote className="mt-6 font-display text-2xl italic leading-snug tracking-tight text-pretty md:text-[32px]">
                {featured.quote}
              </blockquote>
              <figcaption className="mt-8">
                <Author person={featured} size={56} />
              </figcaption>
            </figure>
          </Reveal>

          {testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={0.08 * (index + 1)}>
              <figure className="flex h-full flex-col justify-between gap-8 rounded-[1.75rem] bg-surface p-7 ring-1 ring-line">
                <div>
                  <Quotes size={28} weight="fill" className="text-accent" aria-hidden />
                  <blockquote className="mt-4 font-display text-xl italic leading-snug tracking-tight">
                    {item.quote}
                  </blockquote>
                </div>
                <figcaption>
                  <Author person={item} size={48} />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
