import React, { useState, useEffect } from 'react';
import { HeartHandshake, Heart, CheckCircle2, Send, Lock, Copy, Check, ExternalLink } from 'lucide-react';
import type { ContactFormData } from '../types';
import type { ContentSchema } from '../content/types';

interface ContactSectionProps {
  content: ContentSchema['contact'];
  initialMessage?: string;
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  content,
  initialMessage,
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    stage: content.fields.stageOptions[0] || 'Sospecho que tengo lipedema',
    channel: content.fields.channelOptions[0] || 'Correo electrónico',
    message: '',
    privacyAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formattedRecord, setFormattedRecord] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [recordId, setRecordId] = useState('');

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({
        ...prev,
        message: initialMessage,
      }));
    }
  }, [initialMessage]);

  const generateDatabaseRecord = (data: ContactFormData): { recordId: string; formatted: string; mailtoUrl: string } => {
    const now = new Date();
    const dateStr = now.toISOString().replace('T', ' ').substring(0, 16);
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const id = `LM-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${randomSuffix}`;

    const formatted = `=======================================================
FICHA DE REGISTRO Y CONSULTA - LIPEDEMA MÁLAGA
Plataforma: lipedemamalaga.org
=======================================================
[REGISTRO]
ID_CONSULTA: ${id}
FECHA_HORA: ${dateStr} CET
ESTADO: PENDIENTE_DE_RESPUESTA

[DATOS_PERSONALES]
NOMBRE_CLIENTE: ${data.name.trim()}
EMAIL_CONTACTO: ${data.email.trim()}
TELEFONO_WHATSAPP: ${data.phone ? data.phone.trim() : 'No facilitado'}
LOCALIDAD_CIUDAD: ${data.city ? data.city.trim() : 'No indicada'}

[CLASIFICACION_Y_PREFERENCIAS]
MOMENTO_ACTUAL: ${data.stage}
CANAL_PREFERENTE: ${data.channel}

[DETALLE_DE_LA_CONSULTA]
${data.message.trim()}

[CONSENTIMIENTO_RGPD]
CONSENTIMIENTO_EXPLICITO: SÍ
FINALIDAD: ORIENTACION_Y_ACOMPANAMIENTO_GRATUITO
DESTINO: info@lipedemamalaga.org
=======================================================`;

    const subject = `[Registro ${id}] Consulta de orientación - ${data.name.trim()}`;
    const mailtoUrl = `mailto:info@lipedemamalaga.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formatted)}`;

    return { recordId: id, formatted, mailtoUrl };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Por favor, indica al menos tu nombre y tu correo electrónico.');
      return;
    }

    if (!formData.privacyAccepted) {
      setError('Es necesario marcar la casilla de política de privacidad para procesar tu consulta.');
      return;
    }

    setError(null);
    const { recordId: newId, formatted, mailtoUrl } = generateDatabaseRecord(formData);
    setRecordId(newId);
    setFormattedRecord(formatted);
    setSubmitted(true);

    // Try to trigger the default mail client automatically
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback handled in the UI
    }
  };

  const handleCopyRecord = () => {
    navigator.clipboard.writeText(formattedRecord).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      stage: content.fields.stageOptions[0] || 'Sospecho que tengo lipedema',
      channel: content.fields.channelOptions[0] || 'Correo electrónico',
      message: '',
      privacyAccepted: false,
    });
    setSubmitted(false);
    setCopied(false);
    setFormattedRecord('');
  };

  return (
    <section id="contacta-con-nosotros" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0D6] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-4">
              <Heart className="w-3.5 h-3.5" />
              <span>{content.tag}</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#36221E] mb-5 leading-tight">
              {content.title} <br />
              <span className="text-[#8A463B] font-normal italic">{content.titleItalic}</span>
            </h2>

            <p className="text-base text-[#5B4A43] leading-relaxed mb-6">
              {content.subtitle}
            </p>

            {/* Confidence Cards */}
            <div className="space-y-3.5 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-[#E6DCD1] shadow-2xs flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#8A463B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#36221E]">{content.cardPrivacyTitle}</h4>
                  <p className="text-xs text-[#715F57] mt-0.5">{content.cardPrivacyDesc}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E6DCD1] shadow-2xs flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#8A463B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#36221E]">{content.cardFreeTitle}</h4>
                  <p className="text-xs text-[#715F57] mt-0.5">{content.cardFreeDesc}</p>
                </div>
              </div>
            </div>

            {/* Explanation why the form is essential */}
            <div className="p-6 rounded-3xl bg-[#F4EBE2] border border-[#DECFBF]">
              <div className="flex items-center gap-2 mb-2">
                <HeartHandshake className="w-4 h-4 text-[#8A463B]" />
                <p className="text-xs font-bold text-[#7E4237] uppercase tracking-wider">
                  {content.directTitle}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[#67544C] leading-relaxed">
                {content.directDesc}
              </p>
            </div>

          </div>

          {/* Right Column: Structured Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E6DCD1] shadow-[0_12px_40px_rgba(74,46,43,0.06)]">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="border-b border-[#EFE5DB] pb-4 mb-2">
                    <h3 className="font-editorial text-2xl font-bold text-[#36221E]">
                      {content.formTitle}
                    </h3>
                    <p className="text-xs text-[#7A675F] mt-1">
                      {content.formSubtitle}
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
                        {content.fields.name} <span className="text-[#8A463B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={content.fields.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                        {content.fields.email} <span className="text-[#8A463B]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={content.fields.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                        {content.fields.phone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={content.fields.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                        {content.fields.city}
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder={content.fields.cityPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Stage and Channel Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                        {content.fields.stage}
                      </label>
                      <select
                        value={formData.stage}
                        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-xs sm:text-sm text-[#36221E] outline-none transition-all cursor-pointer"
                      >
                        {content.fields.stageOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                        {content.fields.channel}
                      </label>
                      <select
                        value={formData.channel}
                        onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-xs sm:text-sm text-[#36221E] outline-none transition-all cursor-pointer"
                      >
                        {content.fields.channelOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                      {content.fields.message}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={content.fields.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="privacyCheck"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      className="mt-1 w-4 h-4 text-[#9B5347] rounded border-[#CDBEAF] focus:ring-[#9B5347] cursor-pointer"
                    />
                    <label htmlFor="privacyCheck" className="text-xs text-[#63524A] leading-relaxed cursor-pointer">
                      {content.fields.privacyCheckbox}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-[#9B5347] underline underline-offset-2 font-medium hover:text-[#7A3E34] cursor-pointer"
                      >
                        {content.fields.privacyLink}
                      </button>
                      {content.fields.privacySuffix}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>{content.fields.submitBtn}</span>
                  </button>

                  <p className="text-center text-[11px] text-[#86746C] pt-1">
                    {content.fields.securityNote}
                  </p>

                </form>
              ) : (
                /* Structured Database Confirmation View */
                <div className="py-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#F4E8DF] text-[#9B5347] flex items-center justify-center mx-auto mb-4 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#36221E] text-center mb-2">
                    {content.success.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5B4942] text-center max-w-md mx-auto mb-6">
                    {content.success.desc}
                  </p>

                  {/* Formatted Code Block for Database Storage */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between pb-2 text-xs font-semibold text-[#6C5750]">
                      <span>{content.success.summaryHeading} <code className="bg-[#EFE4DA] px-2 py-0.5 rounded text-[#36221E]">{recordId}</code></span>
                      <button
                        onClick={handleCopyRecord}
                        className="inline-flex items-center gap-1.5 text-xs text-[#9B5347] hover:text-[#793A30] font-semibold cursor-pointer"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? content.success.copiedNotice : content.success.copyBtn}</span>
                      </button>
                    </div>

                    <pre className="p-4 rounded-2xl bg-[#2A1D1A] text-[#EFE3DB] font-mono text-[11px] sm:text-xs overflow-x-auto border border-[#48332E] max-h-60 leading-relaxed">
                      {formattedRecord}
                    </pre>
                  </div>

                  {/* Actions to ensure email is sent */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`mailto:info@lipedemamalaga.org?subject=${encodeURIComponent(`[Registro ${recordId}] Consulta Lipedema Málaga - ${formData.name}`)}&body=${encodeURIComponent(formattedRecord)}`}
                      className="w-full sm:flex-1 py-3 px-4 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm text-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{content.success.openEmailBtn}</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#D5C2B2] hover:bg-[#FAF7F2] text-[#4A3A34] text-xs font-semibold transition-all cursor-pointer"
                    >
                      {content.success.anotherBtn}
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
