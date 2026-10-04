export type Lang = 'es' | 'en';

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
