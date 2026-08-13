import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import quadroQdfResidencialReal from "@/assets/cbe/quadro-qdf-residencial-real.jpg";
import quadroComercialBarramento from "@/assets/cbe/quadro-comercial-barramento.jpg";
import fabricaLinhaQuadros from "@/assets/cbe/fabrica-linha-quadros.jpg";
import quadroAutoportanteCcm from "@/assets/cbe/quadro-autoportante-ccm.jpg";
import painelSinaleirasComando from "@/assets/cbe/painel-sinaleiras-comando.jpg";

export interface ProductModel {
  id: "residencial" | "comercial" | "industrial" | "qcm" | "medicao";
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  specs: {
    tensao: string;
    correnteMax: string;
    protecao: string;
    normas: string;
    barramento: string;
    aplicacao: string;
  };
  features: string[];
}

const PRODUCTS: ProductModel[] = [
  {
    id: "residencial",
    title: "Quadro Residencial / Predial (QDF)",
    subtitle: "Distribuição e proteção para condomínios e residências de médio e alto padrão",
    description:
      "Quadros de distribuição de luz e força dimensionados sob medida para garantir total segurança aos circuitos residenciais, com barramento neutro/terra isolado e disposição intuitiva de disjuntores DIN.",
    image: quadroQdfResidencialReal,
    tag: "Sob Medida • Residencial",
    specs: {
      tensao: "127V / 220V (Monofásico, Bifásico ou Trifásico)",
      correnteMax: "Até 125A",
      protecao: "IP40 / IP54 (Embutir ou Sobrepor)",
      normas: "NBR 5410 & NBR IEC 61439-1/3",
      barramento: "Cobre eletrolítico 99,9% com pintura isolante",
      aplicacao: "Casas, apartamentos, edifícios residenciais e pequenos comércios",
    },
    features: [
      "Proteção contra surtos (DPS) e choques elétricos (DR)",
      "Acabamento estético slim com porta de proteção",
      "Identificação legível e anilhamento de todos os condutores",
      "Reserva de espaço para futura expansão de circuitos",
    ],
  },
  {
    id: "comercial",
    title: "Quadro Comercial de Distribuição",
    subtitle: "Solução robusta para lojas, supermercados, escritórios e centros empresariais",
    description:
      "Desenvolvido para operar continuamente sob carga intermediária, prevendo divisão estratégica de circuitos para iluminação, climatização, informática e tomada para equipamentos especiais.",
    image: quadroComercialBarramento,
    tag: "Comercial • Alta Eficiência",
    specs: {
      tensao: "220V / 380V Trifásico + Neutro",
      correnteMax: "Até 400A",
      protecao: "IP54 (Invólucro metálico tratado com pintura epóxi)",
      normas: "NBR 5410 & NR-10",
      barramento: "Barramento blindado de cobre com identificação de fases",
      aplicacao: "Lojas de shopping, supermercados, clínicas e escritórios",
    },
    features: [
      "Medição digital de consumo por setor (opcional)",
      "Sistema de chave reversora para gerador / rede principal",
      "Organização em canaletas de fiação com tampa perfurada",
      "Sinalização de energização das fases por sinaleiras LED",
    ],
  },
  {
    id: "industrial",
    title: "Quadro de Distribuição Industrial (QGD)",
    subtitle: "Poderosa central de distribuição trifásica de alta capacidade para indústrias",
    description:
      "Quadros autoportantes ou de parede fabricados sob rigorosas especificações industriais. Suportam altas correntes de curto-circuito e grandes variações térmicas e operacionais.",
    image: fabricaLinhaQuadros,
    tag: "Industrial • Alta Capacidade",
    specs: {
      tensao: "220V / 380V / 440V Trifásico",
      correnteMax: "Até 2.500A",
      protecao: "IP55 / IP65 NEMA 4X",
      normas: "NBR IEC 61439-1 & NR-10",
      barramento: "Cobre estanhado dimensionado com cálculo térmico de barramento",
      aplicacao: "Indústrias farmacêuticas, têxteis, alimentícias e galpões",
    },
    features: [
      "Disjuntores em caixa moldada e disjuntores abertos motorizados",
      "Proteção seletiva ajustável de curto-circuito e sobrecarga",
      "Exaustão forçada com filtro antipoeira e termostato",
      "Tratamento anticorrosivo em chapa de aço eletrogalvanizada",
    ],
  },
  {
    id: "qcm",
    title: "Quadro de Comando de Motores (QCM / CCM)",
    subtitle: "Automação, partida suave e proteção dedicada para motores elétricos",
    description:
      "Painéis especializados para partida direta, estrela-triângulo, soft-starters e inversores de frequência. Garantem redução de picos de corrente na rede e controle total de processos.",
    image: quadroAutoportanteCcm,
    tag: "Automação • Comando Elétrico",
    specs: {
      tensao: "220V / 380V / 440V Trifásico",
      correnteMax: "Personalizada conforme motores",
      protecao: "IP54 / IP65 com IHM na porta",
      normas: "NR-12, NR-10 & NBR IEC 60947",
      barramento: "Cobre com isolação e seccionador de segurança",
      aplicacao: "Sistemas de bombeamento, compressores, exaustores e esteiras",
    },
    features: [
      "Inversores de frequência e Soft-Starters configurados de fábrica",
      "IHM touchscreen na porta do painel para controle local",
      "Relés de proteção térmica e controle de falta de fase",
      "Botão de emergência padrão NR-12 com trava mecânica",
    ],
  },
  {
    id: "medicao",
    title: "Quadro de Medição Agrupada e Entrada",
    subtitle: "Padrão de entrada e medição conforme normas da concessionária local",
    description:
      "Centrais de medição agrupada aprovadas para padrões de concessionárias de energia (CEMIG e equivalentes). Montagem modular com visão clara de visores de leitura e lacres de segurança.",
    image: painelSinaleirasComando,
    tag: "Homologado • Padrão Concessionária",
    specs: {
      tensao: "127V / 220V / 380V",
      correnteMax: "Conforme projeto de entrada",
      protecao: "IP54 resistente a intempéries",
      normas: "Normas da Concessionária (ND-5.1 / ND-5.2)",
      barramento: "Barramento de entrada homologado",
      aplicacao: "Entradas de serviço prediais, condomínios e galpões comerciais",
    },
    features: [
      "Caixas de chapa de aço ou policarbonato reforçado",
      "Barramento geral de cobre eletrolítico estanhado",
      "Compartimento exclusivo para proteção geral de entrada",
      "Pronto para aprovação e vistoria da concessionária",
    ],
  },
];

interface ProductRollShowcaseProps {
  onSelectCategory?: (categoryKey: string) => void;
}

export function ProductRollShowcase({ onSelectCategory }: ProductRollShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  const activeProduct = PRODUCTS[activeIndex];

  // Rotação automática a cada 8 segundos até que o usuário clique em uma aba
  useEffect(() => {
    if (userInteracted) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [userInteracted]);

  const handleSelectTab = (index: number) => {
    setUserInteracted(true);
    setActiveIndex(index);
  };

  const handleNext = () => {
    setUserInteracted(true);
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const handlePrev = () => {
    setUserInteracted(true);
    setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  return (
    <div className="w-full">
      {/* 1. Aba de Categorias (Sem Scrollbar Visível) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b border-border">
        {PRODUCTS.map((prod, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={prod.id}
              onClick={() => handleSelectTab(idx)}
              className={`flex-shrink-0 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 min-h-[44px] ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                  : "bg-surface text-muted-foreground hover:bg-muted hover:text-primary border border-border/60"
              }`}
            >
              {prod.title.split(" (")[0]}
            </button>
          );
        })}
      </div>

      {/* 2. Visualização Principal com Foto Livre (Sem Badges Flutuantes) */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
        {/* Coluna da Imagem Real (Livre, Limpa) */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-slate-950 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.title}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Controles de Avançar e Voltar */}
          <div className="flex items-center justify-between pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              className="text-xs h-10 px-4 gap-1.5 font-semibold text-primary"
            >
              <ChevronLeft className="size-4" />
              Anterior
            </Button>

            {/* Bolinhas Indicadoras de Slide */}
            <div className="flex items-center gap-2">
              {PRODUCTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectTab(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ir para produto ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              className="text-xs h-10 px-4 gap-1.5 font-semibold text-primary"
            >
              Próximo
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Coluna das Informações Maiores do Lado de Fora (Sem Vermelho) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Rótulo da Ficha Técnica sem Texto Vermelho */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Sliders className="size-4" />
              <span>Ficha Técnica & Especificações do Modelo</span>
            </div>

            {/* Título e Subtítulo Maiores e Claros */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary leading-tight">
                {activeProduct.title}
              </h2>
              <p className="mt-1 text-sm sm:text-base text-muted-foreground font-medium">
                {activeProduct.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              {activeProduct.description}
            </p>

            {/* Tabela Clean de Especificações (Sem Cards Internos Duplicados) */}
            <div className="mt-6 space-y-3 rounded-xl border border-border bg-surface p-4 sm:p-5 shadow-xs">
              <SpecRow label="Tensão Nominal:" value={activeProduct.specs.tensao} />
              <SpecRow label="Corrente Máxima:" value={activeProduct.specs.correnteMax} />
              <SpecRow label="Grau de Proteção:" value={activeProduct.specs.protecao} />
              <SpecRow label="Normas Técnicas:" value={activeProduct.specs.normas} />
              <SpecRow label="Barramento Principal:" value={activeProduct.specs.barramento} />
              <SpecRow label="Aplicações Típicas:" value={activeProduct.specs.aplicacao} />
            </div>

            {/* Diferenciais Inclusos (Lista Limpa em Azul Primário) */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                Diferenciais Inclusos neste Modelo
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground">
                {activeProduct.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 bg-background p-3 rounded-lg border border-border/80 shadow-2xs">
                    <CheckCircle2 className="size-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-xs sm:text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Botão de Orçamento no Modelo Ativo */}
          <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground font-medium">
              Engenharia dedicada para o seu projeto.
            </span>
            <Button
              size="lg"
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory(activeProduct.id);
                }
              }}
              className="w-full sm:w-auto text-sm font-semibold h-12 px-7"
            >
              Solicitar orçamento deste modelo
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm border-b border-border/50 pb-2.5 last:border-0 last:pb-0 gap-1">
      <span className="font-bold text-primary min-w-[140px]">{label}</span>
      <span className="text-foreground sm:text-right font-medium">{value}</span>
    </div>
  );
}
