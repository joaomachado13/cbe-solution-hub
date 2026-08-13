import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";
import heroQuadros from "@/assets/hero-quadros.jpg";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title: "Sobre Nos | CBE — Correa Barbosa Engenharia" },
      {
        name: "description",
        content:
          "Conheca a historia, missao e valores da Correa Barbosa Engenharia. Quadros eletricos sob medida em Uberlandia, MG.",
      },
    ],
  }),
  component: SobreNos,
});

function SobreNos() {
  return (
    <SiteLayout>
      {/* Hero da pagina */}
      <section className="scroll-mt-20 border-b border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="eyebrow">Institucional</span>
              <h1 className="rule-brand font-display text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
                Sobre a Correa Barbosa Engenharia
              </h1>
              {/* PLACEHOLDER — substituir pelo texto real da historia da empresa */}
              <p className="text-base text-muted-foreground leading-relaxed">
                A CBE nasceu da necessidade de oferecer solucoes eletricas sob medida para instalacoes que nao podem depender de quadros genericos. Com atuacao em Uberlandia e regiao, projetamos e montamos quadros eletricos industriais, comerciais e prediais dimensionados para a carga real de cada cliente.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nossa equipe de engenheiros trabalha com rigor tecnico, garantindo conformidade com as normas NBR IEC 61439, NBR 5410, NR-10 e NR-12 em cada projeto entregue.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border shadow-xs">
                {/* PLACEHOLDER — substituir por foto real da fabrica/equipe se disponivel */}
                <img
                  src={heroQuadros}
                  alt="Fabrica CBE Engenharia"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missao / Visao / Valores */}
      <section className="scroll-mt-20 border-b border-border bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">Nossos Principios</span>
            <h2 className="rule-brand justify-center font-display text-3xl font-semibold text-primary sm:text-4xl">
              Missao, Visao e Valores
            </h2>
          </div>

          {/* PLACEHOLDER — substituir pelos textos reais de missao/visao/valores */}
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Missao</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Projetar e entregar quadros eletricos sob medida com excelencia tecnica, seguranca e atendimento personalizado, contribuindo para a eficiencia energetica das instalacoes dos nossos clientes.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Visao</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Ser referencia regional em engenharia de quadros eletricos sob medida, reconhecida pela qualidade tecnica, pontualidade nas entregas e compromisso com normas de seguranca.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 shadow-xs">
              <h3 className="font-display text-xl font-semibold text-primary">Valores</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Rigor tecnico, transparencia com o cliente, seguranca em primeiro lugar, compromisso com prazos e melhoria continua dos processos de engenharia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onde Atuamos */}
      <section className="scroll-mt-20 border-b border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-left mb-10">
            <span className="eyebrow">Segmentos</span>
            <h2 className="rule-brand font-display text-3xl font-semibold text-primary sm:text-4xl">
              Onde Atuamos
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              A CBE atende diversos segmentos com solucoes eletricas dimensionadas para cada tipo de operacao.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-background p-5 shadow-xs">
              <h3 className="font-display text-lg font-semibold text-primary">Industria</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Quadros de distribuicao, comando de motores e automacao para plantas industriais.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 shadow-xs">
              <h3 className="font-display text-lg font-semibold text-primary">Comercio</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Quadros para lojas, supermercados, clinicas, escritorios e centros empresariais.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 shadow-xs">
              <h3 className="font-display text-lg font-semibold text-primary">Residencial de Alto Padrao</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Distribuicao e protecao para condominios, casas e edificios residenciais.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 shadow-xs">
              <h3 className="font-display text-lg font-semibold text-primary">Infraestrutura</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Quadros de medicao, entrada de servico e adequacao a normas da concessionaria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="scroll-mt-20 bg-primary py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-semibold text-primary-foreground sm:text-3xl">
            Precisa de um quadro eletrico sob medida?
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/80 max-w-xl mx-auto">
            Fale com nossa equipe de engenharia e receba atendimento tecnico personalizado.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-sm font-semibold">
              <Link to="/contato">
                Fale conosco
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 text-sm font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/orcamento">Solicitar orcamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
