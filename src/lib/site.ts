export const SITE = {
  name: "CBE",
  fullName: "Corrêa Barbosa Engenharia",
  city: "Uberlândia, MG",
  whatsappNumber: "5534999999999",
  whatsappMessage: "Olá! Gostaria de um orçamento de quadros elétricos sob medida.",
} as const;

export const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;
