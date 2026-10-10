import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ArrowRight } from 'lucide-react';
import type { Lang, ViewMode } from '../types';
import type { ContentSchema } from '../content/types';

interface NavbarProps {
  content: ContentSchema['nav'];
  lang: Lang;
  currentView: ViewMode;
  onToggleLang: (newLang: Lang) => void;
  onNavigate: (view: ViewMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  content,
  lang,
  currentView,
  onToggleLang,
  onNavigate,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: Array<{ label: string; view: ViewMode; desc: string; badge?: string }> = [
    { label: content.links.home, view: 'home', desc: 'Presentación y bienvenida' },
    { label: content.links.whatIs, view: 'que-es', desc: 'Definición, síntomas, 4 grados y tipos' },
    { label: content.links.treatment, view: 'tratamiento', desc: 'Nutrición, DLM, compresión y cirugía' },
    { label: content.links.quiz, view: 'test', desc: 'Cuestionario guiado de 5 preguntas' },
    { label: content.links.blog, view: 'blog', desc: 'Anécdotas reales, trucos y experiencias', badge: 'Nuevo' },
    { label: content.links.contact, view: 'contacto', desc: 'Ficha de consulta y acompañamiento' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-[0_4px_20px_rgba(74,46,43,0.06)] py-2.5'
            : 'bg-[#FAF7F2]/95 backdrop-blur-xs py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo and Brand Title (Clicking returns to Home or toggles menu on mobile) */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setIsMenuOpen((prev) => !prev);
                  } else {
                    onNavigate('home');
                  }
                }}
                className="flex items-center gap-3 text-left group cursor-pointer"
                title="Lipedema Málaga - Menú de navegación"
                aria-label="Lipedema Málaga - Menú de navegación"
              >
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#D5C2B2] bg-[#FDFBF9] shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="./images/logo-lipedema-malaga.png"
                    alt="Logo Lipedema Málaga"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#3A2421] leading-none">
                    Lipedema Málaga
                  </span>
                  <span className="text-[11px] tracking-wider uppercase font-medium text-[#846E66] mt-0.5">
                    lipedemamalaga.org
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((item) => (
                <button
                  key={item.view}
                  onClick={() => onNavigate(item.view)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    currentView === item.view
                      ? 'bg-[#3A2421] text-white shadow-xs'
                      : 'text-[#5B4842] hover:text-[#9B5347] hover:bg-white/70'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1 text-[9px] font-bold uppercase px-1.5 py-0.2 rounded bg-[#F4E8DF] text-[#8A463B]">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* Right Actions: Language Switcher & Menu Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Language Switcher */}
              <div className="inline-flex items-center p-1 rounded-full border border-[#D8C7BA] bg-white/80 shadow-2xs text-xs font-semibold">
                <button
                  onClick={() => onToggleLang('es')}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    lang === 'es'
                      ? 'bg-[#3A2421] text-white shadow-xs'
                      : 'text-[#6C5952] hover:text-[#3A2421]'
                  }`}
                  aria-label="Cambiar a español"
                >
                  ES
                </button>
                <button
                  onClick={() => onToggleLang('en')}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    lang === 'en'
                      ? 'bg-[#3A2421] text-white shadow-xs'
                      : 'text-[#6C5952] hover:text-[#3A2421]'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </div>

              {/* Universal Menu Button (Visible on mobile/tablet or when user wants drawer) */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="inline-flex lg:hidden items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-[#D5C2B2] bg-[#FAF7F2] hover:bg-[#F2E7DC] text-[#3A2421] text-xs sm:text-sm font-semibold transition-all shadow-2xs cursor-pointer group"
                aria-label="Abrir menú"
              >
                <Menu className="w-4 h-4 text-[#8A463B] group-hover:rotate-90 transition-transform duration-300" />
                <span>{content.menu}</span>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Relaxed Navigation Drawer for Mobile/Tablet */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-xs animate-fadeIn">
          
          <div className="bg-[#FAF7F2] border-l border-[#D5C2B2] w-full max-w-md sm:max-w-lg h-full flex flex-col justify-between p-6 sm:p-8 shadow-2xl overflow-y-auto animate-slideLeft">
            
            {/* Drawer Top */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8DCD1] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D5C2B2]">
                    <img src="./images/logo-lipedema-malaga.png" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#36221E]">Lipedema Málaga</h3>
                    <p className="text-xs text-[#826F67]">Navegación tranquila</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full text-[#6E5A53] hover:bg-[#EFE4DA] transition-colors cursor-pointer"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-2">
                {navLinks.map((item) => (
                  <button
                    key={item.view}
                    onClick={() => {
                      setIsMenuOpen(false);
                      onNavigate(item.view);
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all group cursor-pointer ${
                      currentView === item.view
                        ? 'bg-white border-[#9B5347] shadow-xs'
                        : 'hover:bg-white hover:shadow-2xs border-transparent hover:border-[#E8DCD1]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-editorial text-xl font-bold text-[#3A2421] group-hover:text-[#9B5347] transition-colors">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-[#F4E8DF] text-[#8A463B]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#A18A82] group-hover:text-[#9B5347] group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-[#7B6861] mt-0.5">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#E8DCD1] space-y-3 mt-6">
              
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigate('contacto');
                }}
                className="w-full py-3.5 px-5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current text-[#FDEBE8]" />
                <span>{content.links.contact}</span>
              </button>

              <div className="flex items-center justify-between text-xs text-[#7B6861] pt-2 px-1">
                <a
                  href="https://www.instagram.com/lipedemamalaga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9B5347] underline underline-offset-2"
                >
                  @lipedemamalaga
                </a>
                <span>lipedemamalaga.org</span>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};
