import { brand } from "@/brand/brand.config";
import { Reveal } from "@/components/reveal";
import { Eyebrow, SectionTitle } from "@/components/section-heading";

export function Process() {
  const { process } = brand;

  return (
    <section id="como-funciona" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <Eyebrow>{process.eyebrow}</Eyebrow>
        <SectionTitle className="mt-5 max-w-[18ch]">{process.title}</SectionTitle>
      </Reveal>

      <ol className="mt-16 grid gap-y-14 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, index) => (
          <li key={step.title} className="relative min-w-0 border-l border-line pt-10 pr-6 pl-6">
            <span className="absolute -left-[5px] -top-[5px] size-2.5 rounded-full bg-accent" />
            <Reveal delay={0.08 * index}>
              <p className="font-display text-6xl leading-none text-accent md:text-7xl">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
              <p className="mt-3 max-w-[32ch] text-[15px] leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
