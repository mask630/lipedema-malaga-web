# Lipedema Málaga · Plataforma de Información y Red de Apoyo Gratuita

Sitio web oficial de la iniciativa **Lipedema Málaga** ([lipedemamalaga.org](https://lipedemamalaga.org)).  
Una red de apoyo altruista, independiente y sin ánimo de lucro diseñada para acompañar con calidez, rigor y empatía a personas que padecen o sospechan padecer lipedema en la provincia de Málaga y Andalucía.

---

## 🌸 Identidad Visual y Experiencia
- **Paleta cromática**: Basada en los tonos cálidos, botánicos y reconfortantes del logotipo oficial:
  - Crema de fondo: `#FAF7F2`
  - Terracota suave / Rosa palo de contraste: `#9B5347` / `#8A463B`
  - Chocolate suave / Sepia: `#36221E` y `#4F3E37`
  - Blanco cálido para tarjetas limpias y legibles: `#FFFFFF`
- **Tipografías**: 
  - Títulos editoriales: *Cormorant Garamond* (elegancia, serenidad, calidez humana)
  - Textos de lectura: *Plus Jakarta Sans* (claridad, legibilidad y accesibilidad médica)
- **Tono**: Cercano, empático y tranquilizador. Trato de persona a persona ("No estás sola, no es tu culpa y no eres un número").

---

## 📑 Estructura y Secciones Implementadas

1. **Cabecera Flotante (`Navbar`)**:
   - Logotipo oficial circular botánico.
   - Navegación fluida y menú adaptativo para dispositivos móviles.
   - Enlace directo a la comunidad de Instagram `@lipedemamalaga` y botón de "Ayuda Gratuita".

2. **Inicio Confortable (`Hero`)**:
   - Mensaje de bienvenida reconfortante y desculpabilizador.
   - Integración visual de las polaroids de divulgación creadas por el proyecto (*"¿Qué es el lipedema?"* y *"¿Crees que tienes lipedema?"*).
   - Indicadores de confianza: 100% gratuito, apoyo entre iguales y red de profesionales contrastados en Málaga.

3. **¿Qué es el Lipedema? (`WhatIsLipedema`)**:
   - Explicación médica rigurosa (código CIE-11 de la OMS: EF02.2).
   - Pestaña comparativa interactiva: *Lipedema vs Obesidad Común vs Celulitis*.
   - Explicación de los 3 grados clínicos y síntomas clave (dolor a la presión, hematomas espontáneos, signo del manguito en tobillos/muñecas).

4. **Tratamiento Conservador (`ConservativeTreatment`)**:
   - Los 5 pilares fundamentales en Málaga:
     1. *Nutrición Antiinflamatoria*: Nutricionistas formadas en patología vascular en Málaga.
     2. *Fisioterapia y Drenaje Linfático Manual (DLM)*: Centros especializados en terapia descongestiva.
     3. *Medias de Compresión de Tejido Plano*: Ortopedias expertas y asesoramiento para receta médica en el SAS.
     4. *Ejercicio Terapéutico*: Trabajo en agua y fuerza adaptada sin impacto lesivo.
     5. *Apoyo Psicológico*: Espacio seguro para el autocuidado y la salud mental.

5. **Cirugía y Postoperatorio (`SurgeryAndPostop`)**:
   - Información honesta y ética sobre la liposucción WAL/TAL para lipedema.
   - La importancia crítica del postoperatorio precoz (el 50% del éxito clínico).
   - Advertencias para evitar clínicas comerciales agresivas y criterio para elegir cirujanos experimentados.
   - Compromiso de independencia absoluta (0 comisiones de clínicas).

6. **Test de Autoevaluación Orientativo (`SelfAssessmentQuiz`)**:
   - Cuestionario respetuoso e interactivo de 5 preguntas sobre síntomas habituales.
   - Cálculo automático con recomendaciones empáticas y enlace directo a orientación gratuita.
   - Descargo médico explícito.

7. **Quiénes Somos (`AboutUs`)**:
   - Manifiesto de vocación altruista: ayuda de pacientes para pacientes.
   - Correo oficial de contacto (`info@lipedemamalaga.org`) e Instagram.

8. **Contacta con Nosotras (`ContactSection`)**:
   - Formulario sencillo y cálido con selector de momento/etapa personal.
   - Cumplimiento estricto del RGPD con casilla de consentimiento verificable.
   - Mensaje de confirmación reconfortante y vías directas alternativas.

9. **Banner y Modal de Cookies (`CookieBanner`)**:
   - Conforme a la Guía sobre cookies de la AEPD y normativa europea ePrivacy.
   - Opciones: *Aceptar todas*, *Rechazar no esenciales* y *Configurar preferencias* (técnicas vs analíticas).
   - Persistencia segura en `localStorage`.

10. **Avisos Legales Completos (`LegalModals`)**:
    - **Aviso Legal**: LSSI-CE, titularidad de la plataforma ciudadana en Málaga y objeto divulgativo.
    - **Política de Privacidad (RGPD y LOPDGDD)**: Finalidad exclusiva de atención gratuita, no cesión de datos confidenciales y ejercicio de derechos ARCO.
    - **Política de Cookies**: Desglose técnico y guía de revocación.
    - **Descargo de Responsabilidad Médica (Medical Disclaimer)**: Garantía de que los contenidos son orientativos y no sustituyen consulta médica reglada.

---

## 🚀 Despliegue en Vercel

El proyecto incluye la configuración lista en `vercel.json` con enrutamiento SPA y cabeceras de seguridad.

### Opción A: Despliegue directo mediante Vercel CLI
En la terminal del proyecto, ejecuta:
```bash
npx vercel login
npx vercel --prod
```
El asistente te preguntará si deseas desplegar el proyecto y te generará una URL pública instantánea (ej: `lipedema-malaga.vercel.app`).

### Opción B: Despliegue desde GitHub
1. Sube el repositorio a GitHub o GitLab.
2. Inicia sesión en [vercel.com](https://vercel.com).
3. Haz clic en **Add New... -> Project** e importa el repositorio `lipedema_malaga_support_web`.
4. El framework se detectará automáticamente como **Vite**.
5. Haz clic en **Deploy**. ¡Listo! Una vez activo, en la sección *Domains* de Vercel podrás vincular tu dominio definitivo `lipedemamalaga.org`.

---

## 🛠️ Desarrollo Local
```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```
