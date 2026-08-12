import { useState, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SITE } from "@/lib/site";
import quadroIndustrial from "@/assets/quadro-industrial.jpg";
import quadroResidencial from "@/assets/quadro-residencial.jpg";

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

type CategoryKey =
  | "residencial"
  | "comercial"
  | "industrial"
  | "qcm"
  | "medicao"
  | "naosei";

const CATEGORIES: Array<{
  key: CategoryKey;
  name: string;
  description: string;
  image: string;
}> = [
  {
    key: "residencial",
    name: "Residencial / Predial",
    description:
      "Quadros de distribuição para unidades residenciais, prediais e pequenos comércios.",
    image: quadroResidencial,
  },
  {
    key: "comercial",
    name: "Comercial",
    description: "Lojas, escritórios e pequenas indústrias, com carga intermediária.",
    image: quadroResidencial,
  },
  {
    key: "industrial",
    name: "Industrial",
    description:
      "Quadros de comando e distribuição para linhas de produção e cargas trifásicas maiores.",
    image: quadroIndustrial,
  },
  {
    key: "qcm",
    name: "Quadro de comando de motores (QCM)",
    description: "Acionamento e proteção de motores em arranques diversos.",
    image: quadroIndustrial,
  },
  {
    key: "medicao",
    name: "Quadro de medição / entrada",
    description: "Padrão de entrada de energia e medição conforme concessionária.",
    image: quadroIndustrial,
  },
];

const CATEGORY_LABEL: Record<CategoryKey, string> = {
  residencial: "Residencial / Predial",
  comercial: "Comercial",
  industrial: "Industrial",
  qcm: "Quadro de comando de motores (QCM)",
  medicao: "Quadro de medição / entrada",
  naosei: "Não sei / caso específico",
};

const CATEGORY_OPTIONS: Array<{ value: CategoryKey; label: string }> = [
  { value: "residencial", label: "Residencial / Predial" },
  { value: "comercial", label: "Comercial" },
  { value: "industrial", label: "Industrial" },
  { value: "qcm", label: "Quadro de comando de motores (QCM)" },
  { value: "medicao", label: "Quadro de medição / entrada" },
  { value: "naosei", label: "Não sei / caso específico" },
];

const quoteSchema = z.object({
  category: z.string().min(1, "Selecione uma categoria"),
  voltage: z.string().min(1, "Selecione a tensão"),
  installType: z.string().min(1, "Selecione o tipo de instalação"),
  circuits: z.string().max(40).optional().default(""),
  load: z.string().max(40).optional().default(""),
  location: z
    .string()
    .trim()
    .min(2, "Informe a cidade/local da instalação")
    .max(120),
  description: z
    .string()
    .trim()
    .min(10, "Descreva a necessidade com um pouco mais de detalhe")
    .max(2000),
  name: z.string().trim().min(2, "Informe seu nome").max(120),
  company: z.string().max(120).optional().default(""),
  phone: z
    .string()
    .trim()
    .min(8, "Informe um telefone/WhatsApp válido")
    .max(30),
});

type QuoteForm = z.input<typeof quoteSchema>;

function QuadrosEletricos() {
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<QuoteForm>({
    category: "",
    voltage: "",
    installType: "",
    circuits: "",
    load: "",
    location: "",
    description: "",
    name: "",
    company: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update<K extends keyof QuoteForm>(key: K, value: QuoteForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as string]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as string];
        return next;
      });
    }
  }

  function selectCategoryAndScroll(key: CategoryKey) {
    update("category", key);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = quoteSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (field && !fieldErrors[String(field)]) {
          fieldErrors[String(field)] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    const data = result.data;
    const lines: string[] = [];
    lines.push("*Solicitação de orçamento — Quadros Elétricos*");
    lines.push("");
    lines.push(`Categoria: ${CATEGORY_LABEL[data.category as CategoryKey]}`);
    lines.push(`Tensão de alimentação: ${data.voltage}`);
    lines.push(`Tipo de instalação: ${data.installType}`);
    if (data.circuits) lines.push(`Circuitos/disjuntores (aprox.): ${data.circuits}`);
    if (data.load) lines.push(`Carga estimada: ${data.load}`);
    lines.push(`Cidade/local da instalação: ${data.location}`);
    lines.push("");
    lines.push(`Descrição da necessidade:`);
    lines.push(data.description);
    lines.push("");
    lines.push(`Nome: ${data.name}`);
    if (data.company) lines.push(`Empresa: ${data.company}`);
    lines.push(`Telefone/WhatsApp: ${data.phone}`);

    const message = lines.join("\n");
    // TODO: substituir SITE.whatsappNumber (5534999999999) pelo número real da CBE.
    const href = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <SiteLayout>
      {/* 1. Título + introdução */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <p className="eyebrow">Solução principal</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-primary sm:text-5xl">
            Quadros Elétricos sob medida
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            Projetados e montados para a necessidade real da sua instalação — não produtos de
            catálogo padronizado. Cada quadro é dimensionado caso a caso, do comando à distribuição
            principal, com testes antes da entrega.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contato">Solicitar orçamento</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#orcamento">Montar pedido via WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Categorias de quadros */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <h2 className="rule-brand font-display text-2xl text-primary sm:text-3xl">
            Categorias de quadros
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Selecione o tipo que mais se aproxima do seu caso. Não encontrou exatamente? Escolha um
            card e ajustamos o projeto para a sua necessidade.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <article
                key={cat.key}
                className="flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-panel"
              >
                <div className="aspect-[4/3] overflow-hidden border-b border-border bg-muted">
                  <img
                    src={cat.image}
                    alt={`Quadro elétrico ${cat.name.toLowerCase()}`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg text-primary">{cat.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{cat.description}</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-5 self-start"
                    onClick={() => selectCategoryAndScroll(cat.key)}
                  >
                    Solicitar orçamento deste tipo
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Formulário de orçamento */}
      <section id="orcamento" className="bg-surface">
        <div ref={formRef} className="mx-auto max-w-3xl scroll-mt-24 px-4 py-14 sm:px-6 lg:py-16">
          <h2 className="rule-brand font-display text-2xl text-primary sm:text-3xl">
            Solicite seu orçamento
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Preencha os campos abaixo e enviaremos o pedido direto para o nosso WhatsApp. Quanto
            mais detalhes, mais preciso é o retorno.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                id="category"
                label="Categoria do quadro"
                required
                error={errors.category}
              >
                <Select
                  value={form.category}
                  onValueChange={(v) => update("category", v)}
                >
                  <SelectTrigger id="category" aria-label="Categoria do quadro">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORY_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field id="voltage" label="Tensão de alimentação" required error={errors.voltage}>
                <Select
                  value={form.voltage}
                  onValueChange={(v) => update("voltage", v)}
                >
                  <SelectTrigger id="voltage" aria-label="Tensão de alimentação">
                    <SelectValue placeholder="Selecione a tensão" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="127V">127V</SelectItem>
                    <SelectItem value="220V">220V</SelectItem>
                    <SelectItem value="380V">380V</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field
                id="installType"
                label="Tipo de instalação"
                required
                error={errors.installType}
              >
                <Select
                  value={form.installType}
                  onValueChange={(v) => update("installType", v)}
                >
                  <SelectTrigger id="installType" aria-label="Tipo de instalação">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Instalação nova">Instalação nova</SelectItem>
                    <SelectItem value="Reforma">Reforma</SelectItem>
                    <SelectItem value="Ampliação">Ampliação</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field
                id="circuits"
                label="Nº aproximado de circuitos/disjuntores"
                hint="Opcional"
                error={errors.circuits}
              >
                <Input
                  id="circuits"
                  inputMode="numeric"
                  placeholder="Ex.: 12"
                  value={form.circuits}
                  onChange={(e) => update("circuits", e.target.value)}
                />
              </Field>

              <Field
                id="load"
                label="Carga estimada (kVA ou kW)"
                hint="Não sabe? Deixe em branco, nós calculamos"
                error={errors.load}
              >
                <Input
                  id="load"
                  placeholder="Ex.: 45 kVA"
                  value={form.load}
                  onChange={(e) => update("load", e.target.value)}
                />
              </Field>

              <Field
                id="location"
                label="Cidade / local da instalação"
                required
                error={errors.location}
              >
                <Input
                  id="location"
                  placeholder="Ex.: Uberlândia, MG"
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                />
              </Field>
            </div>

            <Field
              id="description"
              label="Descrição da necessidade"
              required
              error={errors.description}
            >
              <Textarea
                id="description"
                rows={5}
                placeholder="Descreva a aplicação, cargas principais, prazos e qualquer detalhe relevante."
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
              />
            </Field>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Nome" required error={errors.name}>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </Field>

              <Field id="company" label="Empresa" hint="Opcional" error={errors.company}>
                <Input
                  id="company"
                  placeholder="Empresa (opcional)"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                />
              </Field>
            </div>

            <Field id="phone" label="Telefone / WhatsApp" required error={errors.phone}>
              <Input
                id="phone"
                inputMode="tel"
                placeholder="(34) 99999-9999"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </Field>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button type="submit" size="lg">
                Enviar pelo WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground">
                Abre o WhatsApp com a mensagem já montada para revisão e envio.
              </p>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  id,
  label,
  hint,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={id}>
          {label}
          {required ? <span className="text-brand"> *</span> : null}
        </Label>
        {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
      </div>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
