import React, { useEffect } from 'react';
import { X, FileText, AlertCircle } from 'lucide-react';
import type { LegalDocType } from '../types';

interface LegalModalsProps {
  activeDoc: LegalDocType;
  onClose: () => void;
  onSelectDoc: (doc: LegalDocType) => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  activeDoc,
  onClose,
  onSelectDoc,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeDoc) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDoc, onClose]);

  if (!activeDoc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FAF7F2] border border-[#D5C2B2] rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-[0_25px_60px_rgba(58,36,33,0.3)] overflow-hidden">
        
        {/* Modal Topbar */}
        <div className="px-6 py-4 border-b border-[#E8DCD1] bg-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EFE3D8] text-[#8A463B] flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold text-[#36221E] leading-none">
                {activeDoc === 'aviso-legal' && 'Aviso Legal'}
                {activeDoc === 'privacidad' && 'Política de Privacidad (RGPD)'}
                {activeDoc === 'cookies' && 'Política de Cookies'}
                {activeDoc === 'descargo-medico' && 'Descargo de Responsabilidad Médica'}
                {activeDoc === 'accesibilidad' && 'Declaración de Accesibilidad Universal (WCAG 2.1)'}
              </h3>
              <p className="text-[11px] text-[#826F67] mt-0.5">Lipedema Málaga · lipedemamalaga.org</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#6E5A53] hover:bg-[#EFE4DA] transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="px-6 pt-3 pb-2 bg-[#F5ECE3] border-b border-[#E8DCD1] flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => onSelectDoc('aviso-legal')}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeDoc === 'aviso-legal'
                ? 'bg-[#36221E] text-white font-semibold'
                : 'bg-white/80 text-[#5F4E47] hover:bg-white'
            }`}
          >
            Aviso Legal
          </button>
          <button
            onClick={() => onSelectDoc('privacidad')}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeDoc === 'privacidad'
                ? 'bg-[#36221E] text-white font-semibold'
                : 'bg-white/80 text-[#5F4E47] hover:bg-white'
            }`}
          >
            Privacidad (RGPD)
          </button>
          <button
            onClick={() => onSelectDoc('cookies')}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeDoc === 'cookies'
                ? 'bg-[#36221E] text-white font-semibold'
                : 'bg-white/80 text-[#5F4E47] hover:bg-white'
            }`}
          >
            Cookies
          </button>
          <button
            onClick={() => onSelectDoc('descargo-medico')}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeDoc === 'descargo-medico'
                ? 'bg-[#36221E] text-white font-semibold'
                : 'bg-white/80 text-[#5F4E47] hover:bg-white'
            }`}
          >
            Descargo Médico
          </button>
          <button
            onClick={() => onSelectDoc('accesibilidad')}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeDoc === 'accesibilidad'
                ? 'bg-[#36221E] text-white font-semibold'
                : 'bg-white/80 text-[#5F4E47] hover:bg-white'
            }`}
          >
            Accesibilidad (WCAG)
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#4F3E37] leading-relaxed bg-[#FDFBF9]">
          
          {/* AVISO LEGAL */}
          {activeDoc === 'aviso-legal' && (
            <div className="space-y-4">
              <h4 className="font-editorial text-xl font-bold text-[#36221E]">1. Información General y Titularidad</h4>
              <p>
                En cumplimiento con el deber de información estipulado en el artículo 10 de la <strong>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</strong>, se detallan los siguientes datos identificativos:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li><strong>Denominación del proyecto:</strong> Lipedema Málaga</li>
                <li><strong>Sitio Web:</strong> lipedemamalaga.org</li>
                <li><strong>Carácter del proyecto:</strong> Plataforma de información comunitaria, ciudadana y red de apoyo mutuo de carácter altruista y no lucrativo.</li>
                <li><strong>Ámbito territorial:</strong> Málaga (Andalucía, España).</li>
                <li><strong>Contacto general:</strong> info@lipedemamalaga.org</li>
              </ul>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">2. Objeto y Finalidad del Sitio Web</h4>
              <p>
                El presente sitio web tiene como propósito principal brindar visibilidad social e información orientativa a pacientes afectadas por lipedema, desmentir mitos sobre la patología, compartir guías sobre tratamiento conservador y postquirúrgico y poner a disposición de las personas interesadas un canal de contacto y acompañamiento voluntario, ético y sin coste económico.
              </p>
              <p>
                Esta plataforma no persigue ningún fin mercantil ni comercial, no cobra honorarios a pacientes ni percibe comisiones por derivación a clínicas, fisioterapeutas u ortopedias.
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">3. Condiciones de Uso y Responsabilidad</h4>
              <p>
                El acceso y utilización de este sitio web atribuye la condición de Usuario, quien acepta desde dicho acceso las presentes condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos y de los canales de comunicación, absteniéndose de actividades ilícitas o lesivas.
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">4. Propiedad Intelectual e Industrial</h4>
              <p>
                El logotipo, diseño gráfico, textos divulgativos y código fuente de este portal pertenecen a Lipedema Málaga o se emplean con fines informativos amparados por el derecho de cita y divulgación. Queda autorizada la difusión de la información siempre que se cite la fuente y se mantenga su carácter altruista.
              </p>
            </div>
          )}

          {/* POLÍTICA DE PRIVACIDAD */}
          {activeDoc === 'privacidad' && (
            <div className="space-y-4">
              <h4 className="font-editorial text-xl font-bold text-[#36221E]">1. Compromiso con tu Confidencialidad y el RGPD</h4>
              <p>
                En Lipedema Málaga somos conscientes de la especial sensibilidad de las dudas y vivencias relacionadas con la salud. Por ello, tratamos tus datos de carácter personal en estricto cumplimiento del <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y de la <strong>Ley Orgánica 3/2018 (LOPDGDD)</strong> de Protección de Datos Personales y garantía de los derechos digitales.
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">2. Responsable del Tratamiento</h4>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li><strong>Responsable:</strong> Iniciativa Red de Apoyo Lipedema Málaga</li>
                <li><strong>Correo de contacto para privacidad:</strong> info@lipedemamalaga.org</li>
              </ul>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">3. Finalidad y Datos Tratados</h4>
              <p>
                Recopilamos únicamente los datos mínimos facilitados voluntariamente por el usuario a través del formulario de contacto o correo electrónico (nombre o alias, correo electrónico, teléfono opcional y mensaje explicativo sobre su situación).
              </p>
              <p>
                <strong>Finalidad exclusiva:</strong> Atender consultas, resolver dudas orientativas y brindar acompañamiento personalizado gratuito. Bajo ningún concepto se utilizarán para envíos masivos comerciales ni publicidad no solicitada.
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">4. Base Jurídica y Categorías Especiales de Datos</h4>
              <p>
                La base de legitimación es el <strong>consentimiento explícito</strong> del interesado (artículo 6.1.a y 9.2.a del RGPD), manifestado al marcar la casilla de aceptación previa al envío del formulario. Al compartir voluntariamente información sobre tu estado o sospechas de lipedema, otorgas tu consentimiento explícito para que podamos responder a tu petición de orientación.
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">5. Conservación y No Cesión a Terceros</h4>
              <p>
                Tus datos no serán cedidos, vendidos ni transferidos a ninguna clínica privada, empresa farmacéutica o entidad con fines comerciales. Se conservarán únicamente el tiempo necesario para tramitar tu solicitud y mientras no revoques tu consentimiento.
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">6. Ejercicio de Derechos</h4>
              <p>
                Puedes ejercer en cualquier momento tus derechos de <strong>acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición</strong> enviando un correo electrónico a <span className="font-semibold text-[#8A463B]">info@lipedemamalaga.org</span>. Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD, www.aepd.es) si consideras que tus derechos han sido vulnerados.
              </p>
            </div>
          )}

          {/* POLÍTICA DE COOKIES */}
          {activeDoc === 'cookies' && (
            <div className="space-y-4">
              <h4 className="font-editorial text-xl font-bold text-[#36221E]">1. ¿Qué es una Cookie?</h4>
              <p>
                Una cookie es un pequeño fichero de texto que los sitios web descargan en tu navegador para almacenar información técnica, preferencias de navegación o métricas agregadas.
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">2. Tipos de Cookies Empleadas</h4>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Cookies técnicas y estrictamente necesarias:</strong> Necesarias para permitir la navegación básica, garantizar la seguridad del sitio y guardar tus preferencias de consentimiento de privacidad. No requieren consentimiento según el art. 22.2 de la LSSI.
                </li>
                <li>
                  <strong>Cookies analíticas o de rendimiento (opcionales):</strong> Recopilan datos anónimos sobre visitas, tiempo de lectura y páginas más consultadas para ayudarnos a mejorar el contenido divulgativo de la web. Solo se activan si das tu consentimiento expreso en el banner.
                </li>
              </ul>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">3. Ausencia de Cookies Publicitarias</h4>
              <p>
                Este portal <strong>no utiliza cookies de publicidad comportamental ni redes de seguimiento publicitario cruzado de terceros</strong> (como píxeles de retargeting de venta).
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">4. Gestión y Desactivación en tu Navegador</h4>
              <p>
                Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador web:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies.</li>
                <li>Mozilla Firefox: Ajustes → Privacidad & Seguridad → Cookies.</li>
                <li>Apple Safari: Preferencias → Privacidad → Bloquear cookies.</li>
                <li>Microsoft Edge: Configuración → Permisos de sitios → Cookies y datos almacenados.</li>
              </ul>
            </div>
          )}

          {/* DESCARGO MÉDICO */}
          {activeDoc === 'descargo-medico' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-amber-900 font-medium">
                  Información de carácter orientativo y de apoyo comunitario entre pacientes.
                </p>
              </div>

              <h4 className="font-editorial text-xl font-bold text-[#36221E]">1. Carácter Divulgativo y de Acompañamiento</h4>
              <p>
                La información provista en este sitio web (incluidos textos explicativos, el cuestionario de autoevaluación, recomendaciones sobre hábitos de tratamiento conservador y postoperatorio) tiene exclusivamente carácter divulgativo, orientativo y de soporte moral y de red de pacientes.
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">2. No Constituye Consulta Médica Vinculante</h4>
              <p>
                En ningún caso la información facilitada en esta web o las comunicaciones mantenidas a través de nuestros canales sustituyen el consejo, diagnóstico o tratamiento dispensado por un médico colegiado especialista (como cirujanos vasculares, angiología y cirugía vascular, médicos rehabilitadores, endocrinos o cirujanos plásticos reparadores) o fisioterapeutas colegiados.
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">3. Recomendación Facultativa</h4>
              <p>
                Te recomendamos encarecidamente que cualquier decisión relativa a tu salud, cambios dietéticos intensivos, prescripción de prendas de compresión de tejido plano o intervenciones quirúrgicas sea evaluada y prescrita por profesionales sanitarios legalmente autorizados.
              </p>
            </div>
          )}

          {/* ACCESIBILIDAD */}
          {activeDoc === 'accesibilidad' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#F6ECE4] border border-[#E4D1C3] flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#8A463B] shrink-0 mt-0.5" />
                <p className="text-xs text-[#6F473F] font-medium leading-relaxed">
                  Lipedema Málaga se compromete a garantizar que cualquier persona, independientemente de sus capacidades físicas, sensoriales o cognitivas, pueda acceder a la información y al acompañamiento de forma libre y confortable.
                </p>
              </div>

              <h4 className="font-editorial text-xl font-bold text-[#36221E]">1. Estándar de Conformidad (WCAG 2.1 AA)</h4>
              <p>
                Este sitio web ha sido diseñado y estructurado siguiendo las Pautas de Accesibilidad para el Contenido Web (WCAG 2.1) en su nivel de conformidad AA, adoptadas por el Consorcio World Wide Web (W3C), así como los requerimientos del Real Decreto 1112/2018 sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles.
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">2. Funcionalidades Adaptativas Implementadas</h4>
              <p>
                Para facilitar una lectura cómoda y sin barreras, este portal incorpora un <strong>Panel de Adaptabilidad y Accesibilidad</strong> accesible desde la barra superior, con los siguientes ajustes en tiempo real:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F4E47]">
                <li><strong>Escala de tipografía:</strong> Ampliación del tamaño de letra al 115% y 130% para personas con baja agudeza visual.</li>
                <li><strong>Modo Alto Contraste:</strong> Fondo oscuro con bordes y tipografías en alto contraste para mejorar la legibilidad.</li>
                <li><strong>Tipografía para Dislexia:</strong> Conmutador a tipografía hiperlegible sans-serif para reducir la confusión de caracteres.</li>
                <li><strong>Espaciado tipográfico aumentado:</strong> Mayor interlineado y separación de letras para evitar la fatiga visual.</li>
                <li><strong>Guía de lectura:</strong> Regla horizontal que asiste en el seguimiento renglón a renglón.</li>
                <li><strong>Modo Calma:</strong> Supresión de animaciones y transiciones para evitar mareos o sobrecarga sensorial (TDAH, epilepsia fotosensible o migrañas).</li>
                <li><strong>Resaltado de enlaces:</strong> Subrayado y contorno visual reforzado en todos los elementos interactivos.</li>
              </ul>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">3. Navegación por Teclado y Tecnologías de Asistencia</h4>
              <p>
                Todo el sitio web puede ser navegado utilizando exclusivamente el teclado mediante la tecla <code>Tabulador</code> (para avanzar), <code>Shift + Tab</code> (para retroceder), <code>Enter / Espacio</code> (para accionar botones o enlaces) y <code>Escape</code> (para cerrar paneles y ventanas modales). Además, se incorporan atributos ARIA (Accessible Rich Internet Applications) y etiquetas descriptivas para una correcta interpretación por lectores de pantalla (como NVDA, JAWS, VoiceOver o TalkBack).
              </p>

              <h4 className="font-editorial text-xl font-bold text-[#36221E] pt-2">4. Contacto y Sugerencias de Accesibilidad</h4>
              <p>
                La accesibilidad es un proceso de mejora continua. Si experimentas cualquier dificultad de acceso, detectas alguna barrera técnica o necesitas consultar información en un formato alternativo, por favor ponte en contacto con nosotras a través de <strong>info@lipedemamalaga.org</strong>.
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E8DCD1] bg-[#FAF7F2] flex items-center justify-between">
          <p className="text-xs text-[#826F67]">
            Compromiso ético y legal de Lipedema Málaga.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-xs font-semibold transition-all cursor-pointer"
          >
            Entendido y cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
