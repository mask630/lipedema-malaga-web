import React from 'react';
import { Heart, ShieldCheck, ArrowRight, Sparkles, MessageCircle, Users } from 'lucide-react';
import type { ContentSchema } from '../content/types';

interface HeroProps {
  content: ContentSchema['hero'];
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ content, onOpenContact }) => {
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-[#F5E5DC]/50 via-[#EFE2D3]/30 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Reassuring text */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#36221E] font-bold leading-[1.14] mb-6 tracking-tight">
              {content.titlePrefix} <br />
              <span className="italic font-normal text-[#8A463B]">{content.titleHighlight}</span>
              {content.titleSuffix}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#5F4E47] font-normal leading-relaxed mb-8 max-w-2xl">
              {content.subtitle}
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 bg-[#9B5347] hover:bg-[#864439] text-[#FFF] px-7 py-3.5 rounded-full text-base font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <Heart className="w-5 h-5 text-[#FBE7E3] fill-current" />
                <span>{content.ctaPrimary}</span>
              </button>
              
              <a
                href="#test-orientativo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#D5C2B2] bg-white/70 hover:bg-white text-[#4A3B36] font-medium text-base shadow-2xs hover:shadow-xs transition-all"
              >
                <span>{content.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 text-[#8A463B]" />
              </a>
            </div>

            {/* 3 Trust Pillars (Clean & Human) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4 border-t border-[#E8DDD2]">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#EFE3D8] text-[#8A463B] mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#36221E]">{content.pillars.freeTitle}</h4>
                  <p className="text-xs text-[#715F58]">{content.pillars.freeDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#EFE3D8] text-[#8A463B] mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#36221E]">{content.pillars.peersTitle}</h4>
                  <p className="text-xs text-[#715F58]">{content.pillars.peersDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#EFE3D8] text-[#8A463B] mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#36221E]">{content.pillars.networkTitle}</h4>
                  <p className="text-xs text-[#715F58]">{content.pillars.networkDesc}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Visual Polaroids (Without dark floating box) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            <div className="relative w-full max-w-md">
              
              {/* Back Card: Polaroid 1 */}
              <div className="relative sm:absolute -top-4 sm:-top-8 sm:-left-4 w-full sm:w-72 bg-white p-3.5 pb-5 rounded-2xl shadow-[0_12px_30px_rgba(74,46,43,0.08)] border border-[#EBE1D8] transform sm:-rotate-4 hover:rotate-0 transition-transform duration-300 z-10 mb-6 sm:mb-0">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F6EFE9] mb-3">
                  <img
                    src="./images/que-es-el-lipedema.png"
                    alt={content.polaroid1Title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-editorial text-lg font-semibold text-[#3A2421]">{content.polaroid1Title}</p>
                  <p className="text-xs text-[#76635C] mt-0.5">{content.polaroid1Desc}</p>
                </div>
              </div>

              {/* Front Card: Polaroid 2 */}
              <div className="relative sm:ml-24 sm:mt-12 w-full sm:w-76 bg-white p-3.5 pb-5 rounded-2xl shadow-[0_18px_36px_rgba(74,46,43,0.11)] border border-[#E3D6C9] transform sm:rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F6EFE9] mb-3">
                  <img
                    src="./images/crees-que-tienes-lipedema.jpg"
                    alt={content.polaroid2Title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#9B5347] text-white px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1 shadow-sm">
                    <MessageCircle className="w-3 h-3" />
                    <span>{content.badgeListen}</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-editorial text-lg font-semibold text-[#3A2421]">{content.polaroid2Title}</p>
                  <p className="text-xs text-[#76635C] mt-0.5">{content.polaroid2Desc}</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
