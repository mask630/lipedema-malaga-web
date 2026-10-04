import React from 'react';
import { Mail, ShieldAlert, ArrowUp, Lock } from 'lucide-react';
import type { LegalDocType } from '../types';
import type { ContentSchema } from '../content/types';

interface FooterProps {
  content: ContentSchema['footer'];
  onOpenDoc: (doc: LegalDocType) => void;
  onOpenContact: () => void;
  onOpenBlog?: () => void;
  onOpenAdmin?: () => void;
}

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({
  content,
  onOpenDoc,
  onOpenContact,
  onOpenBlog,
  onOpenAdmin,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D1E1B] text-[#D8C7BF] pt-16 pb-12 border-t border-[#46322E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 shrink-0">
                <img
                  src="/images/logo-lipedema-malaga.png"
                  alt="Logo Lipedema Málaga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-editorial text-2xl font-bold text-white tracking-tight block">
                  Lipedema Málaga
                </span>
                <span className="text-xs text-[#BAA59B] tracking-wider uppercase">
                  lipedemamalaga.org
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#BBA59B] leading-relaxed max-w-sm">
              {content.desc}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/lipedemamalaga/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#412E2A] hover:bg-[#5C3F3A] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Lipedema Málaga"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@lipedemamalaga.org"
                className="w-9 h-9 rounded-full bg-[#412E2A] hover:bg-[#5C3F3A] text-white flex items-center justify-center transition-colors"
                aria-label="Email Lipedema Málaga"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F2E5DD]">
              {content.navHeading}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBlog}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Blog & Anécdotas</span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#412E2A] text-[#F2DFD7]">Nuevo</span>
                </button>
              </li>
              <li>
                <a href="#que-es-el-lipedema" className="hover:text-white transition-colors">
                  ¿Qué es el Lipedema?
                </a>
              </li>
              <li>
                <a href="#tratamiento-conservador" className="hover:text-white transition-colors">
                  Tratamiento Conservador
                </a>
              </li>
              <li>
                <a href="#cirugia-postoperatorio" className="hover:text-white transition-colors">
                  Cirugía y Postoperatorio
                </a>
              </li>
              <li>
                <a href="#test-orientativo" className="hover:text-white transition-colors">
                  Test de Autoevaluación
                </a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contacta con nosotras
                </button>
              </li>
            </ul>
          </div>

          {/* Legal and Medical Warning */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F2E5DD]">
              {content.legalHeading}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm flex flex-col items-start">
              <button
                onClick={() => onOpenDoc('aviso-legal')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Aviso Legal (LSSI-CE)
              </button>
              <button
                onClick={() => onOpenDoc('privacidad')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Política de Privacidad (RGPD)
              </button>
              <button
                onClick={() => onOpenDoc('cookies')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Política de Cookies
              </button>
              <button
                onClick={() => onOpenDoc('descargo-medico')}
                className="text-[#E7B8B1] hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Descargo de Responsabilidad Médica</span>
              </button>
            </div>

            <div className="pt-3 text-[11px] text-[#A69188] leading-relaxed border-t border-[#46322E]">
              {content.disclaimerNote}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#46322E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8A81]">
          <div className="flex items-center gap-3">
            <span>{content.rights}</span>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1 text-[#8C766E] hover:text-[#D8C7BF] transition-colors cursor-pointer ml-2 text-[11px]"
                title="Acceso para redactar artículos del blog"
              >
                <Lock className="w-3 h-3" />
                <span>Gestión Blog</span>
              </button>
            )}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>{content.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
