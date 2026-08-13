import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";
import logoCbe from "@/assets/logo-cbe.png";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
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

const HERO_SLIDES = [
  {
    image: heroSlide3,
    title: "Quadros Industriais & Subestações de Alta Capacidade",
    caption: "Engenharia de painéis autoportantes e distribuição trifásica sob norma NBR IEC 61439.",
  },
  {
    image: heroSlide1,
    title: "Infraestrutura de Energia & Eletromobilidade",
    caption: "Soluções completas para carregadores veiculares WEMOB e infraestrutura de alta potência.",
  },
  {
    image: heroSlide2,
    title: "Sistemas Fotovoltaicos & Energia Limpa",
    caption: "Quadros de proteção AC/DC e integração de usinas solares com máxima segurança.",
  },
  {
    image: heroQuadros,
    title: "Quadros de Distribuição Comercial & Predial",
    caption: "Montagem com anilhamento rigoroso, barramentos dimensionados e suporte pós-partida.",
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SiteLayout>
      {/* 1. Hero com Slideshow de Fotos de Fundo, Logo Centralizada e Sem Badge */}
      <section id="hero" className="relative scroll-mt-20 overflow-hidden bg-slate-950 text-white min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center">
        {/* Carrossel de Fotos de Fundo com Crossfade */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].title}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Camada de Gradiente Escuro para Alta Legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Conteúdo Centralizado do Hero */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Logo da Empresa em Destaque no Centro */}
            <div className="inline-block p-3 sm:p-4 bg-white/95 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20">
              <img
                src={logoCbe}
                alt="Corrêa Barbosa Engenharia"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
              />
            </div>

            {/* Título Principal Sem Badge Acima */}
            <h1 className="font-display text-3xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto tracking-tight">
              Cada quadro dimensionado para a carga real da sua instalação
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-lg text-slate-200 leading-relaxed font-normal">
              Engenharia elétrica de alta precisão sem desperdício de materiais ou erros de especificação. Quadros industriais, comerciais e prediais projetados sob norma em Uberlândia, MG.
            </p>

            {/* Botões de Ação Principais Centrais */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="h-13 px-8 text-sm font-semibold shadow-lg bg-brand text-brand-foreground hover:bg-brand/90 w-full sm:w-auto">
                <Link to="/quadros-eletricos">
                  Ver quadros elétricos
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13 px-8 text-sm font-semibold bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                <Link to="/orcamento">Fazer um orçamento</Link>
              </Button>
            </div>

            {/* Badges de credibilidade em linha discreta */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
              <div className="p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
                <p className="text-xs font-bold text-white">NBR IEC 61439</p>
                <p className="text-[11px] text-slate-300">Conformidade total</p>
              </div>

              <div className="p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
                <p className="text-xs font-bold text-white">100% Sob Medida</p>
                <p className="text-[11px] text-slate-300">Carga calculada</p>
              </div>

              <div className="p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
                <p className="text-xs font-bold text-white">Uberlândia & Região</p>
                <p className="text-[11px] text-slate-300">Atendimento técnico</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Indicadores de Slide e Rolagem */}
        <div className="relative z-10 pb-6 flex items-center justify-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === currentSlide ? "w-8 bg-brand" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
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
