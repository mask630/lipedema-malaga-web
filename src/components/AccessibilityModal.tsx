import React from 'react';
import {
  Accessibility,
  X,
  RotateCcw,
  Eye,
  BookOpen,
  Sparkles,
  Check,
  FileText,
} from 'lucide-react';
import type { Lang, AccessibilitySettings, LegalDocType } from '../types';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AccessibilitySettings;
  onUpdateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  onResetSettings: () => void;
  lang: Lang;
  onOpenDoc: (doc: LegalDocType) => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onResetSettings,
  lang,
  onOpenDoc,
}) => {
  if (!isOpen) return null;

  const isEs = lang === 'es';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="a11y-modal-title"
    >
      <div className="bg-[#FAF7F2] rounded-3xl border border-[#D5C2B2] w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col justify-between">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-[#E8DCD1] flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F4E8DF] text-[#8A463B] flex items-center justify-center shrink-0">
              <Accessibility className="w-6 h-6" />
            </div>
            <div>
              <h2 id="a11y-modal-title" className="font-editorial text-2xl font-bold text-[#36221E]">
                {isEs ? 'Ajustes de Accesibilidad' : 'Accessibility Settings'}
              </h2>
              <p className="text-xs text-[#7B6861] mt-0.5">
                {isEs
                  ? 'Adapta el portal a tus necesidades visuales, de lectura o cognitivas.'
                  : 'Customize the portal for your visual, reading, or cognitive needs.'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#6E5A53] hover:bg-[#EFE4DA] transition-colors cursor-pointer"
            aria-label={isEs ? 'Cerrar ventana de accesibilidad' : 'Close accessibility modal'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-7">
          
          {/* Section 1: Visión y Contraste */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-4 h-4 text-[#8A463B]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#793A30]">
                {isEs ? '1. Visión y Contraste' : '1. Vision & Contrast'}
              </h3>
            </div>

            <div className="space-y-3">
              {/* Font Size Selector */}
              <div className="bg-white p-4 rounded-2xl border border-[#E8DDD2] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-sm font-semibold text-[#36221E] block">
                    {isEs ? 'Tamaño de texto' : 'Text size'}
                  </span>
                  <span className="text-xs text-[#7B6861]">
                    {isEs ? 'Escala el tamaño de letra general' : 'Scale the overall font size'}
                  </span>
                </div>

                <div className="inline-flex items-center p-1 rounded-xl bg-[#FAF7F2] border border-[#D5C2B2] shrink-0">
                  <button
                    onClick={() => onUpdateSettings({ fontSize: 'normal' })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      settings.fontSize === 'normal'
                        ? 'bg-[#3A2421] text-white shadow-xs'
                        : 'text-[#5B4842] hover:text-[#3A2421]'
                    }`}
                  >
                    {isEs ? 'Normal' : 'Normal'}
                  </button>
                  <button
                    onClick={() => onUpdateSettings({ fontSize: 'large' })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      settings.fontSize === 'large'
                        ? 'bg-[#3A2421] text-white shadow-xs'
                        : 'text-[#5B4842] hover:text-[#3A2421]'
                    }`}
                  >
                    A+ 115%
                  </button>
                  <button
                    onClick={() => onUpdateSettings({ fontSize: 'xlarge' })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      settings.fontSize === 'xlarge'
                        ? 'bg-[#3A2421] text-white shadow-xs'
                        : 'text-[#5B4842] hover:text-[#3A2421]'
                    }`}
                  >
                    A++ 130%
                  </button>
                </div>
              </div>

              {/* High Contrast Toggle */}
              <div className="bg-white p-4 rounded-2xl border border-[#E8DDD2] flex items-center justify-between gap-3">
                <div>
                  <span className="text-sm font-semibold text-[#36221E] block">
                    {isEs ? 'Modo Alto Contraste' : 'High Contrast Mode'}
                  </span>
                  <span className="text-xs text-[#7B6861]">
                    {isEs ? 'Fondo oscuro con texto y bordes reforzados' : 'Dark background with boosted text and border contrast'}
                  </span>
                </div>

                <button
                  onClick={() => onUpdateSettings({ highContrast: !settings.highContrast })}
                  className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                    settings.highContrast ? 'bg-[#9B5347]' : 'bg-[#D5C2B2]'
                  }`}
                  aria-pressed={settings.highContrast}
                  aria-label={isEs ? 'Alternar modo alto contraste' : 'Toggle high contrast mode'}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform transform ${
                      settings.highContrast ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Lectura y Dislexia */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-[#8A463B]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#793A30]">
                {isEs ? '2. Comprensión Lectora & Dislexia' : '2. Reading & Dyslexia'}
              </h3>
            </div>

            <div className="space-y-3">
              {/* Dyslexia Font Toggle */}
              <div className="bg-white p-4 rounded-2xl border border-[#E8DDD2] flex items-center justify-between gap-3">
                <div>
                  <span className="text-sm font-semibold text-[#36221E] block">
                    {isEs ? 'Tipografía para dislexia' : 'Dyslexia-friendly font'}
                  </span>
                  <span className="text-xs text-[#7B6861]">
                    {isEs ? 'Fuente hiperlegible con trazos claros' : 'Hyperlegible font designed to reduce character confusion'}
                  </span>
                </div>

                <button
                  onClick={() => onUpdateSettings({ dyslexiaFont: !settings.dyslexiaFont })}
                  className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                    settings.dyslexiaFont ? 'bg-[#9B5347]' : 'bg-[#D5C2B2]'
                  }`}
                  aria-pressed={settings.dyslexiaFont}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform transform ${
                      settings.dyslexiaFont ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Text Spacing Toggle */}
              <div className="bg-white p-4 rounded-2xl border border-[#E8DDD2] flex items-center justify-between gap-3">
                <div>
                  <span className="text-sm font-semibold text-[#36221E] block">
                    {isEs ? 'Mayor espaciado de texto' : 'Increased text spacing'}
                  </span>
                  <span className="text-xs text-[#7B6861]">
                    {isEs ? 'Aumenta el interlineado y espacio entre letras' : 'Increases line-height and letter-spacing for easy tracking'}
                  </span>
                </div>

                <button
                  onClick={() => onUpdateSettings({ textSpacing: !settings.textSpacing })}
                  className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                    settings.textSpacing ? 'bg-[#9B5347]' : 'bg-[#D5C2B2]'
                  }`}
                  aria-pressed={settings.textSpacing}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform transform ${
                      settings.textSpacing ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reading Guide Toggle */}
              <div className="bg-white p-4 rounded-2xl border border-[#E8DDD2] flex items-center justify-between gap-3">
                <div>
                  <span className="text-sm font-semibold text-[#36221E] block">
                    {isEs ? 'Guía de lectura' : 'Reading guide line'}
                  </span>
                  <span className="text-xs text-[#7B6861]">
                    {isEs ? 'Muestra una regla horizontal que sigue tu cursor' : 'Displays a horizontal guide that follows your pointer'}
                  </span>
                </div>

                <button
                  onClick={() => onUpdateSettings({ readingGuide: !settings.readingGuide })}
                  className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                    settings.readingGuide ? 'bg-[#9B5347]' : 'bg-[#D5C2B2]'
                  }`}
                  aria-pressed={settings.readingGuide}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform transform ${
                      settings.readingGuide ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Section 3: Concentración y Navegación */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#8A463B]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#793A30]">
                {isEs ? '3. Concentración & Navegación' : '3. Focus & Navigation'}
              </h3>
            </div>

            <div className="space-y-3">
              {/* Highlight Links */}
              <div className="bg-white p-4 rounded-2xl border border-[#E8DDD2] flex items-center justify-between gap-3">
                <div>
                  <span className="text-sm font-semibold text-[#36221E] block">
                    {isEs ? 'Resaltar enlaces y botones' : 'Highlight links & buttons'}
                  </span>
                  <span className="text-xs text-[#7B6861]">
                    {isEs ? 'Subraya y añade contorno visible a elementos interactivos' : 'Underlines and outlines all interactive elements'}
                  </span>
                </div>

                <button
                  onClick={() => onUpdateSettings({ highlightLinks: !settings.highlightLinks })}
                  className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                    settings.highlightLinks ? 'bg-[#9B5347]' : 'bg-[#D5C2B2]'
                  }`}
                  aria-pressed={settings.highlightLinks}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform transform ${
                      settings.highlightLinks ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reduce Motion / Calm Mode */}
              <div className="bg-white p-4 rounded-2xl border border-[#E8DDD2] flex items-center justify-between gap-3">
                <div>
                  <span className="text-sm font-semibold text-[#36221E] block">
                    {isEs ? 'Modo Calma (Reducir animaciones)' : 'Calm Mode (Reduce motion)'}
                  </span>
                  <span className="text-xs text-[#7B6861]">
                    {isEs ? 'Detiene movimientos para evitar mareos o sobrecarga sensorial' : 'Stops transitions to prevent motion sickness and sensory overload'}
                  </span>
                </div>

                <button
                  onClick={() => onUpdateSettings({ reduceMotion: !settings.reduceMotion })}
                  className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                    settings.reduceMotion ? 'bg-[#9B5347]' : 'bg-[#D5C2B2]'
                  }`}
                  aria-pressed={settings.reduceMotion}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform transform ${
                      settings.reduceMotion ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 sm:p-7 border-t border-[#E8DCD1] bg-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onResetSettings}
              className="inline-flex items-center gap-1.5 text-xs text-[#7B6861] hover:text-[#36221E] font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isEs ? 'Restablecer valores' : 'Reset to default'}</span>
            </button>

            <span className="text-[#CDBEB2] hidden sm:inline">|</span>

            <button
              onClick={() => {
                onClose();
                onOpenDoc('accesibilidad');
              }}
              className="inline-flex items-center gap-1 text-xs text-[#8A463B] hover:text-[#673027] font-semibold cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isEs ? 'Declaración WCAG' : 'WCAG Statement'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>{isEs ? 'Aplicar y Cerrar' : 'Apply & Close'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
