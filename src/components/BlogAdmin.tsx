import React, { useState } from 'react';
import { Plus, Edit2, Trash2, ArrowLeft, Check, Download, KeyRound } from 'lucide-react';
import type { BlogPost, Lang } from '../types';

interface BlogAdminProps {
  posts: BlogPost[];
  onSavePost: (post: BlogPost) => void;
  onDeletePost: (id: string) => void;
  onClose: () => void;
}

const DEFAULT_ADMIN_PIN = 'malaga2026';

export const BlogAdmin: React.FC<BlogAdminProps> = ({
  posts,
  onSavePost,
  onDeletePost,
  onClose,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('lm_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState(false);

  // Editing state
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Form fields
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<BlogPost['category']>('Historia personal');
  const [author, setAuthor] = useState('Compañera de Lipedema Málaga');
  const [readTime, setReadTime] = useState('4 min de lectura');
  const [postLang, setPostLang] = useState<Lang>('es');
  const [savedNotice, setSavedNotice] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_ADMIN_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem('lm_admin_auth', 'true');
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleStartCreate = () => {
    setIsCreating(true);
    setEditingPost(null);
    setTitle('');
    setSlug('');
    setExcerpt('');
    setContent('');
    setCategory('Historia personal');
    setAuthor('Compañera de Lipedema Málaga');
    setReadTime('4 min de lectura');
    setPostLang('es');
  };

  const handleStartEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsCreating(true);
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setCategory(post.category);
    setAuthor(post.author);
    setReadTime(post.readTime);
    setPostLang(post.lang);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    if (!editingPost) {
      const generatedSlug = newTitle
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setSlug(generatedSlug);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const postToSave: BlogPost = {
      id: editingPost ? editingPost.id : `post-custom-${Date.now()}`,
      slug: slug.trim() || `articulo-${Date.now()}`,
      title: title.trim(),
      excerpt: excerpt.trim() || title.trim(),
      content: content.trim(),
      category,
      author: author.trim() || 'Compañera de Lipedema Málaga',
      date: editingPost ? editingPost.date : new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }),
      readTime: readTime.trim() || '4 min de lectura',
      lang: postLang,
      isCustom: true,
    };

    onSavePost(postToSave);
    setIsCreating(false);
    setEditingPost(null);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(posts, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `articulos-blog-lipedema-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Screen 1: Login modal
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
        <div className="bg-[#FAF7F2] border border-[#D5C2B2] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl">
          
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#F4E8DF] text-[#8A463B] flex items-center justify-center mx-auto mb-3">
              <KeyRound className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-[#36221E]">
              Acceso a Redacción del Blog
            </h3>
            <p className="text-xs text-[#7A675F] mt-1">
              Introduce la clave de acceso de Lipedema Málaga para escribir y gestionar publicaciones.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                Clave de Redacción
              </label>
              <input
                type="password"
                required
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Clave de redacción (ej. malaga2026)"
                className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] focus:ring-1 focus:ring-[#9B5347] bg-white text-sm text-[#36221E] outline-none"
              />
              <p className="text-[11px] text-[#8A766F] mt-1">
                Clave predeterminada: <code className="bg-[#EFE4DA] px-1.5 py-0.5 rounded font-mono text-[#36221E]">malaga2026</code>
              </p>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs text-center font-medium">
                Clave incorrecta. Por favor, verifica e inténtalo de nuevo.
              </div>
            )}

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
              >
                Acceder al Panel
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-4 rounded-full border border-[#D5C2B2] hover:bg-white text-[#56453F] text-xs font-semibold transition-all cursor-pointer"
              >
                Volver
              </button>
            </div>
          </form>

        </div>
      </div>
    );
  }

  // Screen 2: Editor / Dashboard
  return (
    <div className="pt-24 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8DCD1] mb-8">
          <div>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs text-[#7A675F] hover:text-[#9B5347] font-semibold mb-2 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a la vista pública del Blog</span>
            </button>
            <h1 className="font-editorial text-3xl font-bold text-[#36221E]">
              Panel de Redacción & SEO del Blog
            </h1>
            <p className="text-xs text-[#7A675F] mt-0.5">
              Redacta anécdotas, experiencias personales y artículos para posicionar la plataforma en Google.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJson}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#D5C2B2] bg-white hover:bg-[#F2E8DF] text-[#4F3E37] text-xs font-semibold transition-all cursor-pointer shadow-2xs"
              title="Descargar copia de seguridad en JSON"
            >
              <Download className="w-3.5 h-3.5 text-[#8A463B]" />
              <span>Exportar Copia (JSON)</span>
            </button>

            {!isCreating && (
              <button
                onClick={handleStartCreate}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Nuevo Artículo</span>
              </button>
            )}
          </div>
        </div>

        {savedNotice && (
          <div className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-xs flex items-center gap-2 font-medium animate-fadeIn">
            <Check className="w-4 h-4 text-green-600" />
            <span>Artículo guardado con éxito. Ya está visible en el blog de la web.</span>
          </div>
        )}

        {/* EDITOR FORM */}
        {isCreating ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E7DBD0] shadow-sm animate-fadeIn">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#EFE5DB] mb-6">
              <h2 className="font-editorial text-2xl font-bold text-[#36221E]">
                {editingPost ? 'Editar Artículo' : 'Redactar Nuevo Artículo'}
              </h2>
              <button
                onClick={() => {
                  setIsCreating(false);
                  setEditingPost(null);
                }}
                className="text-xs text-[#7A675F] hover:text-[#36221E] font-medium"
              >
                Cancelar
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              
              {/* Title & Slug */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                    Título del Artículo <span className="text-[#8A463B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Ej. Mi experiencia con el drenaje linfático en Málaga..."
                    className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                    Slug / URL amigable (SEO)
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="mi-experiencia-drenaje-linfatico-malaga"
                    className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] focus:border-[#9B5347] bg-[#FAF8F5] text-sm text-[#36221E] outline-none font-mono text-xs"
                  />
                </div>
              </div>

              {/* Language, Category, Author, ReadTime */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                    Idioma
                  </label>
                  <select
                    value={postLang}
                    onChange={(e) => setPostLang(e.target.value as Lang)}
                    className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] bg-[#FAF8F5] text-xs sm:text-sm text-[#36221E] outline-none cursor-pointer"
                  >
                    <option value="es">Español (ES)</option>
                    <option value="en">Inglés (EN)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                    Categoría
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as BlogPost['category'])}
                    className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] bg-[#FAF8F5] text-xs sm:text-sm text-[#36221E] outline-none cursor-pointer"
                  >
                    <option value="Historia personal">Historia personal</option>
                    <option value="Consejos prácticos">Consejos prácticos</option>
                    <option value="Tratamiento">Tratamiento</option>
                    <option value="Málaga">Málaga</option>
                    <option value="Personal Story">Personal Story (EN)</option>
                    <option value="Care & Treatment">Care & Treatment (EN)</option>
                    <option value="Practical Tips">Practical Tips (EN)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                    Firma / Autor
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Compañera de Lipedema Málaga"
                    className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] bg-[#FAF8F5] text-sm text-[#36221E] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                    Tiempo de lectura
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="4 min de lectura"
                    className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] bg-[#FAF8F5] text-sm text-[#36221E] outline-none"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                  Resumen breve / Extracto para la tarjeta (1-2 frases para SEO)
                </label>
                <textarea
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Escribe un breve resumen que enganche y explique de qué trata el artículo..."
                  className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] bg-[#FAF8F5] text-sm text-[#36221E] outline-none resize-none"
                />
              </div>

              {/* Full Content */}
              <div>
                <label className="block text-xs font-semibold text-[#4F3E37] uppercase tracking-wider mb-1.5">
                  Contenido Completo <span className="text-[#8A463B]">*</span>
                </label>
                <textarea
                  rows={10}
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Escribe aquí la historia o artículo completo. Separa los párrafos con saltos de línea. Si empiezas una línea con '•', se destacará como una tarjeta especial..."
                  className="w-full px-4 py-3 rounded-xl border border-[#DED0C3] bg-[#FAF8F5] text-sm text-[#36221E] outline-none leading-relaxed"
                />
              </div>

              {/* Submit / Cancel Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#EFE5DB]">
                <button
                  type="button"
                  onClick={() => {
                    setIsCreating(false);
                    setEditingPost(null);
                  }}
                  className="px-5 py-2.5 rounded-full border border-[#D5C2B2] hover:bg-[#FAF7F2] text-[#4F3E37] text-xs font-semibold transition-all cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>{editingPost ? 'Actualizar Artículo' : 'Publicar en el Blog'}</span>
                </button>
              </div>

            </form>

          </div>
        ) : (
          /* POSTS LIST TABLE */
          <div className="bg-white rounded-3xl border border-[#E7DBD0] overflow-hidden shadow-xs">
            <div className="p-5 border-b border-[#EFE5DB] bg-[#FAF7F2] flex items-center justify-between">
              <span className="text-xs font-bold text-[#36221E] uppercase tracking-wider">
                Artículos Disponibles ({posts.length})
              </span>
              <span className="text-xs text-[#826F67]">
                Se guardan automáticamente en tu navegador
              </span>
            </div>

            <div className="divide-y divide-[#EFE7DE]">
              {posts.map((post) => (
                <div key={post.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FDFBF9] transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-[#F4E8DF] text-[#8A463B]">
                        {post.lang.toUpperCase()}
                      </span>
                      <span className="text-xs font-semibold text-[#8A463B]">{post.category}</span>
                      <span className="text-xs text-[#A18A82]">· {post.date}</span>
                    </div>
                    <h3 className="font-editorial text-lg font-bold text-[#36221E]">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#75625B] line-clamp-1">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleStartEdit(post)}
                      className="p-2 rounded-full border border-[#D5C2B2] hover:bg-[#F5ECE4] text-[#55433C] transition-colors cursor-pointer"
                      title="Editar artículo"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    {post.isCustom && (
                      <button
                        onClick={() => onDeletePost(post.id)}
                        className="p-2 rounded-full border border-red-200 hover:bg-red-50 text-red-600 transition-colors cursor-pointer"
                        title="Eliminar artículo"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
