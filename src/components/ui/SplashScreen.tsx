import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoCbe from "@/assets/logo-cbe.png";

interface SplashScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export function SplashScreen({ onComplete, minDuration = 1200 }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Garante que a splash screen dure o tempo mínimo elegante para percepção visual
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cbe-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#314E8A] text-white select-none pointer-events-auto"
        >
          {/* Fundo sutil com gradiente técnico */}
          <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-black/30 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Logo com animação suave de escala e fade in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
            >
              <img
                src={logoCbe}
                alt="Corrêa Barbosa Engenharia"
                className="h-14 sm:h-18 w-auto object-contain brightness-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
              />
            </motion.div>

            {/* Barra de progresso com acento vermelho CBE #EC3237 */}
            <div className="mt-8 w-48 sm:w-56 h-1 rounded-full bg-white/20 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="w-1/2 h-full rounded-full bg-[#EC3237] shadow-[0_0_8px_#EC3237]"
              />
            </div>

            {/* Subtítulo técnico com fade */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 text-xs tracking-widest uppercase font-semibold text-white/80 font-mono"
            >
              Engenharia e Soluções Elétricas
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
