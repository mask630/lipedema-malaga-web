import React from 'react';
import { Heart, Users, MapPin, Sparkles, Mail, Shield } from 'lucide-react';

interface AboutUsProps {
  onOpenContact: () => void;
}

export const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenContact }) => {
  return (
    <section id="quienes-somos" className="py-20 bg-white border-b border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Brand Identity & Story */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EAE1] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Nuestra Historia y Propósito</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#36221E] mb-6 leading-tight">
              Somos Lipedema Málaga: <br />
              <span className="text-[#8A463B] font-normal italic">¿Aún no nos conoces?</span>
            </h2>

            <div className="space-y-4 text-base text-[#594942] leading-relaxed">
              <p>
                Hemos creado esta <strong>red de apoyo y acompañamiento</strong> para todas las personas que conviven con esta patología en Málaga y Andalucía, 
                tanto para las que ya cuentan con un diagnóstico médico como para aquellas que aún están en la incertidumbre de no saber qué le ocurre a su cuerpo.
              </p>
              <p>
                Sabemos en primera persona lo desgarrador que resulta el peregrinaje médico: escuchar durante años que «solo necesitas comer menos y hacer más ejercicio», 
                soportar la culpa injusta y lidiar con la soledad y la desinformación en internet.
              </p>
              <p className="p-4 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#9B5347] text-[#473630] font-medium">
                «Esta web no es un negocio ni una empresa con ánimo de lucro. Es una iniciativa que intenta ayudar de corazón a las personas de forma 100% gratuita y altruista.»
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href="https://www.instagram.com/lipedemamalaga/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#F2E8DF] border border-[#D5C2B2] text-[#473630] text-sm font-semibold transition-all shadow-2xs"
              >
                <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                <span>Instagram @lipedemamalaga</span>
              </a>
              <a
                href="mailto:info@lipedemamalaga.org"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#F2E8DF] border border-[#D5C2B2] text-[#473630] text-sm font-semibold transition-all shadow-2xs"
              >
                <Mail className="w-4 h-4 text-[#8A463B]" />
                <span>info@lipedemamalaga.org</span>
              </a>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-sm font-semibold transition-all shadow-2xs cursor-pointer"
              >
                <Heart className="w-4 h-4" />
                <span>Hablar con nosotras</span>
              </button>
            </div>

          </div>

          {/* Right: Brand Circular Badge & Pillars */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-[#DEC9BB] p-3 flex items-center justify-center bg-[#FDFBF9] shadow-[0_15px_35px_rgba(74,46,43,0.08)]">
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#FAF6F0] p-6">
                <img
                  src="/images/logo-lipedema-malaga.png"
                  alt="Logotipo Oficial Lipedema Málaga"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-xs text-[#87746D] mt-4 font-medium text-center">
              Plataforma de información y acompañamiento ético · lipedemamalaga.org
            </p>
          </div>

        </div>

        {/* 4 Pillars of Action */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#EDE1D6]">
          
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E9DED4]">
            <div className="w-10 h-10 rounded-xl bg-[#F4E8DF] text-[#8A463B] flex items-center justify-center mb-4">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#36221E] mb-2">Trato Humano</h4>
            <p className="text-xs text-[#6B5A53] leading-relaxed">
              No eres una cifra de ventas. Eres una persona con nombre, historia y emociones que merece comprensión y respeto.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E9DED4]">
            <div className="w-10 h-10 rounded-xl bg-[#F4E8DF] text-[#8A463B] flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#36221E] mb-2">Totalmente Gratuito</h4>
            <p className="text-xs text-[#6B5A53] leading-relaxed">
              No cobramos por informarte, ni por acompañarte, ni por ponerte en contacto con la red de apoyo malagueña.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E9DED4]">
            <div className="w-10 h-10 rounded-xl bg-[#F4E8DF] text-[#8A463B] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#36221E] mb-2">Ecosistema Málaga</h4>
            <p className="text-xs text-[#6B5A53] leading-relaxed">
              Conexión directa con profesionales que de verdad conocen el lipedema en nuestra provincia: fisios DLM, nutrición y ortopedias.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E9DED4]">
            <div className="w-10 h-10 rounded-xl bg-[#F4E8DF] text-[#8A463B] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#36221E] mb-2">Independencia Ética</h4>
            <p className="text-xs text-[#6B5A53] leading-relaxed">
              Sin intereses comerciales, sin marcas de medias patrocinadas ni acuerdos económicos con cirugías privadas.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
