import type { ContentSchema } from './types';

export const contentEn: ContentSchema = {
  nav: {
    menu: 'Menu',
    close: 'Close',
    links: {
      home: 'Home',
      whatIs: 'What is Lipedema?',
      treatment: 'Conservative Care',
      surgery: 'Surgery & Recovery',
      quiz: 'Self-Assessment',
      about: 'About Us',
      contact: 'Contact',
    },
    freeHelp: 'Free Support',
    instagramLabel: 'Instagram @lipedemamalaga',
  },
  hero: {
    titlePrefix: 'You are not alone. ',
    titleHighlight: 'It is not a lack of willpower',
    titleSuffix: ' and you are never just a number.',
    subtitle:
      'A welcoming and honest space to clear your doubts about lipedema. We listen to you person to person and guide you free of charge.',
    ctaPrimary: 'Talk with us',
    ctaSecondary: 'Take self-assessment',
    pillars: {
      freeTitle: 'Free Guidance',
      freeDesc: 'We never charge you for answering questions or offering support.',
      peersTitle: 'Peer Support',
      peersDesc: 'Women who understand this journey firsthand.',
      networkTitle: 'Local Care in Malaga',
      networkDesc: 'Specialized MLD physio, anti-inflammatory nutrition, and flat-knit garments.',
    },
    polaroid1Title: 'What is Lipedema?',
    polaroid1Desc: 'A chronic inflammatory fat disorder recognized by the WHO.',
    polaroid2Title: 'Do you have Lipedema?',
    polaroid2Desc: 'Explore your symptoms with empathy and without judgment.',
    badgeListen: 'We are here to listen',
  },
  whatIs: {
    tag: 'Clear medical knowledge',
    title: 'What is Lipedema?',
    subtitle:
      'A chronic adipose tissue disorder officially recognized by the WHO, all too often misdiagnosed as simple weight gain or cosmetic cellulite.',
    tabs: {
      definition: 'Definition & Symptoms',
      comparison: 'Lipedema vs Obesity & Cellulite',
      stages: 'Clinical Stages',
    },
    cieCode: 'ICD-11 · Code EF02.2',
    defTitle: 'A diseased fat tissue condition, not a cosmetic flaw',
    defP1:
      'Lipedema is an abnormal and symmetrical proliferation of adipocytes (fat cells), characterized by persistent low-grade microinflammation and compromised microvascular and lymphatic flow.',
    defP2:
      'It predominantly affects women and is typically triggered or exacerbated during hormonal transitions (puberty, pregnancy, menopause). For this reason, conventional calorie-deficit diets and exercise fail to reduce volume in the affected limbs.',
    defCallout:
      'Finding the real name for what you are experiencing is often an immense relief: you finally understand that your pain and body shape are not caused by lack of discipline.',
    symptoms: {
      painTitle: 'Pain and tenderness to touch',
      painDesc: 'A burning sensation, sensitivity to light pressure, or discomfort when a child or pet rests on your legs.',
      bruisesTitle: 'Frequent spontaneous bruising',
      bruisesDesc: 'Bruises appearing without any memorable knock or trauma, due to fragile capillary walls.',
      dietTitle: 'Resistance to diet & weight loss',
      dietDesc: 'Your upper body and face lose weight, yet hips, thighs, or arms retain the exact same volume.',
      cuffTitle: 'Cuff Sign around ankles & wrists',
      cuffDesc: 'Fat tissue accumulation stops abruptly at the ankles or wrists, sparing the feet and hands.',
    },
    comparisonHeaders: {
      feature: 'Feature',
      lipedema: 'Lipedema',
      obesity: 'General Obesity',
      cellulite: 'Cellulite',
    },
    comparisonRows: [
      {
        feature: 'Pain to touch & heaviness',
        lipedema: 'Yes, a defining clinical hallmark',
        obesity: 'Usually painless to mild pressure',
        cellulite: 'Painless',
      },
      {
        feature: 'Easy bruising',
        lipedema: 'Very common without prior injury',
        obesity: 'Uncommon',
        cellulite: 'Not associated',
      },
      {
        feature: 'Response to calorie restriction',
        lipedema: 'Minimal or none in affected areas',
        obesity: 'Proportional full-body loss',
        cellulite: 'May improve with muscle tone',
      },
      {
        feature: 'Feet and hands involvement',
        lipedema: 'Spared (distinct ankle cuff line)',
        obesity: 'Uniform fat distribution',
        cellulite: 'Not applicable',
      },
      {
        feature: 'Medical recognition',
        lipedema: 'Chronic disease (WHO ICD-11)',
        obesity: 'Metabolic disorder',
        cellulite: 'Cosmetic condition',
      },
    ],
    stages: [
      {
        tag: 'Initial Stage',
        title: 'Stage I',
        desc: 'Skin surface appears largely smooth. Soft pea-sized nodules can be palpated beneath the skin. Heaviness and tenderness may already be present.',
        action: 'Early conservative management prevents progression and significantly restores daily comfort.',
      },
      {
        tag: 'Intermediate Stage',
        title: 'Stage II',
        desc: 'Irregular skin texture with a mattress-like appearance. Larger walnut-sized nodules are clearly palpable. Increased fatigue and frequent bruising.',
        action: 'Custom flat-knit compression garments, manual lymphatic drainage, and anti-inflammatory habits.',
      },
      {
        tag: 'Advanced Stage',
        title: 'Stage III',
        desc: 'Marked lobules and large fat overhangs around thighs, knees, or calves that can impair mobility and joint alignment.',
        action: 'Intensive conservative protocol and assessment for specialized decompression surgery if biomechanics are hindered.',
      },
    ],
  },
  treatment: {
    tag: 'Daily well-being',
    title: 'Conservative Care:',
    titleItalic: 'The essential foundation',
    subtitle:
      'Whether you choose not to undergo surgery or wish to prepare your body thoroughly for any decision, conservative care restores comfort and empowers your daily routine.',
    pillars: [
      {
        title: 'Anti-Inflammatory Nutrition',
        subtitle: 'Dietitians experienced in vascular and connective disorders',
        desc: 'Moving far beyond restrictive diets that trigger anxiety, the goal is calming systemic inflammation, nourishing gut health, and balancing insulin spikes.',
        points: [
          'Real-food anti-inflammatory focus',
          'No starving or obsession with scale weight',
          'Noticeable reduction in fluid retention and stiffness',
        ],
      },
      {
        title: 'Physiotherapy & MLD (Lymphatic Drainage)',
        subtitle: 'Specific manual techniques by certified therapists',
        desc: 'Gentle, well-performed Manual Lymphatic Drainage stimulates fluid reabsorption without straining fragile capillaries, alleviating tension and deep-tissue ache.',
        points: [
          'Delicate, rhythmic lymphatic evacuation',
          'Decongestive therapy tailored to each stage',
          'Relief from fascia tension and muscle soreness',
        ],
      },
      {
        title: 'Custom Flat-Knit Compression Garments',
        subtitle: 'Fitted by certified orthotists in Malaga',
        desc: 'Flat-knit compression is the cornerstone of conservative therapy: its firm, non-elastic weave prevents fluid accumulation throughout the day.',
        points: [
          'Crucial difference between circular knit and medical flat-knit',
          'Meticulous anatomical measurement taking',
          'Guidance on public healthcare prescription paperwork',
        ],
      },
      {
        title: 'Low-Impact Movement & Exercise',
        subtitle: 'Physical activity gentle on your joints',
        desc: 'Water-based activities (swimming, water aerobics, shallow pool walking) utilize natural hydrostatic pressure. Combined with progressive strength training, it powers your calf muscle pump.',
        points: [
          'Water therapy for pain-free drainage',
          'Targeted strength to stabilize joint health',
          'Avoiding high-impact jarring on hard floors',
        ],
      },
      {
        title: 'Emotional Well-Being & Peer Support',
        subtitle: 'A safe haven to validate what you feel',
        desc: 'Years of medical dismissal and disbelief take a heavy emotional toll. Connecting with professionals and women who share your reality helps you make peace with your body.',
        points: [
          'Freedom from guilt and compassionate listening',
          'Coping tools for uncertainty and flare-up days',
          'Safe community space where you are understood',
        ],
      },
    ],
    ctaCardTitle: 'Unsure where to begin?',
    ctaCardDesc:
      'Organizing nutrition, orthotics, physio, and appointments can feel overwhelming at first. Reach out to us and we will calmly guide you through the initial steps.',
    ctaCardBtn: 'Ask for treatment guidance',
    calloutQuote:
      '“Learning to live well with lipedema does not happen overnight. There are good days and days when legs feel heavier. What matters is taking steady steps with professionals who truly understand the condition.”',
    calloutText:
      'Every woman moves at her own pace. You do not need to do everything at once or demand perfection of yourself.',
  },
  surgery: {
    tag: 'Informed decisions',
    title: 'Surgery & Post-Op Recovery:',
    titleItalic: 'Clear facts to decide with confidence',
    subtitle:
      'If you are exploring surgical options or preparing for an upcoming procedure, transparent knowledge is vital to staying safe and protecting your lymphatic system.',
    surgeryCardTag: 'Surgical Procedure',
    surgeryCardSub: 'Specialized WAL and TAL techniques',
    surgeryCardTitle: 'Not standard cosmetic liposuction',
    surgeryCardDesc:
      'Decompression surgery for lipedema has a functional health objective: removing diseased fat while rigorously sparing the lymphatic collectors and superficial nerves.',
    surgeryCardPoints: [
      'Blunt, water-assisted cannulas designed specifically to protect delicate lymph vessels.',
      'Mandatory pre-op Doppler ultrasound to evaluate venous and lymphatic competence.',
      'Imperative to consult surgeons with documented and verifiable lipedema specialization.',
    ],
    surgeryCardWarning:
      'Aggressive cosmetic liposuction can permanently harm lymphatic pathways and trigger secondary lipo-lymphedema. Knowing the difference is crucial.',
    postopCardTag: 'Recovery Phase',
    postopCardSub: 'The decisive months ahead',
    postopCardTitle: 'Post-op care defines your results',
    postopCardDesc:
      'The surgery is only half the journey. Dedicated aftercare fundamentally determines tissue healing and long-term decongestion.',
    postopCardPoints: [
      'Early manual lymphatic drainage starting within 24 to 48 hours post-op.',
      'Diligent wear and regular tailoring of post-surgical medical compression garments.',
      'Patience: tissues take between 6 and 12 months to completely settle and deflame.',
    ],
    postopCardNote:
      'Arranging your post-operative physiotherapy team well in advance ensures smooth recovery and peace of mind.',
    guidanceBoxTitle: 'Have questions about surgery or recovery?',
    guidanceBoxDesc:
      'We can help you prepare questions for consultations and outline how to manage your recovery with tranquility.',
    guidanceBoxBtn: 'Ask about surgery & recovery',
  },
  quiz: {
    tag: 'Exploratory self-test',
    title: 'Could you have Lipedema?',
    subtitle:
      'This 5-question questionnaire helps you reflect on the most characteristic signs calmly and without alarmism.',
    progressStep: 'Question',
    progressComplete: 'completed',
    resultHighTitle: 'Your answers align closely with typical Lipedema signs',
    resultHighDesc:
      'There is significant overlap with classical diagnostic indicators (pain on pressure, body disproportion, resistance to calorie restriction, and spontaneous bruising). We recommend a specialized clinical evaluation to confirm diagnosis.',
    resultMidTitle: 'You report several compatible signs',
    resultMidDesc:
      'You experience multiple hallmarks, although others may not be prominent. This could reflect an early stage or overlapping venous insufficiency. It is worth evaluating with a specialist.',
    resultLowTitle: 'Low alignment with primary signs',
    resultLowDesc:
      'Your symptoms do not strongly match the core diagnostic criteria for lipedema. If you experience persistent leg heaviness or swelling, a vascular checkup can provide reassurance.',
    disclaimer:
      '* This self-assessment is intended solely for educational and reflective purposes. It does not constitute an official medical diagnosis or replace a physical clinical consultation.',
    btnContact: 'Talk with us about your results',
    btnRetry: 'Retake the assessment',
    questions: [
      {
        id: 1,
        question: 'Do you feel disproportionate pain or tenderness upon pressure in your legs or arms?',
        description: 'For instance, when a pet sits on your lap, during a massage, or from light pinching on the skin.',
        options: [
          { label: 'Yes, I frequently experience ache, burning, or high sensitivity to touch', score: 2 },
          { label: 'Sometimes, particularly on hot days or after prolonged standing', score: 1 },
          { label: 'No, I feel no pain with touch or pressure', score: 0 },
        ],
      },
      {
        id: 2,
        question: 'Do you bruise easily without remembering any physical bump or trauma?',
        description: 'Frequent unexplained bruises appearing on thighs, calves, or upper arms.',
        options: [
          { label: 'Yes, very frequently and without obvious reason', score: 2 },
          { label: 'Occasionally I discover unexpected bruises', score: 1 },
          { label: 'Rarely, only after a hard knock or accident', score: 0 },
        ],
      },
      {
        id: 3,
        question: 'Is there a clear size discrepancy between your upper and lower body?',
        description: 'You consistently need two or more dress sizes different between tops (shirts, jackets) and pants or skirts.',
        options: [
          { label: 'Yes, there is a consistent two or more size gap', score: 2 },
          { label: 'A slight difference, but generally standard', score: 1 },
          { label: 'My proportions between torso and legs are balanced', score: 0 },
        ],
      },
      {
        id: 4,
        question: 'Does the fat in your limbs stubbornly resist diets or regular workout routines?',
        description: 'When losing weight, your face, chest, and waist shrink, but your hips and legs show virtually no change in volume.',
        options: [
          { label: 'Completely relate: my legs never slim down with diets', score: 2 },
          { label: 'They reduce much slower than the rest of my body', score: 1 },
          { label: 'When I lose weight, it happens evenly across my body', score: 0 },
        ],
      },
      {
        id: 5,
        question: 'Do your feet remain slim with a noticeable step or cuff over the ankle?',
        description: 'Known as the cuff sign: swelling and fat halt abruptly right above the ankle, sparing the top of the foot and toes.',
        options: [
          { label: 'Yes, my feet are slender with a clear step over the ankle', score: 2 },
          { label: 'I experience some general swelling that sometimes reaches the feet', score: 1 },
          { label: 'I do not observe any distinct cuff line at my ankles', score: 0 },
        ],
      },
    ],
  },
  about: {
    tag: 'About Us',
    title: 'We are Lipedema Malaga:',
    titleItalic: 'A compassionate support network',
    p1: 'We created this initiative to offer a warm, reliable harbor for anyone living with lipedema—both those with a formal diagnosis and those who suspect it and are unsure where to turn.',
    p2: 'We know the exhaustion of hearing that you just need to eat less and exercise more. We want you to find trusted information, practical guidance, and the peace of mind that comes from talking to people who understand.',
    quote:
      '“Our information and peer support services for affected individuals are entirely free and voluntary.”',
    btnInstagram: 'Instagram @lipedemamalaga',
    btnContact: 'Contact us',
    platformInfo: 'Information & support platform · lipedemamalaga.org',
    pillars: [
      {
        title: 'Human-Centered Care',
        desc: 'We listen to you patiently, honoring your emotions and personal journey.',
      },
      {
        title: 'Free Guidance',
        desc: 'Informing and supporting anyone who reaches out to us is completely free of charge.',
      },
      {
        title: 'Local Network',
        desc: 'We connect you with qualified MLD physiotherapists, dietitians, and orthotists in Malaga.',
      },
      {
        title: 'Reliable Information',
        desc: 'Medical facts grounded in official clinical consensus and authentic patient experience.',
      },
    ],
  },
  contact: {
    tag: 'Personalized support',
    title: 'Contact Us:',
    titleItalic: 'We are here to help you',
    subtitle:
      'Fill out this structured inquiry form and we will respond thoughtfully by email. Your consultation is completely free.',
    cardPrivacyTitle: 'Guaranteed Confidentiality',
    cardPrivacyDesc: 'We handle your details strictly to answer your inquiry in full compliance with GDPR.',
    cardFreeTitle: 'Zero Cost',
    cardFreeDesc: 'All our listening and guidance is 100% free of charge for you.',
    directTitle: 'Direct communication channels',
    formTitle: 'Inquiry & Case Sheet',
    formSubtitle:
      'Please fill out your details so your inquiry is organized and archived in our support registry.',
    fields: {
      name: 'Name or Alias',
      namePlaceholder: 'E.g. Sarah',
      email: 'Email Address',
      emailPlaceholder: 'your-email@example.com',
      phone: 'Phone or WhatsApp (optional)',
      phonePlaceholder: '+34 600 000 000',
      city: 'City / Location',
      cityPlaceholder: 'E.g. Malaga, Marbella, Fuengirola...',
      stage: 'What is your current situation?',
      stageOptions: [
        'I suspect I have lipedema and need initial guidance',
        'Recently diagnosed and need to know first steps',
        'Looking for MLD physio or nutrition specialists in Malaga',
        'Looking for flat-knit compression garments and orthotists',
        'Considering surgery or organizing post-op care',
        'I just need to speak with someone who understands',
        'Other question or general inquiry',
      ],
      channel: 'Preferred response method',
      channelOptions: [
        'Email',
        'WhatsApp / Message',
        'Phone call',
      ],
      message: 'Details of your inquiry or story',
      messagePlaceholder:
        'Feel free to share what symptoms you feel, what concerns you have, or what specific guidance you are seeking...',
      privacyCheckbox: 'I have read and agree to the ',
      privacyLink: 'Privacy Policy',
      privacySuffix:
        '. I consent to the confidential processing of my inquiry details to receive a response.',
      submitBtn: 'Submit inquiry sheet',
      securityNote: '🔒 Data protected under GDPR. Support email: info@lipedemamalaga.org',
    },
    success: {
      title: 'Inquiry sheet successfully generated!',
      desc: 'Your case sheet has been formatted and ready to be filed in our registry for personalized reply.',
      summaryHeading: 'Structured Registry Sheet:',
      openEmailBtn: 'Send via email to info@lipedemamalaga.org',
      copyBtn: 'Copy sheet to clipboard',
      copiedNotice: 'Sheet copied! You can paste it into any email or chat.',
      anotherBtn: 'Submit another inquiry',
    },
  },
  legal: {
    noticeTitle: 'Legal Notice',
    privacyTitle: 'Privacy Policy (GDPR)',
    cookiesTitle: 'Cookie Policy',
    disclaimerTitle: 'Medical Disclaimer',
    closeBtn: 'Close',
  },
  footer: {
    desc: 'Altruistic peer-support network for women living with lipedema. Warm, accessible and completely free guidance.',
    navHeading: 'Navigation',
    legalHeading: 'Legal & Medical Disclaimers',
    disclaimerNote:
      'Information published on this platform is purely educational and supportive. It does not replace professional medical diagnosis or clinical prescription.',
    rights: 'Lipedema Malaga · lipedemamalaga.org · All rights reserved.',
    backToTop: 'Back to top',
  },
};
