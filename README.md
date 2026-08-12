# CBE 

Cria um projeto novo (React + Vite + Tailwind + TypeScript) para o site institucional/comercial da CBE (Corrêa Barbosa Engenharia), focado em vender a solução de Quadros Elétricos sob medida. Este prompt define apenas o design system e a estrutura de páginas — não gere conteúdo de seções detalhadas ainda, só a base.

DIREÇÃO VISUAL (definir como tokens semânticos em index.css e tailwind.config.ts, nunca cor solta no componente):

- Modo claro apenas. Sem dark mode, sem toggle de tema.

- Cor primária: azul #314E8A — usar em headers, botões primários, títulos de destaque, links.

- Cor de acento: vermelho #EC3237 — usar com moderação, como marca (detalhes, sublinhados, ícone de destaque pontual, hover states), nunca como indicador de status, alerta ou erro. Não deixar o vermelho ausente do projeto: ele precisa aparecer de forma consistente em pelo menos 2-3 pontos por página para manter a identidade da marca.

- Fundo neutro claro (branco ou cinza muito claro), texto em cinza-escuro/preto para leitura.

- Tipografia sóbria e técnica, sem itálico decorativo, sem peso extra-bold decorativo fora de títulos.

- Fotografia real de instalação elétrica/industrial no lugar de ilustração sempre que possível.

PROIBIDO (aplica-se a todas as páginas e componentes deste projeto):

- Emojis em qualquer texto ou UI.

- Elementos 3D, ilustrações isométricas, glassmorphism, gradientes decorativos de fundo.

- Ícones vermelhos ou verdes com conotação de "status" (piscando, badge de notificação, luz de alerta).

- Blocos genéricos de "3 cards com ícone + título + parágrafo" repetidos como preenchimento.

- Estética de SaaS genérico (hero com formas abstratas flutuantes, mockup de dashboard fictício).

ESTRUTURA DE PÁGINAS (criar rotas, mas por enquanto apenas com header, footer e placeholder de seção — sem gerar o conteúdo completo de cada uma):

1. Home (/) — visão geral rápida da solução de quadros elétricos, com CTA para a página de Quadros.

2. Quadros Elétricos (/quadros-eletricos) — página central de vendas do produto.

3. Contato (/contato) — formulário de orçamento + WhatsApp.

HEADER E FOOTER (implementar completos, pois são compartilhados por todas as páginas):

- Header: logo CBE (texto "CBE" ou "Corrêa Barbosa Engenharia" por enquanto, sem arquivo de logo), menu com as 3 páginas, botão de destaque "Solicitar orçamento" levando para /contato.

- Footer: nome da empresa, localização (Uberlândia, MG), e botão/link fixo de WhatsApp.

CONVERSÃO:

- O caminho de conversão principal são dois: botão de WhatsApp (sempre visível, ex. flutuante ou no header) e botão "Solicitar orçamento" que leva ao formulário de contato. Ambos devem estar presentes de forma consistente em todas as páginas.

RESTRIÇÕES TÉCNICAS:

- Totalmente responsivo (mobile, tablet, desktop).

- Não usar Supabase ainda neste prompt — isso será adicionado depois para o formulário de contato.

- Manter componentes pequenos e organizados por página.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cbe-solution-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/565ca43c-9e60-4466-9d5c-6ac14e487e0c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
