import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
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
import { ReactiveMap } from "@/components/ui/ReactiveMap";

type CategoryKey =
  | "residencial"
  | "comercial"
  | "industrial"
  | "qcm"
  | "medicao"
  | "naosei";

const CATEGORY_LABEL: Record<CategoryKey, string> = {
  residencial: "Residencial / Predial (QDF)",
  comercial: "Comercial de Distribuicao",
  industrial: "Industrial de Distribuicao (QGD)",
  qcm: "Quadro de Comando de Motores (QCM / CCM)",
  medicao: "Quadro de Medicao / Entrada",
  naosei: "Nao sei / Caso Especifico",
};

const CATEGORY_OPTIONS: Array<{ value: CategoryKey; label: string }> = [
  { value: "residencial", label: "Residencial / Predial (QDF)" },
  { value: "comercial", label: "Comercial de Distribuicao" },
  { value: "industrial", label: "Industrial de Distribuicao (QGD)" },
  { value: "qcm", label: "Quadro de Comando de Motores (QCM / CCM)" },
  { value: "medicao", label: "Quadro de Medicao / Entrada" },
  { value: "naosei", label: "Nao sei / Caso Especifico" },
];

const quoteSchema = z.object({
  category: z.string().min(1, "Selecione uma categoria"),
  voltage: z.string().min(1, "Selecione a tensao"),
  installType: z.string().min(1, "Selecione o tipo de instalacao"),
  circuits: z.string().max(40).optional().default(""),
  load: z.string().max(40).optional().default(""),
  cep: z.string().max(10).optional().default(""),
  location: z
    .string()
    .trim()
    .min(2, "Informe a cidade/local da instalacao")
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
    .min(8, "Informe um telefone/WhatsApp valido")
    .max(30),
});

type QuoteForm = z.input<typeof quoteSchema>;

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Orcamento | CBE — Solicite sua Cotacao" },
      {
        name: "description",
        content:
          "Solicite um orcamento de quadros eletricos sob medida. Preencha o formulario e receba atendimento direto da engenharia.",
      },
    ],
  }),
  component: Orcamento,
});

function Orcamento() {
  const formRef = useRef<HTMLDivElement>(null);

  // Ler categoria da URL se veio de /quadros-eletricos
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
    cep: "",
    location: "",
    description: "",
    name: "",
    company: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cepLoading, setCepLoading] = useState(false);
  const [selectedMapAddress, setSelectedMapAddress] = useState<string>("");

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

  async function handleCepSearch(cepVal: string) {
    const cleanCep = cepVal.replace(/\D/g, "");
    update("cep", cepVal);

    if (cleanCep.length === 8) {
      setCepLoading(true);
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await res.json();
        if (!data.erro) {
          const locationStr = `${data.logradouro ? `${data.logradouro}, ` : ""}${data.bairro ? `${data.bairro} — ` : ""}${data.localidade}/${data.uf}`;
          update("location", locationStr);
          setSelectedMapAddress(locationStr);
        }
      } catch (err) {
        console.error("Erro na busca de CEP:", err);
      } finally {
        setCepLoading(false);
      }
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
    lines.push("*Solicitacao de Orcamento — Quadros Eletricos CBE*");
    lines.push("");
    lines.push(`Categoria: ${CATEGORY_LABEL[data.category as CategoryKey] || data.category}`);
    lines.push(`Tensao de alimentacao: ${data.voltage}`);
    lines.push(`Tipo de instalacao: ${data.installType}`);
    if (data.circuits) lines.push(`Circuitos/disjuntores (aprox.): ${data.circuits}`);
    if (data.load) lines.push(`Carga estimada: ${data.load}`);
    if (data.cep) lines.push(`CEP da Instalacao: ${data.cep}`);
    lines.push(`Cidade/local da instalacao: ${data.location}`);
    lines.push("");
    lines.push(`Descricao da necessidade:`);
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
      <section className="scroll-mt-20 border-b border-border bg-background py-16">
        <div ref={formRef} className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">Cotacao Rapida</span>
            <h1 className="rule-brand justify-center font-display text-3xl font-semibold text-primary sm:text-4xl">
              Solicite seu Orcamento sob Medida
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Preencha os dados da sua instalacao. Ao informar o CEP, a cidade e endereco sao preenchidos automaticamente e o mapa reativo localiza a area do projeto.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Coluna Esquerda: Formulario */}
            <div className="lg:col-span-7 rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-panel">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
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

                  <Field id="voltage" label="Tensao de Alimentacao" required error={errors.voltage}>
                    <Select
                      value={form.voltage}
                      onValueChange={(v) => update("voltage", v)}
                    >
                      <SelectTrigger id="voltage" aria-label="Tensao de alimentacao">
                        <SelectValue placeholder="Selecione a tensao" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="127V / Monofasico">127V Monofasico</SelectItem>
                        <SelectItem value="220V / Bifasico">220V Bifasico</SelectItem>
                        <SelectItem value="220V / Trifasico">220V Trifasico</SelectItem>
                        <SelectItem value="380V / Trifasico">380V Trifasico</SelectItem>
                        <SelectItem value="440V / Industrial">440V Industrial</SelectItem>
                        <SelectItem value="Outro">Outro Caso</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field
                    id="installType"
                    label="Tipo de Instalacao"
                    required
                    error={errors.installType}
                  >
                    <Select
                      value={form.installType}
                      onValueChange={(v) => update("installType", v)}
                    >
                      <SelectTrigger id="installType" aria-label="Tipo de instalacao">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Instalacao Nova">Instalacao Nova</SelectItem>
                        <SelectItem value="Reforma / Modernizacao">Reforma / Modernizacao</SelectItem>
                        <SelectItem value="Ampliacao de Carga">Ampliacao de Carga</SelectItem>
                        <SelectItem value="Substituicao de Quadro Antigo">Substituicao de Quadro Antigo</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field
                    id="circuits"
                    label="N. Aproximado de Circuitos/Disjuntores"
                    hint="Opcional"
                    error={errors.circuits}
                  >
                    <Input
                      id="circuits"
                      inputMode="numeric"
                      placeholder="Ex.: 16 circuitos"
                      value={form.circuits}
                      onChange={(e) => update("circuits", e.target.value)}
                    />
                  </Field>

                  <Field
                    id="load"
                    label="Carga Estimada (kVA ou kW)"
                    hint="Nao sabe? Nos calculamos"
                    error={errors.load}
                  >
                    <Input
                      id="load"
                      placeholder="Ex.: 45 kVA ou 30 kW"
                      value={form.load}
                      onChange={(e) => update("load", e.target.value)}
                    />
                  </Field>

                  <Field
                    id="cep"
                    label="CEP da Obra / Instalacao"
                    hint="Preenche cidade e mapa"
                    error={errors.cep}
                  >
                    <div className="relative">
                      <Input
                        id="cep"
                        placeholder="Ex.: 38400-100"
                        value={form.cep}
                        onChange={(e) => handleCepSearch(e.target.value)}
                      />
                      {cepLoading && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-brand font-medium">
                          Buscando...
                        </span>
                      )}
                    </div>
                  </Field>
                </div>

                <Field
                  id="location"
                  label="Cidade / Endereco da Instalacao"
                  required
                  error={errors.location}
                >
                  <Input
                    id="location"
                    placeholder="Ex.: Uberlandia, MG ou Bairro Distrito Industrial"
                    value={form.location}
                    onChange={(e) => {
                      update("location", e.target.value);
                      setSelectedMapAddress(e.target.value);
                    }}
                  />
                </Field>

                <Field
                  id="description"
                  label="Descricao das Necessidades e Aplicacao"
                  required
                  error={errors.description}
                >
                  <Textarea
                    id="description"
                    rows={4}
                    placeholder="Descreva as principais cargas (motores, iluminacao, tomadas, ar condicionado), prazos de entrega e detalhes especificos."
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                  />
                </Field>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field id="name" label="Seu Nome" required error={errors.name}>
                    <Input
                      id="name"
                      placeholder="Nome completo"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </Field>

                  <Field id="company" label="Empresa / Razao Social" hint="Opcional" error={errors.company}>
                    <Input
                      id="company"
                      placeholder="Nome da sua empresa (opcional)"
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
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </Field>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground">
                    Abre o WhatsApp com a mensagem formatada para atendimento direto pela engenharia.
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto px-8 h-12 text-sm font-semibold">
                    <WhatsAppIcon className="size-4 mr-2" />
                    Enviar Solicitacao pelo WhatsApp
                  </Button>
                </div>
              </form>
            </div>

            {/* Coluna Direita: Mapa Reativo */}
            <div className="lg:col-span-5 sticky top-24">
              <div className="rounded-xl border border-border bg-surface p-4 shadow-panel">
                <p className="eyebrow mb-2">Localizacao da Instalacao / Matriz</p>
                <h3 className="font-display text-lg font-semibold text-primary mb-3">
                  Mapa da Obra
                </h3>
                <ReactiveMap
                  initialLocation={selectedMapAddress || form.cep}
                  interactiveSearch={true}
                />
              </div>
            </div>
          </div>
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
