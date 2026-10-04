import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsLipedema } from './components/WhatIsLipedema';
import { ConservativeTreatment } from './components/ConservativeTreatment';
import { SurgeryAndPostop } from './components/SurgeryAndPostop';
import { SelfAssessmentQuiz } from './components/SelfAssessmentQuiz';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { LegalModals } from './components/LegalModals';
import type { LegalDocType } from './types';
import { Heart } from 'lucide-react';

export function App() {
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');

  const handleOpenContact = (customMessage?: string) => {
    if (customMessage) {
      setContactInitialMessage(customMessage);
    }
    const contactElem = document.getElementById('contacta-con-nosotros');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D2421] selection:bg-[#EAD8D1] selection:text-[#3D2520]">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenContact={() => handleOpenContact()} />
        <WhatIsLipedema />
        <ConservativeTreatment onOpenContact={() => handleOpenContact()} />
        <SurgeryAndPostop onOpenContact={() => handleOpenContact()} />
        <SelfAssessmentQuiz onOpenContact={(msg) => handleOpenContact(msg)} />
        <AboutUs onOpenContact={() => handleOpenContact()} />
        <ContactSection
          initialMessage={contactInitialMessage}
          onOpenPrivacy={() => setActiveLegalDoc('privacidad')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenDoc={(doc) => setActiveLegalDoc(doc)}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Cookie Banner */}
      <CookieBanner onOpenCookiePolicy={() => setActiveLegalDoc('cookies')} />

      {/* Legal & Privacy Modals */}
      <LegalModals
        activeDoc={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
        onSelectDoc={(doc) => setActiveLegalDoc(doc)}
      />

      {/* Floating Quick Action Button */}
      <button
        onClick={() => handleOpenContact()}
        className="fixed bottom-6 right-6 z-30 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group cursor-pointer border border-[#B66B5F]/40 hover:scale-105 active:scale-95"
        aria-label="Abrir formulario de ayuda gratuita"
      >
        <Heart className="w-5 h-5 text-[#FEE9E6] fill-current group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline text-sm font-semibold tracking-wide">
          Ayuda Gratuita
        </span>
      </button>
    </div>
  );
}

export default App;
