import React from 'react';
import { Heart, ShieldCheck, MapPin, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background soft ambient blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#F5E5DC]/50 via-[#EFE2D3]/40 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#DFD0C5]/30 blur-2xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Emotional warmth */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Soft badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE3D8] border border-[#DECFBE] text-[#5A453E] text-xs font-semibold tracking-wide uppercase mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#9B5347]"></span>
              <MapPin className="w-3.5 h-3.5 text-[#9B5347]" />
              <span>Red de Apoyo y Acompañamiento en Málaga</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#36221E] font-bold leading-[1.12] mb-6 tracking-tight">
              No estás sola. <br />
              <span className="italic font-normal text-[#8A463B]">No es tu culpa</span> y no eres un número.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#5F4E47] font-normal leading-relaxed mb-8 max-w-2xl">
              Bienvenida a un espacio de calma, comprensión y verdad médica sobre el <strong className="font-semibold text-[#36221E]">lipedema</strong>. 
              Somos una red de apoyo sin ánimo de lucro en Málaga nacida para guiarte, escucharte y acompañarte 
              de forma <span className="underline decoration-[#C48679] underline-offset-4 decoration-2">completamente gratuita</span>.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 bg-[#9B5347] hover:bg-[#864439] text-[#FFF] px-7 py-3.5 rounded-full text-base font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Heart className="w-5 h-5 text-[#FBE7E3] fill-current" />
                <span>Hablar con nosotras (Gratuito)</span>
              </button>
              
              <a
                href="#test-orientativo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#D5C2B2] bg-white/70 hover:bg-white text-[#4A3B36] font-medium text-base shadow-xs hover:shadow-sm transition-all"
              >
                <span>Hacer test orientativo</span>
                <ArrowRight className="w-4 h-4 text-[#8A463B]" />
              </a>
            </div>

            {/* Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full pt-4 border-t border-[#E8DDD2]">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#EFE3D8] text-[#8A463B] mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#36221E]">100% Altruista</h4>
                  <p className="text-xs text-[#715F58]">Sin ánimo de lucro ni venta de productos.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#EFE3D8] text-[#8A463B] mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#36221E]">Apoyo entre iguales</h4>
                  <p className="text-xs text-[#715F58]">Mujeres que han pasado por tu misma situación.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#EFE3D8] text-[#8A463B] mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#36221E]">Red Málaga</h4>
                  <p className="text-xs text-[#715F58]">Contactos éticos: fisio DLM, nutrición y ortopedia.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Polaroids & Real Brand Image Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Decorative botanical circle */}
            <div className="relative w-full max-w-md">
              
              {/* Back Card: ¿Qué es el lipedema? */}
              <div className="relative sm:absolute -top-4 sm:-top-8 sm:-left-4 w-full sm:w-72 bg-white p-3.5 pb-5 rounded-2xl shadow-[0_12px_30px_rgba(74,46,43,0.09)] border border-[#EBE1D8] transform sm:-rotate-4 hover:rotate-0 transition-transform duration-300 z-10 mb-6 sm:mb-0">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F6EFE9] mb-3">
                  <img
                    src="/images/que-es-el-lipedema.png"
                    alt="Información sobre qué es el lipedema"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] font-semibold text-[#8A463B] uppercase tracking-wider">
                    Divulgación
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-editorial text-lg font-semibold text-[#3A2421]">¿Qué es el Lipedema?</p>
                  <p className="text-xs text-[#76635C] mt-0.5">Enfermedad crónica del tejido adiposo reconocida por la OMS.</p>
                </div>
              </div>

              {/* Front Card: ¿Crees que tienes lipedema? */}
              <div className="relative sm:ml-24 sm:mt-12 w-full sm:w-76 bg-white p-3.5 pb-5 rounded-2xl shadow-[0_20px_40px_rgba(74,46,43,0.12)] border border-[#E3D6C9] transform sm:rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F6EFE9] mb-3">
                  <img
                    src="/images/crees-que-tienes-lipedema.jpg"
                    alt="Guía orientativa de síntomas de lipedema"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#9B5347] text-white px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1 shadow-sm">
                    <MessageCircle className="w-3 h-3" />
                    <span>Te escuchamos</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-editorial text-lg font-semibold text-[#3A2421]">¿Crees que tienes lipedema?</p>
                  <p className="text-xs text-[#76635C] mt-0.5">Despeja tus dudas con respeto, claridad y sin juzgarte.</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#3B2521] text-[#FAF7F2] p-3.5 rounded-2xl shadow-xl items-center gap-3 z-30 max-w-xs border border-[#583933]">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] p-0.5 shrink-0 flex items-center justify-center">
                  <img src="/images/logo-lipedema-malaga.png" alt="LM" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">Comunidad Málaga</p>
                  <p className="text-[#D3C3B9] text-[11px]">Guía médica y apoyo emocional gratuito</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
