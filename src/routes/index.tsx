import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";
import heroQuadros from "@/assets/hero-quadros.jpg";
import quadroResidencial from "@/assets/quadro-residencial.jpg";
import quadroIndustrial from "@/assets/quadro-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CBE | Quadros Elétricos Sob Medida em Uberlândia" },
      {
        name: "description",
        content:
          "Corrêa Barbosa Engenharia projeta e monta quadros elétricos sob medida para indústria, comércio e obras em Uberlândia, MG.",
      },
      { property: "og:title", content: "CBE | Quadros Elétricos Sob Medida" },
      {
        property: "og:description",
        content: "Projeto, montagem e entrega de quadros elétricos sob medida. Uberlândia, MG.",
      },
    ],
  }),
  component: Index,
});

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

function Index() {
  return (
    <SiteLayout>
      {/* 1. Hero */}
      <section id="hero" className="relative scroll-mt-20 overflow-hidden border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:py-14 lg:py-20 relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                <span>Corrêa Barbosa Engenharia</span>
              </div>

              <h1 className="font-display text-3xl font-semibold leading-[1.15] text-primary sm:text-5xl lg:text-6xl">
                Cada quadro dimensionado para a carga real da sua instalação
              </h1>

              <p className="max-w-2xl text-sm sm:text-lg text-muted-foreground leading-relaxed">
                Engenharia elétrica de alta precisão sem desperdício de materiais ou erros de especificação. Quadros industriais, comerciais e prediais projetados sob norma em Uberlândia, MG.
              </p>

              {/* 3 badges de credibilidade */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg border border-border bg-background shadow-xs">
                  <p className="text-xs font-bold text-primary">NBR IEC 61439</p>
                  <p className="text-[11px] text-muted-foreground">Conformidade total</p>
                </div>

                <div className="p-3 rounded-lg border border-border bg-background shadow-xs">
                  <p className="text-xs font-bold text-primary">100% Sob Medida</p>
                  <p className="text-[11px] text-muted-foreground">Carga calculada</p>
                </div>

                <div className="p-3 rounded-lg border border-border bg-background shadow-xs">
                  <p className="text-xs font-bold text-primary">Uberlândia & Região</p>
                  <p className="text-[11px] text-muted-foreground">Atendimento técnico</p>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button asChild size="lg" className="h-12 px-6 text-sm font-semibold shadow-md w-full sm:w-auto">
                  <Link to="/quadros-eletricos">
                    Explorar catálogo de quadros
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6 text-sm font-semibold w-full sm:w-auto">
                  <Link to="/orcamento">Solicitar orçamento</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-panel group">
                <img
                  src={heroQuadros}
                  alt="Quadros elétricos montados pela CBE Engenharia"
                  width={1000}
                  height={750}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-90" />

                <div className="absolute bottom-5 left-5 right-5 text-primary-foreground space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand text-brand-foreground text-[11px] font-bold uppercase tracking-wider">
                    Projeto & Montagem
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold leading-snug">
                    Quadros Industriais & de Comando de Alta Performance
                  </h3>
                  <p className="text-xs text-primary-foreground/80">
                    Montagem com anilhamento rigoroso, barramentos dimensionados e suporte pós-partida.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. A Essência da CBE */}
      <section className="scroll-mt-20 border-b border-border bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeInUp} className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border shadow-xs">
                <img
                  src={heroQuadros}
                  alt="Fábrica e equipe CBE Engenharia"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="eyebrow">Quem Somos</span>
              <h2 className="rule-brand font-display text-2xl sm:text-3xl font-semibold text-primary">
                A Essência da CBE
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                A Corrêa Barbosa Engenharia atua no projeto e montagem de quadros elétricos sob medida para os segmentos industrial, comercial e predial. Com sede em Uberlândia, MG, nossa equipe de engenheiros dimensiona cada componente de acordo com a carga real da instalação.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Trabalhamos com rigor técnico em conformidade com as normas NBR IEC 61439, NBR 5410, NR-10 e NR-12, garantindo segurança e eficiência em cada entrega.
              </p>
              <Button asChild variant="outline" className="mt-2 w-full sm:w-auto h-11">
                <Link to="/sobre-nos">
                  Conheça mais sobre a CBE
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Pilares de Serviço */}
      <section className="scroll-mt-20 border-b border-border bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="eyebrow">Serviços</span>
            <h2 className="rule-brand justify-center font-display text-2xl sm:text-3xl font-semibold text-primary">
              Como Trabalhamos
            </h2>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-background p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Projeto Sob Medida</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Cada quadro é dimensionado individualmente a partir do levantamento técnico da instalação: carga real, fator de demanda, corrente de curto-circuito e tipo de partida dos motores.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-background p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Montagem & Testes</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Montagem em fábrica com anilhamento rigoroso, barramentos de cobre eletrolítico dimensionados e testes de continuidade, isolação e funcionamento antes da entrega.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-background p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Suporte Pós-Entrega</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Acompanhamento técnico na instalação, start-up e primeiro funcionamento. Suporte continuado para ajustes, ampliação de circuitos e manutenção preventiva.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Banner CTA */}
      <section className="scroll-mt-20 border-b border-border bg-primary py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-xl sm:text-3xl font-semibold text-primary-foreground">
              Está iniciando um novo projeto elétrico?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-primary-foreground/80 max-w-xl mx-auto">
              Nossa equipe de engenharia está pronta para dimensionar o quadro ideal para a sua instalação. Atendimento direto, sem intermediários.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-sm font-semibold w-full sm:w-auto">
                <Link to="/orcamento">
                  Solicitar orçamento agora
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Teaser de Produtos */}
      <section className="scroll-mt-20 border-b border-border bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="eyebrow">Produtos</span>
            <h2 className="rule-brand justify-center font-display text-2xl sm:text-3xl font-semibold text-primary">
              Quadros Elétricos por Categoria
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
              Projetamos quadros para todos os segmentos. Veja o catálogo completo com fichas técnicas detalhadas.
            </p>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div {...fadeInUp} className="group rounded-xl border border-border bg-surface overflow-hidden shadow-xs transition-all duration-300 hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={quadroResidencial}
                  alt="Quadro residencial e predial"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display text-lg font-semibold text-primary">Residencial & Predial</h3>
                <p className="text-xs text-muted-foreground">
                  Quadros de distribuição para condomínios, residências de alto padrão e edifícios.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="group rounded-xl border border-border bg-surface overflow-hidden shadow-xs transition-all duration-300 hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={quadroIndustrial}
                  alt="Quadro industrial de distribuição"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display text-lg font-semibold text-primary">Industrial & Comando</h3>
                <p className="text-xs text-muted-foreground">
                  QGDs de alta capacidade, CCMs e painéis de automação para indústrias e galpões.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="group rounded-xl border border-border bg-surface overflow-hidden shadow-xs transition-all duration-300 hover:shadow-md sm:col-span-2 lg:col-span-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={heroQuadros}
                  alt="Quadro comercial e de medição"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display text-lg font-semibold text-primary">Comercial & Medição</h3>
                <p className="text-xs text-muted-foreground">
                  Quadros comerciais, de medição agrupada e entrada conforme normas da concessionária.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg" className="h-12 px-8 text-sm font-semibold w-full sm:w-auto">
              <Link to="/quadros-eletricos">
                Ver catálogo completo
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Seção "Por que a CBE não vende quadros prontos" */}
      <section className="scroll-mt-20 border-b border-border bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeInUp} className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="eyebrow">Engenharia Sem Atalhos</span>
              <h2 className="rule-brand font-display text-2xl sm:text-3xl font-semibold text-primary">
                Por que a CBE não vende quadros prontos de prateleira?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Cada instalação possui características únicas: distância da subestação, fator de simultaneidade das cargas, tipo de partida dos motores e nível de corrente de curto-circuito.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Nossos engenheiros projetam cada barramento de cobre, chave seccionadora e dispositivo de proteção sob medida para a sua demanda real, prevenindo aquecimentos indevidos e desarmes indesejados.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-xl border border-border bg-background shadow-xs space-y-1.5">
                <p className="font-display text-2xl sm:text-3xl font-bold text-brand">100%</p>
                <p className="text-xs font-semibold text-primary">Sob Medida</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">Dimensionamento para a carga real do projeto</p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl border border-border bg-background shadow-xs space-y-1.5">
                <p className="font-display text-2xl sm:text-3xl font-bold text-primary">IP54/65</p>
                <p className="text-xs font-semibold text-primary">Proteção Reforçada</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">Invólucros selados contra poeira e umidade</p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl border border-border bg-background shadow-xs space-y-1.5">
                <p className="font-display text-2xl sm:text-3xl font-bold text-primary">NBR 5410</p>
                <p className="text-xs font-semibold text-primary">Normas Vigentes</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">Conformidade total com NR-10 e ABNT</p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl border border-border bg-background shadow-xs space-y-1.5">
                <p className="font-display text-2xl sm:text-3xl font-bold text-brand">Suporte</p>
                <p className="text-xs font-semibold text-primary">Pós-Partida</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">Acompanhamento técnico na entrega e start-up</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
