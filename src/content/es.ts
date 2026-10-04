import type { ContentSchema } from './types';

export const contentEs: ContentSchema = {
  nav: {
    menu: 'Menú',
    close: 'Cerrar',
    links: {
      home: 'Inicio',
      whatIs: '¿Qué es el Lipedema?',
      treatment: 'Tratamiento Conservador',
      surgery: 'Cirugía & Postoperatorio',
      quiz: 'Test Orientativo',
      about: 'Quiénes Somos',
      contact: 'Contacto',
      blog: 'Blog & Anécdotas',
    },
    freeHelp: 'Ayuda Gratuita',
    instagramLabel: 'Instagram @lipedemamalaga',
  },
  hero: {
    titlePrefix: 'No estás sola. ',
    titleHighlight: 'No es tu falta de voluntad',
    titleSuffix: ' y no eres un número.',
    subtitle:
      'Un espacio tranquilo y honesto para resolver dudas sobre el lipedema. Te escuchamos de persona a persona y te orientamos sin ningún coste.',
    ctaPrimary: 'Hablar con nosotras',
    ctaSecondary: 'Hacer el test orientativo',
    pillars: {
      freeTitle: 'Orientación Gratuita',
      freeDesc: 'No te cobramos nada por asesorarte ni por escucharte.',
      peersTitle: 'Apoyo entre iguales',
      peersDesc: 'Mujeres que conocemos en primera persona esta patología.',
      networkTitle: 'Profesionales en Málaga',
      networkDesc: 'Fisioterapia especializada en DLM, nutrición y ortopedia.',
    },
    polaroid1Title: '¿Qué es el Lipedema?',
    polaroid1Desc: 'Patología inflamatoria crónica reconocida por la OMS.',
    polaroid2Title: '¿Crees que tienes lipedema?',
    polaroid2Desc: 'Resuelve tus dudas con empatía y sin juicios.',
    badgeListen: 'Te escuchamos',
  },
  whatIs: {
    tag: 'Información médica clara',
    title: '¿Qué es el Lipedema?',
    subtitle:
      'Una enfermedad del tejido adiposo reconocida oficialmente por la OMS que con demasiada frecuencia se confunde con sobrepeso o celulitis.',
    tabs: {
      definition: 'Definición y Síntomas',
      comparison: 'Lipedema vs Obesidad y Celulitis',
      stages: 'Grados y Evolución',
    },
    cieCode: 'CIE-11 · Código EF02.2',
    defTitle: 'Una condición del tejido graso, no un problema estético',
    defP1:
      'El lipedema es una proliferación anormal de los adipocitos (células grasas), habitualmente simétrica, acompañada de microinflamación constante y alteración de los capilares y la microcirculación linfática.',
    defP2:
      'Afecta casi exclusivamente a mujeres y suele desencadenarse o intensificarse durante cambios hormonales (pubertad, embarazos, menopausia). Por eso las dietas estrictas y el ejercicio común no logran reducir el volumen de las extremidades afectadas.',
    defCallout:
      'Poner nombre a lo que te ocurre suele ser un verdadero alivio: comprendes que tus dolores y tu volumen corporal no son culpa de tu falta de constancia.',
    symptoms: {
      painTitle: 'Dolor y sensibilidad al tacto',
      painDesc: 'Sensación de ardor, dolor al mínimo roce o molestia si alguien se apoya sobre tus piernas.',
      bruisesTitle: 'Hematomas frecuentes',
      bruisesDesc: 'Moratones que surgen sin haberte dado golpes, causados por fragilidad capilar.',
      dietTitle: 'Resistencia a las dietas',
      dietDesc: 'El torso y la cara adelgazan, pero caderas, muslos o brazos mantienen el mismo volumen.',
      cuffTitle: 'Signo del manguito (Cuff Sign)',
      cuffDesc: 'El ensanchamiento frena bruscamente sobre los tobillos o muñecas; los pies y manos quedan libres.',
    },
    comparisonHeaders: {
      feature: 'Característica',
      lipedema: 'Lipedema',
      obesity: 'Obesidad Común',
      cellulite: 'Celulitis',
    },
    comparisonRows: [
      {
        feature: 'Dolor al tacto y pesadez',
        lipedema: 'Sí, síntoma habitual y característico',
        obesity: 'No suele doler a la presión leve',
        cellulite: 'Indolora',
      },
      {
        feature: 'Tendencia a hematomas',
        lipedema: 'Muy frecuente sin golpe previo',
        obesity: 'Infrecuente',
        cellulite: 'No asociada',
      },
      {
        feature: 'Respuesta al déficit calórico',
        lipedema: 'Mínima o nula en la zona enferma',
        obesity: 'Pérdida de volumen general',
        cellulite: 'Puede mejorar según el tono',
      },
      {
        feature: 'Pies y manos',
        lipedema: 'Respeta pies y manos (escalón visible)',
        obesity: 'Grasa repartida de forma homogénea',
        cellulite: 'No aplica',
      },
      {
        feature: 'Reconocimiento médico',
        lipedema: 'Enfermedad crónica (OMS CIE-11)',
        obesity: 'Trastorno metabólico',
        cellulite: 'Condición estética',
      },
    ],
    stages: [
      {
        tag: 'Fase Inicial',
        title: 'Grado I',
        desc: 'Piel con aspecto uniforme en superficie. Al palpar se perciben pequeñas bolitas o nódulos subcutáneos de consistencia blanda. Ya puede presentarse pesadez y dolor.',
        action: 'El tratamiento conservador precoz frena el avance y mejora notablemente el día a día.',
      },
      {
        tag: 'Fase Intermedia',
        title: 'Grado II',
        desc: 'Superficie de la piel irregular (piel acolchada). Nódulos del tamaño de nueces claramente palpables. Mayor susceptibilidad a hematomas y fatiga en piernas.',
        action: 'Uso de medias de tejido plano, drenaje linfático manual y pautas antiinflamatorias.',
      },
      {
        tag: 'Fase Avanzada',
        title: 'Grado III',
        desc: 'Aparición de pliegues o lóbulos de grasa pronunciados en muslos, rodillas o pantorrillas que pueden sobrecargar las articulaciones y limitar el movimiento.',
        action: 'Abordaje conservador intensivo y valoración quirúrgica si hay afectación biomecánica.',
      },
    ],
  },
  treatment: {
    tag: 'Bienestar diario',
    title: 'Tratamiento Conservador:',
    titleItalic: 'El punto de partida imprescindible',
    subtitle:
      'Tanto si decides no operarte como si quieres cuidar tu cuerpo antes o después de cualquier decisión, el tratamiento conservador es el pilar que te devuelve la ligereza y el control.',
    pillars: [
      {
        title: 'Nutrición Antiinflamatoria',
        subtitle: 'Nutricionistas con experiencia en patología vascular',
        desc: 'Lejos de dietas restrictivas que solo generan ansiedad, se busca reducir la inflamación de bajo grado, cuidar la microbiota y modular los picos de insulina.',
        points: [
          'Alimentación basada en comida real y antiinflamatoria',
          'Sin pasar hambre ni obsesionarse con la báscula',
          'Menor retención de líquidos y menos pesadez',
        ],
      },
      {
        title: 'Fisioterapia y Drenaje Linfático (DLM)',
        subtitle: 'Técnicas manuales específicas en centros formados',
        desc: 'El drenaje linfático manual suave y bien aplicado favorece la reabsorción del líquido retenido sin lesionar los capilares. Alivia la sensación de tensión y dolor.',
        points: [
          'Maniobras suaves y rítmicas de vaciado linfático',
          'Terapia descongestiva adaptada a cada fase',
          'Alivio de contracturas y rigidez muscular asociada',
        ],
      },
      {
        title: 'Medias de Compresión a Medida',
        subtitle: 'Tejido plano adaptado por ortopedias cualificadas',
        desc: 'Las medias de tejido plano son fundamentales: ejercen una contención firme que ayuda al retorno venolinfático e impide que las piernas se hinchen a lo largo de la jornada.',
        points: [
          'Imprescindible elegir tejido plano, no circular de farmacia',
          'Toma minuciosa de medidas anatómicas',
          'Asesoramiento para gestionar la receta médica en la sanidad pública',
        ],
      },
      {
        title: 'Movimiento y Ejercicio Adaptado',
        subtitle: 'Actividad física de bajo impacto para tus articulaciones',
        desc: 'Moverse en el agua (natación, aquagym, caminar en piscina) aprovecha la presión hidrostática natural. Combinado con entrenamiento de fuerza supervisado, estimula la bomba muscular.',
        points: [
          'Deportes acuáticos para drenar sin dolor',
          'Fuerza progresiva para proteger tus articulaciones',
          'Evitar deportes con impacto repetitivo sobre el suelo',
        ],
      },
      {
        title: 'Salud Emocional y Acompañamiento',
        subtitle: 'Validar lo que sientes en un entorno seguro',
        desc: 'Cargar durante años con la incomprensión y diagnósticos erróneos desgasta a cualquiera. Hablar con profesionales y compañeras que viven lo mismo ayuda a sanar la relación con el propio cuerpo.',
        points: [
          'Desculpabilización y acompañamiento sincero',
          'Herramientas para gestionar la incertidumbre',
          'Encuentro con personas que te entienden de verdad',
        ],
      },
    ],
    ctaCardTitle: '¿Te cuesta saber por dónde empezar?',
    ctaCardDesc:
      'Coordinar nutrición, ortopedia, fisio y médicos puede parecer un laberinto al principio. Escríbenos y te indicamos los primeros pasos recomendados con tranquilidad.',
    ctaCardBtn: 'Pedir orientación para tratamiento',
    calloutQuote:
      '«Aprender a convivir con el lipedema no ocurre de un día para otro. Hay momentos buenos y días en los que las piernas pesan más. Lo importante es construir tus hábitos con calma y con profesionales que realmente te entiendan.»',
    calloutText:
      'Cada persona tiene su propio ritmo. No tienes que hacerlo todo de golpe ni exigirte más de la cuenta.',
  },
  surgery: {
    tag: 'Decisiones meditadas',
    title: 'Cirugía y Postoperatorio:',
    titleItalic: 'Información clara para decidir con calma',
    subtitle:
      'Si estás valorando la vía quirúrgica o ya estás programando tu intervención, conocer los detalles reales te permitirá tomar decisiones seguras.',
    surgeryCardTag: 'Procedimiento Quirúrgico',
    surgeryCardSub: 'Técnicas WAL y TAL específicas',
    surgeryCardTitle: 'No es una liposucción estética corriente',
    surgeryCardDesc:
      'La cirugía de descompresión para lipedema tiene un propósito funcional: retirar tejido enfermo respetando escrupulosamente los vasos linfáticos y la red venosa.',
    surgeryCardPoints: [
      'Cánulas romas y técnica suave asistida por agua para no dañar los canales linfáticos.',
      'Estudio vascular y ecográfico previo para comprobar el estado circulatorio.',
      'Importancia de acudir a cirujanos con experiencia contrastada y demostrable en lipedema.',
    ],
    surgeryCardWarning:
      'Una intervención realizada con técnicas puramente estéticas y agresivas puede dañar los conductos linfáticos. Conocer la diferencia es vital.',
    postopCardTag: 'Recuperación',
    postopCardSub: 'El papel de los meses posteriores',
    postopCardTitle: 'El postoperatorio define tus resultados',
    postopCardDesc:
      'La operación es solo una parte del camino. Los cuidados posteriores determinan en gran medida la desinflamación y la salud del tejido intervenido.',
    postopCardPoints: [
      'Drenajes linfáticos inmediatos en los primeros días tras salir del quirófano.',
      'Uso continuado y ajuste periódico de fajas y prendas de compresión postquirúrgicas.',
      'Proceso largo: el tejido tarda entre 6 y 12 meses en estabilizarse por completo.',
    ],
    postopCardNote:
      'Planificar con antelación quién te realizará los drenajes en los días posteriores a la cirugía evita imprevistos y acelera tu recuperación.',
    guidanceBoxTitle: '¿Tienes dudas sobre la cirugía o la recuperación?',
    guidanceBoxDesc:
      'Podemos orientarte sobre qué preguntas hacer en consulta médica y cómo organizar tu postoperatorio con tranquilidad.',
    guidanceBoxBtn: 'Consultar dudas sobre cirugía',
  },
  quiz: {
    tag: 'Autoevaluación orientativa',
    title: '¿Crees que podrías tener Lipedema?',
    subtitle:
      'Este cuestionario de 5 preguntas te ayuda a valorar los signos más comunes con serenidad y sin alarmismos.',
    progressStep: 'Pregunta',
    progressComplete: 'completado',
    resultHighTitle: 'Tus respuestas coinciden con los signos habituales del Lipedema',
    resultHighDesc:
      'Existe una concordancia notable con los síntomas característicos (sensibilidad al tacto, desproporción corporal, resistencia al déficit calórico y hematomas frecuentes). Te recomendamos solicitar valoración médica especializada para confirmar el diagnóstico.',
    resultMidTitle: 'Presentas algunos indicios compatibles',
    resultMidDesc:
      'Identificas varios síntomas, aunque otros no están presentes. Puede ser un estadio temprano o coexistir con problemas de retorno venoso. Merece la pena consultarlo con calma.',
    resultLowTitle: 'Poca compatibilidad con los signos habituales',
    resultLowDesc:
      'Tus respuestas no sugieren las características clínicas primarias del lipedema. Aun así, si sientes pesadez o molestias en las piernas, una revisión circulatoria te aportará tranquilidad.',
    disclaimer:
      '* Este test tiene una finalidad puramente informativa y divulgativa. No constituye un diagnóstico médico ni sustituye la consulta con un facultativo especialista.',
    btnContact: 'Hablar con nosotras sobre mis respuestas',
    btnRetry: 'Repetir el cuestionario',
    questions: [
      {
        id: 1,
        question: '¿Sientes dolor o molestia desproporcionada al tacto o presión en las piernas o brazos?',
        description: 'Por ejemplo, cuando una mascota se apoya sobre tus piernas, al recibir un masaje o con un leve pellizco en la piel.',
        options: [
          { label: 'Sí, suelo sentir dolor, ardor o mucha sensibilidad al roce', score: 2 },
          { label: 'A veces, especialmente en días calurosos o tras pasar horas de pie', score: 1 },
          { label: 'No, no me duelen a la presión ni al tacto', score: 0 },
        ],
      },
      {
        id: 2,
        question: '¿Te aparecen moratones o hematomas sin recordar haberte golpeado?',
        description: 'Moretones frecuentes en muslos o pantorrillas sin una causa evidente.',
        options: [
          { label: 'Sí, con mucha frecuencia y sin motivo conocido', score: 2 },
          { label: 'De vez en cuando me descubro algún moratón inesperado', score: 1 },
          { label: 'Rara vez, solo cuando me doy un golpe fuerte', score: 0 },
        ],
      },
      {
        id: 3,
        question: '¿Existe una desproporción evidente entre la parte superior e inferior de tu cuerpo?',
        description: 'Sueles necesitar dos o más tallas distintas entre prendas de arriba (camisas, chaquetas) y pantalones o faldas.',
        options: [
          { label: 'Sí, hay dos o más tallas de diferencia de manera constante', score: 2 },
          { label: 'Algo de diferencia, pero dentro de lo habitual', score: 1 },
          { label: 'Mi constitución es proporcionada entre torso y piernas', score: 0 },
        ],
      },
      {
        id: 4,
        question: '¿La grasa de tus extremidades apenas varía aunque hagas dieta o ejercicio constante?',
        description: 'Al perder peso adelgazas de cara, pecho y cintura, pero el volumen de caderas y piernas apenas se modifica.',
        options: [
          { label: 'Totalmente identificada: mis piernas no reducen volumen con dieta', score: 2 },
          { label: 'Pierden volumen mucho más despacio que el resto del cuerpo', score: 1 },
          { label: 'Cuando adelgazo, lo hago de manera uniforme en todo el cuerpo', score: 0 },
        ],
      },
      {
        id: 5,
        question: '¿Tus pies permanecen delgados con un corte o pliegue sobre el tobillo?',
        description: 'Conocido como signo del manguito: la hinchazón frena bruscamente sobre el tobillo, sin afectar al empeine ni a los dedos.',
        options: [
          { label: 'Sí, mis pies están finos y se aprecia un escalón claro en el tobillo', score: 2 },
          { label: 'Tengo algo de hinchazón que a veces alcanza el empeine', score: 1 },
          { label: 'No aprecio esa delimitación en los tobillos', score: 0 },
        ],
      },
    ],
  },
  about: {
    tag: 'Quiénes Somos',
    title: 'Somos Lipedema Málaga:',
    titleItalic: 'Una red cercana para acompañarte',
    p1: 'Creamos esta iniciativa para ofrecer un espacio de orientación y escucha a quienes conviven con el lipedema, tanto a personas ya diagnosticadas como a quienes tienen dudas y no saben a qué profesional acudir.',
    p2: 'Conocemos el desconcierto que produce no encontrar respuestas en las consultas convencionales. Queremos que encuentres información fiable, consejos útiles y la tranquilidad de hablar con alguien que entiende tu situación.',
    quote:
      '«Nuestra labor de acompañamiento e información hacia las personas afectadas es completamente gratuita y voluntaria.»',
    btnInstagram: 'Instagram @lipedemamalaga',
    btnContact: 'Contactar con nosotras',
    platformInfo: 'Plataforma de información y apoyo · lipedemamalaga.org',
    pillars: [
      {
        title: 'Trato Cercano',
        desc: 'Te escuchamos con calma y sin prisas, entendiendo tus dudas y emociones.',
      },
      {
        title: 'Orientación Sin Coste',
        desc: 'Informar y acompañar a quien nos escribe es una labor 100% gratuita.',
      },
      {
        title: 'Red Local',
        desc: 'Te facilitamos referencias de fisioterapia DLM, nutrición y ortopedia cualificada.',
      },
      {
        title: 'Información Fiable',
        desc: 'Divulgación médica basada en consensos clínicos oficiales y experiencias reales.',
      },
    ],
  },
  contact: {
    tag: 'Atención personalizada',
    title: 'Contacta con nosotras:',
    titleItalic: 'Estamos para ayudarte',
    subtitle:
      'Rellena este breve formulario y te responderemos por correo electrónico de forma detallada y cercana. Tu consulta es totalmente gratuita.',
    cardPrivacyTitle: 'Confidencialidad Garantizada',
    cardPrivacyDesc: 'Tratamos tus datos exclusivamente para atender tu consulta conforme al RGPD.',
    cardFreeTitle: 'Sin Coste Alguno',
    cardFreeDesc: 'La atención, orientación y escucha es 100% gratuita para ti.',
    directTitle: 'Vías directas de contacto',
    formTitle: 'Ficha de Consulta',
    formSubtitle:
      'Completa los datos para estructurar tu consulta y archivarte en nuestra base de atención.',
    fields: {
      name: 'Nombre o Alias',
      namePlaceholder: 'Ej. María',
      email: 'Correo Electrónico',
      emailPlaceholder: 'tu-correo@ejemplo.com',
      phone: 'Teléfono o WhatsApp (opcional)',
      phonePlaceholder: '+34 600 000 000',
      city: 'Localidad / Provincia',
      cityPlaceholder: 'Ej. Málaga, Marbella, Antequera...',
      stage: '¿En qué situación te encuentras?',
      stageOptions: [
        'Tengo sospechas y busco orientación inicial',
        'Diagnóstico reciente y necesito saber los primeros pasos',
        'Busco fisioterapia DLM o nutrición en Málaga',
        'Necesito información sobre medias de compresión y ortopedia',
        'Estoy valorando cirugía o preparando mi postoperatorio',
        'Solo necesito hablar con alguien que me comprenda',
        'Otra consulta o información general',
      ],
      channel: 'Preferencia de respuesta',
      channelOptions: [
        'Correo electrónico',
        'WhatsApp / Mensaje',
        'Llamada telefónica',
      ],
      message: 'Detalle de tu consulta o situación',
      messagePlaceholder:
        'Cuéntanos con libertad qué dudas tienes, qué síntomas notas o qué información necesitas...',
      privacyCheckbox: 'He leído y acepto la ',
      privacyLink: 'Política de Privacidad',
      privacySuffix:
        '. Acepto el tratamiento confidencial de mis datos para responder a mi solicitud.',
      submitBtn: 'Enviar ficha de consulta',
      securityNote: '🔒 Datos protegidos según RGPD y LOPDGDD. Correo de atención: info@lipedemamalaga.org',
    },
    success: {
      title: '¡Consulta esquematizada con éxito!',
      desc: 'Hemos preparado tu ficha para archivarla de manera ordenada y darte respuesta personalizada.',
      summaryHeading: 'Ficha Generada para Registro:',
      openEmailBtn: 'Enviar por correo a info@lipedemamalaga.org',
      copyBtn: 'Copiar ficha al portapapeles',
      copiedNotice: '¡Ficha copiada! Puedes pegarla en cualquier mensaje.',
      anotherBtn: 'Rellenar otra consulta',
    },
  },
  legal: {
    noticeTitle: 'Aviso Legal (LSSI-CE)',
    privacyTitle: 'Política de Privacidad (RGPD)',
    cookiesTitle: 'Política de Cookies',
    disclaimerTitle: 'Descargo de Responsabilidad Médica',
    closeBtn: 'Cerrar',
  },
  footer: {
    desc: 'Red altruista de información y apoyo mutuo para personas con lipedema. Orientación cercana y gratuita.',
    navHeading: 'Navegación',
    legalHeading: 'Aspectos Legales & Médicos',
    disclaimerNote:
      'Los contenidos publicados en este portal tienen finalidad divulgativa y orientativa. No constituyen prescripción ni dictamen médico vinculante.',
    rights: 'Lipedema Málaga · lipedemamalaga.org · Todos los derechos reservados.',
    backToTop: 'Volver arriba',
  },
};
