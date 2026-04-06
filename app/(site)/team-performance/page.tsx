"use client";

import { ServicePageLayout } from "@/components/sections/ServicePage";

export default function TeamPerformancePage() {
  return (
    <ServicePageLayout
      title="Team Performance"
      description="We help teams align expectations, strengthen trust, and establish clear ways of working so they can move forward together."
      serviceTypes={["1:More"]}
      accentColor="#5A1735"
      results={[
        "Faster time-to-productivity after reorg/change",
        "Clear accountability and smoother decisions",
        "Higher engagement + lower friction and attrition risk",
        "Better cross-team collaboration and execution reliability",
      ]}
      clientCase={[
        "Working with a medium-large company approx. 5,000 employees we created a flow of 4 modules where a large portion of the teams operating most cross-functionally all participated.",
        "The focus was a progression from:\nModule 1: Defining the team purpose & Structure\nModule 2: Creating a sustainable psychological culture\nModule 3: Stakeholder management \u2013 Value chain insights and the delivery model of the team\nModule 4: Tech savviness and innovation \u2013 what\u2019s our role, wishes and aspirations",
      ]}
    />
  );
}
