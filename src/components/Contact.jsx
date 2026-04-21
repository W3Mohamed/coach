import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const calendlyRef = useRef(null); // ref direct sur la div Calendly
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  useEffect(() => {
    if (!inView || !calendlyRef.current) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      if (window.Calendly && calendlyRef.current) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/mohamedbenachenhou430/30min?locale=fr&background_color=0a0a0a&text_color=ffffff&primary_color=ff1313&hide_event_type_details=1&hide_gdpr_banner=1',
          parentElement: calendlyRef.current, // ref React, toujours à jour
        });
      }
    };
    document.body.appendChild(script);
  }, [inView]);

  return (
    <section id="contact" className="bg-noir py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-rouge/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-rouge font-black uppercase tracking-widest text-sm mb-4 italic">
            // Contact & Inscription
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic">
            PRÊT POUR LE <span className="text-outline text-rouge">CHANGEMENT ?</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          <div ref={ref} className="lg:w-2/5 bg-sport-card border border-white/10 relative overflow-hidden min-h-[600px]">
            <div className="p-6 bg-rouge/10 border-b border-white/10">
              <h4 className="text-xl font-black text-white uppercase italic">
                Réserve ton <span className="text-rouge">Bilan</span>
              </h4>
            </div>

            {/* ref React attaché directement — jamais null quand inView est true */}
            <div
              ref={calendlyRef}
              style={{ minWidth: '320px', height: '600px' }}
            />
          </div>

          <div className="lg:w-3/5 bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-sm relative">
            <h4 className="text-2xl font-black text-white uppercase italic mb-8 border-l-4 border-rouge pl-4">
              Une question spécifique ?
            </h4>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-white uppercase text-[10px] font-black italic tracking-[0.2em]">Nom Complet</label>
                <input type="text" placeholder="Ex: Mohamed"
                  className="bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-rouge transition-all font-body text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white uppercase text-[10px] font-black italic tracking-[0.2em]">Téléphone</label>
                <input type="tel" placeholder="06 ..."
                  className="bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-rouge transition-all font-body text-sm" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-white uppercase text-[10px] font-black italic tracking-[0.2em]">Ton Objectif</label>
                <select className="bg-noir border border-white/10 p-4 text-white focus:outline-none focus:border-rouge transition-all font-body text-sm cursor-pointer">
                  <option>Perte de poids</option>
                  <option>Prise de masse</option>
                  <option>Performance Athlétique</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-white uppercase text-[10px] font-black italic tracking-[0.2em]">Message</label>
                <textarea rows="3" placeholder="Dis-moi tout..."
                  className="bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-rouge transition-all font-body text-sm" />
              </div>
              <button className="md:col-span-2 relative py-4 bg-transparent border-2 border-white text-white font-black uppercase italic tracking-widest overflow-hidden group">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-noir">Envoyer le message</span>
                <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </button>
            </form>
          </div>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-50">
          <div className="flex items-center gap-3 text-white text-xs font-bold tracking-widest uppercase">
            <MdOutlineEmail className="text-rouge text-lg" /> contact@coach-sportif.fr
          </div>
          <div className="flex items-center gap-3 text-white text-xs font-bold tracking-widest uppercase">
            <BsFillTelephoneFill className="text-rouge text-lg" /> 06 12 34 56 78
          </div>
        </div>
      </div>
    </section>
  );
}