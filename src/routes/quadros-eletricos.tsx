import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProductRollShowcase } from "@/components/ui/ProductRollShowcase";
import bgArcoBrand from "@/assets/cbe/bg-arco-brand.png";

export const Route = createFileRoute("/quadros-eletricos")({
  head: () => ({
    meta: [
      { title: "Quadros Elétricos | CBE — Catálogo Sob Medida" },
      {
        name: "description",
        content:
          "Catálogo completo de quadros elétricos sob medida: residencial, comercial, industrial, comando de motores e medição. Uberlândia, MG.",
      },
    ],
  }),
  component: QuadrosEletricos,
});

function QuadrosEletricos() {
  function handleSelectCategory(categoryKey: string) {
    window.location.href = `/orcamento?categoria=${categoryKey}`;
  }

  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-border bg-surface">
        {/* Elemento de Fundo — Arco da Marca CBE */}
        <div className="absolute -right-20 top-0 w-96 sm:w-[650px] opacity-[0.08] pointer-events-none select-none z-0">
          <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b border-border pb-6 mb-8 sm:mb-10"
          >
            <span className="eyebrow">Catálogo Técnico</span>
            <h1 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
              Quadros Elétricos Sob Medida
            </h1>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Navegue pelas categorias abaixo para comparar cada modelo, consultar a ficha técnica detalhada e solicitar sua cotação.
            </p>
          </motion.div>

          <ProductRollShowcase onSelectCategory={handleSelectCategory} />
        </div>
      </section>

      {/* Card Azul de CTA ao final do Catálogo */}
      <section className="relative overflow-hidden bg-primary py-14 sm:py-16 text-white border-b border-border">
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-96 sm:w-[600px] opacity-15 pointer-events-none select-none z-0 rotate-180">
          <img src={bgArcoBrand} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="space-y-4">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Precisa de um modelo específico de quadro elétrico?
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-normal">
              Nossa equipe de engenharia analisa seu projeto executivo ou diagramas unifilares para montar o orçamento exato.
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
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
