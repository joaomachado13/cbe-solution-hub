import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionPlaceholder } from "@/components/layout/SectionPlaceholder";
import heroImage from "@/assets/hero-quadros.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CBE | Quadros elétricos sob medida em Uberlândia" },
      {
        name: "description",
        content:
          "Corrêa Barbosa Engenharia projeta e monta quadros elétricos sob medida para indústria, comércio e obras em Uberlândia, MG.",
      },
      { property: "og:title", content: "CBE | Quadros elétricos sob medida" },
      {
        property: "og:description",
        content: "Projeto, montagem e entrega de quadros elétricos sob medida. Uberlândia, MG.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow">Corrêa Barbosa Engenharia</p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-5xl">
              Quadros elétricos sob medida, montados para a sua instalação
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              Dimensionamento, montagem e testes de quadros de comando e distribuição conforme a
              necessidade real da obra. Atendimento em Uberlândia e região.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/quadros-eletricos">Ver a solução</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contato">Solicitar orçamento</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border-l-4 border-brand shadow-panel">
            <img
              src={heroImage}
              alt="Quadro elétrico industrial montado com barramentos de cobre e disjuntores"
              width={1600}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <SectionPlaceholder
        title="Visão geral da solução"
        note="Conteúdo desta seção será definido em uma próxima etapa."
      />
      <SectionPlaceholder
        title="Aplicações e diferenciais"
        note="Conteúdo desta seção será definido em uma próxima etapa."
      />
    </SiteLayout>
  );
}
