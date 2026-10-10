import React, { useState } from 'react';
import { HelpCircle, AlertCircle, CheckCircle2, Info, Activity, Flame, ShieldAlert } from 'lucide-react';
import type { ContentSchema } from '../content/types';

interface WhatIsLipedemaProps {
  content: ContentSchema['whatIs'];
}

export const WhatIsLipedema: React.FC<WhatIsLipedemaProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<'definicion' | 'comparativa' | 'grados'>('definicion');

  return (
    <section id="que-es-el-lipedema" className="py-20 bg-white border-y border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5ECE5] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{content.tag}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#36221E] font-bold mb-4">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-[#66544D] leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#FAF7F2] rounded-2xl border border-[#DFD1C5] shadow-2xs">
            <button
              onClick={() => setActiveTab('definicion')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'definicion'
                  ? 'bg-[#3A2421] text-white shadow-xs'
                  : 'text-[#64524B] hover:text-[#3A2421]'
              }`}
            >
              {content.tabs.definition}
            </button>
            <button
              onClick={() => setActiveTab('comparativa')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'comparativa'
                  ? 'bg-[#3A2421] text-white shadow-xs'
                  : 'text-[#64524B] hover:text-[#3A2421]'
              }`}
            >
              {content.tabs.comparison}
            </button>
            <button
              onClick={() => setActiveTab('grados')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'grados'
                  ? 'bg-[#3A2421] text-white shadow-xs'
                  : 'text-[#64524B] hover:text-[#3A2421]'
              }`}
            >
              {content.tabs.stages}
            </button>
          </div>
        </div>

        {/* Tab 1: Definición y Síntomas */}
        {activeTab === 'definicion' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF7F2] p-6 sm:p-10 rounded-3xl border border-[#E9DFD5]">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-[#8A463B] uppercase tracking-wider">{content.cieCode}</span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#36221E] mt-1 mb-4">
                  {content.defTitle}
                </h3>
                <p className="text-[#584841] text-base leading-relaxed mb-4">
                  {content.defP1}
                </p>
                <p className="text-[#584841] text-base leading-relaxed mb-6">
                  {content.defP2}
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#E5DACF] flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#8A463B] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#5B4A43]">
                    {content.defCallout}
                  </p>
                </div>
              </div>

              {/* Symptoms */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-[#EAE0D7] shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F6ECE4] text-[#8A463B] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#36221E]">{content.symptoms.painTitle}</h4>
                    <p className="text-xs text-[#6F5E57] mt-0.5">{content.symptoms.painDesc}</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#EAE0D7] shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F6ECE4] text-[#8A463B] flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#36221E]">{content.symptoms.bruisesTitle}</h4>
                    <p className="text-xs text-[#6F5E57] mt-0.5">{content.symptoms.bruisesDesc}</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#EAE0D7] shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F6ECE4] text-[#8A463B] flex items-center justify-center shrink-0">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#36221E]">{content.symptoms.dietTitle}</h4>
                    <p className="text-xs text-[#6F5E57] mt-0.5">{content.symptoms.dietDesc}</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#EAE0D7] shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F6ECE4] text-[#8A463B] flex items-center justify-center shrink-0">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#36221E]">{content.symptoms.cuffTitle}</h4>
                    <p className="text-xs text-[#6F5E57] mt-0.5">{content.symptoms.cuffDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Comparativa */}
        {activeTab === 'comparativa' && (
          <div className="animate-fadeIn">
            <div className="overflow-x-auto rounded-3xl border border-[#E3D7CB] bg-white shadow-xs">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#FAF7F2] border-b border-[#E3D7CB] text-[#36221E]">
                    <th className="py-4 px-6 font-semibold">{content.comparisonHeaders.feature}</th>
                    <th className="py-4 px-6 font-semibold text-[#8A463B] bg-[#F7EEE7]/70">{content.comparisonHeaders.lipedema}</th>
                    <th className="py-4 px-6 font-semibold">{content.comparisonHeaders.obesity}</th>
                    <th className="py-4 px-6 font-semibold">{content.comparisonHeaders.cellulite}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE7DE] text-[#55453F]">
                  {content.comparisonRows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-4 px-6 font-medium text-[#36221E]">{row.feature}</td>
                      <td className="py-4 px-6 font-medium text-[#8A463B] bg-[#FBF7F4] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#8A463B] shrink-0" />
                        <span>{row.lipedema}</span>
                      </td>
                      <td className="py-4 px-6">{row.obesity}</td>
                      <td className="py-4 px-6">{row.cellulite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Grados y Tipos */}
        {activeTab === 'grados' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Stages Grid (4 stages including Lipolinfedema) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {content.stages.map((stage, idx) => (
                <div key={idx} className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E9DFD5] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
                  <div>
                    <span className="text-xs font-bold text-[#8A463B] uppercase tracking-wider">{stage.tag}</span>
                    <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#36221E] mt-1 mb-3">{stage.title}</h4>
                    <p className="text-xs sm:text-sm text-[#5C4B44] leading-relaxed mb-4">{stage.desc}</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-[#E4D9CE] text-xs text-[#715F58]">
                    <span className="font-semibold text-[#8A463B] block mb-0.5">Orientación:</span>
                    {stage.action}
                  </div>
                </div>
              ))}
            </div>

            {/* Reassuring Clinical Note */}
            {content.stagesNote && (
              <div className="p-5 rounded-2xl bg-white border border-[#E5DACF] flex items-start gap-3.5 shadow-2xs">
                <Info className="w-5 h-5 text-[#8A463B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#5B4A43] leading-relaxed">
                  {content.stagesNote}
                </p>
              </div>
            )}

            {/* Anatomical Types (Types I to V) */}
            {content.types && content.types.length > 0 && (
              <div className="pt-4 border-t border-[#EAE0D7]">
                <div className="mb-6">
                  <h3 className="font-editorial text-2xl font-bold text-[#36221E] mb-1">
                    {content.typesTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F5E57]">
                    {content.typesIntro}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                  {content.types.map((typeItem, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-[#EAE0D7] shadow-2xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F6ECE4] text-[#8A463B] text-[11px] font-bold uppercase tracking-wider inline-block mb-2">
                        {typeItem.title}
                      </span>
                      <p className="text-xs text-[#55453F] leading-snug">
                        {typeItem.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
