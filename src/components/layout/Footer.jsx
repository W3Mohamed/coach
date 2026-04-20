export default function Footer() {
  return (
    <footer className="bg-noir pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Colonne 1 : Logo & Slogan */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic tracking-tighter text-white">
              COACH<span className="text-rouge text-outline">LIFIT</span>
            </h2>
            <p className="text-gray-500 font-body text-sm leading-relaxed max-w-xs">
              Transforme ton potentiel en performance. Programmes d'élite pour athlètes déterminés et particuliers motivés.
            </p>
            <div className="flex gap-4">
              {/* Icônes de réseaux sociaux stylisées */}
              {['IG', 'FB', 'YT', 'TK'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-xs font-black hover:bg-rouge hover:border-rouge transition-all duration-300">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div>
            <h4 className="text-white font-black uppercase italic mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-500 font-bold uppercase text-xs tracking-widest">
              <li><a href="#" className="hover:text-rouge transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-rouge transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-rouge transition-colors">À Propos</a></li>
              <li><a href="#" className="hover:text-rouge transition-colors">Témoignages</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Horaires */}
          <div>
            <h4 className="text-white font-black uppercase italic mb-6">Disponibilités</h4>
            <ul className="space-y-4 text-gray-500 font-body text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Lundi - Vendredi</span>
                <span className="text-white font-bold italic text-rouge">06:00 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Samedi</span>
                <span className="text-white font-bold italic">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Dimanche</span>
                <span className="text-gray-600 italic">Fermé</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Newsletter / Call to Action */}
          <div>
            <h4 className="text-white font-black uppercase italic mb-6">Newsletter</h4>
            <p className="text-gray-500 text-xs mb-4 uppercase tracking-wider">Reçois mes conseils secrets de training.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="TON EMAIL" 
                className="w-full bg-white/5 border border-white/10 p-4 text-white text-xs focus:outline-none focus:border-rouge transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-rouge px-4 text-white font-black text-xs hover:bg-white hover:text-black transition-all">
                OK
              </button>
            </form>
          </div>

        </div>

        {/* Barre de Copyright */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em]">
          <p>© 2024 COACHLIFIT - TOUS DROITS RÉSERVÉS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}