export interface NavSubItem {
  key: string;
  href: string;
}

export interface NavItem {
  key: string;
  href?: string;
  items?: NavSubItem[];
}

export type NavigationConfig = NavItem[];

export const navigationConfig: NavigationConfig = [
  {
    key: 'about',
    href: '/about',
    items: [
      { key: 'ourEdge', href: '/about#our-edge' },
      { key: 'valuesLogic', href: '/about#values-logic' },
      { key: 'enablingYou', href: '/about#enabling-you' },
    ],
  },
  {
    key: 'collaboration',
    href: '/collaborate',
    items: [
      { key: 'strategicAdvisory', href: '/collaborate#strategic-advisory' },
      { key: 'teamTransformation', href: '/team-transformation' },
      { key: 'leadershipDevelopment', href: '/leadership-development' },
      { key: 'executiveCoaching', href: '/executive-coaching' },
      { key: 'keynotes', href: '/keynotes' },
    ],
  },
  {
    key: 'gallery',
    href: '/gallery',
  },
  {
    key: 'clients',
    href: '/client-voices',
  },
  {
    key: 'contact',
    href: '/contact',
  },
];
