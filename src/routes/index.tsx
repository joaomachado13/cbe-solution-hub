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
      { title: "CBE | Quadros Eletricos Sob Medida em Uberlandia" },
      {
        name: "description",
        content:
          "Correa Barbosa Engenharia projeta e monta quadros eletricos sob medida para industria, comercio e obras em Uberlandia, MG.",
      },
      { property: "og:title", content: "CBE | Quadros Eletricos Sob Medida" },
      {
        property: "og:description",
        content: "Projeto, montagem e entrega de quadros eletricos sob medida. Uberlandia, MG.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* 1. Hero */}
      <section id="hero" className="relative scroll-mt-20 overflow-hidden border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-20 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                <span>Correa Barbosa Engenharia</span>
              </div>

              <h1 className="font-display text-4xl font-semibold leading-[1.1] text-primary sm:text-5xl lg:text-6xl">
                Cada quadro dimensionado para a carga real da sua instalacao
              </h1>

              <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Engenharia eletrica de alta precisao sem desperdicio de materiais ou erros de especificacao. Quadros industriais, comerciais e prediais projetados sob norma em Uberlandia, MG.
              </p>

              {/* 3 badges de credibilidade */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg border border-border bg-background shadow-xs">
                  <p className="text-xs font-bold text-primary">NBR IEC 61439</p>
                  <p className="text-[11px] text-muted-foreground">Conformidade total</p>
                </div>

                <div className="p-3 rounded-lg border border-border bg-background shadow-xs">
                  <p className="text-xs font-bold text-primary">100% Sob Medida</p>
                  <p className="text-[11px] text-muted-foreground">Carga calculada</p>
                </div>

                <div className="col-span-2 sm:col-span-1 p-3 rounded-lg border border-border bg-background shadow-xs">
                  <p className="text-xs font-bold text-primary">Uberlandia e Regiao</p>
                  <p className="text-[11px] text-muted-foreground">Atendimento tecnico</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="h-12 px-6 text-sm font-semibold shadow-md">
                  <Link to="/quadros-eletricos">
                    Ver catalogo de quadros
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6 text-sm font-semibold">
                  <Link to="/orcamento">Solicitar orcamento</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-panel group">
                <img
                  src={heroQuadros}
                  alt="Quadros eletricos montados pela CBE Engenharia"
                  width={1000}
                  height={750}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-90" />

                <div className="absolute bottom-6 left-6 right-6 text-primary-foreground space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand text-brand-foreground text-[11px] font-bold uppercase tracking-wider">
                    Projeto e Montagem
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-snug">
                    Quadros Industriais e de Comando de Alta Performance
                  </h3>
                  <p className="text-xs text-primary-foreground/80">
                    Montagem com anilhamento rigoroso, barramentos dimensionados e suporte pos-partida.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. A Essencia da CBE */}
      <section className="scroll-mt-20 border-b border-border bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border shadow-xs">
                <img
                  src={heroQuadros}
                  alt="Fabrica e equipe CBE Engenharia"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="eyebrow">Quem Somos</span>
              <h2 className="rule-brand font-display text-3xl font-semibold text-primary sm:text-4xl">
                A Essencia da CBE
              </h2>
              {/* PLACEHOLDER — substituir pelo texto real da empresa */}
              <p className="text-base text-muted-foreground leading-relaxed">
                A Correa Barbosa Engenharia atua no projeto e montagem de quadros eletricos sob medida para os segmentos industrial, comercial e predial. Com sede em Uberlandia, MG, nossa equipe de engenheiros dimensiona cada componente de acordo com a carga real da instalacao.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trabalhamos com rigor tecnico em conformidade com as normas NBR IEC 61439, NBR 5410, NR-10 e NR-12, garantindo seguranca e eficiencia em cada entrega.
              </p>
              <Button asChild variant="outline" className="mt-2">
                <Link to="/sobre-nos">
                  Conheca mais sobre a CBE
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pilares de Servico */}
      <section className="scroll-mt-20 border-b border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">Servicos</span>
            <h2 className="rule-brand justify-center font-display text-3xl font-semibold text-primary sm:text-4xl">
              Como Trabalhamos
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Projeto Sob Medida</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Cada quadro e dimensionado individualmente a partir do levantamento tecnico da instalacao: carga real, fator de demanda, corrente de curto-circuito e tipo de partida dos motores.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Montagem e Testes</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Montagem em fabrica com anilhamento rigoroso, barramentos de cobre eletrolítico dimensionados e testes de continuidade, isolacao e funcionamento antes da entrega.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Suporte Pos-Entrega</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Acompanhamento tecnico na instalacao, start-up e primeiro funcionamento. Suporte continuado para ajustes, ampliacao de circuitos e manutencao preventiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Banner CTA */}
      <section className="scroll-mt-20 border-b border-border bg-primary py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-semibold text-primary-foreground sm:text-3xl">
            Esta iniciando um novo projeto eletrico?
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/80 max-w-xl mx-auto">
            Nossa equipe de engenharia esta pronta para dimensionar o quadro ideal para a sua instalacao. Atendimento direto, sem intermediarios.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-sm font-semibold">
              <Link to="/orcamento">
                Solicitar orcamento agora
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Teaser de Produtos */}
      <section className="scroll-mt-20 border-b border-border bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">Produtos</span>
            <h2 className="rule-brand justify-center font-display text-3xl font-semibold text-primary sm:text-4xl">
              Quadros Eletricos por Categoria
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Projetamos quadros para todos os segmentos. Veja o catalogo completo com fichas tecnicas detalhadas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-xl border border-border bg-surface overflow-hidden shadow-xs transition-all duration-300 hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={quadroResidencial}
                  alt="Quadro residencial e predial"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display text-lg font-semibold text-primary">Residencial e Predial</h3>
                <p className="text-xs text-muted-foreground">
                  Quadros de distribuicao para condominios, residencias de alto padrao e edificios.
                </p>
              </div>
            </div>

            <div className="group rounded-xl border border-border bg-surface overflow-hidden shadow-xs transition-all duration-300 hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={quadroIndustrial}
                  alt="Quadro industrial de distribuicao"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display text-lg font-semibold text-primary">Industrial e Comando</h3>
                <p className="text-xs text-muted-foreground">
                  QGDs de alta capacidade, CCMs e paineis de automacao para industrias e galpoes.
                </p>
              </div>
            </div>

            <div className="group rounded-xl border border-border bg-surface overflow-hidden shadow-xs transition-all duration-300 hover:shadow-md sm:col-span-2 lg:col-span-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={heroQuadros}
                  alt="Quadro comercial e de medicao"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display text-lg font-semibold text-primary">Comercial e Medicao</h3>
                <p className="text-xs text-muted-foreground">
                  Quadros comerciais, de medicao agrupada e entrada conforme normas da concessionaria.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg" className="h-12 px-8 text-sm font-semibold">
              <Link to="/quadros-eletricos">
                Ver catalogo completo
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Secao "Por que a CBE nao vende quadros prontos" (mantida do original) */}
      <section className="scroll-mt-20 border-b border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="eyebrow">Engenharia Sem Atalhos</span>
              <h2 className="rule-brand font-display text-3xl font-semibold text-primary sm:text-4xl">
                Por que a CBE nao vende quadros prontos de prateleira?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Cada instalacao possui caracteristicas unicas: distancia da subestacao, fator de simultaneidade das cargas, tipo de partida dos motores e nivel de corrente de curto-circuito.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nossos engenheiros projetam cada barramento de cobre, chave seccionadora e dispositivo de protecao sob medida para a sua demanda real, prevenindo aquecimentos indevidos e desarmes indesejados.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-border bg-background shadow-xs space-y-2">
                <p className="font-display text-3xl font-bold text-brand">100%</p>
                <p className="text-xs font-semibold text-primary">Sob Medida</p>
                <p className="text-xs text-muted-foreground">Dimensionamento para a carga real do projeto</p>
              </div>

              <div className="p-5 rounded-xl border border-border bg-background shadow-xs space-y-2">
                <p className="font-display text-3xl font-bold text-primary">IP54/65</p>
                <p className="text-xs font-semibold text-primary">Protecao Reforcada</p>
                <p className="text-xs text-muted-foreground">Involucros selados contra poeira e umidade</p>
              </div>

              <div className="p-5 rounded-xl border border-border bg-background shadow-xs space-y-2">
                <p className="font-display text-3xl font-bold text-primary">NBR 5410</p>
                <p className="text-xs font-semibold text-primary">Normas Vigentes</p>
                <p className="text-xs text-muted-foreground">Conformidade total com NR-10 e ABNT</p>
              </div>

              <div className="p-5 rounded-xl border border-border bg-background shadow-xs space-y-2">
                <p className="font-display text-3xl font-bold text-brand">Suporte</p>
                <p className="text-xs font-semibold text-primary">Pos-Partida</p>
                <p className="text-xs text-muted-foreground">Acompanhamento tecnico na entrega e start-up</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
