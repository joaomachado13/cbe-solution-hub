import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons/BrandIcons";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SITE, whatsappHref } from "@/lib/site";
import bgArcoBrand from "@/assets/cbe/bg-arco-brand.png";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | CBE — Canais de Atendimento" },
      {
        name: "description",
        content:
          "Entre em contato com a Corrêa Barbosa Engenharia por WhatsApp, telefone, e-mail ou Instagram. Uberlândia, MG.",
      },
    ],
  }),
  component: Contato,
});

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

function Contato() {
  return (
    <SiteLayout>
      {/* Canais de Contato */}
      <section className="relative overflow-hidden scroll-mt-20 border-b border-border bg-background pt-24 sm:pt-28 pb-12 sm:pb-16">
        {/* Elemento de Fundo — Arco da Marca CBE */}
        <div className="absolute -right-16 -top-10 w-96 sm:w-[650px] opacity-[0.09] pointer-events-none select-none z-0">
          <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-left mb-8 sm:mb-10">
            <span className="eyebrow">Atendimento Direto</span>
            <h1 className="rule-brand font-display text-3xl font-semibold text-primary sm:text-4xl">
              Canais de Contato da Engenharia
            </h1>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Fale diretamente com nossos engenheiros por WhatsApp, telefone fixo ou e-mail técnico.
            </p>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div {...fadeInUp} className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md">
              <div className="space-y-3">
                <div className="w-fit p-3 rounded-lg bg-primary/10 text-primary">
                  <WhatsAppIcon className="size-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-semibold text-primary">WhatsApp Engenharia</h3>
                  <p className="text-xs text-muted-foreground">Atendimento direto e envio de arquivos</p>
                </div>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-3 text-sm font-semibold text-primary hover:underline"
              >
                {SITE.whatsappNumberFormatted}
              </a>
            </motion.div>

            <motion.div {...fadeInUp} className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md">
              <div className="space-y-3">
                <div className="w-fit p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-semibold text-primary">Telefone Fixo</h3>
                  <p className="text-xs text-muted-foreground">Atendimento em horário comercial</p>
                </div>
              </div>
              <a
                href={`tel:${SITE.phoneFixedClean}`}
                className="inline-block pt-3 text-sm font-semibold text-primary hover:underline"
              >
                {SITE.phoneFixed}
              </a>
            </motion.div>

            <motion.div {...fadeInUp} className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md">
              <div className="space-y-3">
                <div className="w-fit p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-semibold text-primary">E-mail Técnico</h3>
                  <p className="text-xs text-muted-foreground">Propostas e envio de especificações</p>
                </div>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-block pt-3 text-sm font-semibold text-primary hover:underline"
              >
                {SITE.email}
              </a>
            </motion.div>

            <motion.div {...fadeInUp} className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md">
              <div className="space-y-3">
                <div className="w-fit p-3 rounded-lg bg-primary/10 text-primary">
                  <InstagramIcon className="size-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-semibold text-primary">Instagram</h3>
                  <p className="text-xs text-muted-foreground">Projetos recentes e montagens</p>
                </div>
              </div>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-3 text-sm font-semibold text-primary hover:underline"
              >
                {SITE.instagramHandle}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Localização e Matriz */}
      <section className="relative overflow-hidden scroll-mt-20 border-b border-border bg-surface py-12 sm:py-16">
        {/* Elemento de Fundo — Arco da Marca Invertido */}
        <div className="absolute -left-20 -bottom-10 w-96 sm:w-[600px] opacity-[0.08] pointer-events-none select-none z-0 rotate-180">
          <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeInUp} className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="eyebrow">Localização da Fábrica</span>
              <h2 className="rule-brand font-display text-2xl sm:text-3xl font-semibold text-primary">
                Nossa Matriz em Uberlândia
              </h2>
              <div className="flex items-start gap-3 pt-2 text-sm text-muted-foreground">
                <MapPin className="size-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{SITE.addressFull}</p>
                  <p className="mt-1 text-xs">{SITE.cityState}</p>
                  <p className="mt-2 text-xs text-muted-foreground">Atendimento com horário agendado para projetos industriais e comerciais.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl border border-border shadow-xs bg-background h-[320px] relative">
                <iframe
                  title="Mapa de Localização da CBE Engenharia em Uberlândia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.283189914447!2d-48.2435!3d-18.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzA3LjAiUyA0OMKwMTQnMzYuNiJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
