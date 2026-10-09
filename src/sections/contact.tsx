import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { brand } from "@/brand/brand.config";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "./contact-form";

export function Contact() {
  const { contactSection, contact } = brand;

  const channels = [
    {
      icon: EnvelopeSimple,
      label: contact.email.replace(/(@|\.)/g, "$1\u200b"),
      name: contact.email,
      href: `mailto:${contact.email}`,
    },
    { icon: Phone, label: contact.phone, name: contact.phone, href: `tel:+55${contact.phone.replace(/\D/g, "")}` },
    { icon: WhatsappLogo, label: "WhatsApp", name: "WhatsApp", href: `https://wa.me/${contact.whatsapp}` },
  ];

  return (
    <section id="contato" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 pb-16 md:px-8">
      <Reveal>
        <div className="grid gap-10 rounded-[2rem] bg-accent p-6 text-accent-foreground sm:rounded-[2.5rem] sm:p-8 md:grid-cols-2 md:gap-12 md:p-10 lg:p-14">
          <div className="flex min-w-0 flex-col">
            <h2 className="max-w-[12ch] font-display text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.05] tracking-tight text-balance">
              {contactSection.title}
            </h2>
            <span className="mt-8 block h-px w-20 bg-accent-foreground/50" />
            <p className="mt-8 max-w-[44ch] leading-relaxed text-accent-foreground/85">
              {contactSection.description}
            </p>
            <ul className="mt-10 flex flex-col gap-5 lg:mt-auto lg:pt-10">
              {channels.map(({ icon: ChannelIcon, label, name, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    aria-label={name}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex min-h-11 min-w-0 items-center gap-4 text-lg underline-offset-4 hover:underline"
                  >
                    <ChannelIcon size={26} weight="light" className="shrink-0" aria-hidden />
                    <span className="min-w-0 text-[15px] leading-snug sm:text-lg">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 rounded-[1.5rem] bg-background p-5 text-foreground sm:p-7 md:p-8">
            <ContactForm copy={contactSection.form} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
