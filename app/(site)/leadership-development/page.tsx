"use client";

import { UnderConstruction } from "@/components/sections/UnderConstruction";
import { useTranslation } from "@/lib/i18n";

export default function LeadershipDevelopmentPage() {
  const { t } = useTranslation();
  return <UnderConstruction title={t.services.items.leadershipDevelopment.title} />;
}
