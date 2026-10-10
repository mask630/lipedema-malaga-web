export type Lang = 'es' | 'en';

export type ViewMode = 'home' | 'que-es' | 'tratamiento' | 'test' | 'contacto' | 'blog' | 'admin';

export type LegalDocType = 'aviso-legal' | 'privacidad' | 'cookies' | 'descargo-medico' | null;

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  city?: string;
  stage: string;
  channel: string;
  message: string;
  privacyAccepted: boolean;
}

export interface StructuredInquiryRecord {
  id: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  stage: string;
  preferredChannel: string;
  message: string;
  consentGranted: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Historia personal' | 'Tratamiento' | 'Consejos prácticos' | 'Málaga' | 'Personal Story' | 'Care & Treatment' | 'Practical Tips';
  author: string;
  date: string;
  readTime: string;
  lang: Lang;
  isCustom?: boolean;
}
