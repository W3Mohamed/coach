const stats = [
  { label: "Clients satisfaits", value: "500+" },
  { label: "Années d'expérience", value: "10+" },
  { label: "Séances de coaching", value: "1000+" },
  { label: "Taux de réussite", value: "100%" },
  { label: "Support client", value: "24/7" },
];

export default function Stats() {
  return (
    <section className="py-12 bg-sport-dark border-y border-white/10 overflow-hidden">
      <div className="animate-ticker">
        {/* On affiche la liste deux fois pour l'effet infini */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 px-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-6 min-w-[300px]">
                <h2 className="text-5xl font-black text-rouge font-heading italic">
                  {stat.value}
                </h2>
                <p className="text-gray-400 uppercase text-sm tracking-widest font-body leading-tight">
                  {stat.label}
                </p>
                {/* Séparateur entre chaque stat */}
                <div className="h-10 w-[1px] bg-white/20 ml-10" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}