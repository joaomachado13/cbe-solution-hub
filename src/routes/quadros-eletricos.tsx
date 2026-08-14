import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
    </SiteLayout>
  );
}
