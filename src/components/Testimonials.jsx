import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import transform1 from "../assets/transform1.webp";

const testimonials = [
  {
    name: "Thomas L.",
    role: "Perte de poids",
    text: "En 3 mois, j'ai perdu 12kg. Le programme nutritionnel a tout changé pour moi. Merci coach !",
    result: "-12 KG",
    size: "col-span-1"
  },
  {
    image: transform1,
    size: "md:col-span-2 md:row-span-2"
  },
  {
    name: "Sarah M.",
    role: "Musculation",
    text: "Je n'avais jamais touché une barre de ma vie. Aujourd'hui, je me sens forte et confiante.",
    result: "FORCE +",
    size: "col-span-1"
  },
  {
    name: "Karim B.",
    role: "Prépa Marathon",
    text: "Le suivi 24/7 m'a permis de ne rien lâcher même dans les moments de doute.",
    result: "42.2 KM",
    size: "col-span-1"
  }
];

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-noir py-24">
      <div className="container mx-auto px-4">

        {/* Titre */}
        <motion.div
          className="mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-rouge font-black uppercase tracking-widest text-sm mb-4 italic text-center">
            // Résultats réels
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic text-center">
            ILS ONT RELEVÉ LE <span className="text-outline">DÉFI</span>
          </h3>
        </motion.div>

        {/* Grille Bento avec stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative group overflow-hidden bg-sport-card border border-white/10 p-8 flex flex-col justify-between ${item.size} transition-all duration-500 hover:border-rouge/50`}
            >
              {item.image ? (
                <>
                  <img
                    src={item.image}
                    alt="Transformation"
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="relative z-10 mt-auto">
                    <span className="bg-rouge text-white px-4 py-1 font-black italic text-sm uppercase">Transformation</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative z-10">
                    <span className="text-5xl font-black text-rouge/20 absolute -top-4 -left-2 italic select-none">"</span>
                    <p className="text-gray-300 italic font-body relative z-10">{item.text}</p>
                  </div>
                  <div className="mt-6 flex justify-between items-end">
                    <div>
                      <h4 className="text-white font-bold uppercase">{item.name}</h4>
                      <p className="text-rouge text-xs font-bold uppercase">{item.role}</p>
                    </div>
                    <span className="text-3xl font-black text-white/10 group-hover:text-rouge/30 transition-colors italic">
                      {item.result}
                    </span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}