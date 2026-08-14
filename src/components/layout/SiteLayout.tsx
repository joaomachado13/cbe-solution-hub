import { useState, useEffect, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { SmoothScroll } from "./SmoothScroll";
import { SplashScreen } from "../ui/SplashScreen";

export function SiteLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Exibe a tela de loading na primeira visita da sessão
    const hasVisited = sessionStorage.getItem("cbe_splash_seen");
    if (!hasVisited) {
      setShowSplash(true);
      sessionStorage.setItem("cbe_splash_seen", "true");
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* 1. Tela de Loading Inicial */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* 3. Scroll Suave com Lenis */}
      <SmoothScroll />

      {/* Cabeçalho Fixo Padronizado */}
      <Header />

      {/* 2. Transições Fluidas Entre Páginas com AnimatePresence */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
