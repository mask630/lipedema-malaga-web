import React, { useState } from 'react';
import { BookOpen, Search, ArrowLeft, ArrowRight, Heart, Share2, Sparkles, Lock } from 'lucide-react';
import type { BlogPost, Lang } from '../types';

interface BlogViewProps {
  posts: BlogPost[];
  lang: Lang;
  onOpenContact: (customMsg?: string) => void;
  onGoHome: () => void;
  onOpenAdmin: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  posts,
  lang,
  onOpenContact,
  onGoHome,
  onOpenAdmin,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedShare, setCopiedShare] = useState(false);

  // Filter posts by language
  const langPosts = posts.filter((p) => p.lang === lang);

  const categories = ['all', ...Array.from(new Set(langPosts.map((p) => p.category)))];

  const filteredPosts = langPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2500);
      });
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8DCD1]">
          <button
            onClick={selectedPost ? () => setSelectedPost(null) : onGoHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#6A5851] hover:text-[#9B5347] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {selectedPost
                ? lang === 'es'
                  ? 'Volver al índice del blog'
                  : 'Back to blog index'
                : lang === 'es'
                ? 'Volver a la página principal'
                : 'Back to home'}
            </span>
          </button>

          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-1.5 text-xs text-[#87746D] hover:text-[#36221E] px-3 py-1.5 rounded-full border border-[#D5C2B2] bg-white/60 hover:bg-white transition-all cursor-pointer"
            title="Acceso para redactar artículos"
          >
            <Lock className="w-3 h-3 text-[#8A463B]" />
            <span>{lang === 'es' ? 'Acceso Redacción' : 'Editor Access'}</span>
          </button>
        </div>

        {/* SINGLE POST READING VIEW */}
        {selectedPost ? (
          <article className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E7DBD0] shadow-[0_12px_40px_rgba(74,46,43,0.06)] animate-fadeIn">
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#F4E8DF] text-[#8A463B] text-xs font-bold uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <span className="text-xs text-[#826F67]">{selectedPost.date}</span>
              <span className="text-xs text-[#826F67]">·</span>
              <span className="text-xs text-[#826F67]">{selectedPost.readTime}</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#36221E] mb-6 leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex items-center justify-between pb-8 border-b border-[#EFE5DC] mb-8 text-xs text-[#7B6861]">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#F1E4DB] flex items-center justify-center font-editorial font-bold text-sm text-[#8A463B]">
                  LM
                </span>
                <span>{selectedPost.author}</span>
              </div>

              <button
                onClick={() => handleShare(selectedPost)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D9C8BC] hover:bg-[#FAF7F2] text-[#4F3E37] transition-all cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedShare ? (lang === 'es' ? '¡Enlace copiado!' : 'Copied link!') : (lang === 'es' ? 'Compartir' : 'Share')}</span>
              </button>
            </div>

            {/* Post Content */}
            <div className="prose prose-stone max-w-none space-y-5 text-base sm:text-lg text-[#4E3D36] leading-relaxed">
              {selectedPost.content.split('\n\n').map((paragraph, pIdx) => {
                if (paragraph.startsWith('•')) {
                  return (
                    <div key={pIdx} className="p-4 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#9B5347] my-4 text-sm sm:text-base">
                      {paragraph}
                    </div>
                  );
                }
                return (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Post Bottom CTA */}
            <div className="mt-12 pt-8 border-t border-[#EFE5DC] bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-editorial text-xl font-bold text-[#36221E]">
                  {lang === 'es' ? '¿Te sientes identificada con esta historia?' : 'Do you relate to this experience?'}
                </h4>
                <p className="text-xs sm:text-sm text-[#6C5952] mt-1 max-w-md">
                  {lang === 'es'
                    ? 'No tienes que pasar por esto en soledad. Escríbenos y te acompañamos con información y escucha sin coste alguno.'
                    : 'You do not have to carry this alone. Reach out to us for free guidance and warm peer support.'}
                </p>
              </div>

              <button
                onClick={() =>
                  onOpenContact(
                    lang === 'es'
                      ? `Hola, he leído el artículo "${selectedPost.title}" en el blog y me gustaría recibir orientación sobre mi caso en Málaga.`
                      : `Hello, I read "${selectedPost.title}" on the blog and would like free guidance regarding my case.`
                  )
                }
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>{lang === 'es' ? 'Hablar con nosotras' : 'Talk with us'}</span>
              </button>
            </div>

          </article>
        ) : (
          /* BLOG LIST VIEW */
          <div>
            
            {/* Header Title */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0D6] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'Espacio de Cercanía & Vivencias' : 'Stories & Practical Insights'}</span>
              </div>
              <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#36221E] mb-4">
                {lang === 'es' ? 'Historias, Anécdotas & Consejos' : 'Stories, Insights & Guidance'}
              </h1>
              <p className="text-base text-[#614F48] leading-relaxed">
                {lang === 'es'
                  ? 'Un rincón personal donde compartimos experiencias reales con el lipedema en Málaga, trucos del día a día y reflexiones honestas.'
                  : 'A heartfelt journal where we share lived experiences with lipedema, practical day-to-day advice, and genuine reassurance.'}
              </p>
            </div>

            {/* Search and Category Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
              
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#36221E] text-white shadow-xs'
                        : 'bg-white border border-[#D8C7B9] text-[#5C4A43] hover:bg-[#F2E8DF]'
                    }`}
                  >
                    {cat === 'all' ? (lang === 'es' ? 'Todos los temas' : 'All topics') : cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-[#8C766E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'es' ? 'Buscar artículos...' : 'Search articles...'}
                  className="w-full pl-9 pr-4 py-2 rounded-full border border-[#D5C2B2] bg-white text-xs sm:text-sm text-[#36221E] outline-none focus:border-[#9B5347] transition-all"
                />
              </div>

            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white rounded-3xl p-6 border border-[#E7DBD0] shadow-[0_4px_20px_rgba(74,46,43,0.04)] hover:shadow-[0_12px_35px_rgba(74,46,43,0.09)] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F5ECE4] text-[#8A463B]">
                        {post.category}
                      </span>
                      <span className="text-xs text-[#88746D]">{post.readTime}</span>
                    </div>

                    <h3 className="font-editorial text-2xl font-bold text-[#36221E] group-hover:text-[#9B5347] transition-colors mb-3 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5E4C45] leading-relaxed line-clamp-4 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EFE5DB] flex items-center justify-between">
                    <span className="text-xs text-[#826E67]">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#8A463B] group-hover:translate-x-1 transition-transform">
                      <span>{lang === 'es' ? 'Leer artículo' : 'Read article'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-[#E7DBD0] p-8">
                <Sparkles className="w-8 h-8 text-[#A8948B] mx-auto mb-3" />
                <h4 className="font-editorial text-2xl font-bold text-[#36221E] mb-2">
                  {lang === 'es' ? 'No se encontraron artículos' : 'No articles found'}
                </h4>
                <p className="text-sm text-[#736058]">
                  {lang === 'es'
                    ? 'Prueba con otra palabra clave o selecciona otra categoría.'
                    : 'Try another keyword or select a different category.'}
                </p>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
