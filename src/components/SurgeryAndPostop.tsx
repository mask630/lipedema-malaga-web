import React from 'react';
import { Stethoscope, AlertTriangle, ShieldCheck, HeartHandshake, CheckCircle2, Clock } from 'lucide-react';

interface SurgeryAndPostopProps {
  onOpenContact: () => void;
}

export const SurgeryAndPostop: React.FC<SurgeryAndPostopProps> = ({ onOpenContact }) => {
  return (
    <section id="cirugia-postoperatorio" className="py-20 bg-white border-b border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EAE1] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Guía Quirúrgica Transparente</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#36221E] mb-5">
            Cirugía y Postoperatorio: <br />
            <span className="text-[#8A463B] font-normal italic">Información honesta para decidir sin miedo</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5F4E47] leading-relaxed">
            Si estás valorando la intervención quirúrgica pero te asaltan las dudas sobre con quién acudir, qué técnica es la adecuada 
            o cómo afrontar el postoperatorio, queremos darte claridad real sin intereses comerciales.
          </p>
        </div>

        {/* 2 Column Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Card 1: La Cirugía (WAL / TAL especializada) */}
          <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#E8DCD0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#EAE0D5] text-[#783D32] text-xs font-bold uppercase tracking-wider">
                  Técnica Quirúrgica
                </span>
                <span className="text-xs text-[#826F67]">Lipedema vs Estética</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#36221E] mb-3">
                No es una liposucción tradicional
              </h3>

              <p className="text-sm text-[#5B4942] leading-relaxed mb-5">
                La intervención para lipedema (habitualmente técnica <strong>WAL - asistida por chorro de agua</strong> o <strong>TAL tumescente especializada</strong>) 
                tiene como único objetivo desinflamar y descomprimir los tejidos respetando al máximo la red de vasos linfáticos y nervios.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#56453F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8A463B] shrink-0 mt-0.5" />
                  <span><strong>Cánulas romas longitudinales:</strong> Diseñadas específicamente para no desgarrar los colectores linfáticos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#56453F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8A463B] shrink-0 mt-0.5" />
                  <span><strong>Ecografía Doppler previa:</strong> Evaluación vascular obligatoria antes de cualquier paso quirúrgico.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#56453F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8A463B] shrink-0 mt-0.5" />
                  <span><strong>Cirujanos acreditados:</strong> Exigir formación y experiencia demostrable exclusiva en lipedema.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E2D5C8] flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-[#62514A]">
                <strong>Alerta importante:</strong> Una liposucción estética convencional agresiva puede dañar irreversiblemente tu sistema linfático y desencadenar un lipolinfedema secundario. Es vital elegir especialistas cualificados.
              </p>
            </div>
          </div>

          {/* Card 2: El Postoperatorio (La mitad del éxito) */}
          <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#E8DCD0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#EAE0D5] text-[#783D32] text-xs font-bold uppercase tracking-wider">
                  Fase Crítica
                </span>
                <span className="text-xs text-[#826F67]">Recuperación y Resultados</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#36221E] mb-3">
                El postoperatorio es el 50% de la cirugía
              </h3>

              <p className="text-sm text-[#5B4942] leading-relaxed mb-5">
                Muchas personas no reciben la advertencia de que la recuperación requiere paciencia, drenajes inmediatos y meses de cuidado. 
                Saberlo de antemano te da tranquilidad y garantiza el mejor resultado clínico.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#56453F]">
                  <Clock className="w-4 h-4 text-[#8A463B] shrink-0 mt-0.5" />
                  <span><strong>Drenaje linfático precoz (primeras 24-48h):</strong> Fundamental para evacuar restos anestésicos y seromas.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#56453F]">
                  <Clock className="w-4 h-4 text-[#8A463B] shrink-0 mt-0.5" />
                  <span><strong>Prendas de compresión postquirúrgica:</strong> Ajustadas y supervisadas semana a semana según baje la inflamación.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#56453F]">
                  <Clock className="w-4 h-4 text-[#8A463B] shrink-0 mt-0.5" />
                  <span><strong>Tiempos reales:</strong> La desinflamación completa dura entre 6 y 12 meses; el apoyo emocional es clave en los altibajos.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E2D5C8] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#8A463B] shrink-0 mt-0.5" />
              <p className="text-xs text-[#62514A]">
                <strong>Nuestra red en Málaga:</strong> Ponemos a tu disposición centros de fisioterapia en Málaga que reciben a pacientes inmediatamente tras la intervención para el seguimiento postquirúrgico intensivo.
              </p>
            </div>
          </div>

        </div>

        {/* Independence & Ethics Box */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#E0D3C5] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#9B5347] text-white flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-editorial text-xl font-bold text-[#36221E]">
                Independencia y ética total
              </h4>
              <p className="text-xs sm:text-sm text-[#66544D] mt-1 max-w-xl">
                Lipedema Málaga no recibe comisiones, patrocinios ni contraprestaciones de ninguna clínica o cirujano. 
                Te compartimos la experiencia de pacientes reales para que tomes tus propias decisiones con libertad y seguridad.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full md:w-auto shrink-0 px-6 py-3 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            Pregúntanos tus dudas
          </button>
        </div>

      </div>
    </section>
  );
};
