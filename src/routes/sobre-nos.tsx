import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";
import bancadaMontagemFabrica from "@/assets/cbe/bancada-montagem-fabrica.jpg";
import bgArcoBrand from "@/assets/cbe/bg-arco-brand.png";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title: "Sobre Nós | CBE — Corrêa Barbosa Engenharia" },
      {
        name: "description",
        content:
          "Conheça a história, missão e valores da Corrêa Barbosa Engenharia. Quadros elétricos sob medida em Uberlândia, MG.",
      },
    ],
  }),
  component: SobreNos,
});

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

function SobreNos() {
  return (
    <SiteLayout>
      {/* Hero da página */}
      <section className="relative overflow-hidden scroll-mt-20 border-b border-border bg-surface pt-24 sm:pt-28 pb-12 sm:pb-16">
        {/* Marca D'água Sutil com o Arco da Marca CBE */}
        <div className="absolute -right-24 top-0 w-96 sm:w-[600px] opacity-[0.08] pointer-events-none select-none z-0">
          <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeInUp} className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="eyebrow">Institucional</span>
              <h1 className="rule-brand font-display text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
                Sobre a Corrêa Barbosa Engenharia
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                A CBE nasceu da necessidade de oferecer soluções elétricas sob medida para instalações que não podem depender de quadros genéricos. Com atuação em Uberlândia e região, projetamos e montamos quadros elétricos industriais, comerciais e prediais dimensionados para a carga real de cada cliente.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Nossa equipe de engenheiros trabalha com rigor técnico, garantindo conformidade com as normas NBR IEC 61439, NBR 5410, NR-10 e NR-12 em cada projeto entregue.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border shadow-xs">
                <img
                  src={bancadaMontagemFabrica}
                  alt="Bancada de montagem da fábrica CBE Engenharia"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Missão e Valores com Card Azul em Destaque */}
      <section className="scroll-mt-20 border-b border-border bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-left mb-8 sm:mb-10">
            <span className="eyebrow">Diretrizes</span>
            <h2 className="rule-brand font-display text-2xl sm:text-3xl font-semibold text-primary">
              Nossa Filosofia de Trabalho
            </h2>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {/* Card Azul Em Destaque */}
            <motion.div {...fadeInUp} className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-6 shadow-xl border border-primary/30 flex flex-col justify-between">
              <div className="absolute -right-10 -bottom-10 w-48 opacity-15 pointer-events-none">
                <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
              </div>
              <div className="relative z-10 space-y-3">
                <div className="w-fit p-3 rounded-lg bg-white/10 text-white backdrop-blur-md">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Engenharia Rigorosa</h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  Não utilizamos peças genéricas. Cada barramento e componente é dimensionado para suportar correntes de pico com total segurança.
                </p>
              </div>
              <div className="relative z-10 pt-4 mt-4 border-t border-white/20 text-xs font-semibold text-white/80">
                100% Norma ABNT
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-2xl border border-border bg-surface p-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-fit p-3 rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="size-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary">Transparência & Entrega</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Projetos detalhados e acompanhamento direto do cliente do primeiro desenho até os testes finais de bancada.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border text-xs font-semibold text-primary">
                Acompanhamento Direto
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-2xl border border-border bg-surface p-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-fit p-3 rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="size-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary">Suporte Técnico Real</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Assistência continuada durante a instalação em campo, start-up e dúvidas operacionais do eletricista ou engenheiro.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border text-xs font-semibold text-primary">
                Atendimento em Uberlândia & Região
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Onde Atuamos */}
      <section className="relative overflow-hidden scroll-mt-20 border-b border-border bg-surface py-12 sm:py-16">
        {/* Elemento de Fundo — Arco da Marca Invertido */}
        <div className="absolute -left-20 -bottom-10 w-96 sm:w-[600px] opacity-[0.08] pointer-events-none select-none z-0 rotate-180">
          <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-left mb-8 sm:mb-10">
            <span className="eyebrow">Segmentos</span>
            <h2 className="rule-brand font-display text-2xl sm:text-3xl font-semibold text-primary">
              Onde Atuamos
            </h2>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              A CBE atende diversos segmentos com soluções elétricas dimensionadas para cada tipo de operação.
            </p>
          </motion.div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-background p-5 shadow-xs">
              <h3 className="font-display text-lg font-semibold text-primary">Indústria</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Quadros de distribuição, comando de motores e automação para plantas industriais.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-background p-5 shadow-xs">
              <h3 className="font-display text-lg font-semibold text-primary">Comércio</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Quadros para lojas, supermercados, clínicas, escritórios e centros empresariais.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-background p-5 shadow-xs">
              <h3 className="font-display text-lg font-semibold text-primary">Residencial de Alto Padrão</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Distribuição e proteção para condomínios, casas e edifícios residenciais.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-background p-5 shadow-xs">
              <h3 className="font-display text-lg font-semibold text-primary">Infraestrutura</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Quadros de medição, entrada de serviço e adequação a normas da concessionária.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final em Card Azul com Botões 100% Visíveis e Nítidos */}
      <section className="relative overflow-hidden scroll-mt-20 bg-primary py-14 sm:py-16 text-white border-y border-primary-foreground/10">
        {/* Marca d'água no fundo do card azul */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-96 sm:w-[650px] opacity-15 pointer-events-none select-none z-0">
          <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div {...fadeInUp} className="space-y-4">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Precisa de um quadro elétrico sob medida?
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-normal">
              Fale com nossa equipe de engenharia e receba atendimento técnico personalizado para o seu projeto.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-sm font-bold bg-white text-primary hover:bg-slate-100 shadow-lg w-full sm:w-auto">
                <Link to="/contato">
                  Fale conosco
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="h-12 px-8 text-sm font-bold bg-brand text-brand-foreground hover:bg-brand/90 shadow-lg w-full sm:w-auto">
                <Link to="/orcamento">Solicitar orçamento agora</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
