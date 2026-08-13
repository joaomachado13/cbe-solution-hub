import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProductRollShowcase } from "@/components/ui/ProductRollShowcase";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/quadros-eletricos")({
  head: () => ({
    meta: [
      { title: "Quadros Eletricos | CBE — Catalogo Sob Medida" },
      {
        name: "description",
        content:
          "Catalogo completo de quadros eletricos sob medida: residencial, comercial, industrial, comando de motores e medicao. Uberlandia, MG.",
      },
    ],
  }),
  component: QuadrosEletricos,
});

function QuadrosEletricos() {
  function handleSelectCategory(categoryKey: string) {
    // Navega para a pagina de orcamento com a categoria pre-selecionada via query param
    window.location.href = `/orcamento?categoria=${categoryKey}`;
  }

  return (
    <SiteLayout>
      <section className="scroll-mt-20 border-b border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6 mb-10">
            <div>
              <span className="eyebrow">Catalogo Tecnico</span>
              <h1 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
                Quadros Eletricos Sob Medida
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                Navegue pelas categorias abaixo para comparar cada modelo, consultar a ficha tecnica detalhada e solicitar sua cotacao.
              </p>
            </div>
            <Button asChild size="lg" className="w-full sm:w-auto px-6 text-sm font-semibold">
              <Link to="/orcamento">Solicitar orcamento</Link>
            </Button>
          </div>

          <ProductRollShowcase onSelectCategory={handleSelectCategory} />
        </div>
      </section>
    </SiteLayout>
  );
}
