import { ArrowLeft } from 'lucide-react';
import type { Lang } from '../types';

interface SubpageHeaderProps {
  title: string;
  subtitle?: string;
  lang: Lang;
  onGoHome: () => void;
}

export const SubpageHeader: React.FC<SubpageHeaderProps> = ({
  title,
  subtitle,
  lang,
  onGoHome,
}) => {
  const isEs = lang === 'es';

  return (
    <div className="pt-24 pb-8 md:pt-28 md:pb-10 bg-[#FAF7F2] border-b border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-4">
          <button
            onClick={onGoHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8A463B] hover:text-[#673027] bg-white/80 hover:bg-white px-3.5 py-1.5 rounded-full border border-[#D5C2B2] shadow-2xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isEs ? 'Volver al Inicio' : 'Back to Home'}</span>
          </button>
        </div>

        {/* Title */}
        <div className="max-w-3xl">
          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#36221E] leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-[#5F4E47] mt-3 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};
