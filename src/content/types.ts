export interface ContentSchema {
  nav: {
    menu: string;
    close: string;
    links: {
      home: string;
      whatIs: string;
      treatment: string;
      surgery: string;
      quiz: string;
      about: string;
      contact: string;
    };
    freeHelp: string;
    instagramLabel: string;
  };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pillars: {
      freeTitle: string;
      freeDesc: string;
      peersTitle: string;
      peersDesc: string;
      networkTitle: string;
      networkDesc: string;
    };
    polaroid1Title: string;
    polaroid1Desc: string;
    polaroid2Title: string;
    polaroid2Desc: string;
    badgeListen: string;
  };
  whatIs: {
    tag: string;
    title: string;
    subtitle: string;
    tabs: {
      definition: string;
      comparison: string;
      stages: string;
    };
    cieCode: string;
    defTitle: string;
    defP1: string;
    defP2: string;
    defCallout: string;
    symptoms: {
      painTitle: string;
      painDesc: string;
      bruisesTitle: string;
      bruisesDesc: string;
      dietTitle: string;
      dietDesc: string;
      cuffTitle: string;
      cuffDesc: string;
    };
    comparisonHeaders: {
      feature: string;
      lipedema: string;
      obesity: string;
      cellulite: string;
    };
    comparisonRows: Array<{
      feature: string;
      lipedema: string;
      obesity: string;
      cellulite: string;
    }>;
    stages: Array<{
      tag: string;
      title: string;
      desc: string;
      action: string;
    }>;
  };
  treatment: {
    tag: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    pillars: Array<{
      title: string;
      subtitle: string;
      desc: string;
      points: string[];
    }>;
    ctaCardTitle: string;
    ctaCardDesc: string;
    ctaCardBtn: string;
    calloutQuote: string;
    calloutText: string;
  };
  surgery: {
    tag: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    surgeryCardTag: string;
    surgeryCardSub: string;
    surgeryCardTitle: string;
    surgeryCardDesc: string;
    surgeryCardPoints: string[];
    surgeryCardWarning: string;
    postopCardTag: string;
    postopCardSub: string;
    postopCardTitle: string;
    postopCardDesc: string;
    postopCardPoints: string[];
    postopCardNote: string;
    guidanceBoxTitle: string;
    guidanceBoxDesc: string;
    guidanceBoxBtn: string;
  };
  quiz: {
    tag: string;
    title: string;
    subtitle: string;
    progressStep: string;
    progressComplete: string;
    resultHighTitle: string;
    resultHighDesc: string;
    resultMidTitle: string;
    resultMidDesc: string;
    resultLowTitle: string;
    resultLowDesc: string;
    disclaimer: string;
    btnContact: string;
    btnRetry: string;
    questions: Array<{
      id: number;
      question: string;
      description: string;
      options: Array<{
        label: string;
        score: number;
      }>;
    }>;
  };
  about: {
    tag: string;
    title: string;
    titleItalic: string;
    p1: string;
    p2: string;
    quote: string;
    btnInstagram: string;
    btnContact: string;
    platformInfo: string;
    pillars: Array<{
      title: string;
      desc: string;
    }>;
  };
  contact: {
    tag: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    cardPrivacyTitle: string;
    cardPrivacyDesc: string;
    cardFreeTitle: string;
    cardFreeDesc: string;
    directTitle: string;
    formTitle: string;
    formSubtitle: string;
    fields: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      city: string;
      cityPlaceholder: string;
      stage: string;
      stageOptions: string[];
      channel: string;
      channelOptions: string[];
      message: string;
      messagePlaceholder: string;
      privacyCheckbox: string;
      privacyLink: string;
      privacySuffix: string;
      submitBtn: string;
      securityNote: string;
    };
    success: {
      title: string;
      desc: string;
      summaryHeading: string;
      openEmailBtn: string;
      copyBtn: string;
      copiedNotice: string;
      anotherBtn: string;
    };
  };
  legal: {
    noticeTitle: string;
    privacyTitle: string;
    cookiesTitle: string;
    disclaimerTitle: string;
    closeBtn: string;
  };
  footer: {
    desc: string;
    navHeading: string;
    legalHeading: string;
    disclaimerNote: string;
    rights: string;
    backToTop: string;
  };
}
