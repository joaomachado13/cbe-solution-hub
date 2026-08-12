import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Ruler,
  Building2,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";
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

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <h2 className="rule-brand font-display text-2xl text-primary sm:text-3xl">
            Visão geral da solução
          </h2>
          <p className="mt-6 max-w-3xl text-base text-muted-foreground">
            A CBE não trabalha com quadros de catálogo padronizados. Cada painel é projetado e
            montado para a necessidade real da instalação, com dimensionamento de circuitos,
            barramentos e proteções definidos caso a caso. O atendimento cobre desde instalações
            residenciais e comerciais até operações industriais de grande porte.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Entre os clientes atendidos</span>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <span className="font-display tracking-wide text-foreground/80">BRF</span>
            <span className="font-display tracking-wide text-foreground/80">Syngenta</span>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <h2 className="rule-brand font-display text-2xl text-primary sm:text-3xl">
            Aplicações e diferenciais
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Ruler className="size-6 text-brand" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-primary">Projeto sob medida</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Montagem dimensionada para a sua carga, não variação de catálogo.
              </p>
            </div>
            <div>
              <Building2 className="size-6 text-brand" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-primary">Todos os portes</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Residencial, comercial e industrial, do comando à distribuição principal.
              </p>
            </div>
            <div>
              <ShieldCheck className="size-6 text-brand" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-primary">Conformidade normativa</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Projeto e execução conforme normas técnicas vigentes e boas práticas.
              </p>
            </div>
            <div>
              <LifeBuoy className="size-6 text-brand" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-primary">Suporte após a entrega</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Acompanhamento técnico depois da entrega e partida do painel na obra.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Button asChild size="lg" variant="outline">
              <Link to="/quadros-eletricos">Veja as soluções em quadros elétricos</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
