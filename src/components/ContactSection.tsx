import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Heart, CheckCircle2, Send, Lock } from 'lucide-react';
import type { ContactFormData } from '../types';

interface ContactSectionProps {
  initialMessage?: string;
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialMessage,
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    stage: 'Sospecho que tengo lipedema',
    message: '',
    privacyAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({
        ...prev,
        message: initialMessage,
      }));
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Por favor, indica tu nombre y un email de contacto.');
      return;
    }

    if (!formData.privacyAccepted) {
      setError('Es necesario aceptar la política de privacidad para proteger tus datos confidenciales.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      stage: 'Sospecho que tengo lipedema',
      message: '',
      privacyAccepted: false,
    });
    setSubmitted(false);
  };

  return (
    <section id="contacta-con-nosotros" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Reassurance & Context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0D6] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-4">
              <Heart className="w-3.5 h-3.5" />
              <span>Atención 100% Gratuita y Confidencial</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#36221E] mb-5 leading-tight">
              Contacta con nosotras: <br />
              <span className="text-[#8A463B] font-normal italic">Estamos aquí para acompañarte</span>
            </h2>

            <p className="text-base text-[#5B4A43] leading-relaxed mb-6">
              Rellena estos mínimos datos y una compañera de Lipedema Málaga se pondrá en contacto contigo de forma personalizada. 
              No te compromete a nada, no intentamos venderte ningún producto ni tratamiento. 
              Solo queremos ofrecerte una mano amiga y guiarte con información honesta en Málaga.
            </p>

            {/* Confidence Cards */}
            <div className="space-y-3.5 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-[#E6DCD1] shadow-2xs flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#8A463B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#36221E]">Máxima Confidencialidad (RGPD)</h4>
                  <p className="text-xs text-[#715F57] mt-0.5">Tus datos nunca se compartirán con empresas ni con fines comerciales de ningún tipo.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E6DCD1] shadow-2xs flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#8A463B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#36221E]">Sin Coste Alguno</h4>
                  <p className="text-xs text-[#715F57] mt-0.5">Nuestra ayuda y orientación es totalmente voluntaria y altruista.</p>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-3xl bg-[#F4EBE2] border border-[#DECFBF]">
              <p className="text-xs font-bold text-[#7E4237] uppercase tracking-wider mb-3">
                ¿Prefieres escribirnos directamente?
              </p>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:info@lipedemamalaga.org"
                  className="flex items-center gap-3 text-[#4A3933] hover:text-[#8A463B] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#8A463B]" />
                  <span className="font-medium">info@lipedemamalaga.org</span>
                </a>
                <a
                  href="https://www.instagram.com/lipedemamalaga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#4A3933] hover:text-[#8A463B] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#E1306C]" />
                  <span className="font-medium">Mensaje directo en Instagram: @lipedemamalaga</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E6DCD1] shadow-[0_12px_40px_rgba(74,46,43,0.06)]">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="border-b border-[#EFE5DB] pb-4 mb-2">
                    <h3 className="font-editorial text-2xl font-bold text-[#36221E]">
                      Formulario de Orientación
                    </h3>
                    <p className="text-xs text-[#7A675F] mt-1">
                      Cuéntanos en qué podemos ayudarte y te responderemos con calma y cariño.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                      {error}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                        Tu Nombre o Alias <span className="text-[#8A463B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Laura"
                        className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                        Correo Electrónico <span className="text-[#8A463B]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu-email@ejemplo.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                      Teléfono o WhatsApp <span className="text-xs text-[#8A766F] font-normal lowercase">(opcional, si prefieres contacto por chat)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+34 600 00 00 00"
                      className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none transition-all"
                    />
                  </div>

                  {/* Stage selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                      ¿En qué momento o situación te encuentras?
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none transition-all cursor-pointer"
                    >
                      <option value="Sospecho que tengo lipedema">Sospecho que tengo lipedema y no sé qué pasos dar</option>
                      <option value="Diagnóstico reciente">Tengo diagnóstico reciente y necesito orientación</option>
                      <option value="Tratamiento conservador en Málaga">Quiero información sobre tratamiento conservador en Málaga</option>
                      <option value="Cirugía y postoperatorio">Estoy valorando cirugía o buscando apoyo en el postoperatorio</option>
                      <option value="Solo necesito hablar o desahogarme">Solo necesito hablar con alguien que comprenda mi situación</option>
                      <option value="Otra consulta">Otra duda o sugerencia</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                      Tu mensaje o preguntas <span className="text-xs text-[#8A766F] font-normal lowercase">(puedes escribir todo lo que sientas)</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos brevemente qué te preocupa o qué información necesitas sobre Málaga..."
                      className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Privacy Checkbox (Strict RGPD) */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="privacyCheck"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      className="mt-1 w-4 h-4 text-[#9B5347] rounded border-[#CDBEAF] focus:ring-[#9B5347] cursor-pointer"
                    />
                    <label htmlFor="privacyCheck" className="text-xs text-[#63524A] leading-relaxed cursor-pointer">
                      He leído y acepto la{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-[#9B5347] underline underline-offset-2 font-medium hover:text-[#7A3E34] cursor-pointer"
                      >
                        Política de Privacidad
                      </button>
                      . Entiendo que mis datos serán tratados de manera confidencial exclusivamente para responderme y orientarme sin fines comerciales.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar solicitud de orientación gratuita</span>
                  </button>

                  <p className="text-center text-[11px] text-[#86746C] pt-1">
                    🔒 Tus datos están protegidos conforme al RGPD europeo y la LOPDGDD española.
                  </p>

                </form>
              ) : (
                /* Success View */
                <div className="text-center py-10 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#F4E8DF] text-[#9B5347] flex items-center justify-center mx-auto mb-5 shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="font-editorial text-3xl font-bold text-[#36221E] mb-3">
                    ¡Mensaje recibido con cariño, {formData.name}!
                  </h3>

                  <p className="text-sm text-[#5B4942] leading-relaxed max-w-md mx-auto mb-6">
                    Una compañera de Lipedema Málaga revisará tu mensaje y te responderá lo antes posible a 
                    <strong className="text-[#36221E]"> {formData.email}</strong>. 
                    Recuerda que no estás sola en este camino.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7DBD0] max-w-sm mx-auto text-xs text-[#715E56] mb-8">
                    ¿Es urgente o prefieres escribirnos ya por Instagram? Puedes escribirnos a @lipedemamalaga o info@lipedemamalaga.org en cualquier momento.
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 rounded-full border border-[#D5C2B2] hover:bg-[#FAF7F2] text-[#4A3A34] text-xs font-semibold transition-all cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
