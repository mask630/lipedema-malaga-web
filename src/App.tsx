import { useState, useEffect } from 'react';
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
        // Combine initial with custom, avoiding duplicate IDs
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

    const viewParam = params.get('view');
    if (viewParam === 'blog') {
      setCurrentView('blog');
    } else if (viewParam === 'admin') {
      setCurrentView('admin');
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
        // Local storage full or private mode
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
    if (currentView !== 'home') {
      setCurrentView('home');
      updateUrl('home', lang);
    }
    if (customMessage) {
      setContactInitialMessage(customMessage);
    }
    setTimeout(() => {
      const contactElem = document.getElementById('contacta-con-nosotros');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D2421] selection:bg-[#EAD8D1] selection:text-[#3D2520]">
      {/* Top Clean Navbar */}
      <Navbar
        content={currentContent.nav}
        lang={lang}
        currentView={currentView}
        onToggleLang={handleToggleLang}
        onOpenContact={() => handleOpenContact()}
        onOpenBlog={() => handleSetView('blog')}
        onGoHome={() => handleSetView('home')}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero
              content={currentContent.hero}
              onOpenContact={() => handleOpenContact()}
            />

            <WhatIsLipedema content={currentContent.whatIs} />

            <ConservativeTreatment
              content={currentContent.treatment}
              onOpenContact={() => handleOpenContact()}
            />

            <SurgeryAndPostop
              content={currentContent.surgery}
              onOpenContact={() => handleOpenContact()}
            />

            <SelfAssessmentQuiz
              content={currentContent.quiz}
              onOpenContact={(msg) => handleOpenContact(msg)}
            />

            <AboutUs
              content={currentContent.about}
              onOpenContact={() => handleOpenContact()}
            />

            <ContactSection
              content={currentContent.contact}
              initialMessage={contactInitialMessage}
              onOpenPrivacy={() => setActiveLegalDoc('privacidad')}
            />
          </>
        )}

        {currentView === 'blog' && (
          <BlogView
            posts={blogPosts}
            lang={lang}
            onOpenContact={(msg) => handleOpenContact(msg)}
            onGoHome={() => handleSetView('home')}
            onOpenAdmin={() => handleSetView('admin')}
          />
        )}

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
        onOpenContact={() => handleOpenContact()}
        onOpenBlog={() => handleSetView('blog')}
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

      {/* Floating Quick Action Button */}
      {currentView === 'home' && (
        <button
          onClick={() => handleOpenContact()}
          className="fixed bottom-6 right-6 z-30 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group cursor-pointer border border-[#B66B5F]/40 hover:scale-105 active:scale-95"
          aria-label="Ayuda gratuita"
        >
          <Heart className="w-5 h-5 text-[#FEE9E6] fill-current group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-sm font-semibold tracking-wide">
            {currentContent.nav.freeHelp}
          </span>
        </button>
      )}
    </div>
  );
}

export default App;
