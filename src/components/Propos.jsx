import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import coachImg from "../assets/coach.webp";

const points = [
    { 
        title: "Programmes Sur-Mesure", 
        desc: "Adaptés à ton emploi du temps et ton niveau." 
    },
    { 
        title: "Suivi 24h/24 & 7j/7",
        desc: "Une question ? Je réponds via WhatsApp en direct." 
    },
    { 
        title: "Nutrition Sportive", 
        desc: "Plans alimentaires personnalisés sans frustration." 
    }
];

const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } }
};

const pointVariant = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const badgeVariant = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.5 } }
};

export default function Propos() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

    return (
        <section ref={ref} id="about" className="bg-noir py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Bloc Image — slide depuis la gauche */}
                    <motion.div
                        className="relative w-full md:w-1/2"
                        variants={fadeLeft}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-rouge z-0" />

                        <div className="relative z-10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                            <img
                                src={coachImg}
                                alt="Coach Sportif"
                                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                        </div>

                        {/* Badge avec son propre effet pop */}
                        <motion.div
                            className="absolute -bottom-10 -right-10 bg-rouge p-8 hidden lg:block z-20 italic"
                            variants={badgeVariant}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <p className="text-5xl font-black text-white leading-none">10</p>
                            <p className="text-white font-bold uppercase tracking-tighter">Ans d'expertise</p>
                        </motion.div>
                    </motion.div>

                    {/* Bloc Texte — slide depuis la droite */}
                    <motion.div
                        className="w-full md:w-1/2 text-white"
                        variants={fadeRight}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <h2 className="text-rouge font-black uppercase tracking-widest text-sm mb-4 italic">
                            // Pourquoi me choisir ?
                        </h2>
                        <h3 className="text-5xl md:text-6xl font-black uppercase italic mb-8 leading-tight">
                            PLUS QU'UN <span className="text-outline">COACH</span>,<br /> UN PARTENAIRE.
                        </h3>

                        <p className="text-gray-400 text-lg mb-10 font-body leading-relaxed">
                            Ancien athlète de haut niveau, j'accompagne les particuliers dans leur transformation physique. Ma méthode repose sur trois piliers : la science du mouvement, une nutrition adaptée et un mental d'acier.
                        </p>

                        {/* Points clés en stagger */}
                        <motion.div
                            className="space-y-6"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            {points.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex gap-6 group"
                                    variants={pointVariant}
                                >
                                    <div className="w-12 h-12 shrink-0 border border-rouge flex items-center justify-center text-rouge font-black italic group-hover:bg-rouge group-hover:text-white transition-all">
                                        0{idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold uppercase italic">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.a
                            href="#contact"
                            className="mt-12 inline-block text-center bg-white text-black font-black py-4 px-10 uppercase italic hover:bg-rouge hover:text-white transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                        >
                            Découvrir ma méthode
                        </motion.a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}