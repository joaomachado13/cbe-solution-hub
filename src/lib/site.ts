export const SITE = {
  name: "CBE",
  fullName: "Corrêa Barbosa Engenharia",
  city: "Uberlândia, MG",
  cityState: "Uberlândia - MG, 38400-358",
  address: "R. Carmo Gifoni, 951 - Martins",
  addressFull: "R. Carmo Gifoni, 951 - Martins, Uberlândia - MG, 38400-358",
  latitude: -18.90885250055721,
  longitude: -48.28446542694554,
  whatsappNumber: "5534999227667",
  whatsappNumberFormatted: "(34) 99922-7667",
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
