import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings2 } from 'lucide-react';

interface CookieBannerProps {
  onOpenCookiePolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenCookiePolicy }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('lm_cookie_consent');
    if (!savedConsent) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'lm_cookie_consent',
      JSON.stringify({ necessary: true, analytics: true, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
    setShowConfig(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem(
      'lm_cookie_consent',
      JSON.stringify({ necessary: true, analytics: false, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
    setShowConfig(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      'lm_cookie_consent',
      JSON.stringify({ necessary: true, analytics: analyticsConsent, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
    setShowConfig(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-lg z-50 animate-slideUp"
    >
      <div className="bg-[#FAF7F2] border border-[#D5C2B2] rounded-3xl p-5 sm:p-6 shadow-[0_15px_40px_rgba(58,36,33,0.18)]">
        
        {!showConfig ? (
          <div>
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F0E3D8] text-[#8A463B] flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial text-lg font-bold text-[#36221E]">
                  Cuidamos tu privacidad y tranquilidad
                </h3>
                <p className="text-xs text-[#67544C] mt-1 leading-relaxed">
                  Utilizamos cookies técnicas necesarias para el correcto funcionamiento del sitio web y, si lo autorizas, cookies analíticas anónimas para comprender cómo mejorar la información ofrecida. No utilizamos cookies publicitarias de terceros.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4 text-xs text-[#826F67]">
              <span>Puedes consultar los detalles en nuestra</span>
              <button
                type="button"
                onClick={onOpenCookiePolicy}
                className="text-[#8A463B] font-semibold underline underline-offset-2 hover:text-[#5E2B23] cursor-pointer"
              >
                Política de Cookies
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1 border-t border-[#E8DCD1]">
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-xs font-semibold transition-all cursor-pointer text-center"
              >
                Aceptar todas
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="px-4 py-2.5 rounded-full bg-white hover:bg-[#F2E8DF] border border-[#D8C7B9] text-[#4E3D36] text-xs font-semibold transition-all cursor-pointer text-center"
              >
                Rechazar no esenciales
              </button>
              <button
                onClick={() => setShowConfig(true)}
                className="px-3 py-2 text-xs text-[#75625B] hover:text-[#36221E] font-medium transition-colors cursor-pointer text-center sm:ml-auto"
              >
                Configurar
              </button>
            </div>
          </div>
        ) : (
          /* Detailed Configuration View */
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E8DCD1] mb-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#36221E]">
                <Settings2 className="w-4 h-4 text-[#8A463B]" />
                <span>Preferencias de Cookies</span>
              </div>
              <button
                onClick={() => setShowConfig(false)}
                className="p-1 rounded-lg text-[#77645D] hover:bg-[#EFE4DA]"
                aria-label="Cerrar configuración"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 mb-5 max-h-56 overflow-y-auto pr-1">
              
              {/* Technical Cookies */}
              <div className="p-3 rounded-xl bg-white border border-[#E7DBD0]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#36221E]">Cookies Técnicas (Necesarias)</span>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-[#F4E8DF] text-[#8A463B]">
                    Siempre activas
                  </span>
                </div>
                <p className="text-[11px] text-[#715F57] leading-relaxed">
                  Imprescindibles para que la web funcione, gestionar la navegación y recordar tus elecciones de privacidad.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="p-3 rounded-xl bg-white border border-[#E7DBD0]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#36221E]">Cookies Analíticas (Opcionales)</span>
                  <input
                    type="checkbox"
                    checked={analyticsConsent}
                    onChange={(e) => setAnalyticsConsent(e.target.checked)}
                    className="w-4 h-4 text-[#9B5347] rounded border-[#CDBEAF] focus:ring-[#9B5347] cursor-pointer"
                  />
                </div>
                <p className="text-[11px] text-[#715F57] leading-relaxed">
                  Nos ayudan a evaluar qué apartados informativos resultan más útiles a las pacientes para mejorar la plataforma de apoyo.
                </p>
              </div>

            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#E8DCD1]">
              <button
                onClick={handleSaveCustom}
                className="px-4 py-2 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-xs font-semibold cursor-pointer"
              >
                Guardar selección
              </button>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
};
