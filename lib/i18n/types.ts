export type Language = 'en' | 'da';

export interface TranslationKeys {
  // Navigation
  nav: {
    about: string;
    fourD: string;
    gallery: string;
    clientVoices: string;
    contact: string;
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
      executiveCoaching: { title: string; description: string };
      outdoorCoaching: { title: string; description: string };
      teamCoaching: { title: string; description: string };
      leadershipDevelopment: { title: string; description: string };
      crossCulture: { title: string; description: string };
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
  };

  // 4D Page
  fourDPage: {
    title: string;
    subtitle: string;
    ourMethod: string;
    methodDescription: string;
    keyOutcomes: string;
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
  };

  // Client Voices Page
  clientVoicesPage: {
    title: string;
    subtitle: string;
  };
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}
