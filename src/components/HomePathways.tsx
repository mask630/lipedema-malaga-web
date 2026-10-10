import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, ArrowRight, HeartHandshake } from 'lucide-react';
import type { Lang, ViewMode } from '../types';

interface HomePathwaysProps {
  lang: Lang;
  onNavigate: (view: ViewMode) => void;
}

export const HomePathways: React.FC<HomePathwaysProps> = ({ lang, onNavigate }) => {
  const isEs = lang === 'es';

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAE0D6] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-3">
            {isEs ? 'Toma el control a tu ritmo' : 'Take control at your own pace'}
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#36221E] mb-4">
            {isEs ? '¿En qué podemos acompañarte hoy?' : 'How can we support you today?'}
          </h2>
          <p className="text-base sm:text-lg text-[#5F4E47] leading-relaxed">
            {isEs
              ? 'No necesitas leerlo todo de golpe ni agobiarte con términos médicos. Selecciona lo que más te preocupe o interese en este momento.'
              : 'You do not need to take in everything at once or feel overwhelmed by medical terms. Choose what matters most to you right now.'}
          </p>
        </div>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          
          {/* Card 1: Qué es el lipedema */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E6DCD1] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6ECE4] text-[#8A463B] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A463B]">
                {isEs ? 'Información médica clara' : 'Clear medical facts'}
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#36221E] mt-1 mb-3">
                {isEs ? '¿Qué es el Lipedema?' : 'What is Lipedema?'}
              </h3>
              <p className="text-sm text-[#5C4B44] leading-relaxed mb-6">
                {isEs
                  ? 'Descubre por qué ocurre, sus síntomas clave, la tabla comparativa con otras afecciones, los 4 grados de evolución y los tipos anatómicos.'
                  : 'Discover why it occurs, key symptoms, comparison with other conditions, the 4 clinical stages and anatomical types.'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('que-es')}
              className="w-full py-3 px-5 rounded-full bg-[#FAF7F2] group-hover:bg-[#9B5347] text-[#4A3933] group-hover:text-white border border-[#D5C2B2] group-hover:border-[#9B5347] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>{isEs ? 'Explorar la guía' : 'Explore the guide'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Tratamientos */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E6DCD1] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6ECE4] text-[#8A463B] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A463B]">
                {isEs ? 'Bienestar y opciones' : 'Well-being & Options'}
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#36221E] mt-1 mb-3">
                {isEs ? 'Tratamientos y Cuidados' : 'Treatments & Care'}
              </h3>
              <p className="text-sm text-[#5C4B44] leading-relaxed mb-6">
                {isEs
                  ? 'Aprende sobre la nutrición antiinflamatoria, el drenaje linfático manual (DLM), las medias de tejido plano y los criterios de cirugía especializada.'
                  : 'Learn about anti-inflammatory nutrition, manual lymphatic drainage, flat-knit compression garments, and surgical criteria.'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('tratamiento')}
              className="w-full py-3 px-5 rounded-full bg-[#FAF7F2] group-hover:bg-[#9B5347] text-[#4A3933] group-hover:text-white border border-[#D5C2B2] group-hover:border-[#9B5347] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>{isEs ? 'Ver tratamientos' : 'View treatments'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Test orientativo */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E6DCD1] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6ECE4] text-[#8A463B] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A463B]">
                {isEs ? 'En solo 2 minutos' : 'In just 2 minutes'}
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#36221E] mt-1 mb-3">
                {isEs ? 'Test de Autoevaluación' : 'Self-Assessment Quiz'}
              </h3>
              <p className="text-sm text-[#5C4B44] leading-relaxed mb-6">
                {isEs
                  ? 'Un cuestionario de 5 preguntas orientativas para ayudarte a valorar de forma tranquila si tus sensaciones corporales coinciden con el lipedema.'
                  : 'A 5-question orientation quiz designed to help you calmly evaluate whether your physical sensations match lipedema criteria.'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('test')}
              className="w-full py-3 px-5 rounded-full bg-[#FAF7F2] group-hover:bg-[#9B5347] text-[#4A3933] group-hover:text-white border border-[#D5C2B2] group-hover:border-[#9B5347] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>{isEs ? 'Hacer el test' : 'Take the quiz'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Highlighted Banner to the Structured Consultation Form */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#DECFBF] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#9B5347] text-white flex items-center justify-center shrink-0 mt-1">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl font-bold text-[#36221E]">
                {isEs ? '¿Prefieres contarnos tu caso directamente?' : 'Prefer to share your case directly with us?'}
              </h3>
              <p className="text-xs sm:text-sm text-[#66544D] mt-1 max-w-xl leading-relaxed">
                {isEs
                  ? 'Nuestro apoyo es 100% gratuito. Rellena la ficha de consulta para que una compañera voluntaria revise tus datos de forma ordenada y confidencial.'
                  : 'Our peer support is 100% free of charge. Fill out our consultation sheet so a peer volunteer can review your case carefully and confidentially.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contacto')}
            className="w-full md:w-auto shrink-0 px-8 py-3.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer text-center"
          >
            {isEs ? 'Rellenar Ficha de Consulta' : 'Open Consultation Sheet'}
          </button>
        </div>

      </div>
    </section>
  );
};
