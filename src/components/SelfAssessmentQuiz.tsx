import React, { useState } from 'react';
import { ArrowRight, RotateCcw, Heart, ShieldAlert, Sparkles } from 'lucide-react';
import type { QuizQuestion } from '../types';

interface SelfAssessmentQuizProps {
  onOpenContact: (initialMessage?: string) => void;
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Sientes dolor o hipersensibilidad al tacto o presión en tus piernas o brazos?',
    description: 'Por ejemplo, cuando se apoya tu mascota en tu regazo, el roce fuerte, o un leve pellizco te resulta desproporcionadamente molesto.',
    options: [
      { label: 'Sí, a menudo siento dolor, ardor o mucha sensibilidad al tacto', score: 2 },
      { label: 'A veces, especialmente al final del día o con calor', score: 1 },
      { label: 'No, no me duelen ni me molestan a la presión', score: 0 },
    ],
  },
  {
    id: 2,
    question: '¿Te salen hematomas o moratones espontáneos con mucha facilidad?',
    description: 'Aparecen moretones en muslos o pantorrillas sin recordar haberte dado ningún golpe previo.',
    options: [
      { label: 'Sí, con mucha frecuencia y sin causa aparente', score: 2 },
      { label: 'Ocasionalmente me descubro moratones inesperados', score: 1 },
      { label: 'Rara vez o solo cuando me doy un golpe fuerte', score: 0 },
    ],
  },
  {
    id: 3,
    question: '¿Existe una clara desproporción entre tu torso y tus extremidades?',
    description: 'Por ejemplo, sueles usar tallas significativamente distintas entre camisas/chaquetas (S/M) y pantalones o faldas (L/XL/XXL).',
    options: [
      { label: 'Sí, hay dos o más tallas de diferencia constante', score: 2 },
      { label: 'Algo de desproporción, pero no muy marcada', score: 1 },
      { label: 'Mi constitución es bastante proporcionada', score: 0 },
    ],
  },
  {
    id: 4,
    question: '¿La grasa de tus piernas parece inmune a las dietas o el ejercicio?',
    description: 'Has intentado perder peso, logrando adelgazar de cara, pecho y cintura, pero el volumen de caderas y piernas apenas cambia.',
    options: [
      { label: 'Totalmente identificada, mis piernas nunca adelgazan', score: 2 },
      { label: 'Pierden volumen muy lentamente en comparación con el resto', score: 1 },
      { label: 'Cuando hago dieta adelgazo de forma uniforme', score: 0 },
    ],
  },
  {
    id: 5,
    question: '¿Tus pies permanecen delgados con un "escalón" sobre el tobillo?',
    description: 'Conocido como el "signo del manguito" o cuff sign: la hinchazón frena bruscamente en el tobillo, sin afectar al empeine ni a los dedos del pie.',
    options: [
      { label: 'Sí, mis pies no están hinchados y se nota un corte en el tobillo', score: 2 },
      { label: 'Tengo algo de hinchazón generalizada que a veces llega a los pies', score: 1 },
      { label: 'No noto esa delimitación característica', score: 0 },
    ],
  },
];

export const SelfAssessmentQuiz: React.FC<SelfAssessmentQuizProps> = ({ onOpenContact }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (score: number) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (currentStep < questions.length - 1) {
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

  const currentQ = questions[currentStep];

  return (
    <section id="test-orientativo" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0D6] text-[#864439] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autoevaluación Gratuita y Respetuosa</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#36221E] mb-4">
            ¿Crees que podrías tener Lipedema?
          </h2>
          <p className="text-base sm:text-lg text-[#65534C] max-w-2xl mx-auto leading-relaxed">
            Este breve cuestionario de 5 preguntas te ayudará a reflexionar sobre los síntomas más comunes 
            de forma orientativa y sin alarmismos.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E6DCD1] shadow-[0_10px_35px_rgba(74,46,43,0.06)]">
          
          {!showResults ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs font-semibold text-[#8C756D] mb-2">
                  <span>Pregunta {currentStep + 1} de {questions.length}</span>
                  <span>{Math.round(((currentStep) / questions.length) * 100)}% completado</span>
                </div>
                <div className="w-full h-2 bg-[#F1E8DF] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#9B5347] transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
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
                  ? 'Tus respuestas coinciden con los signos habituales del Lipedema'
                  : totalScore >= 3
                  ? 'Existen indicios compatibles que merece la pena valorar'
                  : 'Poca compatibilidad con los síntomas característicos'}
              </h3>

              <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border border-[#E5DACF] max-w-2xl mx-auto my-6 text-left text-sm text-[#5B4A43] leading-relaxed">
                {totalScore >= 6 ? (
                  <p>
                    Presentas una alta concordancia con las manifestaciones clásicas (dolor al tacto, desproporción corporal resistente a dietas, signo del manguito y hematomas). 
                    <strong> No te alarmes:</strong> tener lipedema tiene solución y tratamientos que te devolverán la calidad de vida. 
                    El siguiente paso recomendado es una valoración por un médico vascular o especialista formado en Málaga.
                  </p>
                ) : totalScore >= 3 ? (
                  <p>
                    Reconoces algunos de los síntomas, aunque otros no están presentes o se manifiestan con menor intensidad. 
                    Podría tratarse de un grado temprano, retención hídrica o problemas de retorno venoso complementarios. 
                    Podemos orientarte para evaluar tu caso con calma.
                  </p>
                ) : (
                  <p>
                    Tu sintomatología parece alejarse de los criterios clínicos principales de lipedema. No obstante, 
                    si sientes pesadez en las piernas o molestias circulatorias, consultar con un especialista vascular siempre es la opción más segura.
                  </p>
                )}
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-[#87756E] mb-8 max-w-xl mx-auto">
                * Este test es una herramienta divulgativa y de reflexión orientativa. No constituye un diagnóstico médico clínico oficial ni sustituye la exploración presencial de un profesional sanitario.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  onClick={() =>
                    onOpenContact(
                      `Hola, he realizado el test orientativo en la web (Puntuación: ${totalScore}/10) y me gustaría recibir orientación sobre especialistas y pasos a seguir en Málaga.`
                    )
                  }
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#9B5347] hover:bg-[#864439] text-white font-medium text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>Hablar con nosotras sobre mis resultados</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-[#D5C2B2] hover:bg-white text-[#56453F] font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Repetir el test</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
