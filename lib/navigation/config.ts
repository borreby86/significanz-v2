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
      { key: 'purpose', href: '/about#purpose' },
      { key: 'ourEdge', href: '/about#our-edge' },
      { key: 'ourPhilosophy', href: '/about#our-philosophy' },
    ],
  },
  {
    key: 'collaboration',
    href: '/collaborate',
    items: [
      { key: 'ourMethod', href: '/our-method' },
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
