"use client";

import { ServicePageLayout } from "@/components/sections/ServicePage";

export default function LeadershipDevelopmentPage() {
  return (
    <ServicePageLayout
      title="Leadership Development"
      description="Practical leadership development focused on real situations leaders face. We strengthen decision making, communication, and stakeholder management so leaders create clarity, direction, and sustainable performance."
      serviceTypes={["1:More", "1:1"]}
      accentColor="#A12F63"
      results={[
        "Stronger leadership capabilities across the organization",
        "More confident and consistent decision-making by leaders",
        "Clearer communication and direction for teams",
        "Better stakeholder collaboration and alignment",
        "Leaders who translate strategy into everyday actions",
        "Improved team performance and sustainable results",
      ]}
      clientCase={[
        "In a Danish based organization in the energy sector there was an urgent need for a further alignment around the corporate strategy. Managers needed to step up and engage more vigorously in the performance conversations with the employees.",
        "At the same time the leadership teams had an acute need for more psychological safety to push through the year ahead.",
        "We designed a 2.5-day training course and included pre and post self-evaluations and it was rolled out as a mandatory process over 8 months.",
      ]}
    />
  );
}
