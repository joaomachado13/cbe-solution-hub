import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-medium text-whatsapp-foreground shadow-panel transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
