export const SITE = {
  name: "CBE",
  fullName: "Corrêa Barbosa Engenharia",
  city: "Uberlândia, MG",
  address: "Rua Carmo Gifoni, 951, Uberlândia, MG",
  whatsappNumber: "5534999227667",
  whatsappDisplay: "(34) 99922-7667",
  phoneFixed: "(34) 3225-7667",
  phoneFixedClean: "3432257667",
  email: "contato@cbe.eng.br",
  instagramUrl: "https://www.instagram.com/cbe.eng/",
  instagramHandle: "@cbe.eng",
  whatsappMessage: "Olá! Gostaria de um orçamento de quadros elétricos sob medida.",
} as const;

export const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;
