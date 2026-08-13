import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoCbe from "@/assets/logo-cbe.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/sobre-nos", label: "Sobre Nós" },
  { to: "/quadros-eletricos", label: "Quadros Elétricos" },
  { to: "/orcamento", label: "Orçamento" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur shadow-xs text-foreground"
          : "border-b border-white/10 bg-gradient-to-b from-black/80 via-black/50 to-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className={`flex items-center gap-3 py-1 transition-all duration-300 ${
            scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-4px] pointer-events-none md:opacity-100 md:pointer-events-auto"
          }`}
          onClick={() => setOpen(false)}
        >
          <img
            src={logoCbe}
            alt="Corrêa Barbosa Engenharia"
            className={`h-9 sm:h-10 w-auto object-contain transition-all duration-300 ${
              scrolled ? "" : "bg-white/95 rounded px-2 py-0.5 shadow-sm"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`border-b-2 border-transparent pb-0.5 text-sm font-medium transition-colors hover:border-brand ${
                scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
              activeProps={{
                className: `border-b-2 border-brand pb-0.5 text-sm font-semibold ${
                  scrolled ? "text-primary" : "text-white font-bold"
                }`,
              }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className={`hidden md:block transition-all duration-300 ${
            scrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-4px] pointer-events-none"
          }`}
        >
          <Button asChild size="lg" className="h-10 px-5 text-sm font-semibold shadow-xs">
            <Link to="/orcamento">Solicitar orçamento</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors md:hidden ${
            scrolled ? "text-primary" : "text-white bg-black/30 backdrop-blur-sm"
          }`}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background text-foreground md:hidden shadow-lg">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium text-foreground"
                activeProps={{ className: "border-b border-brand py-3 text-sm font-semibold text-primary" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="my-4 h-11 w-full">
              <Link to="/orcamento" onClick={() => setOpen(false)}>
                Solicitar orçamento
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
