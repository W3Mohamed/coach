import transform1 from "../assets/transform1.jfif";
const testimonials = [
  {
    name: "Thomas L.",
    role: "Perte de poids",
    text: "En 3 mois, j'ai perdu 12kg. Le programme nutritionnel a tout changé pour moi. Merci coach !",
    result: "-12 KG",
    size: "col-span-1"
  },
  {
    image: transform1, // Photo avant/après
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

export default function Testimonials() {
  return (
    <section className="bg-noir py-24">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="mb-16">
          <h2 className="text-rouge font-black uppercase tracking-widest text-sm mb-4 italic text-center">
            // Résultats réels
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic text-center">
            ILS ONT RELEVÉ LE <span className="text-outline">DÉFI</span>
          </h3>
        </div>

        {/* Grille Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative group overflow-hidden bg-sport-card border border-white/10 p-8 flex flex-col justify-between ${item.size} transition-all duration-500 hover:border-rouge/50`}
            >
              {item.image ? (
                // Cas : Bloc Image (Avant/Après)
                <>
                  <img src={item.image} alt="Transformation" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="relative z-10 mt-auto">
                    <span className="bg-rouge text-white px-4 py-1 font-black italic text-sm uppercase">Transformation</span>
                  </div>
                </>
              ) : (
                // Cas : Bloc Texte
                <>
                  <div className="relative z-10">
                    <span className="text-5xl font-black text-rouge/20 absolute -top-4 -left-2 italic select-none">“</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}