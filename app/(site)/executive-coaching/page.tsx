"use client";

import { ServicePageLayout } from "@/components/sections/ServicePage";

export default function ExecutiveCoachingPage() {
  return (
    <ServicePageLayout
      title="Executive Coaching"
      description="A confidential space to think clearly and act with confidence. We work with your real situations – decisions, stakeholder conversations, dilemmas – and turn insight into practical next steps."
      serviceTypes={["1:1"]}
      accentColor="#BFA27A"
      results={[
        "Clearer and more confident leadership decisions",
        "Stronger stakeholder communication and alignment",
        "Better handling of complexity, pressure, and change",
        "Increased leadership ownership and accountability",
        "Leaders who translate strategy into action",
      ]}
      clientCase={[
        "Executive coaching is a service that all our clients use. And across the board it is pertinent that the coach displays business acumen, tech understanding and application and an in-depth human relational understanding of both the coachee as well as their main stakeholders.",
        "Executive coaching is in essence a personalized leadership development initiative. And as such our clients expect each coaching relationship to be 100% tailormade and always linked to the performance of the individual as well as the best possible outcome for the organization. When you have sessions with your coach you can expect full focus, radical feedback, and innovative solutions to seemingly paradoxical challenges and situations.",
      ]}
    />
  );
}
