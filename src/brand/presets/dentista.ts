import type { Brand } from "@/brand/types";
import { createBaseBrand } from "./base";

const base = createBaseBrand("Cirurgião Dentista");

/** Papel mineral e teal cirúrgico. Grade frio, longe do terracota. */
export const dentista: Brand = {
  ...base,
  colorScheme: "light",
  colors: {
    background: "#f3f6f4",
    surface: "#e5f0eb",
    foreground: "#102421",
    muted: "#5c6b66",
    line: "#d3e0da",
    accent: "#0f6e68",
    accentForeground: "#f4fbf8",
  },
  seo: {
    title: "Cirurgião Dentista | Cirurgia oral com precisão",
    description:
      "Consulta clara, planejamento cuidadoso e cirurgia com acompanhamento até a recuperação.",
  },
  nav: {
    links: [
      { label: "Procedimentos", href: "#servicos" },
      { label: "Consultório", href: "#trabalhos" },
      { label: "Atendimento", href: "#como-funciona" },
      { label: "Depoimentos", href: "#depoimentos" },
    ],
    cta: { label: "Agendar", href: "#contato" },
  },
  hero: {
    eyebrow: "Cirurgia oral",
    title: { before: "Precisão que", highlight: "devolve", after: " o sorriso." },
    description:
      "Consulta clara, planejamento cuidadoso e cirurgia com acompanhamento até a recuperação.",
    primaryCta: { label: "Agendar avaliação", href: "#contato" },
    secondaryCta: { label: "Ver procedimentos", href: "#servicos" },
    stats: [
      { value: "Siso", label: "inclusos" },
      { value: "Implante", label: "ósseo" },
      { value: "Enxerto", label: "gengival" },
    ],
    image: "/brand/retrato.jpg",
    imageAlt: "Cirurgião-dentista em retrato, de terno cinza e gravata azul",
    badge: {
      text: "Retorno em até",
      highlight: "24h",
      avatars: [],
    },
  },
  services: {
    eyebrow: "Procedimentos",
    title: "O que a cirurgia resolve",
    description:
      "Do siso incluso ao implante, cada caso começa com exame, explicação e um plano que você entende.",
    linkLabel: "Saiba mais",
    featured: {
      icon: "tooth",
      title: "Extração de siso",
      description: "Procedimento cirúrgico para remover os dentes do siso.",
      image: "/brand/cadeira.jpg",
      imageAlt: "Cirurgião-dentista em atendimento, usando caneta de alta rotação",
      href: "#contato",
    },
    items: [
      {
        icon: "diamond",
        title: "Implantes",
        description: "Reposição com planejamento do osso e da prótese.",
        href: "#contato",
      },
      {
        icon: "mountains",
        title: "Enxerto",
        description: "Osso e gengiva quando o leito precisa de volume.",
        href: "#contato",
      },
      {
        icon: "clipboard",
        title: "Pequenas cirurgias",
        description: "Freios, cistos e lesões com indicação precisa.",
        href: "#contato",
      },
    ],
  },
  showcase: {
    eyebrow: "No consultório",
    title: "A clínica, de perto",
    description: "Três momentos do atendimento: a cadeira, o campo cirúrgico e o que foi removido.",
    cta: { label: "Agendar avaliação", href: "#contato" },
    items: [
      {
        title: "Campo cirúrgico",
        category: "Extração",
        image: "/brand/campo.jpg",
        imageAlt: "Campo cirúrgico com fórceps durante uma extração",
      },
      {
        title: "Cadeira",
        category: "Procedimento clínico",
        image: "/brand/cadeira.jpg",
        imageAlt: "Atendimento clínico na cadeira odontológica",
      },
      {
        title: "Peça removida",
        category: "Pós-extração",
        image: "/brand/peca.jpg",
        imageAlt: "Peça removida apresentada com fórceps após a extração",
      },
    ],
  },
  benefits: {
    metrics: [
      { value: "Consulta", label: "escuta o caso" },
      { value: "Exame", label: "imagem e plano" },
      { value: "Cirurgia", label: "campo estéril" },
      { value: "Retorno", label: "até cicatrizar" },
    ],
    eyebrow: "Por que aqui",
    title: "Técnica firme, explicação simples.",
    image: "/brand/campo.jpg",
    imageAlt: "Cirurgião-dentista de avental, máscara e luvas no campo cirúrgico",
    items: [
      { title: "Anestesia explicada antes de começar", description: "" },
      { title: "Campo cirúrgico limpo e silencioso", description: "" },
      { title: "Plano escrito, sem surpresa no dia", description: "" },
      { title: "Retorno marcado antes de você ir embora", description: "" },
    ],
  },
  process: {
    eyebrow: "Atendimento",
    title: "Quatro passos, sem pressa.",
    steps: [
      {
        title: "Avaliação",
        description: "Escuta, exame clínico e o que dói de verdade.",
      },
      {
        title: "Plano",
        description: "Imagem, riscos e o que acontece no dia da cirurgia.",
      },
      {
        title: "Cirurgia",
        description: "Campo preparado, anestesia combinada, tempo calmo.",
      },
      {
        title: "Retorno",
        description: "Controle da cicatrização e orientação escrita para casa.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Pacientes",
    title: "O que fica depois da cadeira.",
    rating: { value: "4,9", label: "avaliações do consultório" },
    featured: {
      quote: "Explicou cada etapa antes de encostar. Saí sabendo o que esperar da cicatrização.",
      name: "Paciente · siso",
      role: "",
      avatar: "",
    },
    items: [
      {
        quote: "O implante foi planejado com calma. Não houve surpresa no dia.",
        name: "Paciente · implante",
        role: "",
        avatar: "",
      },
      {
        quote: "Voltei para o retorno e a ferida estava acompanhada, não esquecida.",
        name: "Paciente · retorno",
        role: "",
        avatar: "",
      },
    ],
  },
  contactSection: {
    title: "Agende a sua avaliação.",
    description: "Conte o que está sentindo. Retornamos com horário e o que levar na primeira consulta.",
    form: {
      ...base.contactSection.form,
      namePlaceholder: "Seu nome completo",
      emailPlaceholder: "seu@email.com.br",
      messagePlaceholder: "Descreva seus sintomas ou o motivo da consulta",
      submit: "Pedir horário",
      successTitle: "Pedido recebido",
      successText: "Retornamos com horário e o que levar na primeira consulta.",
    },
  },
  footer: {
    tagline: "Cirurgia oral com clareza, do primeiro exame ao retorno.",
    columns: [
      {
        title: "Navegação",
        links: [
          { label: "Procedimentos", href: "#servicos" },
          { label: "Consultório", href: "#trabalhos" },
          { label: "Atendimento", href: "#como-funciona" },
          { label: "Pacientes", href: "#depoimentos" },
        ],
      },
    ],
    copyright: "© 2026 Cirurgião Dentista",
  },
};
