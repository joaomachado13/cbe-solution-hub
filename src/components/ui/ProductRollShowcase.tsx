import { useState } from "react";
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

  const activeProduct = PRODUCTS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  return (
    <div className="w-full">
      {/* Barra de Navegação dos Modelos (Sequence Roll Tabs) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-border">
        {PRODUCTS.map((prod, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={prod.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 border min-h-[44px] ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-surface text-muted-foreground border-border hover:bg-muted hover:text-foreground"
              }`}
            >
              <span>{prod.title.split(" (")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Conteúdo Principal — Grid 2 colunas no desktop, 1 coluna no mobile */}
      <div className="mt-6 sm:mt-8 grid gap-6 lg:gap-8 lg:grid-cols-12 items-stretch">
        {/* Coluna Esquerda: Showcase Visual em Sequência Roll com Fotos Reais CBE */}
        <div className="lg:col-span-6 flex flex-col justify-between rounded-xl border border-border bg-surface p-4 sm:p-6 shadow-panel relative overflow-hidden">
          {/* Tag de categoria */}
          <div className="flex items-center justify-between z-10 mb-3 sm:mb-4">
            <span className="eyebrow bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
              {activeProduct.tag}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <span>{activeIndex + 1}</span>
              <span>/</span>
              <span>{PRODUCTS.length}</span>
            </div>
          </div>

          {/* Imagem do Produto Real CBE com Transição em Roll */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-muted my-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.title}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.05, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Selo Garantia de Engenharia CBE */}
            <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-border text-xs flex items-center gap-1.5 text-primary font-medium">
              <ShieldCheck className="size-4 text-brand" />
              <span>Foto Real • Montagem CBE</span>
            </div>
          </div>

          {/* Botões de Navegação Roll Anterior / Próximo */}
          <div className="flex items-center justify-between pt-4 border-t border-border mt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              className="text-xs h-10 px-3.5 gap-1"
            >
              <ChevronLeft className="size-4" />
              Anterior
            </Button>

            {/* Indicadores de bolinhas do roll */}
            <div className="flex items-center gap-1.5">
              {PRODUCTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-6 bg-brand" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ir para produto ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              className="text-xs h-10 px-3.5 gap-1"
            >
              Próximo
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Coluna Direita: Especificações Técnicas Fixas ao Lado */}
        <div className="lg:col-span-6 flex flex-col justify-between rounded-xl border border-border bg-background p-5 sm:p-6 shadow-panel">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
              <Sliders className="size-4" />
              <span>Ficha Técnica & Especificações</span>
            </div>

            <h3 className="mt-2 font-display text-xl sm:text-2xl text-primary font-semibold">
              {activeProduct.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              {activeProduct.subtitle}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-foreground leading-relaxed">
              {activeProduct.description}
            </p>

            {/* Tabela de Especificações do Quadro */}
            <div className="mt-5 sm:mt-6 space-y-2.5 rounded-lg border border-border bg-surface p-3.5 sm:p-4">
              <SpecRow label="Tensão Nominal:" value={activeProduct.specs.tensao} />
              <SpecRow label="Corrente Máxima:" value={activeProduct.specs.correnteMax} />
              <SpecRow label="Grau de Proteção:" value={activeProduct.specs.protecao} />
              <SpecRow label="Normas Técnicas:" value={activeProduct.specs.normas} />
              <SpecRow label="Barramento Principal:" value={activeProduct.specs.barramento} />
              <SpecRow label="Aplicações Típicas:" value={activeProduct.specs.aplicacao} />
            </div>

            {/* Lista de Diferenciais Técnicos */}
            <div className="mt-5 sm:mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Diferenciais Inclusos neste Modelo
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground">
                {activeProduct.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 bg-surface p-2.5 rounded border border-border/60">
                    <CheckCircle2 className="size-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Botão Ação Orçamento */}
          <div className="mt-6 sm:mt-8 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-xs text-muted-foreground text-center sm:text-left">
              <span>Engenheiro responsável pelo projeto dedicado.</span>
            </div>
            <Button
              size="lg"
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory(activeProduct.id);
                }
              }}
              className="w-full sm:w-auto text-sm font-semibold h-11 px-6"
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
    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs border-b border-border/40 pb-2 last:border-0 last:pb-0 gap-0.5 sm:gap-1">
      <span className="font-semibold text-primary min-w-[130px]">{label}</span>
      <span className="text-muted-foreground sm:text-right font-medium">{value}</span>
    </div>
  );
}
