import React, { useState } from 'react';
import { HelpCircle, AlertCircle, CheckCircle2, XCircle, Info, Activity, Flame, ShieldAlert } from 'lucide-react';

export const WhatIsLipedema: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'definicion' | 'comparativa' | 'grados'>('definicion');

  return (
    <section id="que-es-el-lipedema" className="py-20 bg-white border-y border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5ECE5] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Información Médica Comprensible</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#36221E] font-bold mb-4">
            ¿Qué es realmente el Lipedema?
          </h2>
          <p className="text-base sm:text-lg text-[#66544D] leading-relaxed">
            Una patología del tejido adiposo reconocida oficialmente por la Organización Mundial de la Salud (OMS), 
            a menudo invisibilizada y erróneamente atribuida a la falta de disciplina.
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
              Definición y Síntomas
            </button>
            <button
              onClick={() => setActiveTab('comparativa')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'comparativa'
                  ? 'bg-[#3A2421] text-white shadow-xs'
                  : 'text-[#64524B] hover:text-[#3A2421]'
              }`}
            >
              Lipedema vs Obesidad y Celulitis
            </button>
            <button
              onClick={() => setActiveTab('grados')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'grados'
                  ? 'bg-[#3A2421] text-white shadow-xs'
                  : 'text-[#64524B] hover:text-[#3A2421]'
              }`}
            >
              Grados y Tipos
            </button>
          </div>
        </div>

        {/* Tab 1: Definición y Síntomas */}
        {activeTab === 'definicion' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF7F2] p-6 sm:p-10 rounded-3xl border border-[#E9DFD5]">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-[#8A463B] uppercase tracking-wider">CIE-11 · Código EF02.2</span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#36221E] mt-1 mb-4">
                  Una enfermedad inflamatoria, no un problema estético
                </h3>
                <p className="text-[#584841] text-base leading-relaxed mb-4">
                  El lipedema es una <strong>proliferación crónica y patológica de las células grasas</strong> (adipocitos), 
                  acompañada de microinflamación crónica, fibrosis tisular y alteración de la microcirculación linfática y vascular.
                </p>
                <p className="text-[#584841] text-base leading-relaxed mb-6">
                  Afecta de forma casi exclusiva a mujeres y suele manifestarse o intensificarse durante cambios hormonales clave 
                  (pubertad, embarazo, menopausia o uso de anticonceptivos). No se origina por comer de más ni se cura simplemente con dietas restrictivas.
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#E5DACF] flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#8A463B] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#5B4A43]">
                    <strong>El alivio del diagnóstico:</strong> Poner nombre a lo que te ocurre suele ser un punto de inflexión. 
                    Comprendes que no es culpa de tu esfuerzo, sino de una patología que requiere un abordaje especializado.
                  </p>
                </div>
              </div>

              {/* Síntomas clave */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                
                <div className="bg-white p-4 rounded-2xl border border-[#EAE0D7] shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F6ECE4] text-[#8A463B] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#36221E]">Dolor y pesadez crónica</h4>
                    <p className="text-xs text-[#6F5E57] mt-0.5">Dolor al tacto, roce de ropa o leve presión, pesadez intensa tras estar de pie.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#EAE0D7] shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F6ECE4] text-[#8A463B] flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#36221E]">Hematomas espontáneos</h4>
                    <p className="text-xs text-[#6F5E57] mt-0.5">Moratones frecuentes sin recordar ningún golpe, por alta fragilidad capilar.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#EAE0D7] shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F6ECE4] text-[#8A463B] flex items-center justify-center shrink-0">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#36221E]">Resistencia a dietas</h4>
                    <p className="text-xs text-[#6F5E57] mt-0.5">Puedes perder volumen en torso o rostro, pero las piernas o brazos apenas varían.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#EAE0D7] shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F6ECE4] text-[#8A463B] flex items-center justify-center shrink-0">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#36221E]">Signo del manguito</h4>
                    <p className="text-xs text-[#6F5E57] mt-0.5">El ensanchamiento frena abruptamente sobre los tobillos o muñecas, pies y manos intactos.</p>
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
                    <th className="py-4 px-6 font-semibold">Característica</th>
                    <th className="py-4 px-6 font-semibold text-[#8A463B] bg-[#F7EEE7]/70">Lipedema</th>
                    <th className="py-4 px-6 font-semibold">Obesidad Común</th>
                    <th className="py-4 px-6 font-semibold">Celulitis Común</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE7DE] text-[#55453F]">
                  <tr>
                    <td className="py-4 px-6 font-medium text-[#36221E]">¿Produce dolor y pesadez?</td>
                    <td className="py-4 px-6 font-medium text-[#8A463B] bg-[#FBF7F4]">
                      <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8A463B]" /> Sí, dolor al tacto y pesadez</span>
                    </td>
                    <td className="py-4 px-6"><span className="inline-flex items-center gap-1.5 text-gray-500"><XCircle className="w-4 h-4" /> No causa dolor directo al tacto</span></td>
                    <td className="py-4 px-6"><span className="inline-flex items-center gap-1.5 text-gray-500"><XCircle className="w-4 h-4" /> Indolora</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-[#36221E]">Hematomas con facilidad</td>
                    <td className="py-4 px-6 font-medium text-[#8A463B] bg-[#FBF7F4]">
                      <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8A463B]" /> Muy frecuentes (fragilidad capilar)</span>
                    </td>
                    <td className="py-4 px-6">Infrecuente</td>
                    <td className="py-4 px-6">No característico</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-[#36221E]">Respuesta a dieta / déficit calórico</td>
                    <td className="py-4 px-6 font-medium text-[#8A463B] bg-[#FBF7F4]">
                      <span className="text-[#8A463B] font-semibold">Mínima en zona afectada</span> (la grasa enferma no se metaboliza igual)
                    </td>
                    <td className="py-4 px-6">Responde de manera proporcional en todo el cuerpo</td>
                    <td className="py-4 px-6">Puede mejorar levemente con ejercicio y tono</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-[#36221E]">Afectación de pies y manos</td>
                    <td className="py-4 px-6 font-medium text-[#8A463B] bg-[#FBF7F4]">
                      <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8A463B]" /> Respeta pies y manos (escalón en tobillo)</span>
                    </td>
                    <td className="py-4 px-6">Grasa homogénea</td>
                    <td className="py-4 px-6">No aplica</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-[#36221E]">Clasificación médica</td>
                    <td className="py-4 px-6 font-semibold text-[#8A463B] bg-[#FBF7F4]">
                      Enfermedad crónica (OMS CIE-11)
                    </td>
                    <td className="py-4 px-6">Enfermedad metabólica general</td>
                    <td className="py-4 px-6">Condición estética del tejido conectivo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Grados y Tipos */}
        {activeTab === 'grados' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E9DFD5] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#8A463B] uppercase tracking-wider">Etapa Inicial</span>
                <h4 className="font-editorial text-2xl font-bold text-[#36221E] mt-1 mb-3">Grado I</h4>
                <p className="text-sm text-[#5C4B44] leading-relaxed mb-4">
                  Superficie de la piel regular y suave al inicio. Al tacto se aprecian pequeños nódulos subcutáneos 
                  (sensación de pequeños granos de arena o perdigones). Puede haber ya dolor o pesadez.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#E4D9CE] text-xs text-[#715F58]">
                <strong>Tratamiento:</strong> El tratamiento conservador precoz frena el avance y alivia síntomas de inmediato.
              </div>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E9DFD5] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#8A463B] uppercase tracking-wider">Etapa Intermedia</span>
                <h4 className="font-editorial text-2xl font-bold text-[#36221E] mt-1 mb-3">Grado II</h4>
                <p className="text-sm text-[#5C4B44] leading-relaxed mb-4">
                  Superficie cutánea irregular (aspecto conocido como piel de colchón). Nódulos del tamaño de nueces 
                  o canicas fácilmente palpables. Aumenta la sensación de pesadez y los hematomas.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#E4D9CE] text-xs text-[#715F58]">
                <strong>Tratamiento:</strong> Medias de compresión de tejido plano, nutrición antiinflamatoria y fisioterapia DLM.
              </div>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E9DFD5] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#8A463B] uppercase tracking-wider">Etapa Avanzada</span>
                <h4 className="font-editorial text-2xl font-bold text-[#36221E] mt-1 mb-3">Grado III</h4>
                <p className="text-sm text-[#5C4B44] leading-relaxed mb-4">
                  Grandes lóbulos o pliegues de grasa deformantes, especialmente en muslos, rodillas o pantorrillas. 
                  Puede dificultar la marcha y comprometer la articulación.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#E4D9CE] text-xs text-[#715F58]">
                <strong>Tratamiento:</strong> Tratamiento conservador intensivo y valoración quirúrgica descompresiva por cirujano experto.
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
