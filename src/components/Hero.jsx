import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"; // Pense à installer react-icons

const slides = [
    {
        image: new URL("../assets/header.webp", import.meta.url).href,
        title1: "Domine ton corps",
        title2: "Coaching d'élite à Paris",
        description: "Mohamed t'accompagne vers ta meilleure version physique et mentale.",
        buttonText: "Commencer maintenant",
        buttonLink: "#contact"
    },
    {
        image: new URL("../assets/header2.webp", import.meta.url).href,
        title1: "Zéro excuses",
        title2: "Résultats garantis",
        description: "Un suivi millimétré pour des transformations réelles et durables.",
        buttonText: "Voir les programmes",
        buttonLink: "#programme"
    },
    {
        image: new URL("../assets/header3.webp", import.meta.url).href,
        title1: "Force & Mental",
        title2: "Prépare ton futur",
        description: "Rejoins la communauté et repousse les barrières de la performance.",
        buttonText: "Me contacter",
        buttonLink: "#contact"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    // Auto-play optionnel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative w-full h-screen overflow-hidden bg-noir">
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* Overlay & Image */}
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img src={slides[current].image} alt="Coach" className="w-full h-full object-cover shadow-inner" />

                    {/* Effets de Glow (tes ronds rouges) */}
                    <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-rouge rounded-full z-15 blur-[120px] opacity-30 animate-pulse" />
                    <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-rouge rounded-full z-15 blur-[150px] opacity-40" />

                    {/* Contenu Texte */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-[85%] text-left">
                        <motion.h2 
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="md:text-3xl text-xl font-bold mb-2 uppercase text-outline italic"
                        >
                            {slides[current].title1}
                        </motion.h2>
                        
                        <motion.h1 
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="md:text-8xl text-5xl font-black mb-6 uppercase italic leading-none"
                        >
                            {slides[current].title2.split(' ').map((word, i) => (
                                <span key={i} className={i === 0 ? "text-white" : "text-rouge"}> {word}</span>
                            ))}
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-gray-300 max-w-xl md:text-xl text-lg mb-8 font-body"
                        >
                            {slides[current].description}
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="mt-8" // Ajoute un peu d'espace au-dessus si besoin
                        >
                            <a 
                                href={slides[current].buttonLink} 
                                className="relative inline-block overflow-hidden group border-2 border-rouge px-10 py-4 font-black uppercase italic tracking-widest text-white transition-all duration-300"
                            >
                                {/* Texte du bouton */}
                                <span className="relative z-20 block group-hover:text-noir transition-colors duration-300">
                                    {slides[current].buttonText}
                                </span>

                                {/* L'effet de remplissage (Slide-up) */}
                                <div className="absolute inset-0 z-10 bg-rouge translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation (Fleches) */}
            <div className="absolute bottom-10 right-10 z-30 flex gap-4">
                <button onClick={prevSlide} className="p-4 border border-white/20 text-white hover:bg-rouge hover:border-rouge transition-all">
                    <HiArrowNarrowLeft size={24} />
                </button>
                <button onClick={nextSlide} className="p-4 border border-white/20 text-white hover:bg-rouge hover:border-rouge transition-all">
                    <HiArrowNarrowRight size={24} />
                </button>
            </div>

            {/* Pagination (Points) */}
            <div className="absolute bottom-10 left-10 z-30 flex gap-2">
                {slides.map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-[4px] transition-all duration-500 ${i === current ? "w-12 bg-rouge" : "w-6 bg-white/20"}`} 
                    />
                ))}
            </div>
        </section>
    );
}