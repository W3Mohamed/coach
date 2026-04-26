import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const services = [
    {
        image: new URL("../assets/service1.webp", import.meta.url).href,
        title: "Perte de poids",
        description: "Des programmes de perte de poids efficaces et durables pour vous aider à atteindre vos objectifs de fitness.",
        buttonText: "En savoir plus",
        buttonLink: "#contact"
    },
    {
        image: new URL("../assets/service2.webp", import.meta.url).href,
        title: "Musculation",
        description: "Des programmes de musculation pour renforcer votre corps et améliorer votre force.",
        buttonText: "En savoir plus",
        buttonLink: "#contact"
    },
    {
        image: new URL("../assets/service3.webp", import.meta.url).href,
        title: "Coaching personnalisé",
        description: "Des programmes d'entraînement adaptés à vos besoins et objectifs.",
        buttonText: "En savoir plus",
        buttonLink: "#contact"
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Service() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section ref={ref} id="programme" className="bg-noir py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Titre */}
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <h2 className="text-7xl text-center md:text-9xl font-black opacity-10 absolute inset-0 text-white uppercase italic -translate-y-12 select-none">
                        Services
                    </h2>
                    <h2 className="text-5xl text-center md:text-6xl font-bold text-outline uppercase italic relative z-10">
                        Ce que je <span className="text-rouge">propose</span>
                    </h2>
                </motion.div>

                {/* Grille avec stagger */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-4 transition-all duration-500 hover:border-rouge/50"
                        >
                            {/* Image */}
                            <div className="relative h-72 overflow-hidden mb-6">
                                <div className="absolute inset-0 bg-rouge/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                                    loading="lazy"
                                />
                                <span className="absolute top-4 left-4 text-white/30 font-black text-4xl z-20 group-hover:text-rouge transition-colors">
                                    0{index + 1}
                                </span>
                            </div>

                            {/* Texte */}
                            <div className="px-2">
                                <h3 className="text-2xl font-black mb-3 text-white uppercase italic group-hover:translate-x-2 transition-transform duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 mb-8 font-body text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <a
                                    href={service.buttonLink}
                                    className="relative flex justify-center items-center w-full py-4 px-6 border border-white/20 text-white font-black uppercase italic tracking-widest overflow-hidden group/btn"
                                >
                                    <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-white">
                                        {service.buttonText}
                                    </span>
                                    <div className="absolute inset-0 bg-rouge -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}