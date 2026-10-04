import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: '¿Qué es el Lipedema?', href: '#que-es-el-lipedema' },
    { label: 'Tratamiento Conservador', href: '#tratamiento-conservador' },
    { label: 'Cirugía & Postoperatorio', href: '#cirugia-postoperatorio' },
    { label: 'Test Orientativo', href: '#test-orientativo' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-[0_4px_20px_rgba(74,46,43,0.06)] py-2.5'
          : 'bg-[#FAF7F2]/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Title */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group text-decoration-none"
            aria-label="Lipedema Málaga Inicio"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#D5C2B2] bg-[#FDFBF9] shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logo-lipedema-malaga.png"
                alt="Logo Lipedema Málaga"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#3A2421] leading-none">
                Lipedema Málaga
              </span>
              <span className="text-[11px] tracking-widest uppercase font-medium text-[#846E66] mt-0.5">
                Red de apoyo & información
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#53433E] hover:text-[#9A5348] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.instagram.com/lipedemamalaga/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#6B5A54] hover:text-[#9A5348] px-3 py-2 rounded-full border border-[#DFD1C6] bg-white/60 hover:bg-white transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#E1306C] animate-pulse"></span>
              @lipedemamalaga
            </a>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-[#9B5347] hover:bg-[#864439] text-[#FAF7F2] px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md active:scale-98 cursor-pointer"
            >
              <Heart className="w-4 h-4 text-[#FDEBE8]" />
              <span>Ayuda Gratuita</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="p-2 rounded-full bg-[#9B5347] text-white"
              aria-label="Contactar"
            >
              <Heart className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#53433E] hover:bg-[#EFE8DF] transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="sm:hidden border-t border-[#E8DDD2] bg-[#FAF7F2] px-4 pt-4 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-[#463834] py-2 px-3 rounded-lg hover:bg-[#F2EAE1] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E8DDD2] flex flex-col gap-2.5">
              <a
                href="https://www.instagram.com/lipedemamalaga/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-2.5 px-4 text-sm font-medium text-[#55433D] rounded-full border border-[#D5C2B2] bg-white flex items-center justify-center gap-2"
              >
                <span>Seguir en Instagram</span>
                <span className="text-xs text-[#9B5347]">@lipedemamalaga</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#9B5347] text-white py-3 rounded-full font-medium shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contacta con nosotras (Gratis)</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
