import React, { useState } from 'react';
import { ArrowRight, RotateCcw, Heart, ShieldAlert, Sparkles } from 'lucide-react';
import type { ContentSchema } from '../content/types';

interface SelfAssessmentQuizProps {
  content: ContentSchema['quiz'];
  onOpenContact: (initialMessage?: string) => void;
}

export const SelfAssessmentQuiz: React.FC<SelfAssessmentQuizProps> = ({
  content,
  onOpenContact,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (score: number) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (currentStep < content.questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setAnswers([]);
    setCurrentStep(0);
    setShowResults(false);
  };

  const totalScore = answers.reduce((sum, val) => sum + val, 0);
  const currentQ = content.questions[currentStep];

  return (
    <section id="test-orientativo" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0D6] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.tag}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#36221E] mb-4">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-[#65534C] max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E6DCD1] shadow-[0_10px_35px_rgba(74,46,43,0.06)]">
          
          {!showResults && currentQ ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs font-semibold text-[#8C756D] mb-2">
                  <span>{content.progressStep} {currentStep + 1} / {content.questions.length}</span>
                  <span>{Math.round(((currentStep) / content.questions.length) * 100)}% {content.progressComplete}</span>
                </div>
                <div className="w-full h-2 bg-[#F1E8DF] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#9B5347] transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / content.questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Item */}
              <div className="mb-8">
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#36221E] mb-3">
                  {currentQ.question}
                </h3>
                <p className="text-sm text-[#74615A] leading-relaxed">
                  {currentQ.description}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3.5">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl border border-[#E5DACF] hover:border-[#9B5347] bg-[#FAF8F5] hover:bg-[#FDF9F7] text-[#41312C] text-sm sm:text-base font-medium transition-all duration-200 flex items-center justify-between group cursor-pointer shadow-2xs hover:shadow-xs"
                  >
                    <span>{opt.label}</span>
                    <span className="w-6 h-6 rounded-full border border-[#D5C2B2] group-hover:border-[#9B5347] group-hover:bg-[#9B5347] group-hover:text-white flex items-center justify-center shrink-0 ml-3 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="text-center py-4 animate-fadeIn">
              
              <div className="w-16 h-16 rounded-full bg-[#F5E8E1] text-[#9B5347] flex items-center justify-center mx-auto mb-5">
                {totalScore >= 6 ? (
                  <ShieldAlert className="w-8 h-8" />
                ) : (
                  <Heart className="w-8 h-8" />
                )}
              </div>

              <h3 className="font-editorial text-3xl font-bold text-[#36221E] mb-3">
                {totalScore >= 6
                  ? content.resultHighTitle
                  : totalScore >= 3
                  ? content.resultMidTitle
                  : content.resultLowTitle}
              </h3>

              <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border border-[#E5DACF] max-w-2xl mx-auto my-6 text-left text-sm text-[#5B4A43] leading-relaxed">
                <p>
                  {totalScore >= 6
                    ? content.resultHighDesc
                    : totalScore >= 3
                    ? content.resultMidDesc
                    : content.resultLowDesc}
                </p>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-[#87756E] mb-8 max-w-xl mx-auto">
                {content.disclaimer}
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  onClick={() =>
                    onOpenContact(
                      `Resultado Test Orientativo: ${totalScore}/10 pts. Deseo orientación sobre especialistas en Málaga.`
                    )
                  }
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white font-medium text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>{content.btnContact}</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-[#D5C2B2] hover:bg-white text-[#56453F] font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{content.btnRetry}</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
