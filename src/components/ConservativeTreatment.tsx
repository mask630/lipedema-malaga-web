import React from 'react';
import { Apple, Waves, Scissors, Dumbbell, HeartHandshake, CheckCircle, ArrowUpRight } from 'lucide-react';
import type { ContentSchema } from '../content/types';

interface ConservativeTreatmentProps {
  content: ContentSchema['treatment'];
  onOpenContact: () => void;
}

const icons = [Apple, Waves, Scissors, Dumbbell, HeartHandshake];

export const ConservativeTreatment: React.FC<ConservativeTreatmentProps> = ({
  content,
  onOpenContact,
}) => {
  return (
    <section id="tratamiento-conservador" className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0D6] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-3">
            <Apple className="w-3.5 h-3.5" />
            <span>{content.tag}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#36221E] mb-5">
            {content.title} <br />
            <span className="text-[#8A463B] font-normal italic">{content.titleItalic}</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5F4E47] leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {content.pillars.map((item, index) => {
            const Icon = icons[index % icons.length];
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
                      0{index + 1}
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
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#6A5851]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#8A463B] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Special Guidance Card */}
          <div className="bg-gradient-to-br from-[#3B2521] to-[#54352F] text-white rounded-3xl p-7 flex flex-col justify-between shadow-lg">
            <div>
              <div className="inline-block p-2 rounded-xl bg-white/10 text-[#F2DFD7] mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white mb-2">
                {content.ctaCardTitle}
              </h3>
              <p className="text-sm text-[#E2D2CA] leading-relaxed mb-6">
                {content.ctaCardDesc}
              </p>
            </div>
            
            <button
              onClick={onOpenContact}
              className="w-full py-3 px-4 rounded-full bg-[#FAF7F2] text-[#3B2521] font-semibold text-sm hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{content.ctaCardBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Human Callout (Free of cliché) */}
        <div className="bg-[#FAF0E7] border border-[#DECBBF] rounded-3xl p-6 sm:p-8 text-center max-w-4xl mx-auto">
          <p className="font-editorial text-xl sm:text-2xl text-[#36221E] font-semibold mb-2 leading-snug">
            {content.calloutQuote}
          </p>
          <p className="text-sm text-[#6E5A53]">
            {content.calloutText}
          </p>
        </div>

      </div>
    </section>
  );
};
