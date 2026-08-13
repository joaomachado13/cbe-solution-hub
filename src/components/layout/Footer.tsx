import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons/BrandIcons";
import { SITE, whatsappHref } from "@/lib/site";
import logoCbe from "@/assets/logo-cbe.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t-4 border-brand bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Link
            to="/"
            className="inline-block rounded-md bg-white p-2.5 shadow-sm transition-opacity hover:opacity-95"
          >
            <img
              src={logoCbe}
              alt="Correa Barbosa Engenharia"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
            Projeto e montagem de quadros eletricos sob medida para industria, comercio e obras.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest">Navegacao</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/" className="hover:text-primary-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre-nos" className="hover:text-primary-foreground">
                Sobre Nos
              </Link>
            </li>
            <li>
              <Link to="/quadros-eletricos" className="hover:text-primary-foreground">
                Quadros Eletricos
              </Link>
            </li>
            <li>
              <Link to="/orcamento" className="hover:text-primary-foreground">
                Orcamento
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
          <p className="text-sm font-semibold uppercase tracking-widest">Atendimento e Redes</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-primary-foreground/80">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{SITE.address}</span>
          </p>
          <div className="mt-4 flex flex-col items-start gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary-foreground/15 px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="size-4" />
              Falar no WhatsApp
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              <InstagramIcon className="size-4" />
              <span>Instagram: {SITE.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-primary-foreground/60 sm:px-6">
          {new Date().getFullYear()} {SITE.fullName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
