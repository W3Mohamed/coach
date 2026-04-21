const plans = [
  {
    name: "Essentiel",
    price: "49",
    features: ["2 Séances / mois", "Plan alimentaire de base", "Suivi par email", "Accès application"],
    recommended: false
  },
  {
    name: "Performance",
    price: "89",
    features: ["8 Séances / mois", "Nutrition personnalisée", "Suivi WhatsApp 24/7", "Bilan bi-mensuel"],
    recommended: true
  },
  {
    name: "Élite",
    price: "199",
    features: ["Séances illimitées", "Coaching privé 1-to-1", "Analyse sanguine & métabolique", "Préparation compétition"],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="tarifs" className="bg-noir py-24 relative">
      <div className="container mx-auto px-4">
        
        <div className="mb-16 text-center">
          <h2 className="text-rouge font-black uppercase tracking-widest text-sm mb-4 italic italic">
            // Tarifs & Forfaits
          </h2>
          <h3 className="text-5xl md:text-6xl font-black text-white uppercase italic">
            INVESTIS EN <span className="text-outline">TOI-MÊME</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-8 flex flex-col transition-all duration-500 ${
                plan.recommended 
                ? "bg-sport-card border-2 border-rouge scale-105 z-10 shadow-[0_0_50px_rgba(255,19,19,0.2)]" 
                : "bg-white/5 border border-white/10 scale-100 opacity-80 hover:opacity-100"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rouge text-white px-4 py-1 font-black uppercase italic text-sm">
                  Plus Populaire
                </div>
              )}

              <h4 className="text-2xl font-black text-white uppercase italic mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-white">{plan.price}€</span>
                <span className="text-gray-500 uppercase font-bold text-sm">/ mois</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="text-rouge">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`w-full block text-center py-4 font-black uppercase italic tracking-widest transition-all ${
                plan.recommended 
                ? "bg-rouge text-white hover:bg-white hover:text-black" 
                : "bg-white/10 text-white hover:bg-white hover:text-black"
              }`}>
                Choisir ce pack
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12 text-sm italic">
          * Tous les abonnements sont sans engagement. Résiliable à tout moment.
        </p>
      </div>
    </section>
  );
}