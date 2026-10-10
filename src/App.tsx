import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomePathways } from './components/HomePathways';
import { SubpageHeader } from './components/SubpageHeader';
import { WhatIsLipedema } from './components/WhatIsLipedema';
import { ConservativeTreatment } from './components/ConservativeTreatment';
import { SurgeryAndPostop } from './components/SurgeryAndPostop';
import { SelfAssessmentQuiz } from './components/SelfAssessmentQuiz';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { LegalModals } from './components/LegalModals';
import { BlogView } from './components/BlogView';
import { BlogAdmin } from './components/BlogAdmin';
import { initialBlogPosts } from './content/blogPosts';
import { contentEs } from './content/es';
import { contentEn } from './content/en';
import type { Lang, LegalDocType, ViewMode, BlogPost } from './types';
import { Heart } from 'lucide-react';

export function App() {
  const [lang, setLang] = useState<Lang>('es');
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');

  // Blog posts with LocalStorage persistence for user-created posts
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem('lm_custom_blog_posts');
      if (saved) {
        const customPosts: BlogPost[] = JSON.parse(saved);
        const initialIds = new Set(initialBlogPosts.map((p) => p.id));
        const filteredCustom = customPosts.filter((p) => !initialIds.has(p.id));
        return [...filteredCustom, ...initialBlogPosts];
      }
    } catch {
      // Fallback
    }
    return initialBlogPosts;
  });

  // Sync with URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'en' || window.location.pathname.startsWith('/en')) {
      setLang('en');
    }

    const viewParam = params.get('view') as ViewMode | null;
    const validViews: ViewMode[] = ['home', 'que-es', 'tratamiento', 'test', 'contacto', 'blog', 'admin'];
    if (viewParam && validViews.includes(viewParam)) {
      setCurrentView(viewParam);
    }
  }, []);

  const updateUrl = (newView: ViewMode, newLang: Lang) => {
    const url = new URL(window.location.href);
    if (newLang === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }

    if (newView === 'home') {
      url.searchParams.delete('view');
    } else {
      url.searchParams.set('view', newView);
    }
    window.history.pushState({}, '', url.toString());
  };

  const handleToggleLang = (newLang: Lang) => {
    setLang(newLang);
    updateUrl(currentView, newLang);
  };

  const handleSetView = (newView: ViewMode) => {
    setCurrentView(newView);
    updateUrl(newView, lang);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSavePost = (post: BlogPost) => {
    setBlogPosts((prev) => {
      const existingIdx = prev.findIndex((p) => p.id === post.id);
      let updated: BlogPost[];
      if (existingIdx >= 0) {
        updated = [...prev];
        updated[existingIdx] = post;
      } else {
        updated = [post, ...prev];
      }
      try {
        const customPosts = updated.filter((p) => p.isCustom);
        localStorage.setItem('lm_custom_blog_posts', JSON.stringify(customPosts));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  const handleDeletePost = (id: string) => {
    setBlogPosts((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      try {
        const customPosts = updated.filter((p) => p.isCustom);
        localStorage.setItem('lm_custom_blog_posts', JSON.stringify(customPosts));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  const currentContent = lang === 'en' ? contentEn : contentEs;

  const handleOpenContact = (customMessage?: string) => {
    if (customMessage) {
      setContactInitialMessage(customMessage);
    }
    handleSetView('contacto');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D2421] selection:bg-[#EAD8D1] selection:text-[#3D2520]">
      {/* Universal Responsive Navbar */}
      <Navbar
        content={currentContent.nav}
        lang={lang}
        currentView={currentView}
        onToggleLang={handleToggleLang}
        onNavigate={handleSetView}
      />

      {/* Main View Router */}
      <main className="flex-1">
        
        {/* VIEW 1: HOME (Limpio, cálido y sin sobrecarga cognitiva) */}
        {currentView === 'home' && (
          <>
            <Hero
              content={currentContent.hero}
              onOpenContact={() => handleSetView('contacto')}
              onOpenTest={() => handleSetView('test')}
            />

            {/* 3 Guided Pathways: Elegir qué leer sin agobios */}
            <HomePathways
              lang={lang}
              onNavigate={handleSetView}
            />

            {/* About us / Nuestra misión */}
            <AboutUs
              content={currentContent.about}
              onOpenContact={() => handleSetView('contacto')}
            />
          </>
        )}

        {/* VIEW 2: ¿QUÉ ES EL LIPEDEMA? (Página dedicada) */}
        {currentView === 'que-es' && (
          <div className="animate-fadeIn">
            <SubpageHeader
              title={lang === 'es' ? '¿Qué es el Lipedema?' : 'What is Lipedema?'}
              subtitle={currentContent.whatIs.subtitle}
              lang={lang}
              onGoHome={() => handleSetView('home')}
            />

            <WhatIsLipedema content={currentContent.whatIs} />

            {/* Bottom Reassurance Banner */}
            <div className="py-14 bg-[#FAF7F2] border-t border-[#ECE2D8]">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#36221E] mb-3">
                  {lang === 'es' ? '¿Reconoces estos síntomas en tu día a día?' : 'Do you recognize these symptoms in your daily life?'}
                </h3>
                <p className="text-xs sm:text-sm text-[#66544D] mb-6 max-w-xl mx-auto leading-relaxed">
                  {lang === 'es'
                    ? 'No tienes que llevar este proceso a solas. Podemos escucharte y orientarte de forma 100% gratuita y sin compromiso.'
                    : 'You do not have to carry this journey alone. We can listen to you and guide you 100% free of charge.'}
                </p>
                <button
                  onClick={() => handleSetView('contacto')}
                  className="px-8 py-3.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  {lang === 'es' ? 'Rellenar Ficha de Consulta' : 'Open Consultation Sheet'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: TRATAMIENTO Y CUIDADOS (Página dedicada) */}
        {currentView === 'tratamiento' && (
          <div className="animate-fadeIn">
            <SubpageHeader
              title={lang === 'es' ? 'Tratamientos y Cuidados' : 'Treatments & Care'}
              subtitle={currentContent.treatment.subtitle}
              lang={lang}
              onGoHome={() => handleSetView('home')}
            />

            <ConservativeTreatment
              content={currentContent.treatment}
              onOpenContact={() => handleSetView('contacto')}
            />

            <SurgeryAndPostop
              content={currentContent.surgery}
              onOpenContact={() => handleSetView('contacto')}
            />
          </div>
        )}

        {/* VIEW 4: TEST ORIENTATIVO (Página dedicada a pantalla limpia) */}
        {currentView === 'test' && (
          <div className="animate-fadeIn">
            <SubpageHeader
              title={currentContent.quiz.title}
              subtitle={currentContent.quiz.subtitle}
              lang={lang}
              onGoHome={() => handleSetView('home')}
            />

            <SelfAssessmentQuiz
              content={currentContent.quiz}
              onOpenContact={(msg) => handleOpenContact(msg)}
            />
          </div>
        )}

        {/* VIEW 5: FICHA DE CONSULTA (Página dedicada prioritaria) */}
        {currentView === 'contacto' && (
          <div className="animate-fadeIn">
            <SubpageHeader
              title={currentContent.contact.title}
              subtitle={currentContent.contact.subtitle}
              lang={lang}
              onGoHome={() => handleSetView('home')}
            />

            <ContactSection
              content={currentContent.contact}
              initialMessage={contactInitialMessage}
              onOpenPrivacy={() => setActiveLegalDoc('privacidad')}
            />
          </div>
        )}

        {/* VIEW 6: BLOG & ANÉCDOTAS */}
        {currentView === 'blog' && (
          <BlogView
            posts={blogPosts}
            lang={lang}
            onOpenContact={(msg) => handleOpenContact(msg)}
            onGoHome={() => handleSetView('home')}
            onOpenAdmin={() => handleSetView('admin')}
          />
        )}

        {/* VIEW 7: ADMINISTRACIÓN DEL BLOG */}
        {currentView === 'admin' && (
          <BlogAdmin
            posts={blogPosts}
            onSavePost={handleSavePost}
            onDeletePost={handleDeletePost}
            onClose={() => handleSetView('blog')}
          />
        )}

      </main>

      {/* Footer */}
      <Footer
        content={currentContent.footer}
        onOpenDoc={(doc) => setActiveLegalDoc(doc)}
        onNavigate={handleSetView}
        onOpenAdmin={() => handleSetView('admin')}
      />

      {/* Cookie Banner */}
      <CookieBanner onOpenCookiePolicy={() => setActiveLegalDoc('cookies')} />

      {/* Legal & Privacy Modals */}
      <LegalModals
        activeDoc={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
        onSelectDoc={(doc) => setActiveLegalDoc(doc)}
      />

      {/* Floating Action Button (Except on Consultation or Admin screens) */}
      {currentView !== 'contacto' && currentView !== 'admin' && (
        <button
          onClick={() => handleSetView('contacto')}
          className="fixed bottom-6 right-6 z-30 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group cursor-pointer border border-[#B66B5F]/40 hover:scale-105 active:scale-95"
          aria-label="Ficha de consulta gratuita"
          title="Ficha de consulta gratuita"
        >
          <Heart className="w-5 h-5 text-[#FEE9E6] fill-current group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-sm font-semibold tracking-wide">
            {lang === 'es' ? 'Ficha de Consulta' : 'Consultation Sheet'}
          </span>
        </button>
      )}
    </div>
  );
}

export default App;
