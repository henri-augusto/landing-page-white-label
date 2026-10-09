import { ArrowRight } from "@phosphor-icons/react/ssr";
import { brand } from "@/brand/brand.config";
import { GradedPhoto } from "@/components/graded-photo";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { Eyebrow, SectionTitle } from "@/components/section-heading";

function MoreLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-medium text-accent"
    >
      {label}
      <ArrowRight
        size={14}
        aria-hidden
        className="transition-transform duration-500 ease-fluid group-hover:translate-x-1"
      />
    </a>
  );
}

export function Services() {
  const { services } = brand;
  const { featured } = services;

  return (
    <section id="servicos" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:pb-36 md:pt-28">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4 lg:self-center">
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5">{services.title}</SectionTitle>
          <p className="mt-6 max-w-[40ch] leading-relaxed text-muted">{services.description}</p>
        </Reveal>

        <div className="grid min-w-0 gap-4 md:grid-cols-2 lg:col-span-8">
          <Reveal className="md:row-span-3">
            <article className="flex h-full flex-col rounded-[1.75rem] bg-surface p-4 ring-1 ring-line">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] md:aspect-auto md:min-h-64 md:flex-1">
                <GradedPhoto
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover object-[center_30%]"
                />
              </div>
              <div className="flex flex-col px-3 pb-3 pt-7">
                <div className="flex items-center gap-4">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Icon name={featured.icon} size={26} />
                  </span>
                  <h3 className="font-display text-3xl tracking-tight">{featured.title}</h3>
                </div>
                <p className="mt-5 max-w-[38ch] leading-relaxed text-muted">{featured.description}</p>
                <MoreLink href={featured.href} label={services.linkLabel} />
              </div>
            </article>
          </Reveal>

          {services.items.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * (index + 1)}>
              <article className="flex h-full min-w-0 gap-4 rounded-[1.75rem] bg-surface p-5 ring-1 ring-line sm:gap-5 sm:p-6">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                  <Icon name={item.icon} size={26} />
                </span>
                <div className="flex min-w-0 flex-col">
                  <h3 className="font-display text-2xl tracking-tight text-balance">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.description}</p>
                  <MoreLink href={item.href} label={services.linkLabel} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
