import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          // Animation d'entrée : Glisse depuis la droite pour un effet plus "App"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="fixed top-0 left-0 w-full h-screen bg-noir/95 backdrop-blur-xl z-[90] flex flex-col items-center justify-center"
        >
          {/* Décoration en fond : Grosse lettre "M" ou "G" transparente */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <span className="text-[40vh] font-black text-white/[0.03] italic uppercase">
              Gym
            </span>
          </div>

          <nav className="relative z-10">
            <ul className="flex flex-col items-center gap-8 text-center">
              {[
                { name: "Accueil", link: "/" },
                { name: "À propos", link: "#about" },
                { name: "Programme", link: "#services" },
                { name: "Tarifs", link: "#pricing" },
                { name: "Contact", link: "#contact" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }} // Apparition en cascade
                >
                  <a
                    href={item.link}
                    className="text-4xl md:text-5xl font-black uppercase italic text-white hover:text-rouge transition-all duration-300"
                  >
                    {/* Effet Outline sur le texte mobile aussi */}
                    <span className="hover:text-outline transition-all">
                        {item.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Réseaux sociaux en bas du menu mobile */}
          <div className="absolute bottom-10 flex gap-6 text-white/50 text-xl">
             {/* Ajoute tes icônes ici si tu veux */}
             <p className="text-xs tracking-[0.5em] uppercase font-bold text-rouge">
                Med Gym Elite
             </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;