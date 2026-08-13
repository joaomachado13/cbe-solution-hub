import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";
import heroQuadros from "@/assets/hero-quadros.jpg";

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
      <section className="scroll-mt-20 border-b border-border bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
                  src={heroQuadros}
                  alt="Fábrica CBE Engenharia"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="scroll-mt-20 border-b border-border bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="eyebrow">Nossos Princípios</span>
            <h2 className="rule-brand justify-center font-display text-2xl sm:text-3xl font-semibold text-primary">
              Missão, Visão e Valores
            </h2>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-surface p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Missão</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Projetar e entregar quadros elétricos sob medida com excelência técnica, segurança e atendimento personalizado, contribuindo para a eficiência energética das instalações dos nossos clientes.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-surface p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Visão</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Ser referência regional em engenharia de quadros elétricos sob medida, reconhecida pela qualidade técnica, pontualidade nas entregas e compromisso com normas de segurança.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-surface p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Valores</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Rigor técnico, transparência com o cliente, segurança em primeiro lugar, compromisso com prazos e melhoria contínua dos processos de engenharia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Onde Atuamos */}
      <section className="scroll-mt-20 border-b border-border bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

      {/* CTA Final */}
      <section className="scroll-mt-20 bg-primary py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-xl sm:text-3xl font-semibold text-primary-foreground">
              Precisa de um quadro elétrico sob medida?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-primary-foreground/80 max-w-xl mx-auto">
              Fale com nossa equipe de engenharia e receba atendimento técnico personalizado.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-sm font-semibold w-full sm:w-auto">
                <Link to="/contato">
                  Fale conosco
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-sm font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                <Link to="/orcamento">Solicitar orçamento</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
