import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionPlaceholder } from "@/components/layout/SectionPlaceholder";

export const Route = createFileRoute("/quadros-eletricos")({
  head: () => ({
    meta: [
      { title: "Quadros Elétricos sob medida | CBE" },
      {
        name: "description",
        content:
          "Quadros de comando, distribuição e automação montados sob medida pela CBE, com projeto, testes e entrega em Uberlândia, MG.",
      },
      { property: "og:title", content: "Quadros Elétricos sob medida | CBE" },
      {
        property: "og:description",
        content: "Quadros de comando e distribuição montados sob medida pela CBE.",
      },
    ],
  }),
  component: QuadrosEletricos,
});

function QuadrosEletricos() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="eyebrow">Solução principal</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-primary sm:text-5xl">
            Quadros Elétricos sob medida
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            Página central de vendas do produto. O conteúdo detalhado será construído na próxima
            etapa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contato">Solicitar orçamento</Link>
            </Button>
          </div>
        </div>
      </section>

      <SectionPlaceholder
        title="Escopo do fornecimento"
        note="Conteúdo desta seção será definido em uma próxima etapa."
      />
      <SectionPlaceholder
        title="Processo de fabricação"
        note="Conteúdo desta seção será definido em uma próxima etapa."
      />
      <SectionPlaceholder
        title="Perguntas frequentes"
        note="Conteúdo desta seção será definido em uma próxima etapa."
      />
    </SiteLayout>
  );
}
