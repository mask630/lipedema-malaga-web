export type LegalDocType = 'aviso-legal' | 'privacidad' | 'cookies' | 'descargo-medico' | null;

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  stage: string;
  message: string;
  privacyAccepted: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  description: string;
  options: {
    label: string;
    score: number;
    explanation?: string;
  }[];
}
