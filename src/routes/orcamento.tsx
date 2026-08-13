import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
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

type CategoryKey =
  | "residencial"
  | "comercial"
  | "industrial"
  | "qcm"
  | "medicao"
  | "naosei";

const CATEGORY_LABEL: Record<CategoryKey, string> = {
  residencial: "Residencial / Predial (QDF)",
  comercial: "Comercial de Distribuição",
  industrial: "Industrial de Distribuição (QGD)",
  qcm: "Quadro de Comando de Motores (QCM / CCM)",
  medicao: "Quadro de Medição / Entrada",
  naosei: "Não sei / Caso Específico",
};

const CATEGORY_OPTIONS: Array<{ value: CategoryKey; label: string }> = [
  { value: "residencial", label: "Residencial / Predial (QDF)" },
  { value: "comercial", label: "Comercial de Distribuição" },
  { value: "industrial", label: "Industrial de Distribuição (QGD)" },
  { value: "qcm", label: "Quadro de Comando de Motores (QCM / CCM)" },
  { value: "medicao", label: "Quadro de Medição / Entrada" },
  { value: "naosei", label: "Não sei / Caso Específico" },
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

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Orçamento | CBE — Solicite sua Cotação" },
      {
        name: "description",
        content:
          "Solicite um orçamento de quadros elétricos sob medida. Preencha o formulário e receba atendimento direto da engenharia.",
      },
    ],
  }),
  component: Orcamento,
});

function Orcamento() {
  const formRef = useRef<HTMLDivElement>(null);

  const searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : "",
  );
  const initialCategory = searchParams.get("categoria") || "";

  const [form, setForm] = useState<QuoteForm>({
    category: initialCategory,
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
    lines.push("*Solicitação de Orçamento — Quadros Elétricos CBE*");
    lines.push("");
    lines.push(`Categoria: ${CATEGORY_LABEL[data.category as CategoryKey] || data.category}`);
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
    const href = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <SiteLayout>
      <section className="scroll-mt-20 border-b border-border bg-background py-12 sm:py-16">
        <div ref={formRef} className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            <span className="eyebrow">Cotação Rápida</span>
            <h1 className="rule-brand justify-center font-display text-3xl font-semibold text-primary sm:text-4xl">
              Solicite seu Orçamento sob Medida
            </h1>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Preencha os dados da sua instalação para receber uma especificação técnica e orçamento direto da nossa equipe de engenharia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface p-5 sm:p-8 lg:p-10 shadow-panel"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                <Field
                  id="category"
                  label="Categoria do Quadro"
                  required
                  error={errors.category}
                >
                  <Select
                    value={form.category}
                    onValueChange={(v) => update("category", v)}
                  >
                    <SelectTrigger id="category" aria-label="Categoria do quadro" className="h-11">
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

                <Field id="voltage" label="Tensão de Alimentação" required error={errors.voltage}>
                  <Select
                    value={form.voltage}
                    onValueChange={(v) => update("voltage", v)}
                  >
                    <SelectTrigger id="voltage" aria-label="Tensão de alimentação" className="h-11">
                      <SelectValue placeholder="Selecione a tensão" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="127V / Monofásico">127V Monofásico</SelectItem>
                      <SelectItem value="220V / Bifásico">220V Bifásico</SelectItem>
                      <SelectItem value="220V / Trifásico">220V Trifásico</SelectItem>
                      <SelectItem value="380V / Trifásico">380V Trifásico</SelectItem>
                      <SelectItem value="440V / Industrial">440V Industrial</SelectItem>
                      <SelectItem value="Outro">Outro Caso</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field
                  id="installType"
                  label="Tipo de Instalação"
                  required
                  error={errors.installType}
                >
                  <Select
                    value={form.installType}
                    onValueChange={(v) => update("installType", v)}
                  >
                    <SelectTrigger id="installType" aria-label="Tipo de instalação" className="h-11">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Instalação Nova">Instalação Nova</SelectItem>
                      <SelectItem value="Reforma / Modernização">Reforma / Modernização</SelectItem>
                      <SelectItem value="Ampliação de Carga">Ampliação de Carga</SelectItem>
                      <SelectItem value="Substituição de Quadro Antigo">Substituição de Quadro Antigo</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field
                  id="circuits"
                  label="Nº Aproximado de Circuitos/Disjuntores"
                  hint="Opcional"
                  error={errors.circuits}
                >
                  <Input
                    id="circuits"
                    inputMode="numeric"
                    placeholder="Ex.: 16 circuitos"
                    className="h-11"
                    value={form.circuits}
                    onChange={(e) => update("circuits", e.target.value)}
                  />
                </Field>

                <Field
                  id="load"
                  label="Carga Estimada (kVA ou kW)"
                  hint="Não sabe? Nós calculamos"
                  error={errors.load}
                >
                  <Input
                    id="load"
                    placeholder="Ex.: 45 kVA ou 30 kW"
                    className="h-11"
                    value={form.load}
                    onChange={(e) => update("load", e.target.value)}
                  />
                </Field>

                <Field
                  id="location"
                  label="Cidade / Endereço da Instalação"
                  required
                  error={errors.location}
                >
                  <Input
                    id="location"
                    placeholder="Ex.: Uberlândia, MG ou Bairro Distrito Industrial"
                    className="h-11"
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                  />
                </Field>
              </div>

              <Field
                id="description"
                label="Descrição das Necessidades & Aplicação"
                required
                error={errors.description}
              >
                <Textarea
                  id="description"
                  rows={4}
                  placeholder="Descreva as principais cargas (motores, iluminação, tomadas, ar condicionado), prazos de entrega e detalhes específicos."
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                />
              </Field>

              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                <Field id="name" label="Seu Nome" required error={errors.name}>
                  <Input
                    id="name"
                    placeholder="Nome completo"
                    className="h-11"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </Field>

                <Field id="company" label="Empresa / Razão Social" hint="Opcional" error={errors.company}>
                  <Input
                    id="company"
                    placeholder="Nome da sua empresa (opcional)"
                    className="h-11"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                  />
                </Field>
              </div>

              <Field id="phone" label="Telefone / WhatsApp" required error={errors.phone}>
                <Input
                  id="phone"
                  inputMode="tel"
                  placeholder="(34) 99922-7667"
                  className="h-11"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </Field>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground text-center sm:text-left">
                  Abre o WhatsApp com a mensagem formatada para atendimento direto pela engenharia.
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto px-8 h-12 text-sm font-semibold">
                  <WhatsAppIcon className="size-4 mr-2" />
                  Enviar Solicitação pelo WhatsApp
                </Button>
              </div>
            </form>
          </motion.div>
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
        <Label htmlFor={id} className="text-sm font-medium text-primary">
          {label}
          {required ? <span className="text-brand font-bold"> *</span> : null}
        </Label>
        {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
      </div>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
