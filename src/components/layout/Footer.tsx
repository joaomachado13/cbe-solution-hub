import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle } from "lucide-react";
import { SITE, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t-4 border-brand bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">CBE</p>
          <p className="mt-1 text-sm text-primary-foreground/80">{SITE.fullName}</p>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Projeto e montagem de quadros elétricos sob medida para indústria, comércio e obras.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/" className="hover:text-primary-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link to="/quadros-eletricos" className="hover:text-primary-foreground">
                Quadros Elétricos
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-primary-foreground">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest">Atendimento</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/80">
            <MapPin className="size-4" aria-hidden="true" />
            {SITE.city}
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-whatsapp px-4 py-2 text-sm font-medium text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-primary-foreground/60 sm:px-6">
          © {new Date().getFullYear()} {SITE.fullName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
