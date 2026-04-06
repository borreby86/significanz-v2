"use client";

import { ServicePageLayout } from "@/components/sections/ServicePage";

export default function KeynotesPage() {
  return (
    <ServicePageLayout
      title="Keynotes"
      description={'Inspiration with a point. Keynotes that give people energy, shared language, and a clear "what now." Great for kick-offs, leadership days, and change moments.'}
      serviceTypes={["1:Many"]}
      accentColor="#34323A"
      results={[
        "Fresh perspectives on leadership and collaboration",
        "Shared language around key organizational topics",
        "Higher engagement during kick-offs or change initiatives",
        "Practical ideas teams can apply immediately",
        "Stronger alignment around priorities and direction",
      ]}
      clientCase={[
        "As keynote speaker for Falck we have provided a series of 1\u20131.5 hour presentations focusing on Leading Across Generations. Based on a series of interviews within the organization we have tailormade the keynote to inform, provoke, entertain and last but not least open a room for discussing how Falck as a unique operator in the Danish market can succeed in attracting, retaining and developing across all generations at the labor market and across both paid employees and volunteers \u2013 which creates an extra dimension and sometimes challenge to managers.",
      ]}
    />
  );
}
