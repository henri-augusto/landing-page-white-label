import type { IconName } from "@/components/icon";

export type Link = { label: string; href: string };

export type BrandColors = {
  background: string;
  surface: string;
  foreground: string;
  muted: string;
  line: string;
  accent: string;
  accentForeground: string;
};

export type BrandLogo = {
  /** Caminho em /public. Use null para exibir só o nome em fonte de destaque. */
  src: string | null;
  alt: string;
  /** Pinta o logo com a cor de acento (bom para logos monocromáticos em SVG/PNG transparente). */
  tint: boolean;
  /** Mostra o nome da marca ao lado do logo. */
  showName: boolean;
};

export type Person = { name: string; role: string; avatar: string };

export type Brand = {
  name: string;
  logo: BrandLogo;
  colors: BrandColors;
  colorScheme: "light" | "dark";
  contact: {
    email: string;
    phone: string;
    /** Somente dígitos com DDI, ex.: 5511999999999 */
    whatsapp: string;
    socials: Link[];
  };
  seo: { title: string; description: string };
  sections: {
    services: boolean;
    showcase: boolean;
    benefits: boolean;
    process: boolean;
    testimonials: boolean;
    contact: boolean;
  };
  nav: { links: Link[]; cta: Link };
  hero: {
    eyebrow: string;
    title: { before: string; highlight: string; after: string };
    description: string;
    primaryCta: Link;
    secondaryCta: Link;
    stats: { value: string; label: string }[];
    image: string;
    imageAlt: string;
    badge: { text: string; highlight: string; avatars: string[] };
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    linkLabel: string;
    featured: { icon: IconName; title: string; description: string; image: string; imageAlt: string; href: string };
    items: { icon: IconName; title: string; description: string; href: string }[];
  };
  showcase: {
    eyebrow: string;
    title: string;
    description: string;
    cta: Link;
    items: { title: string; category: string; image: string; imageAlt: string }[];
  };
  benefits: {
    metrics: { value: string; label: string }[];
    eyebrow: string;
    title: string;
    image: string;
    imageAlt: string;
    items: { title: string; description: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    rating: { value: string; label: string };
    featured: Person & { quote: string };
    items: (Person & { quote: string })[];
  };
  contactSection: {
    title: string;
    description: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successTitle: string;
      successText: string;
      requiredError: string;
      emailError: string;
    };
  };
  footer: {
    tagline: string;
    columns: { title: string; links: Link[] }[];
    copyright: string;
  };
};
