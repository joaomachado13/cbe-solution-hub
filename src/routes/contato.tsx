import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionPlaceholder } from "@/components/layout/SectionPlaceholder";
import { SITE, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e orçamento | CBE" },
      {
        name: "description",
        content:
          "Solicite um orçamento de quadros elétricos sob medida com a Corrêa Barbosa Engenharia. Atendimento por formulário ou WhatsApp em Uberlândia, MG.",
      },
      { property: "og:title", content: "Contato e orçamento | CBE" },
      {
        property: "og:description",
        content: "Fale com a CBE por formulário ou WhatsApp e receba um orçamento sob medida.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="eyebrow">Fale com a CBE</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-5xl">
            Solicitar orçamento
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            Envie os dados da sua instalação e retornamos com uma proposta. Se preferir, fale
            direto pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-3 text-sm font-medium text-whatsapp-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-brand" aria-hidden="true" />
              {SITE.city}
            </span>
          </div>
        </div>
      </section>

      <SectionPlaceholder
        title="Formulário de orçamento"
        note="O formulário será implementado na próxima etapa, com envio e armazenamento das solicitações."
      />
    </SiteLayout>
  );
}
