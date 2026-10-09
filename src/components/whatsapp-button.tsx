import { WhatsappLogo } from "@phosphor-icons/react/ssr";

const WHATSAPP_NUMBER = "5511988283311";
const WHATSAPP_MESSAGE = "Gostaria de adquirir a landing page totalmente customizada";

const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function WhatsAppButton() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp sobre a landing page totalmente customizada"
      className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-sm font-medium text-white shadow-[0_12px_32px_-12px_rgba(18,140,80,0.7)] transition-transform duration-500 ease-fluid hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128C4A] sm:right-5 sm:bottom-[max(1.25rem,env(safe-area-inset-bottom))] sm:size-auto sm:gap-2.5 sm:py-3.5 sm:pr-5 sm:pl-4"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]/50 motion-safe:animate-[whatsapp-pulse_2.4s_var(--ease-fluid)_infinite]"
      />
      <WhatsappLogo size={26} weight="fill" aria-hidden />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
