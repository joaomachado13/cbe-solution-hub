import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProductRollShowcase } from "@/components/ui/ProductRollShowcase";
import { Button } from "@/components/ui/button";

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
      <section className="scroll-mt-20 border-b border-border bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6 mb-8 sm:mb-10"
          >
            <div>
              <span className="eyebrow">Catálogo Técnico</span>
              <h1 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
                Quadros Elétricos Sob Medida
              </h1>
              <p className="mt-3 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Navegue pelas categorias abaixo para comparar cada modelo, consultar a ficha técnica detalhada e solicitar sua cotação.
              </p>
            </div>
            <Button asChild size="lg" className="w-full sm:w-auto px-6 text-sm font-semibold h-11">
              <Link to="/orcamento">Solicitar orçamento</Link>
            </Button>
          </motion.div>

          <ProductRollShowcase onSelectCategory={handleSelectCategory} />
        </div>
      </section>
    </SiteLayout>
  );
}
