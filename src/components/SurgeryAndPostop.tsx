import React from 'react';
import { Stethoscope, AlertTriangle, ShieldCheck, HeartHandshake, CheckCircle2, Clock } from 'lucide-react';
import type { ContentSchema } from '../content/types';

interface SurgeryAndPostopProps {
  content: ContentSchema['surgery'];
  onOpenContact: () => void;
}

export const SurgeryAndPostop: React.FC<SurgeryAndPostopProps> = ({
  content,
  onOpenContact,
}) => {
  return (
    <section id="cirugia-postoperatorio" className="py-20 bg-white border-b border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EAE1] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5" />
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

        {/* 2 Column Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Card 1: Cirugía especializada */}
          <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#E8DCD0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#EAE0D5] text-[#783D32] text-xs font-bold uppercase tracking-wider">
                  {content.surgeryCardTag}
                </span>
                <span className="text-xs text-[#826F67]">{content.surgeryCardSub}</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#36221E] mb-3">
                {content.surgeryCardTitle}
              </h3>

              <p className="text-sm text-[#5B4942] leading-relaxed mb-5">
                {content.surgeryCardDesc}
              </p>

              <div className="space-y-3 mb-6">
                {content.surgeryCardPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#56453F]">
                    <CheckCircle2 className="w-4 h-4 text-[#8A463B] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E2D5C8] flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-[#62514A]">
                {content.surgeryCardWarning}
              </p>
            </div>
          </div>

          {/* Card 2: Postoperatorio */}
          <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#E8DCD0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#EAE0D5] text-[#783D32] text-xs font-bold uppercase tracking-wider">
                  {content.postopCardTag}
                </span>
                <span className="text-xs text-[#826F67]">{content.postopCardSub}</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#36221E] mb-3">
                {content.postopCardTitle}
              </h3>

              <p className="text-sm text-[#5B4942] leading-relaxed mb-5">
                {content.postopCardDesc}
              </p>

              <div className="space-y-3 mb-6">
                {content.postopCardPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#56453F]">
                    <Clock className="w-4 h-4 text-[#8A463B] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E2D5C8] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#8A463B] shrink-0 mt-0.5" />
              <p className="text-xs text-[#62514A]">
                {content.postopCardNote}
              </p>
            </div>
          </div>

        </div>

        {/* Support Box */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#E0D3C5] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#9B5347] text-white flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-editorial text-xl font-bold text-[#36221E]">
                {content.guidanceBoxTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#66544D] mt-1 max-w-xl">
                {content.guidanceBoxDesc}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full md:w-auto shrink-0 px-6 py-3 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            {content.guidanceBoxBtn}
          </button>
        </div>

      </div>
    </section>
  );
};
