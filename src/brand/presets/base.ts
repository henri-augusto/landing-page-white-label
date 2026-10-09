import type { Brand } from "@/brand/types";

/**
 * Conteúdo genérico compartilhado pelos presets.
 * Serve para clínica, escritório, estúdio, loja ou qualquer prestador de serviço.
 */
export function createBaseBrand(name: string): Omit<Brand, "colors" | "colorScheme"> {
  const slug = name.toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, "");

  return {
    name,
    logo: { src: null, alt: name, tint: true, showName: true },
    contact: {
      email: `contato@${slug}.com.br`,
      phone: "(11) 4000-0000",
      whatsapp: "5511940000000",
      socials: [
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Facebook", href: "#" },
      ],
    },
    seo: {
      title: `${name} | Atendimento sob medida`,
      description:
        "Atendimento humano, processos claros e soluções personalizadas para resultados que fazem a diferença.",
    },
    sections: {
      services: true,
      showcase: true,
      benefits: true,
      process: true,
      testimonials: true,
      contact: true,
    },
    nav: {
      links: [
        { label: "Serviços", href: "#servicos" },
        { label: "Trabalhos", href: "#trabalhos" },
        { label: "Como funciona", href: "#como-funciona" },
        { label: "Depoimentos", href: "#depoimentos" },
      ],
      cta: { label: "Fale conosco", href: "#contato" },
    },
    hero: {
      eyebrow: "Atendimento sob medida",
      title: { before: "Cuidado de ", highlight: "verdade", after: ", do início ao fim." },
      description:
        "Atendimento humano, processos claros e soluções personalizadas para resultados que fazem a diferença.",
      primaryCta: { label: "Agendar conversa", href: "#contato" },
      secondaryCta: { label: "Ver serviços", href: "#servicos" },
      stats: [
        { value: "12+", label: "anos" },
        { value: "2.400", label: "clientes" },
        { value: "4,9", label: "avaliação" },
      ],
      image: "/brand/hero.jpg",
      imageAlt: "Profissional em um ambiente claro e acolhedor",
      badge: {
        text: "Resposta em até",
        highlight: "24h",
        avatars: ["/brand/avatar-1.jpg", "/brand/avatar-2.jpg", "/brand/avatar-3.jpg"],
      },
    },
    services: {
      eyebrow: "Serviços",
      title: "O que fazemos por você",
      description:
        "Soluções práticas para simplificar processos, resolver desafios e gerar resultados que se sustentam no tempo.",
      linkLabel: "Saiba mais",
      featured: {
        icon: "compass",
        title: "Consultoria",
        description:
          "Diagnóstico cuidadoso, orientações claras e recomendações personalizadas para decisões mais seguras.",
        image: "/brand/service.jpg",
        imageAlt: "Escada clara iluminada por luz natural",
        href: "#contato",
      },
      items: [
        {
          icon: "clipboard",
          title: "Planejamento",
          description: "Estratégias sob medida que conectam objetivos, recursos e resultados reais.",
          href: "#contato",
        },
        {
          icon: "gear",
          title: "Execução",
          description: "Colocamos o plano em prática com agilidade, clareza e foco no que gera impacto.",
          href: "#contato",
        },
        {
          icon: "chart",
          title: "Acompanhamento",
          description: "Monitoramos resultados, ajustamos caminhos e garantimos evolução contínua.",
          href: "#contato",
        },
      ],
    },
    showcase: {
      eyebrow: "Trabalhos",
      title: "Resultados que falam por si",
      description: "Cada projeto é pensado e desenvolvido com estratégia, cuidado e atenção aos detalhes.",
      cta: { label: "Ver todos", href: "#contato" },
      items: [
        {
          title: "Projeto Horizonte",
          category: "Estratégia · 2026",
          image: "/brand/showcase-1.jpg",
          imageAlt: "Ambiente de trabalho iluminado com mesa de madeira",
        },
        {
          title: "Projeto Aurora",
          category: "Planejamento · 2025",
          image: "/brand/showcase-2.jpg",
          imageAlt: "Mãos assinando documentos sobre a mesa",
        },
        {
          title: "Casa Serena",
          category: "Execução · 2025",
          image: "/brand/showcase-3.jpg",
          imageAlt: "Pátio de concreto com árvore e banco de madeira",
        },
      ],
    },
    benefits: {
      metrics: [
        { value: "98%", label: "clientes satisfeitos" },
        { value: "12+", label: "anos de experiência" },
        { value: "2.400", label: "projetos entregues" },
        { value: "24h", label: "tempo de resposta" },
      ],
      eyebrow: "Por que nós",
      title: "Feito com atenção a cada detalhe",
      image: "/brand/benefits.jpg",
      imageAlt: "Profissional concentrado escrevendo em um caderno",
      items: [
        {
          title: "Qualidade que entrega resultados",
          description: "Padrões elevados em cada etapa, do planejamento à execução.",
        },
        {
          title: "Comunicação clara e próxima",
          description: "Você sabe o que está acontecendo, sempre, com transparência e agilidade.",
        },
        {
          title: "Foco no seu objetivo",
          description: "Soluções pensadas sob medida para gerar valor real para você.",
        },
        {
          title: "Compromisso e confiança",
          description: "Relações duradouras construídas com resultado e respeito.",
        },
      ],
    },
    process: {
      eyebrow: "Como funciona",
      title: "Simples, do primeiro contato à entrega",
      steps: [
        {
          title: "Conversa inicial",
          description: "Entendemos suas necessidades, objetivos e contexto para alinhar expectativas.",
        },
        {
          title: "Proposta clara",
          description: "Apresentamos escopo, prazos e investimento de forma transparente e objetiva.",
        },
        {
          title: "Execução",
          description: "Colocamos o plano em prática com foco em qualidade, prazos e comunicação clara.",
        },
        {
          title: "Acompanhamento",
          description: "Acompanhamos cada etapa, ajustamos o que for preciso e entregamos resultados consistentes.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Depoimentos",
      title: "O que dizem nossos clientes",
      rating: { value: "4,9", label: "média de 380 avaliações" },
      featured: {
        quote:
          "Desde o primeiro contato me senti bem atendida. Profissionalismo, cuidado e resultado de verdade. Recomendo de olhos fechados.",
        name: "Mariana Costa",
        role: "Cliente desde 2021",
        avatar: "/brand/avatar-1.jpg",
      },
      items: [
        {
          quote: "Atendimento excepcional e um serviço que realmente entrega o que promete.",
          name: "Rafael Lima",
          role: "Cliente desde 2022",
          avatar: "/brand/avatar-2.jpg",
        },
        {
          quote: "Processos claros, equipe atenciosa e resultados que fazem diferença no dia a dia.",
          name: "Juliana Prado",
          role: "Cliente desde 2021",
          avatar: "/brand/avatar-3.jpg",
        },
      ],
    },
    contactSection: {
      title: "Vamos conversar sobre o seu projeto?",
      description:
        "Conte o que você precisa. Respondemos rápido, sem compromisso, com os próximos passos bem explicados.",
      form: {
        nameLabel: "Nome",
        namePlaceholder: "Seu nome",
        emailLabel: "E-mail",
        emailPlaceholder: "seu@email.com",
        messageLabel: "Mensagem",
        messagePlaceholder: "Conte um pouco sobre o que você precisa",
        submit: "Enviar mensagem",
        sending: "Enviando",
        successTitle: "Mensagem recebida",
        successText: "Obrigado pelo contato. Retornamos em até 24 horas úteis.",
        requiredError: "Preencha este campo.",
        emailError: "Informe um e-mail válido.",
      },
    },
    footer: {
      tagline: "Atendimento próximo, do primeiro contato ao resultado.",
      columns: [
        {
          title: "Navegação",
          links: [
            { label: "Serviços", href: "#servicos" },
            { label: "Trabalhos", href: "#trabalhos" },
            { label: "Como funciona", href: "#como-funciona" },
            { label: "Depoimentos", href: "#depoimentos" },
          ],
        },
      ],
      copyright: `© 2026 ${name}. Todos os direitos reservados.`,
    },
  };
}
