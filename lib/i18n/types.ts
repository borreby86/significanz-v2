export type Language = 'en' | 'da';

export interface TranslationKeys {
  // Navigation
  nav: {
    about: string;
    howWeWork: string;
    fourD: string;
    gallery: string;
    clientVoices: string;
    contact: string;
    collaborate: string;
    collaboration: string;
    ourServices: string;
    models: string;
    clients: string;
    // About dropdown items
    purpose: string;
    ourEdge: string;
    ourPhilosophy: string;
    // Collaboration dropdown items
    ourMethod: string;
    strategicAdvisory: string;
    teamTransformation: string;
    leadershipDevelopment: string;
    executiveCoaching: string;
    keynotes: string;
  };

  // Hero section
  hero: {
    title: string;
    subtitle: string;
    ctaBook: string;
    ctaServices: string;
  };

  // Services section
  services: {
    title: string;
    subtitle: string;
    readMore: string;
    items: {
      meaningfulAction: { title: string; description: string };
      actAbility: { title: string; description: string };
      executiveCoaching: { title: string; description: string };
      leadershipDevelopment: { title: string; description: string };
      keynotes: { title: string; description: string };
      teamTransformation: { title: string; description: string };
    };
  };

  // About section
  about: {
    title: string;
    description1: string;
    description2: string;
    imageAlt: string;
    readMore: string;
    credentials: string[];
  };

  // Testimonial
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };

  // CTA
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };

  // Outdoor Highlight
  outdoor: {
    label: string;
    title: string;
    description1: string;
    description2: string;
    readMore: string;
  };

  // Footer
  footer: {
    description: string;
    navigationTitle: string;
    copyright: string;
    builtBy: string;
    ctaLabel: string;
    ctaTitle: string;
    ctaButton: string;
    contactTitle: string;
    workWithUs: string;
    location: string;
    privacyPolicy: string;
    followUs: string;
  };

  // Contact Form
  form: {
    name: string;
    namePlaceholder: string;
    nameError: string;
    email: string;
    emailPlaceholder: string;
    emailError: string;
    company: string;
    companyPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    messageError: string;
    submit: string;
    submitting: string;
    thankYou: string;
    thankYouMessage: string;
    sendAnother: string;
  };

  // Contact Page
  contactPage: {
    title: string;
    subtitle: string;
    preferEmail: string;
    reachUs: string;
    getInTouch: string;
    sendMessage: string;
    startConversation: string;
    respondTime: string;
    directContact: string;
    learnAboutUs: string;
    exploreFramework: string;
  };

  // 4D Page
  fourDPage: {
    title: string;
    subtitle: string;
    ourMethod: string;
    methodDescription: string;
    keyOutcomes: string;
    phase: string;
    fourPhases: string;
    aboutUs: string;
    steps: {
      discover: { name: string; tagline: string; description: string; outcomes: string[] };
      define: { name: string; tagline: string; description: string; outcomes: string[] };
      design: { name: string; tagline: string; description: string; outcomes: string[] };
      deploy: { name: string; tagline: string; description: string; outcomes: string[] };
    };
    deliveryModels: string;
    deliveryModelsSubtitle: string;
    delivery: {
      individuals: { title: string; scale: string; description: string };
      teams: { title: string; scale: string; description: string };
      organizations: { title: string; scale: string; description: string };
    };
    instantOutcomes: string;
    instantOutcomesDesc: string;
    startDiscovery: string;
  };

  // Gallery Page
  galleryPage: {
    title: string;
    featuredAlt: string;
    photoAlt: string;
    caption: string;
  };

  // About Page
  aboutPage: {
    title: string;
    subtitle: string;
    label: string;
    heroTitle: string;
    heroDescription: string;
    scrollToExplore: string;
    imageAlt: string;
    aboutUsLabel: string;
    aboutUsTitle: string;
    aboutUsParagraph1: string;
    aboutUsParagraph2: string;
    aboutUsParagraph3: string;
    aboutUsParagraph4: string;
    aboutUsParagraph5: string;
    ourPurpose: string;
    purposeTitle: string;
    purposeDescription: string;
    ourPhilosophy: string;
    philosophyTitle: string;
    philosophyDescription: string;
    ability: string;
    willingness: string;
    meaningfulImpact: string;
    enablementDescription: string;
    quote: string;
    quoteAuthor: string;
    whatWeBelieve: string;
    ourLogicTitle: string;
    logic: {
      peopleContribute: { title: string; description: string; label: string };
      bothAnd: { title: string; description: string; label: string };
      integratedSelf: { title: string; description: string; label: string };
    };
    ourFramework: string;
    fivePsTitle: string;
    fivePsDescription: string;
    fivePs: {
      professional: { name: string; description: string };
      personal: { name: string; description: string };
      private: { name: string; description: string };
      purpose: { name: string; description: string };
      practice: { name: string; description: string };
    };
    ourEdge: string;
    differentiatorTitle: string;
    differentiators: {
      instantOutcomes: { title: string; description: string };
      creatingEnablement: { title: string; description: string };
      techForward: { title: string; description: string };
      trustedPartner: { title: string; description: string };
    };
    workingTogether: string;
    clientExperienceTitle: string;
    clientExperienceSubtitle: string;
    clientExperience: {
      evidenceBased: { title: string; description: string };
      visibleProgress: { title: string; description: string };
      safetyFirst: { title: string; description: string };
      coCreation: { title: string; description: string };
    };
    startConversation: string;
  };

  // How We Work Page
  howWeWorkPage: {
    title: string;
    subtitle: string;
    ourApproach: string;
    theModel: string;
    modelTitle: string;
    modelDescription: string;
    fourDimensions: string;
    dimensionsTitle: string;
    dimensionsSubtitle: string;
    readyToBegin: string;
    discoverPurpose: string;
    ctaDescription: string;
    startConversation: string;
    segments: {
      professional: { title: string; description: string };
      private: { title: string; description: string };
      personal: { title: string; description: string };
      practice: { title: string; description: string };
    };
  };

  // Client Voices Page
  clientVoicesPage: {
    title: string;
    subtitle: string;
    impactDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    testimonials: Array<{
      quote: string;
      author: string;
      role: string;
      company: string;
    }>;
  };

  // Homepage sections
  homepage: {
    whoAreWe: string;
    weAreCoaches: string;
    weCreateChange: string;
    beInspired: string;
    seeAllContent: string;
    framework: string;
    the4DModel: string;
    frameworkDescription: string;
    testimonials: string;
    clientVoices: string;
    testimonialsDescription: string;
    gallery: string;
    ourSessions: string;
    galleryDescription: string;
    getInTouch: string;
    contactDescription: string;
    contactUs: string;
    aboutUs: string;
    email: string;
    location: string;
    locationValue: string;
  };

  // Testimonials
  testimonials: {
    items: Array<{
      quote: string;
      author: string;
      role: string;
      company: string;
    }>;
  };

  // Cursor
  cursor: {
    view: string;
    explore: string;
  };

  // Our DNA Section (Homepage)
  ourDNA: {
    tagline: string;
    title: string;
    description1: string;
    description2: string;
    abilityTitle: string;
    abilityDescription: string;
    willingnessTitle: string;
    willingnessDescription: string;
    closingStatement: string;
  };

  // Collaborate Page
  collaboratePage: {
    title: string;
    subtitle: string;
    description: string;
    deliveryModel: string;
    individuals: {
      scale: string;
      title: string;
      description: string;
      services: string[];
    };
    teamsGroups: {
      scale: string;
      title: string;
      description: string;
      services: string[];
    };
    organizations: {
      scale: string;
      title: string;
      description: string;
      services: string[];
    };
    coherentEnablement: {
      scale: string;
      title: string;
      description: string;
    };
    ctaTitle: string;
    ctaButton: string;
  };

  // Under Construction Page
  underConstruction: {
    title: string;
    subtitle: string;
    description: string;
    backToHome: string;
    exploreCollaborate: string;
  };
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}
