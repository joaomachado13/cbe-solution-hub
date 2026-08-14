import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";

import fabricaLinhaQuadros from "@/assets/cbe/fabrica-linha-quadros.jpg";
import quadroAutoportanteCcm from "@/assets/cbe/quadro-autoportante-ccm.jpg";
import anilhamentoBornesTecnico from "@/assets/cbe/anilhamento-bornes-tecnico.jpg";
import painelSinaleirasComando from "@/assets/cbe/painel-sinaleiras-comando.jpg";
import bancadaMontagemFabrica from "@/assets/cbe/bancada-montagem-fabrica.jpg";
import quadroQdfResidencialReal from "@/assets/cbe/quadro-qdf-residencial-real.jpg";
import quadroComercialBarramento from "@/assets/cbe/quadro-comercial-barramento.jpg";

import bgArcoBrand from "@/assets/cbe/bg-arco-brand.png";

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

const HERO_SLIDES = [
  {
    image: fabricaLinhaQuadros,
    tag: "Painéis Industriais",
    title: "Quadros Industriais & Subestações de Alta Capacidade",
    caption: "Engenharia de painéis autoportantes e distribuição trifásica sob norma NBR IEC 61439.",
  },
  {
    image: quadroAutoportanteCcm,
    tag: "Automação & CCM",
    title: "Comando de Motores & Automação com Soft Starters",
    caption: "Painéis autoportantes com inversores de frequência e proteção dedicada Siemens/Schneider.",
  },
  {
    image: anilhamentoBornesTecnico,
    tag: "Padrão de Montagem",
    title: "Anilhamento Rigoroso & Organização de Fiação",
    caption: "Identificação numérica e bornes organizados em canaletas com tampa perfurada.",
  },
  {
    image: painelSinaleirasComando,
    tag: "Comando e Sinalização",
    title: "Quadros Comerciais & Painéis de Sinalização",
    caption: "Sinalização de energização por sinaleiras LED e seletores de comando.",
  },
  {
    image: quadroComercialBarramento,
    tag: "Barramentos de Cobre",
    title: "Distribuição Trifásica & Barramentos Eletrolíticos",
    caption: "Barramentos dimensionados para capacidade térmica e corrente de curto-circuito.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <SiteLayout>
      {/* 1. Hero Padrão: Layout em 2 Colunas com Showcase de Fotos Reais da CBE */}
      <section id="hero" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-surface via-background to-background py-10 sm:py-14 lg:py-18 border-b border-border">
        {/* Marca d'água técnica de fundo */}
        <div className="absolute right-0 top-0 w-96 sm:w-[500px] opacity-5 pointer-events-none select-none z-0">
          <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            {/* Coluna Esquerda: Texto de Apresentação e Chamadas de Ação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary w-fit mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                Engenharia de Painéis & Quadros Elétricos
              </div>

              <h1 className="font-display text-3xl font-bold leading-[1.14] text-foreground sm:text-4xl lg:text-[2.75rem] tracking-tight">
                Cada quadro dimensionado para a <span className="text-primary underline decoration-brand decoration-4 underline-offset-4">carga real</span> da sua instalação
              </h1>

              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Engenharia elétrica de alta precisão sem desperdício de materiais ou erros de especificação. Projetamos e montamos quadros industriais, comerciais e prediais sob normas NBR em Uberlândia, MG.
              </p>

              {/* Botões de Ação */}
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <Button asChild size="lg" className="h-12 px-7 text-sm font-semibold shadow-xs bg-brand text-brand-foreground hover:bg-brand/90">
                  <Link to="/quadros-eletricos">
                    Ver quadros elétricos
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-7 text-sm font-semibold border-border hover:bg-accent hover:text-accent-foreground">
                  <Link to="/orcamento">Fazer um orçamento</Link>
                </Button>
              </div>

              {/* Indicadores de Confiabilidade / Diferenciais Técnicos */}
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-3">
                <div>
                  <div className="text-xs font-semibold text-primary flex items-center gap-1">
                    <ShieldCheck className="size-3.5 text-brand" />
                    NBR IEC 61439
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Conformidade e NR-10</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary flex items-center gap-1">
                    <CheckCircle2 className="size-3.5 text-brand" />
                    100% Testados
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Ensaios em bancada</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary flex items-center gap-1">
                    <CheckCircle2 className="size-3.5 text-brand" />
                    Sob Medida
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Uberlândia e região</div>
                </div>
              </div>
            </motion.div>

            {/* Coluna Direita: Showcase com Fotos Reais da Fábrica CBE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 xl:col-span-6"
            >
              <div className="relative rounded-2xl border border-border bg-card shadow-md overflow-hidden group">
                
                {/* Visualizador de Fotos */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-950">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={HERO_SLIDES[currentSlide].image}
                        alt={HERO_SLIDES[currentSlide].title}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Tag Superior: Fotos Reais */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-md bg-slate-950/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white border border-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {HERO_SLIDES[currentSlide].tag}
                  </div>

                  {/* Botões de Navegação Anterior / Próximo */}
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Foto anterior"
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 size-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-opacity opacity-70 hover:opacity-100"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Próxima foto"
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 size-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-opacity opacity-70 hover:opacity-100"
                  >
                    <ChevronRight className="size-4" />
                  </button>

                  {/* Gradiente e Legenda Técnica no Rodapé da Foto */}
                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 sm:p-5 pt-10 text-white">
                    <h3 className="font-display text-sm sm:text-base font-semibold text-white">
                      {HERO_SLIDES[currentSlide].title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      {HERO_SLIDES[currentSlide].caption}
                    </p>
                  </div>
                </div>

                {/* Barra Inferior com Indicadores de Foto e Rótulo */}
                <div className="flex items-center justify-between px-4 py-3 bg-surface border-t border-border text-xs">
                  <span className="font-medium text-muted-foreground text-[11px]">
                    Fotos reais da fábrica e montagens CBE
                  </span>

                  {/* Indicadores / Dots */}
                  <div className="flex items-center gap-1.5">
                    {HERO_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentSlide ? "w-5 bg-brand" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                        }`}
                        aria-label={`Ir para foto ${i + 1}`}
                      />
                    ))}
                  </div>
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
                  src={bancadaMontagemFabrica}
                  alt="Bancada de montagem na fábrica CBE Engenharia"
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
      <section className="relative overflow-hidden scroll-mt-20 border-b border-border bg-surface py-12 sm:py-16">
        {/* Elemento de Fundo — Arco da Marca CBE */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 sm:w-[580px] opacity-[0.08] pointer-events-none select-none z-0 rotate-180">
          <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="eyebrow">Serviços</span>
            <h2 className="rule-brand justify-center font-display text-2xl sm:text-3xl font-semibold text-primary">
              Como Trabalhamos
            </h2>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-background p-6 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-primary">Projeto Sob Medida</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Cada quadro é dimensionado individualmente a partir do levantamento técnico da instalação: carga real, fator de demanda, corrente de curto-circuito e tipo de partida dos motores.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-background p-6 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-primary">Montagem & Testes</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Montagem em fábrica com anilhamento rigoroso, barramentos de cobre eletrolítico dimensionados e testes de continuidade, isolação e funcionamento antes da entrega.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-xl border border-border bg-background p-6 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-primary">Suporte Pós-Entrega</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Acompanhamento técnico na instalação, start-up e primeiro funcionamento. Suporte continuado para ajustes, ampliação de circuitos e manutenção preventiva.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Banner CTA em Azul Oficial com Botões Nítidos */}
      <section className="relative overflow-hidden scroll-mt-20 border-b border-border bg-primary py-14 sm:py-16 text-white">
        {/* Marca d'água do Arco da Marca */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-96 sm:w-[650px] opacity-15 pointer-events-none select-none z-0">
          <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div {...fadeInUp} className="space-y-4">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Está iniciando um novo projeto elétrico?
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-normal">
              Nossa equipe de engenharia está pronta para dimensionar o quadro ideal para a sua instalação. Atendimento direto, sem intermediários.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-sm font-bold bg-white text-primary hover:bg-slate-100 shadow-lg w-full sm:w-auto">
                <Link to="/contato">
                  Fale com a Engenharia
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
                  src={quadroQdfResidencialReal}
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
                  src={quadroAutoportanteCcm}
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
                  src={quadroComercialBarramento}
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
      <section className="relative overflow-hidden scroll-mt-20 border-b border-border bg-surface py-12 sm:py-16">
        {/* Marca D'água Sutil com o Arco da Marca CBE */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 sm:w-[550px] opacity-[0.06] pointer-events-none select-none z-0">
          <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
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
