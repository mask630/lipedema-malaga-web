import React from 'react';
import { Apple, Waves, Scissors, Dumbbell, HeartHandshake, CheckCircle, ArrowUpRight } from 'lucide-react';

interface ConservativeTreatmentProps {
  onOpenContact: () => void;
}

export const ConservativeTreatment: React.FC<ConservativeTreatmentProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      icon: Apple,
      title: 'Nutrición Antiinflamatoria',
      subtitle: 'Nutricionistas especializadas en Málaga',
      desc: 'No se trata de pasar hambre ni de dietas restrictivas que solo aumentan el estrés. Trabajamos con profesionales en Málaga que comprenden la fisiopatología del lipedema para reducir la inflamación sistémica, cuidar tu salud digestiva y mejorar tu energía diaria sin obsesión con la báscula.',
      keyPoints: [
        'Enfoque antiinflamatorio real y sostenible',
        'Respeto por tu relación con la comida',
        'Reducción de dolor y retención de líquidos',
      ],
    },
    {
      icon: Waves,
      title: 'Fisioterapia y Drenaje Linfático (DLM)',
      subtitle: 'Centros en Málaga especializados en Lipedema',
      desc: 'El drenaje linfático manual bien ejecutado por un fisioterapeuta colegiado con formación específica en lipedema alivia la pesadez y moviliza el líquido intersticial. Te guiamos hacia centros de confianza en Málaga que no aplican maniobras agresivas que puedan dañar tus vasos capilares.',
      keyPoints: [
        'Drenaje Linfático Manual (DLM) respetuoso',
        'Terapia descongestiva y terapia de presoterapia adaptada',
        'Técnicas miofasciales para aliviar el dolor profundo',
      ],
    },
    {
      icon: Scissors,
      title: 'Medias de Compresión a Medida',
      subtitle: 'Ortopedias expertas en Málaga (Tejido Plano)',
      desc: 'Las medias de compresión de tejido plano son la herramienta reina del tratamiento conservador. No tienen nada que ver con las medias de descanso de farmacia. Te asesoramos sobre cómo tramitar la receta médica si procede y en qué ortopedias de Málaga toman las medidas de forma precisa.',
      keyPoints: [
        'Distinción clave entre tejido circular y tejido plano',
        'Asesoramiento en toma de medidas milimétricas',
        'Guía para la prescripción médica en el sistema sanitario',
      ],
    },
    {
      icon: Dumbbell,
      title: 'Ejercicio y Movimiento Terapéutico',
      subtitle: 'Entrenadores cualificados en patología vascular',
      desc: 'Moverse con lipedema no debe ser un suplicio ni generar dolor en rodillas o tobillos. El trabajo de fuerza dosificado, la natación o aguagym y caminar en agua aprovechan la presión hidrostática natural para drenar las extremidades sin sobrecargar las articulaciones.',
      keyPoints: [
        'Actividades acuáticas con hidroterapia natural',
        'Fuerza adaptada para mejorar la bomba muscular de pantorrilla',
        'Sin ejercicios de alto impacto que causen microlesiones',
      ],
    },
    {
      icon: HeartHandshake,
      title: 'Apoyo Psicológico y Salud Emocional',
      subtitle: 'Acompañamiento sin juicios ni culpa',
      desc: 'El desgaste psicológico tras años de incomprensión médica y social es una de las cargas más pesadas del lipedema. Sentirte escuchada por profesionales de la psicología y por compañeras de Málaga que viven tu misma realidad transforma el proceso.',
      keyPoints: [
        'Validación emocional de tu dolor y proceso',
        'Gestión de la autoimagen y la frustración',
        'Espacios de desahogo y comunidad entre iguales',
      ],
    },
  ];

  return (
    <section id="tratamiento-conservador" className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Background ambient decorative shapes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0D6] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-3">
            <Apple className="w-3.5 h-3.5" />
            <span>Camino Seguro y No Invasivo</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#36221E] mb-5">
            Tratamiento Conservador: <br />
            <span className="text-[#8A463B] font-normal italic">Recupera tu bienestar día a día</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5F4E47] leading-relaxed">
            Si no estás convencida de someterte a una operación quirúrgica o si deseas preparar tu cuerpo de la mejor manera, 
            el tratamiento conservador es la base imprescindible. Podemos guiarte paso a paso con los profesionales más éticos y preparados de Málaga.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-[#E9DFD4] shadow-[0_4px_20px_rgba(74,46,43,0.04)] hover:shadow-[0_10px_30px_rgba(74,46,43,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5EBE3] text-[#8A463B] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#876F67] border border-[#EBE1D8]">
                      Pilar 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#36221E] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#8A463B] mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-[#5B4942] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0E6DD] space-y-2">
                  {item.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#6A5851]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#8A463B] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Sixth Special Card: Our commitment */}
          <div className="bg-gradient-to-br from-[#3B2521] to-[#54352F] text-white rounded-3xl p-7 flex flex-col justify-between shadow-lg">
            <div>
              <div className="inline-block p-2 rounded-xl bg-white/10 text-[#F2DFD7] mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white mb-2">
                ¿Te parece un proceso abrumador?
              </h3>
              <p className="text-sm text-[#E2D2CA] leading-relaxed mb-6">
                Sabemos que coordinar nutrición, ortopedia, fisio y médicos puede ser agotador al principio. 
                No tienes que hacerlo sola. Te facilitamos los contactos directos en Málaga y te explicamos qué pasos dar primero.
              </p>
            </div>
            
            <button
              onClick={onOpenContact}
              className="w-full py-3 px-4 rounded-full bg-[#FAF7F2] text-[#3B2521] font-semibold text-sm hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Pedir orientación para tratamiento</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Motivational Callout */}
        <div className="bg-[#FAF0E7] border border-[#DECBBF] rounded-3xl p-6 sm:p-8 text-center max-w-4xl mx-auto">
          <p className="font-editorial text-xl sm:text-2xl text-[#36221E] font-semibold mb-2">
            «Sabemos que este proceso puede ser algo tedioso, pero no te preocupes: vas a saber cómo llevarlo perfectamente ❤️🩹»
          </p>
          <p className="text-sm text-[#6E5A53]">
            No necesitas hacer todo a la vez ni de golpe. Iremos paso a paso, a tu ritmo y según lo que tú necesites.
          </p>
        </div>

      </div>
    </section>
  );
};
